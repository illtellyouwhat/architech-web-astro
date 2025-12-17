Purpose: Create a comprehensive table of contents showing where ALL copy, colors, and fonts are implemented in the codebase
Audience: Human developers manually editing code in VS Code
When to Use: After major implementation phases or when reference is stale (>2 sessions old)
Output Location: Save as REFERENCE-implementation-[TODAY'S-DATE].md in project root

Instructions for Claude Code
Generate a comprehensive reference guide showing the exact file locations and line numbers where copy, colors, and fonts are implemented throughout the codebase. Use today's actual date in the filename and header.
This is NOT a reference to lock files – this shows where design decisions are actually rendered in .astro, .jsx, and .css files.

Critical Requirements

Use today's actual date in the filename: REFERENCE-implementation-2025-12-16.md (example format)
Look up the current date - do not assume or use a stale date
Include git commit hash - Run git log -1 --format="%H" and include full hash in header
Provide exact line numbers - Use [start-end] format (e.g., [42-58]) for multi-line sections
Scan ALL implementation files - .astro, .jsx, .tsx, .css, .js files in /src/
Ignore lock files - Do NOT reference LOCK-*.md files, only actual code
Save in project root at the same level as lock files


Template Format
markdown# Implementation Reference - Automation Architech

**Generated**: [TODAY'S DATE - use actual current date, format: December 16, 2025]  
**Git Commit**: [Current commit hash - full hash from git log]  
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
- **File**: `/src/components/Hero.astro` (or actual path)
- **Lines**: [start-end]
- **Current Text**: "Your [rotating] needs data"
- **Rotating Words Array Location**: 
  - **File**: [path to file containing array]
  - **Lines**: [start-end]
  - **Array Values**: ["LLM application", "data pipeline", "system workflow"]
- **Implementation Notes**: [e.g., "React useState hook at line X, rotation interval defined at line Y"]

**Subheadline**
- **File**: `/src/components/Hero.astro` (or actual path)
- **Lines**: [start-end]
- **Current Text**: "[Full subheadline text - extract actual text from code]"
- **Visibility Logic Location**: 
  - **File**: [if different from text location]
  - **Lines**: [start-end]
  - **Notes**: [e.g., "CSS hover state defined in [file] lines [X-Y]"]

**Primary CTA Button**
- **File**: `/src/components/Hero.astro` (or actual path)
- **Lines**: [start-end]
- **Button Text**: "[Exact text from code]"
- **Link Target**: [URL from href attribute]
- **Styling Classes**: [List Tailwind classes for reference]

**Secondary CTA Button**
- **File**: `/src/components/Hero.astro` (or actual path)
- **Lines**: [start-end]
- **Button Text**: "[Exact text from code]"
- **Link Target**: [URL from href attribute]
- **Styling Classes**: [List Tailwind classes for reference]

#### Quick Reference Cards (Services)

**Service Card Component Template**
- **File**: `/src/components/ServiceCard.astro` (or actual path)
- **Lines**: [start-end for entire component]
- **Notes**: [e.g., "This component is used 3 times on homepage with different props"]

**Card 1: [Service Name - extract from code]**
- **Data Source File**: `/src/pages/index.astro` (or wherever card data is defined)
- **Lines**: [start-end]
- **Title**: "[Exact title text]"
- **Description**: "[Full description text]"
- **Expandable Features Array**:
  - **File**: [path]
  - **Lines**: [start-end]
  - **Count**: [number] features
- **CTA Text**: "[Exact CTA text]"
- **CTA Link**: [URL]
- **Icon**: [Icon name/component - e.g., "lucide:settings"]

**Card 2: [Service Name]**
[Same structure as Card 1]

**Card 3: [Service Name]**
[Same structure as Card 1]

#### Stats Section

**Stats Component Location**
- **File**: `/src/components/Stats.astro` (or actual path)
- **Lines**: [start-end for entire component]

**Stat Card 1**
- **File**: [path where this specific stat is defined]
- **Lines**: [start-end]
- **Number**: "[stat value]"
- **Label**: "[label text]"
- **Link Target**: [URL if clickable, or "Not linked" if static]
- **Link Logic**: [If link exists, show file/lines where href is defined]

**Stat Card 2**
[Same structure as Card 1]

**Stat Card 3**
[Same structure as Card 1]

**Stat Card 4**
[Same structure as Card 1]

#### Client Logos Section

**Section Headline**
- **File**: `/src/components/ClientLogos.astro` (or actual path)
- **Lines**: [start-end]
- **Text**: "[Exact headline text]"

**Logo Array/List**
- **File**: [path where logos are defined]
- **Lines**: [start-end]
- **Format**: [e.g., "Array of image paths" or "Array of objects with src/alt"]
- **Count**: [number] logos
- **Image Directory**: `/public/images/clients/` (or actual path)
- **Individual Logos**:
  1. [logo-1-filename.ext] - Line [X]
  2. [logo-2-filename.ext] - Line [X]
  [Continue for all logos]

#### Industries Section

**Section Container**
- **File**: `/src/components/Industries.astro` (or actual path)
- **Lines**: [start-end for entire section]

**Section Headline**
- **File**: [same or different file]
- **Lines**: [start-end]
- **Text**: "[Exact headline text]"

**Section Subheadline**
- **File**: [same or different file]
- **Lines**: [start-end]
- **Text**: "[Full subheadline text]"

**Industry Cards Data Source**
- **File**: [path where card data is defined - might be in same component or separate data file]
- **Lines**: [start-end]
- **Format**: [e.g., "Array of objects", "Individual variables", etc.]

**Industry Card 1: [Industry Name from code]**
- **File**: [path]
- **Lines**: [start-end]
- **Title**: "[Exact title]"
- **Description**: "[Full description text]"
- **Icon**: [Icon identifier]
- **CTA Link**: [URL]
- **CTA Text**: [If customized per card]

**Industry Card 2: [Industry Name]**
[Same structure as Card 1]

**Industry Card 3: [Industry Name]**
[Same structure as Card 1]

**Industry Card 4: [Industry Name]**
[Same structure as Card 1]

**Industry Card 5: [Industry Name]**
[Same structure as Card 1]

**Industry Card 6: [Industry Name]**
[Same structure as Card 1]

#### About Section

**Section Container**
- **File**: `/src/components/About.astro` (or actual path)
- **Lines**: [start-end for entire section]

**Section Headline**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[Exact headline text]"

**Section Subheadline**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[Full subheadline text]"

**Differentiator Cards**
- **Data Source File**: [path]
- **Lines**: [start-end]

**Differentiator Card 1: [Card Title]**
- **Lines**: [start-end]
- **Title**: "[Exact title]"
- **Description**: "[Full description]"
- **Icon**: [Icon identifier]

**Differentiator Card 2: [Card Title]**
[Same structure as Card 1]

**Differentiator Card 3: [Card Title]**
[Same structure as Card 1]

**About Stats Cards** (if different from top stats)
- **File**: [path]
- **Lines**: [start-end]
- **Notes**: [e.g., "These are clickable and link to specific case studies"]

**Stat Card 1**
- **Lines**: [start-end]
- **Number**: "[value]"
- **Label**: "[label]"
- **Context**: "[context text if present]"
- **Link**: [URL]

[Repeat for all About stat cards]

**Founder Photo Placeholder** (if present)
- **File**: [path]
- **Lines**: [start-end]
- **Image Source**: [path or "placeholder div"]
- **Alt Text**: [if image exists]

#### Contact Section

**Section Container**
- **File**: `/src/components/Contact.astro` (or actual path)
- **Lines**: [start-end for entire section]

**Section Headline**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[Exact headline]"

**Section Subheadline**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[Exact subheadline]"

**Contact Form Component**
- **File**: `/src/components/ContactForm.jsx` (or actual path)
- **Lines**: [start-end for entire component]
- **Notes**: [e.g., "React island component"]

**Form Field Labels**
- **Name Field Label**:
  - **Lines**: [start-end]
  - **Text**: "[label text]"
  - **Placeholder**: "[placeholder text if different]"
- **Email Field Label**:
  - **Lines**: [start-end]
  - **Text**: "[label text]"
  - **Placeholder**: "[placeholder text if different]"
- **Company Field Label**:
  - **Lines**: [start-end]
  - **Text**: "[label text]"
  - **Placeholder**: "[placeholder text if different]"
- **Message Field Label**:
  - **Lines**: [start-end]
  - **Text**: "[label text]"
  - **Placeholder**: "[full placeholder text]"

**Submit Button**
- **Lines**: [start-end]
- **Default Text**: "[button text]"
- **Loading Text**: "[loading state text]"
- **Loading State Logic**: Lines [X-Y]

**Success Message**
- **Lines**: [start-end]
- **Text**: "[success message text]"

**Error Message**
- **Lines**: [start-end]
- **Text**: "[error message text]"

**Contact Method Cards**

**Email Card**
- **File**: [path - might be separate component]
- **Lines**: [start-end]
- **Button Text**: "[text]"
- **Email Address**: [email]
- **Subtext**: "[subtext if present]"
- **Copy-to-Clipboard Logic**: [If implemented, show file/lines]

**Video Call Card**
- **File**: [path]
- **Lines**: [start-end]
- **Button Text**: "[text]"
- **Link Target**: [URL]
- **Subtext**: "[subtext if present]"

**Phone Call Card**
- **File**: [path]
- **Lines**: [start-end]
- **Button Text**: "[text]"
- **Link Target**: [URL]
- **Subtext**: "[subtext if present]"

---

### Case Studies Copy

#### Case Studies Index Page (`/case-studies`)

**Page Component**
- **File**: `/src/pages/case-studies/index.astro` (or actual path)
- **Lines**: [start-end for entire page]

**Page Headline**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[Exact headline]"

**Page Subheadline**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[Full subheadline text]"
- **Hover Behavior** (if applicable):
  - **File**: [path where hover logic is defined]
  - **Lines**: [start-end]

**Primary CTA Button**
- **File**: [path]
- **Lines**: [start-end]
- **Button Text**: "[text]"
- **Link Target**: [URL]

**Case Study Cards Component**
- **File**: `/src/components/CaseStudiesGrid.jsx` (or actual path)
- **Lines**: [start-end for entire component]
- **Data Source**: [e.g., "Astro Content Collections - /src/content/case-studies/*.md"]
- **Notes**: [e.g., "Client-side filtering via React island"]

**Individual Case Study Card Structure** (template used for all cards)
- **File**: [path to card component if separate]
- **Lines**: [start-end]
- **Elements Included**: [e.g., "Title, Industry tags, Solution type, Metric, Summary, CTA link"]

**Bottom CTA Section**
- **File**: [path]
- **Lines**: [start-end]
- **Headline**: "[text]"
- **Subheadline**: "[text]"
- **Primary CTA Text**: "[text]"
- **Primary CTA Link**: [URL]
- **Secondary CTA Text**: "[text]" (if present)
- **Secondary CTA Link**: [URL]

#### Individual Case Study Pages

**Page Template**
- **File**: `/src/pages/case-studies/[slug].astro` (or actual path)
- **Lines**: [start-end for entire template]
- **Data Source**: [e.g., "Markdown frontmatter + content from /src/content/case-studies/"]

**Hero Section Elements** (rendered from frontmatter)
- **Title Location in Template**:
  - **File**: [path]
  - **Lines**: [start-end]
  - **Notes**: [e.g., "Renders {entry.data.title} from frontmatter"]
- **Industry Tags Location**:
  - **File**: [path]
  - **Lines**: [start-end]
  - **Notes**: [e.g., "Maps over {entry.data.industry} array"]
- **Solution Type Location**:
  - **File**: [path]
  - **Lines**: [start-end]
  - **Notes**: [e.g., "Renders {entry.data.solutionType}"]
- **Metric Banner Location**:
  - **File**: [path]
  - **Lines**: [start-end]
  - **Notes**: [e.g., "Renders {entry.data.metric} and {entry.data.metricLabel}"]

**Markdown Content Rendering**
- **File**: [path]
- **Lines**: [start-end]
- **Notes**: [e.g., "Uses <Content /> component with prose classes", "Requires @tailwindcss/typography plugin"]

**Related Cases Section**
- **File**: [path]
- **Lines**: [start-end]
- **Notes**: [e.g., "Fetches 3 cases from {entry.data.relatedCases} frontmatter array"]

**Bottom CTAs**
- **File**: [path]
- **Lines**: [start-end]
- **Primary CTA Text**: "[text]"
- **Primary CTA Link**: [URL]
- **Secondary CTA Text**: "[text]"
- **Secondary CTA Link**: [URL]

#### Case Study Markdown Files

**Storage Location**: `/src/content/case-studies/`

**List All Markdown Files**:
1. **[case-study-1-slug].md**
   - **Frontmatter Lines**: [start-end]
   - **Content Lines**: [start-end]
   - **Key Sections**: [list h2 headings found in markdown]
2. **[case-study-2-slug].md**
   [Same structure]
3. **[case-study-3-slug].md**
   [Same structure]
[Continue for all case study files]

**Frontmatter Schema Reference**
- **File**: `/src/content/config.ts` (or wherever schema is defined)
- **Lines**: [start-end]
- **Fields Defined**: [list all frontmatter fields from schema]

---

### Navigation & Footer Copy

#### Header Navigation

**Navigation Component**
- **File**: `/src/components/Navigation.astro` or `/src/components/Header.astro`
- **Lines**: [start-end for entire component]

**Logo/Brand Text**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[brand text]"
- **Link Target**: [URL]

**Navigation Links**
- **File**: [path where nav array is defined]
- **Lines**: [start-end for entire array/list]

**Individual Nav Links**:
1. **Link 1**:
   - **Lines**: [start-end]
   - **Text**: "[link text]"
   - **Target**: [URL]
2. **Link 2**:
   - **Lines**: [start-end]
   - **Text**: "[link text]"
   - **Target**: [URL]
[Continue for all nav links]

**CTA Button** (if in header)
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[button text]"
- **Link Target**: [URL]

**Mobile Menu Toggle** (if applicable)
- **File**: [path]
- **Lines**: [start-end]
- **Implementation Notes**: [e.g., "React island with useState"]

#### Footer

**Footer Component**
- **File**: `/src/components/Footer.astro` (or actual path)
- **Lines**: [start-end for entire component]

**Logo/Brand Section**
- **Logo Location**:
  - **File**: [path]
  - **Lines**: [start-end]
- **Brand Name**:
  - **Lines**: [start-end]
  - **Text**: "[brand name]"
- **Tagline**:
  - **Lines**: [start-end]
  - **Text**: "[full tagline text]"

**Icon Badges** (if present)
- **File**: [path]
- **Lines**: [start-end]
- **Icons**: [list icon identifiers]

**Quick Links Column**
- **Column Title**:
  - **Lines**: [start-end]
  - **Text**: "[column title]"
- **Links List**:
  - **Lines**: [start-end for entire list]
  
**Individual Quick Links**:
1. **Lines**: [X] - Text: "[link text]" - Target: [URL]
2. **Lines**: [X] - Text: "[link text]" - Target: [URL]
[Continue for all quick links]

**Services Column**
- **Column Title**:
  - **Lines**: [start-end]
  - **Text**: "[column title]"
- **Items List**:
  - **Lines**: [start-end for entire list]
  - **Notes**: [e.g., "Non-clickable list items"]

**Individual Service Items**:
1. **Lines**: [X] - Text: "[service name]"
2. **Lines**: [X] - Text: "[service name]"
[Continue for all services]

**Contact Info**
- **Email Address**:
  - **Lines**: [start-end]
  - **Email**: [email address]
  - **Link Type**: [e.g., "mailto link"]
- **Other Contact Info**: [if present]

**Social Media Icons** (if present)
- **File**: [path]
- **Lines**: [start-end]
- **Icons**:
  1. **[Platform]**: Lines [X-Y] - Link: [URL or "placeholder"]
  2. **[Platform]**: Lines [X-Y] - Link: [URL or "placeholder"]

**Copyright Text**
- **File**: [path]
- **Lines**: [start-end]
- **Text**: "[copyright text]"
- **Dynamic Year Logic** (if applicable):
  - **Lines**: [start-end]
  - **Notes**: [e.g., "Uses JavaScript Date object"]

---

## Color Implementation

### Primary Colors (Gray Scale)

**Tailwind Config**
- **File**: `/tailwind.config.cjs` or `/tailwind.config.js`
- **Lines**: [start-end for color definitions]
- **Notes**: [e.g., "Extends default gray scale" or "Custom gray scale defined"]

**Most Common Color: Gray-900 (`#111827`)**

**Usage Locations**:

1. **Primary Text Color**
   - **File**: [path - might be in global CSS or tailwind config]
   - **Lines**: [start-end]
   - **Classes**: [`text-gray-900`]
   - **Applied To**: [e.g., "Body text, headings, most text elements"]

2. **Primary Button Backgrounds**
   - **Files Using**: [list all files that use gray-900 for buttons]
   - **Example Locations**:
     - `/src/components/Hero.astro` - Lines [X-Y]
     - `/src/components/ContactForm.jsx` - Lines [X-Y]
     [Continue for all instances]

3. **Icon Backgrounds** (if applicable)
   - **Files Using**: [list files]
   - **Example Locations**:
     [List file paths and line numbers]

4. **Border Colors** (if gray-900 is used)
   - **Files Using**: [list files]
   - **Example Locations**:
     [List file paths and line numbers]

**Other Gray Shades Used**:

**Gray-100 (`#F3F4F6`)**
- **Usage**: [e.g., "Light backgrounds, hover states"]
- **Locations**:
  - [file path] - Lines [X-Y] - Usage: [description]
  - [file path] - Lines [X-Y] - Usage: [description]

**Gray-200 (`#E5E7EB`)**
- **Usage**: [e.g., "Metric banners on case study cards"]
- **Locations**:
  - [file path] - Lines [X-Y] - Usage: [description]
  - [file path] - Lines [X-Y] - Usage: [description]

**Gray-300 (`#D1D5DB`)**
- **Usage**: [description]
- **Locations**:
  - [file path] - Lines [X-Y] - Usage: [description]

[Continue for all gray shades found: 400, 500, 600, 700, 800, 950]

---

### Semantic Colors

**Success Color (Green)**
- **Tailwind Class**: [e.g., `text-green-600`]
- **Hex Value**: [hex from Tailwind defaults or custom config]
- **Locations**:
  - [file path] - Lines [X-Y] - Usage: [e.g., "Form success message"]
  - [file path] - Lines [X-Y] - Usage: [description]

**Error Color (Red)**
- **Tailwind Class**: [e.g., `text-red-600`]
- **Hex Value**: [hex]
- **Locations**:
  - [file path] - Lines [X-Y] - Usage: [e.g., "Form error states"]
  - [file path] - Lines [X-Y] - Usage: [description]

**Warning Color (Yellow/Amber)** (if used)
- **Tailwind Class**: [class name]
- **Hex Value**: [hex]
- **Locations**:
  - [file path] - Lines [X-Y] - Usage: [description]

**Info Color (Blue)** (if used - note: should be rare given gray-only design system)
- **Tailwind Class**: [class name]
- **Hex Value**: [hex]
- **Locations**:
  - [file path] - Lines [X-Y] - Usage: [description]

---

### Component-Specific Colors

**Service Cards**
- **Background Color**:
  - **Class**: [class name]
  - **Files**: [list all files using this]
  - **Lines**: [ranges for each file]
- **Hover Background**:
  - **Class**: [class name]
  - **Files**: [list files]
  - **Lines**: [ranges]
- **Text Color**:
  - **Class**: [class name]
  - **Files**: [list files]
  - **Lines**: [ranges]
- **Icon Color**:
  - **Class**: [class name]
  - **Files**: [list files]
  - **Lines**: [ranges]

**Industry Cards**
- **Background Color**:
  - **Class**: [class name]
  - **Files**: [list files]
  - **Lines**: [ranges]
- **Hover State**:
  - **Class**: [class name]
  - **Files**: [list files]
  - **Lines**: [ranges]

**Case Study Cards**
- **Background Color**:
  - **Class**: [class name]
  - **Files**: [list files]
  - **Lines**: [ranges]
- **Metric Banner Background** (Dark Gray):
  - **Class**: [e.g., `bg-gray-700`]
  - **Files**: [list files]
  - **Lines**: [ranges]
- **Metric Banner Text** (White):
  - **Class**: [e.g., `text-white`]
  - **Files**: [list files]
  - **Lines**: [ranges]

**Contact Form**
- **Input Background**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **Input Border**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **Focus State Border**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **Error State Border**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]

**Navigation**
- **Background Color**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **Link Color**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **Link Hover Color**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **CTA Button Background**:
  - **Class**: [e.g., `bg-gray-900`]
  - **File**: [path]
  - **Lines**: [start-end]

**Footer**
- **Background Color**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **Text Color**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]
- **Link Color**:
  - **Class**: [class name]
  - **File**: [path]
  - **Lines**: [start-end]

