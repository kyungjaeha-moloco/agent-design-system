<!-- AUTO-GENERATED — Do not edit directly. Edit src/components.json then run: node generate.mjs -->

# Component Library

> MSM Portal component library. Portal wrappers add Formik integration and theme styling on top of @moloco/moloco-cloud-react-ui primitives.
> **Base path**: `src/common/component/`
> **Import alias**: `@msm-portal/common/component/`

---

## Form Inputs (v1)

All form components use Formik via useField(name). Must be used inside a <Formik> context.

### MCFormTextInput

**Path**: `form/v1/input/MCFormTextInput.tsx`

Text input with Formik integration. Shows error after touch.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label above the input |
| `tooltip` | `string` |  |  | Markdown tooltip text shown on info icon |
| `hint` | `string | ReactNode` |  |  | Helper text below input |
| `required` | `boolean` |  |  | When false, shows (Optional) suffix on label |
| `readonly` | `boolean` |  |  | Renders as MCTextEllipsis instead of input |
| `showError` | `boolean` |  | true | Show Formik error message |
| `description` | `string | ReactNode` |  |  | Sub-description below label |
| `labelRightAccessory` | `ReactNode` |  |  | Node placed right of label |
| `$direction` | `'row' | 'column'` |  | 'column' | Field layout direction |
| `onChange` | `(value: string) => void` |  |  | Callback on value change |

- fullWidth is always set to true internally
- In readonly mode: renders prefix + MCTextEllipsis (no input element)
- Error state: red label + error message below input
- Focus state: label turns palette.foundation.assent color

```tsx
import MCFormTextInput from '@msm-portal/common/component/form/v1/input/MCFormTextInput';

<MCFormTextInput
  name="title"
  fieldLabel="Campaign Title"
  required
  tooltip="Max 100 characters"
  hint="Used as the display name"
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |
| `readonly` | View-only, not editable |

**Do:**
- ✅ Always provide fieldLabel for accessibility
- ✅ Use hint prop for helper text below input
- ✅ Use tooltip for additional context on info icon

**Don't:**
- ❌ Don't hardcode placeholder text — use i18n
- ❌ Don't use MCSingleTextInput directly in forms — use this wrapper
- ❌ Don't set required=true without Yup validation schema

### MCFormTextArea

**Path**: `form/v1/input/MCFormTextArea.tsx`

Multi-line text input with Formik integration.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label above the textarea |
| `tooltip` | `string` |  |  | Markdown tooltip text |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `showError` | `boolean` |  | true | Show Formik error |

```tsx
<MCFormTextArea name="description" fieldLabel="Description" required />
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |

**Do:**
- ✅ Use for multi-line text input (descriptions, notes)
- ✅ Set rows prop for initial height

**Don't:**
- ❌ Don't use for single-line inputs — use MCFormTextInput

### MCFormNumberInput

**Path**: `form/v1/input/MCFormNumberInput.tsx`

Numeric input with Formik integration. Converts string to parseFloat internally.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `onChange` | `(value: number) => void` |  |  | Callback on change |

```tsx
<MCFormNumberInput name="budget" fieldLabel="Daily Budget" required />
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |

**Do:**
- ✅ Use for numeric values (budget, count, percentage)

**Don't:**
- ❌ Don't use for phone numbers or zip codes — use MCFormTextInput

### MCFormCheckBox

**Path**: `form/v1/checkbox/MCFormCheckBox.tsx`

Checkbox with Formik integration.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label next to checkbox |
| `tooltip` | `string` |  |  | Tooltip text |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `showError` | `boolean` |  | true | Show error |

```tsx
<MCFormCheckBox name="agreeToTerms" fieldLabel="I agree to terms" required />
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |
| `checked` | Checkbox is selected |

**Do:**
- ✅ Use for boolean on/off choices
- ✅ Use for multi-select from a small set

**Don't:**
- ❌ Don't use for mutually exclusive options — use MCFormRadioGroup

### MCFormSwitchInput

**Path**: `form/v1/input/MCFormSwitchInput.tsx`

Toggle switch with Formik integration.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label |

```tsx
<MCFormSwitchInput name="isEnabled" fieldLabel="Enable feature" />
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `disabled` | Cannot be interacted with |
| `on` | Toggle is switched on |
| `off` | Toggle is switched off |

**Do:**
- ✅ Use for immediate toggle actions (enable/disable feature)

**Don't:**
- ❌ Don't use inside form submission flow — use MCFormCheckBox instead

### MCFormRadioGroup

**Path**: `form/v1/radio/MCFormRadioGroup.tsx`

Radio button group with Formik integration.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label |
| `direction` | `'row' | 'column'` |  |  | Layout direction of radio options |
| `options` | `Array<{ label: string; value: string }>` | ✓ |  | Radio options |
| `onChange` | `(value: string) => void` |  |  | Callback on selection |

```tsx
<MCFormRadioGroup
  name="paymentType"
  fieldLabel="Payment Type"
  direction="row"
  options={[
    { label: 'CPC', value: 'cpc' },
    { label: 'CPM', value: 'cpm' },
  ]}
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |

**Variants:**

| Variant | Description |
|---------|-------------|
| `row` | Horizontal layout |
| `column` | Vertical layout |

**Do:**
- ✅ Use for mutually exclusive choices from 2-5 options

**Don't:**
- ❌ Don't use for more than 5 options — use MCFormSingleRichSelect
- ❌ Don't use for non-exclusive choices — use MCFormCheckBox

### MCFormSingleRichSelect

**Path**: `form/v1/select/MCFormSingleRichSelect.tsx`

Single-select dropdown with Formik integration. Generic over value type.

> Requires Formik context (`useField(name)`)

**Generic**: T — the value type

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label |
| `tooltip` | `string` |  |  | Tooltip |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `options` | `Array<{ label: string; value: T }>` | ✓ |  | Select options |
| `onChange` | `(value: T) => void` |  |  | Callback on selection |

```tsx
<MCFormSingleRichSelect<string>
  name="status"
  fieldLabel="Status"
  required
  options={statusOptions}
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |
| `open` | Dropdown menu is open |

**Do:**
- ✅ Use for single selection from 5+ options
- ✅ Provide clear option labels

**Don't:**
- ❌ Don't use for 2-3 options — use MCFormRadioGroup

### MCFormMultiRichSelect

**Path**: `form/v1/select/MCFormMultiRichSelect.tsx`

Multi-select dropdown with Formik integration. Generic over value type.

> Requires Formik context (`useField(name)`)

**Generic**: T — the value type

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label |
| `options` | `Array<{ label: string; value: T }>` | ✓ |  | Select options |
| `onChange` | `(values: T[]) => void` |  |  | Callback on selection |

```tsx
<MCFormMultiRichSelect<string>
  name="tags"
  fieldLabel="Tags"
  options={tagOptions}
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |
| `open` | Dropdown menu is open |

**Do:**
- ✅ Use for multiple selection from a large set

**Don't:**
- ❌ Don't use for single selection — use MCFormSingleRichSelect

### MCFormCardSelect

**Path**: `form/v1/select/MCFormCardSelect.tsx`

Card-based visual selector with Formik integration.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label |
| `options` | `Array<{ label: string; value: string; description?: string; disabled?: boolean }>` | ✓ |  | Card options |

