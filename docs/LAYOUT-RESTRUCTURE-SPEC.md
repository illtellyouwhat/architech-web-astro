# LAYOUT RESTRUCTURE SPECIFICATION
## Automation Architech - Homepage Consolidation

**Date**: December 2, 2024  
**Task**: Restructure homepage layout - move sections, consolidate redundancy, add placeholders  
**Rule**: NO COPY CHANGES - layout only

---

## CRITICAL CONSTRAINTS

### What You're Doing:
- ✅ Moving sections to new positions
- ✅ Merging service card functionality (hero cards become expandable)
- ✅ Adding placeholder sections (logos, team photo)
- ✅ Deleting redundant sections

### What You're NOT Doing:
- ❌ Changing any copy/text
- ❌ Changing colors or typography
- ❌ Modifying icons or emojis
- ❌ Altering component functionality (except making hero cards expandable)

**Reference Files:**
- DESIGN-SYSTEM-LOCK.md for colors/spacing
- CONTENT-LOCK.md for any copy you need (though no changes should be needed)

---

## NEW PAGE STRUCTURE

### **BEFORE (Current Order):**
```
1. Hero Section
   - Headline, subheadline, CTAs
   - 3 quick-reference service cards (NOT expandable)
2. Services Section
   - "How We Help" headline
   - 3 expandable service cards (SAME services as hero)
3. Industries Section
4. About/Why Choose Section
   - 3 differentiator cards
   - 4 stats cards
5. Contact Section
```

### **AFTER (New Order):**
```
1. Hero Section
   - Headline, subheadline, CTAs
   - 3 service cards (NOW EXPANDABLE with features + CTA buttons)
2. Stats Cards Section (MOVED from About)
   - 4 metric cards in horizontal row
3. Client Logos Section (NEW - placeholder)
4. Industries Section (MOVED up from position 3)
5. About/Why Choose Section
   - 3 differentiator cards (keep as-is)
   - Team/founder photo placeholder (NEW - right side)
6. Contact Section
```

---

## DETAILED IMPLEMENTATION

### **CHANGE 1: Make Hero Service Cards Expandable**

**Location:** Hero section, the 3 service cards below CTAs

**Current State:**
```typescript
Card 1: Process Automation
  Icon: ⚙️
  Title: "Process Automation"
  Description: "Save 10-20 hours per week by eliminating manual work..."
  [NOT expandable]

Card 2: AI Decision Support
  [Same structure, NOT expandable]

Card 3: Multi-Platform Data Integration
  [Same structure, NOT expandable]
```

**Change To:**
```typescript
Make these cards function exactly like the current Services section cards:
- Desktop: Hover to expand (show features list + CTA button)
- Mobile: Auto-expand when scrolled into view
- Same animation/transition as current Services section cards

Card 1: Process Automation
  Icon: ⚙️ (KEEP current icon)
  Title: "Process Automation"
  Description: "Save 10-20 hours per week by eliminating manual work..."
  
  [EXPANDABLE - shows on hover/scroll]:
  Features:
  • Reduce error rates from 5-10% to <1%
  • Scale capacity 5-10x without additional headcount
  • Free your team to focus on strategic work, not data entry
  • Examples: Email campaign management, production scheduling, link coordination
  
  CTA Button: "See automation case studies →"
  CTA Link: /case-studies

Card 2: AI Decision Support
  Icon: 🤖 (KEEP current icon)
  Title: "AI-Powered Decision Support"
  Description: "Accelerate expert decisions—process thousands of documents..."
  
  [EXPANDABLE - shows on hover/scroll]:
  Features:
  • Match patterns across massive datasets humans can't manually review
  • Reduce expert bottlenecks (legal review, clinical assessment, due diligence)
  • Built-in verification layers to prevent AI hallucinations (99% accuracy)
  • Examples: Clinical trial patient matching, contract analysis, medical record review
  
  CTA Button: "See AI case studies →"
  CTA Link: /case-studies

Card 3: Multi-Platform Data Integration
  Icon: 📊 (KEEP current icon)
  Title: "Multi-Platform Data Integration"
  Description: "Stop manually compiling data from 5+ platforms..."
  
  [EXPANDABLE - shows on hover/scroll]:
  Features:
  • Connect Google Analytics, Klaviyo, Salesforce, Shopify, and 50+ other platforms
  • Automate report generation that currently takes hours
  • Enable historical analysis (3+ years) impossible in spreadsheets
  • API workarounds when platforms don't provide direct access
  
  CTA Button: "See integration case studies →"
  CTA Link: /case-studies
```

