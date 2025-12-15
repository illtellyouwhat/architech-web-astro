# CONTENT LOCK FILE - PHASE 11 UPDATE
## Automation Architech - Copy Changes

**Date Updated**: December 15, 2025
**Phase**: Phase 11
**Changes**: Stats updates, contact form alignment, footer social icons, case study page updates

---

## HERO SECTION (UPDATED - Phase 11)

### Small Headline
```
[REMOVED - Delete this element entirely]
```

**Previous:** "Automation Architech"
**Action:** Remove completely to move rotating headline higher on page

### Main Rotating Headline
```
Your [rotating word] needs data
```

**Rotating words:** "LLM application", "data pipeline", "system workflow"
**Behavior:** Unchanged (fade in/out with 2.5s intervals)
**Position:** Move up to fill space left by removed small headline

### Subheadline
```
We help organizations build intelligent LLM applications, deploy robust data pipelines, 
and create seamless system workflows that scale.
```

**Behavior:** Unchanged (remains visible)

---

## STATS SECTION (UPDATED - Phase 11)

### Top Stats (Above Fold)

**Positioning:** Move these 4 stats UP to appear above fold, immediately below service cards
**Size Reduction:** Scale down by 15% (approximately text-3xl → text-2xl for numbers, adjust container padding)

**Stat 1:**
```
Number: "50+"
Label: "Projects Delivered"
Link: /case-studies
```

**Stat 2:**
```
Number: "8 Years"
Label: "Industry Experience"
Link: /case-studies
```

**Stat 3:**
```
Number: "87.5%"
Label: "Average Time Reduction"
Link: /case-studies
```

**Stat 4:**
```
Number: "99%"
Label: "AI Accuracy"
Link: /case-studies
```

---

## ABOUT SECTION (UPDATED - Phase 11)

### About Section Stats (Below About Cards)

**Layout:** 2-column grid (desktop) - About cards on left, founder photo placeholder on right
**Stat Cards:** 4 cards below the 2-column layout, linking to specific case studies

**Stat 1: Clinical Trial Capacity**
```
Icon: lucide:users (or appropriate icon for capacity/scale)
Number: "6-7x"
Label: "Capacity Increase"
Context: "Clinical trial patient matching"
Link: /case-studies/clinical-trial-patient-matching
```

**Stat 2: Manufacturing Time Reduction**
```
Icon: lucide:clock (or timer icon)
Number: "87.5%"
Label: "Time Reduction"
Context: "Production scheduling optimization"
Link: /case-studies/manufacturing-production-scheduling
```

**Stat 3: Ad Reporting Time Saved**
```
Icon: lucide:trending-up (or chart icon)
Number: "16 hrs"
Label: "Saved Per Week"
Context: "Ad performance reporting"
Link: /case-studies/ad-performance-reporting
```

**Stat 4: Content Strategy Growth** [UPDATED]
```
Icon: lucide:arrow-up-right (or growth icon)
Number: "200K → 2M"
Label: "MAU Growth"
Context: "Content strategy and analytics"
Link: /case-studies/content-strategy-growth
```

**Note:** Stat 4 changed from "99% AI Accuracy" to "200K → 2M MAU Growth"

---

## CONTACT SECTION (UPDATED - Phase 11)

### Contact Form Field Labels

**Alignment:** Left-aligned to input boxes (NOT centered over)

```
Name: [text input]
Email: [text input]
Company: [text input]
Message: [textarea]
```

**Implementation:** Labels should use `text-left` alignment and appear directly above their respective input fields

### Contact Method Cards

#### Card 1: Email (UPDATED)

```
Icon: lucide:mail
Icon Size: w-8 h-8
Icon Color: text-gray-600

Button Text: "Email Us"
Button Style: bg-gray-900 text-white px-6 py-3 rounded-lg font-medium
Button Hover: hover:bg-gray-800
Button Action: Opens mailto:hello@automationarchitech.com
Button Transition: transition-colors duration-200

Email Address (below button): "hello@automationarchitech.com"
Email Address Display: Regular text, clickable
Email Address Action: Copy to clipboard on click
Email Address Feedback: Show "Copied!" message for 2 seconds after click
Email Address Style: text-gray-700 hover:text-gray-900 cursor-pointer underline

Subtext: [REMOVED]
```

**Previous subtext:** "Expect a reply within 24 hours"
**Action:** Delete this line so all buttons align horizontally across the 3 cards

#### Card 2: Video Call
```
[No changes - remains as Phase 9]
```

#### Card 3: Phone Call
```
[No changes - remains as Phase 9]
```

---

## FOOTER (UPDATED - Phase 11)

### Brand Section Icons

**Previous Icons:** code, database, workflow (3 generic tech icons)
**New Icons:** Social media icons

```
Icon 1: LinkedIn
- Icon: lucide:linkedin (or appropriate LinkedIn icon)
- Link: [PLACEHOLDER - awaiting client social media URL]
- Size: Same as previous icons
- Color: text-gray-600 hover:text-gray-900

Icon 2: X (Twitter)
- Icon: lucide:twitter (or X logo if available)
- Link: [PLACEHOLDER - awaiting client social media URL]
- Size: Same as previous icons
- Color: text-gray-600 hover:text-gray-900
```

**Positioning:** Below tagline "Intelligent automation with measurable results. Process automation, AI decision support, and data integration for manufacturing, healthcare, and publishing operations."

**Spacing:** gap-4 between icons, same layout as previous icon row

---

## CASE STUDIES PAGE (UPDATED - Phase 11)

### Page Header

**Headline:** 
```
Real Projects. Real Results.
```

**Subheadline (NEW BEHAVIOR):**
```
From 6-7x capacity increases to 87.5% time reductions—see how we've helped companies 
automate their most critical processes.
```

**Hover Behavior:** 
- Default: Hidden (opacity-0)
- On headline hover: Reveal subheadline (opacity-100)
- Transition: 300ms fade (same as hero subheadline)

---

## CASE STUDY CARDS (INDEX & RELATED) (No Copy Changes)

**Note:** Card styling changes are in LOCK-DESIGN-SYSTEM.md (metric banner, icon tooltips)
**Content:** All case study card copy remains unchanged from current inventory

---

## IMPLEMENTATION NOTES FOR CLAUDE CODE

### Phase 11 Changes Summary:

**Content Changes:**
1. Remove small "Automation Architech" headline from hero
2. Update Stat 4 in About section: "99% AI Accuracy" → "200K → 2M MAU Growth" with growth icon
3. Update Stat 4 link: /case-studies → /case-studies/content-strategy-growth
4. Remove "Expect a reply within 24 hours" subtext from email card
5. Left-align contact form field labels
6. Replace footer tech icons (code, database, workflow) with social icons (LinkedIn, X)
7. Add hover-reveal behavior to case studies page subheadline

**Reference Other Lock Files:**
- Icon sizing/styling → LOCK-DESIGN-SYSTEM.md Phase 11
- Metric banner styling → LOCK-DESIGN-SYSTEM.md Phase 11
- About section layout → LOCK-DESIGN-SYSTEM.md Phase 11
- Tooltip implementation → LOCK-DESIGN-SYSTEM.md Phase 11

---

**Document Version**: 2.0 (Phase 11 - Visual Polish & Metric Updates)
**Last Updated**: December 15, 2025
**Approved By**: Phil
