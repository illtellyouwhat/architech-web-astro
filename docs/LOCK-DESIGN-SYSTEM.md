# DESIGN SYSTEM LOCK FILE - PHASE 11 UPDATE
## Automation Architech - Visual Polish & Layout

**Date Updated**: December 15, 2025
**Phase**: Phase 11
**Changes**: Icon sizing, About section layout, metric banners, tooltips, hero positioning, stats scaling

---

## HERO SECTION POSITIONING (Phase 11)

### Spacing Adjustments

**Remove Small Headline Space:**
```
Previous: Small "Automation Architech" headline with mb-4 or mb-6
Action: Delete element entirely
Result: Rotating headline moves up by ~40-60px
```

**Rotating Headline Position:**
```
Margin Top: Reduce by amount previously occupied by small headline
Goal: Fit hero content + service cards + top stats above fold
Breakpoint consideration: May need different spacing on mobile vs desktop
```

**Above Fold Target Content:**
```
1. Rotating headline: "Your [X] needs data"
2. Subheadline: "We help organizations..."  
3. Primary CTA: "See Our Work"
4. Secondary CTA: "Book 15-Minute Discovery Call"
5. Service cards: 3 cards (Process Automation, AI Decision Support, Data Integration)
6. Top stats: 4 cards (50+ Projects, 8 Years, 87.5%, 99%)
```

**Implementation Strategy:**
- Reduce vertical spacing between hero elements (mb-6 → mb-4 where possible)
- Reduce service card padding when needed
- Scale stats down by 15% to fit within viewport

---

## STATS SIZING (Phase 11)

### Top Stats (Above Fold)

**Size Reduction: 15%**

**Current Sizing (approximate):**
```
Number: text-4xl or text-5xl (36-48px)
Label: text-base or text-lg (16-18px)
Container padding: p-6 or p-8
```

**New Sizing (15% reduction):**
```
Number: text-3xl (30px) [was text-4xl/5xl ~40px]
Label: text-sm (14px) [was text-base ~16px]
Container padding: p-4 or p-5 (reduce by ~15-20%)
Icon size: w-6 h-6 [was w-8 h-8]
```

**Formula:**
- Original: 100% scale
- Phase 11: 85% scale
- All typography, spacing, and icons reduced proportionally

**Responsive Behavior:**
```
Desktop (1024px+): 4 cards in row, grid-cols-4
Tablet (768px-1024px): 2 cards per row, grid-cols-2
Mobile (<768px): 1 card per row, grid-cols-1
```

**Card Styling:**
```
Background: bg-gray-50 or bg-white
Border: border border-gray-100
Border Radius: rounded-lg (slightly smaller than service cards)
Shadow: shadow-sm (subtle)
Hover Shadow: hover:shadow-md
Transition: transition-shadow duration-200
```

### About Section Stats (Link to Specific Cases)

**Sizing:** Keep current sizing (no reduction - these stay below fold)

**Behavior:** Each stat card links to specific case study (not generic /case-studies page)

**Icon Changes:**
```
Stat 1 (6-7x Capacity): lucide:users or lucide:trending-up
Stat 2 (87.5% Time): lucide:clock or lucide:timer
Stat 3 (16 hrs Saved): lucide:trending-up or lucide:bar-chart
Stat 4 (200K → 2M): lucide:arrow-up-right or lucide:activity (growth indicator)
```

**Note:** Stat 4 changed from "99% AI Accuracy" to "200K → 2M MAU Growth"

---

## ICON SIZING & STYLING (Phase 11)

### Service Cards (Hero Section)

**Current Icon Size:** w-12 h-12 (48px)
**New Icon Size:** Reduce by ~10% → w-11 h-11 (~44px) or custom sizing

**Stroke Width Adjustment:**
```
Current: Default Lucide stroke (typically 2px)
New: Thinner stroke (1.5px or stroke-[1.5])
Implementation: Apply stroke-[1.5] class or custom CSS
```

**Example:**
```jsx
<Icon className="w-11 h-11 stroke-[1.5] text-gray-600" />
```

**Reference Site:** automationarchitech.com service card icons (thinner, lighter appearance)

### Industry Cards (Industries Section)

**Current Icon Size:** w-12 h-12 (48px)
**New Icon Size:** Same as service cards - reduce by ~10%

**Stroke Width:**
```
Same as service cards: stroke-[1.5]
Consistent visual weight across all card icons
```

### Case Study Card Icons

**Industry Icons (Left Side):**
```
Current Size: [varies]
New Size: Reduce by ~10% from current
Stroke: stroke-[1.5] (thinner)
Tooltip: Show industry name on hover ("SaaS", "Healthcare", etc.)
```

**Service Type Icons (Right Side - NEW):**
```
Size: Match industry icon size
Stroke: stroke-[1.5]
Position: Aligned to right edge of card
Tooltip: Show service type on hover ("AI Decision Support", "Process Automation", etc.)
Icons:
- Process Automation: lucide:settings or lucide:cog
- AI Decision Support: lucide:brain or lucide:sparkles
- Multi-Platform Data Integration: lucide:database or lucide:network
```

