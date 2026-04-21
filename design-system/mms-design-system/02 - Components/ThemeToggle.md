# ThemeToggle

A quick-switch control for toggling between Light and Dark modes, typically integrated within the Header or User Profile sections.

## Features

- **One-tap Switch**: Instantly toggles the global theme state with a single interaction.
- **Visual Feedback**: Automatically alternates its iconography (Sun / Moon) to reflect the current active state.
- **Label Support**: Optional support for displaying descriptive text labels (`Dark Mode` / `Light Mode`) alongside the icon.
- **Self-contained Logic**: Automatically identifies the current theme state via the system Context, eliminating the need for external state management.

## Usage

```tsx
import { ThemeToggle } from '@mms/ui';

export const Header = () => (
  <header>
    <div className="spacer" />
    <ThemeToggle showLabel />
  </header>
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`showLabel`** | `boolean` | `false` | When true, renders a descriptive text label next to the icon. |
| **`className`** | `string` | - | Optional CSS class name for custom styling overrides. |
