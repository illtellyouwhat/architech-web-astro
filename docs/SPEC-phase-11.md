# PHASE 11 IMPLEMENTATION SPEC
## Visual Polish & Metric Updates - Automation Architech

**Date**: December 15, 2025
**Phase**: Phase 11
**Scope**: Hero repositioning, icon styling, About section layout, metric banners, tooltips, contact form alignment, footer social icons

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT_HEADER.md` completely
2. Review LOCK-CONTENT-phase11.md for copy changes
3. Review LOCK-DESIGN-SYSTEM-phase11.md for styling specifications
4. Reference existing Phase 9 lock files for context on current state

---

## OVERVIEW

This phase implements visual polish across the homepage and case studies pages, focusing on:
- Above-fold optimization (remove small headline, reposition stats, scale down 15%)
- Icon refinement (thinner strokes, 10% size reduction)
- About section 2-column layout with founder photo placeholder
- Case study metric banners and service type icons with tooltips
- Contact form label alignment and footer social icons

**All copy comes from LOCK-CONTENT-phase11.md** - reference it for exact text.
**All styling comes from LOCK-DESIGN-SYSTEM-phase11.md** - reference it for measurements.

---

## 1. HERO SECTION REPOSITIONING

### File: `/src/components/Hero.astro` (or similar)

### 1.1 Remove Small Headline

**Current:**
```astro
<p className="text-sm text-gray-600 mb-4">Automation Architech</p>
<h1 className="text-5xl font-bold">Your [rotating] needs data</h1>
```

**New:**
```astro
<h1 className="text-5xl font-bold">Your [rotating] needs data</h1>
```

**Action:** Delete the small "Automation Architech" text completely

### 1.2 Adjust Hero Spacing

**Reduce vertical margins to fit more content above fold:**

```astro
<!-- Reduce section padding if needed -->
<section className="py-16 md:py-20"> <!-- Was py-20 md:py-24 -->

<!-- Reduce spacing between elements -->
<h1 className="mb-4"> <!-- Was mb-6 -->
<p className="mb-6"> <!-- Was mb-8 -->
<div className="flex gap-4 mb-8"> <!-- Was mb-12 -->
```

**Goal:** Make room for stats to appear above fold

---

## 2. STATS SECTION REPOSITIONING & SIZING

### File: `/src/components/Stats.astro` or `/src/pages/index.astro`

### 2.1 Move Stats Up

**Current position:** Likely below service cards or client logos
**New position:** Immediately below service cards, above client logos

**Implementation:**
- In `index.astro`, reorder component imports so `<Stats />` appears right after `<ServiceCards />`
- Ensure stats section has reduced top margin: `mt-8` or `mt-12` (not mt-16 or mt-20)

### 2.2 Scale Stats Down 15%

**Typography Changes:**
```astro
<!-- Old -->
<div className="text-5xl font-bold text-gray-900">{number}</div>
<div className="text-lg text-gray-600">{label}</div>

<!-- New (15% smaller) -->
<div className="text-3xl font-bold text-gray-900">{number}</div>
<div className="text-sm text-gray-600">{label}</div>
```

**Icon Changes:**
```astro
<!-- Old -->
<Icon className="w-8 h-8 text-gray-600" />

<!-- New -->
<Icon className="w-6 h-6 text-gray-600" />
```

**Padding Changes:**
```astro
<!-- Old -->
<div className="bg-gray-50 border border-gray-100 rounded-lg p-6">

<!-- New -->
<div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
```

**Grid Layout (ensure 4 columns on desktop):**
```astro
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- 4 stat cards -->
</div>
```

---

## 3. SERVICE & INDUSTRY CARD ICON ADJUSTMENTS

### File: `/src/components/ServiceCard.jsx` and `/src/components/IndustryCard.jsx`

### 3.1 Icon Size Reduction

**Change icon size from w-12 h-12 to w-11 h-11 (or ~10% smaller):**

```jsx
// Old
<Icon className="w-12 h-12 text-gray-600 mb-4" />

