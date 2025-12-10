# PHASE 9 IMPLEMENTATION SPEC
## UI Polish & Interactive Improvements

**Date**: December 10, 2024
**Phase**: Phase 9 - UI Polish
**Scope**: Service/Industry card collapse, metric card links, contact section restructure, case study filtering fix

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT_HEADER.md` completely
2. Review LOCK-CONTENT-updated.md (Phase 9 contact section changes)
3. Review LOCK-DESIGN-SYSTEM-updated.md (Phase 9 card collapse specs)
4. Reference existing LOCK-architecture.md for tech stack rules

---

## OVERVIEW

This phase improves homepage interactivity and fixes case study filtering. Changes include:
1. Collapse service/industry cards to show only titles, expand on hover/scroll
2. Make About section metric cards clickable
3. Restructure contact cards with consistent formatting and copy-to-clipboard
4. Fix case study filtering logic (URL changes but cards don't reorder)

**All copy comes from LOCK-content.md / LOCK-CONTENT-updated.md** - reference for exact text.

---

## 1. SERVICE CARDS - COLLAPSE/EXPAND BEHAVIOR

### Files: Service card components (likely `/src/components/ServiceCard.jsx` or similar)

### 1.1 Default State (Collapsed)

**Current:**
Cards show icon, title, description, and features all the time

**New:**
Cards show only icon and title initially

**Implementation requirements:**
- Hide description paragraph by default
- Hide expandable features list by default
- Hide CTA button by default
- Reduce card vertical padding: `py-6` (collapsed) vs `py-8` (expanded)
- Card height auto-adjusts based on content visibility
- Maintain cursor-pointer and shadow-md â†' hover:shadow-lg

### 1.2 Desktop Hover State (Expanded)

**Trigger:** Mouse enters card area (`onMouseEnter`)

**Behavior:**
- Fade in description paragraph (opacity 0 â†' 1, translateY(-10px) â†' 0)
- Fade in features list with 50ms delay (stagger effect)
- Fade in CTA button with 100ms delay (stagger effect)
- Increase card padding to `py-8`
- Transition duration: 300ms
- Timing function: ease-in-out

**Implementation approach:**
```jsx
// ServiceCard.jsx (React island)
import { useState } from 'react';

