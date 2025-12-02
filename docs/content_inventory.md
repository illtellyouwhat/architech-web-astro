# Content Inventory - Automation Architech Website

Last Updated: 2025-12-01

---

## Page Structure Overview

The site has the following routes:
- **Homepage** (`/`) - Single-page with 5 sections
- **Service Detail Pages** (3 total):
  - `/services/llm-applications`
  - `/services/data-pipelines`
  - `/services/system-workflows`
- **Blog Index** (`/blog/`)
- **Blog Post** (`/blog/[slug]`)
- **404 Page** (`/404`)

---

## Homepage (`/`)

### Hero Section

**Eyebrow Text:**
"Automation Architech"

**Main Headline:**
"AI That Works With You"

**Subheadline:**
"We build intelligent LLM applications, deploy resilient data pipelines, and craft system workflows that scale with your ambitions."

**CTAs:**
- Primary: "Start Your Project" → links to `/#contact` (dark button with arrow icon)
- Secondary: "View Services" → links to `/#services` (outlined button)

**Visual:**
No hero image. Minimalist white background with center-aligned text.

**Three Quick-Reference Cards (Below CTAs):**
1. **LLM Applications**
   - Icon: Code icon
   - Copy: "Custom copilots, document analysis, and RAG assistants."

2. **Data Pipelines**
   - Icon: Database icon
   - Copy: "High-fidelity scraping, ETL/ELT, and validation layers."

3. **System Workflows**
   - Icon: Workflow icon
   - Copy: "Zapier/n8n orchestration and event-driven middleware."

**Interaction Pattern:**
- Cards have hover effect (background changes to gray-50)
- Text reveals on scroll (mobile) or hover (desktop) using RevealOnScroll component

---

### Services Section

**Eyebrow Text:**
"Services"

**Section Headline:**
"Our Expertise"

**Section Subheadline:**
"We pair LLM strategy with production-ready engineering so marketing sites, blogs, and internal tools all share one design system and deployment pipeline."

**Service Cards (3 cards in grid):**

#### Card 1: LLM Applications
- **Icon:** 🤖 (emoji)
- **Title:** "LLM Applications"
- **Description:** "Custom AI copilots, document intelligence, and retrieval-augmented systems designed for your teams."
- **Expandable Features:**
  - ChatGPT-style copilots branded for your org
  - Document analysis + summarization pipelines
  - Retrieval Augmented Generation (RAG) stacks
  - Fine-tuned assistants for support workflows
- **CTA:** "Learn more" → links to `/services/llm-applications`

#### Card 2: Data Pipelines & Scrapers
- **Icon:** ⚙️ (emoji)
- **Title:** "Data Pipelines & Scrapers"
- **Description:** "Collect, normalize, and distribute trustworthy data with resilient scraping + ETL infrastructure."
- **Expandable Features:**
  - High-volume scraping frameworks
  - Streaming + batch ETL orchestration
  - Automated validation & alerting
  - API integrations and monitoring
- **CTA:** "Learn more" → links to `/services/data-pipelines`

#### Card 3: System Workflows
- **Icon:** 🔄 (emoji)
- **Title:** "System Workflows"
- **Description:** "Connect platforms using event-driven middleware, Zapier/n8n, and custom webhook services."
- **Expandable Features:**
  - Zapier / n8n automation architecture
  - Event-driven middleware & queues
  - Cross-platform data synchronization
  - Custom webhook development
- **CTA:** "Learn more" → links to `/services/system-workflows`

**Interaction Pattern:**
- Desktop: Cards expand on hover to reveal features list and "Learn more" link
- Mobile: Cards auto-expand when scrolled into view
- Expansion animation: smooth height transition with staggered fade-in for each feature item
- Hover effect: card lifts up slightly with shadow increase

---

### Industries Section

**Section Headline:**
"Industries We Serve"

**Section Subheadline:**
"Our automation expertise spans across diverse industries, delivering tailored solutions that drive efficiency and innovation."

**Industry Cards (6 cards in 3-column grid):**

#### 1. Legal Tech
- **Icon:** ⚖️
- **Title:** "Legal Tech"
- **Description:** "Automating legal document processing, contract analysis, and compliance workflows to streamline legal operations."

#### 2. Admin Automation
- **Icon:** 🏢
- **Title:** "Admin Automation"
- **Description:** "[Placeholder: Add description for admin automation solutions]"

#### 3. Health + Medicine
- **Icon:** ❤️
- **Title:** "Health + Medicine"
- **Description:** "[Placeholder: Add description for healthcare automation solutions]"

#### 4. Ecommerce
- **Icon:** 🛒
- **Title:** "Ecommerce"
- **Description:** "[Placeholder: Add description for ecommerce automation solutions]"

