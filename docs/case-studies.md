# Case Studies Rendering Issue - Diagnostic Reference

**Current Commit**: `0d50942187cb63d85b0b67fd7a4aa7ac380b94ff`
**Date**: 2025-12-11
**Issue**: Markdown body content not rendering with proper headlines, fonts, point sizes, and spacing

---

## Problem Summary

The case study detail pages are experiencing rendering issues:
- ✅ **Working**: Metadata section (hero, tags, metrics, quick facts)
- ❌ **Broken**: Markdown body content (headings, fonts, spacing incorrect)

The `<Content />` component is rendering the markdown but prose styling classes are not being applied correctly.

---

## File Locations

### Content Source Files
All case studies are stored as markdown with frontmatter:
```
/src/content/case-studies/
├── email-campaign-link-management.md
├── content-strategy-growth.md
├── ad-performance-reporting.md
├── manufacturing-production-scheduling.md
└── clinical-trial-patient-matching.md
```

### Page Templates
```
/src/pages/case-studies/
├── index.astro          # Listing page with filtering
└── [slug].astro         # Detail page template (ISSUE HERE)
```

### Schema Definition
```
/src/content/config.ts   # Defines case study frontmatter schema
```

---

## Current Implementation

### 1. Content Collection Schema (`/src/content/config.ts`)

```typescript
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    industry: z.array(z.string()),
    industryIcon: z.string(),
    solutionType: z.string().optional(),
    solutionIcon: z.string().optional(),
    metric: z.string(),
    metricLabel: z.string(),
    timeline: z.string(),
    slug: z.string().optional(),
    order: z.number(),
    featured: z.boolean(),
    summary: z.string(),
    relatedCases: z.array(z.string()),
  }),
});
```

**Lines**: 17-35

---

### 2. Detail Page Template (`/src/pages/case-studies/[slug].astro`)

#### Static Path Generation (Lines 6-12)
```typescript
export async function getStaticPaths() {
  const caseStudies = await getCollection('case-studies');
  return caseStudies.map((study) => ({
    params: { slug: study.slug },
    props: { study },
  }));
}
```

#### Content Rendering Setup (Lines 14-16)
```typescript
const { study } = Astro.props;
const { Content } = await study.render();
const { data } = study;
```

#### **PROBLEM AREA**: Markdown Body Section (Lines 118-133)

```astro
<!-- Main Content (Markdown rendered) -->
<section class="bg-gray-50 py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
  </div>
</section>
```

**This section should apply Tailwind Typography (`@tailwindcss/typography`) prose classes to style the rendered markdown.**

---

## Example Markdown Content Structure

From `/src/content/case-studies/email-campaign-link-management.md`:

```markdown
---
title: "Streamlining Email Campaign Link Management..."
company: "E-commerce Company"
industry: ["Publishing & Media", "E-commerce"]
# ... more frontmatter ...
---

## Problem

An e-commerce company with approximately 100 employees was running 2-4 email campaigns per day...

### Critical Pain Points

- Manual copy-paste of links between Notion and Coda systems
- High error rate: 1-4 bad links per month in sent campaigns
- Each link error cost $1-5K in customer refunds

## Solution

### Notion + Coda Integration with Automated Link Population

We built a fully automated integration that synced campaign links...

**Implementation Timeline**

The project was completed in 2 months:

- **Week 1-2:** Workflow analysis and requirements gathering
- **Week 3-4:** Notion database restructuring

## Impact

### Error Elimination

- Reduced link errors from 1-4 per month to zero
- Eliminated $1-5K monthly costs from customer refunds
```

**Expected rendering**:
- `## Problem` → Large heading (text-4xl, font-light, mb-6, mt-12)
- `### Critical Pain Points` → Medium heading (text-2xl, mb-4, mt-8)
- Bullet lists → Proper spacing, gray-600 text
- Paragraphs → gray-600 text, relaxed leading, mb-6

