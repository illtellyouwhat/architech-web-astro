# Changelog

## Unified Astro migration
**Plan:** Replace the separate Lovable.dev SPA + Astro blog repos with a single Astro 5 project that keeps the SPA’s navigation, Tailwind tokens, and visual language while embedding the blog under `/blog`.

**Executed steps:**
1. Bootstrapped a fresh Astro project with React, Tailwind, MDX, sitemap, rss, and astro-icon integrations plus shared TypeScript/tailwind config.
2. Ported the Lovable.dev design system (Tailwind tokens, assets, nav/footer) and rewrote the landing + service pages as `.astro` routes with reusable section components.
3. Migrated the blog content collection, layouts, SEO head, analytics, comments, and RSS feed into the same repo so `/blog` shares the main layout.
4. Added documentation (`README`, `docs/*`) describing the architecture, workflow, and this changelog entry for future releases.
