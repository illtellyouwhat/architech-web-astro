# PHASE 12 IMPLEMENTATION SPEC
## Minor Copy & Design Refinements - Automation Architech

**Date**: December 15, 2025
**Phase**: Phase 12
**Scope**: Service card copy cleanup, hero spacing reduction, icon stroke thinning, contact form/button alignment fixes, case study banner lightening

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT_HEADER.md` completely
2. Review LOCK-CONTENT-phase12.md for service card bullet removals
3. Review LOCK-DESIGN-SYSTEM-phase12.md for spacing/alignment specifications

---

## OVERVIEW

This phase implements minor refinements to prepare the site for client review:
- Remove examples bullets from service cards 1 & 2
- Remove API workarounds bullet from service card 3
- Reduce hero top spacing from ~400px to ~100px
- Further reduce icon stroke weight from 1.5px to 1px
- Fix contact form label alignment (still centered, needs left-align)
- Fix email card button misalignment
- Lighten case study metric banners (gray-700 → gray-200/300)

---

## 1. SERVICE CARD COPY UPDATES

### File: Service card components (ServiceCard.jsx or similar)

### 1.1 Remove Examples Bullets

**Service Card 1: Process Automation**
```jsx
// Remove this bullet from features array:
"Examples: Email campaign management, production scheduling, link coordination"

// Keep these 3 bullets:
"Reduce error rates from 5-10% to <1%"
"Scale capacity 5-10x without additional headcount"
"Free your team to focus on strategic work"
```

**Service Card 2: AI-Powered Decision Support**
```jsx
// Remove this bullet:
"Examples: Clinical trial patient matching, contract analysis, medical record review"

// Keep these 3 bullets:
"Match patterns across massive datasets humans can't manually review"
"Reduce expert bottlenecks (legal review, clinical assessment, due diligence)"
"Built-in verification layers to prevent AI hallucinations (99% accuracy)"
```

**Service Card 3: Multi-Platform Data Integration**
```jsx
// Remove this bullet:
"API workarounds when platforms don't provide direct access"

// Keep these 3 bullets:
"Connect Google Analytics, Klaviyo, Salesforce, Shopify, and 50+ other platforms"
"Automate report generation that currently takes hours"
"Enable historical analysis (3+ years) impossible in spreadsheets"
```

**Result:** All 3 service cards now have exactly 3 bullets each (was 4)

---

## 2. HERO SECTION SPACING REDUCTION

### File: `/src/components/Hero.astro` or `/src/pages/index.astro`

### 2.1 Reduce Top Padding

**Current (approximate):**
```astro
<section className="py-40 md:py-48"> <!-- ~320-384px top padding -->
```

**New:**
```astro
<section className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
```

**Breakdown:**
- Mobile: `pt-16` = 64px top padding
- Tablet: `pt-20` = 80px top padding  
- Desktop: `pt-24` = 96px top padding (~100px target)

**Goal:** Rotating headline should appear near top of viewport, just below navigation

### 2.2 Reduce Internal Hero Spacing (if needed)

**Check spacing between hero elements:**
```astro
<h1 className="mb-4"> <!-- Was mb-6, reduce if needed -->
<p className="mb-6"> <!-- Was mb-8, reduce if needed -->
<div className="flex gap-4 mb-8"> <!-- CTAs - was mb-12, reduce if needed -->
```

**Strategy:** Progressively reduce margins until hero + service cards + stats fit above fold on 1080px viewport

---

## 3. ICON STROKE WEIGHT REDUCTION

### File: All components with Lucide icons (ServiceCard.jsx, IndustryCard.jsx, CaseStudyCard.jsx, etc.)

### 3.1 Service Card Icons

**Change stroke from 1.5px to 1px:**

```jsx
// Before
<Icon className="w-11 h-11 stroke-[1.5] text-gray-600 mb-4" />

// After
<Icon className="w-11 h-11 stroke-1 text-gray-600 mb-4" />
```

**If stroke-1 class doesn't work, use strokeWidth prop:**
```jsx
import { Settings } from 'lucide-react';