---

## Typography Implementation

### Font Families

**Primary Font: Inter**

**Font Loading**
- **File**: [e.g., `/src/layouts/Layout.astro`, `<head>` section, or CSS file]
- **Lines**: [start-end]
- **Method**: [e.g., "Google Fonts import", "Local font files", "@fontsource package"]
- **Weights Loaded**: [list weights, e.g., "300, 400, 600"]

**Font Family Declaration**
- **File**: `/tailwind.config.cjs` or global CSS
- **Lines**: [start-end]
- **Value**: [e.g., `fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }`]

**Global Font Application**
- **File**: [e.g., `/src/styles/global.css` or layout file]
- **Lines**: [start-end]
- **Class/Style**: [e.g., `font-sans` applied to `<body>` or `<html>`]

---

### Font Weights

**Available Weights**: [list from Tailwind config or font source]

**Weight Usage by Element Type**:

**Headings**
- **H1 (Hero Headlines)**:
  - **Weight Class**: [e.g., `font-semibold` = 600]
  - **Locations**:
    - `/src/components/Hero.astro` - Lines [X-Y]
    - [other locations]
- **H2 (Section Headlines)**:
  - **Weight Class**: [e.g., `font-semibold` = 600]
  - **Locations**:
    - [list file paths and lines]
- **H3 (Subsection Headlines)**:
  - **Weight Class**: [e.g., `font-medium` = 500]
  - **Locations**:
    - [list file paths and lines]
