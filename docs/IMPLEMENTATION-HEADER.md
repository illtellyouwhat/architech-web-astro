# Phase 2 Implementation Header
# Add this to the top of EVERY Claude Code prompt during Phase 2

---

## ⚠️ CRITICAL INSTRUCTIONS - READ FIRST

### 1. Content Preservation
**File**: `CONTENT-RULES.md`

**Rule**: Preserve all existing text. Do not invent or modify copy.
- ✅ Keep existing headlines, descriptions, feature lists
- ✅ Copy text verbatim when porting components
- ❌ Never invent new copy or paraphrase
- ❌ Never add features to lists that don't exist
- ❓ If content is missing, ASK for it (don't invent)

### 2. Design System
**File**: `DESIGN-SYSTEM-LOCK.md`

**Rule**: Use ONLY the gray-based color palette. No blue.
- ✅ Primary color: gray-900 (#111827) for CTAs and headlines
- ✅ Font: Inter (weights 300-600)
- ✅ Use defined gray scale (50-900) exclusively
- ❌ Never use blue-600 or any blue colors
- ❌ Never invent colors outside the gray scale
- ❓ If unsure about styling, reference DESIGN-SYSTEM-LOCK.md

---

## Quick Reference

### Colors to Use
```
Primary CTA:        bg-gray-900 text-white
Headlines:          text-gray-900
Body text:          text-gray-600
Light backgrounds:  bg-gray-50
Card borders:       border-gray-100
```

### Colors to NEVER Use
```
❌ bg-blue-600
❌ text-blue-600
❌ border-blue-500
❌ Any blue variant unless explicitly added to DESIGN-SYSTEM-LOCK.md
```

### Typography
```
Font family:        Inter
Headlines:          font-light (300-400)
Body:               font-normal (400) to font-medium (500)
Buttons:            font-medium (500)
Section labels:     font-semibold (600) uppercase
```

---

## Before You Implement

**Checklist**:
- [ ] Read CONTENT-RULES.md
- [ ] Read DESIGN-SYSTEM-LOCK.md  
- [ ] Understand: This is a GRAY-based design, not blue
- [ ] If creating new components, use gray-900 for primary actions
- [ ] If porting content, copy text verbatim
- [ ] If unsure, ASK before implementing

---

## Common Mistakes to Avoid

### ❌ WRONG: Using Blue
```jsx
<button className="bg-blue-600 text-white">
  Get Started
</button>
```

### ✅ CORRECT: Using Gray-900
```jsx
<button className="bg-gray-900 text-white hover:bg-gray-800">
  Get Started
</button>
```

### ❌ WRONG: Inventing Content
```jsx
<h2>Revolutionize Your Workflow</h2>
```

### ✅ CORRECT: Using Existing or Asking
```jsx
// If existing content says:
<h2>Transform Your Business with Intelligent Automation</h2>

// Or if missing, ask:
// "What should the headline be for this section?"
```

### ❌ WRONG: Inventing Font Weights
```jsx
<h1 className="font-bold"> {/* Wrong - headlines use font-light */}
```

### ✅ CORRECT: Using Defined Weights
```jsx
<h1 className="font-light"> {/* Correct - from DESIGN-SYSTEM-LOCK.md */}
```

---

## Phase 2 Goal

**Restore functionality WITHOUT changing**:
- Brand colors (stay gray)
- Typography (stay Inter with defined weights)
- Existing copy (preserve verbatim)

**Changes allowed**:
- Adding React islands for interactivity
- Adding hydration directives
- Applying animations
- Fixing broken features

**Changes NOT allowed**:
- Changing color palette to blue
- Rewriting copy
- Changing fonts
- Adding features not in original

---

## Template Prompt Structure

Use this structure for every Phase 2 implementation:

```markdown
# [Task Name]

## Critical Instructions
FOLLOW CONTENT-RULES.md and DESIGN-SYSTEM-LOCK.md

**Colors**: Gray-based palette only (NO blue)
**Typography**: Inter font, weights 300-600
**Content**: Preserve existing, don't invent

## Task Details
[Your specific implementation instructions]

## Styling Requirements
Primary button: bg-gray-900 text-white hover:bg-gray-800
Secondary button: border-2 border-gray-300 text-gray-700
Headlines: text-gray-900 font-light
Body: text-gray-600 font-normal

## Testing
- [ ] No blue colors used
- [ ] Inter font applied correctly
- [ ] Existing copy preserved (not changed)
- [ ] Matches DESIGN-SYSTEM-LOCK.md specifications
```

---

## When This Header Is NOT Needed

Skip this header when:
- Asking clarifying questions (no implementation yet)
- Reviewing/analyzing code (not making changes)
- Extracting information (read-only operations)

Use this header when:
- Creating new components
- Modifying existing components
- Adding features
- Styling elements
- Any code generation

---

## Emergency Override

If you believe you need to use blue or modify copy for a valid reason:
1. STOP implementation
2. Ask: "I think we need [blue/new copy] because [reason]. Should I proceed?"
3. Wait for explicit permission
4. Document the exception

**Never** assume exceptions are okay without asking.

---

## Success Criteria

After implementation, verify:
- ✅ Uses gray-900 for primary actions (not blue)
- ✅ Uses Inter font with correct weights
- ✅ Preserves all existing copy exactly
- ✅ Matches spacing/sizing from DESIGN-SYSTEM-LOCK.md
- ✅ No invented content
- ✅ No arbitrary colors outside defined palette
