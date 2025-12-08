# Changelog Documentation Instructions

**Purpose**: Maintain forensic-level change tracking in `/docs/CHANGELOG.md`  
**Location**: This file lives in `/docs/CHANGELOG.md`

---

## Critical Rules

1. **Always check today's actual date** - never assume or use stale dates
2. **Append to TOP of file** - most recent entries first
3. **Include git commit hash** - enables tracing back to exact changes
4. **Reference the spec file** - creates clear audit trail
5. **Use Git-style context** - describe sections changed, not brittle line numbers
6. **Categorize all changes** - Added / Modified / Fixed / Removed
7. **Include verification results** - document what passed/failed from spec checklist

---

## Changelog Entry Template

```markdown
## [YYYY-MM-DD] - Spec: [spec-filename.md] - Commit: [git-hash]

### Overview
[2-3 sentence summary of what was implemented]

### Changes

#### Added
- [New feature/component]
  - **File**: `path/to/file.ext`
  - **Section**: [Which part of the file - e.g., "Hero headline rendering", "Contact form validation"]
  - **Change**: [What was added]

#### Modified
- [Changed feature/component]
  - **File**: `path/to/file.ext`
  - **Section**: [Which part of the file]
  - **Change**: [What was modified]

#### Fixed
- [Bug/issue resolved]
  - **File**: `path/to/file.ext`
  - **Section**: [Which part of the file]
  - **Change**: [What was fixed]

#### Removed
- [Deleted feature/component]
  - **File**: `path/to/file.ext`
  - **Section**: [Which part of the file]
  - **Change**: [What was removed]

### Verification Results
- ✅ [Checklist item from spec - passed]
- ✅ [Checklist item from spec - passed]
- ⚠️  [Known limitation or pending item]
- ❌ [Failed check - describe issue]

### Notes
- [Implementation decisions made]
- [Challenges encountered]
- [Placeholders added]
- [Items flagged for user review]

---
```

---

## How to Get Git Commit Hash

After completing implementation and before creating changelog entry:

```bash
git log -1 --format="%H"
```

**Use the full hash** (not abbreviated) in the changelog entry.

Example: `a3f5d8c9e2b1f4a6d7e8c9b0a1f2e3d4c5b6a7f8`

---

## Formatting Guidelines

### Date Format
- **Correct**: `2024-12-08`
- **Wrong**: `Dec 8, 2024` or `12/8/24` or `yesterday`

### Spec Reference
- Include full filename: `SPEC-phase6-hero-animation.md`
- Not just: `phase 6` or `hero animation spec`

### File Paths
- Use relative paths from project root: `src/components/Hero.astro`
- Not absolute paths: `/Users/phil/project/src/components/Hero.astro`

### Section Descriptions
Use descriptive section names that identify the area of code:
- ✅ **Good**: "Hero headline rendering", "Contact form validation logic", "Service card hover states"
- ❌ **Bad**: "Top of file", "Around line 42", "The main function"

### Change Descriptions
Be specific about what changed:
- ✅ **Good**: "Added rotating word array with 5 terms, implemented fade animation with 2.5s interval"
- ❌ **Bad**: "Added animation", "Updated hero"

---

## Categorization Rules

### Use "Added" for:
- New components or files
- New features or functionality
- New dependencies or imports
- New sections in existing files

### Use "Modified" for:
- Changes to existing functionality
- Updates to styling or layout
- Refactored code (same behavior, different implementation)
- Configuration changes

### Use "Fixed" for:
- Bug fixes
- Corrected typos or errors
- Resolved layout/styling issues
- Performance improvements that fix problems

### Use "Removed" for:
- Deleted components or files
- Removed features
- Cleaned up unused code
- Deleted deprecated functionality

**If a change fits multiple categories**, choose the primary intent:
- Fixing a bug by adding new validation → **Fixed** (not Added)
- Removing old code and replacing with new → **Modified** (not Removed + Added)

---

## Verification Results Guidelines

### Transcribe from Spec Checklist
If the spec includes a verification checklist, transcribe each item with its result:

**From spec:**
```
- [ ] Hero animation plays on page load
- [ ] Word rotation loops correctly
- [ ] No console errors
```

**In changelog:**
```markdown
### Verification Results
- ✅ Hero animation plays on page load
- ✅ Word rotation loops correctly  
- ✅ No console errors
```

### Add Context for Failures
If a check fails, explain why and what needs to happen:

```markdown
- ❌ Safari animation timing incorrect
  - Issue: Animation runs 20% faster in Safari than Chrome
  - Cause: Safari handles CSS animation-duration differently
  - Next step: Requires browser-specific keyframe adjustment (flagged for Phase 7)
```

### Note Warnings
Use ⚠️ for acceptable limitations or minor issues:

```markdown
- ⚠️  Animation timing slightly faster on Safari (acceptable variance)
- ⚠️  Client logos still using placeholders (awaiting user-provided images)
```

---

## Notes Section Guidelines

### Document Implementation Decisions
Record any choices made during implementation:

