# Radio Group

A single-selection component utilized for choosing one option from a predefined list. The updated Radio Group features a robust Compound Component architecture, ensuring all items inherit stylistic properties from the Root for absolute UI consistency.

## Architecture (Compound Pattern)

```tsx
<RadioGroup.Root defaultValue="1" variant="surface" size="2">
  <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
</RadioGroup.Root>
```

## Props (RadioGroup.Root)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'classic' \| 'surface' \| 'soft'` | `'surface'` | Defines the visual presentation style of the Radio Items. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Sets the dimensions for both the Radio indicator and the associated text label. |
| `color` | `BrandColor` | `'brand'` | Specifies the primary semantic color used for the Active/Selected state. |
| `defaultValue` | `string` | - | The value of the Radio Item that is selected by default. |

## Variants

- **Classic**: Features a high-contrast border and a prominent selection Dot. Ideal for high-intent, traditional form structures.
- **Surface**: A sophisticated design utilizing a subtle background fill and a Brand-synced selection Dot. (Default operational standard).
- **Soft**: Employs a minimalist, borderless aesthetic with a very light background, delivering a purely modern Flat-Premium character.

## 🎨 Token Specs
- **Variants**: `classic`, `surface`, `soft`.
- **Primary Fill (Checked)**: Utilizes the `var(--accent-9)` high-contrast brand token.
- **Border Architecture**: Employs `box-shadow: inset` with `var(--stroke-width-1)` to achieve a perfectly circular, resolution-independent boundary.
- **Focus Indicators**: Integrates the **Focus Halo Standard** via the `:focus-visible` pseudo-class on the underlying native input, precisely encircling the circular container.
- **Precision Centering**: The internal Dot indicator is mathematically centered within the container using Flexbox alignment.
- **Vertical Rhythm**: Applies the **WokerDS leading-trim** technique to the `mms-radio-item-label` to ensure exact alignment with the radio indicator.

---
**Related:** [[02 - Components/Checkbox|Checkbox]] • [[02 - Components/Select|Select]] • [[02 - Components/Tabs|Tabs]]
