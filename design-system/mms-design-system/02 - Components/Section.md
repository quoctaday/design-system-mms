# Section

A layout component designed to separate large content blocks vertically, providing standardized vertical padding to maintain the structural rhythm of the page.

## Features

- **Semantic Layout**: Renders as a semantic `<section>` HTML tag by default, enhancing SEO and providing clear document structure.
- **Standardized Vertical Spacing**: Offers 3 levels of vertical padding from slim (`1`) to generous (`3`), enabling synchronized spacing between major page sections.
- **Box Inheritance**: Inherits all architectural properties from the [[02 - Components/Box|Box]] component for maximum layout flexibility.

## Usage

```tsx
import { Section, Text, Heading } from '@mms/ui';

export const Example = () => (
  <>
    <Section size="3">
      <Heading>Product Introduction</Heading>
      <Text>Detailed content regarding the standout features and capabilities of the platform.</Text>
    </Section>
    
    <Section size="1" style={{ background: 'var(--gray-2)' }}>
      <Text>Small supplemental note section at the bottom of the page.</Text>
    </Section>
  </>
);
```

## Props (Responsive Supported)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3` | `3` | Determines the vertical padding (spacing) level of the Section. |

*Note: Section also reserves support for all architectural props available in the [[02 - Components/Box|Box]] component.*
