# ARCHITECTURE LOCK FILE
## Automation Architech - Tech Stack & Structural Rules

**Status**: ✅ LOCKED
**Last Updated**: December 11, 2025
**Purpose**: Define immutable technical architecture decisions

---

## ⚠️ CRITICAL: TECH STACK IS FIXED

**Framework**: Astro 4.x
**Styling**: Tailwind CSS
**Interactive Components**: React islands (for client-side interactivity only)
**Deployment**: Netlify
**Analytics**: TBD (Phase 7)

**These choices are locked.** Do not propose migrations, alternative frameworks, or different approaches unless explicitly requested by user.

---

## COMPONENT ARCHITECTURE RULES

### When to Use Astro Components
- Static content (headers, footers, text sections)
- Server-side rendered pages
- Layouts and page templates
- SEO-critical content that must be present on initial load

### When to Use React Islands
- Client-side interactivity only:
  - Form submission logic
  - Hover reveal states
  - Expandable/collapsible sections
  - Animation triggers that require JavaScript
  - **Client-side filtering** (Phase 10+)

**Rule**: Default to Astro. Only use React when client-side state or events are required.

### Component Integration Pattern
```astro
---
// Astro component wrapper
import InteractiveFeature from '../components/InteractiveFeature.jsx';
---

<section>
  <h2>Static Heading</h2>
  <p>Static paragraph content</p>
  
  <!-- React island for interactivity -->
  <InteractiveFeature client:visible />
</section>
```

**Never**: Convert entire pages to React
**Always**: Wrap React islands in Astro components

---

## STYLING RULES

### Tailwind-First Approach
- All styling via Tailwind utility classes
- No inline styles unless absolutely necessary for dynamic values
- No separate CSS files for component styles
- Use Tailwind's design tokens (from `LOCK-design-system.md`)

### Custom CSS Exceptions
Only create custom CSS for:
- Complex animations not achievable with Tailwind transitions
- Keyframe animations
- Global resets or normalizations

**Location**: `/src/styles/` if custom CSS is required

### Responsive Design Pattern
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Mobile-first, scale up -->
</div>
```

**Always**: Mobile-first breakpoints (sm: → md: → lg: → xl:)

---

## FILE ORGANIZATION

```
/src/
├── components/          # Reusable components (Astro + React)
│   ├── Header.astro
│   ├── ServiceCard.jsx  # React island
│   └── RevealOnScroll.jsx
├── layouts/             # Page templates
│   └── Layout.astro
├── pages/               # Route files (Astro only)
│   ├── index.astro
│   ├── case-studies.astro
│   └── [...slug].astro
├── styles/              # Custom CSS (minimal)
│   └── global.css
└── content/             # Markdown content (if using)
    └── case-studies/

/public/                 # Static assets
├── images/
└── fonts/
```

**Do NOT**:
- Create `/src/lib/` for utility functions unless specifically requested
- Add state management libraries (Redux, Zustand, etc.) without approval
- Create API routes unless explicitly needed

---

## CONTENT COLLECTIONS ARCHITECTURE (Phase 8+)

**Status**: ✅ Implemented in Phase 8

### When to Use Content Collections

Use Astro Content Collections for any **repeatable content type** that:
- Has multiple instances (case studies, blog posts, team members, testimonials)
- Requires consistent structure across instances
- Needs to be easily editable by non-developers (Markdown + frontmatter)
- Benefits from type safety and schema validation

**Examples**:
- ✅ Case studies (implemented Phase 8)
- ✅ Blog posts (future)
- ✅ Team member profiles (future)
- ✅ Testimonials (future)

**Not for**:
- ❌ One-off pages (About, Contact, Homepage)
- ❌ Configuration data (better suited for JSON/YAML)
- ❌ Real-time data (use API endpoints)

### Content Collections Structure

```
/src/content/
├── config.ts              # Collection schemas and validation
├── case-studies/          # Case study Markdown files
│   ├── case-study-1.md
│   ├── case-study-2.md
│   └── case-study-3.md
└── blog/                  # Blog posts (future)
    ├── post-1.md
    └── post-2.md
