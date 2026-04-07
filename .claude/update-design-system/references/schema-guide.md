# Schema Guide — 디자인 시스템 스키마 가이드

# Skill: Update Design System

**Purpose**: Add or update component documentation, tokens, or patterns in the design system source files.
**Read first**: `instruction.md` in this directory.

---

## Steps

### Step 1 — Identify what changed
Determine the scope of the update:
- New component added to the codebase → update `components.json`
- New design token introduced → update `tokens.json`
- New composition pattern identified → update `patterns.json`
- New naming or structural convention → update `conventions.json`
- Multiple files may need updating for a single feature

### Step 2 — Read the relevant schema
Read the schema file for the JSON you are about to modify:

| Target file | Schema |
|-------------|--------|
| `src/components.json` | `schemas/components.schema.json` |
| `src/tokens.json` | `schemas/tokens.schema.json` |
| `src/patterns.json` | `schemas/patterns.schema.json` |
| `src/conventions.json` | `schemas/conventions.schema.json` |

Understand all required fields before writing any JSON.

### Step 3 — Read the current source file
Read the full `src/*.json` file you are modifying.
Understand the existing structure, categories, and field conventions.
Find the correct location to insert the new entry (alphabetical within category, or logical grouping).

### Step 4 — Write the update
Add or modify the entry following the schema exactly.
See `instruction.md` for required fields per file type.

For `components.json` — new component entry must include:
- `name`, `path`, `description`, `formikRequired`
- `props[]` with all props fully documented
- `states[]` covering all interactive states
- `accessibility{}` with role, ariaLabel, keyboardInteraction, screenReaderAnnouncement
- `dos[]`, `donts[]`
- `example` — a complete, self-contained, copy-pasteable JSX snippet

For `tokens.json` — new token entry must include:
- `name`, `token` (full theme path), `hex`, `usage`

For `patterns.json` — new pattern entry must include:
- `id`, `name`, `description`, `when`, `code`

### Step 5 — Validate JSON syntax
Verify the file is valid JSON before running any scripts.
Check for: trailing commas, mismatched braces, unescaped characters in strings.

### Step 6 — Run schema validation
```bash
cd design-system
npm run validate
```
Fix any schema errors reported before proceeding.
All required fields must be present. No extra fields outside the schema.

### Step 7 — Regenerate docs
```bash
npm run generate
```
This regenerates all `docs/*.md` files from the updated `src/*.json` files.
Verify the generated doc reflects your changes correctly.

### Step 8 — Run sync check
```bash
npm run sync-check
```
This verifies that components listed in `components.json` actually exist at the declared `path` in the codebase.
Fix any path mismatches.

### Step 9 — Verify the example compiles
If you wrote or updated an `example` code snippet in `components.json` or `patterns.json`, manually verify it is syntactically valid TypeScript/JSX.
The example must be self-contained and runnable without modification.

### Step 10 — Confirm completeness
- [ ] Schema validation passes with zero errors
- [ ] Docs regenerated successfully
- [ ] Sync check passes
- [ ] Example snippet is valid and copy-pasteable
- [ ] No existing entries were accidentally modified

---
# 도메인 지식

# Domain Knowledge: Update Design System

## File Purposes

| File | What it documents |
|------|-------------------|
| `src/components.json` | Every reusable component: props, states, accessibility, usage examples |
| `src/tokens.json` | Design tokens: colors, spacing, typography, breakpoints, animation |
| `src/patterns.json` | Composition patterns: how components combine into features |
| `src/conventions.json` | Naming rules, file structure, import order, build commands |

Changes to these files are the authoritative source of truth for all agents building UI.
An undocumented component is invisible to agents — they will re-invent it or misuse it.

## components.json — Required Fields

Every component entry must satisfy this structure:

