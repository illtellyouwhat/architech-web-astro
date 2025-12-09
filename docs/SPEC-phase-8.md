# PHASE 8 IMPLEMENTATION SPEC
## Dynamic Case Studies Architecture - Content Collections & Filtering

**Date**: December 9, 2024  
**Phase**: Phase 8 - Dynamic Case Studies  
**Scope**: Convert hardcoded case study pages to Markdown-based Content Collections with URL parameter filtering

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT_HEADER.md` completely
2. Skim all three lock files to understand constraints
3. Read this spec thoroughly
4. Reference lock files during implementation for exact copy/colors/patterns

---

## OVERVIEW

This phase converts 5 hardcoded case study pages into a dynamic Content Collections system. Case studies will be stored as Markdown files with frontmatter, rendered through a single dynamic template, and filterable by industry or service type via URL parameters.

**All copy comes from CONTENT-LOCK.md** - reference lines 528-690 for case studies Markdown structure.

---

## 1. CONTENT COLLECTIONS SETUP

### File: `src/content/config.ts` (create if doesn't exist)

### 1.1 Define Case Studies Collection Schema

**Purpose:** Define the structure and validation for case study frontmatter

**Schema fields:**
```typescript
import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    industry: z.array(z.string()), // Array to support multiple industries
    industryIcon: z.string(),
    solutionType: z.string().optional(), // Optional - not all cases have it yet
    solutionIcon: z.string().optional(),
    metric: z.string(),
    metricLabel: z.string(),
    timeline: z.string(),
    slug: z.string(),
    order: z.number(), // For default sorting
    featured: z.boolean(),
    summary: z.string(),
    relatedCases: z.array(z.string()), // Array of slugs
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
```

**Implementation notes:**
- `industry` is an array to handle "Publishing & Media" + "E-commerce" case
- `solutionType` and `solutionIcon` are optional (2 of 5 cases lack service type)
- `order` field controls default sort (lower number = higher priority)

---

## 2. MOVE MARKDOWN FILES INTO COLLECTION

### File: Create `/src/content/case-studies/` directory

### 2.1 Add Five Markdown Files

**User has already provided these files:**
- `clinical-trial-patient-matching.md`
- `manufacturing-production-scheduling.md`
- `ad-performance-reporting.md`
- `content-strategy-growth.md`
- `email-campaign-link-management.md`

**Action:** Move these 5 files from user uploads into `/src/content/case-studies/`

**Verify frontmatter:** Each file should have complete frontmatter matching schema above

---

## 3. DYNAMIC CASE STUDY DETAIL PAGE

### File: Create `/src/pages/case-studies/[slug].astro`

### 3.1 Replace Hardcoded Pages with Dynamic Template

**Current:** 5 individual `.astro` files in `/src/pages/case-studies/`
- `clinical-trial-patient-matching.astro`
- `manufacturing-production-scheduling.astro`
- `ad-performance-reporting.astro`
- `content-strategy-growth.astro`
- `email-campaign-link-management.astro`

**New:** Single dynamic template `/src/pages/case-studies/[slug].astro`

**Implementation approach:**

```astro
---
import { getCollection, getEntry } from 'astro:content';
import Layout from '@/layouts/Layout.astro';
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
const { data } = study;

// Get related case studies
const allCases = await getCollection('case-studies');
const relatedCases = data.relatedCases
  .map(slug => allCases.find(c => c.data.slug === slug))
  .filter(Boolean)
  .slice(0, 3);
---