- **H4, H5, H6** (if used):
  - **Weight Classes**: [classes used]
  - **Locations**: [list file paths and lines]

**Body Text**
- **Weight Class**: [e.g., `font-normal` = 400]
- **Global Application**:
  - **File**: [path]
  - **Lines**: [start-end]
- **Specific Overrides** (if any):
  - [file path] - Lines [X-Y] - Weight: [class]

**Buttons**
- **Weight Class**: [e.g., `font-medium` = 500]
- **Locations**:
  - [list all button implementations with file paths and lines]

**Navigation Links**
- **Weight Class**: [class name]
- **File**: [path]
- **Lines**: [start-end]

**Form Labels**
- **Weight Class**: [class name]
- **File**: [path]
- **Lines**: [start-end]

**Card Titles**
- **Weight Class**: [class name]
- **Locations**:
  - Service cards: [file] - Lines [X-Y]
  - Industry cards: [file] - Lines [X-Y]
  - Case study cards: [file] - Lines [X-Y]

**Stat Numbers**
- **Weight Class**: [class name]
- **Locations**:
  - [file path] - Lines [X-Y]

**Metrics/Numbers** (Case study cards)
- **Weight Class**: [class name]
- **Locations**:
  - [file path] - Lines [X-Y]

---

### Font Sizes

