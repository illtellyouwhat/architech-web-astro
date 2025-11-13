# High-Level Summary

## Mission
`architech-unified-astro` consolidates the Lovable.dev marketing SPA, the standalone Astro blog, and the astro-yi theme into one Astro 5 project. The goal is to give stakeholders a single repo for the marketing site and blog so design, analytics, and deployment policies stay consistent.

## What ships together
- **Marketing landing page** (`/`) composed of reusable section components that mirror the original Lovable.dev styling.
- **Service detail pages** (`/services/*`) generated from a shared template to keep copy/layout consistent.
- **Blog** (`/blog` + `/blog/[slug]`) powered by Astro content collections, Utterances comments, RSS, and JSON-LD SEO snippets.
- **Shared chrome** – navigation, footer, SEO head, Tailwind tokens, and analytics run through the same layout.

## Developer workflow
1. Run `npm install` once, then `npm run dev` for local preview.
2. Edit marketing content via `src/components/sections/*` or add pages under `src/pages/`.
3. Drop new MDX posts into `src/content/posts` and the blog + RSS will pick them up automatically.
4. Configure env vars (`SITE_URL`, `PUBLIC_*`) before deploying so canonical URLs, analytics, and comments behave correctly.

## Owner impact
- A single deploy produces both the main site and the blog, eliminating the former subdomain split.
- Visual parity with Lovable.dev is maintained because Tailwind tokens and assets were ported wholesale.
- Documentation (`README.md`, `docs/architecture.md`, this summary) explains how to update content without spelunking through multiple repos.