```tsx
<MCFormCardSelect
  name="planType"
  fieldLabel="Plan Type"
  options={[
    { label: 'Basic', value: 'basic', description: 'Entry level plan' },
  ]}
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `selected` | Card is selected |
| `disabled` | Cannot be interacted with |

**Do:**
- ✅ Use for visual selection with descriptions (plan type, template selection)

**Don't:**
- ❌ Don't use for simple text-only options — use MCFormRadioGroup

### MCFormInlineChipRichSelect

**Path**: `form/v1/select/MCFormInlineChipRichSelect.tsx`

Chip-style multi-select rendered inline. Selected values appear as removable chips.

> Requires Formik context (`useField(name)`)

**Generic**: T — the value type

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label above the input |
| `options` | `Array<{ label: string; value: T }>` | ✓ |  | Selectable options |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip text |
| `onChange` | `(values: T[]) => void` |  |  | Callback on selection change |

```tsx
<MCFormInlineChipRichSelect<string>
  name="targetCountries"
  fieldLabel="Target Countries"
  required
  options={countryOptions}
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |

**Do:**
- ✅ Use for multi-select where selected values should be visible as chips inline
- ✅ Use when space is limited and a dropdown would be too heavy

**Don't:**
- ❌ Don't use for single selection — use MCFormSingleRichSelect
- ❌ Don't use if more than 10 options — use MCFormMultiRichSelect with dropdown

### MCFormDateRangePicker

**Path**: `form/v1/input/MCFormDateRangePicker.tsx`

Date range picker with Formik integration.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |

```tsx
<MCFormDateRangePicker name="campaignPeriod" fieldLabel="Campaign Period" required />
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |

**Do:**
- ✅ Use for date range selection (campaign periods, report ranges)

**Don't:**
- ❌ Don't use for single date — check if single date picker exists

### MCFormDateTimeRangePicker

**Path**: `form/v1/input/MCFormDateTimeRangePicker.tsx`

Date + time range picker with Formik integration. Combines date and time selection for start/end range.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label above the picker |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip text |
| `showError` | `boolean` |  | true | Show Formik error |

```tsx
<MCFormDateTimeRangePicker name="schedulePeriod" fieldLabel="Schedule Period" required />
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |

**Do:**
- ✅ Use for scheduling with both date and time (campaign scheduling, event windows)
- ✅ Pair with Yup date validation for start < end

**Don't:**
- ❌ Don't use for date-only ranges — use MCFormDateRangePicker
- ❌ Don't use for single datetime — check if single picker exists

### MCFormColorInput

**Path**: `form/v1/input/MCFormColorInput.tsx`

Color picker with hex input and Formik integration. Shows a color swatch preview and accepts hex color codes.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label above the input |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip text |

```tsx
<MCFormColorInput name="brandColor" fieldLabel="Brand Color" required />
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state with color swatch |
| `hover` | Mouse over the component |
| `focus` | Color picker popup is open |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state (invalid hex) |

**Do:**
- ✅ Use for brand color configuration (theme customization)
- ✅ Validate hex format with Yup: matches(/^#[0-9A-Fa-f]{6}$/)

**Don't:**
- ❌ Don't use for predefined color selection — use MCFormSingleRichSelect with color swatches

### MCFormChipInput

**Path**: `form/v1/input/MCFormChipInput.tsx`

Text input that creates chips on Enter or comma. Formik integrated. Stores values as string array.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name (stores string[]) |
| `fieldLabel` | `ReactNode` |  |  | Label above the input |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip text |
| `hint` | `string | ReactNode` |  |  | Helper text below input |
| `placeholder` | `string` |  |  | Input placeholder text |

```tsx
<MCFormChipInput
  name="keywords"
  fieldLabel="Keywords"
  hint="Press Enter or comma to add"
  placeholder="Type a keyword..."
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | Input is focused, ready to type |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |

**Do:**
- ✅ Use for free-form tag/keyword input (tags, keywords, email lists)
- ✅ Show hint explaining the delimiter (Enter or comma)

**Don't:**
- ❌ Don't use for predefined option selection — use MCFormMultiRichSelect
- ❌ Don't use for single values — use MCFormTextInput

### MCFormWeeklyTimeTablePicker

**Path**: `form/v1/input/MCFormWeeklyTimeTablePicker.tsx`

Grid-based weekly schedule picker (day × hour slots). Formik integrated. Click or drag to select time slots.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name (stores schedule matrix) |
| `fieldLabel` | `ReactNode` |  |  | Label above the picker |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip text |

```tsx
<MCFormWeeklyTimeTablePicker
  name="adSchedule"
  fieldLabel="Ad Schedule"
  tooltip="Select hours when ads should run"
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Grid with all slots unselected |
| `selecting` | User is dragging to select slots |
| `disabled` | Cannot be interacted with |
| `error` | Validation error state |

**Do:**
- ✅ Use for weekly ad scheduling (dayparting)
- ✅ Provide clear visual feedback for selected vs unselected slots

**Don't:**
- ❌ Don't use for single time slot — use a time picker
- ❌ Don't use for date-specific scheduling — use MCFormDateTimeRangePicker

### MCFormOptionalFrequencyInput

**Path**: `form/v1/input/MCFormOptionalFrequencyInput.tsx`

Frequency cap input with optional toggle. Formik integrated. Toggle enables/disables the frequency limit.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label above the input |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip text |

```tsx
<MCFormOptionalFrequencyInput
  name="frequencyCap"
  fieldLabel="Frequency Cap"
  tooltip="Limit impressions per user per day"
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Toggle off, frequency input hidden |
| `enabled` | Toggle on, frequency input visible |
| `disabled` | Cannot be interacted with |
| `error` | Validation error on frequency value |

**Do:**
- ✅ Use for optional frequency capping (impression cap per user)
- ✅ Set sensible default when toggle is enabled

**Don't:**
- ❌ Don't use for required numeric input — use MCFormNumberInput

### MCFormSkippableVideoInput

**Path**: `form/v1/input/MCFormSkippableVideoInput.tsx`

Video URL input with skippable option toggle. Formik integrated. Combines URL text input with a skip toggle.

