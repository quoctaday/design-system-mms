# Spinner

A visual indicator used to communicate an ongoing loading or processing state through a seamless rotating animation, designed to maintain interface fluidness without being intrusive.

## Features

- **Fluid Animation**: Implements a high-performance, frame-rate-optimized rotation animation that avoids CPU stutter.
- **Contextual Variants**: Offers three distinct color mappings—`default`, `accent`, and `on-solid`—to ensure guaranteed visibility regardless of the underlying background materiality.
- **Scalable Architecture**: Supports four precise sizing levels to accommodate everything from micro-UI indicators to major section-level loading states.

## Usage

```tsx
import { Spinner, Flex, Button } from '@mms/ui';

export const Example = () => (
  <Flex gap="4" align="center">
    {/* Default small scale spinner */}
    <Spinner size="2" />
    
    {/* High-fidelity spinner embedded within a button */}
    <Button disabled>
      <Spinner size="1" variant="on-solid" />
      Processing...
    </Button>
  </Flex>
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3 \| 4` | `2` | Determines the dimensions of the spinner element. |
| **`variant`** | `default \| accent \| on-solid` | `default` | Specifies the color mapping optimized for the host background surface. |