**Size Scale Reference**
- **File**: `/tailwind.config.cjs` (or using Tailwind defaults)
- **Lines**: [start-end if customized]
- **Notes**: [e.g., "Using Tailwind default type scale" or "Custom scale defined"]

**Size Usage by Element Type**:

**Hero Headlines**
- **Desktop Size**: [e.g., `text-6xl` = 3.75rem / 60px]
- **Mobile Size**: [e.g., `text-4xl` = 2.25rem / 36px]
- **Locations**:
  - `/src/components/Hero.astro` - Lines [X-Y]
  - [other locations if multiple hero sections]

**Section Headlines (H2)**
- **Desktop Size**: [e.g., `text-4xl`]
- **Mobile Size**: [e.g., `text-3xl`]
- **Locations**:
  - [list all section headline locations with file paths and lines]

**Subsection Headlines (H3)**
- **Desktop Size**: [e.g., `text-2xl`]
- **Mobile Size**: [e.g., `text-xl`]
- **Locations**:
  - [list all subsection locations]

**Body Text**
- **Size**: [e.g., `text-base` = 1rem / 16px or `text-lg` = 1.125rem / 18px]
- **Global Application**:
  - **File**: [path]
  - **Lines**: [start-end]
- **Specific Overrides**:
  - [file path] - Lines [X-Y] - Size: [class]

