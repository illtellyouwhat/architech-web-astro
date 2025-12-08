# IMPLEMENTATION HEADER - Read This First

## Files In This Directory (/docs/)

**Your implementation instructions:**
- `SPEC-[phase-name].md` - What to build/change (read this in detail)

**Your constraints (immutable):**
- `LOCK-design-system.md` - Colors, fonts, spacing (gray-900 primary, NOT blue)
- `LOCK-content.md` - All approved copy (never invent text)
- `LOCK-architecture.md` - Tech stack rules (Astro + React islands)

## Reading Order

1. **Read this header** (you are here)
2. **Skim all three lock files** - Understand what you cannot change
3. **Read the spec thoroughly** - Understand what you must change
4. **Reference locks during implementation** - Get exact colors/copy/patterns
5. **Run verification checklist** - At end of spec (if present)

## Critical Constraints (Never Violate)

1. **Color system**: Gray-900 (#111827) is primary - NOT blue, never blue
2. **Typography**: Inter font family only (weights 300-600)
3. **Copy**: Use exact text from LOCK-content.md - never invent or paraphrase
4. **Functionality**: Preserve existing interactive features (forms, hovers, expansions)
5. **Architecture**: Follow Astro + React island patterns from LOCK-architecture.md

## Implementation Approach

- **Work sequentially** if spec has numbered steps
- **Change only what's specified** - don't redesign unmentioned sections
- **Reference lock files for details** - spec says "use primary color" = gray-900 from design lock
- **Preserve existing code** - if spec doesn't mention a component, don't touch it

## Surface Ambiguities (Ask, Don't Guess)

**Ask user for clarification if:**
- Spec instruction conflicts with lock file content
- Copy/color/component not found in any lock file
- Spec references non-existent file or section
- Implementation approach unclear or has multiple interpretations
- Verification checklist item fails and fix is ambiguous

**Use placeholders temporarily if:**
- Content clearly missing: `[PLACEHOLDER: description of what goes here]`
- Asset not provided: `[PLACEHOLDER: team-photo.jpg - awaiting upload]`
- Then flag for user review

## File Hierarchy (Priority Order)

When sources conflict:
1. User's verbal instruction (if present in task description)
2. Lock files (LOCK-*)
3. Spec file (SPEC-*)

Lock files define "what cannot change" - spec defines "what must change within those constraints"

## After Implementation

**Required steps:**

1. **Note items for user review**:
   - Any placeholders added (with descriptions of what's needed)
   - Ambiguities encountered (explain what was unclear)
   - Verification checklist results (pass/fail/warning status)
   - Any deviations from spec (with reasoning)
   - Conflicts between spec and lock files (if any)