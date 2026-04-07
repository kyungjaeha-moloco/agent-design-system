# Agent Design System — MSM Portal

AI-readable design system for MSM Portal frontend development. 17 JSON files that define tokens, components, patterns, and conventions for agent-driven UI code generation.

> **Related:** [inspect](https://github.com/kyungjaeha-moloco/inspect) — Product Improvement Agent that uses this design system to power Chrome Extension-based UI modifications.

## What This Is

A structured knowledge base that AI agents (Claude Code, etc.) read before writing UI code. Instead of relying on human memory of design guidelines, agents consult these JSON files to ensure every generated component follows the exact same rules.

## Files

### Core Design System (`src/`)

| File | Purpose |
|------|---------|
| `tokens.json` | Colors, spacing, typography, breakpoints, animation, dark mode |
| `components.json` | Available components, props, icon catalog |
| `patterns.json` | 17 composition patterns (list-page, form, edit-page, etc.) |
| `conventions.json` | Naming, file structure, import order, code style |
| `api-ui-contracts.json` | Entity proto→model→UI mapping, API endpoints |
| `component-behaviors.json` | Semantic actions and data flow |
| `state-machines.json` | Component state transitions |
| `semantic-palette.json` | Theme palette → hex mapping for light/dark |
| `code-examples.json` | Real code examples per page pattern |
| `error-patterns.json` | 22 common errors with detection + fix strategies |
| `component-dependencies.json` | Provider/context requirements per component |
| `generation-protocol.json` | 5-phase agent protocol for UI generation |
| `validation-runner.json` | 16 design system rules for automated checking |
| `ux-criteria.json` | 19 UX evaluation criteria |
| `visual-inspection.json` | Screenshot-based visual validation rules |
| `auto-fix-loop.json` | Auto-fix strategies for validation failures |
| `index.json` | Task loading guide and decision trees |

### Agent Harness (`.claude/`)

| Agent | Role |
|-------|------|
| `builder` | Design system analysis + 3-layer code generation + execution loop |
| `reviewer` | Independent validation + UX evaluation + auto-fix |
| `test-writer` | Vitest + RTL tests, MSW mock setup |
| `ds-maintainer` | Design system JSON updates + schema validation |

### Skills (`.claude/skills/`)

| Skill | Purpose |
|-------|---------|
| `build-feature` | Page/form/component generation (5-Phase protocol) |
| `review-code` | 29-point validation + 19 UX criteria + visual inspection |
| `write-tests` | Vitest + RTL + MSW test generation |
| `update-design-system` | JSON file updates + validation pipeline |
| `msm-orchestrator` | Agent team orchestration |

## Usage

Reference in your `CLAUDE.md`:
```
Before writing ANY UI code, read:
1. design-system/src/tokens.json
2. design-system/src/components.json
3. design-system/src/patterns.json
4. design-system/src/conventions.json
```

## Tools

```bash
# Validate generated code against design system rules
cd design-system && npx tsx scripts/validate.ts <path>

# View design system in browser
cd design-system && npm start
```