**Button Text**
- **Size**: [e.g., `text-base`]
- **Locations**:
  - [list all button text size applications]

**Navigation Links**
- **Size**: [class name]
- **File**: [path]
- **Lines**: [start-end]

**Form Labels**
- **Size**: [class name]
- **File**: [path]
- **Lines**: [start-end]

**Form Input Text**
- **Size**: [class name]
- **File**: [path]
- **Lines**: [start-end]

**Card Titles**
- **Service Cards**: [size class] - Files: [list] - Lines: [ranges]
- **Industry Cards**: [size class] - Files: [list] - Lines: [ranges]
- **Case Study Cards**: [size class] - Files: [list] - Lines: [ranges]

**Card Descriptions**
- **Service Cards**: [size class] - Files: [list] - Lines: [ranges]
- **Industry Cards**: [size class] - Files: [list] - Lines: [ranges]
- **Case Study Cards**: [size class] - Files: [list] - Lines: [ranges]

**Stat Numbers**
- **Desktop Size**: [e.g., `text-5xl`]
- **Mobile Size**: [e.g., `text-3xl`]
- **Locations**:
  - [list all stat number locations]

**Stat Labels**
- **Size**: [class name]
- **Locations**:
  - [list all stat label locations]

**Footer Text**
- **Size**: [class name]
- **File**: [path]
- **Lines**: [start-end]

