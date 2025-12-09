# CONTENT-LOCK.md
## Automation Architech Website - Final Approved Copy

**Date Locked**: December 8, 2024  
**Status**: APPROVED - Ready for Implementation  
**Rule**: This copy is IMMUTABLE. Claude Code must use exact text, no modifications.

---

## HOMEPAGE

### HERO SECTION

#### Main Headline (Animated)
```
Your [rotating word] needs data
```

**Animation behavior:**
- Words rotate continuously with fade in/fade out animation
- Rotation sequence: company, reports, team, product, analytics
- Always visible (no hover required)

#### Subheadline (Hover-Reveal)
```
We help organizations build intelligent LLM applications deploy robust data pipelines 
and create seamless system workflows that scale.
```

**Behavior:** Appears on hover below the main headline (hidden by default)

#### Primary CTA
```
Button Text: "See Our Work"
Button Link: /case-studies
```

**Note:** Supporting text "Real projects. Real results. Real metrics." has been removed.
**Visual:** Both CTA buttons should be equal size.

#### Secondary CTA
```
Link Text: "Book 15-Minute Discovery Call →"
Link Target: #contact
```

#### Quick-Reference Cards (3 cards below CTAs)

**Card 1: Process Automation**
```
Icon: Workflow icon (âš™ï¸ or existing workflow icon)
Title: "Process Automation"
Description: "Save 10-20 hours per week by eliminating manual work and reducing error rates to near-zero."
```

**Card 2: AI Decision Support**
```
Icon: Brain icon (ðŸ¤– or existing brain icon)
Title: "AI Decision Support"
Description: "Accelerate expert decisionsâ€”process thousands of documents in minutes instead of weeks."
```

**Card 3: Multi-Platform Data Integration**
```
Icon: Database icon (ðŸ“Š or existing database icon)
Title: "Multi-Platform Data Integration"
Description: "Stop manually compiling data from 5+ platforms. Get unified reporting automatically."
```

---

### STATS SECTION

**Note:** Stats section already exists on site - no content changes needed for Phase 6.
Current stats remain as-is:
- 50+ Projects Delivered
- 8 Years Industry Experience  
- 87.5% Average Time Reduction
- 99% AI Accuracy

All stats link to /case-studies (existing functionality preserved).

---

### CLIENT LOGOS SECTION

#### Section Headline
```
Trusted By
```

#### Logo Display
- **Total logos**: 10
- **Logo files**: Located in `/public/images/clients/`
- **Display style**: Horizontal row, minimized vertical space
- **Logo sizing**: 200-250px width max (display smaller for space efficiency)
- **Visual goal**: Show breadth of client base without taking up scroll space

**Logo files to be provided by user:**
- Client logos formatted to 200-250px width
- Files placed in `/public/images/clients/` directory
- Filenames: [To be determined by user]

---

### SERVICES SECTION

#### Section Eyebrow
```
Services
```

#### Section Headline
```
How We Help
```

#### Section Subheadline
```
From process automation to AI-powered decision support to data consolidationâ€”
we build systems that save time, reduce errors, and multiply your capacity.
```

#### Service Card 1: Process Automation

```
Title: "Process Automation"
Icon: âš™ï¸ (or existing workflow icon)

Description:
"Eliminate repetitive tasks that don't require human judgmentâ€”save 10-20 hours 
per week and reduce error rates to near-zero."

Expandable Features (shown on hover/scroll):
â€¢ Reduce error rates from 5-10% to <1%
â€¢ Scale capacity 5-10x without additional headcount
â€¢ Free your team to focus on strategic work, not data entry
â€¢ Examples: Email campaign management, production scheduling, link coordination

CTA Button: "See automation case studies â†’"
CTA Link: /case-studies
```

#### Service Card 2: AI Decision Support

```
Title: "AI-Powered Decision Support"
Icon: ðŸ¤– (or existing brain icon)

Description:
"Accelerate expert decisions with AI that processes complex information at scaleâ€”
analyze thousands of documents in minutes, not weeks."

Expandable Features (shown on hover/scroll):
â€¢ Match patterns across massive datasets humans can't manually review
â€¢ Reduce expert bottlenecks (legal review, clinical assessment, due diligence)
â€¢ Built-in verification layers to prevent AI hallucinations (99% accuracy)
â€¢ Examples: Clinical trial patient matching, contract analysis, medical record review

CTA Button: "See AI case studies â†’"
CTA Link: /case-studies
```

#### Service Card 3: Multi-Platform Data Integration

