# DESIGN SYSTEM LOCK FILE - PHASE 12 UPDATE
## Automation Architech - Spacing, Icon, and Alignment Refinements

**Date Updated**: December 15, 2025
**Phase**: Phase 12
**Changes**: Reduce hero top spacing to ~100px, icon stroke to 1px, fix contact form alignment and button positioning, lighten case study metric banners

---

## HERO SECTION SPACING (Phase 12)

### Top Spacing Reduction

**Current:** ~400px whitespace above rotating headline
**Target:** ~100px whitespace above rotating headline

**Implementation:**

```css
/* Reduce hero section top padding */
.hero-section {
  padding-top: 100px; /* Was ~400px via py-20 or similar */
}

/* Or using Tailwind */
<section className="pt-24"> <!-- Instead of pt-40 or pt-48 -->
```

**Goal:** Rotating headline should appear near top of viewport, just below navigation bar

**Measurement guide:**
- Navigation bar height: ~64-80px (typical)
- Desired spacing below nav: ~100px
- Total from top of viewport to headline: ~164-180px

**Responsive consideration:**
```css
/* Mobile */
pt-16 (64px top padding)

/* Tablet */
md:pt-20 (80px top padding)

/* Desktop */
lg:pt-24 (96px top padding)
```

**Verification:**
- Rotating headline should be visible immediately on page load (no scroll)
- Service cards should be fully visible above fold
- Top 4 stats cards should appear just at or slightly below fold on 1080px viewport

---

## ICON STROKE WEIGHT (Phase 12)

### Service & Industry Card Icons

**Current:** `stroke-[1.5]` (1.5px stroke width)
**New:** `stroke-1` (1px stroke width)

**Implementation:**

```jsx
// Service cards
<Icon className="w-11 h-11 stroke-1 text-gray-600 mb-4" />

// Industry cards  
<Icon className="w-11 h-11 stroke-1 text-gray-600 mb-4" />

// Case study card icons (industry + service type)
<Icon className="w-10 h-10 stroke-1 text-gray-600" />
```

**Apply to:**
- All 3 service cards (Process Automation, AI Decision Support, Data Integration)
- All 6 industry cards (Legal Tech, Healthcare, Publishing, E-commerce, Education, Manufacturing)
- All case study card icons (both industry icons and service type icons)

**Visual goal:** Icons should appear noticeably thinner/lighter than Phase 11 implementation

**Note:** If Lucide icons don't support `stroke-1` class, use:
```jsx
<Icon strokeWidth={1} className="w-11 h-11 text-gray-600 mb-4" />
```

---

## CONTACT FORM FIELD LABELS (Phase 12 FIX)

### Left-Alignment (Still Not Applied from Phase 11)

**Current:** Labels are centered above input fields
**Required:** Labels must be left-aligned to input boxes

**Implementation:**

```astro
<!-- Each form field should follow this pattern -->
<div className="mb-4">
  <label 
    htmlFor="name"
    className="block text-sm font-medium text-gray-700 text-left mb-2"
  >
    Name
  </label>
  <input
    id="name"
    type="text"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg..."
  />
</div>
```

**Key classes for labels:**
- `block` - Ensures label takes full width
- `text-left` - Left-aligns text (NOT text-center)
- `mb-2` - Space between label and input

**Apply to all 4 fields:**
1. Name
2. Email
3. Company
4. Message

**Common mistake to avoid:**
Don't use `text-center` or center the label container with flexbox `items-center` or `justify-center`

---

## CONTACT CARD BUTTON ALIGNMENT (Phase 12 FIX)

### Email Card Button Misalignment

**Problem:** Email card button sits a few pixels lower than Video Call and Phone Call buttons

**Root cause:** Email card has extra element (email address + subtext) pushing button down

**Solution:** Use flexbox with consistent spacing

**Implementation:**

