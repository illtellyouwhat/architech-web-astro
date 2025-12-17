

# PHASE [X] IMPLEMENTATION SPEC
## [Feature/Component Name] - [Brief Description]

**Date**: [Date]  
**Phase**: Phase [X] - [Phase Name]  
**Scope**: [High-level description of what this phase covers]

---

## BEFORE YOU START

1. Read `/mnt/project/PROMPT_HEADER.md` completely
2. Skim all three lock files to understand constraints
3. Read this spec thoroughly
4. Reference lock files during implementation for exact copy/colors/patterns

---

## OVERVIEW

This phase [describes what is being implemented in 2-3 sentences].

**All copy comes from LOCK-content.md** - reference it for exact text.

---

## 1. [MAJOR FEATURE/COMPONENT NAME]

### File: `/path/to/file.ext` (or similar)

### 1.1 [Specific Sub-Feature]

**Current:**
[Describe current state if modifying existing feature]

**New:**
[Describe what it should become]

**Implementation requirements:**
- [Requirement 1 with specific detail]
- [Requirement 2 with specific detail]
- [Requirement 3 with specific detail]
- [Requirement 4 with specific detail]

**[Technical detail if needed - e.g., Animation spec from DESIGN-SYSTEM-LOCK.md]:**
- [Detail 1]
- [Detail 2]
- [Detail 3]

**Example implementation approach:**
```[language]
// [Comment explaining approach]
[Code example showing pattern]

// [Comment explaining next part]
[More code]
```

**[Another technical aspect - e.g., Accessibility]:**
```[language]
[Code showing accessibility implementation]
```

### 1.2 [Next Sub-Feature]

**New [element name] text (from LOCK-content.md):**
```
[Exact copy from lock file]
```

**Behavior:**
- [Behavior specification 1]
- [Behavior specification 2]

**Implementation approach:**
```[language]
[Code example]
```

### 1.3 [Another Sub-Feature]

**Changes:**
1. [Change 1 with specificity]
2. [Change 2 with specificity]

**Current:**
[Show what exists]

**Updated:**
[Show what it becomes]

**Implementation:**
```[language]
[Code example]
```

**Design notes:**
- [Note 1]
- [Note 2]

---

## 2. [NEXT MAJOR FEATURE/COMPONENT]

### File: Create new component `/path/to/new/file.ext`

### 2.1 [Sub-feature Name]

**Location:** [Where on page/in app]

**Content from LOCK-content.md:**
- [Content specification 1]
- [Content specification 2]

### 2.2 [Technical Specifications]

**[Specification category - e.g., Logo Specifications]:**

**User will provide:**
- [Asset 1 with specifications]
- [Asset 2 with specifications]
- Location: `[path]`
- Naming convention: [pattern]

**CRITICAL - [Important constraint]:**
[Detailed explanation of constraint and why it matters]

**Display requirements:**
- [Requirement 1 with technical detail]
- [Requirement 2 with technical detail]
- [Requirement 3 with technical detail]

**Example implementation:**
```[language]
[Complete code example showing the pattern]
```

**Key [technical aspect] classes:**
- `[class-name]` = [what it does] ([technical reason])
- `[class-name]` = [what it does]
- `[class-name]` = [what it does]

**Note:** [Clarification about when/how feature works]

---

## 3. [ANOTHER MAJOR FEATURE]

### File: `/path/to/file.ext` (or similar)

### 3.1 [Sub-feature]

**Replace current [element] with (from LOCK-content.md):**
```
[Exact copy]
```

### 3.2 [Component Changes] - Replace Completely

**Current:** [Description of current state]
**New:** [Description of new state]

**Remove [old functionality]** - [explanation]

**New [element] content (from LOCK-content.md):**

**[Component] 1: [Name]**
```
Title: "[Title]"
Description: "[Description]"
```

**[Component] 2: [Name]**
```
Title: "[Title]"
Description: "[Description]"
```

**[Component] 3: [Name]**
```
Title: "[Title]"
Description: "[Description]"
```

**Icon recommendations (use [icon system]):**
- [Component 1]: `[icon-name]` or `[alternative]`
- [Component 2]: `[icon-name]` or `[alternative]`
- [Component 3]: `[icon-name]` or `[alternative]`

**Design notes:**
- [Note about layout]
- [Note about interaction]
- [Note about responsive behavior]

---

## 4. [NEXT MAJOR FEATURE]

### File: `/path/to/file.ext` (or similar)

### 4.1 [Change Description]

**Current:**
- [Current element description]

**New:**
- [New element 1]
- [New element 2]

**[Element 1 Name]**
```
[Content specification from LOCK-content.md]
```

**[Element 2 Name]**
```
[Content specification from LOCK-content.md]
```

**Implementation notes:**
- [Note 1]
- [Note 2]
- [Note 3]

**Example structure:**
```[language]
[Code example showing full implementation]
```

### 4.2 Remove [Element Name]

**Action:** [What to delete]

**Reason:** [Why we're removing it]

---

## 5. INTEGRATION CHECKLIST

### 5.1 [Page/Component] Integration

Ensure the following components are included in [parent component] (`/path/to/parent.ext`):

```[language]
[Code showing how components integrate]
```

### 5.2 Verify [Structural Element] Order

1. [Element 1] ([state description])
2. [Element 2] ([state description])
3. **[Element 3] (NEW)**
4. [Element 4] ([state description])
5. [Element 5] ([state description])
6. [Element 6] ([state description])

---

## 6. TESTING CHECKLIST

After implementation, verify:

### [Feature Category 1]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]

### [Feature Category 2]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]

### [Feature Category 3]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]

### [Feature Category 4]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]
- [ ] [Specific test with expected result]

### Accessibility
- [ ] [Accessibility requirement test]
- [ ] [Accessibility requirement test]
- [ ] [Accessibility requirement test]

### Performance
- [ ] [Performance test]
- [ ] [Performance test]
- [ ] [Performance test]

---

## 7. NOTES FOR IMPLEMENTER

### [Technical Decision Category]
If [condition or uncertainty exists], [guidance on approach].

**[Technical approach options]:**
[Explanation of options and recommendation]

### [Asset Handling Category]
All [asset type] will be provided by user at `[path]` with naming pattern:
- `[pattern-example-1]`
- `[pattern-example-2]`

Use the exact array shown in section [X.X] - all paths and [attributes] are ready to use.

### Existing Functionality
**Preserve these existing features:**
- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]
- [Feature 5]

**Only change what's specified in this spec.**

---

## 8. REFERENCE FILES

**All content:** `/mnt/project/CONTENT-LOCK.md`
**All styling:** `/mnt/project/DESIGN-SYSTEM-LOCK.md`
**Architecture rules:** `/mnt/project/LOCK-architecture.md`

If any instruction in this spec conflicts with lock files, **stop and ask for clarification** rather than guessing.

---

**End of Phase [X] Spec**