```
Title: "Multi-Platform Data Integration"
Icon: ðŸ“Š (or existing database icon)

Description:
"Stop manually compiling data from 5+ platformsâ€”eliminate CSV downloads and 
get unified, automated reporting."

Expandable Features (shown on hover/scroll):
â€¢ Connect Google Analytics, Klaviyo, Salesforce, Shopify, and 50+ other platforms
â€¢ Automate report generation that currently takes hours
â€¢ Enable historical analysis (3+ years) impossible in spreadsheets
â€¢ API workarounds when platforms don't provide direct access

CTA Button: "See integration case studies â†’"
CTA Link: /case-studies
```

---

### INDUSTRIES SECTION

#### Section Eyebrow
```
Industries
```

#### Section Headline
```
Industries We Serve
```

#### Section Subheadline
```
We understand industry-specific challengesâ€”from production scheduling bottlenecks 
to multi-platform ad reporting. See how we've helped companies in your industry.
```

#### Industry Cards (6 cards)

**Card 1: Legal Tech**
```
Icon: âš–ï¸
Title: "Legal Tech"
Description: "Automating legal document processing, contract analysis, and compliance 
workflows to streamline legal operations."
```

**Card 2: Healthcare**
```
Icon: â¤ï¸ or ðŸ¥
Title: "Healthcare"
Description: "Clinical trial patient matching, eligibility verification, medical record 
processing, and EHR integration to streamline healthcare operations and improve 
patient outcomes."
```

**Card 3: Publishing & Media**
```
Icon: ðŸ“° or ðŸ“¢
Title: "Publishing & Media"
Description: "Campaign coordination and link management, multi-platform ad performance 
reporting, content distribution automation, and audience analytics consolidation for 
publishers and media companies."
```

**Card 4: E-commerce**
```
Icon: ðŸ›’
Title: "E-commerce"
Description: "Inventory synchronization across channels, order routing and fulfillment 
automation, customer data consolidation, and multi-platform performance tracking for 
online retailers."
```

**Card 5: Education Technology**
```
Icon: ðŸŽ“
Title: "Education Technology"
Description: "Student data integration, learning management system automation, assessment 
workflow optimization, and educational content distribution to improve learning outcomes 
at scale."
```

**Card 6: Manufacturing**
```
Icon: ðŸ­ or âš™ï¸ (change from ðŸ“Š to factory/gear icon)
Title: "Manufacturing"
Description: "Production scheduling and capacity planning, changeover optimization, shop 
floor coordination, quality data aggregation, and maintenance tracking to maximize 
throughput and minimize downtime."
```

---

### ABOUT SECTION

#### Section Eyebrow
```
About
```

#### Section Headline
```
Why Companies Choose Us
```

#### Section Subheadline
```
We're not just another development agency. We're automation specialists who understand 
the intricacies of modern AI, data processing, and system integration. Our expertise 
spans from cutting-edge LLM applications to robust data pipelines that scale. We combine 
LLM expertise, low-code implementation, and a focus on measurable results. From 6-week 
implementations to 99% AI accuracy and API workarounds—we solve the problems other 
agencies can't.
```

#### Differentiator Cards (3 cards)

**Card 1: Tailored Solutions**
```
Title: "Tailored Solutions"
Description: "Every project is unique. We build custom solutions that fit your specific needs 
and scale with your growth."
```

**Card 2: Proven Results**
```
Title: "Proven Results"
Description: "Our clients see measurable improvements in efficiency cost reduction and revenue 
growth."
```

**Card 3: Expert Team**
```
Title: "Expert Team"
Description: "Our team stays at the forefront of AI and automation technologies to deliver 
cutting edge solutions. Our globally distributed team means faster turnaround for your projects."
```
#### Stats Cards (4 cards, 2x2 grid)

**Stat 1: Capacity Increase**
```
Icon: ðŸ“ˆ trending-up
Number: "6-7x"
Label: "Capacity Increase"
Context/Subtext: "Clinical trial patient matching"
```

**Stat 2: Time Reduction**
```
Icon: â±ï¸ clock
Number: "87.5%"
Label: "Time Reduction"
Context/Subtext: "Production scheduling optimization"
```

**Stat 3: Weekly Hours Saved**
```
Icon: â° alarm-clock
Number: "16 hrs"
Label: "Saved Per Week"
Context/Subtext: "Ad performance reporting"
```

**Stat 4: AI Accuracy**
```
Icon: âœ“ check-circle
Number: "99%"
Label: "AI Accuracy"
Context/Subtext: "Dual-LLM verification"
```

---

### CONTACT SECTION

#### Section Eyebrow
```
Contact
```

#### Section Headline
```
Ready to Automate?
```

#### Section Subheadline
```
Tell us about your biggest bottleneckâ€”we'll tell you if we can help.
```

#### Contact Form

