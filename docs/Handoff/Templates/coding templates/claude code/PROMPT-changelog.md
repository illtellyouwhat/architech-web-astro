# Changelog Documentation Instructions

**Purpose**: Maintain forensic-level change tracking in `/docs/CHANGELOG.md`  
**Location**: This file lives in `/docs/CHANGELOG.md` (visible to Claude Code only, not Claude UI)  
**When to use**: Include this prompt for any significant implementation (new features, bug fixes, multi-file changes)  
**When to skip**: Minor tasks like typo fixes or single-line copy updates  
**Format**: Append-only, most recent entries at top

---

## Critical Rules

1. **Always check today's actual date** - never assume or use stale dates
2. **Append to TOP of file** - most recent entries first
3. **Include git commit hash** - get the most recent commit hash (user has already committed)
4. **Reference spec section numbers** - cite section number + heading from spec (e.g., "Section 2.1 'Animation Implementation'")
5. **Use git diff for line numbers** - include exact lines changed in each file (stable with git hash)
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
  - **Spec Reference**: `[spec-filename.md]` > Section [X.X] "[Section Heading]"
  - **File**: `path/to/file.ext`
  - **Lines Changed**: [start-end] (from git diff)
  - **Change**: [What was added]

#### Modified
- [Changed feature/component]
  - **Spec Reference**: `[spec-filename.md]` > Section [X.X] "[Section Heading]"
  - **File**: `path/to/file.ext`
  - **Lines Changed**: [start-end] (from git diff)
  - **Change**: [What was modified]

#### Fixed
- [Bug/issue resolved]
  - **Spec Reference**: `[spec-filename.md]` > Section [X.X] "[Section Heading]"
  - **File**: `path/to/file.ext`
  - **Lines Changed**: [start-end] (from git diff)
  - **Change**: [What was fixed]

#### Removed
- [Deleted feature/component]
  - **Spec Reference**: `[spec-filename.md]` > Section [X.X] "[Section Heading]"
  - **File**: `path/to/file.ext`
  - **Lines Changed**: [start-end] (from git diff)
  - **Change**: [What was removed]

### Verification Results
- âœ… [Checklist item from spec - passed]
- âœ… [Checklist item from spec - passed]
- âš ï¸  [Known limitation or pending item]
- âŒ [Failed check - describe issue]

### Notes
- [Implementation decisions made]
- [Challenges encountered]
- [Placeholders added]
- [Items flagged for user review]

---
```

---

## How to Get Git Commit Hash

**This prompt runs AFTER the user has manually committed changes.**

Get the most recent commit hash:

```bash
git log -1 --format="%H"
```

**Use the full hash** (not abbreviated) in the changelog entry.

Example: `a3f5d8c9e2b1f4a6d7e8c9b0a1f2e3d4c5b6a7f8`

---

## How to Get Line Numbers Changed

Use git diff to identify exact lines modified in the most recent commit:

```bash
git diff HEAD~1 HEAD --unified=0
```

This shows line ranges like:
```
@@ -42,3 +42,8 @@ src/components/Hero.astro
```

Which means: Lines 42-50 were modified (42 start, +8 lines added = 50 end)

**In the changelog, record as**: `Lines Changed: 42-50`

**For new files**: Record as `Lines Changed: 1-[total lines]` (entire file is new)

**For deleted files**: Record as `Lines Changed: [all lines that were deleted]`

---

## Spec File Section Numbering

**All spec files must use numbered sections** (1, 2, 2.1, 2.2, 3, etc.)

When referencing the spec in changelog entries, always include both:
- Section number (e.g., "Section 2.1")
- Section heading (e.g., "Animation Implementation")

**Format**: `Section 2.1 "Animation Implementation"`

**Why**: Section numbers provide precise location even if headings are similar across different sections.

---

## Formatting Guidelines

### Date Format
- **Correct**: `2024-12-08`
- **Wrong**: `Dec 8, 2024` or `12/8/24` or `yesterday`

### Spec Reference
- Include section number + heading: `SPEC-phase6-hero-animation.md` > Section 2.1 "Animation Implementation"
- Not just filename: `phase 6` or `hero animation spec`
- Not just heading: "Animation Implementation" (missing section number)

### File Paths
- Use relative paths from project root: `src/components/Hero.astro`
- Not absolute paths: `/Users/phil/project/src/components/Hero.astro`

### Section Descriptions
Use descriptive section names that identify the area of code:
- âœ… **Good**: "Hero headline rendering", "Contact form validation logic", "Service card hover states"
- âŒ **Bad**: "Top of file", "Around line 42", "The main function"

### Change Descriptions
Be specific about what changed:
- âœ… **Good**: "Added rotating word array with 5 terms, implemented fade animation with 2.5s interval"
- âŒ **Bad**: "Added animation", "Updated hero"

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
- Fixing a bug by adding new validation â†’ **Fixed** (not Added)
- Removing old code and replacing with new â†’ **Modified** (not Removed + Added)

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
- âœ… Hero animation plays on page load
- âœ… Word rotation loops correctly  
- âœ… No console errors
```

