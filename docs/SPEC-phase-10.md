# PHASE 10 IMPLEMENTATION SPEC
## Technical Fixes - Filtering & Formatting

**Date**: December 11, 2025
**Phase**: Phase 10 - Technical Fixes
**Scope**: Fix case study filtering (client-side) and restore detail page prose styling

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT_HEADER.md` completely
2. Review LOCK-ARCHITECTURE-phase10.md (new client-side filtering pattern)
3. Review LOCK-DESIGN-SYSTEM.md lines 428-537 (prose styling for Markdown)
4. Reference existing LOCK-content.md for case study data structure

---

## OVERVIEW

This phase fixes two technical issues discovered in Phase 9:

**Issue 1**: Case study filtering doesn't work (URL changes but cards don't reorder)
**Issue 2**: Case study detail pages lost Markdown formatting (plain unstyled text)

Both issues are straightforward fixes:
1. Convert filtering to client-side React island
2. Restore prose classes to Content wrapper

**Estimated implementation time**: 1-2 hours

---

## 1. CASE STUDY FILTERING FIX

### Problem Summary

**Current behavior:**
- User clicks "Healthcare" tag on homepage
- URL changes: `/case-studies` → `/case-studies?industry=healthcare`
- Cards do NOT reorder (Mixed Analytics and Vextras still appear first)
- No console errors

**Root cause:**
- Astro generates static HTML at build time
- Filtering logic runs server-side during build (once)
- Clicking tags changes URL but doesn't re-run Astro component
- Static sites can't re-render on URL parameter changes

**Solution:**
Convert to client-side filtering with React island that reads URL params and filters in the browser.

---

### 1.1 Create React Island for Filtering

**File**: `/src/components/CaseStudiesGrid.jsx` (new file)

**Purpose**: Client-side filtering logic with URL parameter watching

**Implementation**:

```jsx
import { useState, useEffect } from 'react';

export default function CaseStudiesGrid({ caseStudies }) {
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [activeFilter, setActiveFilter] = useState(null);
  
  // Filter function
  const updateFilter = () => {
    const params = new URLSearchParams(window.location.search);
    const industryFilter = params.get('industry');
    const serviceFilter = params.get('service');
    
    // No filter - show all in default order
    if (!industryFilter && !serviceFilter) {
      const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
      setFilteredStudies(sorted);
      setActiveFilter(null);
      return;
    }
    
    // Apply filter and sort: matching first, others after
    const filtered = [...caseStudies].sort((a, b) => {
      // Check if case study matches filter
      const aMatches = industryFilter
        ? a.industry.some(ind => normalizeString(ind) === normalizeString(industryFilter))
        : normalizeString(a.solutionType) === normalizeString(serviceFilter);
      
      const bMatches = industryFilter
        ? b.industry.some(ind => normalizeString(ind) === normalizeString(industryFilter))
        : normalizeString(b.solutionType) === normalizeString(serviceFilter);
      
      // Sort: matching cases first
      if (aMatches && !bMatches) return -1;
      if (!aMatches && bMatches) return 1;
      
      // Within each group, maintain original order
      return a.order - b.order;
    });
    
    setFilteredStudies(filtered);
    setActiveFilter(industryFilter || serviceFilter);
  };
  
  // Run on mount and when URL changes
  useEffect(() => {
    updateFilter();
    
    // Listen for back/forward button
    window.addEventListener('popstate', updateFilter);
    
    return () => window.removeEventListener('popstate', updateFilter);
  }, [caseStudies]);
  
  return (
    <>
      {/* Optional: Show active filter */}
      {activeFilter && (
        <div className="mb-8 text-sm text-gray-600">
          Filtered by: <span className="font-semibold">{activeFilter}</span>
        </div>
      )}
      
      {/* Case study grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </>
  );
}

// Normalize strings for URL comparison
function normalizeString(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
}

// Case study card component (can be separate file or inline)
function CaseStudyCard({ study }) {
  return (
    <a
      href={`/case-studies/${study.slug}`}
      className="block bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Metric */}
      <div className="text-4xl font-light text-gray-900 mb-2">
        {study.metric}
      </div>
      <div className="text-sm font-semibold text-gray-600 mb-4">
        {study.metricLabel}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
        {study.title}
      </h3>
      
      {/* Summary */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {study.summary}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {/* Industry tag */}
        <span
          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600"
          onClick={(e) => {
            e.preventDefault();
            const normalized = normalizeString(study.industry[0]);
            window.location.href = `/case-studies?industry=${normalized}`;
          }}
        >
          {study.industry[0]}
        </span>
        
        {/* Solution type tag (if exists) */}
        {study.solutionType && (
          <span
            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              const normalized = normalizeString(study.solutionType);
              window.location.href = `/case-studies?service=${normalized}`;
            }}
          >
            {study.solutionType}
          </span>
        )}
      </div>
      
      {/* CTA */}
      <div className="mt-4 text-sm text-gray-700 font-medium">
        See more →
      </div>
    </a>
  );
}
```

**Key implementation details:**

1. **Props validation**: Receives `caseStudies` array with all case study data
2. **URL reading**: Uses `URLSearchParams` to read `?industry=` or `?service=`
3. **String normalization**: Compares normalized strings (`"Publishing & Media"` → `"publishing-media"`)
4. **Array matching**: Uses `.some()` for array fields like `industry: ["Healthcare"]`
5. **Sorting logic**: Matching cases first (-1), non-matching after (1), maintain order within groups
6. **URL watching**: Listens for `popstate` events (back/forward button)
7. **Clickable tags**: Tags update URL on click

---

### 1.2 Update Case Studies Index Page

**File**: `/src/pages/case-studies/index.astro` (or wherever the index page is)

**Current structure** (likely):
```astro
---
import { getCollection } from 'astro:content';
import Layout from '../layouts/Layout.astro';

