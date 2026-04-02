import React, { useState } from 'react';
import { Modal, Button, Input } from '../components/ui';
import { RiInformationLine, RiDeleteBin6Line, RiUserAddLine } from 'react-icons/ri';

const ModalDoc: React.FC = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleConfirm = () => {
    alert('Hành động đã được xác nhận!');
    setIsConfirmOpen(false);
  };

  return (
    <div className="doc-container">
      <header className="doc-header">
        <h1>Modal</h1>
        <p>Một cửa sổ lớp phủ yêu cầu sự tương tác của người dùng trước khi tiếp tục.</p>
      </header>

      {/* Basic Usage */}
      <section className="doc-section">
        <h2>Basic Usage</h2>
        <div className="demo-box" style={{ gap: '16px' }}>
          <Modal.Root>
            <Modal.Trigger>
              <Button variant="outline">Open Basic Modal</Button>
            </Modal.Trigger>
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content>
                <Modal.Close />
                <Modal.Header>
                  <Modal.Icon color="brand">
                    <RiInformationLine />
                  </Modal.Icon>
                  <Modal.Title>Thông tin cơ bản</Modal.Title>
                  <Modal.Description>
                    Đây là ví dụ về một Modal cơ bản với tiêu đề và mô tả. Bạn có thể nhấn Esc hoặc click ra ngoài để đóng.
                  </Modal.Description>
                </Modal.Header>
                <Modal.Body>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--gray-12)' }}>
                    Nội dung chính của modal có thể đặt ở đây. Nó hỗ trợ cuộn nếu nội dung quá dài.
                  </p>
                </Modal.Body>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
        </div>
      </section>

      {/* Confirmation Modal */}
      <section className="doc-section">
        <h2>Confirmation (Confirm Action)</h2>
        <div className="demo-box">
          <Modal.Root open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
            <Modal.Trigger>
              <Button color="error" variant="ghost">Xóa dữ liệu</Button>
            </Modal.Trigger>
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content style={{ maxWidth: '440px' }}>
                <Modal.Header>
                  <Modal.Icon color="error">
                    <RiDeleteBin6Line />
                  </Modal.Icon>
                  <Modal.Title>Xác nhận xóa?</Modal.Title>
                  <Modal.Description>
                    Hành động này không thể hoàn tác. Dữ liệu của bạn sẽ bị xóa vĩnh viễn khỏi máy chủ.
                  </Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                  <Button variant="ghost" onClick={() => setIsConfirmOpen(false)}>Hủy</Button>
                  <Button color="error" onClick={handleConfirm}>Xác nhận xóa</Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
        </div>
      </section>

      {/* Form Modal */}
      <section className="doc-section">
        <h2>Modal with Form</h2>
        <div className="demo-box">
          <Modal.Root>
            <Modal.Trigger>
              <Button color="brand">Thêm thành viên mới</Button>
            </Modal.Trigger>
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content style={{ maxWidth: '440px' }}>
                <Modal.Close />
                <Modal.Header>
                  <Modal.Icon color="brand">
                    <RiUserAddLine />
                  </Modal.Icon>
                  <Modal.Title>Thông tin thành viên</Modal.Title>
                  <Modal.Description>Điền thông tin bên dưới để tạo tài khoản mới.</Modal.Description>
                </Modal.Header>
                <Modal.Body style={{ gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gray-12)' }}>Họ và tên</label>
                    <Input placeholder="Nguyễn Văn A" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gray-12)' }}>Email</label>
                    <Input placeholder="example@mms.com" type="email" />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Modal.Close>
                    <Button variant="ghost">Hủy</Button>
                  </Modal.Close>
                  <Button color="brand">Lưu thông tin</Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
        </div>
      </section>

      {/* API Reference */}
      <section className="doc-section">
        <h2>API Reference</h2>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>open</td>
                <td>boolean</td>
                <td>-</td>
                <td>Trạng thái đóng/mở (controlled).</td>
              </tr>
              <tr>
                <td>onOpenChange</td>
                <td>(open: boolean) ={'>'} void</td>
                <td>-</td>
                <td>Callback khi trạng thái thay đổi.</td>
              </tr>
              <tr>
                <td>defaultOpen</td>
                <td>boolean</td>
                <td>false</td>
                <td>Trạng thái mặc định khi khởi tạo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ModalDoc;
