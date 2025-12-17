

# DESIGN SYSTEM LOCK FILE
## [Project Name] - Visual Design Constraints

**Status**: [âœ… LOCKED / ðŸ“ IN PROGRESS / ðŸ“‹ DRAFT]
**Last Updated**: [Date]
**Purpose**: Lock colors, fonts, and spacing that define brand identity

---

## âš ï¸ CRITICAL: [PRIMARY DESIGN CHARACTERISTIC]

**This site uses a [COLOR SCHEME] palette, NOT [common default].**

**Primary Brand Color**: [Color Name] ([hex code])
- Used for: [List primary uses]
- NOT [what it's not] or any [variant to avoid]

**Common Mistake**: AI models often default to [common default] for [industry] sites
**Prevention**: Always reference this file for color decisions

If implementing features and unsure of color:
1. Check this file first
2. Use [color scale name] ([range])
3. Primary actions = [primary color]
4. Never use [avoided color] unless explicitly added to this file

---

## COLOR PALETTE

### Primary Colors ([Color System Name])
**Note**: [Clarification about palette choice]

```css
--primary-[variant]: [hex]      /* [Usage description] */
--primary-[variant]-hover: [hex] /* [Usage description] */
--primary-light: [hex]     /* [Usage description] */
```

**Tailwind Equivalent**: 
- Primary: `[tailwind-class]` / `[tailwind-class]`
- Hover: `[hover-class]`
- Light: `[light-class]`

### Complete [Color Scale Name]
```css
--[color]-[value]: [hex]    /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
--[color]-[value]: [hex]   /* [Usage description with ~count if known] */
```

### Semantic Colors
**Note**: [When to use these / extraction notes]

```css
--success-[color]: [hex]   /* [Usage - e.g., Form success] */
--error-[color]: [hex]       /* [Usage - e.g., Form errors] */
--warning-[color]: [hex]  /* [Usage - e.g., Warnings if used] */
--info-[color]: [hex]     /* [Usage - e.g., Informational messages] */
```

### Background Colors
```css
--bg-primary: [hex]      /* [Usage description with ~count] */
--bg-secondary: [hex]    /* [Usage description with ~count] */
--bg-[variant]: [hex]  /* [Usage description] */
--bg-[variant]: [hex]    /* [Usage description] */
```

### [Additional Color Category if needed]
```css
--[name]: [hex]  /* [Usage description with ~count] */
```

---

## TYPOGRAPHY

### Font Families
```css
--font-sans: "[Primary Font]", [fallback], [fallback], [fallback], [generic]
/* [Note about font usage] */

--font-[type]: [Font stack or note about usage]
/* [Note about this font type] */
```

### Font Weights ([Primary Font Name])
**Note**: [Font supports weights X-Y. Site uses specific subset:]

```
[Element Type 1]:        font-[weight] ([numeric range])
[Element Type 2]:          font-[weight] ([numeric]) - [usage note]
[Element Type 3]:         font-[weight] ([numeric]) to font-[weight] ([numeric])
[Element Type 4]:         font-[weight] ([numeric]) to font-[weight] ([numeric])
[Element Type 5]:            font-[weight] ([numeric]) - [usage note]
[Element Type 6]:         font-[weight] ([numeric]) - [usage note]
```

### Usage by Component
```
[Component Name]:          [Font] [weights] ([elements])
[Component Name]:      [Font] [weights] ([elements])
[Component Name]:         [Font] [weights] ([elements])
[Component Name]:       [Font] [weights] ([elements])
[Component Name]:          [Font] [weights] ([elements])
[Component Name]:     [Font] [weights] ([elements])
```

### Font Sizes ([Extraction note if needed])
**Recommendation based on typical scale:**
```
[Element Type] ([Context]):     [tailwind-class] ([size]) or [alternative] ([size]) â†’ [weight-class]
[Element Type] ([Context]):  [tailwind-class] ([size]) â†’ [weight-class]
[Element Type] ([Context]):     [tailwind-class] ([size]) â†’ [weight-class]
[Element Type]:             [tailwind-class] ([size]) â†’ [weight-class] [additional note]
[Element Type] ([Context]):      [tailwind-class] ([size]) â†’ [weight-class]
[Element Type]:               [tailwind-class] ([size]) â†’ [weight-class]
[Element Type]:                 [tailwind-class] ([size]) â†’ [weight-class]
[Element Type]:           [tailwind-class] ([size]) â†’ [weight-class] [usage note]
```

### Line Heights
```
[Context]:      [tailwind-class] ([ratio])
[Context]:           [tailwind-class] ([ratio]) or [alternative] ([ratio])
[Context]:   [tailwind-class] ([ratio])
```

---

## SPACING SYSTEM

### Section Padding
```
Desktop:  [tailwind-spacing]  ([rem] / [px])
Mobile:   [tailwind-spacing]  ([rem] / [px])
```

### Container
```
Max Width:  [tailwind-width] or [alternative]
Padding:    [mobile-padding], [tablet-padding], [desktop-padding]
```

### Card Spacing
```
Internal Padding:  [desktop-padding], [mobile-padding]
Gap Between:       [desktop-gap], [mobile-gap]
```

### [Additional Spacing Context if needed]
```
[Element]:  [spacing value]
[Element]:    [spacing value]
```

---

## BORDERS & SHADOWS

### Border Radius
```
[Element Type]:      [tailwind-radius] ([rem] / [px])
[Element Type]:    [tailwind-radius] ([rem] / [px])
[Element Type]:      [tailwind-radius] ([rem] / [px])
```

### Shadows
```
[Element] [State]:       [tailwind-shadow]
[Element] [State]:         [tailwind-shadow]
[Element]:             [tailwind-shadow] [condition]
```

### Borders
```
[Element]:        [tailwind-border] [tailwind-color]
[Element]:       [tailwind-hover-border] [tailwind-hover-color]
[Element]:       [tailwind-border] [tailwind-color]
[Element]:         [tailwind-focus-ring] [tailwind-focus-color]
```

---

## TRANSITIONS & ANIMATIONS

### Transition Duration
```
Default:    [duration-class]
Fast:       [duration-class]
Slow:       [duration-class]
```

### Timing Function
```
Standard:   [timing-function]
```

### Hover Effects
```
[Element]:      [hover-effect] [additional-classes]
[Element]:    [hover-effect] [additional-classes]
[Element]:      [hover-behavior]
```

### [Special Animation Type] ([Context])
```
Animation Type:     [Description]
Duration per [unit]:  [duration] [breakdown]
Timing:            [Description of timing behavior]
[Property]:             [Array or list of values]
```

**Implementation notes:**
- [Note 1 about implementation]
- [Note 2 about implementation]
- [Note 3 about accessibility]

---

## BUTTONS

### [Button Type] ([Context])
```css
Background:     [tailwind-bg] ([hex])
Text:           [tailwind-text] ([hex])
Padding:        [large-padding], [medium-padding]
Font:           [weight] ([numeric]) - [Font Name]
Border Radius:  [radius-class]
Hover:          [hover-state] ([hex])
Shadow:         [Check if shadow used]
Transition:     [transition-behavior]
```

### [Button Type] ([Context])
```css
Background:     [color] or [alternative]
Text:           [color] or [alternative]
Border:         [border-spec] [color] ([hex])
Padding:        [large-padding], [medium-padding]
Font:           [weight] ([numeric]) - [Font Name]
Border Radius:  [radius-class]
Hover:          [hover-behavior] or [alternative]
```

### [Button Type] ([Context])
```css
Text:           [color] ([hex])
Font:           [weight] ([numeric]) - [Font Name]
Hover:          [hover-behavior] or [alternative]
Used in:        [Context list]
```

### Button States
```
[State]:   [styling specification]
[State]:    [Implementation note for state]
```

---

## ICONS

### Size
```
[Size]:      [size-class] or [dimension]
[Size]:     [size-class] or [dimension]
[Size]:      [size-class] or [dimension]
```

### Container (if used)
```
Background:     [color-class]
Border Radius:  [radius-class]
Padding:        [Specification by size]
```

---

## GRID SYSTEM

### Breakpoints ([Note - e.g., Tailwind defaults or customized])
```
[breakpoint]:   [px value]
[breakpoint]:   [px value]  
[breakpoint]:   [px value]
[breakpoint]:   [px value]
[breakpoint]:  [px value]
```

### Common Grid Patterns
```
[Layout Description]:    [grid-classes]
[Layout Description]:    [grid-classes]
Gap:                 [desktop-gap], [mobile-gap]
```

---

## FORMS

### Input Fields
```
Background:     [color]
Border:         [border-spec] [color]
Padding:        [padding-spec]
Font:           [Size specification]
Border Radius:  [radius-class]
Focus:          [focus-ring-spec] [focus-color]
Error:          [error-border]
```

### Labels
```
Font Weight:    [weight-class]
Color:          [color-class]
Size:           [size-class]
Margin:         [margin-spec]
```

### Error Messages
```
Color:          [color-class]
Size:           [size-class]
Margin:         [margin-spec]
```

---

## EXTRACTION CHECKLIST

To complete this file, extract from [source - e.g., domain.com]:

**Using Browser DevTools:**

1. **Colors**: 
   - [Extraction method 1]
   - [Extraction method 2]
   - [Extraction method 3]

2. **Fonts**:
   - [Extraction method 1]
   - [Extraction method 2]
   - [Extraction method 3]

3. **Spacing**:
   - [Extraction method 1]
   - [Extraction method 2]
   - [Extraction method 3]

4. **Borders/Shadows**:
   - [Extraction method 1]
   - [Extraction method 2]

5. **Buttons**:
   - [Extraction method 1]
   - [Extraction method 2]

**Or use the original project's `[config file]`:**
- [Alternative extraction method]

---

## USAGE RULES

### [Current Phase] ([Phase Name])
âœ… [Usage rule 1]
âœ… [Usage rule 2]
âœ… [Usage rule 3]

### [Future Phase] ([Phase Name])
âš ï¸ [Permission/condition 1]
âš ï¸ [Permission/condition 2]
âš ï¸ [Permission/condition 3]

### Always
âŒ [Prohibition 1]
âŒ [Prohibition 2]
âŒ [Prohibition 3]