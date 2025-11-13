# Automation Architech · Unified Astro Site

## Overview
This repository merges the Lovable.dev marketing site, the Astro blog application, and the astro-yi theme into one Astro 5 project. The marketing pages, service detail pages, and `/blog` content now share the same Tailwind tokens, navigation, analytics, and deployment pipeline.

## What’s Inside
- **Astro + React islands** for the sticky navigation and any future interactive modules.
- **Tailwind + shadcn utilities** ported from the original SPA so typography, spacing, and color tokens remain the visual source of truth.
- **Content collections** (`src/content/posts`) for MDX blog posts, including SEO metadata, JSON-LD, RSS, and Utterances comments.
- **Shared layout** (`src/layouts/Layout.astro`) that injects SEO, analytics, and the site-wide header/footer for every route, including blog posts.
- **Service detail pages** under `/services/*` that reuse a common template and match the marketing art direction.

## Getting Started
```bash
npm install
npm run dev
```
- `npm run build` executes `astro check` followed by the production build.
- `npm run preview` serves the built output locally.

## Updating Content
- **Marketing sections** live in Astro components within `src/components/sections`. Update the copy or add new sections, then reference them from `src/pages/index.astro`.
- **Service pages** use `src/components/services/ServiceTemplate.astro`. Duplicate an existing page under `src/pages/services` and pass new props.
- **Blog posts** live in `src/content/posts`. Add a new `.mdx` file that satisfies the schema defined in `src/content/config.ts`.

## Styling & Components
- Tailwind configuration (`tailwind.config.ts`) is the canonical design system. Update CSS variables in `src/styles/global.css` for global tokens.
- Utility helpers (e.g., `cn`) live in `src/lib` and can be consumed by both Astro and React islands.
- React components should live under `src/components/react` and be hydrated with an appropriate `client:*` directive.

## Deployment Notes
- Configure `SITE_URL` (build-time) and optional public analytics/comment env vars inside your hosting provider.
- The sitemap integration and RSS feed derive canonical URLs from `SITE_URL`/`PUBLIC_SITE_URL`, so keep them updated before deploying.
