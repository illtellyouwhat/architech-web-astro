# PHASE 7 IMPLEMENTATION SPEC
## Case Studies Page Visual Updates

**Date**: December 8, 2024  
**Phase**: Phase 7 - Case Studies Cleanup  
**Scope**: Icon updates, CTA simplification, detail page cleanup

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT-claude-code-header.md` completely
2. Skim all three lock files to understand constraints
3. Read this spec thoroughly
4. Reference lock files during implementation for exact copy/colors/patterns

---

## OVERVIEW

This phase cleans up the case studies pages:
- Replace emoji icons with Lucide icons throughout
- Simplify CTAs on index page (remove redundant buttons)
- Add single discovery call CTA at top of index page
- Clean up detail pages (remove company names, delete screenshot placeholders)

**All content comes from LOCK-content.md** - reference it for exact text and icon mappings.

---

## 1. CASE STUDIES INDEX PAGE (/case-studies)

### File: `/src/pages/case-studies.astro` (or similar)

### 1.1 Add Top CTA Button

**Location:** Centered below the subheadline

**Current structure:**
```
Headline: "Real Projects. Real Results."
Subheadline: "From 6-7x capacity increases..."
[Case study cards start here]
```

**New structure:**
```
Headline: "Real Projects. Real Results."
Subheadline: "From 6-7x capacity increases..."
[CTA BUTTON - NEW]
[Case study cards start here]
```

**Button specs (from LOCK-content.md):**
```
Text: "Book 15-Minute Discovery Call"
Link: /#contact
Style: Primary button (gray-900 background, white text)
```

**Implementation:**
```astro
<section class="py-20">
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-5xl font-light text-center mb-6">Real Projects. Real Results.</h1>
    <p class="text-xl text-gray-600 text-center mb-8">
      From 6-7x capacity increases to 87.5% time reductions—see how we've helped companies 
      automate their most critical processes.
    </p>
    
    <!-- NEW: Top CTA -->
    <div class="flex justify-center mb-16">
      <a 
        href="/#contact" 
        class="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
      >
        Book 15-Minute Discovery Call
      </a>
    </div>
    
    <!-- Case study cards below -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Cards here -->
    </div>
  </div>
</section>
```

### 1.2 Replace Emoji Icons with Lucide Icons

**Icon mapping from LOCK-content.md:**
- SaaS (💻) → `lucide:monitor` or `lucide:laptop`
- Healthcare (❤️) → `lucide:heart` or `lucide:activity`
- Manufacturing (🏭) → `lucide:factory` or `lucide:cog`
- Publishing & Media (📰) → `lucide:newspaper` or `lucide:radio`
- E-commerce/Publishing (📰) → `lucide:package` or `lucide:shopping-cart`

**Current implementation likely uses:**
```jsx
<span className="text-4xl">{emoji}</span>
```

**Change to:**
```jsx
import { Monitor, Heart, Factory, Newspaper, Package } from 'lucide-react';

// In JSX:
<Monitor className="w-12 h-12 text-gray-700" />
<Heart className="w-12 h-12 text-gray-700" />
<Factory className="w-12 h-12 text-gray-700" />
<Newspaper className="w-12 h-12 text-gray-700" />
<Package className="w-12 h-12 text-gray-700" />
```

**Icon size:** `w-12 h-12` (48px) to match existing visual weight
**Icon color:** `text-gray-700` or whatever matches current design

### 1.3 Replace Dual CTA Buttons with Simple Link

**Current:** Each case study card has two buttons at the bottom:
- "Read case study" (primary button)
- "Book 15-Min Call" (secondary button)

**Problem:** 5 cards × 2 buttons = 10 CTAs on one page (visual clutter, redundant)

**New:** Single "See more →" text link (no button styling)

**Remove:**
```jsx
<div class="flex gap-4 mt-6">
  <a href={caseStudyLink} class="btn-primary">Read case study</a>
  <a href="/#contact" class="btn-secondary">Book 15-Min Call</a>
</div>
```

**Replace with:**
```jsx
<a 
  href={caseStudyLink}
  class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
>
  See more
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
</a>
```

**Or use Lucide icon:**
```jsx
import { ArrowRight } from 'lucide-react';

<a 
  href={caseStudyLink}
  class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
>
  See more
  <ArrowRight className="w-4 h-4" />
</a>
```

**Visual goal:** Understated, doesn't compete with top CTA, guides users to details without overwhelming the page.

---

## 2. CASE STUDY DETAIL PAGES (All 5)

### Files to Update:
- `/src/pages/case-studies/content-strategy-growth.astro`
- `/src/pages/case-studies/clinical-trial-patient-matching.astro`
- `/src/pages/case-studies/manufacturing-production-scheduling.astro`
- `/src/pages/case-studies/ad-performance-reporting.astro`
- `/src/pages/case-studies/email-campaign-link-management.astro`

### 2.1 Update Industry Icons to Lucide

**Current:** Emoji icons in tags (e.g., 💻, ❤️, 🏭, 📰)

**Replace with Lucide icons** using same mapping as index page:
```jsx
import { Monitor, Heart, Factory, Newspaper, Package } from 'lucide-react';

