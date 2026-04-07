# Review Checklist — 상세 검증 절차

# Skill: Review Component

**Purpose**: Systematically review an existing component or feature for correctness, quality, and compliance.
**Read first**: `instruction.md` in this directory for the full domain knowledge behind each check.

---

## Steps

### Step 1 — Read the source file
Read the component file being reviewed.
If it has a `styledComponents.tsx`, read that too.
If it has a container, read the container as well.

### Step 2 — Check architecture compliance
Verify the 3-layer separation:
- [ ] Page file contains zero hooks, zero logic — only renders the Container
- [ ] Container owns all hooks, data fetching, navigation, and i18n
- [ ] Component is a pure UI function — no hooks that cause side effects, no navigation

### Step 3 — Check token usage (no hardcoded values)
Scan for violations:
- [ ] No hex color codes (e.g., `#ffffff`, `#333`) in styled components or inline styles
- [ ] No hardcoded px spacing values outside of `border-radius: 2px` or `border-radius: 4px`
- [ ] No hardcoded font sizes or font weights
- [ ] No inline `style={{}}` attributes anywhere

Allowed: `border-radius: 2px`, `border-radius: 4px`, `1px solid` for borders when the color uses a theme token.

### Step 4 — Check naming conventions
- [ ] All exported components use `MC` prefix
- [ ] All internal styled components use `SC` prefix
- [ ] All TypeScript types and interfaces use `MT` prefix
- [ ] All enums use `ME` prefix
- [ ] All custom hooks use `use` prefix (camelCase)
- [ ] Transient styled-component props use `$` prefix

### Step 5 — Check styled component rules
- [ ] Styled components that must not forward props to DOM use `$` prefix on those props
- [ ] No styled components are exported unless shared across multiple components
- [ ] If more than 3 styled components exist in a single file, they live in `styledComponents.tsx`

### Step 6 — Check form compliance (if the component contains form inputs)
- [ ] All form inputs are inside a `<Formik>` context
- [ ] `MCFormTextInput` is used (not `MCSingleTextInput`) for form fields
- [ ] Every required field has a matching Yup `.required()` in the schema
- [ ] `required={false}` is explicit on optional fields (not omitted)
- [ ] Error handling uses `useInAppAlert().fireCollapsibleError()`
- [ ] Success handling uses `useInAppAlert().fireSuccess()`

### Step 7 — Check i18n compliance
- [ ] All user-facing strings use `t()` from `useTranslation` — no string literals in JSX
- [ ] The correct namespace is used (`container.{entity}.{action}` or `form.{entity}`)
- [ ] Pluralization and interpolation use `t()` with variables, not string concatenation

### Step 8 — Check accessibility
- [ ] Interactive elements are keyboard reachable via Tab
- [ ] Buttons and interactive controls respond to Enter/Space
- [ ] Focus ring is visible — no `outline: none` without replacement indicator
- [ ] All form fields have associated labels via `fieldLabel` prop or `aria-label`
- [ ] Dialogs trap focus and return focus to trigger on close
- [ ] Touch targets are at least 44×44px
- [ ] Color is not the only way to convey state (paired with text or icon)

### Step 9 — Check route registration (if a new page was added)
- [ ] `MERouteKey` enum has the new key
- [ ] `routeTemplate.tsx` has the route entry with `path`, `key`, and `handle.crumb`
- [ ] `route.tsx` maps the key to a page component with `allowedRoles`

### Step 10 — Check loading and error states
- [ ] Loading states use `<MCCircularLoader fillParent />` (full page) or `<MCLoader />` (inline)
- [ ] Query errors handled in `useEffect` with `fireCollapsibleError` + navigation away
- [ ] Mutation errors handled in `catch` with `fireCollapsibleError` (stay on page)
- [ ] `setSubmitting(false)` called in `finally` block for form submissions

### Step 11 — Check animation compliance (if animations are present)
- [ ] Animation durations use design token values (`theme.mcui.animation.durations.*`)
- [ ] Easing uses design token values (`theme.mcui.animation.easings.*`)
- [ ] `@media (prefers-reduced-motion: reduce)` disables all animations

### Step 12 — Check import order
Imports must follow this order:
1. React and react-related (`react`, `react-router-dom`)
2. Third-party libraries (`styled-components`, `formik`, `yup`)
3. Moloco UI library (`@moloco/moloco-cloud-react-ui`)
4. Internal portal imports (`@msm-portal/*`)
5. Relative imports (`./`, `../`)

### Step 13 — Compile findings
Categorize each finding:
- **Blocker** — must fix before ship (hardcoded tokens, missing i18n, broken a11y)
- **Warning** — should fix soon (naming inconsistency, missing hint text)
- **Suggestion** — nice to have (additional edge case handling)

### Step 14 — Report
Output a structured report:
```
## Review: {ComponentName}

### Blockers
- [file:line] description of issue and how to fix

### Warnings
- [file:line] description of issue

### Suggestions
- description

### Passed Checks
- List of checks that passed cleanly
```

---
# 도메인 지식

# Domain Knowledge: Review Component

## The 16-Point Self-Validation Checklist

This is the authoritative compliance list. Every item is a hard requirement unless noted.

