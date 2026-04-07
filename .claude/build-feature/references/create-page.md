# Create Page — 상세 워크플로우

# Skill: Create Page

**Purpose**: Build a complete page following the Page → Container → Component architecture.
**Read first**: `instruction.md` in this directory.

---

## Page Type Workflows

Choose the workflow matching the page type you are building:
- [List page](#list-page)
- [Detail page](#detail-page)
- [Create page](#create-page) — see `create-form/SKILL.md`
- [Edit page](#edit-page) — see `create-form/SKILL.md`

---

## List Page

### Step 1 — Read the list-page pattern
Read `design-system/src/patterns.json`, locate the `list-page` entry.
Copy the pattern as your starting point.

### Step 2 — Create the Component
Location: `src/apps/{client}/component/{entity}/list/MC{Entity}List.tsx`

Props the component receives from the container:
- `items: MT{Entity}[]`
- `isLoading: boolean`
- `tabs: MTBarTab[]`
- `rightAccessory: ReactNode`
- `title: string`
- Column definitions for `MCReportTable`

The component renders:
```tsx
<MCContentLayout title={title} rightAccessory={rightAccessory} showBreadcrumb>
  <MCBarTabs tabs={tabs} />
  {isLoading ? <MCCircularLoader fillParent /> : <MCReportTable ... />}
</MCContentLayout>
```

### Step 3 — Create the Container
Location: `src/apps/{client}/container/{entity}/list/MC{Entity}ListContainer.tsx`

Container handles:
- `useTranslation` for all labels
- `useEntityParam` for route params
- `useNavigate` for the create button
- `useSearchParams` for active tab state
- Data fetching hook call
- `useMemo` for column definitions
- `useCallback` for action handlers
- Renders `<MC{Entity}List>` with all computed props

### Step 4 — Create the Page
Location: `src/apps/{client}/page/{entity}/{Entity}List.tsx`

```tsx
import MC{Entity}ListContainer from '@msm-portal/{client}/container/{entity}/list/MC{Entity}ListContainer';
const {Entity}List = () => <MC{Entity}ListContainer />;
export default {Entity}List;
```

### Step 5 — Register the route
Add to all 3 route locations (see `create-form/SKILL.md` Step 8 for the 3-location pattern).
Add `{ENTITY}_MAIN` to `MERouteKey`.

### Step 6 — Add i18n keys
```json
{
  "container": {
    "{entity}": {
      "list": {
        "title": "{Entity} List",
        "create": "Create {Entity}",
        "tab": { "available": "Available", "archived": "Archived" },
        "column": { "name": "Name", "status": "Status", "createdAt": "Created" },
        "message": { "read.error": "Failed to load {entity} list." }
      }
    }
  }
}
```

---

## Detail Page

### Step 1 — Read the detail-page pattern
Read `design-system/src/patterns.json`, locate the `detail-page` entry.

### Step 2 — Create the Component
Location: `src/apps/{client}/component/{entity}/detail/MC{Entity}Detail.tsx`

Props: the full entity object as a single typed prop.
Render with `MCFormPanel` sections in readonly mode:
```tsx
<MCFormPanel>
  <MCFormPanelTitle>Basic Information</MCFormPanelTitle>
  <MCFormPanelBody>
    <MCFormFieldGroup>
      <MCFormTextInput name="name" fieldLabel="Name" readonly />
    </MCFormFieldGroup>
  </MCFormPanelBody>
</MCFormPanel>
```

### Step 3 — Create the Container
Location: `src/apps/{client}/container/{entity}/detail/MC{Entity}DetailContainer.tsx`

Container must:
1. Extract `{entityId}` from `useEntityParam()`
2. Call the data-fetching hook
3. Handle `error` with `fireCollapsibleError` + `navigate(-1)` in `useEffect`
4. Show `<MCCircularLoader fillParent />` while `isFetching || !entity`
5. Render `<MC{Entity}Detail {entity}={entity} />` when data is ready

### Step 4 — Create the Page
Location: `src/apps/{client}/page/{entity}/{Entity}Detail.tsx`

```tsx
import MC{Entity}DetailContainer from '@msm-portal/{client}/container/{entity}/detail/MC{Entity}DetailContainer';
const {Entity}Detail = () => <MC{Entity}DetailContainer />;
export default {Entity}Detail;
```

### Step 5 — Register the route
Add `{ENTITY}_DETAIL` to `MERouteKey`.
Add `:entityId` child route in `routeTemplate.tsx`.
Map page in `route.tsx`.

### Step 6 — Add i18n keys
```json
{
  "container": {
    "{entity}": {
      "detail": {
        "title": "{Entity} Detail",
        "message": { "read.error": "Failed to load {entity} details." }
      }
    }
  }
}
```

---

## Create / Edit Pages

For create and edit pages, follow `create-form/SKILL.md` in its entirety.
The page layer for create/edit is a thin wrapper — same pattern as list and detail.

---

## Pre-Generation Checklist

Before generating any page, verify:

### Layout Context Check
- [ ] Identify the target route's parent layout (e.g., settings page with sidebar, standalone page)
- [ ] If the parent already provides `MCContentLayout` or equivalent layout wrapper, do NOT add `MCContentLayout` in the new container
- [ ] If the page is standalone (no parent layout), wrap with `MCContentLayout title={t('title')} showBreadcrumb`

### i18n Bilingual Check
- [ ] Add keys to BOTH `src/i18n/assets/en/sot-resource.json` AND `src/i18n/assets/ko/sot-resource.json`
- [ ] Never modify only one language file — always update en and ko together
- [ ] If Korean translation is unknown, use `[TODO: translate]` as placeholder

---
# 도메인 지식

# Domain Knowledge: Create Page

## The 3-Layer Architecture — Why It Exists

Every feature uses exactly three layers. This is not optional.

| Layer | File location | Rule |
|-------|---------------|------|
| Page | `src/apps/{client}/page/{entity}/` | Thin wrapper only. Zero hooks, zero logic. |
| Container | `src/apps/{client}/container/{entity}/{action}/` | All data, state, and business logic. |
| Component | `src/apps/{client}/component/{entity}/` or `src/common/component/` | Pure UI. All data via props. |

**Why**: Separating concerns makes components testable in isolation, containers swappable, and pages trivially simple. Breaking this pattern creates tightly coupled code that is hard to test and hard to reuse.

## Page Layer Rules

```tsx
// Correct — the entire file
import MC{Entity}ListContainer from '@msm-portal/{client}/container/{entity}/list/MC{Entity}ListContainer';
const {Entity}List = () => <MC{Entity}ListContainer />;
export default {Entity}List;
```

Pages must never contain:
- `useState`, `useEffect`, or any other hook
- Props passed to the container
- Business logic or conditionals
- Direct data fetching

## Container Layer Rules

Containers own:
- `useTranslation` — all i18n
- `useNavigate` — all navigation
- `useEntityParam` — all route params
- `useSearchParams` — tab/filter state in URL
- `useInAppAlert` — all error and success feedback
- Data fetching hooks
- `useMemo` for derived/computed values
- `useCallback` for stable callback references

Containers must not contain:
- Styled components
- Direct DOM manipulation
- Inline JSX beyond layout shells (`MCContentLayout`, `MCFormLayout`)

## Component Layer Rules

Components are pure functions of their props. Given the same props, they render the same output.

They must not:
- Import `useNavigate`, `useTranslation`, or any context hook
- Fetch data
- Access route params
- Have side effects

All callbacks (edit button click, delete action, tab change) are passed as props from the container.

## List Page Layout

```tsx
// Container renders this shell; all data props come from hooks
<MCContentLayout title={t('title')} rightAccessory={rightAccessory} showBreadcrumb>
  <MCBarTabs tabs={tabs} />
  {isLoading
    ? <MCCircularLoader fillParent />
    : <MCReportTable columns={columns} rows={rows} />}
</MCContentLayout>
```

- `MCContentLayout` — always the outer shell for content pages
- `MCBarTabs` — tab navigation; active tab stored in `?tab=` search param
- `MCReportTable` — standard data table; columns defined with `useMemo` in container
- Create button lives in `rightAccessory` prop of `MCContentLayout`

## Detail Page Layout

Detail pages use `MCFormPanel` in readonly mode — the same panel components as forms, but with `readonly` prop on all inputs. This creates visual consistency between create/edit and detail views.

```tsx
// In the detail Component (pure UI)
<MCFormPanel>
  <MCFormPanelTitle>{t('section.basicInfo')}</MCFormPanelTitle>
  <MCFormPanelBody>
    <MCFormFieldGroup>
      <MCFormTextInput name="name" fieldLabel={t('field.name')} readonly />
      <MCFormTextInput name="status" fieldLabel={t('field.status')} readonly />
    </MCFormFieldGroup>
  </MCFormPanelBody>
</MCFormPanel>
```

Note: `readonly` inputs still need a `name` prop (used as the HTML `id`), but they do not need a `<Formik>` context because they only read, not write.

## Tab State in URL

Always persist active tab in the URL search params, not in component state:

```tsx
const [searchParams, setSearchParams] = useSearchParams();
const activeTab = searchParams.get('tab') ?? 'available';

const tabs = useMemo(() => [
  { label: t('tab.available'), active: activeTab === 'available', onClick: () => setSearchParams({ tab: 'available' }) },
  { label: t('tab.archived'),  active: activeTab === 'archived',  onClick: () => setSearchParams({ tab: 'archived' }) },
], [activeTab, setSearchParams, t]);
```

This allows browser back/forward and deep-linking to work correctly.

## Loading and Error States — Container Responsibility

The container decides what to render based on data state:

```tsx
// Loading
if (isFetching || !entity) return <MCCircularLoader fillParent />;

// Error (navigate away, show error)
useEffect(() => {
  if (error) {
    fireCollapsibleError({ summary: t('message.read.error'), error });
    navigate(generatePathForRoute(MERouteKey.{ENTITY}_MAIN, params));
  }
}, [error]);

// Success
return <MC{Entity}Detail entity={entity} />;
```

Never put loading spinners or error handling inside the Component layer.

## Navigation Utilities

Always use `generatePathForRoute` — never construct URL strings manually.

```tsx
import { generatePathForRoute } from '@msm-portal/route/utils';
import useEntityParam from '@msm-portal/route/useEntityParam';
import { MERouteKey } from '@msm-portal/route/types';

const params = useEntityParam();

// Navigate to list
navigate(generatePathForRoute(MERouteKey.{ENTITY}_MAIN, params));

// Navigate to detail (include the entity ID)
navigate(generatePathForRoute(MERouteKey.{ENTITY}_DETAIL, { ...params, entityId: entity.id }));
```

## Breadcrumb Configuration

Each route entry in `routeTemplate.tsx` specifies `handle.crumb`.
This crumb key is resolved to a display string via i18n at `route.breadcrumb.{crumb}`.

```ts
// routeTemplate.tsx
{ path: '{entity}', key: MERouteKey.{ENTITY}_MAIN, handle: { crumb: '{entity}.list' },
  children: [
    { path: 'create', key: MERouteKey.{ENTITY}_CREATE, handle: { crumb: '{entity}.create' } },
    { path: ':entityId', key: MERouteKey.{ENTITY}_DETAIL, handle: { crumb: '{entity}.detail' } },
  ]
}
```

```json
// sot-resource.json
{ "route": { "breadcrumb": { "{entity}": { "list": "{Entities}", "create": "New {Entity}", "detail": "{Entity} Detail" } } } }
```

## Multi-client Placement Rule

- Logic reusable across all clients → `src/common/`
- Logic specific to one client → `src/apps/{client}/`
- Default reference client → `msm-default`

When in doubt, start in `msm-default`. Extract to `common` only when a second client needs it.