const caseStudies = await getCollection('case-studies');

// Server-side filtering (doesn't work for static sites)
const url = new URL(Astro.request.url);
const filter = url.searchParams.get('industry');
if (filter) {
  caseStudies.sort(/* ... */);  // âŒ This runs only at build time
}
---

<Layout title="Case Studies">
  <!-- Static grid rendering -->
  <div class="grid grid-cols-3 gap-8">
    {caseStudies.map(study => (
      <CaseStudyCard study={study} />
    ))}
  </div>
</Layout>
```

**New structure**:
```astro
---
import { getCollection } from 'astro:content';
import Layout from '../layouts/Layout.astro';
import CaseStudiesGrid from '../components/CaseStudiesGrid.jsx';

// Fetch all case studies at build time
const caseStudies = await getCollection('case-studies');

// Convert to plain JavaScript objects (strip Astro metadata)
const caseStudiesData = caseStudies.map(study => ({
  title: study.data.title,
  slug: study.data.slug,
  industry: study.data.industry, // Array
  solutionType: study.data.solutionType, // String
  metric: study.data.metric,
  metricLabel: study.data.metricLabel,
  summary: study.data.summary,
  order: study.data.order,
  industryIcon: study.data.industryIcon,
  solutionIcon: study.data.solutionIcon,
}));
---

<Layout title="Case Studies">
  <section class="py-20">
    <div class="container mx-auto px-4 max-w-7xl">
      {/* Page header */}
      <div class="text-center mb-12">
        <p class="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
          Case Studies
        </p>
        <h1 class="text-5xl font-light text-gray-900 mb-4">
          Real Projects. Real Results.
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          From 6-7x capacity increases to 87.5% time reductionsâ€"see how we've helped 
          companies automate their most critical processes.
        </p>
      </div>
      
      {/* Top CTA */}
      <div class="text-center mb-12">
        <a 
          href="/#contact" 
          class="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Book 15-Minute Discovery Call
        </a>
      </div>
      
      {/* React island handles filtering */}
      <CaseStudiesGrid caseStudies={caseStudiesData} client:load />
      
      {/* Bottom CTA section */}
      <div class="mt-20 text-center bg-gray-50 border border-gray-100 rounded-xl p-12">
        <h2 class="text-3xl font-light text-gray-900 mb-4">
          Ready to See Similar Results?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Tell us about your biggest bottleneckâ€"we'll tell you if we can help.
        </p>
        <div class="flex gap-4 justify-center">
          <a 
            href="/#contact"
            class="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Start a Conversation
          </a>
          <a 
            href="/#"
            class="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-normal hover:bg-gray-50 transition-colors duration-200"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  </section>
</Layout>
```

**Critical changes:**
1. **Remove server-side filtering logic** (the URL param reading in Astro frontmatter)
2. **Convert case studies to plain objects** (strip Astro-specific metadata)
3. **Pass to React island** with `client:load` directive
4. **Island handles all filtering** (client-side, in browser)

---

### 1.3 Verify Tag Click Behavior

**Tags on homepage service/industry cards** should already be setting URL params correctly. If not, ensure they look like:

```astro
<!-- Service card -->
<a href="/case-studies?service=process-automation" class="...">
  See automation case studies →
</a>

<!-- Industry card -->
<a href="/case-studies?industry=healthcare" class="...">
  See Healthcare case studies
