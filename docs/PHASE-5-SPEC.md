# PHASE 5 SPECIFICATION
## Automation Architech - Polish & Connectivity Updates

**Date**: December 3, 2024  
**Status**: Ready for Implementation  
**Rule**: Follow this spec exactly - lock files have been updated to match Phase 5 changes

---

## CRITICAL: Lock Files Updated

**CONTENT-LOCK.md and DESIGN-SYSTEM-LOCK.md have been updated** with all Phase 5 changes.

**For Claude Code**: Use the updated lock files as your source of truth:
- CONTENT-LOCK.md → all copy (stats, CTAs, icons, industry bullets)
- DESIGN-SYSTEM-LOCK.md → all styling (colors, spacing, icon names)
- This spec → implementation instructions (how to structure the changes)

**No conflicts** - lock files and spec are now consistent.

---

## OVERVIEW

Phase 5 focuses on:
1. Replacing emoji icons with Lucide icons for consistency
2. Updating stats cards to general company metrics (clickable to case studies)
3. Simplifying service card CTAs (all say "See case studies")
4. Reformatting Industries section (bullet lists + CTA buttons)
5. Adding service icons to case study cards (with tooltips)
6. Reordering case studies by impact
7. Adding discovery call CTAs throughout
8. Adding calendar booking link placeholder

---

## CHANGE 1: Stats Cards Redesign

**File**: `/src/components/sections/Stats.astro`

### Current State
```javascript
const stats = [
  {
    icon: 'lucide:trending-up',
    number: '6-7x',
    label: 'Capacity Increase',
    context: 'Clinical trial patient matching'
  },
  {
    icon: 'lucide:clock',
    number: '87.5%',
    label: 'Time Reduction',
    context: 'Production scheduling optimization'
  },
  {
    icon: 'lucide:alarm-clock',
    number: '16 hrs',
    label: 'Saved Per Week',
    context: 'Ad performance reporting'
  },
  {
    icon: 'lucide:check-circle',
    number: '99%',
    label: 'AI Accuracy',
    context: 'Dual-LLM verification'
  }
];
```

### New State
```javascript
const stats = [
  {
    icon: 'lucide:briefcase',
    number: '50+',
    label: 'Projects Delivered',
    context: null  // Remove context text
  },
  {
    icon: 'lucide:calendar',
    number: '8 Years',
    label: 'Industry Experience',
    context: null
  },
  {
    icon: 'lucide:clock',
    number: '87.5%',
    label: 'Average Time Reduction',
    context: null
  },
  {
    icon: 'lucide:check-circle',
    number: '99%',
    label: 'AI Accuracy',
    context: null  // Keep this one
  }
];
```

### Make Cards Clickable

**Current**: Stats are display-only (no links)

**Change to**: Wrap entire card in anchor tag linking to `/case-studies`

```html
<a href="/case-studies" class="block text-center transition-all duration-300 hover:scale-105">
  <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
    <Icon name={stat.icon} class="h-6 w-6 text-gray-900" />
  </div>
  <div class="mb-2 text-3xl font-light text-gray-900 md:text-4xl">{stat.number}</div>
  <div class="text-sm font-medium text-gray-900">{stat.label}</div>
  <!-- Remove context div entirely -->
</a>
```

**Visual feedback**: Add `hover:scale-105` to entire card for subtle lift effect

---

## CHANGE 2: Service Card CTAs - Simplify Text

**File**: `/src/components/sections/Hero.astro` (lines 34-77)

### Current CTA Text
- Card 1: `ctaText="See automation case studies →"`
- Card 2: `ctaText="See AI case studies →"`
- Card 3: `ctaText="See integration case studies →"`

### New CTA Text
- Card 1: `ctaText="See case studies →"`
- Card 2: `ctaText="See case studies →"`
- Card 3: `ctaText="See case studies →"`

**All three now identical - simple change, no component modification needed**

---

## CHANGE 3: Replace Emoji Icons with Lucide

### Service Cards (Hero Section)

**File**: `/src/components/sections/Hero.astro`

**Current**:
- Card 1: `icon="⚙️"`
- Card 2: `icon="🤖"`
- Card 3: `icon="📊"`

**Change to**:
- Card 1: `icon="lucide:settings"` (or `lucide:workflow`)
- Card 2: `icon="lucide:brain"` (or `lucide:cpu`)
- Card 3: `icon="lucide:database"` (or `lucide:bar-chart`)

**Note**: ServiceCard component currently expects emoji string. Need to modify component to accept Lucide icon names and render using `<Icon>` component instead of text emoji.

**ServiceCard.tsx Modification Required**:
```typescript
// Old:
<div className="text-3xl mb-3">{icon}</div>

// New (if icon starts with 'lucide:'):
import { Icon } from 'astro-icon/components';
{icon.startsWith('lucide:') ? (
  <Icon name={icon} className="h-8 w-8 text-gray-900" />
) : (
  <div className="text-3xl mb-3">{icon}</div>
)}
```

