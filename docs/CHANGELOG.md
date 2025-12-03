# Changelog

## Phase 5: Polish & Connectivity Updates - December 3, 2025
**Goal:** Replace emoji icons with Lucide icons, update stats to company-level metrics, simplify CTAs, reformat industries section, add service categorization to case studies, and create multiple conversion paths with discovery call CTAs throughout the site.

**Changes implemented:**

### 1. Stats Cards Redesign
- **New metrics**: Changed from project-specific to company-level metrics
  - 50+ Projects Delivered (was 6-7x capacity)
  - 8 Years Industry Experience (was 87.5% time reduction)
  - 87.5% Average Time Reduction (kept but generalized)
  - 99% AI Accuracy (kept)
- **Made clickable**: All 4 stat cards now link to `/case-studies` with hover scale effect
- **Removed context text**: Eliminated small gray subtext (e.g., "Clinical trial patient matching")
- **Icons updated**: briefcase, calendar, clock, check-circle (all Lucide)

### 2. Service Card CTAs Simplified
- **Unified messaging**: All 3 service cards now say "See case studies →"
- **Removed variations**: Was "See automation/AI/integration case studies →"
- **Consistency**: Creates clearer path to case studies section

### 3. Icon System Migration - Emoji to Lucide
- **ServiceCard component**: Modified to handle Lucide icons with dynamic rendering
  - Added lucide-react imports (Settings, Brain, Database)
  - Icon mapping system for consistent rendering
- **Hero service cards**: settings, brain, database icons
- **Industries section**: All 6 cards converted
  - Legal Tech: scale → Healthcare: heart → Publishing & Media: newspaper
  - E-commerce: shopping-cart → Education Technology: graduation-cap → Manufacturing: factory
- **Checkmark bullets**: All bullet lists use lucide:check icon
- **Result**: Site-wide consistency with Lucide icon system

### 4. Industries Section Reformatting
- **Description format**: Changed from paragraph text to bullet lists (4-5 bullets per card)
- **Added CTAs**: Each industry card now has "See case studies →" button with arrow icon
- **Removed hover-reveal**: Descriptions always visible (better for mobile, clearer UX)
- **Visual hierarchy**: Checkmarks provide scannable structure

### 5. Case Studies Index - Service Categorization
- **Added metadata**: serviceType and serviceIcon fields to each case study
  - Clinical Trial: "AI Decision Support" with brain icon
  - Manufacturing: "Process Automation" with settings icon
  - Ad Reporting: "Data Integration" with database icon
  - Content Strategy & Email Campaign: null (awaiting client input)
- **Service icon display**: Icons appear in top-right of cards with tooltip on hover
- **Tooltip functionality**: Shows service type name (e.g., "Process Automation")

### 6. Case Studies Reordering by Impact
**New priority order (highest impact first)**:
1. Content Strategy (900% growth) - was 5th
2. Clinical Trial (6-7x capacity) - was 2nd
3. Manufacturing (87.5% time reduction) - was 1st
4. Ad Reporting (16 hrs/week saved) - was 3rd
5. Email Campaign ($1-5K monthly savings) - was 4th

### 7. Discovery Call CTAs - Case Studies Index
- **Two-button layout**: Replaced single "Read case study" link
  - Primary: "Read case study" (gray-900 background)
  - Secondary: "Book 15-Min Call" (outlined style)
- **Equal width buttons**: Both buttons flex-1 for balanced appearance
- **Links**: Read → detail page, Book → `/#contact`

### 8. Discovery Call CTAs - Case Study Detail Pages
**Location 1 - Hero section (top right)**: Added "Book 15-Minute Discovery Call" button next to breadcrumb (responsive: stacks vertically on mobile)

**Location 2 - After Key Learnings (before Related Cases)**: New CTA section with "Ready to See Similar Results?" headline and two buttons

Applied to all 5 case study detail pages

### 9. Contact Section - Calendar Booking Card
- **Added 3rd card**: Calendar booking option (middle position) with lucide:calendar-days icon
- **Button**: "Book 15-Minute Call" (placeholder href="#")
- **Grid updated**: Changed from `md:grid-cols-2` to `md:grid-cols-3`

**Files modified**: 11 total (Stats, Hero, ServiceCard, Industries, 6 case study pages, Contact)

**Build status**: Build successful: 0 errors, 14 pages generated

---

## Case Study Pages Implementation - December 2, 2025
**Goal:** Build complete case studies section with index page and 5 individual case study detail pages to establish credibility through concrete proof of past work.

