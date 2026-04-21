# Grid

A foundational layout component derived from `Box`, offering a robust two-dimensional layout engine powered by CSS Grid. It is optimized for constructing intricate data grids, image galleries, or sophisticated page architectures.

## Features

- **Responsive Column Scaling**: Intelligently defines the number of columns across specific system breakpoints (e.g., 1 column on handheld devices, escalating to 3+ columns on desktop viewports).
- **Dual Gap Control**: Provides precision control through independent spacing for rows (`gapY`) and columns (`gapX`), ensuring layout balance.
- **Implicit Flow Management**: Governs the automatic placement and flow direction of grid items, fully supporting `dense` packing modes for optimized spatial usage.

## Usage

```tsx
import { Grid, Box } from '@mms/ui';

export const Example = () => (
  <Grid columns={{ initial: '1', md: '3' }} gap="4">
    <Box height="100px" style={{ background: 'var(--accent-3)' }} />
    <Box height="100px" style={{ background: 'var(--accent-3)' }} />
    <Box height="100px" style={{ background: 'var(--accent-3)' }} />
  </Grid>
);
```

## Props (Responsive Supported)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`columns`** | `1` - `12` | - | Sets a fixed number of columns for the grid container. |
| **`gap`** | `0` - `9` | `0` | Applies a uniform spacing token to both rows and columns. |
| **`gapX`** | `0` - `9` | `0` | Specifies independent horizontal spacing between columns. |
| **`gapY`** | `0` - `9` | `0` | Specifies independent vertical spacing between rows. |
| **`flow`** | `row \| column \| dense...` | `row` | Determines the automatic placement algorithms for grid children. |
| **`align`** | `start \| center \| end...` | `stretch` | Manages the alignment of items along the vertical axis. |
| **`justify`** | `start \| center \| end...` | `start` | Manages the distribution and alignment of items along the horizontal axis. |

*Note: Grid also reserves support for all architectural props available in the [[02 - Components/Box|Box]] component.*