1. **Colors** — All colors use `theme.mcui.palette.*`. Zero hex codes in styled components or JSX.
2. **Spacing** — All spacing uses `theme.mcui.spacing()`. Zero hardcoded px values (exception: `border-radius: 2px` or `4px`).
3. **Typography** — All typography uses `theme.mcui.typography.*`. Zero hardcoded font sizes or font weights.
4. **SC prefix** — All styled components defined within a file use the `SC` prefix.
5. **Transient props** — All styled-component props that must not reach the DOM use `$` prefix.
6. **Formik context** — All form field components are inside `<Formik>` context and have the `name` prop.
7. **Naming prefixes** — Components use `MC`, types use `MT`, styled use `SC`, enums use `ME`, hooks use `use`.
8. **Import order** — React → 3rd party → @moloco → @msm-portal → relative.
9. **No inline styles** — Zero `style={{}}` attributes anywhere in the component tree.
10. **Route registration** — All 3 locations updated together (MERouteKey + routeTemplate + route.tsx).
11. **i18n** — All user-facing strings use `useTranslation`. Zero string literals in JSX output.
12. **Loading states** — `MCCircularLoader fillParent` for full-page, `MCLoader` for inline.
13. **Error handling** — `useInAppAlert().fireCollapsibleError()` for all errors; never raw `alert()`.
14. **3-layer architecture** — Page → Container → Component. Each layer contains only what belongs there.
15. **Animations** — Duration and easing from design tokens. `prefers-reduced-motion` respected.
16. **Touch targets** — All interactive elements are at least 44×44px.

## Common Mistakes and How to Spot Them

### Hardcoded hex colors
Look for: `#[0-9a-fA-F]{3,6}` in styled component template literals.
Fix: Replace with `props.theme.mcui.palette.*` equivalent from `tokens.json`.

### Hardcoded spacing
Look for: raw numbers followed by `px` in styled component templates (e.g., `padding: 16px`, `margin: 8px`).
Fix: Replace with `${(props) => props.theme.mcui.spacing(N)}`.

### Inline styles
Look for: `style={{` in JSX.
Fix: Extract to a `SC`-prefixed styled component.

### Missing fieldLabel
Look for: `MCFormTextInput` without a `fieldLabel` prop.
Fix: Add `fieldLabel` — required for accessibility (associates label with input).

### Skipped heading levels
Look for: an `H_2` typography token directly followed by `BODY_1_BODY` with no `H_3` in between, when the visual hierarchy requires a sub-heading.
Fix: Use `H_3` for panel-level titles, `H_2` for page-level sections.

### Navigation in component
Look for: `useNavigate` imported in a file under `component/` directory.
Fix: Move navigation to the container; pass callback as a prop.

### Data fetching in component
Look for: `trpc.`, `useQuery`, `useMutation`, or `fetch(` in a file under `component/` directory.
Fix: Move to container; pass data as prop.

### Missing `$` prefix on transient props
Look for: styled component props that are not standard HTML attributes and lack the `$` prefix.
React will warn: "Unknown prop `isActive` on <div> tag."
Fix: Rename to `$isActive` in both the styled component definition and its usage.

### String literals in JSX
Look for: quoted English text directly inside JSX (e.g., `<h1>Campaign List</h1>`).
Fix: Replace with `t('key')` and add the key to the i18n resource file.

### setSubmitting not reset on error
Look for: `async (values, { setSubmitting }) => { ... }` where `setSubmitting(false)` is only in the success path.
Fix: Wrap mutation in try/catch/finally; call `setSubmitting(false)` in `finally`.

## Token Verification Technique

To check for hardcoded values in a file without running grep yourself, scan for these patterns:
- Any 3 or 6 character hex string preceded by `#`
- Any integer followed by `px` in a template literal (excluding `border-radius`)
- Any numeric `font-size` or `font-weight` value

## A11y Verification Checklist

| Element type | What to check |
|-------------|---------------|
| Button | Has visible label (text or `aria-label`); responds to Enter and Space |
| Icon button | Has `aria-label`; icon has `aria-hidden="true"` |
| Form input | Has associated label via `fieldLabel` prop or `htmlFor`/`id` pair |
| Dialog | Traps focus; `role="dialog"`; `aria-labelledby` pointing to title |
| Error message | Announced via `role="alert"` or `aria-live="assertive"` |
| Loading spinner | Has `aria-label="Loading"` or equivalent |
| Table | Has `<caption>` or `aria-label`; `th` cells have `scope` attribute |
| Link | Has descriptive text; not just "click here" |

## Severity Classification

**Blocker** — ship-stopping issues:
- Any hardcoded token value (color, spacing, typography)
- Any user-facing string not using i18n
- Any form input outside Formik context
- Broken keyboard accessibility on interactive elements
- Missing route registration locations

**Warning** — should fix in the same PR when possible:
- Missing `fieldLabel` on form inputs (a11y risk)
- Incorrect naming prefix (MC/MT/SC/ME/use)
- Navigation or data fetching in component layer
- Missing loading state for async operations

**Suggestion** — improvements worth noting:
- Missing hint text on complex fields
- Could benefit from memoization (`useMemo`/`useCallback`)
- Additional edge case handling (empty state, single item)
- More descriptive i18n key names
