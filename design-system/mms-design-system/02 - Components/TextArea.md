# TextArea

A multi-line text input component that inherits its core architectural logic and styling from TextField, while optimized for entering longer blocks of content.

## Features

- **Slot Support**: In contrast to standard TextFields, TextArea slots are vertically aligned to the `top` by default, ensuring optimal positioning within the larger text container.
- **Form-Resilient**: Engineered to work seamlessly with standard CSS `resize` properties, maintaining layout stability during dimensions changes.
- **Consistent Visual Language**: Inherits the complete semantic color system (`color`) and proportional radius scale (`radius`) from the foundational MMS Input framework.

## Usage

```tsx
import { TextArea } from '@mms/ui';

export const Example = () => (
  <TextArea 
    placeholder="Enter detailed description..." 
    size="2" 
    variant="surface"
    rows={4}
  />
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3` | `2` | Determines the height and typography scale of the TextArea. |
| **`variant`** | `surface \| soft` | `surface` | Defines the background materiality and border treatment. |
| **`color`** | `brand \| gray \| success \| warning \| error` | `brand` | Sets the semantic status color of the input boundary. |
| **`radius`** | `none \| 1-6 \| full` | `4` | Specifies the corner rounding of the input container. |
| **`leftSlot`** | `ReactNode` | - | Content rendered in the top-left auxiliary slot. |
| **`rightSlot`** | `ReactNode` | - | Content rendered in the top-right auxiliary slot. |