export default function ServiceCard({ icon, title, description, features, cta, ctaLink }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // On mobile, use intersection observer instead
  const [ref, isIntersecting] = useIntersection({ threshold: 0.3 });
  const shouldExpand = isMobile ? isIntersecting : isExpanded;
  
  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
      className={`
        bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg
        transition-all duration-300 cursor-pointer
        ${shouldExpand ? 'py-8' : 'py-6'} px-6
      `}
    >
      <div className="w-12 h-12 text-gray-600 mb-4">
        {/* Lucide icon */}
      </div>
      
      <h3 className={`text-2xl font-semibold text-gray-900 ${shouldExpand ? 'mb-3' : ''}`}>
        {title}
      </h3>
      
      {/* Expandable content */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${shouldExpand 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-[-10px] h-0 overflow-hidden'
        }
      `}>
        {shouldExpand && (
          <>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              {description}
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              {features.map((f, i) => <li key={i}>• {f}</li>)}
            </ul>
            <a href={ctaLink} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              {cta} →
            </a>
          </>
        )}
      </div>
    </div>
  );
}
```

### 1.3 Mobile Behavior (Scroll-Based Expansion)

**Trigger:** Card enters viewport (IntersectionObserver)

**Behavior:**
- Auto-expand when 30% of card is visible
- Once expanded, stays expanded (persistent)
- No collapse on scroll out
- Same 300ms transition as desktop
- No hover interaction on mobile

**Implementation:**
Create custom hook `/src/hooks/useIntersection.js`:

```javascript
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
        observer.disconnect(); // Persistent expansion
      }
    }, options);
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [options, isIntersecting]);
  
  return [ref, isIntersecting];
}
```

**Import and use in ServiceCard:**
```jsx
import { useIntersection } from '../hooks/useIntersection';

// Inside component:
const [ref, isIntersecting] = useIntersection({ threshold: 0.3 });
```

### 1.4 Content from LOCK-content.md

Reference LOCK-content.md lines 125-182 for exact service card copy:
- Service Card 1: Process Automation
- Service Card 2: AI-Powered Decision Support
- Service Card 3: Multi-Platform Data Integration

---

## 2. INDUSTRY CARDS - SAME COLLAPSE/EXPAND PATTERN

### Files: Industry card components (likely `/src/components/IndustryCard.jsx` or similar)

### 2.1 Apply Same Behavior

Industry cards follow **identical pattern** to service cards:
- Collapsed: Icon + title only
- Desktop hover: Expand with 300ms transition
- Mobile: Auto-expand on scroll into viewport
- Persistent expansion on mobile

### 2.2 Content Differences

**Industry cards have:**
- Icon (Lucide icon)
- Title (e.g., "Legal Tech", "Healthcare")
- Description paragraph (bullet points or prose)
- CTA button: "See case studies" â†' `/case-studies?industry=[encoded-name]`

**NO features list** (only service cards have expandable features)

### 2.3 Content from LOCK-content.md

Reference LOCK-content.md lines 204-257 for exact industry card copy:
- Legal Tech, Healthcare, Publishing & Media, E-commerce, Education Technology, Manufacturing

---

## 3. ABOUT SECTION METRIC CARDS - MAKE CLICKABLE

### Files: About section component (`/src/components/About.astro` or similar)

### 3.1 Add Links to Metric Cards

**Current:**
4 metric cards in About section are static (no links)

**New:**
All 4 cards link to `/case-studies`

**Metric cards:**
1. "6-7x" - Capacity Increase
2. "87.5%" - Time Reduction
3. "16 hrs" - Saved Per Week
4. "99%" - AI Accuracy

**Implementation:**
Wrap each card in `<a href="/case-studies">` tag or convert card container to link:

```astro
<a href="/case-studies" class="block bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 text-gray-600">
      {/* Icon */}
    </div>
    <div>
      <div class="text-4xl font-light text-gray-900">{metric}</div>
      <div class="text-sm font-semibold text-gray-600">{label}</div>
      <div class="text-xs text-gray-500">{context}</div>
    </div>
  </div>
</a>
```

**Hover state:**
- Increase shadow: `hover:shadow-lg`
- Cursor: `cursor-pointer` (implicit on `<a>`)
- Transition: `transition-shadow duration-300`

---

## 4. CONTACT SECTION - RESTRUCTURE CARDS

### Files: Contact section component (`/src/components/Contact.astro` or similar)

### 4.1 Contact Form - Button Color Fix

**Current:**
Submit button may be blue

**New:**
```astro
<button 
  type="submit" 
  class="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
>
  {isLoading ? 'Sending...' : 'Send Message'}
</button>
```

**CRITICAL:** Background must be `bg-gray-900`, NOT any blue variant.

### 4.2 Contact Method Cards - New Structure

**Current:**
3 cards with inconsistent formatting:
- Email card: Has label text between icon and email address
- Google Meet card: Has label text "Schedule via Google Meet" between icon and button
- Phone card: Has label text "Schedule a Phone Call" between icon and button

**New - ALL 3 cards match this structure:**
1. Lucide icon (top, centered)
2. Black button (center)
3. Gray subtext (bottom)

**Remove all label text between icon and button.**

### 4.3 Card 1: Email (Updated)

**Structure:**
```astro
<div class="flex flex-col items-center justify-between min-h-[280px] bg-gray-50 border border-gray-100 rounded-xl p-6">
  <!-- Icon -->
  <Icon name="lucide:mail" class="w-8 h-8 text-gray-600 mb-6" />
  
  <!-- Button -->
  <a 
    href="mailto:hello@automationarchitech.com"
    class="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-4"
  >
    Email Us
  </a>
  
  <!-- Clickable email address with copy-to-clipboard -->
  <button
    onClick={handleCopyEmail}
    class="text-gray-700 hover:text-gray-900 underline cursor-pointer text-sm mb-2"
  >
    {copied ? 'Copied!' : 'hello@automationarchitech.com'}
  </button>
  
  <!-- Subtext -->
  <p class="text-sm text-gray-600 text-center max-w-xs">
    Expect a reply within 24 hours
  </p>
</div>
```

**Copy-to-Clipboard Implementation:**
Create React island for email card with state:

```jsx
// EmailContactCard.jsx
import { useState } from 'react';
import { Icon } from 'astro-icon/components';

export default function EmailContactCard() {
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@automationarchitech.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-between min-h-[280px] bg-gray-50 border border-gray-100 rounded-xl p-6">
      <Icon name="lucide:mail" className="w-8 h-8 text-gray-600 mb-6" />
      
      <a 
        href="mailto:hello@automationarchitech.com"
        className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-4"
      >
        Email Us
      </a>
      
      <button
        onClick={handleCopyEmail}
        className="text-gray-700 hover:text-gray-900 underline cursor-pointer text-sm mb-2"
      >
        {copied ? 'Copied!' : 'hello@automationarchitech.com'}
      </button>
      
      <p className="text-sm text-gray-600 text-center max-w-xs">
        Expect a reply within 24 hours
      </p>
    </div>
  );
}
```

### 4.4 Card 2: Video Call (Updated)

**Remove:** Label text "Schedule via Google Meet" between icon and button

**Update button text:** "Schedule via Google Meet" â†' "Schedule Google Meet"

**Structure:**
```astro
<div class="flex flex-col items-center justify-between min-h-[280px] bg-gray-50 border border-gray-100 rounded-xl p-6">
  <!-- Icon -->
  <Icon name="lucide:video" class="w-8 h-8 text-gray-600 mb-6" />
  
  <!-- Button -->
  <a 
    href="https://calendar.app.google/EVcS3xj7ud1BWtkL6"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-4"
  >
    Schedule Google Meet
  </a>
  
  <!-- Subtext -->
  <p class="text-sm text-gray-600 text-center max-w-xs">
    Book a video call at a time that works for you.
  </p>
</div>
```

### 4.5 Card 3: Phone Call (Updated)

**Remove:** Label text "Schedule a Phone Call" between icon and button

**Structure:**
```astro
<div class="flex flex-col items-center justify-between min-h-[280px] bg-gray-50 border border-gray-100 rounded-xl p-6">
  <!-- Icon -->
  <Icon name="lucide:phone" class="w-8 h-8 text-gray-600 mb-6" />
  
  <!-- Button -->
  <a 
    href="https://calendar.app.google/mnKPd1jZJn9fyKTu9"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-4"
  >
    Schedule Phone Call
  </a>
  
  <!-- Subtext -->
  <p class="text-sm text-gray-600 text-center max-w-xs">
    Prefer to talk by phone? Schedule a call that fits your schedule.
  </p>
</div>
```

### 4.6 Card Grid Layout

**Container:**
```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  <EmailContactCard client:load />
  {/* Card 2 */}
  {/* Card 3 */}
</div>
```

**All cards:**
- Same min-height: `min-h-[280px]`
- Same padding: `p-6`
- Same background: `bg-gray-50`
- Same border: `border border-gray-100`
- Same border radius: `rounded-xl`
- Flexbox: `flex flex-col items-center justify-between`

---

## 5. CASE STUDIES FILTERING - DEBUG & FIX

### Files: Case studies index page (`/src/pages/case-studies/index.astro` or similar)

### 5.1 Current Issue

**Symptoms:**
- URL changes correctly: `/case-studies` â†' `/case-studies?service=process-automation`
- Cards do NOT reorder
- Mixed Analytics and Vextras always appear first regardless of filter
- No console errors

**Likely cause:**
Filtering logic is reading URL params but not actually sorting the results

### 5.2 Correct Filtering Logic

**Expected behavior:**
1. Read URL search params (`?industry=` or `?service=`)
2. Sort case studies: **matching cases FIRST**, then others
3. Within each group, maintain original `order` field sorting

**Implementation:**
```astro
---
import { getCollection } from 'astro:content';

// Get all case studies
let caseStudies = await getCollection('case-studies');

// Read URL params
const url = new URL(Astro.request.url);
const industryFilter = url.searchParams.get('industry');
const serviceFilter = url.searchParams.get('service');

// Apply filtering
if (industryFilter || serviceFilter) {
  caseStudies.sort((a, b) => {
    // Check if case study matches filter
    const aMatches = industryFilter 
      ? a.data.industry.some(ind => 
          ind.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') === industryFilter
        )
      : a.data.solutionType?.toLowerCase().replace(/\s+/g, '-') === serviceFilter;
    
    const bMatches = industryFilter
      ? b.data.industry.some(ind => 
          ind.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') === industryFilter
        )
      : b.data.solutionType?.toLowerCase().replace(/\s+/g, '-') === serviceFilter;
    
    // Sort matching cases first
    if (aMatches && !bMatches) return -1;
    if (!aMatches && bMatches) return 1;
    
    // If both match or both don't match, maintain original order
    return a.data.order - b.data.order;
  });
}
---
```

### 5.3 URL Encoding Consistency

**Tags must encode correctly:**
- "Publishing & Media" â†' `publishing-media` (remove `&`, replace spaces with `-`)
- "AI Decision Support" â†' `ai-decision-support`
- "Process Automation" â†' `process-automation`

**When comparing:**
```javascript
// Normalize both sides
const normalizedFilter = industryFilter.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
const normalizedIndustry = industry.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');

if (normalizedIndustry === normalizedFilter) {
  // Match found
}
```

### 5.4 Debug Checklist

If filtering still doesn't work after implementation:

1. Console log the filter value:
   ```javascript
   console.log('Filter:', industryFilter || serviceFilter);
   ```

2. Console log case study data:
   ```javascript
   console.log('Case studies:', caseStudies.map(c => ({
     title: c.data.title,
     industry: c.data.industry,
     solutionType: c.data.solutionType
   })));
   ```

3. Console log matches:
   ```javascript
   console.log('Matches:', caseStudies.map(c => ({
     title: c.data.title,
     matches: /* matching logic here */
   })));
   ```

4. Verify frontmatter data in markdown files matches expected format

---

## 6. INTEGRATION CHECKLIST

After implementation, verify:

### Service & Industry Cards
- [ ] Cards show only icon + title when page loads (desktop)
- [ ] Hover over card expands description + features + CTA (desktop)
- [ ] Hover off card collapses back to icon + title (desktop)
- [ ] Transition is smooth (300ms, ease-in-out)
- [ ] Cards auto-expand when scrolling into view (mobile)
- [ ] Expanded cards stay expanded on mobile (persistent)
- [ ] No horizontal scrolling on mobile
- [ ] All copy matches LOCK-content.md exactly

### About Section Metric Cards
- [ ] All 4 metric cards link to `/case-studies`
- [ ] Cards show hover shadow on hover
- [ ] Clicking card navigates to case studies page
- [ ] Cards are keyboard accessible (can tab to them, enter key works)

### Contact Section
- [ ] Submit button is gray-900 (NOT blue)
- [ ] All 3 contact cards have same height
- [ ] All 3 cards have icons at top, button in middle, subtext at bottom
- [ ] No label text between icon and button on any card
- [ ] Email card: "Email Us" button opens mailto
- [ ] Email card: Email address is clickable
- [ ] Email card: Clicking email address copies to clipboard
- [ ] Email card: "Copied!" message appears for 2 seconds
- [ ] Video card: "Schedule Google Meet" button (no "via")
- [ ] Phone card: "Schedule Phone Call" button
- [ ] All buttons same size and styling (bg-gray-900)
- [ ] Cards display correctly on mobile (stack vertically)

### Case Studies Filtering
- [ ] Clicking industry tag on homepage filters case studies by industry
- [ ] Clicking service tag on homepage filters case studies by service
- [ ] Filtered cases appear FIRST in list
- [ ] Non-matching cases appear AFTER matching cases
- [ ] Original order maintained within each group
- [ ] URL updates correctly (?industry= or ?service=)
- [ ] Clicking another tag updates filter immediately
- [ ] No console errors when filtering

### Accessibility
- [ ] All interactive cards are keyboard accessible
- [ ] Focus rings visible on tab navigation
- [ ] Screen readers announce expanded/collapsed state
- [ ] Copy-to-clipboard button has aria-label
- [ ] All links have descriptive text (no "click here")

### Performance
- [ ] No layout shift on card expansion
- [ ] Smooth 60fps animations
- [ ] IntersectionObserver doesn't cause scroll jank
- [ ] No unnecessary re-renders

---

## 7. NOTES FOR IMPLEMENTER

### React Islands vs Astro Components

**Use React islands for:**
- Service cards (need hover state + IntersectionObserver)
- Industry cards (need hover state + IntersectionObserver)
- Email contact card (need copy-to-clipboard state)

**Use Astro components for:**
- About section metric cards (simple links, no state)
- Video/Phone contact cards (simple links, no state)
- Contact form (can use existing form component)

### Existing Functionality

**Preserve these existing features:**
- Hero headline rotation animation
- Stats section links to case studies
- Navigation behavior and styling
- Footer content and links
- Form validation logic
- Mobile menu functionality

**Only change what's specified in this spec.**

---

## 8. REFERENCE FILES

**All content:** LOCK-CONTENT.md (original) + LOCK-CONTENT-updated.md (Phase 9 contact section)
**All styling:** LOCK-DESIGN-SYSTEM.md (original) + LOCK-DESIGN-SYSTEM-updated.md (Phase 9 card behaviors)
**Architecture rules:** LOCK-architecture.md

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

**End of Phase 9 Spec**
