# Create Form — 상세 워크플로우

# Skill: Create Form

**Purpose**: Build a complete form page with Formik, validation, container, and route registration.
**Read first**: `instruction.md` in this directory.

---

## Steps

### Step 1 — Read form patterns
Read `design-system/src/patterns.json`.
Locate the `form-basic` and `form-full-page` pattern entries.
Determine which pattern applies:
- Embedded form within a page → `form-basic`
- Standalone full-screen form page → `form-full-page`

### Step 2 — Read available form components
Read `design-system/src/components.json`.
Scan the "Form Inputs (v1)" category.
Identify the exact component for each field type in your form (see the decision tree in `design-system/AGENTS.md`).

### Step 3 — Read conventions
Read `design-system/src/conventions.json`.
Note the `formComponentRules` array and `directoryStructure.formPattern`.

### Step 4 — Define the Yup validation schema
Write the schema before writing any JSX.
Every required field must have `.required()` with an i18n-compatible message key.
Every constrained field (max length, email format, URL) must have the matching Yup method.

```ts
const schema = Yup.object({
  name: Yup.string().required('form.entity.error.name.required').max(100),
  url:  Yup.string().url('form.entity.error.url.invalid').required(),
});
```

### Step 5 — Create the form component
Location: `src/apps/{client}/component/{entity}/form/MC{Entity}Form.tsx`

Structure:
```tsx
type MTProps = {
  mode: 'create' | 'edit';
  initialValues: MT{Entity}FormValues;
  onSubmit: MTFormikOnSubmit<MT{Entity}FormValues>;
  onCancel: () => void;
  // dependencies for dropdowns, etc.
};
```

Inside the component:
- Wrap everything in `<Formik initialValues={...} validationSchema={schema} onSubmit={onSubmit}>`
- Use `<MCFormPanel>` + `<MCFormPanelTitle>` + `<MCFormPanelBody>` for each section
- Use `<MCFormFieldGroup>` to group related fields
- Add `$direction="row"` on `MCFormFieldGroup` for side-by-side fields
- Use `<MCFormField $width={MEFormFieldWidth.MEDIUM}>` to constrain individual field widths
- Place `<MCFormActions>` at the bottom with Cancel and Submit buttons

### Step 6 — Create the container
For **create**: `src/apps/{client}/container/{entity}/create/MC{Entity}CreateContainer.tsx`
For **edit**: `src/apps/{client}/container/{entity}/edit/MC{Entity}EditContainer.tsx`

Container must:
1. Fetch any dependencies needed by the form (dropdowns, related entities)
2. Show `<MCCircularLoader fillParent />` while loading
3. Define `handleSubmit` with `MTFormikOnSubmit<MT{Entity}FormValues>` signature
4. Call `fireSuccess(t('message.create.success'))` on mutation success
5. Call `fireCollapsibleError({ summary: t('message.create.error'), error })` on failure
6. Navigate away on success via `generatePathForRoute`
7. For edit: fetch the existing entity and map it to `initialValues` in `useMemo`

### Step 7 — Create the page
Location: `src/apps/{client}/page/{entity}/{Entity}Create.tsx`

```tsx
import MC{Entity}CreateContainer from '@msm-portal/{client}/container/{entity}/create/MC{Entity}CreateContainer';
const {Entity}Create = () => <MC{Entity}CreateContainer />;
export default {Entity}Create;
```

No hooks. No logic. No props.

### Step 8 — Register the route (3 locations, all required)

**Location 1** — `src/route/types.ts`:
Add enum values to `MERouteKey`:
```ts
{ENTITY}_CREATE = '{ENTITY}_CREATE',
{ENTITY}_EDIT   = '{ENTITY}_EDIT',
```

**Location 2** — `src/app-builder/route/template/routeTemplate.tsx`:
Add route entries with `path`, `key`, and `handle.crumb`.

**Location 3** — `src/apps/{client}/config/route.tsx`:
Map the page component with `allowedRoles`.

### Step 9 — Add i18n keys
Open `src/i18n/assets/en/sot-resource.json` (and any other locale files).
Add keys under `form.{entity}`:
```json
{
  "form": {
    "{entity}": {
      "section.basicInfo": "Basic Information",
      "field.name": "Name",
      "field.name.hint": "Used as the display name",
      "message.create.success": "Created successfully.",
      "message.create.error": "Failed to create. Please try again.",
      "message.update.success": "Updated successfully.",
      "message.update.error": "Failed to update. Please try again.",
      "message.read.error": "Failed to load data."
    }
  }
}
```

### Step 10 — Self-validate
Run the 16-point checklist from `review-component/instruction.md`.
Confirm:
- All inputs are inside `<Formik>`
- All labels use i18n
- Route is registered in all 3 locations
- Error and success alerts use the correct hooks

---
# 도메인 지식

# Domain Knowledge: Create Form

## Core Rule: All Inputs Must Be Inside Formik

Every form input component (`MCFormTextInput`, `MCFormSingleRichSelect`, etc.) uses `useField(name)` internally.
If rendered outside a `<Formik>` context, they will throw a runtime error.

The `<Formik>` wrapper lives in the **form component** (not the container).
The container only provides `initialValues` and `onSubmit` as props.

## Form Component Selection

