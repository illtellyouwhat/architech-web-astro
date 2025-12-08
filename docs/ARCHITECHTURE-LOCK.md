# ARCHITECTURE LOCK FILE
## Automation Architech - Tech Stack & Structural Rules

**Status**: âœ… LOCKED
**Last Updated**: December 5, 2024
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

**Document Version**: 1.0  
**Last Updated**: December 5, 2024  
**Approved By**: Phil
