# DESIGN SYSTEM LOCK FILE
# Lock foundational design tokens that should remain consistent across redesigns

**Status**: ✅ FILLED - Extracted from original site documentation
**Last Updated**: [Current Date]
**Purpose**: Lock colors, fonts, and spacing that define brand identity

---

## ⚠️ CRITICAL: GRAY-BASED DESIGN SYSTEM

**This site uses a GRAY/MONOCHROME palette, NOT blue.**

**Primary Brand Color**: Gray-900 (#111827)
- Used for: Headlines, primary CTAs, nav brand
- NOT blue-600 or any blue variant

**Common Mistake**: AI models often default to blue for tech/automation sites
**Prevention**: Always reference this file for color decisions

If implementing features and unsure of color:
1. Check this file first
2. Use gray scale (50-900)
3. Primary actions = gray-900
4. Never use blue unless explicitly added to this file

---

## COLOR PALETTE

### Primary Colors (Dark Gray System - No Blue)
**Note**: This site uses a gray/monochrome palette, not blue.

```css
--primary-dark: #111827      /* gray-900 - Primary CTA fills, headings */
--primary-dark-hover: #1f2937 /* gray-800 - Hover state for dark buttons */
--primary-light: #f9fafb     /* gray-50 - Light backgrounds */
```

**Tailwind Equivalent**: 
- Primary: `bg-gray-900` / `text-gray-900`
- Hover: `hover:bg-gray-800`
- Light: `bg-gray-50`

### Complete Gray Scale
```css
--gray-50: #f9fafb    /* Light backgrounds, gradients, hover states (~39 uses) */
--gray-100: #f3f4f6   /* Card borders/fills, icon pills, tag chips (~23 uses) */
--gray-200: #e5e7eb   /* Divider borders, benefit accents (~6 uses) */
--gray-300: #d1d5db   /* Secondary button outlines (~3 uses) */
--gray-400: #9ca3af   /* Icon strokes, muted helper text (~8 uses) */
--gray-500: #6b7280   /* Section labels, helper copy, timestamps (~33 uses) */
--gray-600: #4b5563   /* Paragraph body copy, nav links, descriptions (~22 uses) */
--gray-700: #374151   /* Inline links, secondary button text (~4 uses) */
--gray-800: #1f2937   /* Hover states for dark buttons, mobile nav (~4 uses) */
--gray-900: #111827   /* Headings, CTA fills, nav brand text (~38 uses) */
```

### Semantic Colors
**Note**: Extract these from current implementation if they exist. Standard recommendations:

```css
--success-green: #10b981   /* Form success (Tailwind green-500) */
--error-red: #ef4444       /* Form errors (Tailwind red-500) */
--warning-yellow: #f59e0b  /* Warnings if used (Tailwind amber-500) */
```

### Background Colors
```css
--bg-primary: #ffffff      /* White - main background (~21 uses) */
--bg-secondary: #f9fafb    /* gray-50 - alternating sections (~39 uses) */
--bg-gradient-start: #0f172a  /* Hero gradient start (meta theme color) */
--bg-gradient-end: [VARIES]    /* Hero gradient - check hero-gradient token */
```

### White
```css
--white: #ffffff  /* Section canvases, cards, CTA text (~21 uses) */
```

---

## TYPOGRAPHY

### Font Families
```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
/* Inter is primary font, system fonts as fallbacks */

--font-mono: [NOT USED - site uses Inter for all text including code if any]
```

### Font Weights (Inter)
**Note**: Inter supports weights 300-900. Site uses specific subset:

```
Headings (H1/H2):        font-light (300-400)
Section Labels:          font-semibold (600) - uppercase labels
Body Paragraphs:         font-normal (400) to font-medium (500)
Stats/Card Copy:         font-normal (400) to font-medium (500)
Buttons/CTAs:            font-medium (500) - primary buttons
Secondary Links:         font-normal (400) - bordered/secondary
```

### Usage by Component
```
Hero.astro:          Inter 300-400 (H1/H2), 500 (buttons)
Services.astro:      Inter 600 (section labels), 400-500 (descriptions)
About.astro:         Inter 300-400 (H2), 400-500 (body)
Contact.astro:       Inter 600 (labels), 400 (form fields)
Blog pages:          Inter 400-500 (all copy)
ServiceTemplate:     Inter 300-400 (hero titles), 400 (body)
```

### Font Sizes (Extract exact values from current implementation)
**Recommendation based on typical scale:**
```
Heading 1 (Page Title):     text-5xl (48px) or text-6xl (60px) → font-light
Heading 2 (Section Title):  text-4xl (36px) → font-light
Heading 3 (Card Title):     text-2xl (24px) → font-semibold
Section Labels:             text-sm (14px) → font-semibold uppercase
Body Large (Subtitle):      text-xl (20px) → font-normal
Body Regular:               text-base (16px) → font-normal/medium
Body Small:                 text-sm (14px) → font-normal
Helper/Meta text:           text-sm (14px) → font-normal (gray-500)
```

### Line Heights
```
Headlines:      leading-tight (1.25)
Body:           leading-relaxed (1.625) or leading-normal (1.5)
Compact text:   leading-snug (1.375)
```

---

## SPACING SYSTEM

### Section Padding
```
Desktop:  py-20  (5rem / 80px)
Mobile:   py-12  (3rem / 48px)
```

### Container
```
Max Width:  max-w-7xl or max-w-6xl
Padding:    px-4 (mobile), px-6 (tablet), px-8 (desktop)
```

### Card Spacing
```
Internal Padding:  p-8 (desktop), p-6 (mobile)
Gap Between:       gap-8 (desktop), gap-6 (mobile)
```

---

## BORDERS & SHADOWS

### Border Radius
```
Cards:      rounded-xl (0.75rem / 12px)
Buttons:    rounded-lg (0.5rem / 8px)
Icons:      rounded-lg (0.5rem / 8px)
```

### Shadows
```
Card Default:       shadow-lg
Card Hover:         shadow-xl
Button:             shadow-md (if used)
```

### Borders
```
Card Border:        border border-gray-100
Hover Border:       hover:border-gray-200
Input Border:       border border-gray-300
Focus Ring:         focus:ring-2 focus:ring-blue-500
```

---

## TRANSITIONS & ANIMATIONS

### Transition Duration
```
Default:    duration-300
Fast:       duration-200
Slow:       duration-500
```

### Timing Function
```
Standard:   ease-in-out
```

### Hover Effects
```
Cards:      hover:shadow-xl transition-all duration-300
Buttons:    hover:bg-blue-700 transition-colors duration-200
Links:      hover:underline
```

---

## BUTTONS

### Primary Button (Dark)
```css
Background:     bg-gray-900 (#111827)
Text:           text-white (#ffffff)
Padding:        px-8 py-4 (large), px-6 py-3 (medium)
Font:           font-medium (500) - Inter
Border Radius:  rounded-lg
Hover:          hover:bg-gray-800 (#1f2937)
Shadow:         [Check if shadow-md or shadow-lg used]
Transition:     transition-colors duration-200
```

### Secondary Button (Outlined)
```css
Background:     bg-white or bg-transparent
Text:           text-gray-900 or text-gray-700
Border:         border-2 border-gray-300 (#d1d5db)
Padding:        px-8 py-4 (large), px-6 py-3 (medium)
Font:           font-normal (400) - Inter
Border Radius:  rounded-lg
Hover:          hover:bg-gray-50 or hover:shadow-lg
```

### Link Buttons (Text-only)
```css
Text:           text-gray-700 (#374151)
Font:           font-normal (400) - Inter
Hover:          hover:underline or hover:text-gray-900
Used in:        Services "Learn more", Post CTAs
```

### Button States
```
Disabled:   opacity-50 cursor-not-allowed
Loading:    [Check current implementation for spinner/text]
```

---

## ICONS

### Size
```
Large:      text-4xl or w-16 h-16
Medium:     text-2xl or w-12 h-12
Small:      text-xl or w-8 h-8
```

### Container (if used)
```
Background:     bg-gray-200
Border Radius:  rounded-lg
Padding:        [VARIES BY SIZE]
```

---

## GRID SYSTEM

### Breakpoints (Tailwind defaults - confirm if customized)
```
sm:   640px
md:   768px  
lg:   1024px
xl:   1280px
2xl:  1536px
```

### Common Grid Patterns
```
3-Column Desktop:    grid-cols-1 md:grid-cols-3
2-Column Desktop:    grid-cols-1 md:grid-cols-2
Gap:                 gap-8 (desktop), gap-6 (mobile)
```

---

## FORMS

### Input Fields
```
Background:     bg-white
Border:         border border-gray-300
Padding:        px-4 py-3
Font:           [SIZE]
Border Radius:  rounded-lg
Focus:          focus:ring-2 focus:ring-blue-500 focus:border-transparent
Error:          border-red-500
```

### Labels
```
Font Weight:    font-medium
Color:          text-gray-700
Size:           text-sm
Margin:         mb-2
```

### Error Messages
```
Color:          text-red-600
Size:           text-sm
Margin:         mt-1
```

---

## EXTRACTION CHECKLIST

To complete this file, extract from automationarchitech.com:

**Using Browser DevTools:**

1. **Colors**: 
   - Inspect headline → Computed Styles → color
   - Inspect button → Background color
   - Inspect sections → Background colors

2. **Fonts**:
   - Inspect any text → Computed Styles → font-family
   - Check font-size for headlines, body, etc.
   - Check font-weight values

3. **Spacing**:
   - Inspect sections → padding values
   - Inspect cards → padding and margin
   - Check gap between elements

4. **Borders/Shadows**:
   - Inspect cards → border-radius, box-shadow
   - Check hover states (trigger hover, inspect)

5. **Buttons**:
   - Inspect CTA buttons → all computed styles
   - Check :hover state in DevTools

**Using Tailwind Config (if accessible):**
- If you have access to the original Lovable.dev project
- Check `tailwind.config.js` or `tailwind.config.ts`
- Extract exact color values and custom settings

---

## USAGE RULES

### Phase 2 (Current)
✅ Use these values when restoring features
✅ Match existing color palette exactly
✅ Use consistent spacing/sizing

### Phase 3 (Redesign)
⚠️ Can modify if brand identity changes
⚠️ Document any changes to this file
⚠️ Get approval before changing foundational colors/fonts

### Always
❌ Never invent new colors not in this palette
❌ Never use arbitrary spacing (always use defined scale)
❌ Never change fonts without updating this file

---

## NOTES

- This file locks BRAND IDENTITY elements (colors, fonts)
- Component-specific layouts can vary (that's Phase 3)
- If redesign changes brand colors, update this file first
- Keep this in sync with `tailwind.config.ts`
