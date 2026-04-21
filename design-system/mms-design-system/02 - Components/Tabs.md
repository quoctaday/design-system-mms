# Tabs

A layout component that partitions content into distinct layers, ensuring only one layer is visible at any given time. The V4.3 Tabs system utilizes a sophisticated **Sliding Indicator** mechanism to provide a fluid, premium navigational experience.

## Architecture (Compound Pattern)

```tsx
<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">...</Tabs.Content>
  <Tabs.Content value="tab2">...</Tabs.Content>
</Tabs.Root>
```

## Props (Tabs.Root)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'classic' \| 'surface'` | `'classic'` | Defines the visual presentation style of the tabs. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Sets the height and typography scale of the tab triggers. |
| `radius` | `RadiusScale` | `'4'` | Specifies the corner rounding applied to the tab list container. |
| `defaultValue` | `string` | - | The value of the tab that should be active by default. |
| `value` | `string` | - | The current active tab value (used for controlled state). |

## High-Fidelity Technical Patterns

The V4.3 Tabs system has been upgraded with elite architectural standards:
- **Typography Stability (Hidden Span)**: Each Trigger includes a hidden text clone with `font-weight: medium`. This ensures the active state (which often uses a heavier weight) does not cause the tab width to expand, thereby preventing visual layout jitter.
- **Scroll Management**: The `mms-tabs-list` supports seamless horizontal scrolling with hidden scrollbar rails (`scrollbar-width: none`), ensuring a premium experience on touch-sensitive and small-screen devices.
- **Dynamic Sliding Indicator**: The indicator's position and dimensions are calculated in real-time, delivering an absolute and friction-free transition between interactive states.

## Variants

- **Classic (Default)**: Utilizes a simplified underline indicator. Perfectly suited for primary page-level content partitioning.
- **Surface**: Features a recessed sliding block design (mirroring the Segmented Control style). Optimized with synchronized corner radii and a subtle `shadow-1` lift for depth.

---
**Related:** [[02 - Components/SegmentedControl|SegmentedControl]] • [[02 - Components/Dialog|Dialog]] • [[04 - Layouts/Introduction|Layouts Introduction]]
