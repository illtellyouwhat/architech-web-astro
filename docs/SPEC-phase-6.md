# PHASE 6 IMPLEMENTATION SPEC
## Homepage Content & Interaction Updates

**Date**: December 8, 2024  
**Phase**: Phase 6 - Homepage Updates  
**Scope**: Hero animation, client logos, About section, Contact calendar links

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT-claude-code-header.md` completely
2. Skim all three lock files to understand constraints
3. Read this spec thoroughly
4. Reference lock files during implementation for exact copy/colors/patterns

---

## OVERVIEW

This phase updates homepage content and interactions based on client requests:
- Animated rotating headline in hero
- Hover-reveal subheadline behavior
- Equal-sized CTA buttons (remove supporting text)
- Add client logos section (10 logos)
- Update About section (new subheadline, 3 simplified cards)
- Add two calendar booking buttons in Contact section

**All copy comes from LOCK-content.md** - reference it for exact text.

---

## 1. HERO SECTION UPDATES

### File: `/src/components/Hero.astro` (or similar)

### 1.1 Animated Headline

**Current headline:**
```
Still Spending 15+ Hours Per Week on Tasks a Computer Could Handle?
```

**New headline:**
```
Your [rotating word] needs data
```

**Implementation requirements:**
- Words rotate: company → reports → team → product → analytics
- Continuous fade in/fade out animation
- Display each word for 2-3 seconds
- Fade transition: 0.5 seconds
- Always visible (no hover trigger)
- No layout shift (reserve space for longest word: "analytics")

**Animation spec from DESIGN-SYSTEM-LOCK.md:**
- Use CSS keyframes or React animation library (Framer Motion if already in project)
- Smooth opacity transitions (0 → 1 → 0)
- Accessible: Provide full text for screen readers via aria-label

**Example implementation approach:**
```jsx
// If using React component with state
const words = ["company", "reports", "team", "product", "analytics"];
const [currentIndex, setCurrentIndex] = useState(0);

// Rotate every 2.5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, 2500);
  return () => clearInterval(interval);
}, []);

// In JSX:
<h1>
  Your{" "}
  <span className="inline-block min-w-[200px] transition-opacity duration-500">
    {words[currentIndex]}
  </span>{" "}
  needs data
</h1>
```

**Accessibility:**
```html
<h1 aria-label="Your company needs data">
  Your <span class="rotating-word">company</span> needs data
</h1>
```

### 1.2 Hover-Reveal Subheadline

**New subheadline text (from LOCK-content.md):**
```
We help organizations build intelligent LLM applications deploy robust data pipelines 
and create seamless system workflows that scale.
```

**Behavior:**
- Hidden by default
- Appears on hover over hero section (or near headline)
- Smooth fade-in transition (duration-300 from DESIGN-SYSTEM-LOCK.md)

**Implementation approach:**
```jsx
// Conditional class based on hover state
<div className="hero-container group">
  <h1>Your {rotatingWord} needs data</h1>
  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    We help organizations build intelligent LLM applications...
  </p>
</div>
```

### 1.3 CTA Button Updates

**Changes:**
1. Remove "Real projects. Real results. Real metrics." text below "See Our Work" button
2. Make both buttons equal size

**Current:**
- Primary button: "See Our Work" (smaller) + supporting text below
- Secondary button: "Book 15-Minute Discovery Call →" (larger)

**Updated:**
- Primary button: "See Our Work" (same size as secondary)
- Secondary button: "Book 15-Minute Discovery Call →" (same size as primary)
- No supporting text under either button

**Button sizing (from DESIGN-SYSTEM-LOCK.md):**
```css
Padding: px-8 py-4 (large)
Font: font-medium (500)
Border Radius: rounded-lg
```

**Ensure both buttons use same padding/sizing classes.**

---

## 2. CLIENT LOGOS SECTION

### File: Create new component `/src/components/ClientLogos.astro`

### 2.1 Section Structure

**Location:** After Stats section, before Industries section

**Content from LOCK-content.md:**
- Section headline: "Trusted By"
- 10 client logos
- Horizontal layout, minimized vertical space

### 2.2 Logo Specifications

**User will provide:**
- 10 logo files at 200-250px width (varying aspect ratios)
- Location: `/public/images/clients/`
- Naming convention: `logo1-companyname1.png`, `logo2-companyname2.png`, etc.

**CRITICAL - Handle Varying Sizes:**
Logos will have different shapes/aspect ratios. Layout must accommodate this gracefully:
- Use `object-fit: contain` so logos don't distort
- Set consistent HEIGHT (not width) to maintain visual balance
- Use `w-auto` to let width adjust naturally based on aspect ratio
- Center all logos vertically and horizontally within their grid cells

**Display requirements:**
- Fixed height for visual consistency: `h-12` or `h-16` (48px or 64px)
- Horizontal row layout with even spacing
- Grayscale on default, color on hover (optional enhancement)
- Responsive: 2-3 per row on mobile, 5 per row on desktop

**Example implementation:**
```astro
---
// ClientLogos.astro
const logos = [
  { src: '/images/clients/logo1-companyname1.png', alt: 'Company Name 1' },
  { src: '/images/clients/logo2-companyname2.png', alt: 'Company Name 2' },
  { src: '/images/clients/logo3-companyname3.png', alt: 'Company Name 3' },
  { src: '/images/clients/logo4-companyname4.png', alt: 'Company Name 4' },
  { src: '/images/clients/logo5-companyname5.png', alt: 'Company Name 5' },
  { src: '/images/clients/logo6-companyname6.png', alt: 'Company Name 6' },
  { src: '/images/clients/logo7-companyname7.png', alt: 'Company Name 7' },
  { src: '/images/clients/logo8-companyname8.png', alt: 'Company Name 8' },
  { src: '/images/clients/logo9-companyname9.png', alt: 'Company Name 9' },
  { src: '/images/clients/logo10-companyname10.png', alt: 'Company Name 10' },
];
---