| Field type | Component |
|------------|-----------|
| Text | `MCFormTextInput` |
| Number | `MCFormNumberInput` |
| Multi-line text | `MCFormTextArea` |
| Single dropdown | `MCFormSingleRichSelect` |
| Multi dropdown | `MCFormMultiRichSelect` |
| Inline chip multi-select | `MCFormInlineChipRichSelect` |
| Checkbox | `MCFormCheckBox` |
| Toggle / switch | `MCFormSwitchInput` |
| Radio group | `MCFormRadioGroup` |
| Date range | `MCFormDateRangePicker` |
| Date + time range | `MCFormDateTimeRangePicker` |
| Visual card selector | `MCFormCardSelect` |
| Color picker | `MCFormColorInput` |
| Tag / chip input | `MCFormChipInput` |
| Weekly schedule | `MCFormWeeklyTimeTablePicker` |
| Frequency cap | `MCFormOptionalFrequencyInput` |
| Video URL + skip | `MCFormSkippableVideoInput` |

**Never** use `MCSingleTextInput` directly inside a form. Use `MCFormTextInput`.
`MCSingleTextInput` is for non-Formik contexts only (search bars, filters).

## Required vs Optional Fields

- `required={true}` — no label suffix (field is required)
- `required={false}` — shows `(Optional)` suffix on the label
- Omitting `required` — same as `required={false}`

Always pair `required={true}` with a Yup `.required()` call. Never one without the other.

## Field Layout Patterns

```tsx
// Vertical stack (default — use for most fields)
<MCFormFieldGroup>
  <MCFormTextInput name="name" fieldLabel="Name" required />
  <MCFormTextInput name="description" fieldLabel="Description" />
</MCFormFieldGroup>

// Horizontal row — use for logically paired fields (start/end dates, min/max values)
<MCFormFieldGroup $direction="row">
  <MCFormTextInput name="startDate" fieldLabel="Start Date" required />
  <MCFormTextInput name="endDate" fieldLabel="End Date" />
</MCFormFieldGroup>

// Constrained width — use when full-width is visually inappropriate (short codes, IDs)
<MCFormField $width={MEFormFieldWidth.MEDIUM}>
  <MCFormTextInput name="code" fieldLabel="Promo Code" />
</MCFormField>
```

## Create vs Edit Pattern

Use the **same form component** for both create and edit. Distinguish behavior via a `mode` prop.

```tsx
type MTProps = {
  mode: 'create' | 'edit';
  initialValues: MT{Entity}FormValues;
  onSubmit: MTFormikOnSubmit<MT{Entity}FormValues>;
};
```

The container handles the difference:
- Create container: `initialValues` from defaults, mutation = create API
- Edit container: `initialValues` mapped from fetched entity, mutation = update API

## Error and Success Feedback

Always use `useInAppAlert` from `@msm-portal/common/alert/useInAppAlert`.

```tsx
const { fireSuccess, fireCollapsibleError } = useInAppAlert();

// On mutation success
fireSuccess(t('message.create.success'));
navigate(generatePathForRoute(MERouteKey.{ENTITY}_MAIN, params));

// On mutation error (stay on page, show collapsible error bar)
fireCollapsibleError({ summary: t('message.create.error'), error });

// On query error (navigate away)
useEffect(() => {
  if (fetchError) {
    fireCollapsibleError({ summary: t('message.read.error'), error: fetchError });
    handleClose();
  }
}, [fetchError]);
```

Never use `alert()`, `console.error()`, or toast libraries directly.

## Submission Handler Type

Always type the `onSubmit` callback with `MTFormikOnSubmit`:

```tsx
import { MTFormikOnSubmit } from '@msm-portal/common/type/formik';

const handleSubmit: MTFormikOnSubmit<MT{Entity}FormValues> = async (values, { setSubmitting }) => {
  setSubmitting(true);
  try {
    await mutateAsync(values);
    fireSuccess(t('message.create.success'));
    handleClose();
  } catch (error) {
    fireCollapsibleError({ summary: t('message.create.error'), error });
  } finally {
    setSubmitting(false);
  }
};
```

Always call `setSubmitting(false)` in `finally` — Formik does not reset it automatically on error.

## Loading State During Dependency Fetch

When the form depends on remote data (e.g., dropdown options fetched from API):

```tsx
return (
  <MCFormLayout onClose={handleClose}>
    {isLoading ? (
      <MCCircularLoader fillParent />
    ) : (
      <MC{Entity}Form
        mode="create"
        initialValues={initialValues}
        onSubmit={handleSubmit}
        onCancel={handleClose}
        options={options}
      />
    )}
  </MCFormLayout>
);
```

Show the loader at the `MCFormLayout` level so the shell (breadcrumbs, close button) remains visible.

## i18n Namespace Conventions

| Location | Namespace |
|----------|-----------|
| Form component | `form.{entity}` |
| Create container | `container.{entity}.create` |
| Edit container | `container.{entity}.edit` |

Keep field labels and validation messages in `form.{entity}`.
Keep page-level messages (success/error toasts, page title) in the container namespace.

## Route Registration — 3 Locations, Always Together

Adding only 1 or 2 of the 3 locations causes a runtime error or missing route.

1. `MERouteKey` enum — defines the key constant
2. `routeTemplate.tsx` — defines the URL path and breadcrumb handle
3. `route.tsx` — maps the key to a page component and access roles

If you add a route key but forget `routeTemplate.tsx`, navigation will silently produce the wrong URL.
If you forget `route.tsx`, the page will render a 404.

## Breadcrumb Handle

Every route entry in `routeTemplate.tsx` needs a `handle.crumb` key.
The crumb value is an i18n key looked up under `route.breadcrumb.*`.

```ts
{ path: 'create', key: MERouteKey.{ENTITY}_CREATE, handle: { crumb: '{entity}.create' } }
```

Add the matching i18n key:
```json
{ "route": { "breadcrumb": { "{entity}": { "create": "New {Entity}" } } } }
```
