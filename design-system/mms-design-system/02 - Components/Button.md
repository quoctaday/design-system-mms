# Button

The primary action component for the MMS Platform, optimized for both high-impact CTAs and dense operational navigation.

## 📏 Sizing
Buttons follow the standardized height tokens for operational density.

| Prop | Height | Usage |
| :--- | :--- | :--- |
| **`size="1"`** | `32px` | Micro actions, compact tables |
| **`size="2"`** | `40px` | Standard UI actions (Default) |
| **`size="3"`** | `48px` | Primary CTA, Large modals |
| **`size="4"`** | `56px` | Hero sections, high-impact actions |

## ⤗ Radius
Buttons use the standard numeric scale. When the theme is set to `Full`, buttons automatically opt-in to a pill shape.

| Prop | Value | Note |
| :--- | :--- | :--- |
| **`radius="none"`** | `0px` | Sharp corners |
| **`radius="1"`**    | `3px` | Micro rounding |
| **`radius="2"`**    | `4px` | Small rounding |
| **`radius="3"`**    | `6px` | Medium rounding |
| **`radius="4"`**    | `8px` | Standard rounding (Default) |
| **`radius="full"`** | `9999px`| Pill shape (Force) |

## 🎨 Variants
- **Solid**: High-intent actions using solid brand/semantic backgrounds (`--surface-solid`).
- **Soft**: Low-emphasis actions with subtle backgrounds and high-contrast text.
- **Outline**: Secondary actions with defined borders and transparent backgrounds.
- **Ghost**: Minimal actions within list items or headers (No background until hover).
- **Surface**: High-precision buttons with both borders and subtle backgrounds.

## 🛡️ Focus Halo Standard
Tất cả các Buttons (trừ Ghost/Links tùy trường hợp) đều áp dụng tiêu chuẩn **mms-focus-halo-brand**. Đây là hệ thống đổ bóng 3 lớp giúp trạng thái Focus trông sắc nét và rực rỡ, đảm bảo khả năng truy cập (Accessibility).

---
**Related:** [[02 - Components/DropdownMenu|DropdownMenu]] • [[01 - Foundations/Colors|Colors Foundation]] • [[02 - Components/Badge|Badge]]
