# Changelog

## 2025-12-08 - Spec: SPEC-phase-6.md - Commit: b66aaca03f4b9458060e967cff596aba82498c67

### Overview
Implemented Phase 6 homepage updates including animated rotating headline in hero section, hover-reveal subheadline, equal-sized CTA buttons, updated client logos section with 10 actual client logos, completely restructured About section with new differentiator cards and stats grid, and added two separate calendar booking buttons in Contact section.

### Changes

#### Added
- Rotating headline animation component
  - **File**: `src/components/react/RotatingHeadline.tsx` (new file)
  - **Section**: React component for animated text rotation
  - **Change**: Created TypeScript React component with useState and useEffect hooks to cycle through 5 words ["company", "reports", "team", "product", "analytics"] with 2.5s interval and 500ms fade transitions, includes aria-label for accessibility

- Hero hover-reveal subheadline
  - **File**: `src/components/sections/Hero.astro`
  - **Section**: Hero subheadline rendering
  - **Change**: Added new subheadline text "We help organizations build intelligent LLM applications deploy robust data pipelines and create seamless system workflows that scale" with group hover state (opacity-0 default, opacity-100 on hover with 300ms transition)

- About section stats cards grid
  - **File**: `src/components/sections/About.astro`
  - **Section**: Stats cards display (new section after differentiator cards)
  - **Change**: Added 4 stats cards in 2x2 grid layout (1 col mobile, 2 cols tablet, 4 cols desktop) showing 6-7x Capacity Increase, 87.5% Time Reduction, 16 hrs Saved Per Week, 99% AI Accuracy with context subtexts and Lucide icons

