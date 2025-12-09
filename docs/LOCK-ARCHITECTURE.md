# ARCHITECTURE LOCK FILE
## Automation Architech - Tech Stack & Structural Rules

**Status**: âœ… LOCKED
**Last Updated**: December 9, 2024
**Purpose**: Define immutable technical architecture decisions

---

## âš ï¸ CRITICAL: TECH STACK IS FIXED

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

**Always**: Mobile-first breakpoints (sm: â†’ md: â†’ lg: â†’ xl:)

---

## FILE ORGANIZATION

```
/src/
â”œâ”€â”€ components/          # Reusable components (Astro + React)
â”‚   â”œâ”€â”€ Header.astro
â”‚   â”œâ”€â”€ ServiceCard.jsx  # React island
â”‚   â””â”€â”€ RevealOnScroll.jsx
â”œâ”€â”€ layouts/             # Page templates
â”‚   â””â”€â”€ Layout.astro
â”œâ”€â”€ pages/               # Route files (Astro only)
â”‚   â”œâ”€â”€ index.astro
â”‚   â”œâ”€â”€ case-studies.astro
â”‚   â””â”€â”€ [...slug].astro
â”œâ”€â”€ styles/              # Custom CSS (minimal)
â”‚   â””â”€â”€ global.css
â””â”€â”€ content/             # Markdown content (if using)
    â””â”€â”€ case-studies/

/public/                 # Static assets
â”œâ”€â”€ images/
â””â”€â”€ fonts/
```

**Do NOT**:
- Create `/src/lib/` for utility functions unless specifically requested
- Add state management libraries (Redux, Zustand, etc.) without approval
- Create API routes unless explicitly needed

---

## CONTENT COLLECTIONS ARCHITECTURE (Phase 8+)

**Status**: âœ… Implemented in Phase 8

### When to Use Content Collections

Use Astro Content Collections for any **repeatable content type** that:
- Has multiple instances (case studies, blog posts, team members, testimonials)
- Requires consistent structure across instances
- Needs to be easily editable by non-developers (Markdown + frontmatter)
- Benefits from type safety and schema validation

**Examples**:
- âœ… Case studies (implemented Phase 8)
- âœ… Blog posts (future)
- âœ… Team member profiles (future)
- âœ… Testimonials (future)

**Not for**:
- âŒ One-off pages (About, Contact, Homepage)
- âŒ Configuration data (better suited for JSON/YAML)
- âŒ Real-time data (use API endpoints)

### Content Collections Structure

```
/src/content/
â"œâ"€â"€ config.ts              # Collection schemas and validation
â"œâ"€â"€ case-studies/          # Case study Markdown files
â"‚   â"œâ"€â"€ case-study-1.md
â"‚   â"œâ"€â"€ case-study-2.md
â"‚   â""â"€â"€ case-study-3.md
â""â"€â"€ blog/                  # Blog posts (future)
    â"œâ"€â"€ post-1.md
    â""â"€â"€ post-2.md
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

### Filtering & Sorting Pattern

**URL Parameter Filtering**: Use query strings for content filtering

```
/case-studies                           # All entries, default order
/case-studies?industry=healthcare       # Filtered by industry
/case-studies?service=process-automation # Filtered by service
```

**Implementation**:
```astro
---
const url = new URL(Astro.request.url);
const filter = url.searchParams.get('industry');

let entries = await getCollection('case-studies');

// Apply filtering
if (filter) {
  entries.sort((a, b) => {
    const aMatches = a.data.industry.includes(filter);
    const bMatches = b.data.industry.includes(filter);
    if (aMatches && !bMatches) return -1;
    if (!aMatches && bMatches) return 1;
    return a.data.order - b.data.order;
  });
}
---
```

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
- Lowercase and hyphenate for URL (`Publishing & Media` â†' `publishing-media`)
- Decode and normalize when matching (`publishing-media` â†' `Publishing & Media`)

### Adding New Content Types

To add a new content collection (e.g., blog posts):

1. **Create collection directory**: `/src/content/blog/`
2. **Define schema**: Add to `/src/content/config.ts`
3. **Create dynamic route**: `/src/pages/blog/[slug].astro`
4. **Create index page**: `/src/pages/blog/index.astro`
5. **Update CONTENT-LOCK.md**: Document frontmatter schema and content rules

**Follow existing patterns**:
- Use same frontmatter fields (title, slug, order, etc.)
- Use same filtering approach (URL parameters)
- Use same Markdown structure (## for sections)
- Use same dynamic routing pattern

### Content Collections Best Practices

**Do**:
- âœ… Use descriptive schema field names
- âœ… Validate all frontmatter with Zod schema
- âœ… Keep Markdown files focused (one entry = one file)
- âœ… Use consistent heading levels
- âœ… Make tags clickable for filtering
- âœ… Include `order` field for default sorting

**Don't**:
- âŒ Mix hardcoded pages with Content Collections
- âŒ Skip schema validation
- âŒ Use relative dates in frontmatter (use ISO strings)
- âŒ Duplicate content between frontmatter and Markdown body
- âŒ Create separate files for metadata (frontmatter is sufficient)

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
- Proper heading hierarchy (h1 â†’ h2 â†’ h3)

---

## DO NOT CHANGE WITHOUT APPROVAL

- âŒ Migration to Next.js, Remix, SvelteKit, or other frameworks
- âŒ Introduction of CSS-in-JS libraries (styled-components, emotion)
- âŒ Backend API implementation (keep static or use serverless functions)
- âŒ Database integration (not needed for current scope)
- âŒ Authentication system (not needed for current scope)

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

**Document Version**: 2.0  
**Last Updated**: December 9, 2024  
**Approved By**: Phil  
**Major Changes**: Phase 8 - Added Content Collections Architecture section