// New
<Icon className="w-11 h-11 stroke-[1.5] text-gray-600 mb-4" />
```

**Key addition:** `stroke-[1.5]` class makes Lucide icons thinner/lighter

### 3.2 Reference Site

Check automationarchitech.com service cards for visual reference of desired icon weight.

---

## 4. ABOUT SECTION LAYOUT RESTRUCTURE

### File: `/src/components/About.astro` or similar

### 4.1 Create 2-Column Layout

**Current (likely):** All content in single column
**New:** 2-column grid on desktop - about cards left, photo placeholder right

```astro
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <!-- Section header (full width) -->
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Companies Choose Us</h2>
    
    <!-- 2-column grid -->
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      
      <!-- Column 1: About Cards -->
      <div className="flex flex-col gap-6">
        <AboutCard 
          title="Tailored Solutions"
          description="Every project is unique. We build custom solutions that fit your specific needs and scale with your growth."
        />
        <AboutCard 
          title="Proven Results"
          description="Our clients see measurable improvements in efficiency, cost reduction, and revenue growth."
        />
        <AboutCard 
          title="Expert Team"
          description="Our team stays at the forefront of AI and automation technologies to deliver cutting-edge solutions. Our globally distributed team means faster turnaround for your projects."
        />
      </div>
      
      <!-- Column 2: Founder Photo Placeholder -->
      <div className="bg-gray-200 border border-gray-300 rounded-xl 
                      flex items-center justify-center
                      aspect-[3/4] lg:h-full">
        <span className="text-gray-500 text-lg">Founder Photo</span>
      </div>
      
    </div>
    
    <!-- Stats Cards (full width, below 2-column section) -->
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <!-- 4 stat cards here -->
    </div>
    
  </div>