<Layout title={`${data.title} | Case Studies | Automation Architech`} description={data.summary}>
  
  <!-- Hero Section -->
  <section class="bg-white py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb & Discovery Call Button -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <a href="/case-studies" class="text-gray-500 hover:text-gray-900 transition-colors">
          ← Back to Case Studies
        </a>
        <a href="/#contact"
           class="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white
                  transition-colors duration-200 hover:bg-gray-800 whitespace-nowrap">
          Book 15-Minute Discovery Call
        </a>
      </div>

      <!-- Tags (CLICKABLE) -->
      <div class="flex flex-wrap gap-4 mb-6">
        {/* Industry Tags - clickable for filtering */}
        {data.industry.map((ind) => (
          <a
            href={`/case-studies?industry=${encodeURIComponent(ind.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}`}
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <Icon name={data.industryIcon} class="h-4 w-4 text-gray-600" />
            {ind}
          </a>
        ))}

        {/* Solution Type Tag - clickable if exists */}
        {data.solutionType && (
          <a
            href={`/case-studies?service=${encodeURIComponent(data.solutionType.toLowerCase().replace(/ /g, '-'))}`}
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <Icon name={data.solutionIcon} class="h-4 w-4 text-gray-600" />
            {data.solutionType}
          </a>
        )}
      </div>

      <!-- Title -->
      <h1 class="text-5xl font-light text-gray-900 mb-6">
        {data.title}
      </h1>

      <!-- Primary Metric -->
      <div class="bg-gray-50 rounded-xl p-8 mb-8">
        <div class="text-6xl font-light text-gray-900 mb-2">
          {data.metric}
        </div>
        <div class="text-xl font-medium text-gray-600">
          {data.metricLabel}
        </div>
      </div>

      <!-- Quick Facts Grid (3 columns) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Industry
          </div>
          <div class="text-lg text-gray-900">
            {data.industry.join(', ')}
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Timeline
          </div>
          <div class="text-lg text-gray-900">
            {data.timeline}
          </div>
        </div>

        {data.solutionType && (
          <div>
            <div class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Solution Type
            </div>
            <div class="text-lg text-gray-900">
              {data.solutionType}
            </div>
          </div>
        )}
      </div>
    </div>
  </section>

  <!-- Main Content (Markdown rendered) -->
  <section class="bg-gray-50 py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose prose-lg max-w-none
                  prose-headings:font-light prose-headings:text-gray-900
                  prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12
                  prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                  prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-li:text-gray-600 prose-ul:space-y-2 prose-ul:mb-6
                  prose-strong:text-gray-900 prose-strong:font-semibold">
        <Content />
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="border-t border-gray-200 bg-gray-50 py-16">
    <div class="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
      <h2 class="mb-4 text-3xl font-light text-gray-900">
        Ready to See Similar Results?
      </h2>
      <p class="mb-8 text-lg text-gray-600">
        Tell us about your biggest bottleneck—we'll tell you if we can help.
      </p>
      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <a href="/#contact"
           class="rounded-lg bg-gray-900 px-8 py-4 font-medium text-white
                  transition-colors duration-200 hover:bg-gray-800">
          Book 15-Minute Discovery Call
        </a>
        <a href="/case-studies"
           class="rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-medium
                  text-gray-900 transition-colors duration-200 hover:bg-gray-50">
          View All Case Studies
        </a>
      </div>
    </div>
  </section>

  <!-- Related Case Studies -->
  {relatedCases.length > 0 && (
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-light text-gray-900 mb-12 text-center">
          Related Case Studies
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedCases.map((related) => (
            <a
              href={`/case-studies/${related.data.slug}`}
              class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <Icon name={related.data.industryIcon} class="h-12 w-12 text-gray-700 mb-4" />
              
              <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {related.data.title}
              </h3>

              <div class="text-3xl font-light text-gray-900 mb-1">
                {related.data.metric}
              </div>
              <div class="text-sm font-medium text-gray-500 mb-4">
                {related.data.metricLabel}
              </div>

              <div class="flex items-center text-gray-900 font-medium group-hover:text-gray-700 transition-colors">
                Read more
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )}
</Layout>
```

**Key implementation details:**
- Use `getCollection('case-studies')` to load all case studies
- Dynamic `getStaticPaths()` generates a page for each slug
- Render Markdown content with `<Content />` component
- Tags are clickable links with URL parameters
- Prose styling matches original case study design
- Related cases fetched by matching slugs

**Tag URL encoding:**
- Industry: "Publishing & Media" → `publishing-media`
- Service: "AI Decision Support" → `ai-decision-support`
- Lowercase, replace spaces and `&` with hyphens

---

## 4. UPDATE CASE STUDIES INDEX PAGE

### File: `/src/pages/case-studies/index.astro`

### 4.1 Add URL Parameter Filtering

**Current:** Displays all case studies in hardcoded order
**New:** Read URL params and reorder based on filter

**Implementation:**

```astro
---
import { getCollection } from 'astro:content';
import Layout from '@/layouts/Layout.astro';
import { Icon } from 'astro-icon/components';

// Get URL search params
const url = new URL(Astro.request.url);
const industryFilter = url.searchParams.get('industry');
const serviceFilter = url.searchParams.get('service');

// Load all case studies
let caseStudies = await getCollection('case-studies');

// Sort by order field (default)
caseStudies.sort((a, b) => a.data.order - b.data.order);

// Apply filtering (matching cases first, then others)
if (industryFilter) {
  const normalizedFilter = industryFilter.toLowerCase().replace(/-/g, ' ').replace(/publishing media/, 'publishing & media');
  
  caseStudies.sort((a, b) => {
    const aMatches = a.data.industry.some(ind => 
      ind.toLowerCase() === normalizedFilter
    );
    const bMatches = b.data.industry.some(ind => 
      ind.toLowerCase() === normalizedFilter
    );
    
    if (aMatches && !bMatches) return -1;
    if (!aMatches && bMatches) return 1;
    return a.data.order - b.data.order; // Maintain order for ties
  });
}

if (serviceFilter) {
  const normalizedFilter = serviceFilter.toLowerCase().replace(/-/g, ' ');
  
  caseStudies.sort((a, b) => {
    const aMatches = a.data.solutionType?.toLowerCase() === normalizedFilter;
    const bMatches = b.data.solutionType?.toLowerCase() === normalizedFilter;
    
    if (aMatches && !bMatches) return -1;
    if (!aMatches && bMatches) return 1;
    return a.data.order - b.data.order;
  });
}
---

<Layout
  title="Case Studies | Automation Architech"
  description="Real projects, real results. See how we've helped companies automate their critical processes."
>
  <!-- Hero Section -->
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">
        Case Studies
      </p>
      <h1 class="text-6xl font-light text-gray-900 mb-6">
        Real Projects. Real Results.
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        From 6-7x capacity increases to 87.5% time reductions—see how we've helped companies automate their most critical processes.
      </p>
      
      <!-- Top CTA -->
      <a href="/#contact"
         class="inline-block rounded-lg bg-gray-900 px-8 py-4 font-medium text-white
                transition-colors duration-200 hover:bg-gray-800">
        Book 15-Minute Discovery Call
      </a>
    </div>
  </section>

  <!-- Case Studies Grid -->
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div class="p-8">
              <!-- Industry Icon -->
              <Icon name={study.data.industryIcon} class="h-12 w-12 text-gray-700 mb-6" />

              <!-- Tags (CLICKABLE) -->
              <div class="flex flex-wrap gap-2 mb-4">
                {/* Industry Tags */}
                {study.data.industry.map((ind) => (
                  <a
                    href={`/case-studies?industry=${encodeURIComponent(ind.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}`}
                    class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Icon name={study.data.industryIcon} class="h-3 w-3" />
                    {ind}
                  </a>
                ))}
                
                {/* Service Type Tag (if exists) */}
                {study.data.solutionType && (
                  <a
                    href={`/case-studies?service=${encodeURIComponent(study.data.solutionType.toLowerCase().replace(/ /g, '-'))}`}
                    class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Icon name={study.data.solutionIcon} class="h-3 w-3" />
                    {study.data.solutionType}
                  </a>
                )}
              </div>

              <!-- Title -->
              <h3 class="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {study.data.title}
              </h3>

              <!-- Metric -->
              <div class="mb-4">
                <div class="text-4xl font-light text-gray-900 mb-1">
                  {study.data.metric}
                </div>
                <div class="text-sm font-medium text-gray-500">
                  {study.data.metricLabel}
                </div>
              </div>

              <!-- Summary -->
              <p class="text-gray-600 mb-6">
                {study.data.summary}
              </p>

              <!-- CTA Link (simple text link, not button) -->
              <a
                href={`/case-studies/${study.data.slug}`}
                class="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                See more
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- Bottom CTA Section -->
  <section class="border-t border-gray-200 bg-white py-16">
    <div class="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
      <h2 class="mb-4 text-3xl font-light text-gray-900">
        Ready to See Similar Results?
      </h2>
      <p class="mb-8 text-lg text-gray-600">
        Tell us about your biggest bottleneck—we'll tell you if we can help.
      </p>
      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <a href="/#contact"
           class="rounded-lg bg-gray-900 px-8 py-4 font-medium text-white
                  transition-colors duration-200 hover:bg-gray-800">
          Start a Conversation
        </a>
        <a href="/#"
           class="rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-medium
                  text-gray-900 transition-colors duration-200 hover:bg-gray-50">
          Explore Our Services
        </a>
      </div>
    </div>
  </section>
</Layout>
```

**Key implementation details:**
- Read `industryFilter` and `serviceFilter` from URL params
- Normalize filter values (replace hyphens with spaces, handle "publishing & media")
- Sort matching cases first, non-matching second (maintain order within groups)
- **Tags on cards are clickable** - consistent with detail pages
- Simple "See more →" text link (not button) per Phase 7 requirement

**Filter normalization examples:**
- URL: `?industry=publishing-media` → Match: "Publishing & Media"
- URL: `?service=ai-decision-support` → Match: "AI Decision Support"

---

## 5. UPDATE HOMEPAGE LINKS TO INCLUDE FILTERS

### File: `/src/pages/index.astro` (or wherever hero and industries sections are)

### 5.1 Service Cards - Add Filter Parameter

**Current:** "See case studies →" links to `/case-studies`
**New:** Add service filter parameter

**Update service card CTAs:**

```astro
<!-- Process Automation Card -->
<a href="/case-studies?service=process-automation" class="...">
  See case studies →
</a>

<!-- AI Decision Support Card -->
<a href="/case-studies?service=ai-decision-support" class="...">
  See case studies →
</a>

<!-- Multi-Platform Data Integration Card -->
<a href="/case-studies?service=multi-platform-data-integration" class="...">
  See case studies →
</a>
```

### 5.2 Industry Cards - Add Filter Parameter

**Update industry card CTAs:**

```astro
<!-- Legal Tech -->
<a href="/case-studies?industry=legal-tech" class="...">
  See case studies
</a>

<!-- Healthcare -->
<a href="/case-studies?industry=healthcare" class="...">
  See case studies
</a>

<!-- Publishing & Media -->
<a href="/case-studies?industry=publishing-media" class="...">
  See case studies
</a>

<!-- E-commerce -->
<a href="/case-studies?industry=e-commerce" class="...">
  See case studies
</a>

<!-- Education Technology -->
<a href="/case-studies?industry=education-technology" class="...">
  See case studies
</a>

<!-- Manufacturing -->
<a href="/case-studies?industry=manufacturing" class="...">
  See case studies
</a>
```

**Note:** Industry names should match what's in case study frontmatter (normalized with hyphens)

---

## 6. DELETE OLD HARDCODED CASE STUDY PAGES

### Files to Delete:

```
/src/pages/case-studies/clinical-trial-patient-matching.astro
/src/pages/case-studies/manufacturing-production-scheduling.astro
/src/pages/case-studies/ad-performance-reporting.astro
/src/pages/case-studies/content-strategy-growth.astro
/src/pages/case-studies/email-campaign-link-management.astro
```

**CRITICAL:** Do NOT delete `/src/pages/case-studies/index.astro` - this is the index page we updated in Section 4.

**After deletion:**
```
/src/pages/case-studies/
├── index.astro          (kept - updated with filtering)
└── [slug].astro         (new - dynamic template)
```

---

## 7. TESTING CHECKLIST

After implementation, verify:

### URL Parameter Filtering
- [ ] `/case-studies` shows all cases in default order (by `order` field)
- [ ] `/case-studies?industry=healthcare` shows Healthcare case first
- [ ] `/case-studies?industry=manufacturing` shows Manufacturing case first
- [ ] `/case-studies?industry=publishing-media` shows BOTH Publishing & Media AND E-commerce cases first
- [ ] `/case-studies?service=ai-decision-support` shows AI Decision Support cases first
- [ ] `/case-studies?service=process-automation` shows Process Automation cases first
- [ ] Invalid filter values don't break the page (just show all cases)

### Tag Clicking Behavior
- [ ] Clicking industry tag on case study card → filters by that industry
- [ ] Clicking service tag on case study card → filters by that service
- [ ] Clicking industry tag on detail page → filters by that industry
- [ ] Clicking service tag on detail page → filters by that service
- [ ] Tags have hover states (bg-gray-200)

### Homepage Links
- [ ] Service card "See case studies →" links include `?service=` parameter
- [ ] Industry card "See case studies" links include `?industry=` parameter
- [ ] Parameters match case study frontmatter values (normalized)

### Dynamic Routing
- [ ] All 5 case study slugs generate individual pages
- [ ] Each detail page renders Markdown content correctly
- [ ] Related cases section shows 3 related studies
- [ ] Prose styling matches original design
- [ ] Breadcrumb "← Back to Case Studies" works

### Content Collections
- [ ] `npm run build` succeeds without errors
- [ ] All 5 Markdown files validate against schema
- [ ] Frontmatter fields accessible in templates
- [ ] Markdown content renders with proper HTML

### Multi-Industry Handling
- [ ] Email Campaign Link Management shows under "Publishing & Media" filter
- [ ] Email Campaign Link Management shows under "E-commerce" filter
- [ ] Card displays both industry tags correctly

### Accessibility
- [ ] Tags are keyboard navigable
- [ ] Links have proper focus states
- [ ] Heading hierarchy is correct (h1 → h2 → h3)

---

## 8. NOTES FOR IMPLEMENTER

### Content Collections Setup

If `src/content/config.ts` doesn't exist, create it with the full schema from Section 1.1.

Astro will automatically:
- Validate frontmatter against schema
- Generate TypeScript types
- Build static paths for `[slug].astro`

### Markdown Rendering

The `<Content />` component is provided by Astro when you call `await study.render()`. It renders the Markdown body as HTML.

Apply Tailwind's prose plugin for styling:
```
prose prose-lg max-w-none
prose-headings:font-light prose-headings:text-gray-900
prose-h2:text-4xl prose-h3:text-2xl
prose-p:text-gray-600 prose-li:text-gray-600
```

### Filter Normalization

URL parameters use hyphens, frontmatter uses spaces:
- URL: `publishing-media` ↔ Frontmatter: `Publishing & Media`
- URL: `ai-decision-support` ↔ Frontmatter: `AI Decision Support`

Normalize in both directions for matching.

### Multiple Industries

Email Campaign Link Management has:
```yaml
industry: ["Publishing & Media", "E-commerce"]
```

When filtering, check if **any** industry in the array matches:
```javascript
a.data.industry.some(ind => ind.toLowerCase() === normalizedFilter)
```

### Missing Service Types

2 of 5 case studies don't have `solutionType` yet (awaiting client input):
- Data-Driven Content Strategy
- Email Campaign Link Management

Use optional chaining when rendering service tags:
```astro
{study.data.solutionType && (
  <a href={`/case-studies?service=...`}>
    {study.data.solutionType}
  </a>
)}
```

### Existing Functionality to Preserve

- Top CTA on case studies index (already implemented in Phase 7)
- Lucide icons throughout (already implemented in Phase 7)
- Breadcrumb navigation
- Related cases section at bottom of detail pages
- CTA sections at bottom of both index and detail pages

---

## 9. REFERENCE FILES

**All content:** `/mnt/project/CONTENT-LOCK.md` (lines 528-690 for case studies)
**All styling:** `/mnt/project/DESIGN-SYSTEM-LOCK.md`
**Architecture rules:** `/mnt/project/LOCK-architecture.md`

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

**End of Phase 8 Spec**