**Implementation Notes:**
- Use existing ServiceCard React component (or duplicate its expand logic)
- Keep all current animations/transitions (500ms duration, staggered fade)
- Hover effect: card lifts with shadow increase (same as current Services cards)
- Mobile: auto-expand when in viewport (IntersectionObserver)

---

### **CHANGE 2: Delete Redundant Services Section**

**Location:** Currently between Hero and Industries

**Current Structure:**
```
<section id="services">
  <h2>How We Help</h2>
  <p>From process automation to AI-powered decision support...</p>
  [3 expandable service cards]
</section>
```

**Action:** DELETE THIS ENTIRE SECTION

**Rationale:** Service cards now live in hero (Change 1), making this section redundant.

**Important:** Update navigation link `/#services` → should now point to hero service cards section or be removed from nav if services anchor is deleted.

---

### **CHANGE 3: Add Stats Cards Section (Above Logos)**

**Location:** NEW section, immediately after Hero section

**Create this new section:**

```astro
<!-- Stats Section -->
<section class="py-12 bg-white border-t border-b border-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Stats Grid - 4 cards in horizontal row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      
      <!-- Stat 1: Capacity Increase -->
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gray-50">
          <!-- Icon: trending-up (Lucide) -->
          <svg class="w-6 h-6 text-gray-900" ...></svg>
        </div>
        <div class="text-3xl md:text-4xl font-light text-gray-900 mb-2">6-7x</div>
        <div class="text-sm font-medium text-gray-900 mb-1">Capacity Increase</div>
        <div class="text-xs text-gray-500">Clinical trial patient matching</div>
      </div>

      <!-- Stat 2: Time Reduction -->
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gray-50">
          <!-- Icon: clock (Lucide) -->
          <svg class="w-6 h-6 text-gray-900" ...></svg>
        </div>
        <div class="text-3xl md:text-4xl font-light text-gray-900 mb-2">87.5%</div>
        <div class="text-sm font-medium text-gray-900 mb-1">Time Reduction</div>
        <div class="text-xs text-gray-500">Production scheduling optimization</div>
      </div>

      <!-- Stat 3: Weekly Hours Saved -->
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gray-50">
          <!-- Icon: clock (Lucide) - can use same or alarm-clock -->
          <svg class="w-6 h-6 text-gray-900" ...></svg>
        </div>
        <div class="text-3xl md:text-4xl font-light text-gray-900 mb-2">16 hrs</div>
        <div class="text-sm font-medium text-gray-900 mb-1">Saved Per Week</div>
        <div class="text-xs text-gray-500">Ad performance reporting</div>
      </div>

      <!-- Stat 4: AI Accuracy -->
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gray-50">
          <!-- Icon: check-circle (Lucide) -->
          <svg class="w-6 h-6 text-gray-900" ...></svg>
        </div>
        <div class="text-3xl md:text-4xl font-light text-gray-900 mb-2">99%</div>
        <div class="text-sm font-medium text-gray-900 mb-1">AI Accuracy</div>
        <div class="text-xs text-gray-500">Dual-LLM verification</div>
      </div>

    </div>
  </div>
</section>
```

**Styling Notes:**
- Minimal section padding: `py-12` (not py-20 like other sections)
- Border top and bottom to separate from hero/logos
- Background: white (bg-white)
- 2 columns on mobile, 4 columns on desktop
- Icons in gray-50 circle backgrounds
- Numbers: font-light (300-400), large text (3xl to 4xl responsive)
- Labels: font-medium, gray-900
- Context: text-xs, gray-500

**Source:** Copy these exact stats from the current About section. Do not modify text.

---

### **CHANGE 4: Add Client Logos Placeholder Section**

**Location:** NEW section, immediately after Stats section

**Create this placeholder section:**

