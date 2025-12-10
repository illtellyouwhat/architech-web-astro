# DESIGN SYSTEM LOCK FILE - PHASE 9 UPDATE
## Service & Industry Card Collapse/Expand Behavior

**Date Updated**: December 10, 2024
**Phase**: Phase 9
**Changes**: Added collapse/expand specifications for service and industry cards

---

## CARD COLLAPSE/EXPAND SYSTEM (Phase 9)

### Service Cards (Hero Section)

**Default State (Collapsed):**
```
Visible Elements:
- Icon (Lucide icon)
- Title only ("Process Automation", etc.)

Hidden Elements:
- Description paragraph
- Expandable features list
- CTA button

Card Height: Auto (just enough for icon + title + padding)
Padding: py-6 px-6 (smaller vertical padding when collapsed)
```

**Hover State (Expanded - Desktop):**
```
Visible Elements:
- Icon (remains visible)
- Title (remains visible)
- Description paragraph (slides down)
- Expandable features list (slides down)
- CTA button (slides down)

Transition: all elements fade in + slide down
Transition Duration: 300ms (duration-300)
Transition Timing: ease-in-out
Transform: translateY(0) from translateY(-10px)
Opacity: 0 → 1

Card Height: Auto (expands to fit all content)
Padding: py-8 px-6 (increased vertical padding when expanded)
```

**Mobile Behavior (Scroll-Based Reveal):**
```
Trigger: Card enters viewport (Intersection Observer)
Behavior: Auto-expand when card scrolls into view
Transition: Same as desktop hover (300ms fade + slide)
Persistent: Once expanded, stays expanded (no collapse on scroll out)

Implementation: Use React island with IntersectionObserver
Threshold: 0.3 (30% of card visible triggers expansion)
```

---

### Industry Cards (Industries Section)

**Default State (Collapsed):**
```
Visible Elements:
- Icon (Lucide icon)
- Title only ("Legal Tech", "Healthcare", etc.)

Hidden Elements:
- Description paragraph (bullet points or prose)
- "See case studies" CTA button

Card Height: Auto (just enough for icon + title + padding)
Padding: py-6 px-6 (smaller vertical padding when collapsed)
```

**Hover State (Expanded - Desktop):**
```
Visible Elements:
- Icon (remains visible)
- Title (remains visible)
- Description paragraph (slides down)
- CTA button (slides down)

Transition: all elements fade in + slide down
Transition Duration: 300ms (duration-300)
Transition Timing: ease-in-out
Transform: translateY(0) from translateY(-10px)
Opacity: 0 → 1

Card Height: Auto (expands to fit all content)
Padding: py-8 px-6 (increased vertical padding when expanded)
```

**Mobile Behavior (Scroll-Based Reveal):**
```
Same as Service Cards:
- Auto-expand on scroll into viewport
- Intersection Observer threshold: 0.3
- Persistent expansion (no collapse)
- 300ms transition
```

---

## COLLAPSED CARD SPECIFICATIONS

### Visual Hierarchy (Collapsed State)

**Icon:**
```
Size: w-12 h-12 (or existing size)
Color: text-gray-600
Margin Bottom: mb-4 (space before title)
```

**Title:**
```
Font Size: text-xl or text-2xl
Font Weight: font-semibold
Color: text-gray-900
Line Height: leading-tight
Margin: No bottom margin in collapsed state
```

**Card Container:**
```
Background: bg-white or bg-gray-50
Border: border border-gray-100
Border Radius: rounded-xl
Shadow: shadow-md
Hover Shadow: hover:shadow-lg (even in collapsed state)
Cursor: cursor-pointer (indicates interactivity)
Transition: shadow transition-shadow duration-300
```

---

## EXPANDED CARD SPECIFICATIONS

### Visual Hierarchy (Expanded State)

**Icon:**
```
Same as collapsed (no change)
Size: w-12 h-12
Color: text-gray-600
Margin Bottom: mb-4
```

**Title:**
```
Same as collapsed (no change)
Font Size: text-xl or text-2xl
Font Weight: font-semibold
Color: text-gray-900
Margin Bottom: mb-3 (add space before description)
```

**Description Paragraph:**
```
Font Size: text-base
Font Weight: font-normal
Color: text-gray-600
Line Height: leading-relaxed
Margin Bottom: mb-4
Max Width: Full card width (no constraint)

Animation:
- Initial: opacity-0 translate-y-[-10px]
- Final: opacity-100 translate-y-0
- Duration: 300ms
- Timing: ease-in-out
```