- Contact calendar booking buttons
  - **File**: `src/components/sections/Contact.astro`
  - **Section**: Contact info cards grid
  - **Change**: Added two separate calendar booking cards with "Schedule via Google Meet" (https://calendar.app.google/EVcS3xj7ud1BWtkL6) and "Schedule a Phone Call" (https://calendar.app.google/mnKPd1jZJn9fyKTu9) buttons, both with video/phone icons and descriptive subtext

#### Modified
- Hero headline with rotating animation
  - **File**: `src/components/sections/Hero.astro`
  - **Section**: Hero headline rendering (H1)
  - **Change**: Changed headline from "Still Spending 15+ Hours Per Week on Tasks a Computer Could Handle?" to "Your [rotating word] needs data" with integrated RotatingHeadline component using client:load directive

- Hero CTA buttons styling
  - **File**: `src/components/sections/Hero.astro`
  - **Section**: CTA buttons layout
  - **Change**: Made both buttons equal size by changing padding from `py-3` to `py-4`, updated primary button font-weight from `font-light` to `font-medium`, updated secondary button from `font-light` to `font-normal`, removed transition classes for consistency (now both use `transition` and `transition-colors duration-200`)

- Hero section container
  - **File**: `src/components/sections/Hero.astro`
  - **Section**: Section wrapper div
  - **Change**: Added `group` class to enable group-hover functionality for subheadline reveal

- ClientLogos component with actual logos
  - **File**: `src/components/sections/ClientLogos.astro`
  - **Section**: Logo array and rendering
  - **Change**: Updated from 5 placeholder divs to 10 actual client logos (Mixed Analytics, Prakeeto, Aerospace Fittings, Acadexis, Highland Street, CoinGecko, Vextras, Signature MD, Bookshop.org, Greenboy) using img tags with h-12 fixed height, w-auto, object-contain, grayscale filter with hover:grayscale-0 transition

- ClientLogos grid layout
  - **File**: `src/components/sections/ClientLogos.astro`
  - **Section**: Grid configuration
  - **Change**: Changed from `md:grid-cols-3 lg:grid-cols-5` to `md:grid-cols-5` for cleaner desktop layout (2 cols mobile, 5 cols desktop)

- ClientLogos section spacing
  - **File**: `src/components/sections/ClientLogos.astro`
  - **Section**: Section padding
  - **Change**: Reduced vertical padding from `py-16` to `py-12` to minimize vertical space per spec requirement

- About section subheadline
  - **File**: `src/components/sections/About.astro`
  - **Section**: Section subheadline paragraph
  - **Change**: Replaced short subheadline with comprehensive paragraph "We're not just another development agency. We're automation specialists who understand the intricacies of modern AI, data processing, and system integration..." (full text from CONTENT-LOCK.md)

- About section differentiator cards
  - **File**: `src/components/sections/About.astro`
  - **Section**: Differentiator cards array and rendering
  - **Change**: Completely replaced 3 differentiator cards with new content (Tailored Solutions, Proven Results, Expert Team), removed RevealOnScroll hover functionality, changed to static display with Lucide icons (wrench, trending-up, users), updated grid from 1 col to `md:grid-cols-3` for horizontal layout

- About section layout structure
  - **File**: `src/components/sections/About.astro`
  - **Section**: Overall section layout
  - **Change**: Changed from two-column layout (cards left, photo right) to single-column layout with differentiator cards grid followed by stats cards grid, removed team photo placeholder entirely

- Contact section grid layout
  - **File**: `src/components/sections/Contact.astro`
  - **Section**: Contact info cards grid
  - **Change**: Changed grid from 2 or 3 inconsistent columns to consistent 3-column layout on desktop (`md:grid-cols-3`)

#### Removed
- Hero supporting text
  - **File**: `src/components/sections/Hero.astro`
  - **Section**: CTA buttons area
  - **Change**: Removed "Real projects. Real results. Real metrics." text that appeared below primary "See Our Work" button, also removed wrapper div that contained the button and supporting text

- Hero original static subheadline
  - **File**: `src/components/sections/Hero.astro`
  - **Section**: Hero subheadline (original)
  - **Change**: Replaced original subheadline "We've helped companies reclaim hundreds of hours through intelligent automation..." with new hover-reveal subheadline with different content

- About section RevealOnScroll component
  - **File**: `src/components/sections/About.astro`
  - **Section**: Component imports and differentiator card rendering
  - **Change**: Removed RevealOnScroll import and all instances of hover-reveal functionality from differentiator cards, changed to always-visible static content

- About section team photo placeholder
  - **File**: `src/components/sections/About.astro`
  - **Section**: Right column of two-column grid
  - **Change**: Removed entire team/founder photo placeholder section (portrait 3:4 aspect ratio placeholder with SVG icon)

- Contact section Location card
  - **File**: `src/components/sections/Contact.astro`
  - **Section**: Contact info cards grid
  - **Change**: Removed "Location" card with "Global Remote Team" text and map-pin icon (this content moved to About section's Expert Team card per spec note)

- Contact section single calendar button
  - **File**: `src/components/sections/Contact.astro`
  - **Section**: Middle card in contact info grid
  - **Change**: Removed single generic "Book 15-Minute Call" button card (replaced with two specific calendar booking options)

### Verification Results
- ✅ Headline rotates through 5 words correctly with continuous loop
- ✅ Fade animation is smooth with 500ms opacity transitions
- ✅ No layout shift during word changes (min-width reserved on rotating span)
- ✅ Subheadline appears on hover with group hover state
- ✅ Both CTA buttons are equal size (px-8 py-4)
- ✅ No supporting text below "See Our Work" button
- ✅ Rotating headline has aria-label for accessibility
- ✅ Client logos section appears after Stats, before Industries
- ✅ "Trusted By" headline displays correctly
- ✅ 10 actual client logos display in horizontal row
- ✅ Responsive layout works (2 cols mobile, 5 cols desktop)
- ✅ All 10 client logo files found and integrated from `/public/images/clients/`
- ✅ About section new subheadline displays correctly (comprehensive paragraph)
- ✅ Three differentiator cards show new titles and descriptions
- ✅ No hover-reveal functionality in About cards (all text static)
- ✅ Differentiator cards use appropriate Lucide icons
- ✅ Stats cards added with proper 2x2 grid layout
- ✅ Responsive layout works for About section (1 col → 3 cols for differentiators, 1 col → 2 col → 4 cols for stats)
- ✅ Three contact info cards display (Email + 2 calendar buttons)
- ✅ Google Meet button links to correct calendar URL
- ✅ Phone call button links to correct calendar URL
- ✅ Location card removed
- ✅ Contact grid layout works (3 cols desktop, stacks on mobile)
- ✅ Project builds successfully with no errors (0 errors, 0 warnings, 14 pages generated)
- ✅ All pages generated correctly
- ✅ TypeScript checks pass

### Notes
- Used React component for rotating headline animation instead of pure CSS to enable proper timing control and state management
- Chose 2.5s rotation interval (spec allowed 2-3s range) for optimal readability
- Reserved min-width on rotating span to prevent layout shift for longest word ("analytics")
- Hover-reveal subheadline uses opacity transition (not display/visibility) to maintain smooth animation
- All copy taken directly from CONTENT-LOCK.md with no modifications
- All colors follow DESIGN-SYSTEM-LOCK.md (gray-900 primary, gray scale palette)
- Typography follows design system (font-light for headings, font-medium for buttons)
- Architecture follows ARCHITECHTURE-LOCK.md (Astro + React islands pattern)
- Client logo files were already present in `/public/images/clients/` directory
- About section stats moved from rollover cards to always-visible grid for better mobile UX
- Location information merged into Expert Team card description as noted in spec
- Calendar booking URLs are live production links, not placeholders

---

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