**Copyright Text**
- **Size**: [class name]
- **File**: [path]
- **Lines**: [start-end]

---

## Additional Implementation Details

### Line Heights

**Global Line Height**
- **File**: [e.g., `/tailwind.config.cjs` or global CSS]
- **Lines**: [start-end]
- **Default**: [e.g., `leading-relaxed` = 1.625]

**Specific Line Height Overrides**:
- **Headlines**: [class name] - Locations: [list files/lines]
- **Body Text**: [class name] - Locations: [list files/lines]
- **Buttons**: [class name] - Locations: [list files/lines]

### Letter Spacing

**Tracking Classes Used** (if any):
- **Headlines**: [class name if customized] - Locations: [list files/lines]
- **Other Elements**: [list any letter-spacing customizations]

### Text Alignment

**Center-Aligned Text**:
- **Locations**: [list all instances of `text-center` with files and lines]
- **Notes**: [e.g., "Headlines and section intros typically centered"]

**Left-Aligned Text**:
- **Locations**: [list key instances, especially if specified in design system]
- **Notes**: [e.g., "All body copy and form labels left-aligned per design system"]

---

## Icons Implementation

### Icon System

**Library Used**: [e.g., "Lucide React", "Astro Icons", etc.]
- **Installation**:
  - **File**: `package.json`
  - **Lines**: [start-end]
  - **Package**: [package name and version]

