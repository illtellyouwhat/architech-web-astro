# Prompt: Generate Content Inventory

**Purpose**: Create a structured snapshot of all current website content  
**When to Use**: After major implementation phases or when content inventory is stale (>2 sessions old)  
**Output Location**: Save as `INVENTORY-content-[TODAY'S-DATE].md` in project root

---

## Instructions for Claude Code

Generate a comprehensive inventory of all website content in the following format. Use today's actual date in the filename and header.

---

## Template Format

```markdown
# Content Inventory - Automation Architech

**Generated**: [TODAY'S DATE - use actual current date, format: December 5, 2024]
**Purpose**: Snapshot of all website content for Claude UI reference

---

## Homepage (/)

### Hero Section
- **Headline**: "[exact text]"
- **Subheadline**: "[exact text]"
- **Primary CTA**: "[button text]" â†’ [link destination]
- **Secondary CTA**: "[button/link text]" â†’ [link destination]
- **Quick Reference Cards**: [count]
  - Card 1: "[title]" - "[description first 50 chars...]"
  - Card 2: "[title]" - "[description first 50 chars...]"
  - Card 3: "[title]" - "[description first 50 chars...]"

### Stats Section
- **Section Headline**: "[exact text]" (if exists)
- **Stats Cards**: [count]
  - Stat 1: "[number]" - "[label]" - "[context]"
  - Stat 2: "[number]" - "[label]" - "[context]"
  - [continue for all stats]

### Client Logos Section
- **Section Headline**: "[exact text]"
- **Logos Count**: [number]
- **Status**: [Placeholders / Real logos / Mixed]

### Services Section (if separate section exists)
- **Section Headline**: "[exact text]"
- **Section Subheadline**: "[exact text]"
- **Service Cards**: [count]
  - Card 1: "[title]" - "[description first 100 chars...]" - CTA: "[text]" â†’ [link]
  - Card 2: "[title]" - "[description first 100 chars...]" - CTA: "[text]" â†’ [link]
  - [continue for all service cards]

### Industries Section
- **Section Headline**: "[exact text]"
- **Industry Cards**: [count]
  - Card 1: "[title]" - "[description first 100 chars...]"
  - Card 2: "[title]" - "[description first 100 chars...]"
  - [continue for all industry cards]

### About Section
- **Section Headline**: "[exact text]"
- **Section Subheadline**: "[exact text]"
- **Differentiator Cards**: [count]
  - Card 1: "[title]" - "[description first 100 chars...]"
  - Card 2: "[title]" - "[description first 100 chars...]"
  - [continue for all cards]
- **Team Photo**: [Present / Placeholder / None]

### Contact Section
- **Section Headline**: "[exact text]"
- **Form Fields**: [list fields: Name, Email, Message, etc.]
- **Form Submit Button**: "[text]"
- **Contact Methods**:
  - Email: [email address]
  - Phone: [if present]
  - Other: [list any other contact methods]

---

## Case Studies Page (/case-studies)

### Page Header
- **Headline**: "[exact text]"
- **Subheadline**: "[exact text]" (if exists)

### Case Study Cards
- **Total Count**: [number]
- **Card 1**: "[title]" - Industry: [tag] - Metric: "[primary stat]" â†’ [link to detail page]
- **Card 2**: "[title]" - Industry: [tag] - Metric: "[primary stat]" â†’ [link to detail page]
- [continue for all cards]

### Filtering (if implemented)
- **Filter Options**: [list: By Industry, By Solution Type, etc.]

---

## Individual Case Study Pages

### [Case Study Name] (/case-studies/[slug])
- **Hero Headline**: "[exact text]"
- **Industry Tag**: [text]
- **Primary Metric**: "[number/percentage]"
- **Sections Present**: [list: The Challenge, The Solution, The Impact, etc.]
- **Navigation**: [Previous/Next links present? Related cases?]

[Repeat for each case study page]

---

## Navigation

### Header Navigation
- **Logo/Brand Text**: "[exact text]"
- **Nav Links**: [count]
  - Link 1: "[text]" â†’ [destination]
  - Link 2: "[text]" â†’ [destination]
  - [continue for all nav links]
- **CTA Button**: "[text]" â†’ [destination] (if exists)

### Footer Navigation
- **Quick Links Column**: [list links]
- **Services Column**: [list items]
- **Contact Info**: [email, phone, etc.]
- **Copyright Text**: "[exact text]"

---

## Other Pages (if exist)

### About Page (/about)
[Follow similar format as above sections]

### Services Detail Pages (/services/[slug])
[Follow similar format as above sections]

### Blog/Insights (/blog)
[Follow similar format as above sections]

---

## Notes
- Placeholder content is marked as [Placeholder]
- Empty sections are marked as [Not implemented]
- Dynamic content (e.g., form submissions) not captured
```

---

## Critical Instructions

1. **Use today's actual date** in the filename: `INVENTORY-content-2024-12-05.md` (example format)
2. **Look up the current date** - do not assume or use a stale date
3. **Extract exact text** for headlines, CTAs, and key copy (don't paraphrase)
4. **Truncate long descriptions** to first 50-100 chars for readability
5. **Note placeholders** explicitly (e.g., "Client Logos: 5 placeholders")
6. **Include all pages** that exist in the current build
7. **Save in project root** at the same level as lock files

---

## Example Output Filename

```
INVENTORY-content-2024-12-05.md
```

**NOT**:
- âŒ `INVENTORY-content.md` (missing date)
- âŒ `content-inventory-12-05.md` (wrong naming convention)
- âŒ `INVENTORY-content-2024-12-01.md` (stale date if today is Dec 5)

---

## After Generation

Confirm to the user:
- Inventory generated successfully
- Filename with date: `INVENTORY-content-[date].md`
- Ready to upload to Claude UI project for review