#### 5. Education Technology
- **Icon:** 🎓
- **Title:** "Education Technology"
- **Description:** "[Placeholder: Add description for education technology solutions]"

#### 6. Manufacturing
- **Icon:** 📊
- **Title:** "Manufacturing"
- **Description:** "[Placeholder: Add description for manufacturing automation solutions]"

**Interaction Pattern:**
- Desktop: Descriptions fade in on hover (opacity: 0 → 100)
- Mobile: Descriptions always visible
- Cards have border color change and shadow lift on hover

**Content Status:**
- Only Legal Tech has finalized description
- 5 cards have placeholder descriptions

---

### About Section

**Eyebrow Text:**
"About"

**Section Headline:**
"Why Automation Architech"

**Section Subheadline:**
"We are automation specialists who sit at the intersection of AI engineering, content operations, and platform reliability. The new Astro stack means the marketing site, blog, and product updates stay in lockstep."

**Three Differentiator Cards:**

#### 1. Tailored Solutions
"Every engagement starts from your processes. We design systems that map to how your teams work."

#### 2. Proven Results
"We ship measurable efficiency gains through automation, validation, and observability."

#### 3. Expert Team
"Automation engineers, content strategists, and platform specialists collaborating from one repo."

**Four Stats Cards (2x2 grid):**
1. **50+** - Projects Delivered (icon: users)
2. **5+** - Years Experience (icon: award)
3. **100%** - Client Satisfaction (icon: target)
4. **300%** - Avg. ROI Increase (icon: trending-up)

**Interaction Pattern:**
- Differentiator cards: Text reveals on scroll using RevealOnScroll component
- Stats cards: Numbers always visible, labels reveal on scroll
- All cards have fade-in animations with staggered delays
- Hover effects: background color change and shadow enhancement

**Visual:**
Gray background (bg-gray-50) with white cards. Two-column layout on desktop.

---

### Contact Section

**Eyebrow Text:**
"Contact"

**Section Headline:**
"Ready to Automate?"

**Section Subheadline:**
"Let's discuss how we can streamline your business with intelligent automation solutions."

**Contact Form Fields:**
- Name (required)
- Email (required)
- Company (required)
- Message (required, textarea with 5 rows)
- Submit button: "Send Message" (changes to "Sending..." when submitting)

**Form Integration:**
- Netlify Forms with honeypot field
- Client-side validation using Zod schema
- Toast notifications for success/error feedback
- Success message: "Message received! We'll be in touch soon."
- Error fallback: "Please email us directly at hello@automationarchitech.com"

**Two Info Cards (Below Form):**

#### Email Card
- Icon: Mail icon in gray circle
- Label: "Email"
- Value: "hello@automationarchitech.com" (clickable mailto link)
- Subtext: "Expect a thoughtful reply with next steps inside 24 hours."

#### Location Card
- Icon: Map pin icon in gray circle
- Label: "Location"
- Value: "Global Remote Team"
- Subtext: "Distributed across time zones for faster iteration and follow-the-sun launches."

**Visual:**
White background, centered content, max-width container

---

## Service Detail Pages

All service pages use the same template (`ServiceTemplate.astro`) with different content. Each page includes:

### Page Structure (Common to All)
- Navigation header (sticky)
- Hero section with title, subtitle, icon, and summary
- Featured image
- Two-column layout: Capabilities list + Benefits cards
- Footer
- CTA back to contact section

---

### LLM Applications (`/services/llm-applications`)

**Title:** "LLM Applications"

**Subtitle:** "Custom copilots and assistants rooted in your data."

**Icon:** Brain icon (lucide)

**Summary:**
"From concept to launch, we pair UX, prompt engineering, and infrastructure so your AI experiences feel native to the rest of the site."

**Featured Image:**
Unsplash stock photo of two people collaborating

**Capabilities:**
- Chat and copilot interfaces deployed inside your stack
- Retrieval Augmented Generation (RAG) architecture
- Fine-tuning + model selection guidance
- Guardrails, evaluations, and analytics instrumentation
- Content + editorial workflow automation

**Benefits (4 cards):**

1. **Context-Aware Experiences**
   "Ground models in your knowledge bases with secure embeddings and RAG pipelines."

2. **Faster Decision Cycles**
   "Give teams copilots that summarize, draft, and reason directly from source-of-truth docs."

3. **Governed Launches**
   "We bake in evaluation harnesses and analytics before the first user touches the UI."

4. **One Design Language**
   "Astro layouts and shadcn components keep AI surfaces visually consistent with marketing."

---

### Data Pipelines & Scrapers (`/services/data-pipelines`)

