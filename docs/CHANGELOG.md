# Changelog

## Content Update - December 1, 2025
**Goal:** Update all website copy to match approved redesign focused on measurable results and industry-specific solutions.

**Changes implemented:**
1. **Hero Section** - Updated headline to pain-point focused ("Still Spending 15+ Hours Per Week..."), new CTAs pointing to case studies, updated quick-reference cards to Process Automation, AI Decision Support, and Multi-Platform Data Integration.

2. **Services Section** - Changed headline to "How We Help", completely rewrote all 3 service cards with outcomes-focused copy and real-world examples, updated CTAs to "See [X] case studies →" linking to `/case-studies`.

3. **Industries Section** - Updated subheadline, replaced "Admin Automation" with "Publishing & Media", completed all 6 industry descriptions (Legal Tech, Healthcare, Publishing & Media, E-commerce, Education Technology, Manufacturing).

4. **About Section** - Changed headline to "Why Companies Choose Us", rewrote 3 differentiator cards (API workarounds, 6-week implementations, 99% AI accuracy), replaced generic stats with specific metrics (6-7x capacity, 87.5% time reduction, 16 hrs/week saved, 99% AI accuracy) with context.

5. **Contact Section** - Updated subheadline to "Tell us about your biggest bottleneck", new message placeholder text focusing on operational challenges, simplified location card subtext.

6. **Navigation** - Added "Industries" and "Case Studies" links, renamed "Blog" to "Insights" (6 total nav links).

7. **Footer** - Updated tagline to mention specific industries (manufacturing, healthcare, publishing), updated service list to match new naming (Process Automation, AI Decision Support, Data Integration), expanded Quick Links to include Industries, Case Studies, and Insights.

**Notes:**
- All `/case-studies` links (hero CTA, service cards, nav, footer) currently return 404 - to be built in Phase 3
- Preserved all existing interactive functionality (ServiceCard expansions, RevealOnScroll, ContactForm validation)
- Maintained gray-based design system and Inter typography
- Updated ServiceCard component to support dynamic CTA text based on service title

**Bug fixes:**
- Fixed JavaScript syntax errors in Services.astro (lines 9, 24, 40) where apostrophes in strings ("can't", "don't") were breaking the build - changed to double quotes for those specific strings
- Fixed similar JavaScript syntax errors in About.astro (lines 14, 23) where apostrophes in strings ("Don't", "we know") were breaking the build - changed to double quotes
- Performed comprehensive review of all modified files to identify and fix remaining apostrophe issues before they caused build failures
- Verified successful build with `npm run build` - 0 errors, 8 pages generated successfully

---

## Unified Astro migration November 22, 2025
**Plan:** Replace the separate Lovable.dev SPA + Astro blog repos with a single Astro 5 project that keeps the SPA's navigation, Tailwind tokens, and visual language while embedding the blog under `/blog`.

**Executed steps:**
1. Bootstrapped a fresh Astro project with React, Tailwind, MDX, sitemap, rss, and astro-icon integrations plus shared TypeScript/tailwind config.
2. Ported the Lovable.dev design system (Tailwind tokens, assets, nav/footer) and rewrote the landing + service pages as `.astro` routes with reusable section components.
3. Migrated the blog content collection, layouts, SEO head, analytics, comments, and RSS feed into the same repo so `/blog` shares the main layout.
4. Added documentation (`README`, `docs/*`) describing the architecture, workflow, and this changelog entry for future releases.
