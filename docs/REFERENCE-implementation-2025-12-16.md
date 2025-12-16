# Implementation Reference - Automation Architech

**Generated**: December 16, 2025
**Git Commit**: 9ec4d2dc86105fa2d3adad1151261cd0dd40e573
**Purpose**: Locate copy, colors, and fonts in actual implementation files for manual editing

---

## Table of Contents

1. [Copy Implementation](#copy-implementation)
   - [Homepage](#homepage-copy)
   - [Case Studies Pages](#case-studies-copy)
   - [Navigation & Footer](#navigation-footer-copy)
2. [Color Implementation](#color-implementation)
   - [Primary Colors (Gray Scale)](#primary-colors)
   - [Semantic Colors](#semantic-colors)
   - [Component-Specific Colors](#component-colors)
3. [Typography Implementation](#typography-implementation)
   - [Font Families](#font-families)
   - [Font Weights](#font-weights)
   - [Font Sizes](#font-sizes)

---

## Copy Implementation

### Homepage Copy

#### Hero Section

**Main Headline with Rotating Words**
- **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L8-L10)
- **Lines**: [8-10]
- **Current Text**: "Your [rotating] needs data"
- **Rotating Words Array Location**:
  - **File**: [src/components/react/RotatingHeadline.tsx](src/components/react/RotatingHeadline.tsx#L9)
  - **Lines**: [9]
  - **Array Values**: ["company", "reports", "team", "product", "analytics"]
- **Implementation Notes**: React component with useState hook. Rotation interval: 2500ms (line 10), fade transition: 500ms (line 22)

**Subheadline**
- **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L11-L13)
- **Lines**: [11-13]
- **Current Text**: "We help organizations build intelligent LLM applications deploy robust data pipelines and create seamless system workflows that scale."
- **Visibility Logic Location**:
  - **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L11)
  - **Lines**: [11]
  - **Notes**: CSS classes: `opacity-0 transition-opacity duration-300 group-hover:opacity-100` - reveals on hover

**Primary CTA Button**
- **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L16-L22)
- **Lines**: [16-22]
- **Button Text**: "See Our Work"
- **Link Target**: /case-studies
- **Styling Classes**: `bg-gray-900 px-8 py-4 text-lg font-medium text-white hover:bg-gray-800`

**Secondary CTA Button**
- **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L23-L28)
- **Lines**: [23-28]
- **Button Text**: "Book 15-Minute Discovery Call →"
- **Link Target**: /#contact
- **Styling Classes**: `border border-gray-300 px-8 py-4 text-lg font-normal text-gray-600 hover:border-gray-900 hover:text-gray-900`

#### Quick Reference Cards (Services)

**Service Card Component Template**
- **File**: [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx)
- **Lines**: [1-114 for entire component]
- **Notes**: Expandable cards with hover/mobile reveal behavior. Auto-expands on mobile scroll (line 34-37)

**Card 1: Process Automation**
- **Data Source File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L32-L44)
- **Lines**: [32-44]
- **Title**: "Process Automation"
- **Description**: "Save 10-20 hours per week by eliminating manual work and reducing error rates to near-zero."
- **Expandable Features Array**:
  - **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L36-L40)
  - **Lines**: [36-40]
  - **Count**: 3 features
  - Features:
    1. "Reduce error rates from 5-10% to <1%"
    2. "Scale capacity 5-10x without additional headcount"
    3. "Free your team to focus on strategic work"
- **CTA Text**: "See case studies →"
- **CTA Link**: /case-studies?service=process-automation
- **Icon**: lucide:settings

**Card 2: AI-Powered Decision Support**
- **Data Source File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L45-L57)
- **Lines**: [45-57]
- **Title**: "AI-Powered Decision Support"
- **Description**: "Accelerate expert decisions—process thousands of documents in minutes instead of weeks."
- **Expandable Features Array**:
  - **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L49-L53)
  - **Lines**: [49-53]
  - **Count**: 3 features
  - Features:
    1. "Match patterns across massive datasets humans can't manually review"
    2. "Reduce expert bottlenecks (legal review, clinical assessment, due diligence)"
    3. "Built-in verification layers to prevent AI hallucinations (99% accuracy)"
- **CTA Text**: "See case studies →"
- **CTA Link**: /case-studies?service=ai-decision-support
- **Icon**: lucide:brain

**Card 3: Multi-Platform Data Integration**
- **Data Source File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L58-L70)
- **Lines**: [58-70]
- **Title**: "Multi-Platform Data Integration"
- **Description**: "Stop manually compiling data from 5+ platforms. Get unified reporting automatically."
- **Expandable Features Array**:
  - **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L62-L66)
  - **Lines**: [62-66]
  - **Count**: 3 features
  - Features:
    1. "Connect Google Analytics, Klaviyo, Salesforce, Shopify, and 50+ other platforms"
    2. "Automate report generation that currently takes hours"
    3. "Enable historical analysis (3+ years) impossible in spreadsheets"
- **CTA Text**: "See case studies →"
- **CTA Link**: /case-studies?service=multi-platform-data-integration
- **Icon**: lucide:database

#### Stats Section

**Stats Component Location**
- **File**: [src/components/sections/Stats.astro](src/components/sections/Stats.astro)
- **Lines**: [1-30 for entire component]

**Stat Card 1: Projects Delivered**
- **File**: [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L5)
- **Lines**: [5]
- **Number**: "50+"
- **Label**: "Projects Delivered"
- **Link Target**: /case-studies (line 18)
- **Icon**: lucide:briefcase

**Stat Card 2: Industry Experience**
- **File**: [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L6)
- **Lines**: [6]
- **Number**: "8 Years"
- **Label**: "Industry Experience"
- **Link Target**: /case-studies
- **Icon**: lucide:calendar

**Stat Card 3: Average Time Reduction**
- **File**: [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L7)
- **Lines**: [7]
- **Number**: "87.5%"
- **Label**: "Average Time Reduction"
- **Link Target**: /case-studies
- **Icon**: lucide:clock

**Stat Card 4: AI Accuracy**
- **File**: [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L8)
- **Lines**: [8]
- **Number**: "99%"
- **Label**: "AI Accuracy"
- **Link Target**: /case-studies
- **Icon**: lucide:check-circle

#### Client Logos Section

**Section Headline**
- **File**: [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L19-L21)
- **Lines**: [19-21]
- **Text**: "Trusted By"

**Logo Array/List**
- **File**: [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L3-L14)
- **Lines**: [3-14]
- **Format**: Array of objects with src/alt
- **Count**: 10 logos
- **Image Directory**: /public/images/clients/
- **Individual Logos**:
  1. logo01-mixed_analytics.png - Line 4 - Alt: "Mixed Analytics"
  2. logo02-prakeeto.png - Line 5 - Alt: "Prakeeto"
  3. logo03-aerospace_fittings.png - Line 6 - Alt: "Aerospace Fittings"
  4. logo04-acadexis.png - Line 7 - Alt: "Acadexis"
  5. logo05-highland_street.png - Line 8 - Alt: "Highland Street"
  6. logo06-coingecko.png - Line 9 - Alt: "CoinGecko"
  7. logo07-vextras.png - Line 10 - Alt: "Vextras"
  8. logo08-signatureMD.png - Line 11 - Alt: "Signature MD"
  9. logo09-bookshoporg.png - Line 12 - Alt: "Bookshop.org"
  10. logo10-greenboy.png - Line 13 - Alt: "Greenboy"

#### Industries Section

**Section Container**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro)
- **Lines**: [1-100 for entire section]

**Section Headline**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L78-L80)
- **Lines**: [78-80]
- **Text**: "Industries We Serve"