```jsx
// All 3 contact cards should use identical structure
<div className="bg-gray-50 border border-gray-100 rounded-xl p-6
                flex flex-col items-center justify-between
                min-h-[280px]"> <!-- Consistent min-height -->
  
  {/* Icon - consistent across all cards */}
  <div className="w-8 h-8 text-gray-600 mb-6">
    <Icon />
  </div>
  
  {/* Button - consistent margin across all cards */}
  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg mb-4">
    {buttonText}
  </button>
  
  {/* Bottom content - consistent spacing even if empty */}
  <div className="text-sm text-gray-600 text-center min-h-[40px]">
    {/* Email card: email address + (optional) subtext */}
    {/* Video/Phone cards: subtext only */}
  </div>
  
</div>
```

**Key alignment strategies:**

1. **Use `justify-between` on card container** - Distributes space evenly
2. **Consistent `mb-6` after icon** - Same spacing before button
3. **Consistent `mb-4` after button** - Same spacing before bottom content
4. **Use `min-h-[40px]` on bottom content div** - Reserves space even if empty
5. **Set `min-h-[280px]` on card** - Ensures equal heights

**Specific fix for Email card:**

```jsx
{/* Email card bottom content */}
<div className="text-sm text-gray-600 text-center min-h-[40px] flex flex-col gap-2">
  <a href="mailto:hello@automationarchitech.com" 
     onClick={handleCopyEmail}
     className="text-gray-700 hover:text-gray-900 cursor-pointer underline">
    hello@automationarchitech.com
  </a>
  {/* Note: Subtext "Expect reply within 24 hours" was removed in Phase 11 */}
</div>
```

**Verification:**
- All 3 buttons should align horizontally at same Y-position
- Use browser dev tools to check button top offset (should be identical across all 3 cards)

---

## CASE STUDY METRIC BANNERS (Phase 12)

### Lighten Background Color

**Current:** `bg-gray-700` (darker gray)
**New:** `bg-gray-200` or `bg-gray-300` (lighter gray)

**Text color adjustment required:**
- **Current:** `text-white` (white text on dark gray)
- **New:** `text-gray-900` (dark text on light gray)

**Implementation:**

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

**Color options (choose one):**
- `bg-gray-200` - Lighter gray (subtle)
- `bg-gray-300` - Medium-light gray (more contrast)

**Apply to:**
- Case studies index page (all 5 case study cards)
- Related cases section on individual case study pages (all 3 related case cards)

**Why this change:**
Dark gray banner was too heavy/dominant on cards. Lighter gray provides visual separation without overpowering card content.

---

## RESPONSIVE VERIFICATION (Phase 12)

### Desktop (1920x1080)
- [ ] Hero whitespace reduced to ~100px (headline near top)
- [ ] Rotating headline + service cards + stats visible above fold
- [ ] Icon strokes visibly thinner (1px not 1.5px)
- [ ] Contact form labels left-aligned
- [ ] All 3 contact card buttons align horizontally
- [ ] Case study metric banners light gray with dark text

### Tablet (768px)
- [ ] Hero spacing proportionally reduced
- [ ] Icons maintain 1px stroke
- [ ] Contact buttons still align

### Mobile (<768px)
- [ ] Hero spacing reduced (pt-16 or similar)
- [ ] Icons 1px stroke on all cards
- [ ] Contact form labels left-aligned
- [ ] Contact cards stack vertically with consistent button positioning

---

## TAILWIND CLASS REFERENCE

### Spacing Classes
```
pt-16  = 64px
pt-20  = 80px
pt-24  = 96px
pt-28  = 112px
pt-32  = 128px
```

### Stroke Width
```
stroke-1    = 1px
stroke-[1.5] = 1.5px
stroke-2    = 2px
```

### Background Grays
```
bg-gray-100 = #f3f4f6
bg-gray-200 = #e5e7eb (lightest option)
bg-gray-300 = #d1d5db (medium-light option)
bg-gray-700 = #374151 (Phase 11 - too dark)
```

---

**Document Version**: 3.1 (Phase 12 - Spacing & Alignment Refinements)
**Last Updated**: December 15, 2025
**Approved By**: Phil