// Example for Healthcare case study:
<div class="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
  <Heart className="w-4 h-4 text-gray-600" />
  <span class="text-sm font-medium text-gray-700">Healthcare</span>
</div>
```

**Icon size in tags:** `w-4 h-4` (16px) - smaller than card icons
**Icon color:** `text-gray-600` or matches tag styling

### 2.2 Add Service Type Icon to Tags

**For case studies with defined service types:**
- Clinical Trial Patient Matching → AI Decision Support
- Manufacturing Production Scheduling → Process Automation
- Ad Performance Reporting → Multi-Platform Data Integration

**Service type icon mapping from LOCK-content.md:**
- Process Automation → `lucide:cog` or `lucide:workflow`
- AI Decision Support → `lucide:brain` or `lucide:sparkles`
- Multi-Platform Data Integration → `lucide:database` or `lucide:link`

**Implementation:**
```jsx
import { Heart, Brain } from 'lucide-react';

// For Clinical Trial case study (Healthcare + AI Decision Support):
<div class="flex gap-2 mb-6">
  {/* Industry tag */}
  <div class="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
    <Heart className="w-4 h-4 text-gray-600" />
    <span class="text-sm font-medium text-gray-700">Healthcare</span>
  </div>
  
  {/* Service type tag */}
  <div class="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
    <Brain className="w-4 h-4 text-gray-600" />
    <span class="text-sm font-medium text-gray-700">AI Decision Support</span>
  </div>
</div>
```

**Note:** Two case studies (Data-Driven Content Strategy, Email Campaign Link Management) have service type marked as `[TBD]` in content lock. Skip adding service type tag for those - only show industry tag.

### 2.3 Remove Company Name from Quick Facts Grid

**Current quick facts grid likely shows:**
```
Industry: Healthcare
Company: Vextras
Timeline: Early LLM era project
Solution Type: AI Decision Support
```

**Change to (3 items only):**
```
Industry: Healthcare
Timeline: Early LLM era project
Solution Type: AI Decision Support
```

**Reason:** All case studies are anonymized (per user's notes in Phase 7 intro)

**Implementation:**
Remove any `<div>` or grid cell that displays company name. Adjust grid columns from 4 to 3:

```jsx
// Before:
<div class="grid grid-cols-2 md:grid-cols-4 gap-6">

// After:
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
```

### 2.4 Delete Screenshot Placeholders

**Current:** Each case study detail page has 2 screenshot placeholders under "Visual Evidence" section

**Action:** Delete the entire "Visual Evidence" section and both placeholder images.

**Find and remove:**
```jsx
<section>
  <h3>Visual Evidence</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <img src="/placeholder-screenshot-1.png" alt="..." />
    <img src="/placeholder-screenshot-2.png" alt="..." />
  </div>
</section>
```

**Or if using a component:**
```jsx
<VisualEvidence 
  screenshots={[
    { src: '/placeholder-1.png', alt: '...' },
    { src: '/placeholder-2.png', alt: '...' }
  ]} 
/>
```

**Delete the component call entirely.**

**Note:** User may add real screenshots later, but for now these placeholders add no value.

---

## 3. IMPLEMENTATION NOTES

### Icon Consistency Rules

**Sizes:**
- Index page cards: `w-12 h-12` (48px)
- Detail page tags: `w-4 h-4` (16px)
- Service type tags: `w-4 h-4` (16px)

**Colors:**
- Card icons: `text-gray-700` (darker, more prominent)
- Tag icons: `text-gray-600` (lighter, supporting role)

**Import pattern:**
```jsx
import { 
  Monitor,      // SaaS
  Heart,        // Healthcare
  Factory,      // Manufacturing
  Newspaper,    // Publishing & Media
  Package,      // E-commerce
  Cog,          // Process Automation
  Brain,        // AI Decision Support
  Database      // Data Integration
} from 'lucide-react';
```

### Service Type Edge Cases

**Two case studies don't have service types yet:**
1. Data-Driven Content Strategy (Mixed Analytics)
2. Email Campaign Link Management

**For these:**
- Show industry tag with icon
- Do NOT show service type tag
- Quick facts grid only shows: Industry + Timeline (2 items, not 3)

**When user provides service types later:**
- They'll update LOCK-content.md
- Create a Phase X spec to add the tags
- Quick implementation (5 minutes)

### CTA Button Styling Reference

**Primary button (top CTA on index page):**
```css
Background: bg-gray-900
Text: text-white
Padding: px-8 py-4
Font: font-medium
Border Radius: rounded-lg
Hover: hover:bg-gray-800
Transition: transition-colors duration-200
```

**Text link (card CTAs):**
```css
Text: text-gray-700
Hover: hover:text-gray-900
Font: font-medium
Gap: gap-2 (between text and arrow)
Transition: transition-colors duration-200
```

---

## 4. TESTING CHECKLIST

After implementation, verify:

### Case Studies Index Page
- [ ] Top CTA button appears centered below subheadline
- [ ] Top CTA links to `/#contact` (opens contact section on homepage)
- [ ] All 5 case study cards show Lucide icons (no emojis)
- [ ] Icons are consistent size (`w-12 h-12`)
- [ ] Dual buttons removed from all cards
- [ ] "See more →" text link present on each card
- [ ] Text links are not styled as buttons (no background fill)
- [ ] Arrow icon displays correctly next to "See more"