> Requires Formik context (`useField(name)`)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | ✓ |  | Formik field name |
| `fieldLabel` | `ReactNode` |  |  | Label above the input |
| `required` | `boolean` |  |  | Shows/hides (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip text |

```tsx
<MCFormSkippableVideoInput
  name="videoCreative"
  fieldLabel="Video Creative URL"
  required
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `focus` | URL input is focused |
| `disabled` | Cannot be interacted with |
| `error` | Validation error (invalid URL) |

**Do:**
- ✅ Use for video ad creative inputs
- ✅ Validate URL format with Yup

**Don't:**
- ❌ Don't use for non-video URLs — use MCFormTextInput

---

## Form Shared

Shared building blocks used by form input components. Import from '@msm-portal/common/component/form/shared'.

**Import from**: `@msm-portal/common/component/form/shared`

### MCFormFieldLabel

**Path**: `form/shared/MCFormFieldLabel.tsx`

Form field label with optional/required state, tooltip, and description.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `htmlFor` | `string` |  |  | Associates label with input |
| `error` | `boolean` |  |  | Turns label red |
| `required` | `boolean` |  |  | When false, shows (Optional) suffix |
| `tooltip` | `string` |  |  | Markdown tooltip on info icon |
| `description` | `string | ReactNode` |  |  | Sub-label below main label |
| `rightAccessory` | `ReactNode` |  |  | Right-aligned accessory node |

- required=false shows (Optional) in placeholder color
- Focus-within on parent MCFormField: label turns palette.foundation.assent
- error=true: label turns palette.foundation.negative

### MCFormTooltip

**Path**: `form/shared/MCFormTooltip.tsx`

Info icon that shows a markdown tooltip on hover.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `markdownText` | `string` | ✓ |  | Markdown content for tooltip |

```tsx
<MCFormTooltip markdownText="**Bold** and _italic_ supported" />
```

### Styled Components

| Component | Props | Description |
|-----------|-------|-------------|
| `MCFormField` | $width?: MEFormFieldWidth, $direction?: 'row' | 'column' | Wrapper for a single field. Default direction: column. |
| `MCFormFieldError` | — | Red error message. Uses BODY_2_SPECIAL, content.negative. |
| `MCFormFieldGroup` | $direction?: 'row' | 'col', $spacing?: number | Groups multiple fields. Default spacing: spacing(2) row, spacing(4) col. |
| `MCFormPanel` | — | White card. padding: spacing(6), border: border.primary, border-radius: 2px. |
| `MCFormPanelTitle` | — | H_3 title inside panel. margin-bottom: spacing(3) when followed by body. |
| `MCFormPanelSubTitle` | — | BODY_2 secondary subtitle. color: content.secondary. |
| `MCFormPanelBody` | — | Body content wrapper inside a panel. |
| `MCFormBody` | — | Top-level form body wrapper. |
| `MCFormTitle` | — | H_3 form title placed outside panels. |
| `MCFormActions` | — | Right-aligned flex row for action buttons. padding-bottom: spacing(4). |
| `MCFormGuideMessage` | $marginTop?: number, $marginBottom?: number | Info box with background.tertiary fill. Uses BODY_2. |
| `MCFormBorderWrapper` | — | Border box with padding: spacing(1.5). |
| `MCFormHint` | — | Secondary hint text below inputs. BODY_2, content.secondary. |
| `MCFormDescription` | — | BODY_3 description text. |
| `MCFormDivider` | — | Horizontal border divider using border.primary. |

**MCFormField:**
- ✅ Wrap every form input in MCFormField for consistent spacing

**MCFormFieldGroup:**
- ✅ Use $direction='row' for side-by-side fields
- ✅ Use $direction='col' with $spacing for vertical stacking

**MCFormPanel:**
- ✅ Use as the primary container for form sections
- ✅ Add MCFormPanelTitle as the first child

### `MEFormFieldWidth`

| Key | Value | CSS Value |
|-----|-------|----------|
| `SMALL` | `'small'` | `40%` |
| `MEDIUM` | `'medium'` | `70%` |
| `FULL` | `'full'` | `100%` |
| `FIT_CONTENT` | `'fit-content'` | `fit-content` |
| `UNSET` | `'unset'` | `unset` |

---

## Form Layout

Full-page form layout with header, scrollable body, and footer.

### MCFormLayout

**Path**: `form/layout/MCFormLayout.tsx`

Full-page form layout. Header: 44px. Body: 860px centered. Footer: border-top.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `onClose` | `() => void` |  |  | Back/close button handler. Shows button when provided. |
| `noHeader` | `boolean` |  |  | Hides header when true |
| `headerRightAccessory` | `ReactNode` |  |  | Content in header right slot |
| `breadCrumbs` | `Array<{ type?: string; title: string }>` |  |  | Breadcrumb trail in header |
| `bodyWidth` | `string` |  | 860px | Width of scrollable body |
| `footerContent` | `ReactNode` |  |  | Footer content (centered) |
| `fullScreen` | `boolean` |  |  | Full screen mode |

**Layout**: Header(44px border-bottom) / Scrollable Body(centered 860px) / Footer(border-top)

**Do:**
- ✅ Use for full-page create/edit forms
- ✅ Always provide onClose handler
- ✅ Use footerContent for action buttons (Save/Cancel)

**Don't:**
- ❌ Don't use for list or detail pages — use MCContentLayout
- ❌ Don't place content outside the Form body area

---

## Buttons

Button components. MCButton2 comes from @moloco/moloco-cloud-react-ui.

### MCButton2

**Path**: `@moloco/moloco-cloud-react-ui`

Primary button. All portal buttons use MCButton2.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'basic' | 'text'` |  | 'basic' | Button style variant. 'basic' is the default filled/outlined style; 'text' is borderless. |
| `size` | `'default' | 'small' | 'large'` |  | 'default' | Button size |
| `color` | `'primary' | 'secondary' | 'tertiary' | 'error'` |  | 'primary' | Button color. When variant='text', only 'primary' is allowed. |
| `leftIcon` | `MTIcon | ReactNode` |  |  | Icon before label. Accepts an MTIcon string name or a ReactNode. |
| `rightIcon` | `MTIcon | ReactNode` |  |  | Icon after label. Accepts an MTIcon string name or a ReactNode. |
| `loading` | `boolean` |  |  | Shows loading spinner and disables interaction |
| `disabled` | `boolean` |  |  | Disabled state |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` |  |  | Click handler |
| `type` | `'button' | 'submit' | 'reset'` |  |  | HTML button type |
| `testId` | `string` |  |  | Test ID for automated testing |

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `active` | Being clicked/pressed |
| `focus` | Keyboard focus via Tab |
| `disabled` | Cannot be interacted with |
| `loading` | Async action in progress |

**Variants:**

| Variant | Description |
|---------|-------------|
| `basic` | Default filled button style. Color determines appearance (primary=brand fill, secondary=outlined, tertiary=subtle, error=red fill). Primary, secondary, and tertiary actions. |
| `text` | No background/border. Only 'primary' color is allowed. Low-priority actions, inline links. |

**Sizes:**

| Size | Description |
|------|-------------|
| `small` | Compact contexts, table rows |
| `default` | Default size for most actions |
| `large` | Hero actions, standalone prominent buttons |

**Do:**
- ✅ Use variant='basic' color='primary' for the single primary action per section
- ✅ Use variant='basic' color='secondary' for Cancel/Back actions
- ✅ Always add leftIcon for clarity when space allows

**Don't:**
- ❌ Don't use more than one primary-colored button in a button group
- ❌ Don't use inline styles to customize button colors
- ❌ Don't use text variant for destructive actions — use color='error' with variant='basic'

### MCMoreActionsButton

**Path**: `button/MCMoreActionsButton.tsx`

MCButton2 that opens a popover menu of actions on click.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `moreActionItems` | `MTMoreActionItem[]` | ✓ |  | Array of action items |
| `noPadding` | `boolean` |  |  | Removes button padding |

**`MTMoreActionItem`**: `{ label: ReactNode; icon?: MTIcon; onClick: () => void | Promise<void> }`

```tsx
<MCMoreActionsButton
  variant="text"
  noPadding
  moreActionItems={[
    { label: 'Edit', icon: 'edit', onClick: handleEdit },
    { label: 'Delete', icon: 'delete', onClick: handleDelete },
  ]}
>
  <MCIcon icon="more" width={16} height={16} />
</MCMoreActionsButton>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over the component |
| `active` | Being clicked/pressed |
| `open` | Popover menu is open |

**Do:**
- ✅ Use for contextual actions in table rows or card headers
- ✅ Use MCIcon 'more' as trigger

**Don't:**
- ❌ Don't use for primary actions — use MCButton2 directly

### MCMoreActionGroupsButton

**Path**: `button/MCMoreActionGroupsButton.tsx`

MCButton2 with grouped actions separated by MCDivider.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `moreActionItemGroups` | `MTMoreActionItemGroup[]` | ✓ |  | Array of action groups |
| `noPadding` | `boolean` |  |  | Removes button padding |

**`MTMoreActionItemGroup`**: `{ label: ReactNode; icon?: MTIcon; actions: MTMoreActionItem[] }`

---

## Navigation

### MCCollapsibleNavbar

**Path**: `navbar/MCCollapsibleNavbar.tsx`

Collapsible sidebar navigation. Width: 260px when expanded, collapses to icon-only width.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | ✓ |  | Navigation content (MCNavbarItems) |
| `defaultCollapsed` | `boolean` |  | false | Initial collapsed state |
| `footer` | `ReactNode` |  |  | Footer content below nav items |

- Toggle button uses angle-left / angle-right icons
- Width: 260px expanded, defined by NAV_BAR_WIDTH constant
- Collapse state persists via localStorage

```tsx
<MCCollapsibleNavbar>
  <MCNavbarItems sections={navSections} />
</MCCollapsibleNavbar>
```

**States:**

| State | Description |
|-------|-------------|
| `expanded` | Full width (260px) with labels visible |
| `collapsed` | Icon-only narrow width |

**Do:**
- ✅ Use as the primary app sidebar navigation
- ✅ Place MCNavbarItems as children

**Don't:**
- ❌ Don't nest inside MCContentLayout or MCFormLayout
- ❌ Don't add custom width overrides

### MCNavbarItems

**Path**: `navbar/MCNavbarItems.tsx`

Renders navigation sections with titles and items. Handles routing and active state highlighting.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `sections` | `Array<{ title?: string; items: Array<{ label: string; icon: MTIcon; route: MERouteKey; badge?: ReactNode }> }>` | ✓ |  | Navigation sections with grouped menu items |

```tsx
<MCNavbarItems
  sections={[
    {
      title: 'Campaign Management',
      items: [
        { label: 'Campaigns', icon: 'targeting', route: MERouteKey.CAMPAIGN_MAIN },
        { label: 'Creatives', icon: 'creative', route: MERouteKey.CREATIVE_MAIN },
      ],
    },
    {
      title: 'Reports',
      items: [
        { label: 'Performance', icon: 'chart', route: MERouteKey.REPORT_MAIN },
      ],
    },
  ]}
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `active` | Current route matches item — highlighted with brand color |
| `hover` | Mouse over a nav item |

**Do:**
- ✅ Group related items under section titles
- ✅ Use MCIcon names for the icon prop
- ✅ Match route keys from MERouteKey enum

**Don't:**
- ❌ Don't use outside MCCollapsibleNavbar
- ❌ Don't add more than 3 sections to avoid scroll

---

## Feedback & Overlay

### MCCommonDialog

**Path**: `dialog/common-dialog/MCCommonDialog.tsx`

Modal dialog with header, content area, and action buttons.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `open` | `boolean` | ✓ |  | Controls dialog visibility |
| `onClose` | `() => void` | ✓ |  | Close handler |
| `title` | `ReactNode` |  |  | Dialog title in header |
| `width` | `string` |  |  | Dialog width. Default: auto |
| `showDivider` | `boolean` |  |  | Divider between header and body |
| `depth` | `number` |  |  | Z-index offset for nested dialogs |
| `actions` | `ReactNode` |  |  | Action buttons in footer |

```tsx
<MCCommonDialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Delete"
  showDivider
  actions={
    <>
      <MCButton2 onClick={() => setIsOpen(false)}>Cancel</MCButton2>
      <MCButton2 color="primary" onClick={handleConfirm}>Confirm</MCButton2>
    </>
  }
>
  Are you sure?
</MCCommonDialog>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `open` | Dialog is visible |
| `closing` | Dialog is animating closed |

**Do:**
- ✅ Use for confirmations, alerts, and small forms
- ✅ Always provide onClose handler
- ✅ Use showDivider for content-heavy dialogs

**Don't:**
- ❌ Don't use for full-page content — use MCFormLayout
- ❌ Don't nest dialogs more than 2 levels deep

### MCPopover

**Path**: `popover/MCPopover.tsx`

Styled popover. Paper: background.primary, no shadow, border.primary border.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `open` | `boolean` | ✓ |  | Controls visibility |
| `anchorEl` | `HTMLElement | null` | ✓ |  | Anchor element |
| `anchorOrigin` | `{ vertical, horizontal }` |  |  | Anchor point on trigger element |
| `transformOrigin` | `{ vertical, horizontal }` |  |  | Origin point on popover |
| `onClose` | `() => void` |  |  | Close handler |

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `open` | Popover is visible |

**Do:**
- ✅ Use for contextual menus and tooltips
- ✅ Set anchorOrigin and transformOrigin for correct positioning

**Don't:**
- ❌ Don't use for complex forms — use MCCommonDialog
- ❌ Don't leave popovers open without user interaction to dismiss

### MCLoader

**Path**: `loader/`

Loading spinner. Use while async data is being fetched.

```tsx
if (isLoading) return <MCLoader />;
```

**Do:**
- ✅ Use MCLoader for inline/section loading

**Don't:**
- ❌ Don't show loader for less than 300ms — use debounced loading state

---

## Display

### MCAccordion

**Path**: `accordion/MCAccordion.tsx`

Collapsible section with animated expand/collapse. Toggle icon: angle-down (rotates 180° when expanded).

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `summary` | `ReactNode` | ✓ |  | Always-visible header content |
| `defaultExpanded` | `boolean` |  |  | Initial expanded state |

```tsx
<MCAccordion summary={<MCFormPanelTitle>Advanced Settings</MCFormPanelTitle>} defaultExpanded={false}>
  {/* content */}
</MCAccordion>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `expanded` | Content is visible |
| `collapsed` | Content is hidden |

**Do:**
- ✅ Use for progressive disclosure of optional content
- ✅ Set defaultExpanded for the most important section

**Don't:**
- ❌ Don't nest accordions inside accordions

### MCBarTabs

**Path**: `tab/bar-tab/MCBarTabs.tsx`

Tab bar with bar indicator.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tabs` | `Array<{ label: ReactNode; active: boolean; onClick: () => void }>` | ✓ |  | Tab definitions |

```tsx
<MCBarTabs
  tabs={[
    { label: 'Overview', active: activeTab === 'overview', onClick: () => setActiveTab('overview') },
    { label: 'Settings', active: activeTab === 'settings', onClick: () => setActiveTab('settings') },
  ]}
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `active` | Currently selected tab |

**Do:**
- ✅ Use for content switching within a page
- ✅ Use useSearchParams to persist active tab in URL

**Don't:**
- ❌ Don't use for navigation between pages — use routing
- ❌ Don't use more than 6 tabs

### MCDivider

**Path**: `divider/MCDivider.tsx`

Horizontal or vertical divider using border.primary.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `$margin` | `number` |  |  | Margin override (px) |
| `direction` | `'row' | 'column'` |  |  | row = horizontal, column = vertical |

```tsx
<MCDivider />
<MCDivider $margin={0} />
<MCDivider direction="column" />
```

**Variants:**

| Variant | Description |
|---------|-------------|
| `horizontal` | Default, row direction |
| `vertical` | Column direction |

**Do:**
- ✅ Use to separate content sections
- ✅ Set $margin={0} to remove default margin

**Don't:**
- ❌ Don't use for decorative purposes — only for semantic separation

### MCStatus

**Path**: `status/MCStatus.tsx`

Status badge with icon and label. Color and icon are derived automatically.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `status` | `'active' | 'paused' | 'scheduled' | 'underReview' | 'rejected' | 'draft' | 'delivered' | 'archived'` | ✓ |  | Status type |

```tsx
<MCStatus status="active" />
```

**Variants:**

| Variant | Description |
|---------|-------------|
| `active` (`#2E7D32`) | Running/live entity |
| `paused` (`#ED6C02`) | Temporarily stopped |
| `scheduled` (`#0288D1`) | Pending start |
| `underReview` (`#ED6C02`) | Awaiting approval |
| `rejected` (`#D32F2F`) | Denied/failed |
| `draft` (`#757575`) | Not yet submitted |
| `delivered` (`#2E7D32`) | Completed delivery |
| `archived` (`#9E9E9E`) | No longer active |

**Do:**
- ✅ Use for entity lifecycle status display

**Don't:**
- ❌ Don't create custom status colors — use predefined variants

### MCStepper

**Path**: `@moloco/moloco-cloud-react-ui`

Step indicator for multi-step forms/flows. Uses a children-based pattern with MCStepper.Step sub-components.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `activeStep` | `number` | ✓ |  | 0-based active step index |
| `onActiveStepChange` | `(index: number) => void` | ✓ |  | Callback when user clicks a step to navigate |
| `children` | `ReactElement<MTStepProps> | ReactElement<MTStepProps>[]` | ✓ |  | MCStepper.Step elements as children |

```tsx
<MCStepper activeStep={currentStep} onActiveStepChange={setCurrentStep}>
  <MCStepper.Step title="Basic Info" />
  <MCStepper.Step title="Targeting" />
  <MCStepper.Step title="Creative" />
  <MCStepper.Step title="Review" />
</MCStepper>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `active` | Currently active step |
| `completed` | Step has been completed |
| `disabled` | Step is not clickable |

**Do:**
- ✅ Use for multi-step flows (wizards, onboarding)
- ✅ Show step count clearly
- ✅ Use MCStepper.Step children — do NOT pass steps as a string array

**Don't:**
- ❌ Don't use for more than 6 steps
- ❌ Don't pass steps: string[] prop — it does not exist; use MCStepper.Step children instead

---

## Shared Styled

Shared styled components. Import from '@msm-portal/common/component/styled'.

**Import from**: `@msm-portal/common/component/styled`

### SCBoldLabel

Bold label using H_5.fontWeight.

```tsx
<SCBoldLabel>Bold text</SCBoldLabel>
```

### SCClickableText

Clickable underlined text. Uses content.contentAccent color.

```tsx
<SCClickableText onClick={handleClick}>Click here</SCClickableText>
```

---

## Moloco UI Primitives

Used directly from @moloco/moloco-cloud-react-ui without portal wrapping.

**Import from**: `@moloco/moloco-cloud-react-ui`

### MCIcon

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `MTIcon` | ✓ |  | Icon name from the MTIcon type |
| `width` | `number` |  | 24 | Icon width in px |
| `height` | `number` |  | 24 | Icon height in px |
| `inheritColor` | `boolean` |  |  | Inherit color from parent instead of using default |

### MCStack

### MCSingleTextInput

### MCSingleTextArea

### MCTextEllipsis

### MCMarkdownTooltip

### MCBarTab

### MCBarTabIndicator

---

## Table

### MCReportTable

**Path**: `report-table/`

Advanced data table with sorting, pagination, row actions, and typed cell renderers. Built on top of ag-grid or similar table engine.

**Generic**: T — the row data type

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | `T[]` | ✓ |  | Array of row data objects |
| `columns` | `Array<MCReportTableColumn<T>>` | ✓ |  | Column definitions with field, header, cellRenderer, sortHandler |
| `isLoading` | `boolean` |  |  | Shows skeleton loading state |
| `emptyMessage` | `ReactNode` |  |  | Content shown when data is empty |
| `onRowClick` | `(row: T) => void` |  |  | Row click handler |
| `defaultSortField` | `string` |  |  | Initial sort column field name |
| `defaultSortDirection` | `'asc' | 'desc'` |  |  | Initial sort direction |
| `pagination` | `boolean` |  | true | Enable pagination controls |
| `pageSize` | `number` |  | 25 | Rows per page |

```tsx
import MCReportTable from '@msm-portal/common/component/report-table';
import { getActionsCellRenderer, getMoneyCellRenderer, getDateCellRenderer } from '@msm-portal/common/component/table/cell-renderer';
import { tableCaseInsensitiveSortHandler } from '@msm-portal/common/component/table/sort-handler';

const columns = [
  { field: 'name', header: t('column.name'), sortHandler: tableCaseInsensitiveSortHandler },
  { field: 'budget', header: t('column.budget'), cellRenderer: getMoneyCellRenderer('USD') },
  { field: 'createdAt', header: t('column.created'), cellRenderer: getDateCellRenderer('YYYY-MM-DD') },
  { field: 'actions', header: '', cellRenderer: getActionsCellRenderer(actionItems) },
];

<MCReportTable
  data={campaigns}
  columns={columns}
  isLoading={isFetching}
  onRowClick={(row) => navigateToDetail(row.id)}
  defaultSortField="createdAt"
  defaultSortDirection="desc"
/>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Table with data rows |
| `loading` | Skeleton rows shown |
| `empty` | No data — shows emptyMessage |
| `sorted` | Column sort applied |

**Do:**
- ✅ Use cell renderer functions from table/cell-renderer/ for consistent formatting
- ✅ Use sort handler functions from table/sort-handler/ for correct sorting
- ✅ Provide emptyMessage with a call to action (see EmptyState pattern)
- ✅ Use onRowClick for navigation to detail pages

**Don't:**
- ❌ Don't create custom cell renderers if a standard one exists
- ❌ Don't hardcode column widths — let the table auto-size
- ❌ Don't use for fewer than 3 rows — use a simple list instead

### Cell Renderers

**Import from**: `src/common/component/table/cell-renderer/`

| Function | Usage |
|----------|-------|
| `getActionsCellRenderer` | Renders MCMoreActionsButton. Arg: action items array |
| `getStringWithClickCellRenderer` | Clickable string cell |
| `getTitleWithTooltipCellRenderer` | Title with info tooltip |
| `getMoneyCellRenderer` | Formatted currency. Arg: currency code |
| `getPercentageCellRenderer` | Formatted percentage |
| `getNumberCellRenderer` | Formatted number |
| `getDateCellRenderer` | Formatted date. Arg: format string |
| `getTimeIntervalCellRenderer` | Duration/interval |
| `getSwitchCellRenderer` | Toggle switch in cell |
| `getUserCellRenderer` | User avatar + name |
| `getFileSizeCellRenderer` | Human-readable file size |

### Sort Handlers

**Import from**: `src/common/component/table/sort-handler/`

| Function | Usage |
|----------|-------|
| `tableCaseInsensitiveSortHandler` | String sort (case insensitive) |
| `getTableTimestampSortHandler` | Date/timestamp sort |
| `getTableTimeRangeSortHandler` | Time range sort |

---

## Layout

Page-level layout components for structuring content areas.

### MCContentLayout

**Path**: `layout/content/MCContentLayout.tsx`

Standard page layout with breadcrumb, title, and optional right accessory. Used for list pages, detail pages, settings pages.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `ReactNode` | ✓ |  | Page title displayed in the header |
| `rightAccessory` | `ReactNode` |  |  | Content in the header right slot (e.g., create button) |
| `showBreadcrumb` | `boolean` |  |  | Shows MCBreadcrumb above the title |
| `useBodyStyle` | `boolean` |  | true | Applies default body padding styles |
| `fullHeight` | `boolean` |  |  | Makes wrapper take full height |

```tsx
import MCContentLayout from '@msm-portal/common/component/layout/content/MCContentLayout';
import { MCButton2 } from '@moloco/moloco-cloud-react-ui';

<MCContentLayout
  title={t('title')}
  rightAccessory={
    <MCButton2 color="primary" onClick={handleCreate} leftIcon="create">
      {t('create')}
    </MCButton2>
  }
  showBreadcrumb
>
  <MCBarTabs tabs={tabs} />
  {content}
</MCContentLayout>
```

**Do:**
- ✅ Use for all list/detail pages
- ✅ Always set showBreadcrumb for navigable pages
- ✅ Use rightAccessory for page-level primary action (Create button)

**Don't:**
- ❌ Don't use for form pages — use MCFormLayout instead
- ❌ Don't nest MCContentLayout inside MCFormLayout

### MCCircularLoader

**Path**: `@moloco/moloco-cloud-react-ui`

Full-page or inline circular loading spinner from Moloco UI.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `fillParent` | `boolean` |  |  | Centers loader in parent container, fills available space |

```tsx
import { MCCircularLoader } from '@moloco/moloco-cloud-react-ui';

// Full page loading
if (isLoading) return <MCCircularLoader fillParent />;

// Conditional rendering
return isFetching || !data
  ? <MCCircularLoader fillParent />
  : <EntityDetail entity={data} />;
```

**Do:**
- ✅ Use MCCircularLoader with fillParent for full-page loading

**Don't:**
- ❌ Don't show loader for less than 300ms — use debounced loading state

### MCConfirmDialog

**Path**: `@moloco/moloco-cloud-react-ui`

Confirmation dialog with customizable cancel and confirm buttons. Used for destructive action confirmations.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | ✓ |  | Controls dialog visibility |
| `title` | `ReactNode` | ✓ |  | Dialog title |
| `cancelButtonOptions` | `{ label: string; leftIcon?: ReactNode; onClick: () => void; disabled?: boolean }` | ✓ |  | Cancel button configuration |
| `confirmButtonOptions` | `{ label: string; color?: string; leftIcon?: ReactNode; onClick: () => void; disabled?: boolean }` | ✓ |  | Confirm button configuration |
| `onClose` | `() => void` | ✓ |  | Close handler |
| `disableCloseButton` | `boolean` |  |  | Disables the X close button |

```tsx
<MCConfirmDialog
  isOpen={confirmOpen}
  title={t('dialog.title')}
  cancelButtonOptions={{
    label: t('dialog.cancel'),
    leftIcon: <MCIcon icon="delete" inheritColor />,
    onClick: handleDiscard,
  }}
  confirmButtonOptions={{
    label: t('dialog.confirm'),
    color: 'primary',
    leftIcon: <MCIcon icon="check" inheritColor />,
    onClick: handleConfirm,
  }}
  onClose={() => setConfirmOpen(false)}
>
  {t('dialog.message')}
</MCConfirmDialog>
```

**States:**

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `open` | Dialog is visible |

**Do:**
- ✅ Use for destructive action confirmations
- ✅ Make cancel the safe/default action
- ✅ Clearly describe consequences in body text

**Don't:**
- ❌ Don't use for non-destructive confirmations
- ❌ Don't make the destructive action the default/highlighted button

---

## Empty State

Patterns for when there is no data to display.

### EmptyState

**Path**: `pattern (not a single component)`

Composition pattern for empty data views. Combine MCStack + MCIcon + text + MCButton2.

```tsx
import styled from 'styled-components';
import { MCStack, MCIcon, MCButton2 } from '@moloco/moloco-cloud-react-ui';

const SCEmptyStateWrapper = styled.div`
  padding: ${(props) => props.theme.mcui.spacing(8, 0)};
`;

const SCEmptyStateTitle = styled.div`
  font-size: ${(props) => props.theme.mcui.typography.H_4.size};
  font-weight: ${(props) => props.theme.mcui.typography.H_4.fontWeight};
  color: ${(props) => props.theme.mcui.palette.content.primary};
`;

const SCEmptyStateDescription = styled.div`
  font-size: ${(props) => props.theme.mcui.typography.BODY_2.size};
  color: ${(props) => props.theme.mcui.palette.content.secondary};
`;

<SCEmptyStateWrapper>
  <MCStack direction="column" alignItems="center" spacing={3}>
    <MCIcon icon="inbox" width={48} height={48} />
    <SCEmptyStateTitle>No campaigns yet</SCEmptyStateTitle>
    <SCEmptyStateDescription>Create your first campaign to get started.</SCEmptyStateDescription>
    <MCButton2 color="primary" leftIcon="create" onClick={handleCreate}>Create Campaign</MCButton2>
  </MCStack>
</SCEmptyStateWrapper>
```

**Do:**
- ✅ Show a clear message explaining why there's no data
- ✅ Provide a primary action to create/add the first item
- ✅ Use a relevant icon to reinforce the message

**Don't:**
- ❌ Don't show an empty table with just headers
- ❌ Don't leave the user without a next action

---

## Library Primitives

Additional components from @moloco/moloco-cloud-react-ui used directly without portal wrapping. Read type definitions for full API.

**Import from**: `@moloco/moloco-cloud-react-ui`

### MCButton

Legacy button component. Prefer MCButton2 for new code. Still used in some older portal areas.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'contained' | 'text' | 'icon'` |  |  | Button style variant |
| `size` | `'large' | 'default' | 'small'` |  |  | Button size |
| `color` | `'primary' | 'secondary' | 'danger' | 'default'` |  |  | Button color |
| `leftIcon` | `ReactNode` |  |  | Icon before label |
| `rightIcon` | `ReactNode` |  |  | Icon after label |
| `onClick` | `(event: React.MouseEvent<HTMLElement>) => void` |  |  | Click handler |
| `testId` | `string` |  |  | Test ID |

### MCBanner

Notification banner for page-level messages. Supports info, warning, and critical variants.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'info' | 'warning' | 'critical'` | ✓ |  | Banner type determining color and icon |
| `fill` | `boolean` |  |  | Full-width filled background style |
| `dense` | `boolean` |  |  | Compact padding for inline use |
| `singleLine` | `boolean` |  |  | Constrains content to a single line |
| `onClose` | `() => void` |  |  | Close/dismiss handler. Shows close button when provided. |
| `className` | `string` |  |  | Additional CSS class |

```tsx
<MCBanner variant="warning" onClose={handleDismiss}>
  This campaign has limited budget remaining.
</MCBanner>
```

### MCSearchBar

Search input with debounce support, loading indicator, and optional border/shadow styling.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `searchWord` | `string` | ✓ |  | Controlled search value |
| `setSearchWord` | `React.Dispatch<React.SetStateAction<string>>` | ✓ |  | State setter for search value |
| `placeholder` | `string` |  |  | Input placeholder text |
| `border` | `boolean` |  |  | Show border around input |
| `shadow` | `boolean` |  |  | Show box shadow |
| `highlightBorder` | `boolean` |  |  | Highlight border on focus |
| `isLoading` | `boolean` |  |  | Show loading spinner |
| `disabled` | `boolean` |  |  | Disabled state |
| `square` | `boolean` |  |  | Square corners instead of rounded |
| `debounceTimeout` | `number` |  |  | Debounce delay in ms |
| `onKeyDown` | `(event: React.KeyboardEvent<HTMLInputElement>) => void` |  |  | Key down handler |
| `testId` | `string` |  |  | Test ID |

```tsx
const [searchWord, setSearchWord] = useState('');

<MCSearchBar
  searchWord={searchWord}
  setSearchWord={setSearchWord}
  placeholder="Search campaigns..."
  border
  debounceTimeout={300}
/>
```

### MCTag

Styled inline tag/label for categorization. Fully customizable via style props.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | ✓ |  | Tag content (text label) |
| `padding` | `CSSProperties['padding']` |  |  | Custom padding |
| `margin` | `CSSProperties['margin']` |  |  | Custom margin |
| `border` | `CSSProperties['border']` |  |  | Custom border |
| `borderRadius` | `CSSProperties['borderRadius']` |  |  | Custom border radius |
| `fontSize` | `CSSProperties['fontSize']` |  |  | Custom font size |
| `fontColor` | `CSSProperties['color']` |  |  | Text color |
| `fontWeight` | `CSSProperties['fontWeight']` |  |  | Font weight |
| `backgroundColor` | `CSSProperties['backgroundColor']` |  |  | Background color |

```tsx
<MCTag backgroundColor="#E3F2FD" fontColor="#1565C0" fontSize="12px" borderRadius="4px" padding="2px 8px">
  Beta
</MCTag>
```

### MCBoxTab

Box-style tab components for segmented tab navigation. Consists of MCBoxTabsWrapper, MCBoxTabs, MCBoxTab, and MCBoxTabIndicator styled components.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `$height (MCBoxTabsWrapper)` | `string` |  |  | Container height |
| `$underline (MCBoxTabsWrapper)` | `boolean` |  |  | Show underline on container |
| `$indent (MCBoxTabsWrapper)` | `string` |  |  | Left indent |
| `$fontSize (MCBoxTab)` | `string` |  |  | Tab font size |
| `$minWidth (MCBoxTab)` | `string` |  |  | Tab minimum width |
| `$active (MCBoxTab)` | `boolean` |  |  | Whether this tab is active |

```tsx
<MCBoxTabsWrapper $underline>
  <MCBoxTabs>
    <MCBoxTab $active={activeTab === 0} onClick={() => setActiveTab(0)}>Tab 1</MCBoxTab>
    <MCBoxTab $active={activeTab === 1} onClick={() => setActiveTab(1)}>Tab 2</MCBoxTab>
  </MCBoxTabs>
  <MCBoxTabIndicator />
</MCBoxTabsWrapper>
```

### MCCollapse

Animated collapse/expand wrapper. Re-exports Material UI Collapse component.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `in` | `boolean` | ✓ |  | Controls expanded/collapsed state |
| `timeout` | `number | 'auto' | { enter?: number; exit?: number }` |  |  | Animation duration in ms |
| `collapsedSize` | `string | number` |  | '0px' | Height when collapsed |
| `unmountOnExit` | `boolean` |  |  | Unmount children when collapsed |

```tsx
<MCCollapse in={isExpanded} timeout="auto" unmountOnExit>
  <div>Collapsible content here</div>
</MCCollapse>
```

### MCMarkdown

Renders markdown text as HTML using the Remarkable library.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `markdownText` | `string` | ✓ |  | Markdown string to render |
| `renderOption` | `Remarkable.Options` |  |  | Remarkable rendering options |

```tsx
<MCMarkdown markdownText="**Bold** and _italic_ text with [links](https://example.com)" />
```

### MCChip

Removable chip/tag component for displaying selected options with optional remove action.

**Generic**: OptionType — the option data type

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `option` | `OptionType` | ✓ |  | The option data to display (must have label property) |
| `disabled` | `boolean` |  |  | Disabled state |
| `onRemove` | `(option: OptionType) => void` |  |  | Remove handler. Shows remove button when provided. |
| `fullWidth` | `boolean` |  |  | Chip takes full container width |
| `readOnly` | `boolean` |  |  | Read-only state (no remove) |
| `isLost` | `boolean` |  |  | Visual indicator for lost/invalid option |
| `customLabelComponent` | `React.ComponentType<{ option: OptionType }>` |  |  | Custom label renderer |
| `testId` | `string` |  |  | Test ID |

```tsx
<MCChip
  option={{ value: 'us', label: 'United States', key: 'us' }}
  onRemove={(opt) => handleRemove(opt)}
/>
```

### MCDataTable

Virtualized data table with column reordering, resizing, frozen columns, and custom cell renderers. For high-performance tabular data.

**Generic**: Column data via MCDataTable.Column children

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `height` | `number` | ✓ |  | Table height in px |
| `rowHeight` | `number` | ✓ |  | Row height in px |
| `rowCount` | `number` | ✓ |  | Total number of rows |
| `columnWidths` | `number[]` | ✓ |  | Array of column widths in px |
| `children` | `ReactElement<MTDataTableColumnProps>[]` |  |  | MCDataTable.Column elements |
| `width` | `number` |  |  | Table width in px |
| `enableColumnReordering` | `boolean` |  |  | Allow column drag reordering |
| `enableColumnResizing` | `boolean` |  |  | Allow column width resizing |
| `enableSubHeader` | `boolean` |  |  | Enable sub-header row |
| `enableFooter` | `boolean` |  |  | Enable footer row |
| `frozenColumnCount` | `number` |  |  | Number of frozen left columns |
| `loading` | `boolean` |  |  | Loading state |
| `overscanCount` | `number` |  |  | Number of extra rows to render outside viewport |
| `onColumnWidthsChanges` | `(columnIndex: number, width: number) => void` |  |  | Column resize handler |
| `onColumnsReordered` | `(oldIndex: number, newIndex: number) => void` |  |  | Column reorder handler |
| `onHeaderColumnClick` | `(columnIndex: number) => void` |  |  | Header click handler (for sorting) |
| `testId` | `string` |  |  | Test ID |

### MCSelect

Standalone select dropdown (not Formik-integrated). Built on react-select.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `options` | `Array<{ label: string; value: any; extra?: any }>` | ✓ |  | Select options |
| `onChange` | `(value: any) => void` | ✓ |  | Change handler |
| `value` | `MTSelectOption | null` |  |  | Currently selected option |
| `name` | `string` |  |  | Input name attribute |
| `label` | `string` |  |  | Label text |
| `required` | `boolean` |  |  | Required indicator |
| `hint` | `string` |  |  | Hint text below select |
| `isSearchable` | `boolean` |  |  | Allow typing to search options |
| `isDisabled` | `boolean` |  |  | Disabled state |
| `width` | `'small' | 'medium' | 'full'` |  |  | Select width preset |
| `readOnly` | `boolean` |  |  | Read-only state |
| `testId` | `string` |  |  | Test ID |

```tsx
<MCSelect
  options={[{ label: 'Active', value: 'active' }, { label: 'Paused', value: 'paused' }]}
  value={selectedOption}
  onChange={setSelectedOption}
  label="Status"
/>
```

### MCDatePicker

Standalone date picker input. Not Formik-integrated.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `Date | null` | ✓ |  | Selected date value |
| `onChange` | `(newDate: Date | null) => void` | ✓ |  | Date change handler |
| `placeholder` | `string` |  |  | Input placeholder |
| `minDate` | `Date` |  |  | Minimum selectable date |
| `maxDate` | `Date` |  |  | Maximum selectable date |
| `timezone` | `string` |  |  | Timezone for date display |
| `disabled` | `boolean` |  |  | Disabled state |
| `isError` | `boolean` |  |  | Error state visual indicator |
| `inputWidth` | `string` |  |  | Input element width |
| `useResponsive` | `boolean` |  |  | Responsive layout mode |
| `datePickerPopperRef` | `React.RefObject<HTMLDivElement>` |  |  | Ref for the picker popper element |
| `testId` | `string` |  |  | Test ID |

```tsx
<MCDatePicker
  value={startDate}
  onChange={setStartDate}
  placeholder="Select date"
  minDate={new Date()}
/>
```

### MCTimePicker

Standalone time picker input. Not Formik-integrated.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `Date | null` | ✓ |  | Selected time value |
| `onChange` | `(newDate: Date) => void` | ✓ |  | Time change handler |
| `placeholder` | `string` |  |  | Input placeholder |
| `timezone` | `string` |  |  | Timezone for display |
| `disabled` | `boolean` |  |  | Disabled state |
| `isError` | `boolean` |  |  | Error state visual indicator |
| `inputWidth` | `string` |  |  | Input element width |
| `useResponsive` | `boolean` |  |  | Responsive layout mode |
| `testId` | `string` |  |  | Test ID |

```tsx
<MCTimePicker
  value={selectedTime}
  onChange={setSelectedTime}
  placeholder="Select time"
/>
```

### MCDynamicDropdown

Async multi-select dropdown with paginated option loading, search, and popper-based positioning.

**Generic**: ValueType — the option value type (default: string)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `loadOptions` | `(params: { cursor?: string; searchText?: string; limit?: number }) => Promise<{ options: Array<{ label: string; value: ValueType }>; cursor: string; totalCount: number }>` | ✓ |  | Async function to load options with pagination |
| `onChange` | `(newValues: Array<{ label: string; value: ValueType }>) => void` | ✓ |  | Selection change handler |
| `value` | `Array<{ label: string; value: ValueType }>` | ✓ |  | Currently selected options |
| `popperPlacement` | `PopperProps['placement']` |  |  | Popper position relative to trigger |
| `clearable` | `boolean` |  |  | Allow clearing all selections |
| `disabled` | `boolean` |  |  | Disabled state |
| `limit` | `number` |  |  | Page size for option loading |
| `threshold` | `number` |  |  | Scroll threshold to trigger next page load |
| `leftFooterContent` | `ReactNode` |  |  | Custom content in dropdown footer left |
| `selectPlaceholder` | `string` |  |  | Placeholder for the select trigger |
| `searchPlaceholder` | `string` |  |  | Placeholder for the search input |
| `noOptionFoundLabel` | `string` |  |  | Text when no options match search |
| `confirmLabel` | `string` |  |  | Confirm button label |
| `loadMoreValueLabel` | `string` |  |  | Load more button label |

```tsx
<MCDynamicDropdown<string>
  loadOptions={async ({ cursor, searchText, limit }) => {
    const result = await fetchOptions({ cursor, searchText, limit });
    return { options: result.items, cursor: result.nextCursor, totalCount: result.total };
  }}
  value={selectedOptions}
  onChange={setSelectedOptions}
  selectPlaceholder="Select items..."
/>
```

### MCFilter

Multi-dimension filter component supporting number, string, option, and single-option filter types with an apply button.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `dimensions` | `MTDimension[]` | ✓ |  | Available filter dimensions (fields). Each dimension defines its valueType (number/string/option/singleOption) and options. |
| `onChange` | `(newFilters: MTFilter[]) => void` |  |  | Filter change handler |
| `filters` | `MTFilter[]` |  |  | Controlled filter state |
| `dirty` | `boolean` |  |  | Whether filters have unapplied changes |
| `showApplyButton` | `boolean` |  |  | Show an Apply button for batch filter application |
| `onApplyButtonClick` | `() => void` |  |  | Apply button click handler |
| `disabled` | `boolean` |  |  | Disabled state |
| `loading` | `boolean` |  |  | Loading state |
| `singleFilterPerDimension` | `boolean` |  |  | Allow only one filter per dimension |
| `supportBetweenOperator` | `boolean` |  |  | Enable between/not-between operators for number filters |
| `disableIsNot` | `boolean` |  |  | Disable excludes/is-not operators |
| `onDimensionChange` | `(selectedDimension: string) => void` |  |  | Callback when a dimension is selected (useful for lazy-loading dimension options) |
| `isOptionsForDimensionLoading` | `boolean` |  |  | Loading state for dimension options |
| `customLabel` | `{ addFilter?: string; apply?: string }` |  |  | Custom button labels |
| `emptyOptionStringAllowed` | `boolean` |  |  | Allow empty string as a filter option value |
| `testId` | `string` |  |  | Test ID |

**`MTDimension`**: `{ id: string; displayName: string; valueType: 'number' | 'string' | 'option' | 'singleOption'; options?: MTFilterOption[]; metadata?: any }`

**`MTFilter`**: `MTFilterForNumber | MTFilterForString | MTFilterForOption | MTFilterForSingleOption`

**`MTFilterOption`**: `{ displayName: string; value: string }`

### MCModal

Low-level modal wrapper. Re-exports react-modal. For most use cases, prefer MCCommonDialog or MCConfirmDialog.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | ✓ |  | Controls modal visibility |
| `onRequestClose` | `() => void` |  |  | Close request handler (Escape/overlay click) |
| `style` | `MIModalStyles (react-modal Styles)` |  |  | Custom overlay and content styles |
| `ariaHideApp` | `boolean` |  |  | Whether to hide app from screen readers when open |

- This is a thin re-export of react-modal. See react-modal docs for full API.

### MCPopper

Low-level popper positioning component. Re-exports Material UI Popper.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `open` | `boolean` | ✓ |  | Controls visibility |
| `anchorEl` | `HTMLElement | null` | ✓ |  | Anchor element for positioning |
| `placement` | `PopperProps['placement']` |  |  | Popper placement relative to anchor |
| `modifiers` | `object` |  |  | Popper.js modifiers for fine-grained positioning |

- This is a thin re-export of @material-ui/core Popper. See MUI docs for full API.

### MCStateIcon

State-specific icon component for entity lifecycle states. Different from MCIcon — renders state-specific colored icons.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `'active' | 'brand-new' | 'completed' | 'denied' | 'draft' | 'inactive' | 'new' | 'paused' | 'ready' | 'scheduled' | 'submitted'` | ✓ |  | State icon name |
| `width` | `number | string` |  |  | Icon width |
| `height` | `number | string` |  |  | Icon height |

```tsx
<MCStateIcon icon="active" width={16} height={16} />
```

### MCSingleNumberInput

Standalone number input with formatting, prefix/suffix, and validation messages. Uses react-number-format internally.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` |  |  | Input value (string for formatting) |
| `onValueChange` | `(value: NumberFormatValues) => void` |  |  | Value change handler with formatted/unformatted values |
| `name` | `string` |  |  | Input name attribute |
| `label` | `string` |  |  | Label text |
| `labelWidth` | `string` |  |  | Label width |
| `placeholder` | `string` |  |  | Placeholder text |
| `prefix` | `string` |  |  | Value prefix (e.g., '$') |
| `suffix` | `string` |  |  | Value suffix (e.g., '%') |
| `disabled` | `boolean` |  |  | Disabled state |
| `error` | `boolean` |  |  | Error state |
| `errorMsg` | `string` |  |  | Error message text |
| `warningMsg` | `string` |  |  | Warning message text |
| `guideMsg` | `string` |  |  | Guide/info message text |
| `fullWidth` | `boolean` |  |  | Full-width input |
| `width` | `string` |  |  | Custom input width |
| `allowLeadingZeros` | `boolean` |  |  | Allow leading zeros |
| `allowNegative` | `boolean` |  |  | Allow negative numbers |
| `isAllowed` | `(value: NumberFormatValues) => boolean` |  |  | Custom validation function |
| `onBlur` | `(event: React.FocusEvent<HTMLInputElement>) => void` |  |  | Blur handler |
| `onFocus` | `(event: React.FocusEvent<HTMLInputElement>) => void` |  |  | Focus handler |
| `testId` | `string` |  |  | Test ID |

```tsx
<MCSingleNumberInput
  value={budget}
  onValueChange={({ floatValue }) => setBudget(floatValue)}
  prefix="$"
  placeholder="Enter budget"
/>
```

### MCDebounceInput

Generic debounced input wrapper. Wraps any input element with debounce behavior.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `any` | ✓ |  | Input value |
| `element` | `any` | ✓ |  | The input or textarea element/component to wrap |
| `debounceTimeout` | `number` |  |  | Debounce delay in ms |
| `onChange` | `(event: React.ChangeEvent) => void` |  |  | Debounced change handler |

- Also accepts all standard input/textarea HTML attributes

---