<Settings strokeWidth={1} className="w-11 h-11 text-gray-600 mb-4" />
```

### 3.2 Industry Card Icons

**Same change - stroke-1 (1px):**

```jsx
<Icon className="w-11 h-11 stroke-1 text-gray-600 mb-4" />
```

### 3.3 Case Study Card Icons

**Both industry icons AND service type icons:**

```jsx
<Icon className="w-10 h-10 stroke-1 text-gray-600" />
```

**Apply to:**
- Industry icons (left side of card)
- Service type icons (right side of card)
- Both index page cards and related cases cards

---

## 4. CONTACT FORM LABEL ALIGNMENT FIX

### File: Contact form component (ContactForm.astro or ContactForm.jsx)

### 4.1 Left-Align All Field Labels

**This was specified in Phase 11 but not applied. Fix now:**

```jsx
// WRONG (current - centered)
<label className="block text-sm font-medium text-gray-700 text-center mb-2">

// CORRECT (left-aligned)
<label className="block text-sm font-medium text-gray-700 text-left mb-2">
```

**Apply to all 4 fields:**
1. Name
2. Email
3. Company
4. Message

**Key class:** `text-left` (NOT text-center, NOT omitted)

---

## 5. CONTACT CARD BUTTON ALIGNMENT FIX

### File: Contact method cards component (ContactCards.jsx or similar)

### 5.1 Problem Diagnosis

**Issue:** Email card button sits lower than Video Call and Phone Call buttons

**Root cause:** Email card has extra elements (email address) creating different flexbox spacing

### 5.2 Solution: Consistent Flexbox Structure

**All 3 cards must use identical structure:**

```jsx
<div className="bg-gray-50 border border-gray-100 rounded-xl p-6
                flex flex-col items-center justify-between
                min-h-[280px]">
  
  {/* Icon - consistent spacing */}
  <div className="w-8 h-8 text-gray-600 mb-6">
    <Icon />
  </div>
  
  {/* Button - consistent margin */}
  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg mb-4">
    {buttonText}
  </button>
  
  {/* Bottom content - reserved space even if minimal */}
  <div className="text-sm text-gray-600 text-center min-h-[40px]">
    {bottomContent}
  </div>
  
</div>
```

**Key alignment classes:**
- `flex flex-col` - Vertical stacking
- `items-center` - Horizontal centering
- `justify-between` - Distributes space evenly
- `min-h-[280px]` - Equal card heights
- `mb-6` after icon - Consistent spacing
- `mb-4` after button - Consistent spacing
- `min-h-[40px]` on bottom div - Reserves space

### 5.3 Email Card Specific Implementation

```jsx
{/* Email card bottom content */}
<div className="text-sm text-gray-600 text-center min-h-[40px]">
  <a href="mailto:hello@automationarchitech.com"
     onClick={handleCopyEmail}
     className="text-gray-700 hover:text-gray-900 cursor-pointer underline">
    hello@automationarchitech.com
  </a>
  {/* Note: Subtext was removed in Phase 11 */}
</div>
```

### 5.4 Video Call Card Implementation

```jsx
<div className="text-sm text-gray-600 text-center min-h-[40px]">
  Book a video call at a time that works for you.
</div>
```

### 5.5 Phone Call Card Implementation

```jsx
<div className="text-sm text-gray-600 text-center min-h-[40px]">
  Prefer to talk by phone? Schedule a call that fits your schedule.
</div>
```

**Verification:** Use browser dev tools to check button `offsetTop` - should be identical across all 3 cards

---

## 6. CASE STUDY METRIC BANNER COLOR

### File: Case study card components (CaseStudyCard.astro, CaseStudiesGrid.jsx, or [slug].astro)

### 6.1 Lighten Banner Background

**Change from dark gray to light gray:**

```jsx
// Before (Phase 11)
<div className="w-full bg-gray-700 py-3 px-4 rounded-sm mt-4">
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-white">{metric}</span>
    <span className="text-sm font-medium text-gray-100">{metricLabel}</span>
  </div>
