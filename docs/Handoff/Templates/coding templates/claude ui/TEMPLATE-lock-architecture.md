

# ARCHITECTURE LOCK FILE
## [Project Name] - Tech Stack & Structural Rules

**Status**: [âœ… LOCKED / ðŸ“ IN PROGRESS / ðŸ“‹ DRAFT]
**Last Updated**: [Date]
**Purpose**: Define immutable technical architecture decisions

---

## âš ï¸ CRITICAL: TECH STACK IS FIXED

**Framework**: [Framework Name + Version]
**Styling**: [CSS Approach/Framework]
**Interactive Components**: [JS Framework/Library] ([usage context])
**Deployment**: [Platform]
**Analytics**: [Tool or TBD (Phase X)]

**These choices are locked.** Do not propose migrations, alternative frameworks, or different approaches unless explicitly requested by user.

---

## COMPONENT ARCHITECTURE RULES

### When to Use [Primary Component Type]
- [Use case 1]
- [Use case 2]
- [Use case 3]
- [Use case 4]

### When to Use [Secondary Component Type]
- [Use case context]:
  - [Specific use case 1]
  - [Specific use case 2]
  - [Specific use case 3]
  - [Specific use case 4]

**Rule**: [General principle for component choice]

### Component Integration Pattern
```[file-extension]
[Code example showing how components integrate]
[Example of wrapper pattern]
[Example of integration syntax]
```

**Never**: [Anti-pattern 1]
**Always**: [Best practice 1]

---

## STYLING RULES

### [Styling Approach Name]
- [Rule 1]
- [Rule 2]
- [Rule 3]
- [Rule 4 with reference to another lock file]

### Custom [Styling] Exceptions
Only create custom [styling] for:
- [Exception 1]
- [Exception 2]
- [Exception 3]

**Location**: `[path]` if custom [styling] is required

### Responsive Design Pattern
```[file-extension]
[Code example showing responsive pattern]
```

**Always**: [Responsive principle]

---

## FILE ORGANIZATION

```
[Root directory]/
â”œâ”€â”€ [directory]/          # [Description]
â”‚   â”œâ”€â”€ [File Example]
â”‚   â”œâ”€â”€ [File Example]  # [Note about file type]
â”‚   â””â”€â”€ [File Example]
â”œâ”€â”€ [directory]/             # [Description]
â”‚   â””â”€â”€ [File Example]
â”œâ”€â”€ [directory]/               # [Description]
â”‚   â”œâ”€â”€ [File Example]
â”‚   â”œâ”€â”€ [File Example]
â”‚   â””â”€â”€ [File Example]
â”œâ”€â”€ [directory]/              # [Description if needed]
â”‚   â””â”€â”€ [File Example]
â””â”€â”€ [directory]/             # [Description]
    â””â”€â”€ [subdirectory]/

[Additional root directory]/                 # [Description]
â”œâ”€â”€ [subdirectory]/
â””â”€â”€ [subdirectory]/
```

**Do NOT**:
- [Anti-pattern 1]
- [Anti-pattern 2]
- [Anti-pattern 3]

---

## BUILD & DEPLOYMENT RULES

### Build Commands
```bash
[command 1]      # [Description]
[command 2]    # [Description]
[command 3]  # [Description]
```

### Deployment
- **Platform**: [Platform Name] ([note about configuration])
- **Build command**: `[build command]`
- **Publish directory**: `[output directory]`
- **[Runtime] version**: [version] or higher

### Environment Variables
Location: `[file]` (not committed to git)
Example:
```
[VARIABLE_NAME]=[value]
[VARIABLE_NAME]=[value]
```

**Naming convention**: `[PREFIX]` for [accessibility context]

---

## INTERACTIVE FEATURES IMPLEMENTATION

### [Feature Type 1]
- [Implementation approach 1]
- [Implementation approach 2]
- [Implementation approach 3]
- [Library policy]

### [Feature Type 2]
- [Implementation approach 1]
- [Implementation approach 2 with condition]
- [Implementation approach 3]

### [Feature Type 3]
- [Implementation approach 1]
- [Component pattern reference]

---

## PERFORMANCE RULES

### [Optimization Category 1]
- [Rule 1]
- [Rule 2]
- [Rule 3]

### [Optimization Category 2]
- [Rule 1]
- [Rule 2 with tool/method reference]
- [Rule 3]

### [Optimization Category 3]
- [Rule 1]
- [Rule 2]
- [Rule 3]

---

## DO NOT CHANGE WITHOUT APPROVAL

- âŒ [Major architectural change 1]
- âŒ [Major architectural change 2]
- âŒ [Major architectural change 3]
- âŒ [Major architectural change 4]
- âŒ [Major architectural change 5]

---

## DEPENDENCIES (LOCKED)

### Core Dependencies
```json
{
  "[package]": "[version]",
  "[package]": "[version]",
  "[package]": "[version]"
}
```

### Allowed Additional Packages (with approval)
- [Package name] ([usage context]) - [approval status]
- [Package name] ([usage context]) - [approval status/condition]
- [Package name] ([usage context]) - [approval status/condition]

### Prohibited Without Discussion
- [Package] ([reason])
- [Package] ([reason])
- [Package] ([reason])
- [Large/specific packages] ([reason/condition])

---

## VERSION CONTROL RULES

### Git Workflow
- **[Role] controls all commits** ([method])
- Never mention "[action]" in implementation instructions
- [Strategy]: TBD by [role]

### What to Commit
- [File category] (`[path/pattern]`)
- [File category] (`[specific files]`)
- [File category] (`[specific files]`)

### What NOT to Commit
- `[directory/pattern]`
- `[directory/pattern]` ([description])
- `[file pattern]` files
- `[file pattern]`, [other patterns]

---

## EXCEPTION PROCESS

If architectural changes are needed:
1. [Action 1]
2. [Action 2]
3. [Action 3]
4. [Action 4]
5. [Action 5 referencing this file]

**Never assume architectural changes are acceptable.**

---

**Document Version**: [version]  
**Last Updated**: [Date]  
**Approved By**: [Name/Role]