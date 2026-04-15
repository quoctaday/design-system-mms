# Sizing & Density

This scale provides a logic-driven height system for interactive elements, ensuring perfect vertical alignment and visual priority across the platform.

## 📏 Density Tokens
All density tokens are **Scaling-Aware**, meaning they automatically adjust based on the global `--scaling` factor (90% to 110%).

| Token | Base Value | Semantic Usage |
|-------|------------|----------------|
| `--size-1` | `28px` | Compact / Micro-UI |
| `--size-2` | `34px` | Standard / Default |
| `--size-3` | `42px` | Large / Call to Action |
| `--size-4` | `50px` | Hero / High Engagement |

## ⚖️ Global Scaling System
The MMS Platform supports dynamic scaling to optimize for different screen densities or user preferences. 
- **Base Variable**: `--scaling` (Default: `1`)
- **Impact**: All sizing, spacing, and radius tokens use `calc(BaseValue * var(--scaling))` to maintain mathematical proportions.
- **Goal**: Perfect visual balance regardless of the selected display density.

## 🛠 Usage
Always pair `--size-X` with the matching typography and spacing tokens. For example, a Size 2 button should ideally use `--font-size-2` and `--spacing-12` horizontal padding.

---
[[00 - Introduction|Back to Introduction]]