**Section Subheadline**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L81-L83)
- **Lines**: [81-83]
- **Text**: "We understand industry-specific challenges—from production scheduling bottlenecks to multi-platform ad reporting. See how we've helped companies in your industry."

**Industry Cards Data Source**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L5-L71)
- **Lines**: [5-71]
- **Format**: Array of objects

**Industry Card 1: Legal Tech**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L6-L15)
- **Lines**: [6-15]
- **Title**: "Legal Tech"
- **Description**: Bulleted list of 3 items:
  - "Legal document processing"
  - "Contract analysis automation"
  - "Compliance workflows"
- **Icon**: lucide:scale
- **CTA Link**: /case-studies?industry=legal-tech

**Industry Card 2: Healthcare**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L16-L26)
- **Lines**: [16-26]
- **Title**: "Healthcare"
- **Description**: Bulleted list of 4 items:
  - "Clinical trial patient matching"
  - "Eligibility verification"
  - "Medical record processing"
  - "EHR integration"
- **Icon**: lucide:heart
- **CTA Link**: /case-studies?industry=healthcare

**Industry Card 3: Publishing & Media**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L27-L37)
- **Lines**: [27-37]
- **Title**: "Publishing & Media"
- **Description**: Bulleted list of 4 items:
  - "Campaign coordination and link management"
  - "Multi-platform ad performance reporting"
  - "Content distribution automation"
  - "Audience analytics consolidation"
- **Icon**: lucide:newspaper
- **CTA Link**: /case-studies?industry=publishing-media

**Industry Card 4: E-commerce**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L38-L48)
- **Lines**: [38-48]
- **Title**: "E-commerce"
- **Description**: Bulleted list of 4 items:
  - "Inventory synchronization across channels"
  - "Order routing and fulfillment automation"
  - "Customer data consolidation"
  - "Multi-platform performance tracking"
- **Icon**: lucide:shopping-cart
- **CTA Link**: /case-studies?industry=e-commerce

**Industry Card 5: Education Technology**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L49-L59)
- **Lines**: [49-59]
- **Title**: "Education Technology"
- **Description**: Bulleted list of 4 items:
  - "Student data integration"
  - "Learning management system automation"
  - "Assessment workflow optimization"
  - "Educational content distribution"
- **Icon**: lucide:graduation-cap
- **CTA Link**: /case-studies?industry=education-technology

**Industry Card 6: Manufacturing**
- **File**: [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L60-L70)
- **Lines**: [60-70]
- **Title**: "Manufacturing"
- **Description**: Bulleted list of 4 items:
  - "Production scheduling and capacity planning"
  - "Changeover optimization"
  - "Shop floor coordination"
  - "Quality data aggregation and maintenance tracking"
- **Icon**: lucide:factory
- **CTA Link**: /case-studies?industry=manufacturing

#### About Section

**Section Container**
- **File**: [src/components/sections/About.astro](src/components/sections/About.astro)
- **Lines**: [1-94 for entire section]

