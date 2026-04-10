# Systemic Development Workflow

Khi nhận yêu cầu tạo trang mới, cả Developer và AI phải tuân thủ quy trình **"Systemic-First"** để bảo vệ tính nhất quán của hệ thống.

## 🏗 Quy trình thực hiện

### 1. Kiểm toán & Ưu tiên (Audit & Priority)
- **Check `src/components/ui/`**: Bắt buộc dùng component có sẵn (Badge, Button, Table, Tabs...) thay vì tự viết HTML/CSS từ đầu.
- **Check `theme.css`**: Đối chiếu Color, Spacing, Radius, Shadow Tokens. Không hardcode hex, px, hay shadows mới.
- **Check Documentation**: Đảm bảo hiểu rõ Layout Contract (Grid-12, Gap-64).

### 2. Nguyên tắc Component-First
- **Ánh xạ UI**: Từng phần của trang phải được map vào component tương ứng (ví dụ: Trạng thái -> `<Badge />`).
- **Props-Driven**: Chỉ điều chỉnh UI qua Props (`variant`, `size`, `color`) có sẵn. 
- **Minimal Custom CSS**: Chỉ viết CSS cho layout đặc thù (Grid areas), tuyệt đối không ghi đè thuộc tính nền tảng của component.

### 3. Các bước triển khai
1. **Skeleton**: Xây dựng khung lưới 12 cột (`grid-12`) cho toàn trang.
2. **Spacing**: Áp dụng `gap: var(--spacing-64)` cho parent container chính.
3. **Assembly**: Lắp ráp các component từ thư viện UI.
4. **Tokenization**: Rà soát đảm bảo 100% sử dụng CSS Variables.
5. **Checklist**: Đối chiếu với bảng kiểm tra Pre-Delivery.

---
[[00 - Introduction|Back to Introduction]]