```astro
<!-- Client Logos Section - Placeholder -->
<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Label -->
    <p class="text-sm font-semibold text-gray-900 uppercase tracking-[0.3em] text-center mb-8">
      Trusted By
    </p>
    
    <!-- Placeholder Logo Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
      
      <!-- Logo Placeholder 1 -->
      <div class="flex items-center justify-center w-full h-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
        <span class="text-sm font-medium text-gray-400">Client Logo 1</span>
      </div>

      <!-- Logo Placeholder 2 -->
      <div class="flex items-center justify-center w-full h-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
        <span class="text-sm font-medium text-gray-400">Client Logo 2</span>
      </div>

      <!-- Logo Placeholder 3 -->
      <div class="flex items-center justify-center w-full h-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
        <span class="text-sm font-medium text-gray-400">Client Logo 3</span>
      </div>

      <!-- Logo Placeholder 4 -->
      <div class="flex items-center justify-center w-full h-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
        <span class="text-sm font-medium text-gray-400">Client Logo 4</span>
      </div>

      <!-- Logo Placeholder 5 -->
      <div class="flex items-center justify-center w-full h-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
        <span class="text-sm font-medium text-gray-400">Client Logo 5</span>
      </div>

    </div>
  </div>
</section>
```

**Styling Notes:**
- Background: gray-50 (alternating section pattern)
- Section padding: py-16
- Grid: 2 columns mobile, 3 tablet, 5 desktop (common logo layout)
- Placeholders: white background, dashed border (border-gray-200)
- Height: h-20 (80px) - standard for logo containers
- Text: gray-400, font-medium, small

**When User Gets Real Logos:**
- Replace placeholder divs with `<img>` tags
- Use grayscale filter: `filter: grayscale(100%) opacity(60%);`
- Hover: `filter: grayscale(0%) opacity(100%);` transition
- Keep same grid structure and spacing

---

### **CHANGE 5: Move Industries Section Up**

**Current Location:** After Services section (which is being deleted)

**New Location:** After Client Logos section

**Action:** Move entire Industries section (no changes to content)

```
Current order:
Hero → Services → Industries → About → Contact

New order:
Hero → Stats → Logos → Industries → About → Contact
```

**Implementation:** Just change section order in index.astro. No changes to Industries section content or styling.

---

### **CHANGE 6: Remove Stats from About Section**

**Location:** About/Why Choose section

**Current Structure:**
```
<section id="about">
  [3 differentiator cards]
  [4 stats cards]  ← DELETE THESE (already moved to top)
</section>
```

**Action:** Delete the 4 stats cards from About section (they now live at top after hero)

**Keep:** 
- Section headline "Why Companies Choose Us"
- Section subheadline
- 3 differentiator cards (Technical Problem-Solving, Speed, AI Reliability)

---

### **CHANGE 7: Add Team Photo Placeholder to About Section**

**Location:** About/Why Choose section, right side

**Current Layout:**
```
[Full width section with 3 cards in grid]
```

**New Layout:**
```
[Two-column layout]
Left: 3 differentiator cards (stacked vertically)
Right: Team/founder photo placeholder
```

**Implementation:**

```astro
<!-- About Section - Modified Layout -->
<section id="about" class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Eyebrow -->
    <p class="text-sm font-semibold text-gray-900 uppercase tracking-[0.3em] mb-4">
      About
    </p>
    
    <!-- Headline -->
    <h2 class="text-4xl font-light text-gray-900 mb-6">
      Why Companies Choose Us
    </h2>
    
    <!-- Subheadline -->
    <p class="text-lg text-gray-600 mb-12">
      We combine LLM expertise, low-code implementation, and a focus on measurable results...
    </p>
    
    <!-- Two-Column Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      <!-- Left Column: Differentiator Cards -->
      <div class="space-y-8">
        
        <!-- Card 1: Technical Problem-Solving -->
        <div class="bg-white p-6 rounded-xl border border-gray-100">
          [Existing card content - no changes]
        </div>
        
        <!-- Card 2: Speed via Low-Code -->
        <div class="bg-white p-6 rounded-xl border border-gray-100">
          [Existing card content - no changes]
        </div>
        
        <!-- Card 3: AI Reliability -->
        <div class="bg-white p-6 rounded-xl border border-gray-100">
          [Existing card content - no changes]
        </div>
        
      </div>
      
      <!-- Right Column: Team Photo Placeholder -->
      <div class="flex items-center justify-center">
        <div class="w-full max-w-md aspect-[3/4] bg-white rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center">
          <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span class="text-sm font-medium text-gray-400">Team/Founder Photo</span>
          <span class="text-xs text-gray-400 mt-1">Placeholder</span>
        </div>
      </div>
      
    </div>
  </div>
</section>
```

