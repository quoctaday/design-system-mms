# Layout Contract

Mọi trang tài liệu và giao diện trong hệ thống phải tuân thủ layout contract này để bảo vệ tính nhất quán của khoảng cách (spacing).

## 1. Spacing phải được quản lý tập trung
Khoảng cách giữa các section lớn **bắt buộc** phải chuyển lên xử lý tại Parent Container.

**Đúng ✅** — Parent container dùng `gap`:
```css
.my-page {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-64); /* ← duy nhất 1 nơi kiểm soát */
}
```

**Sai ❌** — Mỗi section tự quản lý margin:
```css
.section-1 { margin-bottom: 64px; } /* ← lỗi orphan margin */
.section-2 { margin-top: 64px; }    /* ← lỗi double spacing */
```

## 2. Spacing Hierarchy
| Level | Spacing Method | Token Range |
|---|---|---|
| Giữa các section (top-level) | `gap` trên parent | `--spacing-64` |
| Giữa các group trong section | `gap` trên grid | `--spacing-32~48` |
| Giữa các item trong group | `gap` trên flex/grid | `--spacing-16~24` |
| Padding nội bộ của card | `padding` | `--spacing-16~40` |

## 3. Orphan Margin Dấu hiệu cần review
Tuyệt đối tránh các pattern sau:
- `margin-bottom` trên element cuối cùng trong container.
- `margin-top` trên element đầu tiên trong container đã có `gap`.
- Hai element liền nhau đều có margin gây chồng chéo khoảng cách.

---
[[00 - Introduction|Back to Introduction]]
