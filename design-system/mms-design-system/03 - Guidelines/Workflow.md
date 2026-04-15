# Systemic Development Workflow

Khi nhận yêu cầu tạo trang hoặc component mới, cả Developer và AI phải tuân thủ quy trình **"MMS Intelligence Workflow"** để bảo vệ tính nhất quán và chất lượng Pixel-Perfect.

## 🏗 Quy trình thực hiện

### 1. Kiểm toán & Nghiên cứu (Research & Audit)
- **Check `src/components/ui/`**: Bắt buộc dùng component có sẵn. Không đẻ thêm linh kiện trùng lặp.
- **Inventory Mapping**: Trước khi code, phải liệt kê các component sẽ tái sử dụng trong bản kế hoạch (Implementation Plan).
- **Check `MASTER.md`**: Hiểu rõ Protocol (12-4-8, Zero Shadow).

### 2. Giao thức Tiến hóa (Evolution Protocol)
> [!IMPORTANT]
> **Quy tắc Vàng**: Tuyệt đối không tự ý tạo mới hoặc nâng cấp (Upgrade) component/widget mà không có sự đồng ý của User.

- **Khi component hiện tại không đáp ứng**: Phải gửi một "Đề xuất Tiến hóa" (Evolution Proposal) mô tả rõ tại sao bản hiện tại không đủ và phương án nâng cấp/tạo mới.
- **Chỉ thực hiện sau khi User phê duyệt**: Mọi thay đổi về cấu trúc thư viện hoặc tài liệu docs chỉ được thực hiện sau khi có sự xác nhận của người quản trị (User).

### 3. Triển khai (Implementation)
- **Pre-Implementation Audit**: Nếu sửa component cũ, hãy run `npm run guard` để xác định nợ kỹ thuật hiện tại.
- **Props-Driven**: Chỉ điều chỉnh UI qua Props (`variant`, `size`, `color`).
- **Token-Bound**: 100% sử dụng CSS Variables. Tuyệt đối không hardcode hex/px.
- **Standard Protocol**: Tuân thủ bộ Regex Vault trong [[03 - Guidelines/Standardization|Standardization Protocol]].

### 4. Quy trình 6 Bước Vàng
1. **Research & Mapping**: Liệt kê các thành phần tái sử dụng.
2. **Evolution Approval**: Nếu cần tạo mới/nâng cấp, hãy hỏi User trước.
3. **Documentation-First**: Cập nhật hoặc tạo file `.md` cho linh kiện (sau khi đã được duyệt).
4. **Skeleton & Logic**: Xây dựng cấu trúc JSX và logic Props (TypeScript).
5. **Quality Audit (QC Gate)**: 
   - Sử dụng Skill `mms-quality-control`.
   - **Post-Implementation Audit**: Run `npm run guard`. Sửa sạch mọi lỗi `❌` trước khi sang bước tiếp theo.
   - Chụp ảnh màn hình (screenshot) để đối chiếu Pixel-Perfect.
   - Gửi yêu cầu "Human-in-the-loop" để User xác nhận thẩm mỹ.
6. **Master Sync**: Cập nhật link vào `MASTER.md` và đồng bộ tài liệu.

---
[[00 - Introduction|Back to Introduction]] • [[02 - Components/Introduction|Component Library]]