---

## Styling Configuration

### Global CSS (`/src/styles/global.css`)

Lines 1-6: Font import and Tailwind directives
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Lines 95-97: Body font application
```css
body {
  @apply bg-background text-foreground font-inter antialiased;
}
```

**Note**: No custom prose styles defined in global.css. Relying entirely on Tailwind Typography plugin classes applied inline in the template.

---

## Recent Changes (Commit `0d50942`)

From `git diff HEAD~1 HEAD`:

```diff
--- a/src/pages/case-studies/[slug].astro
+++ b/src/pages/case-studies/[slug].astro
@@ -124,8 +124,9 @@ const relatedCases = data.relatedCases
                   prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                   prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
                   prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
-                  prose-li:text-gray-600 prose-ul:space-y-2 prose-ul:mb-6
-                  prose-strong:text-gray-900 prose-strong:font-semibold">
+                  prose-li:text-gray-600 prose-ul:space-y-2 prose-ul:mb-6 prose-ol:space-y-2 prose-ol:mb-6
+                  prose-strong:text-gray-900 prose-strong:font-semibold
+                  prose-em:text-gray-600 prose-em:italic">
         <Content />
       </div>
```

**Change**: Added ordered list spacing and emphasis styling. This was meant to fix detail page prose styling but may not be working.

---

## Diagnostic Questions for Claude Web UI

### 1. Tailwind Typography Plugin Configuration
**Question**: Is `@tailwindcss/typography` properly installed and configured in `tailwind.config.cjs`?

**Required checks**:
- [ ] Plugin listed in `plugins: [require('@tailwindcss/typography')]`
- [ ] Package installed: `npm list @tailwindcss/typography`
- [ ] Build process includes Tailwind processing

**Why this matters**: The `prose` class won't work without the Typography plugin.

---

### 2. Prose Class Syntax
**Question**: Are the Tailwind prose modifier classes using correct syntax?

**Current syntax** (lines 121-129 of `[slug].astro`):
```
prose-headings:font-light
prose-h2:text-4xl
prose-p:text-gray-600
```

**Is this correct?** Some Tailwind versions require different prose modifier syntax:
- Older: `prose-headings:font-light`
- Newer: `prose-headings-font-light` (dash instead of colon)

**Needs verification against project's Tailwind version**.

---

### 3. CSS Specificity & Conflicts
**Question**: Are global styles or other utility classes overriding the prose styles?

**Potential conflicts**:
- `global.css` body styles (line 95-97) may be too broad
- Other layout wrapper classes may have higher specificity
- Astro component scoping may interfere

**Test**: Inspect rendered HTML in browser DevTools - are prose classes present in DOM? Are they being overridden?

---

### 4. Content Rendering Method
**Question**: Is the `<Content />` component outputting correctly?

**Current method** (lines 14-15, 130):
```typescript
const { Content } = await study.render();
// ...
<Content />
```

**Verify**:
- [ ] Does `study.render()` return correct markdown-to-HTML?
- [ ] Is there a wrapper element interfering with prose styles?
- [ ] Check Astro version - rendering method may have changed

---

### 5. Build vs Dev Mode
**Question**: Does the issue occur in both `npm run dev` and production build?

**Test scenarios**:
- [ ] Development server (`npm run dev`)
- [ ] Production build (`npm run build && npm run preview`)
- [ ] Deployed production site

**Why**: Astro's rendering may differ between dev and build. CSS purging in production can remove unused classes.

---

### 6. Class Purging / Safelist
**Question**: Is Tailwind purging the prose modifier classes during build?

**Potential issue**: Complex prose modifiers like `prose-h2:text-4xl` might be purged if not detected in content scanning.

**Solution if true**: Add to `safelist` in `tailwind.config.cjs`:
```js
safelist: [
  { pattern: /^prose-/ }
]
```

---

## Expected Behavior

When working correctly, the markdown body should render as:

