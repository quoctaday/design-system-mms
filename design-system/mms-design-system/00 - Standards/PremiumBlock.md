# WOKER Premium Block Master Standard (V4.0 - Definitive)

Bản quy chuẩn này là **Nguồn sự thật gốc (Source of Truth)**, định nghĩa ngôn ngữ thiết kế **Flat-Premium** ở cấp độ tinh xảo nhất cho hệ thống MMS.

---

## 1. Triết lý "The 12-4-8 Rule" (Cấu trúc Vàng)
Để tạo ra một khối lồng ghép đồng tâm hoàn hảo, chúng ta sử dụng hệ thông số cố định:
- **Outer Radius**: **12px**
- **Outer Padding**: **4px**
- **Inner Radius**: **8px** (Công thức: 12 - 4 = 8)
- **Mục tiêu**: Đạt được sự đồng tâm tuyệt đối (Concentricity), tạo cảm giác sản phẩm được gia công cơ khí chính xác.

## 2. Quy tắc Mật độ Cao (Ultra-Density SOP)

### A. Zero-Gap Integration
- **Quy tắc**: Loại bỏ hoàn toàn `gap` giữa Header và Inner Panel.
- **Thực thi**: `gap: 0px`. 

### B. Header Alignment
- **Padding**: **12px** (Đồng nhất hoàn hảo với Inner Panel).
- **Typography**: **12px+**, Uppercase, Opacity 1.0 (Linh hoạt theo font hệ thống).
- **Letter Spacing**: **0.08em** (Tăng độ rộng chữ để tạo vẻ sang trọng và chuyên nghiệp).
- **Icon**: Kích thước **tương ứng 1:1 với Text** (mặc định 12px), đặt cạnh Label với gap 8px.

### C. Inner Panel Optimization
- **Padding**: **12px** (Compact Standard).
- **Border**: **0.5px solid var(--border-subtle)** (Hairline border cho độ sắc nét Retina).
- **Shadow**: **var(--shadow-xsmall)** (Soft Cloud Shadow - Cực mịn, tạo chiều sâu mà không gây nặng nề).

## 3. Thông số Kỹ thuật Master (Checklist)

| Thành phần | Đặc tính | Giá trị Master |
| :--- | :--- | :--- |
| **Container** | Nền | `var(--surface-subtle)` |
| | Bo góc | **12px** |
| | Padding | **4px** |
| | Gap nội bộ | **0px** |
| **Header** | Padding | **12px** |
| | Nhãn | 12px+, Uppercase, 0.08em spacing |
| **Panel (Lõi)** | Nền | `var(--surface-panel)` |
| | Bo góc | **8px** |
| | Padding | **12px** |
| | Border | **0.5px solid var(--border-subtle)** |
| | Shadow | **var(--shadow-xsmall)** |

## 4. Biến thể Flush (Full Bleed)
Dành cho trường hợp cần tối đa hóa diện tích (Biểu đồ phức tạp):
- **Outer Padding**: **0px**.
- **Header Padding**: **12px**.
- **Inner Radius**: **12px** (Inner = Outer).

## 5. Anti-Patterns (Những điều tuyệt đối KHÔNG làm)
Để bảo vệ tính nhất quán của hệ thống, Agent và Developer cần tránh:
- ❌ **KHÔNG** sử dụng Shadow nặng hoặc Shadow có màu.
- ❌ **KHÔNG** sử dụng Gradient cho nền các khối.
- ❌ **KHÔNG** để `gap > 0` giữa Header và Inner Panel.
- ❌ **KHÔNG** sử dụng bo góc tùy ý ngoài quy tắc 12-4-8.
- ❌ **KHÔNG** sử dụng họa tiết background (dots/grids) trên dashboard vận hành.

---
*Bản quy chuẩn V4.0 - Được ký duyệt bởi User làm chuẩn gốc cho toàn hệ thống.*
