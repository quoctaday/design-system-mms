# Container

A structural component that governs the maximum width (max-width) of content, ensuring page layouts remain balanced and highly legible across large-screen viewports.

## Features

- **Standardized Max-Widths**: Provides 4 precisely calibrated max-width levels, ranging from narrow (`1`) to comprehensive (`4`).
- **Centered by Default**: Automatically horizontally centers content within its parent container for optimal visual balance.
- **Box Inheritance**: Inherits all architectural properties from the [[02 - Components/Box|Box]] component, enabling seamless additional padding or margin customization.

## Usage

```tsx
import { Container, Box } from '@mms/ui';

export const Example = () => (
  <Container size="3">
    <Box p="4" style={{ background: 'var(--gray-3)' }}>
      This content will not exceed the horizontal boundaries prescribed by a Size 3 Container.
    </Box>
  </Container>
);
```

## Props (Responsive Supported)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3 \| 4 \| none` | `4` | Determines the maximum horizontal width of the container. |

*Note: Container also reserves support for all architectural props available in the [[02 - Components/Box|Box]] component.*