<section class="py-12 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-center text-sm font-semibold uppercase tracking-wide text-gray-500 mb-8">
      Trusted By
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
      {logos.map((logo) => (
        <img 
          src={logo.src} 
          alt={logo.alt}
          class="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      ))}
    </div>
  </div>
</section>
```

**Key CSS classes:**
- `h-12` = fixed height of 48px (adjust to `h-16` for 64px if logos need more space)
- `w-auto` = width adjusts automatically based on aspect ratio
- `object-contain` = logos scale to fit without distortion
- `items-center justify-items-center` = centers logos within grid cells

**Note:** User will provide all 10 logo files. Once files are in `/public/images/clients/`, the component will work immediately without layout shifts.

---

## 3. ABOUT SECTION UPDATES

### File: `/src/components/About.astro` (or similar)

### 3.1 New Subheadline

**Replace current subheadline with (from LOCK-content.md):**
```
We're not just another development agency. We're automation specialists who understand 
the intricacies of modern AI, data processing, and system integration. Our expertise 
spans from cutting-edge LLM applications to robust data pipelines that scale. We combine 
LLM expertise, low-code implementation, and a focus on measurable results. From 6-week 
implementations to 99% AI accuracy and API workarounds—we solve the problems other 
agencies can't.
```

### 3.2 Differentiator Cards - Replace Completely

**Current:** 3 cards with different content + rollover reveals
**New:** 3 cards with new static content, NO rollover functionality

**Remove rollover/hover-reveal functionality** - display all text statically.

**New card content (from LOCK-content.md):**

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

**Icon recommendations (use Lucide icons):**
- Tailored Solutions: `lucide:wrench` or `lucide:settings`
- Proven Results: `lucide:trending-up` or `lucide:bar-chart`
- Expert Team: `lucide:users` or `lucide:award`

**Design notes:**
- Keep existing card layout/styling
- Remove any hover-reveal interactions
- Display all text statically
- Maintain 3-column grid on desktop, stack on mobile

---

## 4. CONTACT SECTION UPDATES

### File: `/src/components/Contact.astro` (or similar)

### 4.1 Replace Single Calendar Button with Two Buttons

**Current:**
- Single "Book 15-Minute Call" button/card

**New:**
- Two separate calendar booking cards

**Card 1: Schedule via Google Meet**
```
Icon: lucide:video or lucide:calendar
Label: "Schedule via Google Meet"
Button Text: "Schedule via Google Meet"
Button Link: https://calendar.app.google/EVcS3xj7ud1BWtkL6
Subtext: "Book a video call at a time that works for you."
```

**Card 2: Schedule a Phone Call**
```
Icon: lucide:phone or lucide:calendar
Label: "Schedule a Phone Call"
Button Text: "Schedule a Phone Call"
Button Link: https://calendar.app.google/mnKPd1jZJn9fyKTu9
Subtext: "Prefer to talk by phone? Schedule a call that fits your schedule."
```

**Implementation notes:**
- Both cards should have equal visual weight
- Use button styling from DESIGN-SYSTEM-LOCK.md (gray-900 background, white text)
- Links open in same tab (external calendar links)
- Maintain existing email card
- Grid layout: Email card + Google Meet card + Phone card (3 columns on desktop, stack on mobile)

**Example structure:**
```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Email Card (existing) -->
  <div class="card">
    <Icon name="lucide:mail" />
    <h3>Email</h3>
    <a href="mailto:hello@automationarchitech.com">hello@automationarchitech.com</a>
    <p>Expect a thoughtful reply with next steps inside 24 hours.</p>
  </div>
  
  <!-- Google Meet Card (new) -->
  <div class="card">
    <Icon name="lucide:video" />
    <h3>Schedule via Google Meet</h3>
    <a 
      href="https://calendar.app.google/EVcS3xj7ud1BWtkL6"
      class="btn btn-primary"
    >
      Schedule via Google Meet
    </a>
    <p>Book a video call at a time that works for you.</p>
  </div>
  
  <!-- Phone Call Card (new) -->
  <div class="card">
    <Icon name="lucide:phone" />
    <h3>Schedule a Phone Call</h3>
    <a 
      href="https://calendar.app.google/mnKPd1jZJn9fyKTu9"
      class="btn btn-primary"
    >
      Schedule a Phone Call
    </a>
    <p>Prefer to talk by phone? Schedule a call that fits your schedule.</p>
  </div>
</div>
```

### 4.2 Remove Location Card

**Action:** Delete the "Global Remote Team" location card completely.

**Reason:** This information has been merged into the "Expert Team" card in the About section.

---

## 5. INTEGRATION CHECKLIST

### 5.1 Homepage Component Integration

Ensure the following components are included in the homepage (`/src/pages/index.astro`):

```astro
---
import Hero from '../components/Hero.astro';
import Stats from '../components/Stats.astro';
import ClientLogos from '../components/ClientLogos.astro'; // NEW
import Industries from '../components/Industries.astro';
import About from '../components/About.astro';
import Contact from '../components/Contact.astro';
---

<Layout>
  <Hero />
  <Stats />
  <ClientLogos /> <!-- NEW SECTION -->
  <Industries />
  <About />
  <Contact />
</Layout>
```

### 5.2 Verify Section Order

1. Hero (with animated headline)
2. Stats (existing, no changes)
3. **Client Logos (NEW)**
4. Industries (existing, no changes)
5. About (updated content)
6. Contact (two calendar buttons)

---

## 6. TESTING CHECKLIST

After implementation, verify:

### Hero Section
- [ ] Headline rotates through 5 words correctly
- [ ] Fade animation is smooth (no jumps)
- [ ] No layout shift during word changes
- [ ] Subheadline appears on hover
- [ ] Both CTA buttons are equal size
- [ ] No supporting text below "See Our Work" button

### Client Logos
- [ ] Section appears after Stats, before Industries
- [ ] "Trusted By" headline displays correctly
- [ ] Logos display in horizontal row
- [ ] Responsive: stacks appropriately on mobile
- [ ] Placeholder comment notes files are pending from user

### About Section
- [ ] New subheadline text displays correctly (long paragraph)
- [ ] Three cards show new titles and descriptions
- [ ] No hover-reveal functionality (all text static)
- [ ] Cards use appropriate Lucide icons
- [ ] Responsive layout works on mobile

### Contact Section
- [ ] Three info cards display (Email + 2 calendar buttons)
- [ ] Google Meet button links to correct URL
- [ ] Phone call button links to correct URL
- [ ] Location card is removed
- [ ] Grid layout works on desktop and mobile

### Accessibility
- [ ] Rotating headline has proper aria-label
- [ ] All buttons have descriptive text
- [ ] Links have clear purpose (don't just say "click here")
- [ ] Images have alt text

### Performance
- [ ] Animation doesn't cause jank or high CPU usage
- [ ] Page loads quickly
- [ ] No console errors

---

## 7. NOTES FOR IMPLEMENTER

### Animation Library Choice
If project already uses Framer Motion, use that for text rotation. Otherwise, use CSS keyframes for simplicity.

### Logo File Handling
All 10 logo files will be provided by user at `/public/images/clients/` with naming pattern:
- `logo1-companyname1.png`
- `logo2-companyname2.png`
- etc.

Use the exact array shown in section 2.2 - all paths and alt text are ready to use.

### Existing Functionality
**Preserve these existing features:**
- Stats cards clickable behavior (link to case studies)
- Contact form validation
- Any existing animations/transitions
- Mobile menu functionality
- Footer content

**Only change what's specified in this spec.**

---

## 8. REFERENCE FILES

**All content:** `/mnt/project/CONTENT-LOCK.md`
**All styling:** `/mnt/project/DESIGN-SYSTEM-LOCK.md`
**Architecture rules:** `/mnt/project/LOCK-architecture.md`

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

**End of Phase 6 Spec**