### Industry Cards

**File**: `/src/components/sections/Industries.astro`

**Current Emojis**:
- Legal Tech: ⚖️ → `lucide:scale`
- Healthcare: ❤️ → `lucide:heart`
- Publishing & Media: 📰 → `lucide:newspaper`
- E-commerce: 🛒 → `lucide:shopping-cart`
- Education Technology: 🎓 → `lucide:graduation-cap`
- Manufacturing: 🏭 → `lucide:factory`

**Implementation**:
```html
<!-- Old -->
<div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-2xl mb-4">
  ⚖️
</div>

<!-- New -->
<div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
  <Icon name="lucide:scale" class="h-8 w-8 text-gray-900" />
</div>
```

---

## CHANGE 4: Industries Section - Format & CTA Buttons

**File**: `/src/components/sections/Industries.astro`

### Change Description Format

**Current**: Comma-separated paragraph text

**Change to**: Bulleted list with checkmark icons

**Example for Manufacturing:**

**Current**:
```html
<p class="text-gray-600 ...">
  Production scheduling and capacity planning, changeover optimization, shop floor coordination,
  quality data aggregation, and maintenance tracking to maximize throughput and minimize downtime.
</p>
```

**New**:
```html
<ul class="space-y-2">
  <li class="flex items-start gap-2 text-gray-600">
    <Icon name="lucide:check" class="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
    <span>Production scheduling and capacity planning</span>
  </li>
  <li class="flex items-start gap-2 text-gray-600">
    <Icon name="lucide:check" class="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
    <span>Changeover optimization</span>
  </li>
  <li class="flex items-start gap-2 text-gray-600">
    <Icon name="lucide:check" class="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
    <span>Shop floor coordination</span>
  </li>
  <li class="flex items-start gap-2 text-gray-600">
    <Icon name="lucide:check" class="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
    <span>Quality data aggregation and maintenance tracking</span>
  </li>
</ul>
```

**Split descriptions into 4-5 bullet points per industry (use common sense for grouping)**

### Add CTA Button to Each Card

**Add at bottom of each industry card**:
```html
<a href="/case-studies"
   class="mt-4 inline-flex items-center font-medium text-gray-900 hover:text-gray-700 transition-colors">
  See case studies
  <Icon name="lucide:arrow-right" class="ml-2 h-4 w-4" />
</a>
```