**Title:** "Data Pipelines & Scrapers"

**Subtitle:** "Robust, scalable data collection and transformation."

**Icon:** Database icon (lucide)

**Summary:**
"We design pipelines that start with compliant collection, layer on cleansing and validation, and end with analytics-ready datasets."

**Featured Image:**
Unsplash stock photo of engineer reviewing a streaming data dashboard

**Capabilities:**
- Real-time and batch processing frameworks
- API integration with monitoring dashboards
- Automated validation / reconciliation tooling
- Scalable scraping with residential + rotating proxies
- Ingestion to warehouses, data lakes, and vector DBs

**Benefits (4 cards):**

1. **Real-time Processing**
   "Process and analyze data as it arrives for instant insights and action."

2. **Scalable Architecture**
   "Handle massive data volumes with distributed compute and storage planning."

3. **Quality Assurance**
   "Built-in validation, dedupe, and alerting keeps downstream teams confident."

4. **Automated Workflows**
   "Set up once and let our systems keep the data current across platforms."

---

### System Workflows (`/services/system-workflows`)

**Title:** "System Workflows"

**Subtitle:** "Connect every platform with thoughtful automation."

**Icon:** Workflow icon (lucide)

**Summary:**
"From simple approvals to bespoke middleware, we create orchestration layers that keep data moving and humans in the loop."

**Featured Image:**
Unsplash stock photo of workflow diagram on collaborative whiteboard

**Capabilities:**
- API-first integration design and development
- Zapier, Make, and n8n orchestration
- Event-driven middleware + queue-based patterns
- Cross-platform data synchronization
- Observability + runbook automation

**Benefits (4 cards):**

1. **Connected Platforms**
   "Break down silos between marketing, product, and support tooling with resilient bridges."

2. **Operational Visibility**
   "Monitoring, retries, and logging built in so teams know when automation needs attention."

3. **Faster Launches**
   "Reusable reactors and workflows keep future automations on-brand and maintainable."

4. **Scale with Confidence**
   "Design reviews ensure automations survive surges, migrations, and roadmap pivots."

---

## Navigation Elements

### Header Navigation (Sticky)

**Logo:**
- Image: Brand logo (lovable-uploads/22af2fd9-7390-4312-8b89-2db9122e4680.png)
- Text: "Automation Architech"

**Main Nav Links (Desktop):**
1. Home → `/#home`
2. Services → `/#services`
3. About → `/#about`
4. Blog → `/blog/`
5. Contact → `/#contact` (styled as button)

**Mobile Navigation:**
- Hamburger menu icon toggles full-width dropdown
- All nav links displayed vertically in dropdown
- Contact link styled as button in mobile view too

**Interaction:**
- Header becomes opaque with backdrop blur and shadow when scrolled down
- Starts transparent at top of page
- Smooth transitions between states

---

### Footer

**Brand Section:**
- Logo + "Automation Architech" wordmark
- Tagline: "Transforming businesses through intelligent automation, resilient data systems, and seamless workflow orchestration."
- Three icon badges (code, database, workflow)

**Quick Links Column:**
- Home → `/#home`
- Services → `/#services`
- About → `/#about`
- Contact → `/#contact`

**Services Column (Non-linked):**
- LLM Applications
- Data Pipelines
- Web Scrapers
- System Workflows
- API Integration

**Bottom Bar:**
- Copyright: "© 2025 Automation Architech. All rights reserved."
- Email link: hello@automationarchitech.com with external link icon

**Visual:**
- Gray background (bg-gray-50)
- Border top separator
- Four-column grid on desktop, single column on mobile

---

## Interactive Components Inventory

### 1. Navigation Component (`Navigation.tsx`)
**Type:** React component with state management
**Interactions:**
- Scroll detection to toggle header appearance
- Mobile menu toggle (hamburger → X icon)
- Smooth scroll to anchor links
**State:** `isOpen` (mobile menu), `isScrolled` (header styling)

### 2. ServiceCard Component (`ServiceCard.tsx`)
**Type:** React component with expand/collapse functionality
**Interactions:**
- Desktop: Hover to expand (mouseEnter/mouseLeave)
- Mobile: Auto-expand when scrolled into view (IntersectionObserver)
- Animated height transition with staggered feature reveals
**State:** `isExpanded` (controls card expansion)
**Features:**
- 500ms duration transition
- Staggered opacity animations (50ms delay per item)
- Lift and shadow effect on hover

### 3. ContactForm Component (`ContactForm.tsx`)
**Type:** React form with validation
**Interactions:**
- Real-time validation on blur
- Submit with loading state
- Toast notifications (success/error)
- Form reset on successful submission
**Validation:** Zod schema with react-hook-form
**Integration:** Netlify Forms
**State:** `isSubmitting` (button disabled state)