```json
{
  "name": "MCComponentName",
  "path": "form/v1/input/MCComponentName.tsx",
  "description": "One sentence describing the component's purpose.",
  "formikRequired": false,
  "props": [
    {
      "name": "propName",
      "type": "string",
      "required": true,
      "description": "What this prop controls."
    },
    {
      "name": "optionalProp",
      "type": "boolean",
      "required": false,
      "default": "false",
      "description": "What this prop controls when set."
    }
  ],
  "states": [
    { "name": "default",  "description": "Normal resting state." },
    { "name": "hover",    "description": "Mouse over the component." },
    { "name": "focus",    "description": "Keyboard focus via Tab." },
    { "name": "disabled", "description": "Cannot be interacted with." },
    { "name": "error",    "description": "Validation error state." }
  ],
  "accessibility": {
    "role": "button",
    "ariaLabel": "Provided via the label prop; falls back to aria-label.",
    "keyboardInteraction": [
      "Tab: Move focus to the component.",
      "Enter / Space: Trigger the primary action."
    ],
    "screenReaderAnnouncement": "Announces: {label}, button.",
    "notes": ["Any additional a11y implementation notes."]
  },
  "dos": [
    "Always provide a label prop for accessibility.",
    "Use the contained variant for the primary action on a page."
  ],
  "donts": [
    "Don't use more than one contained button per form.",
    "Don't hardcode onClick handlers — pass callbacks from the container."
  ],
  "example": "import MCComponentName from '@msm-portal/common/component/...';\n\n<MCComponentName\n  label=\"Save\"\n  onClick={handleSave}\n/>"
}
```

### Field Rules

- `name` — must match the exported TypeScript identifier exactly
- `path` — relative to `src/common/component/`; must be the actual file path
- `formikRequired` — `true` only if the component calls `useField(name)` internally
- `props[].type` — use TypeScript syntax: `string`, `boolean`, `ReactNode`, `'create' | 'edit'`
- `props[].required` — `true` means the component throws or misbehaves without it
- `props[].default` — include only when the component has a meaningful default
- `states[]` — include every interactive state the component renders differently
- `accessibility.role` — use the ARIA role string; `"implicit"` if HTML semantics are sufficient
- `example` — must be a complete, importable snippet; use `\n` for line breaks in JSON strings

## tokens.json — Required Fields

Color token entry:
```json
{
  "name": "content.primary",
  "token": "theme.mcui.palette.content.primary",
  "hex": "#1a1a1a",
  "usage": "Primary body text, headings, labels."
}
```

Spacing entry:
```json
{
  "multiplier": 2,
  "px": "16px",
  "usage": "Standard padding inside cards and panels.",
  "category": "component"
}
```

Typography entry:
```json
{
  "name": "BODY_1_BODY",
  "token": "theme.mcui.typography.BODY_1_BODY",
  "usage": "Standard body text, descriptions, form field values."
}
```

## patterns.json — Required Fields

```json
{
  "id": "kebab-case-id",
  "name": "Human Readable Pattern Name",
  "description": "One or two sentences on what this pattern achieves.",
  "when": "Plain language description of when to use this pattern.",
  "code": "// Complete, copy-pasteable code example\nimport { ... } from '...';\n\nexport default function Example() {\n  return <Component />;\n}"
}
```

- `id` — kebab-case, unique across all patterns
- `code` — the full example, not a fragment; must be runnable without modification
- `when` — start with an action word: "Building a...", "Creating a...", "When the user needs..."

## When to Add vs Update

**Add a new entry** when:
- A component that didn't exist before is now in the codebase
- A new composition pattern has been established by usage
- A new design token is in the theme

**Update an existing entry** when:
- A component's props changed (added, removed, or renamed)
- A component's accessibility implementation improved
- An existing pattern has a better code example
- A `donts[]` item is discovered from a real mistake

**Never** delete entries unless the component was removed from the codebase.
Deprecated components should be marked in `description` as deprecated, not removed.

## JSON Formatting Rules

- 2-space indentation throughout
- No trailing commas
- Strings use double quotes
- Arrays with 3+ items are multi-line, one item per line
- The `code` field uses `\n` for newlines and `\"` for quotes within the JSON string

## Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run validate` | Validate all `src/*.json` against their schemas |
| `npm run generate` | Regenerate `docs/*.md` from `src/*.json` |
| `npm run sync-check` | Verify component paths exist in the codebase |
| `npm run generate:css` | Generate `dist/tokens.css` with CSS variables |

Always run `validate` → `generate` → `sync-check` in that order after any change.