**Styling Notes:**
- Two-column grid on large screens (lg:grid-cols-2)
- Single column on mobile/tablet
- Left column: 3 cards stacked with space-y-8
- Right column: centered placeholder
- Placeholder: aspect-[3/4] (portrait orientation - common for professional photos)
- Max width: max-w-md (prevent too-large placeholder)
- Dashed border with person icon SVG
- Background: white (matches card backgrounds)

---

## NAVIGATION UPDATE

### **Services Link - Decision Needed**

**Current:** Nav link "Services" points to `/#services`

**Problem:** Services section is being deleted.

**Options:**
1. Point to hero service cards: `/#hero` or `/#` (scroll to top where service cards are)
2. Remove "Services" from nav entirely (keep: Home, Industries, Case Studies, Insights, Contact)
3. Point to a new `/services` page (if you plan to create dedicated service pages)

**Recommendation:** Option 1 - Point to `/#` (scroll to top where service cards live)

**Implementation:** Update Navigation.tsx:
```typescript
// OLD:
{ label: "Services", href: "/#services" }

// NEW:
{ label: "Services", href: "/#" }
```

---

## VERIFICATION CHECKLIST

After implementation, verify:

### **Hero Section:**
- [ ] 3 service cards now expand on hover (desktop) or scroll (mobile)
- [ ] Expansion shows 4 feature bullets + CTA button
- [ ] CTA buttons say "See [X] case studies →" and link to /case-studies
- [ ] Icons (⚙️, 🤖, 📊) unchanged

### **New Stats Section:**
- [ ] 4 stats cards in horizontal row (2 cols mobile, 4 cols desktop)
- [ ] Numbers: 6-7x, 87.5%, 16 hrs, 99%
- [ ] All copy matches original About section stats
- [ ] Border top and bottom visible
- [ ] Icons present and styled correctly

### **New Logos Section:**
- [ ] 5 placeholder boxes visible
- [ ] Grid: 2 cols mobile, 3 tablet, 5 desktop
- [ ] "Trusted By" headline centered above
- [ ] Dashed borders on placeholders

### **Industries Section:**
- [ ] Moved to new position (after Logos, before About)
- [ ] All 6 industry cards present
- [ ] Hover reveals still work
- [ ] No content changes

### **About Section:**
- [ ] Stats cards REMOVED (now at top)
- [ ] 3 differentiator cards on left
- [ ] Team photo placeholder on right
- [ ] Two-column layout on desktop, stacked on mobile

### **Deleted:**
- [ ] Old Services section completely gone
- [ ] No duplicate service cards anywhere

### **Navigation:**
- [ ] "Services" link updated (points to # or removed)
- [ ] All other nav links still work

---

## MOBILE RESPONSIVENESS

**Critical breakpoints to test:**
- **Mobile (< 768px)**: 
  - Stats: 2 columns
  - Logos: 2 columns
  - About: single column (cards stack, photo below)
  
- **Tablet (768px - 1024px)**:
  - Stats: 4 columns
  - Logos: 3 columns
  - About: single column
  
- **Desktop (1024px+)**:
  - Stats: 4 columns
  - Logos: 5 columns
  - About: 2 columns (cards left, photo right)

---

## COPY SOURCE REFERENCE

**All copy for this restructure comes from CONTENT-LOCK.md:**
- Hero service card features: Section "Service Card 1/2/3" expandable features
- Stats cards: Section "Stats Cards (4 cards)"
- About section: Keep existing (already implemented in Phase 3)

**No new copy needed** - this is purely a layout restructure.

---

## ESTIMATED TIME

- Hero cards expansion: 1 hour (add ServiceCard logic to hero cards)
- Delete Services section: 15 minutes
- Add Stats section: 30 minutes (copy from About section)
- Add Logos placeholder: 20 minutes
- Move Industries: 10 minutes (just reorder)
- Update About layout: 45 minutes (two-column grid + photo placeholder)
- Navigation update: 5 minutes
- Testing/verification: 30 minutes

**Total: ~3-4 hours**

---

**Status**: Ready for implementation  
**Priority**: Complete before building case study pages  
**Next Step**: Hand to Claude Code with PHASE-3-HEADER.md