</a>
```

**Normalization must match** what the React island expects:
- "Process Automation" → `process-automation`
- "Publishing & Media" → `publishing-media`
- "AI Decision Support" → `ai-decision-support`

---

## 2. CASE STUDY DETAIL PAGE FORMATTING FIX

### Problem Summary

**Current behavior:**
- Individual case study pages (e.g., `/case-studies/manufacturing-production-scheduling`) show plain, unstyled text
- All text appears same size and color
- No spacing between sections
- Markdown headings not styled

**Root cause:**
- During Phase 9 implementation, the prose classes were removed from the `<Content />` wrapper
- Tailwind's typography plugin requires specific prose classes to style Markdown

**Solution:**
Restore the prose classes from LOCK-DESIGN-SYSTEM.md to the Content wrapper.

---

### 2.1 Locate the Detail Page Template

**File**: `/src/pages/case-studies/[slug].astro` (dynamic template for case studies)

**Current structure** (likely):
```astro
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const caseStudies = await getCollection('case-studies');
  return caseStudies.map((study) => ({
    params: { slug: study.data.slug },
    props: { study },
  }));
}

const { study } = Astro.props;
const { Content } = await study.render();
---

<Layout title={study.data.title}>
  <article>
    <h1>{study.data.title}</h1>
    
    {/* This is probably missing prose classes */}
    <Content />  {/* âŒ Unstyled */}
  </article>
</Layout>
```

---

### 2.2 Add Prose Classes to Content Wrapper

**Replace the unstyled `<Content />` with:**

```astro
<div class="prose prose-lg max-w-none
            prose-headings:font-light prose-headings:text-gray-900
            prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
            prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-gray-600 prose-ul:space-y-2 prose-ul:mb-6 prose-ol:space-y-2 prose-ol:mb-6
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-em:text-gray-600 prose-em:italic">
  <Content />
</div>
```

**These classes come from LOCK-DESIGN-SYSTEM.md lines 432-498** (already documented, just restore them).

---

### 2.3 Complete Detail Page Template Example

**Full recommended structure:**

```astro
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import { Icon } from 'astro-icon/components';

export async function getStaticPaths() {
  const caseStudies = await getCollection('case-studies');
  return caseStudies.map((study) => ({
    params: { slug: study.data.slug },
    props: { study },
  }));
}

const { study } = Astro.props;
const { Content } = await study.render();
---