### 4. RevealOnScroll Component (`RevealOnScroll.tsx`)
**Type:** Wrapper component for progressive disclosure
**Interactions:**
- Desktop: Opacity 0 → 100 on parent hover
- Mobile: Opacity 0 → 100 when scrolled into view
**Pattern:** Uses IntersectionObserver hook
**Usage:** About section differentiators, stats labels, Hero section card descriptions

### 5. Industry Cards (Static Astro)
**Type:** Static Astro markup with CSS transitions
**Interactions:**
- Desktop: Description fades in on hover
- Mobile: Descriptions always visible
- Border color and shadow changes on hover
**No State:** Pure CSS-based interactions

---

## Interaction Patterns Summary

### Hover-Based (Desktop)
- Service cards expand to show features
- Industry cards reveal descriptions
- Navigation links change color
- Cards lift with shadow enhancement
- RevealOnScroll content appears in differentiator/stats cards

### Scroll-Based (Mobile)
- Service cards auto-expand when in viewport
- RevealOnScroll content appears when in viewport
- Header transforms on scroll (transparency → solid)

### Click/Tap
- Mobile menu toggle
- Form submission
- All CTA buttons and links
- Navigation anchor scrolling

### Animation Types
- Fade-in (opacity transitions)
- Slide-in (height/transform transitions)
- Staggered delays (sequential reveals)
- Lift effects (translateY + box-shadow)

---

## Content Gaps & Placeholder Status

### Industries Section
**Status:** 5 out of 6 industry descriptions are placeholders

**Completed:**
- Legal Tech ✓

**Needs Copy:**
- Admin Automation
- Health + Medicine
- Ecommerce
- Education Technology
- Manufacturing

### Blog
**Status:** Blog infrastructure exists but content not inventoried in this document
**Components:** Blog index page, individual post template, post list items, commenting system (Utterances)

---

## Design System Notes

### Typography Scale
- Eyebrow text: `text-sm uppercase tracking-[0.3em]`
- Section headlines: `text-4xl font-light`
- Card titles: `text-xl font-medium`
- Body copy: `text-lg text-gray-600`

### Color Palette (Grays)
- Primary text: `text-gray-900`
- Secondary text: `text-gray-600`
- Tertiary text: `text-gray-500`
- Backgrounds: `bg-white`, `bg-gray-50`
- Borders: `border-gray-100`, `border-gray-200`
- Accents: `bg-gray-900` (buttons), `bg-blue-600` (form submit)

### Spacing Pattern
- Section padding: `py-20`
- Card padding: `p-6` to `p-8`
- Grid gaps: `gap-6` to `gap-8`

### Animation Durations
- Fast: 200ms (links, simple hovers)
- Medium: 300ms (opacity, color changes)
- Slow: 500ms (height expansions, complex transitions)

---

## Technical Implementation Notes

### Component Framework
- **Astro** for static sections (Hero, Industries, About)
- **React** for interactive components (Navigation, ServiceCard, ContactForm, RevealOnScroll)
- **Hydration strategy:** `client:load`, `client:idle`, `client:visible` used strategically

### Icon System
- **Lucide icons** via `astro-icon/components`
- **Emoji icons** used in service/industry cards for personality

### Form Technology
- **React Hook Form** for form state
- **Zod** for validation schemas
- **Sonner** for toast notifications
- **Netlify Forms** for backend processing

### Animation Tools
- CSS transitions for most effects
- IntersectionObserver API for scroll-based reveals
- Custom hook: `useIntersectionObserver` for reusable scroll detection

---

## Site Configuration (`siteConfig`)

**Title:** "Automation Architech"

**Description:**
"Automation Architech unifies AI application delivery, resilient data pipelines, and workflow automation into a single Astro experience."

**URL:** https://automationarchitech.com

**Email:** hello@automationarchitech.com

---

## Recommendations for Content Strategy

1. **Priority: Complete Industry Descriptions**
   - 5 placeholder descriptions need writing
   - Follow Legal Tech format for consistency
   - Each should be ~20-30 words

2. **Service Pages**
   - All three service pages have complete, production-ready content
   - Consider adding case studies or testimonials

3. **Homepage Quick-Reference Cards**
   - Currently static with basic icon + short description
   - Could enhance with links or hover states

4. **Blog Content**
   - Infrastructure ready, awaiting content population


5. **Footer Service Links**
   - Currently non-clickable list items
   - Consider linking to service detail pages

6. **Stats Verification**
   - Validate "50+ Projects", "5+ Years", "100% Satisfaction", "300% ROI"
   - Update as needed for accuracy

---

*End of Content Inventory*