</div>

// After (Phase 12)
<div className="w-full bg-gray-200 py-3 px-4 rounded-sm mt-4">
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-gray-900">{metric}</span>
    <span className="text-sm font-medium text-gray-700">{metricLabel}</span>
  </div>
</div>
```

**Changes:**
- Background: `bg-gray-700` → `bg-gray-200` (or `bg-gray-300` if more contrast needed)
- Metric number: `text-white` → `text-gray-900`
- Metric label: `text-gray-100` → `text-gray-700`

**Apply to:**
1. Case studies index page (`/case-studies`) - all 5 cards
2. Related cases section on detail pages (`/case-studies/[slug]`) - all 3 cards per page

**Alternative if bg-gray-200 too subtle:** Use `bg-gray-300` for slightly more contrast

---

## 7. TESTING CHECKLIST

After implementation, verify:

### Service Cards
- [ ] Process Automation card has 3 bullets (no "Examples..." bullet)
- [ ] AI Decision Support card has 3 bullets (no "Examples..." bullet)
- [ ] Data Integration card has 3 bullets (no "API workarounds" bullet)
- [ ] All 3 cards visually consistent (same number of bullets)

### Hero Section
- [ ] Top whitespace reduced to ~100px (headline near top of viewport)
- [ ] Rotating headline visible immediately on page load (no scroll needed)
- [ ] Service cards fully visible above fold
- [ ] Top 4 stats appear at or just below fold on 1080px viewport
- [ ] Mobile/tablet spacing proportionally reduced

### Icon Stroke Weight
- [ ] Service card icons visibly thinner (1px stroke)
- [ ] Industry card icons visibly thinner (1px stroke)
- [ ] Case study card icons (both industry + service type) thinner (1px stroke)
- [ ] Icons appear lighter/less bold than Phase 11

### Contact Form
- [ ] Name field label left-aligned
- [ ] Email field label left-aligned
- [ ] Company field label left-aligned
- [ ] Message field label left-aligned
- [ ] All labels use `text-left` class

### Contact Cards
- [ ] Email card button aligns horizontally with Video/Phone buttons
- [ ] All 3 buttons at same Y-position (use dev tools to verify offsetTop)
- [ ] Cards have equal heights
- [ ] Bottom content spacing consistent across all 3 cards

### Case Study Banners
- [ ] Index page: All 5 cards have light gray banners (bg-gray-200 or bg-gray-300)
- [ ] Index page: Metric numbers are dark gray (text-gray-900)
- [ ] Related cases: All 3 cards per detail page have light gray banners
- [ ] Related cases: Text colors updated to dark (text-gray-900, text-gray-700)
- [ ] Banners provide visual separation without being too heavy/dominant

### Responsive
- [ ] Desktop (1920x1080): All changes work correctly
- [ ] Tablet (768px): Spacing and alignment maintained
- [ ] Mobile (<768px): All changes work correctly, no layout breaks

---

## 8. NOTES FOR IMPLEMENTER

### Hero Spacing

If `pt-24` (96px) still shows too much whitespace, progressively reduce:
- Try `pt-20` (80px)
- Try custom value: `style={{ paddingTop: '100px' }}`

Target is ~100px from top of viewport to rotating headline.

### Icon Stroke

If Tailwind `stroke-1` class doesn't work:
```jsx
// Use Lucide's strokeWidth prop directly
<Icon strokeWidth={1} className="..." />
```

### Contact Card Alignment

Key is `justify-between` on parent container. This pushes icon to top, button to middle, content to bottom, creating equal spacing regardless of content length.

### Case Study Banner Color Choice

Start with `bg-gray-200`. If too subtle, use `bg-gray-300`. Don't go darker than gray-300.

---

## 9. REFERENCE FILES

**All content:** `LOCK-CONTENT-phase12.md`
**All styling:** `LOCK-DESIGN-SYSTEM-phase12.md`

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

**End of Phase 12 Spec**