```markdown
### Notes
- Used CSS animations instead of JavaScript for better performance
- Chose 2.5s rotation interval (spec said "2-3 seconds") for readability
- Reserved space for longest word ("analytics") to prevent layout shift during rotation
```

### Flag Items Needing User Input

```markdown
### Notes
- Added placeholder calendar links (awaiting actual Calendly URLs from user)
- Client logo section created with 10 slots (awaiting logo files in `/public/images/clients/`)
```

### Surface Conflicts or Ambiguities

```markdown
### Notes
- Spec requested "blue accent" but DESIGN-SYSTEM-LOCK.md specifies gray-only palette
  - Used gray-900 instead per design system constraints
  - Flagged conflict for user to resolve
```

---

## Complete Example Entry

```markdown
## 2024-12-08 - Spec: SPEC-phase6-hero-animation.md - Commit: a3f5d8c9e2b1f4a6d7e8c9b0a1f2e3d4c5b6a7f8

### Overview
Implemented rotating word animation for hero headline. Added animation keyframes, word rotation logic, and hover-reveal subheadline behavior per Phase 6 spec.

### Changes

#### Added
- Hero headline word rotation
  - **File**: `src/components/Hero.astro`
  - **Section**: Hero headline rendering
  - **Change**: Wrapped headline in animation container with rotating word array ["company", "reports", "team", "product", "analytics"], implemented fade-in/fade-out transitions with 2.5s intervals
  
- Animation keyframes
  - **File**: `src/styles/animations.css` (new file)
  - **Section**: Global animations
  - **Change**: Created fadeInOut keyframe (0% opacity 0, 50% opacity 1, 100% opacity 0) for word rotation effect

- Hover-reveal subheadline
  - **File**: `src/components/Hero.astro`
  - **Section**: Hero subheadline
  - **Change**: Added opacity-based hover state (hidden by default, opacity 1 on headline hover with 300ms transition)

#### Modified
- Tailwind configuration
  - **File**: `tailwind.config.cjs`
  - **Section**: Animation definitions (extend.animation)
  - **Change**: Registered fadeInOut animation with 2.5s duration and infinite iteration

- Hero component structure
  - **File**: `src/components/Hero.astro`
  - **Section**: Component imports
  - **Change**: Added React useEffect and useState hooks for animation timing logic

### Verification Results
- ✅ Words rotate continuously with 2.5s interval per word
- ✅ Fade transitions smooth (300ms duration)
- ✅ Subheadline reveals on hover without layout shift
- ✅ No layout shift during word changes (space reserved for longest word)
- ✅ No console errors on page load or during animation
- ✅ Animation loops infinitely without stuttering
- ⚠️  Animation timing ~400ms faster on Safari (acceptable variance, animation-duration handled differently)

### Notes
- Chose 2.5s rotation interval (spec allowed 2-3s range) for optimal readability
- Reserved 180px width for headline to accommodate "analytics" (longest word) and prevent layout shift
- Used CSS animations over JavaScript for better performance and smoother 60fps rendering
- Subheadline uses opacity transition (not display/visibility) to maintain layout space
- Safari timing variance is within acceptable range (<20% difference), no browser-specific fix needed

---
```

---

## Common Mistakes to Avoid

### ❌ Don't Use Relative Dates
- Wrong: "Today", "Yesterday", "Last week"
- Right: "2024-12-08"

### ❌ Don't Use Line Numbers
- Wrong: "Modified lines 42-58"
- Right: "Modified Hero headline rendering section"

### ❌ Don't Be Vague
- Wrong: "Updated component"
- Right: "Added rotating word animation to hero headline with 5-word rotation sequence"

### ❌ Don't Skip Verification
- Wrong: [Leave section empty]
- Right: Document all checklist items from spec, even if all passed

### ❌ Don't Forget Git Hash
- Wrong: `## 2024-12-08 - Spec: SPEC-phase6.md`
- Right: `## 2024-12-08 - Spec: SPEC-phase6.md - Commit: a3f5d8c9e2b1f4a6d7e8c9b0a1f2e3d4c5b6a7f8`

---

## When Changelog Prompt Is Included

**User will include this prompt when:**
- Implementing new features
- Making multi-file changes
- Fixing bugs
- Any change requiring forensic traceability

**User may skip this prompt for:**
- Single-word typo fixes
- Minor copy updates (one sentence)
- Trivial styling tweaks (button padding adjustment)

**If this prompt is not included**: Create minimal changelog entry with just date, spec reference, and high-level summary (no detailed breakdown required).

---

## File Location Reminder

- **Changelog location**: `/docs/CHANGELOG.md`
- **Always append to top** of existing entries
- **Never create a new CHANGELOG file** - update the existing one
- **If CHANGELOG.md doesn't exist yet**: Create it with this header:

```markdown
# CHANGELOG - Automation Architech Website

All notable changes to this project's implementation are documented here.

Format: [Date] - [Spec Reference] - [Git Commit]

---

[Your first entry goes here]
```

---

**Remember**: The changelog is your forensic audit trail. When something breaks, you need to trace back to the exact commit, spec, and file sections that caused it. Be thorough.
