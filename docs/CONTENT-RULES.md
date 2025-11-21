# Content Preservation Rules 

## ⚠️ CRITICAL INSTRUCTION FOR ALL IMPLEMENTATIONS

When implementing features during current phase:

### DO:
✅ Preserve any existing text content in components you're modifying
✅ Keep existing headlines, descriptions, button text as-is
✅ Maintain existing feature lists without modification
✅ Copy text verbatim when porting components

### DO NOT:
❌ Invent new headlines or taglines
❌ Rewrite or paraphrase existing copy
❌ Add features to lists that don't exist
❌ Change button text or CTAs
❌ "Improve" or "enhance" any copy
❌ Create placeholder text like "Lorem ipsum" or "Coming soon"

---

## If Content Is Missing

**Scenario**: You need to implement a component but the content doesn't exist yet.

**Action**: 
1. STOP implementation
2. Ask: "This component needs [specific content]. What should the text be?"
3. Wait for content to be provided
4. Then implement with provided content

**Never** invent content to "fill the gap."

---

## Examples

### ❌ BAD (Inventing Content)
```
User: "Add service cards to Services section"
Claude Code: [creates cards with invented services like "Cloud Solutions", "Digital Transformation", etc.]
```

### ✅ GOOD (Preserving/Asking)
```
User: "Add service cards to Services section"
Claude Code: "I can see 3 services in the original: LLM Applications, Data Pipelines, System Workflows. Should I use these exact services with their existing descriptions?"
```

### ❌ BAD (Rewriting)
```
Original: "Transform Your Business with Intelligent Automation"
Claude Code changes to: "Revolutionize Your Workflow with AI-Powered Solutions"
```

### ✅ GOOD (Preserving)
```
Original: "Transform Your Business with Intelligent Automation"
Claude Code keeps: "Transform Your Business with Intelligent Automation"
```

---

## Phase 2 vs Phase 3

**Phase 2 (Current)**: Restoration of functionality
- Goal: Make interactive features work
- Content: Preserve what exists, don't modify
- Changes: Only technical (React islands, hydration, animations)

**Phase 3 (Future)**: Layout redesign + content refinement
- Goal: Implement new design and messaging
- Content: Will be actively revised and improved
- Changes: Both design AND copy

---

## Why This Matters

We're focused on **making things work**, not making things better. Content improvements happen in another phase when:
- New layout is designed
- New messaging is crafted
- Content strategy is finalized
- Then everything gets locked in CONTENT_LOCK.md

For now: **Preserve, don't create. Copy, don't compose.**

---

## Summary

**Current Rule**: If text exists, keep it. If text is missing, ask for it. Never invent it.

**This rule expires when Phase 3 begins** - at that point, content will be actively revised.