<Layout title={study.data.title}>
  <article class="py-20">
    <div class="container mx-auto px-4 max-w-4xl">
      {/* Back link */}
      <a 
        href="/case-studies" 
        class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        ← Back to Case Studies
      </a>
      
      {/* Hero section */}
      <div class="mb-12">
        <h1 class="text-5xl font-light text-gray-900 mb-6">
          {study.data.title}
        </h1>
        
        {/* Tags */}
        <div class="flex flex-wrap gap-3 mb-6">
          {/* Industry tags */}
          {study.data.industry.map((ind) => (
            <a
              href={`/case-studies?industry=${ind.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
              class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <Icon name={study.data.industryIcon} class="h-4 w-4 text-gray-600" />
              {ind}
            </a>
          ))}
          
          {/* Solution type tag */}
          {study.data.solutionType && (
            <a
              href={`/case-studies?service=${study.data.solutionType.toLowerCase().replace(/\s+/g, '-')}`}
              class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <Icon name={study.data.solutionIcon} class="h-4 w-4 text-gray-600" />
              {study.data.solutionType}
            </a>
          )}
        </div>
        
        {/* Quick facts */}
        <div class="grid grid-cols-3 gap-6 bg-gray-50 border border-gray-100 rounded-xl p-6">
          <div>
            <div class="text-4xl font-light text-gray-900 mb-1">
              {study.data.metric}
            </div>
            <div class="text-sm font-semibold text-gray-600">
              {study.data.metricLabel}
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-gray-600 mb-1">
              Industry
            </div>
            <div class="text-base text-gray-900">
              {study.data.industry.join(', ')}
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-gray-600 mb-1">
              Timeline
            </div>
            <div class="text-base text-gray-900">
              {study.data.timeline}
            </div>
          </div>
        </div>
      </div>
      
      {/* Top CTA */}
      <div class="text-center mb-12">
        <a 
          href="/#contact" 
          class="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Book 15-Minute Discovery Call
        </a>
      </div>
      
      {/* Markdown content with prose styling */}
      <div class="prose prose-lg max-w-none
                  prose-headings:font-light prose-headings:text-gray-900
                  prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12
                  prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                  prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-li:text-gray-600 prose-ul:space-y-2 prose-ul:mb-6 prose-ol:space-y-2 prose-ol:mb-6
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-em:text-gray-600 prose-em:italic">
        <Content />
      </div>
      
      {/* Related cases section (if relatedCases exists) */}
      {study.data.relatedCases && study.data.relatedCases.length > 0 && (
        <div class="mt-20">
          <h2 class="text-3xl font-light text-gray-900 mb-8">Related Case Studies</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Render related cases here */}
          </div>
        </div>
      )}
      
      {/* Bottom CTA */}
      <div class="mt-20 text-center bg-gray-50 border border-gray-100 rounded-xl p-12">
        <h2 class="text-3xl font-light text-gray-900 mb-4">
          Ready to See Similar Results?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Tell us about your biggest bottleneckâ€"we'll tell you if we can help.
        </p>
        <a 
          href="/#contact"
          class="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Start a Conversation
        </a>
      </div>
    </div>
  </article>
</Layout>
```

**Key points:**
1. **Prose classes wrap `<Content />`** - This is the critical fix
2. **Tags are clickable** and link to filtered case studies
3. **CTAs at top and bottom** for conversion optimization
4. **Related cases section** (optional, render if data exists)

---

## 3. VERIFICATION CHECKLIST

After implementation, test thoroughly:

### Case Study Filtering
- [ ] Go to `/case-studies` - all 5 cases visible in default order
- [ ] Click "Healthcare" tag - Vextras case study appears FIRST
- [ ] Click "Process Automation" tag - Manufacturing + Email Campaign appear FIRST, others after
- [ ] Click "Publishing & Media" tag - Ad Reporting + Email Campaign appear FIRST
- [ ] URL changes correctly for each filter
- [ ] Back button works (previous filter re-applied)
- [ ] Forward button works (next filter re-applied)
- [ ] Direct URL access works: `/case-studies?service=ai-decision-support`
- [ ] Removing filter (click logo, navigate away) shows all cases again
- [ ] No console errors
- [ ] Filtering feels instant (<50ms)

### Case Study Detail Pages
- [ ] All H2 headings (##) large, light weight, gray-900
- [ ] All H3 headings (###) medium, semibold, gray-900
- [ ] Paragraphs are gray-600 with relaxed line height
- [ ] Proper spacing between paragraphs (mb-6)
- [ ] Lists have bullet points with proper spacing
- [ ] Strong text (bold) is gray-900 and semibold
- [ ] Proper margins: H2 has mt-12, H3 has mt-8, etc.
- [ ] No sections run together (proper visual hierarchy)
- [ ] All 5 case study pages formatted correctly

### Cross-Browser Testing
- [ ] Chrome/Edge (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Performance
- [ ] Case studies index page loads <2s
- [ ] Detail pages load <2s
- [ ] Filtering happens instantly (no perceived delay)
- [ ] No layout shift on filter change
- [ ] No JavaScript errors in console

---

## 4. TROUBLESHOOTING

### If Filtering Still Doesn't Work

**Check:**
1. Is the React island hydrating? (Add `console.log('Grid mounted')` in useEffect)
2. Are URL params being read? (Log `window.location.search`)
3. Are case studies passed as props? (Log `caseStudies` in component)
4. Is normalization matching? (Log both sides of comparison)

**Common issues:**
- `client:load` not specified (island never hydrates)
- Case studies not passed as props (empty array)
- Normalization mismatch (filter vs data format differs)
- Array vs string field confusion (industry is array, solutionType is string)

### If Prose Styling Still Broken

**Check:**
1. Are prose classes present in HTML? (Inspect element in DevTools)
2. Is Tailwind typography plugin installed? (Check `tailwind.config.cjs`)
3. Are classes being purged? (Check build output)
4. Is Content component rendering? (Should see Markdown converted to HTML)

**Common issues:**
- Typography plugin not installed: `npm install -D @tailwindcss/typography`
- Plugin not added to config: `plugins: [require('@tailwindcss/typography')]`
- Classes purged: Add `content: ['./src/**/*.{astro,jsx,tsx}']` to tailwind config
- Wrong Content wrapper: Prose classes must wrap `<Content />`, not be on it

---

## 5. FILES TO CREATE/MODIFY

**New files:**
- `/src/components/CaseStudiesGrid.jsx` - React island for filtering

**Modified files:**
- `/src/pages/case-studies/index.astro` - Pass data to React island
- `/src/pages/case-studies/[slug].astro` - Add prose classes to Content wrapper

**No changes needed:**
- Case study `.md` files (content is fine)
- Frontmatter schemas (structure is correct)
- Homepage tag links (should already be working)
- Navigation (no changes)

---

## 6. PERFORMANCE NOTES

**Data transfer:**
- 5 case studies: ~50-100KB JSON data
- Passed as props to React island at page load
- No additional network requests for filtering

**Filtering speed:**
- Array.sort() on 5 items: <1ms
- Re-render 5 cards: ~10-20ms
- Total: <25ms (imperceptible to user)

**This approach scales to ~100 case studies** before needing server-side solutions.

---

## 7. REFERENCE FILES

**Filtering pattern:** LOCK-ARCHITECTURE-phase10.md (complete client-side filtering documentation)
**Prose styling:** LOCK-DESIGN-SYSTEM.md lines 428-537 (typography styling for Markdown)
**Case study structure:** LOCK-content.md Case Studies section (frontmatter schema)

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

**End of Phase 10 Spec**