**Form Fields:**
- Name (required)
- Email (required)
- Company (required)
- Message (required, textarea)

**Message Field Placeholder:**
```
Tell us about your biggest operational bottleneck. What manual process is consuming 
the most time or creating the most errors?
```

**Submit Button Text:**
```
Default: "Send Message"
Loading: "Sending..."
```

**Success Message:**
```
Message received! We'll be in touch soon.
```

**Error Message:**
```
Please email us directly at hello@automationarchitech.com
```

#### Info Cards (3 cards below form)

**Email Card**
```
Icon: Mail icon in gray circle
Label: "Email"
Value: "hello@automationarchitech.com" (clickable mailto link)
Subtext: "Expect a thoughtful reply with next steps inside 24 hours."
```

**Schedule via Google Meet Card**
```
Icon: Video/Calendar icon in gray circle
Label: "Schedule via Google Meet"
Button Text: "Schedule via Google Meet"
Button Link: https://calendar.app.google/EVcS3xj7ud1BWtkL6
Subtext: "Book a video call at a time that works for you."
```

**Schedule Phone Call Card**
```
Icon: Phone/Calendar icon in gray circle
Label: "Schedule a Phone Call"
Button Text: "Schedule a Phone Call"
Button Link: https://calendar.app.google/mnKPd1jZJn9fyKTu9
Subtext: "Prefer to talk by phone? Schedule a call that fits your schedule."
```

---

---

## CASE STUDIES PAGE (/case-studies)

### Page Header
- **Headline**: "Real Projects. Real Results."
- **Subheadline**: "From 6-7x capacity increases to 87.5% time reductions—see how we've helped companies automate their most critical processes."

### Top CTA
- **Button Text**: "Book 15-Minute Discovery Call"
- **Button Link**: /#contact
- **Position**: Centered below subheadline

### Case Study Cards (5 cards)

**Visual Changes for Phase 7:**
- Replace emoji icons with Lucide icons (see icon mapping below)
- Remove dual CTA buttons ("Read case study" + "Book 15-Min Call")
- Replace with simple "See more →" text link (no button styling)

**Icon Mapping (Lucide):**
- SaaS: `lucide:monitor` or `lucide:laptop`
- Healthcare: `lucide:heart` or `lucide:activity`
- Manufacturing: `lucide:factory` or `lucide:cog`
- Publishing & Media: `lucide:newspaper` or `lucide:radio`
- E-commerce: `lucide:shopping-cart` or `lucide:package`

**Card 1: Data-Driven Content Strategy**
```
Title: "Data-Driven Content Strategy"
Company: Mixed Analytics
Industry: SaaS
Industry Icon: lucide:monitor
Service Type: [TBD - awaiting client input]
Primary Metric: "900% Growth"
Link: /case-studies/content-strategy-growth
```

**Card 2: Clinical Trial Patient Matching**
```
Title: "AI-Powered Clinical Trial Patient Matching"
Company: Vextras
Industry: Healthcare
Industry Icon: lucide:heart
Service Type: AI Decision Support
Primary Metric: "6-7x Capacity Increase"
Link: /case-studies/clinical-trial-patient-matching
```

**Card 3: Manufacturing Production Scheduling**
```
Title: "Manufacturing Production Scheduling"
Company: Paper Product Manufacturer
Industry: Manufacturing
Industry Icon: lucide:factory
Service Type: Process Automation
Primary Metric: "87.5% Time Reduction"
Link: /case-studies/manufacturing-production-scheduling
```

**Card 4: Ad Performance Reporting**
```
Title: "Automated Ad Performance Reporting"
Company: Digital Media Publisher
Industry: Publishing & Media
Industry Icon: lucide:newspaper
Service Type: Multi-Platform Data Integration
Primary Metric: "16 hrs Saved Per Week"
Link: /case-studies/ad-performance-reporting
```

**Card 5: Email Campaign Link Management**
```
Title: "Streamlining Email Campaign Link Management"
Company: E-commerce Company
Industry: Publishing & E-commerce
Industry Icon: lucide:package
Service Type: [TBD - awaiting client input]
Primary Metric: "$1-5K Monthly Savings"
Link: /case-studies/email-campaign-link-management
```

---

## CASE STUDY DETAIL PAGES

**Changes for Phase 7:**
- Update industry icons to match Lucide icons from index page
- Add service type icon to tags (when service type is defined)
- Remove company name from quick facts grid
- Delete screenshot placeholders

### Quick Facts Grid (All Case Studies)
**Display order:**
1. Industry (with Lucide icon)
2. Timeline
3. Solution Type (with Lucide icon, if defined)

**Removed:**
- Company name (all case studies are anonymized)
- Screenshot placeholders (deleted entirely)

