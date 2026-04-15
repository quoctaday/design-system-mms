# Table

Thành phần `Table` được tối ưu hóa cho hiển thị dữ liệu mật độ cao, đảm bảo tính dễ đọc và thẩm mỹ **Flat-Premium** v4.0.

## 💎 Design Standards

- **Hairline Borders**: Sử dụng viền siêu mảnh (`0.5px` - `1px`) với màu `var(--border-subtle)` để tạo sự phân tách tinh tế mà không gây rối mắt.
- **Modern Striping**: Các hàng kẻ sọc sử dụng màu nền cực nhẹ (`var(--surface-subtle)`), giúp mắt dễ dàng theo dõi dòng dữ liệu.
- **Sticky Header**: Luôn được khuyến khích cho các bảng dài để giữ ngữ cảnh cột.

## 🎨 Variants

- **Surface (Primary)**: Có nền trắng (`var(--surface-panel)`), viền bao quanh mờ và bóng đổ nhẹ (`shadow-1`). Phù hợp làm container chính trên trang.
- **Ghost**: Nền trong suốt, không có đường viền bao quanh. Thích hợp khi đặt lồng trong các Card hoặc Panel lớn hơn.

## 📏 Sizing & Scale

| Size | Padding | Font | Usage |
| :--- | :--- | :--- | :--- |
| `1` | `8px 12px` | `12px` | High-density operational data |
| `2` | `12px 16px` | `14px` | Standard dashboards (Default) |
| `3` | `16px 24px` | `16px` | Hero tables, customer-facing lists |

## 🚥 Token Mapping

| Element | Token | Usage |
| :--- | :--- | :--- |
| **Row Border** | `var(--border-subtle)` | Đường kẻ ngang phân cách hàng |
| **Header Text** | `var(--content-subtle)` | Nhãn cột (Uppercase + Semibold) |
| **Active/Hover Row**| `var(--surface-subtle)` | Trạng thái nhấn nháp khi di chuột qua |
| **Striped Row** | `var(--surface-subtle)` | Hàng chẵn (Even rows) |

---
**Related:** [[02 - Components/Pagination|Pagination]] • [[02 - Components/Checkbox|Checkbox]] • [[02 - Components/Badge|Badge]]