**Icon Import Pattern**
- **Example File**: [path to file that imports icons]
- **Lines**: [start-end]
- **Import Syntax**: [show example, e.g., `import { Icon } from 'astro-icon/components'`]

### Icon Stroke Weight

**Global Stroke Width** (if customized):
- **File**: [path where stroke-width is defined]
- **Lines**: [start-end]
- **Value**: [e.g., `1px`, `1.5px`]
- **Applied To**: [e.g., "All Lucide icons site-wide"]

**Component-Specific Stroke Overrides**:
- [component name]: [file path] - Lines [X-Y] - Stroke: [value]

### Icons by Component Type

**Service Card Icons**
- **Locations**: [list files using service card icons]
- **Icon Names Used**:
  - [icon-name-1] - File: [path] - Lines: [X-Y]
  - [icon-name-2] - File: [path] - Lines: [X-Y]
  - [icon-name-3] - File: [path] - Lines: [X-Y]

**Industry Card Icons**
- **Locations**: [list files]
- **Icon Names Used**:
  - [icon-name-1] - File: [path] - Lines: [X-Y]
  - [Continue for all industry icons]

**Case Study Icons**
- **Industry Icons**: [list icon mappings]
- **Solution Type Icons**: [list icon mappings]
- **Locations**: [file paths and lines]

**Contact Card Icons**
- **Email Icon**: [icon name] - File: [path] - Lines: [X-Y]
- **Calendar/Meeting Icon**: [icon name] - File: [path] - Lines: [X-Y]
- **Phone Icon**: [icon name] - File: [path] - Lines: [X-Y]

**Navigation Icons** (if any)
- **Mobile Menu Toggle**: [icon name] - File: [path] - Lines: [X-Y]
- **Other**: [list any other nav icons]

**Footer Icons**
- **Social Media Icons**:
  - [platform]: [icon name] - File: [path] - Lines: [X-Y]
  - [platform]: [icon name] - File: [path] - Lines: [X-Y]

