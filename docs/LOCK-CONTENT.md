# CONTENT-LOCK.md - PHASE 9 UPDATE
## Contact Section Changes Only

**Date Updated**: December 10, 2024
**Phase**: Phase 9
**Changes**: Contact section restructured with consistent card formatting and copy-to-clipboard

---

## CONTACT SECTION (UPDATED - Phase 9)

### Section Eyebrow
```
Contact
```

### Section Headline
```
Ready to Automate?
```

### Section Subheadline
```
Tell us about your biggest bottleneck—we'll tell you if we can help.
```

### Contact Form

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

**Button Styling:**
```
Background: bg-gray-900 (NOT blue)
Text: text-white
Hover: hover:bg-gray-800
Transition: transition-colors duration-200
```

**Success Message:**
```
Message received! We'll be in touch soon.
```

**Error Message:**
```
Please email us directly at hello@automationarchitech.com
```

---

### Contact Method Cards (3 cards below form)

**CRITICAL - Consistent Structure Across All Cards:**

All 3 cards must follow this exact structure:
1. Lucide icon (centered, top of card)
2. Black button (centered, middle of card)
3. Gray subtext (centered, bottom of card)

**NO labels or text between icon and button**

---

#### Card 1: Email

```
Icon: lucide:mail
Icon Size: w-8 h-8 (or consistent with other cards)
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

Subtext: "Expect a reply within 24 hours"
Subtext Style: text-sm text-gray-600
```

---

#### Card 2: Video Call

```
Icon: lucide:video
Icon Size: w-8 h-8 (match email card)
Icon Color: text-gray-600

Button Text: "Schedule Google Meet"
Button Style: bg-gray-900 text-white px-6 py-3 rounded-lg font-medium
Button Hover: hover:bg-gray-800
Button Link: https://calendar.app.google/EVcS3xj7ud1BWtkL6
Button Transition: transition-colors duration-200

Subtext: "Book a video call at a time that works for you."
Subtext Style: text-sm text-gray-600
```

---

#### Card 3: Phone Call

```
Icon: lucide:phone
Icon Size: w-8 h-8 (match other cards)
Icon Color: text-gray-600

Button Text: "Schedule Phone Call"
Button Style: bg-gray-900 text-white px-6 py-3 rounded-lg font-medium
Button Hover: hover:bg-gray-800
Button Link: https://calendar.app.google/mnKPd1jZJn9fyKTu9
Button Transition: transition-colors duration-200

Subtext: "Prefer to talk by phone? Schedule a call that fits your schedule."
Subtext Style: text-sm text-gray-600
```

---

### Implementation Requirements

**Card Grid:**
```
Desktop: grid-cols-3 (3 equal columns)
Mobile: grid-cols-1 (stack vertically)
Gap: gap-6 or gap-8
```

**Card Styling:**
```
Background: bg-gray-50 or bg-white with border
Border: border border-gray-100
Border Radius: rounded-xl
Padding: p-6 or p-8 (consistent across all cards)
Min Height: min-h-[280px] (ensures equal heights)
Display: flex flex-col items-center justify-between
```

**Icon Positioning:**
```
Margin Bottom: mb-6 (space between icon and button)
Centered: flex justify-center
```

**Button Positioning:**
```
Margin Bottom: mb-4 (space between button and subtext/email)
Centered: flex justify-center or mx-auto
Width: Match across all cards (either w-full max-w-xs or fixed width)
```

**Subtext Positioning:**
```
Centered: text-center
Max Width: max-w-xs (for readability)
```

**Copy-to-Clipboard UX (Email Card Only):**
```
Default State: "hello@automationarchitech.com"
Hover State: Underline appears
Click Action: Copies email to clipboard
Click Feedback: Text changes to "Copied!" for 2 seconds, then reverts
Color: text-gray-700 hover:text-gray-900
Cursor: cursor-pointer
```

---

### What Changed from Previous Version

**Removed:**
- Label text between icon and button on all cards ("Email", "Schedule via Google Meet", "Schedule a Phone Call" labels)
- "Via" from Google Meet button text
- Gray circle backgrounds around icons (if they existed)
- Inconsistent card layouts

**Added:**
- Copy-to-clipboard functionality for email address
- Consistent button sizing across all 3 cards
- Consistent icon sizing and positioning
- Equal card heights via flexbox/min-height

**Modified:**
- Button text: "Schedule via Google Meet" → "Schedule Google Meet"
- Email card now has black button + clickable email address (not just mailto link)
- All buttons use identical styling (bg-gray-900, not blue)
- Email subtext: "Expect a thoughtful reply with next steps inside 24 hours." → "Expect a reply within 24 hours"

---

## Integration Notes for Claude Code

1. **Card Layout**: Use flexbox with `flex-col items-center justify-between` to ensure consistent spacing
2. **Icon Source**: Use `lucide:mail`, `lucide:video`, `lucide:phone` icons (already in project)
3. **Copy to Clipboard**: Implement using browser Clipboard API (`navigator.clipboard.writeText()`)
4. **Button Consistency**: All buttons should have identical padding, font, and styling
5. **Responsive**: Cards stack on mobile, side-by-side on desktop
6. **Accessibility**: Include aria-labels for icon-only elements, provide keyboard navigation for copy button

---

**Document Version**: 1.1 (Phase 9 Contact Section Update)
**Last Updated**: December 10, 2024
**Approved By**: Phil