### Heading Hierarchy
- `# H1` → Not used in body (only in frontmatter title)
- `## H2` → 4xl, font-light, gray-900, mt-12, mb-6
- `### H3` → 2xl, font-light, gray-900, mt-8, mb-4
- `#### H4` → xl, font-light, gray-900, mt-6, mb-3

### Text Elements
- **Paragraphs** → gray-600, leading-relaxed, mb-6
- **Bold** → gray-900, font-semibold
- **Italic** → gray-600, italic
- **Lists** → gray-600, space-y-2, mb-6 (both ul and ol)

### Spacing
- Section breaks between major content blocks
- Consistent vertical rhythm
- No collapsed margins

---

## Files to Request from User

If more context needed, ask Phil for:

1. **`tailwind.config.cjs`** - Verify Typography plugin configuration
2. **`package.json`** - Check Tailwind and plugin versions
3. **`astro.config.mjs`** - Verify markdown processing settings
4. **Browser DevTools screenshot** - Inspect rendered HTML and computed styles
5. **Build output logs** - Check for CSS processing errors

---

## Debugging Steps for Claude Web UI

### Step 1: Verify Plugin Installation
Request `tailwind.config.cjs` and `package.json`. Confirm:
```js
// tailwind.config.cjs
plugins: [
  require('@tailwindcss/typography'),
  // other plugins
]
```

### Step 2: Check Prose Class Application
Request screenshot of browser DevTools:
- Inspect `<Content />` rendered HTML
- Check if `prose` classes are in DOM
- Verify computed styles for headings and paragraphs

### Step 3: Test Simplified Prose
Try removing all modifiers, using only base prose:
```astro
<div class="prose prose-lg">
  <Content />
</div>
```

If this works, modifiers are the issue. If not, plugin/rendering is broken.

### Step 4: Check Astro Markdown Config
Request `astro.config.mjs`, verify markdown integration:
```js
export default defineConfig({
  integrations: [/* ... */],
  markdown: {
    // Are there any custom processors interfering?
  }
})
```

### Step 5: Test Static HTML
Create a test case study with minimal content:
```markdown
---
title: "Test Case"
# ... minimal frontmatter
---

## Test Heading

This is a test paragraph with **bold** and *italic* text.

- List item one
- List item two
```

Does this render correctly? If yes, issue is content-specific. If no, rendering is broken.

---

## Implementation History Context

From `docs/CHANGELOG.md`:

**Phase 8** (commit unknown): Converted hardcoded case study pages to Markdown-based Content Collections with URL parameter filtering.

**Phase 9** (commit unknown): Service/Industry card collapse, metric card links, contact section restructure, case study filtering fix.

**Phase 10** (commit `0d50942`): Fix case study filtering (client-side) and restore detail page prose styling.

**The "restore detail page prose styling" in Phase 10 suggests this was previously working but broke, and the attempted fix (adding prose modifier classes) didn't resolve it.**

---

## Hypothesis

Based on the implementation, most likely causes:

1. **Tailwind Typography plugin not configured** (80% confidence)
2. **Prose modifier syntax incorrect for Tailwind version** (60% confidence)
3. **CSS purging removing prose classes in production** (40% confidence)
4. **Astro Content rendering issue with scoped styles** (30% confidence)

**Recommended starting point**: Verify plugin installation and configuration first.

---

## Success Criteria

Case studies are rendering correctly when:

✅ H2 headings are 4xl, light weight, proper spacing
✅ H3 headings are 2xl, light weight, proper spacing
✅ Paragraphs are gray-600, relaxed leading
✅ Lists have proper spacing and gray-600 color
✅ Bold/italic text render with correct styling
✅ Consistent vertical rhythm throughout body content
✅ Matches design system (Inter font, gray palette)

---

**Next Step**: Analyze the configuration files and rendering output to identify why prose classes aren't applying to the markdown body content.