---

## Responsive Breakpoints

**Tailwind Breakpoints** (default or customized):
- **File**: `/tailwind.config.cjs`
- **Lines**: [start-end]
- **Breakpoints Defined**:
  - `sm`: [px value]
  - `md`: [px value]
  - `lg`: [px value]
  - `xl`: [px value]
  - `2xl`: [px value]

**Common Responsive Patterns**:
- **Mobile-First Sizing**: [list common patterns, e.g., "text-3xl md:text-4xl lg:text-6xl"]
- **Grid Layouts**: [list common patterns, e.g., "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"]
- **Padding/Spacing**: [list common patterns]

---

## Notes for Manual Editing

### Finding Copy Quickly
1. **Use VS Code search** (Cmd/Ctrl + Shift + F) to search for exact text strings
2. **Check component files first** - most copy is in `/src/components/` and `/src/pages/`
3. **Case study content** is in markdown files: `/src/content/case-studies/*.md`
4. **Frontmatter vs. Content** - case study metadata is in frontmatter (top of .md file), full text is in markdown body

### Finding Colors Quickly
1. **Search for Tailwind classes** - e.g., search for `bg-gray-900` or `text-gray-900`
2. **Check Tailwind config** for custom color definitions: `/tailwind.config.cjs`
3. **Global styles** may be in `/src/styles/global.css` or layout files

### Finding Fonts Quickly
1. **Font loading** is usually in layout files or `<head>` sections
2. **Font family declarations** are in Tailwind config
3. **Weight and size classes** are inline in component files - search for `font-` or `text-`

### Common Gotchas
- [Any known issues with editing, e.g., "If you change a case study title in markdown, make sure the slug in frontmatter matches the filename"]
- [Build/cache notes, e.g., "After editing Tailwind config, run `npm run dev` to regenerate"]
- [Component dependencies, e.g., "Service cards pull data from homepage - don't edit ServiceCard.astro directly"]

---

**End of Implementation Reference**

**To update this file**: Re-run this prompt in Claude Code with today's date
**Questions?**: Reference lock files for design constraints, this file for implementation locations
```

---

## What This Reference Shows

For every piece of copy, color, or font in the codebase:
- **Exact file path** where it's implemented
- **Exact line numbers** (or line ranges)
- **Current values** (the actual text, color class, font class)
- **Context** (what component/section it belongs to)
- **Related logic** (e.g., "hover state defined in lines X-Y")

## What This Reference Does NOT Show

- Lock file contents (those are strategic constraints, not implementation)
- Design decisions or rationale (that's in lock files)
- History or changelog information (that's in other docs)

## How to Use After Generation

1. **Claude Code runs this prompt** in VS Code
2. **Output file created**: `REFERENCE-implementation-[DATE].md` in project root
3. **User downloads file** or keeps in project for reference
4. **User searches file** when needing to manually edit copy/colors/fonts
5. **User opens VS Code** to the referenced file and line number
6. **User makes manual edit** without needing LLM assistance

## Verification Checklist

After generation, Claude Code should verify:
- [ ] Today's actual date used in filename (not stale date)
- [ ] Git commit hash included in header
- [ ] All line numbers reference actual current code (not outdated)
- [ ] File paths are correct and files exist
- [ ] All copy sections have at least one example location
- [ ] All color sections list actual usage locations
- [ ] All font sections list actual implementation files
- [ ] File saved in project root (not nested in subdirectory)

---

## Example Output Filename
```
REFERENCE-implementation-2025-12-16.md
NOT:

❌ REFERENCE-implementation.md (missing date)
❌ implementation-reference-12-16.md (wrong naming convention)
❌ REFERENCE-implementation-2025-12-01.md (stale date if today is Dec 16)


After Generation
Confirm to the user:

Reference guide generated successfully
Filename with date: REFERENCE-implementation-[date].md
Git commit: [hash]
Total locations documented: [count]
Ready to use for manual editing in VS Code
</document>


Perfect! Here's the complete prompt in a single markdown file that you can download. Everything is now in one clean artifact with all the instructions, templates, and examples.
Key sections included:

Purpose and critical requirements
Complete template format with all copy, color, and typography sections
Instructions for proper date/git commit inclusion
Verification checklist
Usage guide for after generation