```

### Frontmatter Schema Pattern

All content collections MUST define a Zod schema in `/src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    featured: z.boolean(),
    // ... other required fields
    optionalField: z.string().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
  // Add new collections here
};
```

**Schema Rules**:
- Use `.optional()` for fields not present in all entries
- Use `z.array()` for fields with multiple values (tags, categories, industries)
- Validate enums with `z.enum(['value1', 'value2'])`
- Always include `title` and `slug` fields for routing

### Dynamic Routing Convention

**Pattern**: `/src/pages/[collection-name]/[slug].astro`

**Example**: `/src/pages/case-studies/[slug].astro`

```astro
---
import { getCollection, getEntry } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('case-studies');
  return entries.map((entry) => ({
    params: { slug: entry.data.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout>
  <h1>{entry.data.title}</h1>
  <Content />
</Layout>
```

**Rules**:
- ONE dynamic template per collection (not one file per entry)
- Use `getStaticPaths()` to generate all routes at build time
- Access frontmatter via `entry.data.*`
- Render Markdown via `<Content />` component

### Markdown Content Structure

**File naming**: Use kebab-case matching the slug field
- `clinical-trial-patient-matching.md` (slug: "clinical-trial-patient-matching")
- `content-strategy-growth.md` (slug: "content-strategy-growth")

**Content format**:
```markdown
---
title: "Entry Title"
slug: "entry-slug"
order: 1
---

## Section Heading

Content goes here...

### Subsection

More content...
```

**Markdown Rules**:
- Use `##` for main sections (h2)
- Use `###` for subsections (h3)
- Use `####` for sub-subsections (h4)
- Never start with `#` (h1 - reserved for page title from frontmatter)
- Use `-` for unordered lists
- Use `1.` for ordered lists
- Use `**bold**` and `*italic*` for emphasis

### Filtering & Sorting Pattern (Phase 10+)

**URL Parameter Filtering**: Use query strings for content filtering

```
/case-studies                           # All entries, default order
/case-studies?industry=healthcare       # Filtered by industry
/case-studies?service=process-automation # Filtered by service
```

**CRITICAL**: For static sites, filtering MUST be client-side (React island), NOT server-side (Astro component).

**Filtering Rules**:
- Use query parameters, NOT path segments (`?filter=value`, not `/filter/value`)
- Normalize filter values (lowercase, replace spaces with hyphens)
- Sort matching entries first, non-matching second
- Maintain original order within groups (via `order` field)
- Handle array fields with `.includes()` or `.some()`

### Clickable Tags Pattern

**Tags should be clickable links** that set filter parameters:

```astro
<a
  href={`/case-studies?industry=${encodeURIComponent(industry.toLowerCase().replace(/ /g, '-'))}`}
  class="tag-styles"
>
  <Icon name={icon} />
  {industry}
</a>
```

**Tag Rules**:
- ALL tags are clickable (index pages, detail pages, anywhere they appear)
- Encode special characters (`&` becomes `-`)
- Lowercase and hyphenate for URL (`Publishing & Media` → `publishing-media`)
- Decode and normalize when matching (`publishing-media` → `Publishing & Media`)

### Client-Side Filtering Implementation (Phase 10+)

**When to use**: Static sites with filterable content <100 items

**Why**: Static sites cannot re-render on URL parameter changes. Server-side filtering in Astro runs only at build time.

**Astro Page Pattern** (`/src/pages/[collection]/index.astro`):
```astro
---
import { getCollection } from 'astro:content';
import FilterableGrid from '../components/FilterableGrid.jsx';

const items = await getCollection('case-studies');

// Convert to plain objects (strip Astro metadata)
const itemsData = items.map(item => ({
  title: item.data.title,
  slug: item.data.slug,
  industry: item.data.industry,  // Array field
  solutionType: item.data.solutionType,  // String field
  order: item.data.order,
  // Include all fields needed for display
}));
---

<Layout>
  <!-- React island handles filtering -->
  <FilterableGrid items={itemsData} client:load />
</Layout>
```

**React Island Pattern** (`/src/components/FilterableGrid.jsx`):
```jsx
import { useState, useEffect } from 'react';

export default function FilterableGrid({ items }) {
  const [filtered, setFiltered] = useState(items);
  
  useEffect(() => {
    const updateFilter = () => {
      const params = new URLSearchParams(window.location.search);
      const filter = params.get('industry') || params.get('service');
      
      if (!filter) {
        setFiltered([...items].sort((a, b) => a.order - b.order));
        return;
      }
      
      // Sort: matching first, others after
      const sorted = [...items].sort((a, b) => {
        const aMatches = matchesFilter(a, filter, params.get('industry'));
        const bMatches = matchesFilter(b, filter, params.get('industry'));
        
        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return a.order - b.order;
      });
      
      setFiltered(sorted);
    };
    
    updateFilter();
    window.addEventListener('popstate', updateFilter);
    return () => window.removeEventListener('popstate', updateFilter);
  }, [items]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filtered.map(item => <Card key={item.slug} item={item} />)}
    </div>
  );
}

function matchesFilter(item, filter, isIndustryFilter) {
  if (isIndustryFilter) {
    // Array field: use .some()
    return item.industry.some(ind => 
      normalizeString(ind) === normalizeString(filter)
    );
  } else {
    // String field: direct comparison
    return normalizeString(item.solutionType) === normalizeString(filter);
  }
}

function normalizeString(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
}
```

**Critical Implementation Rules**:
- Strip Astro metadata before passing to React (plain objects only)
- Use `client:load` for filtering islands (immediate hydration required)
- Listen for `popstate` events (back/forward button support)
- Normalize both filter value AND data field for comparison
- Use `.some()` for array fields, direct comparison for strings
- Sort matching items first, maintain original order within groups
- Create new array before sorting (don't mutate props)

### Adding New Content Types

To add a new content collection (e.g., blog posts):

1. **Create collection directory**: `/src/content/blog/`
2. **Define schema**: Add to `/src/content/config.ts`
3. **Create dynamic route**: `/src/pages/blog/[slug].astro`
4. **Create index page**: `/src/pages/blog/index.astro`
5. **Update CONTENT-LOCK.md**: Document frontmatter schema and content rules

**Follow existing patterns**:
- Use same frontmatter fields (title, slug, order, etc.)
- Use same filtering approach (client-side React island)
- Use same Markdown structure (## for sections)
- Use same dynamic routing pattern

### Content Collections Best Practices

**Do**:
- ✅ Use descriptive schema field names
- ✅ Validate all frontmatter with Zod schema
- ✅ Keep Markdown files focused (one entry = one file)
- ✅ Use consistent heading levels
- ✅ Make tags clickable for filtering
- ✅ Include `order` field for default sorting

**Don't**:
- ❌ Mix hardcoded pages with Content Collections
- ❌ Skip schema validation
- ❌ Use relative dates in frontmatter (use ISO strings)
- ❌ Duplicate content between frontmatter and Markdown body
- ❌ Create separate files for metadata (frontmatter is sufficient)
- ❌ Use server-side filtering for static sites

### Migration Pattern

When converting hardcoded pages to Content Collections:

1. Extract content from `.astro` files
2. Create Markdown files with frontmatter
3. Create single dynamic template
4. Test routing and rendering
5. Delete old hardcoded files
6. Update navigation links

**Never**: Keep both hardcoded AND dynamic versions simultaneously

---

## BUILD & DEPLOYMENT RULES

### Build Commands
```bash
npm run dev      # Local development
npm run build    # Production build
npm run preview  # Preview production build locally
```

### Deployment
- **Platform**: Netlify (configured, do not change)
- **Build command**: `npm run build`
- **Publish directory**: `dist/`
- **Node version**: 18.x or higher

### Environment Variables
Location: `.env` (not committed to git)
Example:
```
PUBLIC_ANALYTICS_ID=xxx
CONTACT_FORM_WEBHOOK=xxx
```

**Naming convention**: `PUBLIC_*` for client-side accessible vars

---

## INTERACTIVE FEATURES IMPLEMENTATION

### Forms
- Use native HTML form elements
- React island handles submission logic
- Astro component wraps form markup
- No form libraries (Formik, React Hook Form) unless complexity requires it

### Animations
- Tailwind transitions for simple hover/focus states
- `framer-motion` for complex animations (only if approved)
- CSS keyframes for loading spinners, etc.

### Scroll Interactions
- Intersection Observer API (via React island)
- `RevealOnScroll` component pattern (already implemented)

### Filtering/Sorting
- Client-side React islands for static content
- URL parameter-based filtering
- See "Client-Side Filtering Implementation" section above

---

## PERFORMANCE RULES

### Image Optimization
- Use Astro's `<Image>` component for all images
- Provide width/height attributes
- Use appropriate formats (WebP with fallbacks)

### JavaScript Bundle Size
- Keep React islands minimal (single responsibility)
- Lazy load components when appropriate (`client:visible`, `client:idle`)
- No large third-party libraries without justification

### SEO Requirements
- All pages must have `<title>` and meta description
- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`)
- Proper heading hierarchy (h1 → h2 → h3)

---

## DO NOT CHANGE WITHOUT APPROVAL

- ❌ Migration to Next.js, Remix, SvelteKit, or other frameworks
- ❌ Introduction of CSS-in-JS libraries (styled-components, emotion)
- ❌ Backend API implementation (keep static or use serverless functions)
- ❌ Database integration (not needed for current scope)
- ❌ Authentication system (not needed for current scope)
- ❌ Server-side rendering (SSR mode) - use static builds only

---

## DEPENDENCIES (LOCKED)

### Core Dependencies
```json
{
  "astro": "^4.x",
  "react": "^18.x",
  "tailwindcss": "^3.x"
}
```

### Allowed Additional Packages (with approval)
- Lucide React (icons) - approved for Phase 5
- Framer Motion (animations) - case-by-case basis
- Date-fns (date formatting) - if needed

### Prohibited Without Discussion
- jQuery (use vanilla JS or React)
- Bootstrap (using Tailwind)
- Material-UI (not needed)
- Large animation libraries (GSAP) unless proven necessary

---

## VERSION CONTROL RULES

### Git Workflow
- **User controls all commits** (manual)
- Never mention "committing changes" in implementation instructions
- Branch strategy: TBD by user

### What to Commit
- Source code (`/src/`)
- Configuration files (`astro.config.mjs`, `tailwind.config.cjs`)
- Package files (`package.json`, `package-lock.json`)

### What NOT to Commit
- `/node_modules/`
- `/dist/` (build output)
- `.env` files
- `.DS_Store`, editor configs

---

## EXCEPTION PROCESS

If architectural changes are needed:
1. Surface the requirement explicitly
2. Explain why current architecture cannot support it
3. Propose minimal change to achieve goal
4. Get user approval before implementing
5. Update this lock file with the decision

**Never assume architectural changes are acceptable.**

---

**Document Version**: 2.1  
**Last Updated**: December 11, 2025  
**Approved By**: Phil  
**Major Changes**: 
- Phase 8: Added Content Collections Architecture section
- Phase 10: Added Client-Side Filtering Implementation pattern