**Icon Positioning on Card:**
```
Layout: Flexbox with justify-between
Left: Industry icon
Right: Service type icon
Both: Same size, same stroke weight, same color (text-gray-600)
Spacing: Icons sit at top-right and top-left of card content area
```

---

## TOOLTIPS (Phase 11)

### Implementation Pattern

**Tooltip Behavior:**
```
Trigger: Mouse hover over icon
Display: Small popup box with text
Position: Above icon (or below if insufficient space)
Transition: Fade in 150ms, fade out 150ms
Z-index: z-50 (above card content)
```

**Tooltip Styling:**
```
Background: bg-gray-900
Text Color: text-white
Font Size: text-xs (12px)
Padding: px-2 py-1
Border Radius: rounded
Shadow: shadow-lg
Arrow: Optional small triangle pointing to icon
Max Width: max-w-[200px] (for longer text)
White Space: whitespace-nowrap (for short labels)
```

**Example Implementation:**
```jsx
<div className="relative group">
  <Icon className="w-10 h-10 stroke-[1.5] text-gray-600" />
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-150
                  bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg
                  whitespace-nowrap pointer-events-none z-50">
    SaaS
  </div>
</div>
```

**Accessibility:**
```
aria-label="{industry or service type name}"
role="img"
title="{industry or service type name}" (fallback for non-CSS tooltip support)
```

**Tooltip Content:**

Case Study Index Page & Related Cases:
- Industry icon hover → "SaaS", "Healthcare", "Manufacturing", "Publishing & Media", "E-commerce", etc.
- Service type icon hover → "AI Decision Support", "Process Automation", "Multi-Platform Data Integration"

---

## METRIC BANNERS (Phase 11)

### Case Study Cards - Metric Highlight

**Banner Placement:**
```
Location: Behind/around the metric number and label
Position: Below case study title, spanning full card width
Background: bg-gray-700 or bg-gray-800 (darker gray)
```

**Banner Styling:**
```
Background: bg-gray-700 (darker gray from palette)
Padding: py-3 px-4 or py-4 px-6 (vertical padding to create banner height)
Width: Full card width (w-full)
Border Radius: None on sides, or subtle rounded-sm
Text Color: text-white (white text on dark gray background)
```

**Metric Display Inside Banner:**
```
Number: text-2xl or text-3xl font-bold text-white
Label: text-sm or text-base font-medium text-gray-100
Layout: Flexbox column (flex-col) centered, or inline with gap
```

**Example Structure:**
```jsx
<div className="w-full bg-gray-700 py-3 px-4 rounded-sm">
  <div className="flex items-baseline gap-2">
    <span className="text-3xl font-bold text-white">87.5%</span>
    <span className="text-sm font-medium text-gray-100">Time Reduction</span>
  </div>
</div>
```

**Usage:**
- Case Studies Index Page: All 5 case study cards
- Related Cases Section: All 3 related case cards (on individual case study pages)

**Consistency:**
```
Same styling for both index cards and related case cards
Banner creates visual separation between title and tags
Draws attention to the impressive metric (primary selling point)
```

---

## ABOUT SECTION LAYOUT (Phase 11)

### Desktop Layout (1024px+)

**Structure:**
```
2-column grid: grid-cols-2
Column 1 (Left): About cards (Tailored Solutions, Proven Results, Expert Team)
Column 2 (Right): Founder photo placeholder
Gap: gap-8 or gap-12
```

**About Cards Column:**
```
Layout: Vertical stack (flex-col)
Card Behavior: Collapse/expand on hover (same as service/industry cards)
Default State: Show title only
Expanded State: Show title + description
Gap Between Cards: gap-4 or gap-6
```

**Founder Photo Placeholder:**
```
Aspect Ratio: 3:4 or 4:5 (portrait orientation)
Background: bg-gray-200 or bg-gray-100 (placeholder)
Border: border border-gray-300 (optional)
Border Radius: rounded-lg or rounded-xl
Display: Flex container with centered "Photo Placeholder" text
Height: Match total height of 3 about cards (use flexbox or grid alignment)
```

**Example Placeholder:**
```jsx
<div className="bg-gray-200 border border-gray-300 rounded-xl 
                flex items-center justify-center
                aspect-[3/4] h-full">
  <span className="text-gray-500 text-lg">Founder Photo</span>
</div>
```

### Mobile Layout (<768px)

**Structure:**
```
Stack vertically (flex-col or grid-cols-1)
Order:
1. About cards (3 cards stacked)
2. Founder photo placeholder (below cards)
Gap: gap-8
```

**About Cards:**
```
Same collapse/expand behavior as mobile service cards
Auto-expand on scroll into viewport (IntersectionObserver)
Gap between cards: gap-6
```

**Founder Photo:**
```
Full width: w-full
Reduced aspect ratio on mobile: aspect-[4/5] or aspect-square
Max height: max-h-[400px] (prevent excessive vertical space)
```

---

## CASE STUDIES PAGE HEADER (Phase 11)

### Subheadline Hover Reveal

**Default State:**
```
Headline: "Real Projects. Real Results." (visible, always shown)
Subheadline: Hidden (opacity-0)
```