</section>
```

### 4.2 About Card Collapse/Expand

**Use same pattern as service/industry cards from Phase 9:**

```jsx
// AboutCard.jsx
export default function AboutCard({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isIntersecting] = useIntersection({ threshold: 0.3 });
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldExpand = isMobile ? isIntersecting : isExpanded;
  
  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
      className={`
        bg-gray-50 border border-gray-100 rounded-xl
        transition-all duration-300
        ${shouldExpand ? 'py-6' : 'py-4'} px-6
      `}
    >
      <h3 className={`text-xl font-semibold text-gray-900 ${shouldExpand ? 'mb-3' : ''}`}>
        {title}
      </h3>
      
      <div className={`
        transition-all duration-300 ease-in-out
        ${shouldExpand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] h-0'}
      `}>
        {shouldExpand && (
          <p className="text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
```

### 4.3 Update About Section Stats

**Change Stat 4 from "99% AI Accuracy" to "200K → 2M MAU Growth":**

```astro
<!-- Old Stat 4 -->
<StatCard
  icon="check-circle"
  number="99%"
  label="AI Accuracy"
  context="Dual-LLM verification"
  link="/case-studies"
/>

<!-- New Stat 4 -->
<StatCard
  icon="arrow-up-right"
  number="200K → 2M"
  label="MAU Growth"
  context="Content strategy and analytics"
  link="/case-studies/content-strategy-growth"
/>
```

**Update all 4 stat links:**
```astro
<StatCard link="/case-studies/clinical-trial-patient-matching" /> <!-- Stat 1: 6-7x -->
<StatCard link="/case-studies/manufacturing-production-scheduling" /> <!-- Stat 2: 87.5% -->
<StatCard link="/case-studies/ad-performance-reporting" /> <!-- Stat 3: 16 hrs -->
<StatCard link="/case-studies/content-strategy-growth" /> <!-- Stat 4: 200K → 2M -->
```

---

## 5. CONTACT SECTION UPDATES

### File: `/src/components/ContactForm.astro` or similar

### 5.1 Left-Align Form Labels

**Change labels from centered to left-aligned:**

```astro
<!-- Old (if centered) -->
<label className="block text-sm font-medium text-gray-700 text-center mb-2">

<!-- New -->
<label className="block text-sm font-medium text-gray-700 text-left mb-2">
```

**Apply to all 4 fields:** Name, Email, Company, Message

### 5.2 Remove Email Card Subtext

**File:** `/src/components/ContactCards.jsx` or similar (Email card component)

**Remove this line:**
```jsx
<p className="text-sm text-gray-600 text-center max-w-xs">
  Expect a reply within 24 hours
</p>
```

**Result:** All 3 contact cards now have buttons aligned horizontally (no extra text pushing buttons down on email card)

---

## 6. FOOTER SOCIAL ICONS

### File: `/src/components/Footer.astro` or similar

### 6.1 Replace Tech Icons with Social Icons

**Remove:**
```astro
<div className="flex gap-4 mt-4">
  <Icon name="code" className="w-6 h-6 text-gray-600" />
  <Icon name="database" className="w-6 h-6 text-gray-600" />
  <Icon name="workflow" className="w-6 h-6 text-gray-600" />
</div>
```

**Add:**
```astro
<div className="flex gap-4 mt-4">
  <a href="#" target="_blank" rel="noopener noreferrer"
     className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
     aria-label="LinkedIn">
    <Icon name="linkedin" className="w-6 h-6" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer"
     className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
     aria-label="Twitter/X">
    <Icon name="twitter" className="w-6 h-6" />
  </a>
</div>
```

**Note:** Links are placeholders (`href="#"`) - awaiting client social media URLs

---

## 7. CASE STUDIES PAGE HEADER

### File: `/src/pages/case-studies/index.astro`

### 7.1 Add Hover-Reveal Subheadline

**Current (likely):**
```astro
<h1 className="text-4xl font-bold text-gray-900 mb-4">
  Real Projects. Real Results.
</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
  From 6-7x capacity increases to 87.5% time reductions—see how we've 
  helped companies automate their most critical processes.
</p>
```

**New (hover-reveal on desktop, always visible on mobile):**
```astro
<div className="text-center">
  <h1 className="text-4xl font-bold text-gray-900 group">
    Real Projects. Real Results.
    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4
                   opacity-0 md:group-hover:opacity-100
                   md:opacity-100 transition-opacity duration-300">
      From 6-7x capacity increases to 87.5% time reductions—see how we've 
      helped companies automate their most critical processes.
    </p>
  </h1>
</div>
```

**Breakdown:**
- `opacity-0` - Hidden by default
- `md:group-hover:opacity-100` - Visible on hover (desktop)
- `md:opacity-100` - Always visible on mobile (overrides hover behavior)
- `transition-opacity duration-300` - Smooth 300ms fade

**Note:** This uses Tailwind's `group` and `group-hover` utilities

---

## 8. CASE STUDY CARD UPDATES

### File: `/src/components/CaseStudyCard.astro` or `/src/components/CaseStudiesGrid.jsx`

### 8.1 Add Metric Banner

**Wrap metric in dark gray banner:**

```astro
<!-- Old -->
<div className="mt-4">
  <div className="text-3xl font-bold text-gray-900">{metric}</div>
  <div className="text-sm text-gray-600">{metricLabel}</div>
</div>

<!-- New -->
<div className="w-full bg-gray-700 py-3 px-4 rounded-sm mt-4">
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-white">{metric}</span>
    <span className="text-sm font-medium text-gray-100">{metricLabel}</span>
  </div>
</div>
```

**Apply to:**
- Case studies index page (all 5 cards)
- Related cases section on individual case study pages (all 3 cards)

### 8.2 Add Service Type Icons with Tooltips

**Add service type icon to right side of card:**

```astro
<div className="flex items-start justify-between mb-4">
  
  <!-- Left: Industry Icon with Tooltip -->
  <div className="relative group">
    <Icon name={industryIcon} className="w-10 h-10 stroke-[1.5] text-gray-600" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-150
                    bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg
                    whitespace-nowrap pointer-events-none z-50">
      {industry} <!-- e.g., "SaaS", "Healthcare" -->
    </div>
  </div>
  
  <!-- Right: Service Type Icon with Tooltip -->
  <div className="relative group">
    <Icon name={solutionIcon} className="w-10 h-10 stroke-[1.5] text-gray-600" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-150
                    bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg
                    whitespace-nowrap pointer-events-none z-50">
      {solutionType} <!-- e.g., "AI Decision Support" -->
    </div>
  </div>
  
</div>
```

**Icon mapping (from case study frontmatter):**
```
Process Automation → lucide:settings or lucide:cog
AI Decision Support → lucide:brain or lucide:sparkles  
Multi-Platform Data Integration → lucide:database or lucide:network
```

### 8.3 Reduce Icon Sizes

**Apply same 10% reduction as service/industry cards:**

```astro
<!-- Old -->
<Icon className="w-12 h-12 text-gray-600" />

<!-- New -->
<Icon className="w-10 h-10 stroke-[1.5] text-gray-600" />
```

---

## 9. RESPONSIVE VERIFICATION

### 9.1 Desktop (1024px+)

**Test above-fold fit:**
- Hero (no small headline, tighter spacing)
- Service cards (3 columns)
- Top stats (4 columns, 15% smaller)

**All should fit in ~900-1080px viewport height**

### 9.2 Tablet (768px-1024px)

**Verify:**
- Service cards: 2 columns
- Stats: 2 columns  
- About section: May remain 2-column or stack (test both options)
- Some scrolling is acceptable

### 9.3 Mobile (<768px)

**Verify:**
- All elements stack vertically
- About cards auto-expand on scroll (IntersectionObserver)
- Founder photo appears below about cards
- Case study subheadline always visible (no hover)
- Stats sized appropriately for mobile

---

## 10. TESTING CHECKLIST

After implementation, verify:

### Hero Section
- [ ] Small "Automation Architech" headline removed
- [ ] Rotating headline moved up to fill space
- [ ] Hero + service cards + stats fit above fold on desktop (1080px height)
- [ ] Spacing reduced appropriately to fit content

### Icons
- [ ] Service card icons: w-11 h-11, stroke-[1.5]
- [ ] Industry card icons: w-11 h-11, stroke-[1.5]
- [ ] Case study card icons: w-10 h-10, stroke-[1.5] (10% smaller)
- [ ] Icons appear thinner/lighter than before

### Stats
- [ ] Top 4 stats moved to position above fold (below service cards)
- [ ] Typography scaled down 15% (text-3xl numbers, text-sm labels)
- [ ] Icons scaled to w-6 h-6
- [ ] Padding reduced to p-4
- [ ] 4-column grid on desktop

### About Section
- [ ] 2-column layout on desktop (cards left, photo right)
- [ ] About cards collapse/expand on hover (desktop)
- [ ] About cards auto-expand on scroll (mobile)
- [ ] Founder photo placeholder displays correctly
- [ ] Stat 4 reads "200K → 2M MAU Growth" with growth icon
- [ ] All 4 stats link to correct case study pages

### Contact Section
- [ ] Form labels left-aligned (text-left)
- [ ] Email card subtext removed ("Expect a reply within 24 hours")
- [ ] All 3 buttons align horizontally across cards

### Footer
- [ ] Tech icons (code, database, workflow) removed
- [ ] Social icons (LinkedIn, X) added
- [ ] Icons same size as previous (w-6 h-6)
- [ ] Links are placeholders (href="#")
- [ ] Hover states work (text-gray-600 → text-gray-900)

### Case Studies Page
- [ ] Subheadline hidden by default on desktop
- [ ] Subheadline reveals on headline hover (desktop)
- [ ] Subheadline always visible on mobile
- [ ] Transition smooth (300ms fade)

### Case Study Cards
- [ ] Metric banners: dark gray background (bg-gray-700)
- [ ] Metric banners: white text
- [ ] Metric banners: full card width
- [ ] Service type icons appear on right side of cards
- [ ] Industry icons have tooltips on hover
- [ ] Service type icons have tooltips on hover
- [ ] Tooltips show correct text ("SaaS", "AI Decision Support", etc.)
- [ ] Tooltips fade in/out smoothly (150ms)
- [ ] Icons reduced to w-10 h-10 with stroke-[1.5]

### Responsive
- [ ] Desktop: Content fits above fold
- [ ] Tablet: 2-column layouts work
- [ ] Mobile: All content stacks properly
- [ ] Mobile: Tooltips don't interfere with touch interactions
- [ ] Mobile: Case study subheadline always visible

### Accessibility
- [ ] Tooltip aria-labels present on icons
- [ ] Social links have aria-labels
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus rings visible on tab

---

## 11. NOTES FOR IMPLEMENTER

### Icon Stroke Width

If `stroke-[1.5]` doesn't work with your icon library:
```jsx
// Alternative: Use custom CSS
<Icon className="w-10 h-10 text-gray-600" style={{ strokeWidth: 1.5 }} />

// Or: Use Lucide React directly
import { Settings } from 'lucide-react';
<Settings size={40} strokeWidth={1.5} className="text-gray-600" />
```

### Tooltip Implementation

**Option 1: Pure CSS (recommended):**
```jsx
<div className="relative group">
  <Icon />
  <div className="absolute ... opacity-0 group-hover:opacity-100 ...">
    Tooltip text
  </div>
</div>
```

**Option 2: React state (if CSS doesn't work):**
```jsx
const [showTooltip, setShowTooltip] = useState(false);

<div onMouseEnter={() => setShowTooltip(true)}
     onMouseLeave={() => setShowTooltip(false)}>
  <Icon />
  {showTooltip && <div>Tooltip text</div>}
</div>
```

### About Section Mobile Stacking

Use Tailwind's responsive classes:
```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Automatically stacks on mobile, 2-column on large screens -->
</div>
```

### Case Study Icons

Icons are defined in case study frontmatter:
```yaml
industryIcon: "lucide:monitor" # SaaS
solutionIcon: "lucide:brain"   # AI Decision Support
```

Make sure to read these from frontmatter when rendering cards.

---

## 12. REFERENCE FILES

**All content:** `LOCK-CONTENT-phase11.md`
**All styling:** `LOCK-DESIGN-SYSTEM-phase11.md`
**Phase 9 context:** `LOCK-CONTENT.md` (Phase 9), `LOCK-DESIGN-SYSTEM.md` (Phase 9)

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

**End of Phase 11 Spec**