### Add Context for Failures
If a check fails, explain why and what needs to happen:

```markdown
- âŒ Safari animation timing incorrect
  - Issue: Animation runs 20% faster in Safari than Chrome
  - Cause: Safari handles CSS animation-duration differently
  - Next step: Requires browser-specific keyframe adjustment (flagged for Phase 7)
```

### Note Warnings
Use âš ï¸ for acceptable limitations or minor issues:

```markdown
- âš ï¸  Animation timing slightly faster on Safari (acceptable variance)
- âš ï¸  Client logos still using placeholders (awaiting user-provided images)
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
  - **Spec Reference**: `SPEC-phase6-hero-animation.md` > Section 2.1 "Animation Implementation"
  - **File**: `src/components/Hero.astro`
  - **Lines Changed**: 42-58
  - **Change**: Wrapped headline in animation container with rotating word array ["company", "reports", "team", "product", "analytics"], implemented fade-in/fade-out transitions with 2.5s intervals
  
- Animation keyframes
  - **Spec Reference**: `SPEC-phase6-hero-animation.md` > Section 2.2 "Keyframe Definitions"
  - **File**: `src/styles/animations.css` (new file)
  - **Lines Changed**: 1-12
  - **Change**: Created fadeInOut keyframe (0% opacity 0, 50% opacity 1, 100% opacity 0) for word rotation effect

- Hover-reveal subheadline
  - **Spec Reference**: `SPEC-phase6-hero-animation.md` > Section 2.3 "Hover Interactions"
  - **File**: `src/components/Hero.astro`
  - **Lines Changed**: 68-75
  - **Change**: Added opacity-based hover state (hidden by default, opacity 1 on headline hover with 300ms transition)

#### Modified
- Tailwind configuration
  - **Spec Reference**: `SPEC-phase6-hero-animation.md` > Section 3.1 "Configuration Updates"
  - **File**: `tailwind.config.cjs`
  - **Lines Changed**: 15-18
  - **Change**: Registered fadeInOut animation with 2.5s duration and infinite iteration

- Hero component structure
  - **Spec Reference**: `SPEC-phase6-hero-animation.md` > Section 2.1 "Animation Implementation"
  - **File**: `src/components/Hero.astro`
  - **Lines Changed**: 1-5, 42-58
  - **Change**: Added React useEffect and useState hooks for animation timing logic

### Verification Results
- âœ… Words rotate continuously with 2.5s interval per word
- âœ… Fade transitions smooth (300ms duration)
- âœ… Subheadline reveals on hover without layout shift
- âœ… No layout shift during word changes (space reserved for longest word)
- âœ… No console errors on page load or during animation
- âœ… Animation loops infinitely without stuttering
- âš ï¸  Animation timing ~400ms faster on Safari (acceptable variance, animation-duration handled differently)

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

### âŒ Don't Use Relative Dates
- Wrong: "Today", "Yesterday", "Last week"
- Right: "2024-12-08"

### ❌ Don't Omit Line Numbers or Spec References
- Wrong: Missing "Lines Changed" field entirely
- Wrong: Missing "Spec Reference" field entirely
- Right: Include both for every change entry (get from git diff and spec section numbers)


### âŒ Don't Be Vague
- Wrong: "Updated component"
- Right: "Added rotating word animation to hero headline with 5-word rotation sequence"

### âŒ Don't Skip Verification
- Wrong: [Leave section empty]
- Right: Document all checklist items from spec, even if all passed

### âŒ Don't Forget Git Hash
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
