# Spacing & Grid

We use a systematic spacing architecture to maintain layout balance and visual rhythm across dense fintech dashboards.

## 📏 Spacing Tokens
Standard padding, margins, and gaps.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-2` | `2px` | Micro-adjustments |
| `--spacing-4` | `4px` | Tight inline gaps |
| `--spacing-8` | `8px` | Icon/Label pairings |
| `--spacing-12` | `12px` | Small component spacing |
| `--spacing-16` | `16px` | Standard padding/gap |
| `--spacing-24` | `24px` | Section padding |
| `--spacing-32` | `32px` | Page gutter margins |
| `--spacing-40` | `40px` | Large component gaps |
| `--spacing-48` | `48px` | Hero section padding |
| `--spacing-64` | `64px` | Page-level section spacing |

## 🕸 Grid System
- **Layout Type:** 12-column Fluid Grid.
- **Section Spacing:** Standard sections must be separated by `var(--spacing-64)` using parent container gaps.
- **Internal Alignment:** Elements must align to the active grid density specified in the layout contract.

---
[[00 - Introduction|Back to Introduction]]
