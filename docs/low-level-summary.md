# Low-Level Summary

## Tooling + Config
- **Astro integrations**: React (`@astrojs/react`), Tailwind (`@astrojs/tailwind`), MDX, sitemap, rss, and astro-icon.
- **TypeScript**: `tsconfig.json` extends Astro strict defaults and defines the `@/*` alias.
- **Tailwind**: `tailwind.config.ts` mirrors the Lovable.dev tokens (fonts, colors, animations) and powers both Astro + React components. Base tokens live in `src/styles/global.css`.
- **Env types**: `src/env.d.ts` documents public/private variables for analytics and Utterances.

## Directory Highlights
```
src/
  components/
    react/Navigation.tsx     # Sticky nav React island shared site-wide
    sections/*               # Hero, Services, About, Contact blocks
    services/ServiceTemplate # Base template for /services pages
    blog/*                   # Listing tiles, sidebar, Utterances wrapper
  config/site.ts             # Site metadata + nav links
  content/                   # Content collections + MDX posts
  layouts/Layout.astro       # Global chrome + SeoHead
  pages/                     # Routes: marketing + blog + services + rss
  lib/utils.ts               # cn() helper (clsx + tailwind-merge)
```

## Data / Content Flows
- Blog posts live as MDX under `src/content/posts`; `config.ts` validates frontmatter.
- `src/pages/blog/index.astro` loads posts via `getCollection`, sorts, and renders with `PostListItem`.
- `src/pages/blog/[slug].astro` handles `getStaticPaths`, renders MDX content, builds JSON-LD, and mounts Utterances via inline injection.
- RSS feed handled by `src/pages/rss.xml.ts` using `@astrojs/rss`.

## Shared Layout + Styling
- `src/layouts/Layout.astro` wraps all routes with `SeoHead`, `Navigation`, and `Footer`. Marketing + blog pages simply slot content inside the layout.
- Navigation replicates Lovable.dev behavior (scroll awareness, responsive menu) via a React island hydrated with `client:load`.
- Footer is pure Astro markup using `astro-icon` for Lucide glyphs.

## Build & Deployment
- Scripts: `npm run dev`, `npm run build` (runs `astro check` first), `npm run preview`.
- Production build emits static HTML for all routes plus client bundles for hydrated islands.
- Required env vars: `SITE_URL` (server), plus `PUBLIC_*` for analytics/comment systems.

## Extensibility
- Add marketing sections by dropping new `.astro` files into `src/components/sections` and referencing them from a page.
- Duplicate any file in `src/pages/services` to spin up another offering; pass new props into `ServiceTemplate`.
- Add React islands under `src/components/react` when runtime interactivity is unavoidable (hydrate with `client:*`).
