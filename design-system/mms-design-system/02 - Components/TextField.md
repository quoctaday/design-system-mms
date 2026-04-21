# TextField

The foundational text entry component, featuring high customizability and a "Slot" system for seamless icon integration and semantic status feedback.

## Features

- **Slot System**: Effortlessly add IconButtons or decorative Icons to the leading or trailing edges of the input field while maintaining strict layout integrity.
- **Semantic Feedback**: Automatically adjusts perimeter colors (`color`) to visually communicate `success`, `error`, or `warning` states.
- **Soft & Surface Variants**: Offers two distinct background treatments to accommodate different form priority levels and UI contexts.
- **Focus Ring Protection**: Implements the integrated Shadow-Ring protocol to ensure a sharp, professional visual response during focus states across all resolutions.

## Usage

```tsx
import { TextField } from '@mms/ui';
import { RiSearchLine } from 'react-icons/ri';

export const Example = () => (
  <TextField.Root size="2" color="brand" variant="surface">
    <TextField.Slot>
      <RiSearchLine size="16" />
    </TextField.Slot>
    <TextField.Input placeholder="Search records..." />
  </TextField.Root>
);
```

## Props

### TextField.Root

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3` | `2` | Determines the height and typography scale of the TextField. |
| **`variant`** | `surface \| soft` | `surface` | Defines the background materiality and border treatment. |
| **`color`** | `brand \| gray \| success \| warning \| error` | `brand` | Sets the semantic status color of the input boundary. |
| **`radius`** | `none \| 1-6 \| full` | `4` | Specifies the corner rounding of the input container. |
| **`disabled`** | `boolean` | `false` | When true, prevents user interaction and applies muted styling. |