**Expandable Features List (Service Cards Only):**
```
Font Size: text-sm
Font Weight: font-normal
Color: text-gray-600
Line Height: leading-relaxed
List Style: Bullet points with gap-2 between items
Margin Bottom: mb-4

Animation:
- Initial: opacity-0 translate-y-[-10px]
- Final: opacity-100 translate-y-0
- Duration: 300ms
- Timing: ease-in-out
- Delay: 50ms after description (stagger effect)
```

**CTA Button:**
```
Font Size: text-sm or text-base
Font Weight: font-medium
Color: text-gray-900
Background: bg-transparent
Border: border border-gray-300
Padding: px-4 py-2
Border Radius: rounded-lg
Hover: hover:bg-gray-50
Arrow Icon: → (optional, at end of text)

Animation:
- Initial: opacity-0 translate-y-[-10px]
- Final: opacity-100 translate-y-0
- Duration: 300ms
- Timing: ease-in-out
- Delay: 100ms after features list (stagger effect)
```

---

## IMPLEMENTATION PATTERN

### React Island Component

```jsx
// ServiceCard.jsx or IndustryCard.jsx
import { useState } from 'react';
import { useIntersection } from '../hooks/useIntersection'; // Custom hook

export default function Card({ icon, title, description, features, cta, ctaLink }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isIntersecting] = useIntersection({ threshold: 0.3 });
  
  // On mobile, expand when intersecting
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldExpand = isMobile ? isIntersecting : isExpanded;
  
  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
      className={`
        bg-white border border-gray-100 rounded-xl
        shadow-md hover:shadow-lg
        transition-all duration-300
        cursor-pointer
        ${shouldExpand ? 'py-8' : 'py-6'} px-6
      `}
    >
      {/* Icon */}
      <div className="w-12 h-12 text-gray-600 mb-4">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className={`text-2xl font-semibold text-gray-900 leading-tight ${shouldExpand ? 'mb-3' : ''}`}>
        {title}
      </h3>
      
      {/* Expandable Content */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${shouldExpand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] h-0'}
      `}>
        {shouldExpand && (
          <>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              {description}
            </p>
            
            {features && (
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                {features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            )}
            
            {cta && (
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                           text-gray-900 border border-gray-300 rounded-lg
                           hover:bg-gray-50 transition-colors duration-200"
              >
                {cta} →
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
```

### Custom Intersection Hook

```javascript
// hooks/useIntersection.js
import { useEffect, useRef, useState } from 'react';

export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isIntersecting) {
        setIsIntersecting(true);
        // Once intersected, stop observing (persistent expansion)
        observer.disconnect();
      }
    }, options);
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [options, isIntersecting]);
  
  return [ref, isIntersecting];
}
```

---

## TRANSITION CONSISTENCY

**Timing Reference:**
- Hero subheadline hover reveal: 300ms (existing)
- Service/Industry card expand: 300ms (matching)
- Contact card interactions: 200ms (faster for buttons)
- Tag hover states: 200ms (faster for links)

**Animation Curve:**
- All card animations: `ease-in-out`
- Button/link hovers: `ease-in-out`
- Consistent across all interactive elements

---

## ACCESSIBILITY REQUIREMENTS

**Keyboard Navigation:**
```
- Cards focusable via tab key
- Enter key triggers expansion (desktop)
- Focus ring visible: focus:ring-2 focus:ring-gray-400
- Screen readers announce expanded state
```

**ARIA Attributes:**
```
<div
  role="button"
  aria-expanded={shouldExpand}
  aria-label={`${title} - ${shouldExpand ? 'expanded' : 'collapsed'}`}
  tabIndex={0}
  onKeyPress={(e) => e.key === 'Enter' && toggleExpanded()}
>
```

**Reduced Motion:**
```
@media (prefers-reduced-motion: reduce) {
  .card-transition {
    transition: none;
  }
}
```

---

## RESPONSIVE BREAKPOINTS

**Mobile (< 768px):**
```
- Cards stack vertically (grid-cols-1)
- Auto-expand on scroll (IntersectionObserver)
- No hover interaction (scroll-based only)
- Gap between cards: gap-6
```

**Tablet (768px - 1024px):**
```
- Cards in 2 columns (grid-cols-2) for services
- Cards in 2 columns (grid-cols-2) for industries
- Hover interaction enabled
- Gap between cards: gap-6
```

**Desktop (1024px+):**
```
- Service cards: 3 columns (grid-cols-3)
- Industry cards: 3 columns (grid-cols-3)
- Hover interaction enabled
- Gap between cards: gap-8
```

---

**Document Version**: 2.1 (Phase 9 - Card Collapse/Expand)
**Last Updated**: December 10, 2024
**Approved By**: Phil