**Hover State (Desktop):**
```
Trigger: Mouse hover over headline
Subheadline: Visible (opacity-100)
Transition: opacity transition-opacity duration-300 ease-in-out
Position: Directly below headline (no layout shift)
```

**Mobile Behavior:**
```
Subheadline: Always visible (no hover state on mobile)
Reason: Hover doesn't work well on touch devices
Implementation: Use media query or conditional rendering
```

**Styling:**
```
Subheadline Font Size: text-lg or text-xl
Subheadline Color: text-gray-600
Subheadline Line Height: leading-relaxed
Subheadline Max Width: max-w-2xl or max-w-3xl (centered)
```

**Implementation Pattern:**
```jsx
<div className="text-center">
  <h1 className="text-4xl font-bold text-gray-900 group">
    Real Projects. Real Results.
    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4
                   opacity-0 md:group-hover:opacity-100 md:opacity-100
                   transition-opacity duration-300">
      From 6-7x capacity increases to 87.5% time reductions—see how we've 
      helped companies automate their most critical processes.
    </p>
  </h1>
</div>
```

**Note:** `md:opacity-100` ensures subheadline is always visible on mobile/tablet

---

## CONTACT FORM FIELD LABELS (Phase 11)

### Label Alignment

**Current (if centered):** Labels may be centered above input boxes
**New:** Labels left-aligned to input boxes

**Styling:**
```
Alignment: text-left
Font Weight: font-medium or font-semibold
Font Size: text-sm
Color: text-gray-700
Margin Bottom: mb-2 (space between label and input)
```

**Example Structure:**
```jsx
<div className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700 text-left mb-2">
      Name
    </label>
    <input type="text" className="w-full..." />
  </div>
  
  <div>
    <label className="block text-sm font-medium text-gray-700 text-left mb-2">
      Email
    </label>
    <input type="email" className="w-full..." />
  </div>
  
  <!-- etc. -->
</div>
```

**Key Classes:**
```
block: Ensures label takes full width
text-left: Left-aligns label text
mb-2: Space between label and input
```

---

## FOOTER SOCIAL ICONS (Phase 11)

### Icon Replacement

**Remove:**
```
- lucide:code
- lucide:database  
- lucide:workflow (or similar tech icons)
```

**Add:**
```
- lucide:linkedin
- lucide:twitter (or custom X logo if Lucide doesn't have updated icon)
```

**Sizing:**
```
Size: Same as previous icons (w-6 h-6 or current size)
Color: text-gray-600
Hover: text-gray-900
Transition: transition-colors duration-200
```

**Links:**
```
LinkedIn: [PLACEHOLDER - href="#" or href="javascript:void(0)" temporarily]
X/Twitter: [PLACEHOLDER - href="#" or href="javascript:void(0)" temporarily]
Target: target="_blank" rel="noopener noreferrer" (open in new tab)
```

**Layout:**
```
Display: flex gap-4 or gap-6
Position: Below tagline text
Alignment: Centered (justify-center) or left-aligned depending on footer layout
```

**Example:**
```jsx
<div className="flex gap-4 mt-4">
  <a href="#" target="_blank" rel="noopener noreferrer"
     className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
    <LinkedInIcon className="w-6 h-6" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer"
     className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
    <TwitterIcon className="w-6 h-6" />
  </a>
</div>
```

---

## RESPONSIVE CONSIDERATIONS (Phase 11)

### Hero Above-Fold Target

**Desktop (1024px+):**
```
Goal: Fit hero + service cards + stats in single viewport (~900-1080px height)
Strategy: Reduce spacing, scale stats down 15%, remove small headline
Service cards: May need to reduce padding from py-8 to py-6 when collapsed
Stats: Definitely reduce padding from p-6 to p-4
```

**Tablet (768px-1024px):**
```
Service cards: 2-column grid (may not all fit above fold)
Stats: 2-column grid (may not fit above fold)
Acceptable: Some scrolling on tablet viewports
```

**Mobile (<768px):**
```
All elements stack vertically
Above fold not critical (mobile users expect scrolling)
Focus: Ensure elements are properly sized and spaced for mobile viewing
```

### About Section

**Desktop:** 2-column (cards left, photo right)
**Tablet:** May stack or remain 2-column depending on space
**Mobile:** Stack vertically (cards first, then photo)

---

## PHASE 11 SUMMARY

### Key Visual Changes:

1. **Hero:** Remove small headline, move rotating headline up
2. **Icons:** Reduce size by ~10%, thinner stroke (1.5px)
3. **Stats:** Top 4 stats scaled down 15%, moved above fold
4. **About:** 2-column layout (cards + photo), stat 4 updated to growth metric
5. **Contact:** Form labels left-aligned, email card subtext removed
6. **Footer:** Replace tech icons with social media icons (LinkedIn, X)
7. **Case Studies:** Metric banners (dark gray bg), service type icons with tooltips, hover subheadline
8. **Tooltips:** Industry and service type icons show labels on hover

---

**Document Version**: 3.0 (Phase 11 - Visual Polish)
**Last Updated**: December 15, 2025
**Approved By**: Phil