### Service Type Icons (Lucide)
```
Process Automation: lucide:cog or lucide:workflow
AI Decision Support: lucide:brain or lucide:sparkles
Multi-Platform Data Integration: lucide:database or lucide:link
```

## NAVIGATION

### Header Navigation

**Logo Text:**
```
Automation Architech
```

**Navigation Links (Desktop & Mobile):**
```
1. Home â†’ /#home
2. Services â†’ /#services
3. Industries â†’ /#industries
4. Case Studies â†’ /case-studies (Phase 3 - page doesn't exist yet)
5. Insights â†’ /blog/
6. Contact â†’ /#contact (styled as button)
```

**Mobile Menu:**
- Same links as desktop
- Contact link styled as button in mobile view

---

## FOOTER

### Brand Section

**Logo + Wordmark:**
```
Automation Architech
```

**Tagline:**
```
Intelligent automation with measurable results. Process automation, AI decision support, 
and data integration for manufacturing, healthcare, and publishing operations.
```

**Icon Badges:**
- Code icon
- Database icon
- Workflow icon

### Quick Links Column

**Column Title:** Quick Links

**Links:**
```
- Home â†’ /#home
- Services â†’ /#services
- Industries â†’ /#industries
- Case Studies â†’ /case-studies (Phase 3)
- Insights â†’ /blog/
- About â†’ /#about
- Contact â†’ /#contact
```

### Services Column

**Column Title:** Services

**List Items (non-linked for now):**
```
- Process Automation
- AI Decision Support
- Data Integration
- Custom Workflows
- API Integration
```

### Contact Column

**Column Title:** Contact

**Content:**
```
Email: hello@automationarchitech.com (clickable mailto link with external link icon)
```

### Bottom Bar

**Copyright Text:**
```
Â© 2025 Automation Architech. All rights reserved.
```

---

## IMPLEMENTATION NOTES FOR CLAUDE CODE

### Critical Rules:

1. **Use exact copy above** - No modifications, improvements, or "helpful" changes
2. **Preserve existing component functionality** - ServiceCard expansions, RevealOnScroll, ContactForm validation all stay as-is
3. **Only update text content** - Don't change component structure, styling, or interactive behavior
4. **Placeholder for case studies** - Links to `/case-studies` or `#case-studies` until Phase 3 builds actual page
5. **Icon consistency** - Use existing icon system (Lucide icons + emojis), match existing style

### What NOT to Change:

- âŒ Component architecture (Astro + React islands)
- âŒ Animation timings or transition effects
- âŒ Color scheme (gray-900, gray-50, etc.)
- âŒ Typography scale (font-light, font-medium, etc.)
- âŒ Spacing/layout system
- âŒ Form validation logic
- âŒ Hover/scroll reveal interactions

### What TO Change:

- âœ… Text content in headlines, descriptions, CTAs
- âœ… Button labels and link text
- âœ… Card titles and expandable feature lists
- âœ… Navigation link labels
- âœ… Footer copy
- âœ… Form placeholder text

---

## PHASE 3 DEPENDENCIES

The following elements reference content that doesn't exist yet:

1. **/case-studies Page** - All links point to this page (nav, hero CTA, service cards, footer)
2. **Individual Case Study Pages** - 5 detailed case study pages need to be built
3. **Filtering/Navigation** - Eventually add filtering by solution type or industry

**Current behavior:** All `/case-studies` links will 404 until the page is built.

**Phase 3 tasks:**
- Build `/case-studies` index page with all 5 case studies
- Build individual case study detail pages
- Add filtering or tagging system
- Optionally add "Featured Work" preview section on homepage

**Interim Solution:** Links point to `/case-studies` - clear 404 is better than confusing behavior. Shows active development.

---

## CONTENT STATUS

### Complete and Locked:
- âœ… Hero section (headline, subheadline, CTAs, quick-reference cards)
- âœ… Services section (headline, subheadline, 3 service cards with features)
- âœ… Industries section (headline, subheadline, 6 industry cards)
- âœ… About section (headline, subheadline, 3 differentiators, 4 stats)
- âœ… Contact section (headline, subheadline, form placeholder, info cards)
- âœ… Navigation (header links updated)
- âœ… Footer (tagline, services list, copyright)

### Phase 3 Additions Needed:
- â³ Case studies section on homepage (preview of 3 case studies)
- â³ Case study detail pages (5 full case studies)
- â³ Case studies index page (`/case-studies`)
- â³ Client logos section (below hero)
- â³ Filtering/navigation between solutions and industries

---

**Document Version:** 1.0  
**Last Updated:** December 1, 2024  
**Approved By:** Phil  
**Implementation Status:** Ready for Claude Code