### Case Study Detail Pages (Test on all 5)
- [ ] Industry icon changed from emoji to Lucide icon
- [ ] Icon size appropriate for tags (`w-4 h-4`)
- [ ] Service type tag shows for 3 case studies with defined types
- [ ] Service type tag icon displays correctly
- [ ] No service type tag for 2 TBD case studies (Data-Driven, Email Campaign)
- [ ] Company name removed from quick facts grid
- [ ] Quick facts grid shows 3 items (Industry, Timeline, Solution Type) OR 2 items if no service type
- [ ] Grid layout adjusted (3 columns, not 4)
- [ ] Screenshot placeholders completely removed
- [ ] "Visual Evidence" section deleted
- [ ] No broken image links or console errors

### Visual Consistency
- [ ] Icon style consistent across index and detail pages
- [ ] Color scheme matches design system (gray-900, gray-700, gray-600)
- [ ] Spacing looks balanced after CTA changes
- [ ] Mobile responsive layout works
- [ ] No layout shifts or broken grids

### Accessibility
- [ ] Icons have appropriate aria-labels or are decorative
- [ ] Links have clear text ("See more", not just arrow)
- [ ] Focus states visible on keyboard navigation
- [ ] Contrast ratios meet WCAG standards

---

## 5. EDGE CASES & CLARIFICATIONS

### What if a case study has no timeline?
Keep the grid item, display "Timeline: [value]" or hide that grid cell if truly null.

### What if someone clicks "See more" link?
Should navigate to the individual case study detail page (e.g., `/case-studies/clinical-trial-patient-matching`)

### What if top CTA doesn't scroll to contact section?
Ensure anchor link `/#contact` correctly scrolls to contact section ID on homepage. May need smooth scroll behavior in CSS or JS.

### What about the old company logos in case studies?
**User's note:** "We are also going to take out the placeholder for the company logos. We are not going to give any company logo data or any company data overall in the case studies, they are all anonymized."

If there are any company logo images or placeholders on detail pages (like Vextras logo, Mixed Analytics logo), **delete those too** along with screenshot placeholders.

---

## 6. FILES LIKELY TO EDIT

Based on typical Astro structure:

**Index page:**
- `/src/pages/case-studies.astro` (or `/src/pages/case-studies/index.astro`)
- Possibly `/src/components/CaseStudyCard.astro` or `.jsx` if cards are componentized

**Detail pages:**
- `/src/pages/case-studies/content-strategy-growth.astro`
- `/src/pages/case-studies/clinical-trial-patient-matching.astro`
- `/src/pages/case-studies/manufacturing-production-scheduling.astro`
- `/src/pages/case-studies/ad-performance-reporting.astro`
- `/src/pages/case-studies/email-campaign-link-management.astro`

**Possible shared components:**
- `/src/components/QuickFacts.astro` or `.jsx`
- `/src/components/VisualEvidence.astro` or `.jsx` (delete calls to this)
- `/src/components/CaseStudyTag.astro` or `.jsx`

---

## 7. REFERENCE FILES

**All content:** `/mnt/project/CONTENT-LOCK.md`
**All styling:** `/mnt/project/DESIGN-SYSTEM-LOCK.md`
**Architecture rules:** `/mnt/project/LOCK-architecture.md`

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

## 8. SUMMARY OF CHANGES

**Case Studies Index Page:**
1. Add top CTA button linking to `/#contact`
2. Replace 5 emoji icons with Lucide icons
3. Remove 10 buttons (dual CTAs on each card)
4. Add 5 "See more →" text links

**Case Study Detail Pages (×5):**
1. Replace emoji industry icons with Lucide icons
2. Add service type icon tags (for 3 case studies)
3. Remove company name from quick facts (all 5)
4. Delete screenshot placeholders (all 5)
5. Delete company logo placeholders if present (all 5)

**Net result:** Cleaner, more focused case studies pages with consistent iconography and reduced CTA clutter.

---

**End of Phase 7 Spec**