**Section Eyebrow**
- **File**: [src/components/sections/About.astro](src/components/sections/About.astro#L40-L42)
- **Lines**: [40-42]
- **Text**: "About"

**Section Headline**
- **File**: [src/components/sections/About.astro](src/components/sections/About.astro#L45-L47)
- **Lines**: [45-47]
- **Text**: "Why Companies Choose Us"

**Differentiator Cards**
- **Data Source File**: [src/components/sections/About.astro](src/components/sections/About.astro#L54-L68)
- **Lines**: [54-68]

**Differentiator Card 1: Tailored Solutions**
- **Lines**: [54-58]
- **Title**: "Tailored Solutions"
- **Description**: "Every project is unique. We build custom solutions that fit your specific needs and scale with your growth."
- **Component**: AboutCard (React)

**Differentiator Card 2: Proven Results**
- **Lines**: [59-63]
- **Title**: "Proven Results"
- **Description**: "Our clients see measurable improvements in efficiency, cost reduction, and revenue growth."
- **Component**: AboutCard (React)

**Differentiator Card 3: Expert Team**
- **Lines**: [64-68]
- **Title**: "Expert Team"
- **Description**: "Our team stays at the forefront of AI and automation technologies to deliver cutting-edge solutions. Our globally distributed team means faster turnaround for your projects."
- **Component**: AboutCard (React)

**Founder Photo Placeholder**
- **File**: [src/components/sections/About.astro](src/components/sections/About.astro#L72-L74)
- **Lines**: [72-74]
- **Image Source**: Placeholder div (no image yet)
- **Alt Text**: "Founder Photo"

**About Stats Cards**
- **File**: [src/components/sections/About.astro](src/components/sections/About.astro#L5-L34)
- **Lines**: [5-34]
- **Notes**: These are clickable stat cards linked to specific case studies

**Stat Card 1: Capacity Increase**
- **Lines**: [6-12]
- **Number**: "6-7x"
- **Label**: "Capacity Increase"
- **Context**: "Clinical trial patient matching"
- **Link**: /case-studies/clinical-trial-patient-matching
- **Icon**: lucide:users

**Stat Card 2: Time Reduction**
- **Lines**: [13-19]
- **Number**: "87.5%"
- **Label**: "Time Reduction"
- **Context**: "Production scheduling optimization"
- **Link**: /case-studies/manufacturing-production-scheduling
- **Icon**: lucide:clock

**Stat Card 3: Saved Per Week**
- **Lines**: [20-26]
- **Number**: "16 hrs"
- **Label**: "Saved Per Week"
- **Context**: "Ad performance reporting"
- **Link**: /case-studies/ad-performance-reporting
- **Icon**: lucide:trending-up

**Stat Card 4: MAU Growth**
- **Lines**: [27-33]
- **Number**: "200K → 2M"
- **Label**: "MAU Growth"
- **Context**: "Content strategy and analytics"
- **Link**: /case-studies/content-strategy-growth
- **Icon**: lucide:arrow-up-right

#### Contact Section

**Section Container**
- **File**: [src/components/sections/Contact.astro](src/components/sections/Contact.astro)
- **Lines**: [1-72 for entire section]

**Section Eyebrow**
- **File**: [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L8)
- **Lines**: [8]
- **Text**: "Contact"

**Section Headline**
- **File**: [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L9)
- **Lines**: [9]
- **Text**: "Ready to Automate?"

**Section Subheadline**
- **File**: [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L10-L12)
- **Lines**: [10-12]
- **Text**: "Tell us about your biggest bottleneck—we'll tell you if we can help."

**Contact Form Component**
- **File**: [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx)
- **Lines**: [1-172 for entire component]
- **Notes**: React island component using react-hook-form and zod validation

**Form Field Labels**
- **Name Field Label**:
  - **Lines**: [83-88]
  - **Text**: "Name *"
  - **Placeholder**: "Your name" (line 94)
- **Email Field Label**:
  - **Lines**: [103-108]
  - **Text**: "Email *"
  - **Placeholder**: "your@email.com" (line 114)
- **Company Field Label**:
  - **Lines**: [123-128]
  - **Text**: "Company *"
  - **Placeholder**: "Your company" (line 134)
- **Message Field Label**:
  - **Lines**: [143-148]
  - **Text**: "Message *"
  - **Placeholder**: "Tell us about your biggest operational bottleneck. What manual process is consuming the most time or creating the most errors?" (line 154)

**Submit Button**
- **Lines**: [162-168]
- **Default Text**: "Send Message"
- **Loading Text**: "Sending..."
- **Loading State Logic**: Lines [18, 164] - isSubmitting state

**Success Message**
- **Lines**: [49-51]
- **Text**: "Message received! We'll be in touch soon."

**Error Message**
- **Lines**: [55-58]
- **Text**: "Failed to send message. Please email us directly at hello@automationarchitech.com"

**Contact Method Cards**

**Email Card**
- **File**: [src/components/react/EmailContactCard.tsx](src/components/react/EmailContactCard.tsx)
- **Lines**: [17-41 for card content]
- **Button Text**: "Email Us"
- **Email Address**: hello@automationarchitech.com
- **Subtext**: "hello@automationarchitech.com" (clickable to copy, line 37)
- **Copy-to-Clipboard Logic**: Lines [7-15]

**Video Call Card**
- **File**: [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L25-L45)
- **Lines**: [25-45]
- **Button Text**: "Schedule Google Meet"
- **Link Target**: https://calendar.app.google/EVcS3xj7ud1BWtkL6
- **Subtext**: "Book a video call at a time that works for you." (lines 41-43)
- **Icon**: lucide:video

**Phone Call Card**
- **File**: [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L48-L68)
- **Lines**: [48-68]
- **Button Text**: "Schedule Phone Call"
- **Link Target**: https://calendar.app.google/mnKPd1jZJn9fyKTu9
- **Subtext**: "Prefer to talk by phone? Schedule a call that fits your schedule." (lines 64-66)
- **Icon**: lucide:phone

---

### Case Studies Copy

#### Case Studies Index Page (`/case-studies`)

**Page Component**
- **File**: [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro)
- **Lines**: [1-84 for entire page]

**Page Eyebrow**
- **File**: [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L31-L33)
- **Lines**: [31-33]
- **Text**: "Case Studies"

**Page Headline**
- **File**: [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L35-L37)
- **Lines**: [35-37]
- **Text**: "Real Projects. Real Results."

**Page Subheadline**
- **File**: [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L38-L40)
- **Lines**: [38-40]
- **Text**: "From 6-7x capacity increases to 87.5% time reductions—see how we've helped companies automate their most critical processes."
- **Hover Behavior**: Lines 38-40 - opacity transitions on hover (group-hover pattern)

**Primary CTA Button**
- **File**: [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L44-L48)
- **Lines**: [44-48]
- **Button Text**: "Book 15-Minute Discovery Call"
- **Link Target**: /#contact

**Case Study Cards Component**
- **File**: [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx)
- **Lines**: [1-181 for entire component]
- **Data Source**: Astro Content Collections - /src/content/case-studies/*.md
- **Notes**: Client-side filtering via React island - handles industry and service query params

**Individual Case Study Card Structure**
- **File**: [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L99-L180)
- **Lines**: [99-180]
- **Elements Included**: Industry icons with tooltips, solution type icons with tooltips, clickable tags, title, metric banner, summary, CTA link

**Bottom CTA Section**
- **File**: [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L61-L82)
- **Lines**: [61-82]
- **Headline**: "Ready to See Similar Results?"
- **Subheadline**: "Tell us about your biggest bottleneck—we'll tell you if we can help."
- **Primary CTA Text**: "Start a Conversation"
- **Primary CTA Link**: /#contact
- **Secondary CTA Text**: "Explore Our Services"
- **Secondary CTA Link**: /#

#### Individual Case Study Pages

**Page Template**
- **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro)
- **Lines**: [1-199 for entire template]
- **Data Source**: Markdown frontmatter + content from /src/content/case-studies/

**Hero Section Elements** (rendered from frontmatter)
- **Breadcrumb Link**:
  - **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L34-L36)
  - **Lines**: [34-36]
  - **Text**: "← Back to Case Studies"
  - **Link**: /case-studies
- **Discovery Call CTA Button**:
  - **Lines**: [37-41]
  - **Text**: "Book 15-Minute Discovery Call"
  - **Link**: /#contact
- **Title Location in Template**:
  - **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L70-L72)
  - **Lines**: [70-72]
  - **Notes**: Renders {data.title} from frontmatter
- **Industry Tags Location**:
  - **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L45-L55)
  - **Lines**: [45-55]
  - **Notes**: Maps over {data.industry} array - tags are clickable for filtering
- **Solution Type Location**:
  - **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L58-L67)
  - **Lines**: [58-67]
  - **Notes**: Renders {data.solutionType} with icon - clickable for filtering
- **Metric Banner Location**:
  - **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L75-L82)
  - **Lines**: [75-82]
  - **Notes**: Renders {data.metric} (large number) and {data.metricLabel} (label text)

**Quick Facts Grid**
- **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L85-L114)
- **Lines**: [85-114]
- **Elements**: Industry, Timeline, Solution Type
- **Notes**: 3-column grid on desktop, renders frontmatter data

**Markdown Content Rendering**
- **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L119-L132)
- **Lines**: [119-132]
- **Notes**: Uses <Content /> component with prose classes from @tailwindcss/typography plugin

**Related Cases Section**
- **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L160-L197)
- **Lines**: [160-197]
- **Notes**: Fetches up to 3 cases from {data.relatedCases} frontmatter array

**Bottom CTA Section**
- **File**: [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L136-L157)
- **Lines**: [136-157]
- **Primary CTA Text**: "Book 15-Minute Discovery Call"
- **Primary CTA Link**: /#contact
- **Secondary CTA Text**: "View All Case Studies"
- **Secondary CTA Link**: /case-studies
- **Headline**: "Ready to See Similar Results?"
- **Subheadline**: "Tell us about your biggest bottleneck—we'll tell you if we can help."

#### Case Study Markdown Files

**Storage Location**: [src/content/case-studies/](src/content/case-studies/)

**List of Markdown Files**:
1. **manufacturing-production-scheduling-AECO.md**
   - **Full Path**: [src/content/case-studies/manufacturing-production-scheduling-AECO.md](src/content/case-studies/manufacturing-production-scheduling-AECO.md)
   - **Frontmatter Lines**: [1-16]
   - **Content Lines**: [17-164]
   - **Key Sections**: Quick Facts, Problem, Solution, Impact, Technical Highlights, Key Learnings
2. **clinical-trial-patient-matching-AECO.md**
   - **Full Path**: [src/content/case-studies/clinical-trial-patient-matching-AECO.md](src/content/case-studies/clinical-trial-patient-matching-AECO.md)
3. **ad-performance-reporting-AECO.md**
   - **Full Path**: [src/content/case-studies/ad-performance-reporting-AECO.md](src/content/case-studies/ad-performance-reporting-AECO.md)
4. **email-campaign-link-management-AECO.md**
   - **Full Path**: [src/content/case-studies/email-campaign-link-management-AECO.md](src/content/case-studies/email-campaign-link-management-AECO.md)
5. **content-strategy-growth-AECO.md**
   - **Full Path**: [src/content/case-studies/content-strategy-growth-AECO.md](src/content/case-studies/content-strategy-growth-AECO.md)

**Frontmatter Schema Reference**
- **File**: [src/content/config.ts](src/content/config.ts#L17-L35)
- **Lines**: [17-35]
- **Fields Defined**: title, company, industry (array), industryIcon, solutionType (optional), solutionIcon (optional), metric, metricLabel, timeline, slug (optional), order, featured, summary, relatedCases (array)

---

### Navigation & Footer Copy

#### Header Navigation

**Navigation Component**
- **File**: [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx)
- **Lines**: [1-108 for entire component]

**Logo/Brand Text**
- **File**: [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L61-L69)
- **Lines**: [61-69]
- **Logo Image**: /lovable-uploads/22af2fd9-7390-4312-8b89-2db9122e4680.png
- **Brand Text**: "Automation Architech" (from siteConfig.title)
- **Link Target**: /

**Navigation Links**
- **File**: [src/config/site.ts](src/config/site.ts#L15-L22)
- **Lines**: [15-22 for navigation array]

**Individual Nav Links**:
1. **Link 1**:
   - **Lines**: [16]
   - **Text**: "Home"
   - **Target**: /#home
2. **Link 2**:
   - **Lines**: [17]
   - **Text**: "Services"
   - **Target**: /#
3. **Link 3**:
   - **Lines**: [18]
   - **Text**: "Industries"
   - **Target**: /#industries
4. **Link 4**:
   - **Lines**: [19]
   - **Text**: "Case Studies"
   - **Target**: /case-studies
5. **Link 5**:
   - **Lines**: [20]
   - **Text**: "Insights"
   - **Target**: /blog/
6. **Link 6**:
   - **Lines**: [21]
   - **Text**: "Contact"
   - **Target**: /#contact

**CTA Button** (Contact - styled differently)
- **File**: [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L28-L38)
- **Lines**: [28-38]
- **Text**: "Contact"
- **Link Target**: /#contact
- **Styling Logic**: Lines 73, 95 - "Contact" label triggers button variant

**Mobile Menu Toggle**
- **File**: [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L77-L83)
- **Lines**: [77-83]
- **Implementation Notes**: React component with useState, toggles between Menu and X icons (lucide-react)

#### Footer

**Footer Component**
- **File**: [src/components/Footer.astro](src/components/Footer.astro)
- **Lines**: [1-97 for entire component]

**Logo/Brand Section**
- **Logo Location**:
  - **File**: [src/components/Footer.astro](src/components/Footer.astro#L29-L34)
  - **Lines**: [29-34]
  - **Logo Image**: /lovable-uploads/22af2fd9-7390-4312-8b89-2db9122e4680.png
- **Brand Name**:
  - **Lines**: [35]
  - **Text**: "Automation Architech" (from siteConfig.title)
- **Tagline**:
  - **Lines**: [37-39]
  - **Text**: "Intelligent automation with measurable results. Process automation, AI decision support, and data integration for manufacturing, healthcare, and publishing operations."

**Social Media Icons**
- **File**: [src/components/Footer.astro](src/components/Footer.astro#L40-L59)
- **Lines**: [40-59]
- **Icons**:
  1. **LinkedIn**: Lines [41-49] - Link: "#" (placeholder) - Icon: lucide:linkedin
  2. **Twitter/X**: Lines [50-58] - Link: "#" (placeholder) - Icon: lucide:twitter

**Quick Links Column**
- **Column Title**:
  - **Lines**: [63]
  - **Text**: "Quick Links"
- **Links List**:
  - **Data Source**: [src/components/Footer.astro](src/components/Footer.astro#L6-L14)
  - **Lines**: [6-14 for data, 64-72 for rendering]

**Individual Quick Links**:
1. **Lines**: [7] - Text: "Home" - Target: /#home
2. **Lines**: [8] - Text: "Services" - Target: /#
3. **Lines**: [9] - Text: "Industries" - Target: /#industries
4. **Lines**: [10] - Text: "Case Studies" - Target: /case-studies
5. **Lines**: [11] - Text: "Insights" - Target: /blog/
6. **Lines**: [12] - Text: "About" - Target: /#about
7. **Lines**: [13] - Text: "Contact" - Target: /#contact

**Services Column**
- **Column Title**:
  - **Lines**: [76]
  - **Text**: "Services"
- **Items List**:
  - **Data Source**: [src/components/Footer.astro](src/components/Footer.astro#L16-L22)
  - **Lines**: [16-22 for data, 77-81 for rendering]
  - **Notes**: Non-clickable list items

**Individual Service Items**:
1. **Lines**: [17] - Text: "Process Automation"
2. **Lines**: [18] - Text: "AI Decision Support"
3. **Lines**: [19] - Text: "Data Integration"
4. **Lines**: [20] - Text: "Custom Workflows"
5. **Lines**: [21] - Text: "API Integration"

**Contact Info**
- **Email Address**:
  - **Lines**: [87-93]
  - **Email**: hello@automationarchitech.com (from siteConfig.email)
  - **Link Type**: mailto link
  - **Icon**: lucide:external-link

**Copyright Text**
- **File**: [src/components/Footer.astro](src/components/Footer.astro#L86)
- **Lines**: [86]
- **Text**: "© {currentYear} Automation Architech. All rights reserved."
- **Dynamic Year Logic**:
  - **Lines**: [5]
  - **Notes**: Uses JavaScript Date object - `new Date().getFullYear()`

---

## Color Implementation

### Primary Colors (Gray Scale)

**Tailwind Config**
- **File**: [tailwind.config.ts](tailwind.config.ts#L19-L86)
- **Lines**: [19-86 for extended colors]
- **Notes**: Uses default Tailwind gray scale + custom CSS variables for design system colors

**Global CSS Variables**
- **File**: [src/styles/global.css](src/styles/global.css#L8-L47)
- **Lines**: [8-47]
- **Notes**: HSL-based design system tokens

**Most Common Color: Gray-900 (`#111827`)**

**Usage Locations**:

1. **Primary Button Backgrounds**
   - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L18) - Line 18 - Primary CTA: `bg-gray-900`
   - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L34) - Line 34 - Video call button: `bg-gray-900`
   - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L57) - Line 57 - Phone call button: `bg-gray-900`
   - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L165) - Line 165 - Submit button: `bg-gray-900`
   - [src/components/react/EmailContactCard.tsx](src/components/react/EmailContactCard.tsx#L25) - Line 25 - Email button: `bg-gray-900`
   - [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L33) - Line 33 - Nav CTA button: `bg-gray-900`
   - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L45) - Line 45 - Top CTA: `bg-gray-900`
   - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L71) - Line 71 - Bottom CTA: `bg-gray-900`
   - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L38) - Line 38 - Discovery call CTA: `bg-gray-900`

2. **Primary Text Color**
   - Applied globally via: [src/styles/global.css](src/styles/global.css#L96) - Line 96 - `text-foreground` class
   - Headlines throughout: `text-gray-900` class
   - Card titles: `text-gray-900`

3. **Icon Backgrounds** (Stats cards)
   - [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L20) - Line 20 - Icon color: `text-gray-900`
   - [src/components/sections/About.astro](src/components/sections/About.astro#L83) - Line 83 - Icon color: `text-gray-900`

4. **Tooltip Backgrounds**
   - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L111) - Line 111 - Tooltip: `bg-gray-900`
   - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L119) - Line 119 - Tooltip: `bg-gray-900`

**Other Gray Shades Used**:

**Gray-50 (`#F9FAFB`)**
- **Usage**: Light backgrounds for sections, card backgrounds
- **Locations**:
  - [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L16) - Line 16 - Section bg: `bg-gray-50`
  - [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L74) - Line 74 - Section bg: `bg-gray-50`
  - [src/components/sections/About.astro](src/components/sections/About.astro#L36) - Line 36 - Section bg: `bg-gray-50`
  - [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L18) - Line 18 - Card bg: `bg-gray-50`
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L25) - Line 25 - Contact card bg: `bg-gray-50`
  - [src/components/Footer.astro](src/components/Footer.astro#L24) - Line 24 - Footer bg: `bg-gray-50`

**Gray-100 (`#F3F4F6`)**
- **Usage**: Subtle borders, card borders, tag backgrounds
- **Locations**:
  - [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L18) - Line 18 - Card border: `border-gray-100`
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L47) - Line 47 - Card border: `border-gray-100`
  - [src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L48) - Line 48 - Card border: `border-gray-100`
  - [src/components/react/AboutCard.tsx](src/components/react/AboutCard.tsx#L32) - Line 32 - Card border: `border-gray-100`
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L132) - Line 132 - Tag bg: `bg-gray-100`
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L50) - Line 50 - Tag bg: `bg-gray-100`

**Gray-200 (`#E5E7EB`)**
- **Usage**: Metric banners on case study cards, stronger borders
- **Locations**:
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L155) - Line 155 - Metric banner: `bg-gray-200`
  - [src/components/sections/About.astro](src/components/sections/About.astro#L72) - Line 72 - Placeholder bg: `bg-gray-200`

**Gray-300 (`#D1D5DB`)**
- **Usage**: Borders for inputs, secondary borders
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L25) - Line 25 - Button border: `border-gray-300`
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L93) - Line 93 - Input border: `border-gray-300`
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L25) - Line 25 - Card border: `border-gray-100`
  - [src/components/Footer.astro](src/components/Footer.astro#L85) - Line 85 - Divider: `border-gray-200`

**Gray-400 (`#9CA3AF`)**
- **Usage**: Scrollbar, focus rings
- **Locations**:
  - [src/styles/global.css](src/styles/global.css#L113) - Line 113 - Scrollbar hover: `bg-gray-400`
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L93) - Line 93 - Focus ring: `focus:ring-gray-400`

**Gray-500 (`#6B7280`)**
- **Usage**: Secondary text, muted text, labels
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L11) - Line 11 - Subheadline: `text-gray-600`
  - [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L19) - Line 19 - Section label: `text-gray-500`
  - [src/components/Footer.astro](src/components/Footer.astro#L37) - Line 37 - Tagline: `text-gray-500`
  - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L31) - Line 31 - Eyebrow: `text-gray-500`

**Gray-600 (`#4B5563`)**
- **Usage**: Body text, icon colors, secondary text
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L11) - Line 11 - Subheadline: `text-gray-600`
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L25) - Line 25 - Button text: `text-gray-600`
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L60) - Line 60 - Icon: `text-gray-600`
  - [src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L59) - Line 59 - Icon: `text-gray-600`
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L163) - Line 163 - Summary text: `text-gray-600`
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L85) - Line 85 - Label: `text-gray-700`

**Gray-700 (`#374151`)**
- **Usage**: Darker text, labels, tag text
- **Locations**:
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L50) - Line 50 - Tag text: `text-gray-700`
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L158) - Line 158 - Metric label: `text-gray-700`
  - [src/components/react/EmailContactCard.tsx](src/components/react/EmailContactCard.tsx#L34) - Line 34 - Email text: `text-gray-700`

**Gray-800 (`#1F2937`)**
- **Usage**: Button hover states
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L18) - Line 18 - Button hover: `hover:bg-gray-800`
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L34) - Line 34 - Button hover: `hover:bg-gray-800`
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L165) - Line 165 - Button hover: `hover:bg-gray-800`

---

### Semantic Colors

**Success Color (Green)**
- **Tailwind Classes**: Default Tailwind green shades
- **Locations**: Not explicitly used in main components (toast notifications handled by Sonner library)

**Error Color (Red)**
- **Tailwind Class**: `text-red-500`, `text-red-600`
- **Locations**:
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L87) - Line 87 - Required asterisk: `text-red-500`
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L97) - Line 97 - Error message: `text-red-600`

**Info/Focus Color**
- **Tailwind Class**: `ring-gray-400`
- **Locations**:
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L93) - Line 93 - Focus ring: `focus:ring-gray-400`

---

### Component-Specific Colors

**Service Cards**
- **Background Color**: `bg-white` ([src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L47))
- **Border**: `border-gray-100` (line 47)
- **Hover Shadow**: `hover:shadow-lg` (line 48)
- **Text Color**: `text-gray-900` for title (line 68), `text-gray-600` for description (line 85)
- **Icon Color**: `text-gray-600` (line 60)

**Industry Cards**
- **Background Color**: `bg-white` ([src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L48))
- **Border**: `border-gray-100` (line 48)
- **Hover Shadow**: `hover:shadow-lg` (line 49)
- **Text Color**: `text-gray-900` for title (line 68), `text-gray-600` for items (line 85)
- **Icon Color**: `text-gray-600` (line 59)

**About Cards**
- **Background Color**: `bg-white` ([src/components/react/AboutCard.tsx](src/components/react/AboutCard.tsx#L32))
- **Border**: `border-gray-100` (line 32)
- **Hover Shadow**: `hover:shadow-md` (line 33)
- **Text Color**: `text-gray-900` for title (line 41), `text-gray-600` for description (line 56)

**Case Study Cards**
- **Background Color**: `bg-white` ([src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L104))
- **Border**: `border-gray-200` (line 104)
- **Hover Shadow**: `hover:shadow-lg` (line 104)
- **Metric Banner Background**: `bg-gray-200` (line 155)
- **Metric Banner Text**: `text-gray-900` for number (line 157), `text-gray-700` for label (line 158)
- **Tag Background**: `bg-gray-100` (line 132)
- **Tag Text**: `text-gray-600` (line 132)
- **Tag Hover**: `hover:bg-gray-200` (line 132)

**Contact Form**
- **Input Background**: `bg-white` (default, not explicitly styled)
- **Input Border**: `border-gray-300` ([src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L93))
- **Focus State Border**: `focus:ring-2 focus:ring-gray-400 focus:border-transparent` (line 93)
- **Error State Text**: `text-red-600` (line 97)
- **Label Text**: `text-gray-700` (line 85)

**Navigation**
- **Background Color**: `bg-white/95 backdrop-blur-md` when scrolled ([src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L57))
- **Border**: `border-gray-100` when scrolled (line 57)
- **Link Color**: `text-gray-600` (line 45)
- **Link Hover**: `hover:text-gray-900` (line 45)
- **CTA Button Background**: `bg-gray-900` (line 33)
- **CTA Button Hover**: `hover:bg-gray-800` (line 33)

**Footer**
- **Background Color**: `bg-gray-50` ([src/components/Footer.astro](src/components/Footer.astro#L24))
- **Border**: `border-gray-100` (line 24)
- **Text Color**: `text-gray-500` for body text (line 37), `text-gray-900` for headings (line 35)
- **Link Color**: `text-gray-500` (line 67)
- **Link Hover**: `hover:text-gray-900` (line 67)
- **Copyright**: `text-gray-400` (line 85)

---

## Typography Implementation

### Font Families

**Primary Font: Inter**

**Font Loading**
- **File**: [src/styles/global.css](src/styles/global.css#L1)
- **Lines**: [1]
- **Method**: Google Fonts import
- **URL**: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap
- **Weights Loaded**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)

**Font Family Declaration**
- **File**: [tailwind.config.ts](tailwind.config.ts#L16-L18)
- **Lines**: [16-18]
- **Value**: `fontFamily: { inter: ['Inter', 'sans-serif'] }`

**Global Font Application**
- **File**: [src/styles/global.css](src/styles/global.css#L96)
- **Lines**: [96]
- **Class**: `font-inter` applied to `<body>` element
- **Full classes**: `bg-background text-foreground font-inter antialiased`

---

### Font Weights

**Available Weights**: 300 (Light), 400 (Regular/Normal), 500 (Medium), 600 (Semi-bold)

**Weight Usage by Element Type**:

**Headings**
- **H1 (Hero Headlines)**:
  - **Weight Class**: `font-light` (300)
  - **Locations**:
    - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L8) - Line 8 - Main headline
    - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L35) - Line 35 - Page headline
    - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L70) - Line 70 - Case study title

- **H2 (Section Headlines)**:
  - **Weight Class**: `font-light` (300)
  - **Locations**:
    - [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L78) - Line 78
    - [src/components/sections/About.astro](src/components/sections/About.astro#L45) - Line 45
    - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L9) - Line 9
    - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L138) - Line 138

- **H3 (Card Titles)**:
  - **Weight Class**: `font-semibold` (600)
  - **Locations**:
    - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L68) - Line 68
    - [src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L68) - Line 68
    - [src/components/react/AboutCard.tsx](src/components/react/AboutCard.tsx#L41) - Line 41
    - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L150) - Line 150

**Body Text**
- **Weight Class**: `font-normal` (400) - applied by default
- **Global Application**: No explicit class needed, default browser/Tailwind behavior
- **Locations**: Throughout components, default for `<p>` and most text elements

**Buttons**
- **Weight Class**: `font-medium` (500)
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L18) - Line 18 - Primary CTA
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L165) - Line 165 - Submit button
  - [src/components/react/EmailContactCard.tsx](src/components/react/EmailContactCard.tsx#L25) - Line 25 - Email button
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L34) - Line 34 - Video/phone buttons
  - [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L33) - Line 33 - Nav CTA

**Navigation Links**
- **Weight Class**: `font-medium` (500)
- **File**: [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L9)
- **Lines**: [9]

**Form Labels**
- **Weight Class**: `font-medium` (500)
- **File**: [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L85)
- **Lines**: [85]

**Section Eyebrows** (Small uppercase labels)
- **Weight Class**: `font-semibold` (600)
- **Locations**:
  - [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L19) - Line 19
  - [src/components/sections/About.astro](src/components/sections/About.astro#L40) - Line 40
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L8) - Line 8
  - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L31) - Line 31

**Stat Numbers**
- **Weight Class**: `font-light` (300)
- **Locations**:
  - [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L22) - Line 22
  - [src/components/sections/About.astro](src/components/sections/About.astro#L85) - Line 85
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L157) - Line 157 - `font-bold` exception
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L76) - Line 76

**Metrics/Numbers** (Case study cards)
- **Weight Class**: `font-bold` (700) - Note: This is NOT a loaded weight, browser synthesizes it
- **Locations**:
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L157) - Line 157

**Tag Text**
- **Weight Class**: `font-semibold` (600)
- **Locations**:
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L132) - Line 132
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L50) - Line 50

---

### Font Sizes

**Size Scale Reference**
- **File**: [tailwind.config.ts](tailwind.config.ts)
- **Lines**: N/A - using Tailwind defaults
- **Notes**: Using Tailwind default type scale (text-xs through text-9xl)

**Size Usage by Element Type**:

**Hero Headlines (H1)**
- **Desktop Size**: `text-6xl` (3.75rem / 60px) or `text-7xl` (4.5rem / 72px)
- **Mobile Size**: `text-4xl` (2.25rem / 36px)
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L8) - Line 8 - `text-4xl md:text-6xl lg:text-7xl`
  - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L35) - Line 35 - `text-6xl`
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L70) - Line 70 - `text-5xl`

**Section Headlines (H2)**
- **Size**: `text-4xl` (2.25rem / 36px)
- **Locations**:
  - [src/components/sections/Industries.astro](src/components/sections/Industries.astro#L78) - Line 78 - `text-4xl`
  - [src/components/sections/About.astro](src/components/sections/About.astro#L45) - Line 45 - `text-4xl`
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L9) - Line 9 - `text-4xl`
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L138) - Line 138 - `text-3xl`

**Card Titles (H3)**
- **Service Cards**: `text-2xl` (1.5rem / 24px)
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L68) - Line 68
- **Industry Cards**: `text-xl` (1.25rem / 20px)
  - [src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L68) - Line 68
- **About Cards**: `text-xl` (1.25rem / 20px)
  - [src/components/react/AboutCard.tsx](src/components/react/AboutCard.tsx#L41) - Line 41
- **Case Study Cards**: `text-2xl` (1.5rem / 24px)
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L150) - Line 150

**Body Text**
- **Size**: `text-base` (1rem / 16px) or `text-lg` (1.125rem / 18px)
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L11) - Line 11 - `text-lg md:text-xl`
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L85) - Line 85 - `text-base`
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L10) - Line 10 - `text-lg`
  - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L38) - Line 38 - `text-xl`

**Button Text**
- **Size**: `text-lg` (1.125rem / 18px) for large buttons, `text-sm` (0.875rem / 14px) for smaller buttons
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L18) - Line 18 - `text-lg`
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L165) - Line 165 - No explicit size (default)
  - [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L33) - Line 33 - `text-sm`

**Navigation Links**
- **Size**: `text-sm` (0.875rem / 14px)
- **File**: [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L9)
- **Lines**: [9]

**Form Labels**
- **Size**: `text-sm` (0.875rem / 14px)
- **File**: [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L85)
- **Lines**: [85]

**Form Input Text**
- **Size**: Default `text-base` (1rem / 16px) - no explicit class
- **File**: [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L93)
- **Lines**: [93]

**Card Descriptions**
- **Size**: `text-base` (1rem / 16px) or `text-sm` (0.875rem / 14px)
- **Locations**:
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L85) - Line 85 - `text-base`
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L90) - Line 90 - `text-sm` for features list
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L163) - Line 163 - No explicit size

**Stat Numbers**
- **Desktop Size**: `text-2xl md:text-3xl` (1.5rem/1.875rem / 24px/30px) or larger
- **Mobile Size**: `text-2xl` (1.5rem / 24px)
- **Locations**:
  - [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L22) - Line 22 - `text-2xl md:text-3xl`
  - [src/components/sections/About.astro](src/components/sections/About.astro#L85) - Line 85 - `text-3xl`
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L157) - Line 157 - `text-3xl`
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L76) - Line 76 - `text-6xl`

**Stat Labels**
- **Size**: `text-xs md:text-sm` (0.75rem / 12px or 0.875rem / 14px)
- **Locations**:
  - [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L23) - Line 23 - `text-xs md:text-sm`
  - [src/components/sections/About.astro](src/components/sections/About.astro#L86) - Line 86 - `text-sm`
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L158) - Line 158 - `text-sm`

**Section Eyebrows**
- **Size**: `text-sm` (0.875rem / 14px)
- **Locations**:
  - [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L19) - Line 19 - `text-sm`
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L8) - Line 8 - `text-sm`
  - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L31) - Line 31 - `text-sm`

**Tags**
- **Size**: `text-xs` (0.75rem / 12px)
- **Locations**:
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L132) - Line 132 - `text-xs`
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L50) - Line 50 - `text-sm`

**Footer Text**
- **Size**: `text-base` (1rem / 16px) for main text
- **File**: [src/components/Footer.astro](src/components/Footer.astro#L37)
- **Lines**: [37] - No explicit size class

**Copyright Text**
- **Size**: `text-sm` (0.875rem / 14px)
- **File**: [src/components/Footer.astro](src/components/Footer.astro#L85)
- **Lines**: [85]

---

## Additional Implementation Details

### Line Heights

**Global Line Height**
- **File**: [tailwind.config.ts](tailwind.config.ts)
- **Notes**: Using Tailwind default line heights (varies by text size)

**Specific Line Height Overrides**:
- **Headlines**: `leading-tight` - Used in:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L8) - Line 8
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L68) - Line 68
  - [src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L68) - Line 68

- **Body Text**: `leading-relaxed` - Used in:
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L85) - Line 85
  - [src/components/react/AboutCard.tsx](src/components/react/AboutCard.tsx#L56) - Line 56
  - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L38) - Line 38

- **Prose Content**: Defined in prose plugin - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L126) - Line 126

### Letter Spacing

**Tracking Classes Used**:
- **Eyebrows/Section Labels**: `tracking-[0.3em]` (very wide spacing)
  - **Locations**:
    - [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L19) - Line 19
    - [src/components/sections/About.astro](src/components/sections/About.astro#L40) - Line 40
    - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L8) - Line 8
    - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L31) - Line 31

- **Stat Labels**: `tracking-wide` (0.025em)
  - **Locations**:
    - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L87) - Line 87

### Text Alignment

**Center-Aligned Text**:
- **Locations**:
  - [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L7) - Line 7 - Hero section: `text-center`
  - [src/components/sections/ClientLogos.astro](src/components/sections/ClientLogos.astro#L19) - Line 19 - Section headline
  - [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L7) - Line 7 - Contact section
  - [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L18) - Line 18 - Stat cards
  - [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro#L30) - Line 30 - Page hero
  - [src/pages/case-studies/[slug].astro](src/pages/case-studies/[slug].astro#L81) - Line 81 - CTA section

**Left-Aligned Text** (default for most body text):
- **Locations**:
  - [src/components/react/ContactForm.tsx](src/components/react/ContactForm.tsx#L85) - Line 85 - Form labels: `text-left`
  - Most card descriptions and body text (default, no explicit class)

---

## Icons Implementation

### Icon System

**Library Used**: Astro Icon + Lucide React

**Astro Icon Installation**:
- **File**: package.json
- **Package**: astro-icon

**Lucide React Installation**:
- **File**: package.json
- **Package**: lucide-react

**Icon Import Patterns**

**Astro Components**:
- **File**: [src/components/sections/Hero.astro](src/components/sections/Hero.astro#L2)
- **Lines**: [2]
- **Import Syntax**: `import { Icon } from 'astro-icon/components'`

**React Components**:
- **File**: [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L3)
- **Lines**: [3]
- **Import Syntax**: `import { Settings, Brain, Database } from 'lucide-react'`

### Icon Stroke Weight

**Global Stroke Width**: `strokeWidth={1}` (1px)
- **Applied To**: All Lucide icons in card components
- **Locations**:
  - [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L60) - Line 60
  - [src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L59) - Line 59
  - [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L110) - Line 110

### Icons by Component Type

**Service Card Icons**
- **Icon Mapping**: [src/components/react/ServiceCard.tsx](src/components/react/ServiceCard.tsx#L14-L18)
- **Icon Names Used**:
  - lucide:settings (Settings) - Process Automation
  - lucide:brain (Brain) - AI-Powered Decision Support
  - lucide:database (Database) - Multi-Platform Data Integration

**Industry Card Icons**
- **Icon Mapping**: [src/components/react/IndustryCard.tsx](src/components/react/IndustryCard.tsx#L12-L19)
- **Icon Names Used**:
  - lucide:scale (Scale) - Legal Tech
  - lucide:heart (Heart) - Healthcare
  - lucide:newspaper (Newspaper) - Publishing & Media
  - lucide:shopping-cart (ShoppingCart) - E-commerce
  - lucide:graduation-cap (GraduationCap) - Education Technology
  - lucide:factory (Factory) - Manufacturing

**Stats Section Icons**
- **Locations**: [src/components/sections/Stats.astro](src/components/sections/Stats.astro#L5-L8)
- **Icon Names Used**:
  - lucide:briefcase - Projects Delivered
  - lucide:calendar - Industry Experience
  - lucide:clock - Average Time Reduction
  - lucide:check-circle - AI Accuracy

**About Section Stats Icons**
- **Locations**: [src/components/sections/About.astro](src/components/sections/About.astro#L7-L29)
- **Icon Names Used**:
  - lucide:users - Capacity Increase
  - lucide:clock - Time Reduction
  - lucide:trending-up - Saved Per Week
  - lucide:arrow-up-right - MAU Growth

**Contact Card Icons**
- **Locations**:
  - Email: [src/components/react/EmailContactCard.tsx](src/components/react/EmailContactCard.tsx#L20) - Mail (Lucide import)
  - Video: [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L27) - lucide:video
  - Phone: [src/components/sections/Contact.astro](src/components/sections/Contact.astro#L50) - lucide:phone

**Case Study Icons** (Dynamic based on frontmatter)
- **Icon Mapping**: [src/components/CaseStudiesGrid.jsx](src/components/CaseStudiesGrid.jsx#L5-L14)
- **Available Icons**:
  - lucide:factory (Factory)
  - lucide:heart (Heart)
  - lucide:monitor (Monitor)
  - lucide:newspaper (Newspaper)
  - lucide:package (Package)
  - lucide:brain (Brain)
  - lucide:database (Database)
  - lucide:settings (Settings)

**Navigation Icons**
- **Mobile Menu Toggle**: [src/components/react/Navigation.tsx](src/components/react/Navigation.tsx#L82)
  - Menu icon (hamburger)
  - X icon (close)

**Footer Icons**
- **Social Media Icons**: [src/components/Footer.astro](src/components/Footer.astro#L48-L57)
  - lucide:linkedin - LinkedIn
  - lucide:twitter - Twitter/X
- **External Link Icon**: [src/components/Footer.astro](src/components/Footer.astro#L92)
  - lucide:external-link

---

## Responsive Breakpoints

**Tailwind Breakpoints** (using defaults):
- **File**: [tailwind.config.ts](tailwind.config.ts#L11-L13)
- **Lines**: [11-13]
- **Custom Breakpoint**: `2xl: 1400px` (overriding default 1536px)
- **Default Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1400px (custom)

**Common Responsive Patterns**:
- **Mobile-First Sizing**:
  - `text-4xl md:text-6xl lg:text-7xl` - Hero headline
  - `text-2xl md:text-3xl` - Stat numbers
  - `text-xs md:text-sm` - Stat labels
  - `text-lg md:text-xl` - Subheadlines
- **Grid Layouts**:
  - `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Industry cards, case study cards
  - `grid-cols-2 md:grid-cols-4` - Stats grid
  - `grid-cols-1 md:grid-cols-3` - Quick facts grid (case study detail)
- **Padding/Spacing**:
  - `py-4 md:py-6` - Card padding
  - `px-4 sm:px-6 lg:px-8` - Container padding
  - `pt-16 md:pt-20 lg:pt-24` - Hero padding

---

## Notes for Manual Editing

### Finding Copy Quickly
1. **Use VS Code search** (Cmd/Ctrl + Shift + F) to search for exact text strings
2. **Check component files first** - most copy is in [src/components/](src/components/) and [src/pages/](src/pages/)
3. **Case study content** is in markdown files: [src/content/case-studies/*.md](src/content/case-studies/)
4. **Frontmatter vs. Content** - case study metadata is in frontmatter (top of .md file, lines 1-16), full text is in markdown body (line 17+)
5. **Service card copy on homepage** - data is inline in [Hero.astro](src/components/sections/Hero.astro#L32-L70) lines 32-70
6. **Navigation links** - defined in [site.ts config](src/config/site.ts#L15-L22) lines 15-22

### Finding Colors Quickly
1. **Search for Tailwind classes** - e.g., search for `bg-gray-900` or `text-gray-900` in VS Code
2. **Check Tailwind config** for custom color definitions: [tailwind.config.ts](tailwind.config.ts#L19-L86) lines 19-86
3. **Global CSS variables** in [global.css](src/styles/global.css#L8-L47) lines 8-47 for HSL design tokens
4. **Most common colors**: gray-900 (primary buttons, dark text), gray-50 (section backgrounds), gray-600 (body text)

### Finding Fonts Quickly
1. **Font loading** is in [global.css](src/styles/global.css#L1) line 1 (Google Fonts)
2. **Font family declaration** is in [tailwind.config.ts](tailwind.config.ts#L16-L18) lines 16-18
3. **Weight classes** - search for `font-light`, `font-medium`, `font-semibold` in component files
4. **Size classes** - search for `text-` followed by size (e.g., `text-4xl`, `text-lg`, `text-base`)
5. **Weights loaded**: 300 (light), 400 (normal), 500 (medium), 600 (semibold) - line 1 of global.css

### Common Gotchas
- **Case study titles**: Edit in markdown frontmatter (line 2 of each .md file), not in template files
- **Rotating headline words**: Edit array in [RotatingHeadline.tsx](src/components/react/RotatingHeadline.tsx#L9) line 9
- **Navigation links**: Edit [site.ts config](src/config/site.ts#L15-L22), NOT the Navigation component directly
- **Service card copy on homepage**: Two locations - Hero section has inline data (lines 32-70), Services section has separate data array (not currently used on homepage)
- **Email address**: Defined in [site.ts](src/config/site.ts#L14) line 14, used in Footer and EmailContactCard
- **After editing Tailwind config**: Stop and restart dev server (`npm run dev`)
- **Markdown content styling**: Requires @tailwindcss/typography plugin (installed - see [tailwind.config.ts](tailwind.config.ts#L128) line 128)

### Component Dependencies
- **ServiceCard, IndustryCard, AboutCard**: Use intersection observer hook for mobile auto-expand behavior
- **CaseStudiesGrid**: Client-side filtering based on URL query params (industry, service)
- **ContactForm**: Requires react-hook-form, zod, and sonner packages for validation and toasts
- **Navigation**: Sticky header with scroll-based styling (backdrop blur, shadow on scroll)
- **All React components**: Loaded as Astro islands with hydration directives (client:load, client:idle, client:visible)

---

**End of Implementation Reference**

**To update this file**: Re-run the reference generation prompt in Claude Code with today's date
**Questions?**: Reference LOCK files for design constraints, this file for implementation locations