**Remove hover-reveal behavior**: Descriptions should always be visible (bullet lists can't hide/show cleanly)

---

## CHANGE 5: Case Studies Index - Add Service Icons

**File**: `/src/pages/case-studies/index.astro`

### Add Service Type to Card Data

**Modify caseStudies array to include service type**:

```javascript
const caseStudies = [
  {
    slug: 'clinical-trial-patient-matching',
    title: 'AI-Powered Clinical Trial Patient Matching',
    company: 'Vextras',
    industry: 'Healthcare',
    industryIcon: '❤️',
    serviceType: 'AI Decision Support',  // NEW
    serviceIcon: 'lucide:brain',         // NEW
    metric: '6-7x',
    metricLabel: 'Capacity Increase',
    summary: 'Automated clinical trial patient matching...',
    link: '/case-studies/clinical-trial-patient-matching'
  },
  {
    slug: 'content-strategy-growth',
    title: 'Data-Driven Content Strategy',
    company: 'Mixed Analytics',
    industry: 'SaaS',
    industryIcon: '💻',
    serviceType: null,  // BLANK FOR NOW (awaiting client input)
    serviceIcon: null,  // BLANK FOR NOW
    metric: '900%',
    // ...
  },
  {
    slug: 'manufacturing-production-scheduling',
    title: 'Manufacturing Production Scheduling',
    company: 'Paper Product Manufacturer',
    industry: 'Manufacturing',
    industryIcon: '🏭',
    serviceType: 'Process Automation',  // NEW
    serviceIcon: 'lucide:settings',     // NEW
    metric: '87.5%',
    // ...
  },
  {
    slug: 'ad-performance-reporting',
    title: 'Automated Ad Performance Reporting',
    company: 'Digital Media Publisher',
    industry: 'Publishing & Media',
    industryIcon: '📰',
    serviceType: 'Data Integration',    // NEW
    serviceIcon: 'lucide:database',     // NEW
    metric: '16 hrs',
    // ...
  },
  {
    slug: 'email-campaign-link-management',
    title: 'Email Campaign Link Management',
    company: 'E-commerce Company',
    industry: 'Publishing & E-commerce',
    industryIcon: '📰',
    serviceType: null,  // BLANK FOR NOW (awaiting client input)
    serviceIcon: null,  // BLANK FOR NOW
    metric: '$1-5K',
    // ...
  }
];
```

### Add Service Icon to Card Display

**Add service icon with tooltip next to industry icon**:

```html
<div class="mb-4 flex items-center gap-3">
  <!-- Industry Icon -->
  <span class="text-3xl">{study.industryIcon}</span>
  <span class="text-sm font-semibold uppercase tracking-wide text-gray-500">
    {study.industry}
  </span>
  
  <!-- Service Icon (with tooltip on hover) -->
  {study.serviceIcon && (
    <div class="group relative ml-auto">
      <Icon name={study.serviceIcon} class="h-6 w-6 text-gray-900" />
      <!-- Tooltip -->
      <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
        <div class="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          {study.serviceType}
        </div>
        <!-- Arrow -->
        <div class="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
          <div class="border-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  )}
</div>
```

**Tooltip behavior**: Shows service type name on hover (e.g., "Process Automation")

---

## CHANGE 6: Reorder Case Studies by Impact

**File**: `/src/pages/case-studies/index.astro`

**Current Order**:
1. Manufacturing (87.5%)
2. Clinical Trial (6-7x)
3. Ad Reporting (16 hrs)
4. Email Campaign ($1-5K)
5. Content Strategy (900%)

**New Order (Highest Impact First)**:
1. **Content Strategy** (900% growth) - highest percentage
2. **Clinical Trial** (6-7x capacity) - multiplicative factor
3. **Manufacturing** (87.5% time reduction)
4. **Ad Reporting** (16 hrs/week saved)
5. **Email Campaign** ($1-5K monthly savings)

**Reasoning**: 900% > 6-7x > 87.5% > time savings > cost savings

**Just reorder the array** - no other changes needed.

---

## CHANGE 7: Case Studies Index - Add Discovery Call CTA

**File**: `/src/pages/case-studies/index.astro`

### Add Second Button to Each Card

**Current**:
```html
<div class="flex items-center font-medium text-gray-900 ...">
  Read case study
  <svg ...arrow...</svg>
</div>
```

**Change to Two-Button Layout**:
```html
<div class="flex gap-3">
  <!-- Primary CTA -->
  <a href={study.link}
     class="flex-1 rounded-lg bg-gray-900 px-6 py-3 text-center font-medium text-white
            transition-colors duration-200 hover:bg-gray-800">
    Read case study
  </a>
  
  <!-- Secondary CTA -->
  <a href="/#contact"
     class="flex-1 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-center
            font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-50">
    Book 15-Min Call
  </a>
</div>
```

**Styling notes**:
- Both buttons same size (`flex-1`)
- "Read case study" = primary (gray-900 background)
- "Book call" = secondary (outlined)
- Gap between buttons: `gap-3`

---

## CHANGE 8: Case Study Detail Pages - Add Discovery Call CTAs

**Files**: All 5 case study detail pages

### Location 1: Hero Section (Top Right)

**Current breadcrumb area**:
```html
<a href="/case-studies" class="...">
  ← Back to Case Studies
</a>
```

**Change to Two-Column Layout**:
```html
<div class="flex items-center justify-between mb-6">
  <!-- Left: Breadcrumb -->
  <a href="/case-studies" class="...">
    ← Back to Case Studies
  </a>
  
  <!-- Right: Discovery Call CTA -->
  <a href="/#contact"
     class="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white
            transition-colors duration-200 hover:bg-gray-800">
    Book 15-Minute Discovery Call
  </a>
</div>
```

**Responsive**: Stack vertically on mobile, side-by-side on desktop

### Location 2: After Key Learnings (Bottom)

**Add new section after final content section**:

```html
<!-- CTA Section (After Key Learnings) -->
<section class="border-t border-gray-200 bg-gray-50 py-16 text-center">
  <div class="mx-auto max-w-2xl">
    <h2 class="mb-4 text-3xl font-light text-gray-900">
      Ready to See Similar Results?
    </h2>
    <p class="mb-8 text-lg text-gray-600">
      Tell us about your biggest bottleneck—we'll tell you if we can help.
    </p>
    <div class="flex flex-col justify-center gap-4 sm:flex-row">
      <a href="/#contact"
         class="rounded-lg bg-gray-900 px-8 py-4 font-medium text-white
                transition-colors duration-200 hover:bg-gray-800">
        Book 15-Minute Discovery Call
      </a>
      <a href="/case-studies"
         class="rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-medium
                text-gray-900 transition-colors duration-200 hover:bg-gray-50">
        View All Case Studies
      </a>
    </div>
  </div>
</section>
```

**Placement**: Insert this section AFTER "Key Learnings" section, BEFORE "Related Case Studies" section

---

## CHANGE 9: Contact Section - Add Calendar Link

**File**: `/src/components/sections/Contact.astro`

### Current Contact Info Cards (2 cards)
- Email card (lucide:mail)
- Location card (lucide:map-pin)

### Add Third Card: Calendar Booking

**Add between Email and Location cards**:

```html
<!-- Card 3: Calendar Booking -->
<div class="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center
            transition-all duration-300 hover:shadow-lg">
  <!-- Icon -->
  <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
    <Icon name="lucide:calendar-days" class="h-8 w-8 text-gray-900" />
  </div>
  
  <!-- Label -->
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
    Schedule
  </p>
  
  <!-- CTA Button (Placeholder) -->
  <a href="#"
     class="mb-3 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white
            transition-colors duration-200 hover:bg-gray-800">
    Book 15-Minute Call
  </a>
  
  <!-- Subtext -->
  <p class="text-sm text-gray-500">
    Pick a time that works for you—we'll send a calendar invite.
  </p>
</div>
```

**Update grid**: Change from `md:grid-cols-2` to `md:grid-cols-3` to accommodate 3 cards

**Placeholder link**: `href="#"` (user will update with actual Calendly/booking URL later)

---

## VERIFICATION CHECKLIST

After implementation, verify:

### Stats Cards
- [ ] New metrics: 50+ Projects, 8 Years, 87.5%, 99%
- [ ] Context text removed (no "Clinical trial..." text)
- [ ] All 4 cards clickable (link to /case-studies)
- [ ] Hover effect: subtle scale up (`hover:scale-105`)
- [ ] Icons: briefcase, calendar, clock, check-circle

### Service Cards
- [ ] All 3 CTAs say "See case studies →"
- [ ] Icons replaced with Lucide (settings, brain, database)
- [ ] Icons render correctly in ServiceCard component

### Industries Section
- [ ] All 6 cards use Lucide icons (not emojis)
- [ ] Descriptions formatted as bullet lists with checkmarks
- [ ] Each card has "See case studies →" button at bottom
- [ ] Descriptions always visible (no hover-reveal)

### Case Studies Index
- [ ] Reordered: Content Strategy → Clinical Trial → Manufacturing → Ad → Email
- [ ] Service icons visible on cards (where assigned)
- [ ] Service icon tooltips show on hover
- [ ] Two buttons per card: "Read case study" + "Book 15-Min Call"
- [ ] Button styling: primary (gray-900) + secondary (outlined)

### Case Study Detail Pages
- [ ] "Book 15-Minute Discovery Call" button at top (right side of breadcrumb)
- [ ] CTA section at bottom (after Key Learnings, before Related Cases)
- [ ] Bottom CTA has 2 buttons: Book Call + View All Cases
- [ ] Mobile: buttons stack vertically

### Contact Section
- [ ] 3 contact cards: Email, Calendar, Location
- [ ] Calendar card has placeholder link (href="#")
- [ ] Grid updated to 3 columns (`md:grid-cols-3`)
- [ ] Calendar icon: lucide:calendar-days

### Icons Overall
- [ ] No emoji icons remaining (all Lucide)
- [ ] All icons render correctly
- [ ] Tooltips work on case study service icons

---

## NOTES FOR IMPLEMENTATION

### Icon Migration Strategy
1. Industries section: straightforward emoji → Lucide replacement
2. Service cards: requires ServiceCard.tsx component modification to handle Lucide icons
3. Case study cards: emojis stay for now (industry icons), Lucide added for service types

### Tooltip Implementation
Use Tailwind + `group` utility:
- Parent: `group relative`
- Icon: triggers hover
- Tooltip: `hidden group-hover:block` with absolute positioning

### Responsive Considerations
- Stats cards: Already responsive (2 cols mobile, 4 desktop) - preserve
- Contact cards: Change from 2-col to 3-col (`md:grid-cols-3`)
- Case study CTAs: Stack vertically on mobile (`flex-col sm:flex-row`)
- Detail page hero buttons: Stack on mobile, side-by-side on desktop

### Content That's "BLANK FOR NOW"
- Email Campaign case study: service type/icon TBD
- Content Strategy case study: service type/icon TBD
- Calendar booking URL: placeholder `href="#"` (user will update)

---

## ESTIMATED TIME

- Stats cards: 30 minutes
- Service card CTAs: 10 minutes
- Icon replacement: 1 hour (ServiceCard component + all sections)
- Industries formatting: 45 minutes (bullet lists for 6 cards)
- Case studies reorder + icons: 1 hour
- Add CTAs (index + detail pages): 1 hour
- Contact calendar card: 20 minutes
- Testing/verification: 30 minutes

**Total: ~5-6 hours**

---

**Status**: Ready for implementation  
**Priority**: Complete before getting real logos/photos  
**Next Step**: Hand to Claude Code with Phase 3 header (or simplified prompt)
