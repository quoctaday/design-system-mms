import React, { useState } from 'react';
import { Modal, Button, Input } from '../components/ui';
import { RiInformationLine, RiDeleteBin6Line, RiUserAddLine } from 'react-icons/ri';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const ModalDoc: React.FC = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleConfirm = () => {
    alert('Hành động đã được xác nhận!');
    setIsConfirmOpen(false);
  };

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'confirm', title: 'Confirmation' },
    { id: 'form', title: 'With Form' },
    { id: 'api', title: 'API Reference' }
  ];

  const modalProps = [
    { name: 'open', type: 'boolean', description: 'Trạng thái đóng/mở (controlled).' },
    { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Callback khi trạng thái thay đổi.' },
    { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Trạng thái mặc định khi khởi tạo.' },
    { name: 'children', type: 'ReactNode', description: 'Nội dung bên trong Modal.' }
  ];

  return (
    <DocLayout 
      title="Modal" 
      description="Một cửa sổ lớp phủ yêu cầu sự tương tác của người dùng trước khi tiếp tục."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>A standard modal with a header, body and close action.</p>
        <CodePreview
          code={`<Modal.Root>
  <Modal.Trigger>
    <Button>Open Basic Modal</Button>
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
        <Modal.Description>...</Modal.Description>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>`}
        >
          <div className="flex justify-center p-8">
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
                    <p className="text-sm text-secondary leading-relaxed">
                      Nội dung chính của modal có thể đặt ở đây. Nó hỗ trợ cuộn nếu nội dung quá dài.
                    </p>
                  </Modal.Body>
                </Modal.Content>
              </Modal.Portal>
            </Modal.Root>
          </div>
        </CodePreview>
      </section>

      <section id="confirm" className="doc-section">
        <h2>Confirmation</h2>
        <p>Used for critical actions that require explicit user approval.</p>
        <CodePreview
          code={`<Modal.Content style={{ maxWidth: '440px' }}>
  <Modal.Header>
    <Modal.Icon color="error">
      <RiDeleteBin6Line />
    </Modal.Icon>
    <Modal.Title>Xác nhận xóa?</Modal.Title>
    <Modal.Description>...</Modal.Description>
  </Modal.Header>
  <Modal.Footer>
    <Button variant="ghost">Hủy</Button>
    <Button color="error">Xác nhận xóa</Button>
  </Modal.Footer>
</Modal.Content>`}
        >
          <div className="flex justify-center p-8">
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
        </CodePreview>
      </section>

      <section id="form" className="doc-section">
        <h2>With Form</h2>
        <p>Integrate inputs within the modal body for data entry tasks.</p>
        <CodePreview
          code={`<Modal.Body className="space-y-6">
  <div className="space-y-2">
    <label className="text-sm font-semibold">Họ và tên</label>
    <Input placeholder="Nguyễn Văn A" />
  </div>
  ...
</Modal.Body>`}
        >
          <div className="flex justify-center p-8">
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
                  <Modal.Body className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-strong">Họ và tên</label>
                      <Input placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-strong">Email</label>
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
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={modalProps} />
      </section>
    </DocLayout>
  );
};

export default ModalDoc;