**Pages created:**
1. **Case Studies Index** (`/case-studies/index.astro`) - Grid of 5 case studies with "Real Projects. Real Results." hero section, priority ordering (Manufacturing → Clinical Trial → Ad Reporting → Email Campaign → Content Strategy), hover animations, and bottom CTA section.
2. **Manufacturing Production Scheduling** - 87.5% time reduction, Paper Product Manufacturer (confidential), Process Automation solution, 6-week timeline. Includes Problem/Solution/Impact sections, expandable Technical Highlights, 2 screenshot placeholders, 3 related cases.

3. **Clinical Trial Patient Matching** - 6-7x capacity increase, Vextras (with logo placeholder), Healthcare industry, AI Decision Support, early LLM era project. Includes detailed technical approach (5 subsections), dual-LLM verification details, expandable sections.

4. **Ad Performance Reporting** - 16 hrs/week saved, Digital Media Publisher (confidential), Multi-Platform Data Integration, 6-month timeline. Most detailed case study with 4 Impact subsections, 4 Key Learnings subsections, comprehensive architecture details.

5. **Email Campaign Link Management** - $1-5K monthly savings, E-commerce Company (confidential), Process Automation, 2-month timeline. Includes Notion + Coda integration architecture, Zapier event listener details, 3 technical highlights subsections.

6. **Content Strategy Growth** - 900% growth (200K → 2M MAU), Mixed Analytics (with logo placeholder), SaaS industry, AI Decision Support, pre-ChatGPT era. Includes analytics approach, two-pronged content strategy (blog + YouTube), SEO optimization details.

**Implementation features:**
- Hero sections with breadcrumb navigation, clickable industry/solution tags linking to `/#industries` and `/#`
- Company logo placeholders ONLY for Vextras and Mixed Analytics (confidential clients show industry icon)
- Quick facts grid (4 columns: Industry, Company, Timeline, Solution Type - responsive: 1 col → 2 col → 4 col)
- Full body content sections with preserved markdown structure and authentic project voice
- Expandable `<details>` sections for Technical Highlights (open by default desktop, closed mobile)
- 2 screenshot placeholders per case study
- Related case studies section (3 cards) with priority logic: same industry > same solution type > other cases
- SEO meta tags with proper titles and descriptions
- Responsive design tested: mobile (single column), tablet (2 cols), desktop (full layouts)

**Navigation updates:**
- All homepage `/case-studies` links now work (hero CTA, service card CTAs, footer links - no more 404s)
- Bidirectional navigation: case study tags link back to homepage `/#industries` and `/#` sections
- Related cases create discovery loop between case studies

**Design system:**
- Maintained gray-900 primary color (NOT blue) throughout
- Typography: `text-5xl font-light` (H1), `text-4xl font-light` (H2), `text-2xl font-semibold` (H3)
- Spacing: `py-20` sections, `max-w-4xl` content containers, `gap-8` grids
- Hover states: cards lift with shadow-xl, arrows translate-x on hover
- All animations match existing site patterns

**Build status:**
- Build successful: 0 errors, 14 pages generated (8 original + 6 case study pages)
- All internal links verified and working
- Responsive layouts tested across breakpoints

---

## Homepage Layout Restructure - December 2, 2025
**Goal:** Reorganize homepage sections to reduce redundancy, consolidate stats, and prepare for client logos/team photos.

**Changes implemented:**
1. **Hero Section** - Converted 3 simple service cards to fully expandable ServiceCard components (hover on desktop, auto-expand on mobile scroll). Cards now show features list and CTA buttons ("See [X] case studies →") on expansion.

2. **New Stats Section** - Created dedicated stats section immediately after Hero with 4 metric cards in horizontal row (2 cols mobile, 4 cols desktop). Moved stats from About section: 6-7x capacity, 87.5% time reduction, 16 hrs/week saved, 99% AI accuracy.

3. **New Client Logos Section** - Added placeholder section after Stats with "Trusted By" headline and 5 logo placeholders (2 cols mobile, 3 tablet, 5 desktop). Ready for real client logos.

4. **Deleted Services Section** - Removed redundant "How We Help" section entirely since Hero now contains expandable service cards.

5. **Industries Section** - Moved up to new position after Client Logos (was previously after Services).

6. **About Section Restructure** - Removed stats cards (now at top), converted to two-column layout: 3 differentiator cards on left, team/founder photo placeholder on right (portrait 3:4 aspect ratio).

7. **Navigation Update** - Changed "Services" nav link from `/#services` to `/#` (scrolls to top where service cards now live).

**New page structure:**
```
Hero (with expandable service cards) → Stats → Client Logos → Industries → About (differentiators + photo) → Contact
```

**Notes:**
- NO copy changes - layout restructure only
- Maintained gray-based design system (gray-900 primary, NOT blue)
- All existing animations and transitions preserved
- ServiceCard expand functionality works identically in Hero as it did in old Services section
- Build successful: 0 errors, 8 pages generated

---

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
