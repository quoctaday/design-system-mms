import React from 'react';
import { Dialog, Button, Badge } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { RiShieldCheckLine, RiInformationLine, RiDeleteBinLine } from 'react-icons/ri';

const DialogDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'confirm', title: 'Confirmation Modal' },
    { id: 'api', title: 'API Reference' }
  ];

  const contentProps = [
    { name: 'size', type: "'1' | '2' | '3' | '4'", default: "'2'", description: 'Chiều rộng tối đa của dialog.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6'", default: "'4'", description: 'Độ bo góc của dialog.' },
  ];

  return (
    <DocLayout 
      title="Dialog" 
      description="A high-performance modal window with enhanced backdrop blur and elevation v2 shadows."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>A standard dialog for displaying important information or multi-step forms.</p>
        <CodePreview
          code={`<Dialog.Root>
  <Dialog.Trigger>
    <Button variant="classic">Open Dialog</Button>
  </Dialog.Trigger>

  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Account Settings</Dialog.Title>
        <Dialog.Description>Update your personal info and security preferences.</Dialog.Description>
        <Dialog.Close />
      </Dialog.Header>
      
      <Dialog.Body>
        <div className="space-y-4">
          <p className="text-sm">Nội dung của form hoặc thông tin chi tiết được đặt ở đây...</p>
        </div>
      </Dialog.Body>

      <Dialog.Footer>
        <Dialog.Close>
          <Button variant="surface">Cancel</Button>
        </Dialog.Close>
        <Button variant="classic">Save Changes</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`}
        >
          <div className="py-2">
            <Dialog.Root>
              <Dialog.Trigger>
                <Button variant="classic">Edit Profile</Button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content size="2">
                  <Dialog.Header>
                    <Dialog.Title>Edit Profile</Dialog.Title>
                    <Dialog.Description>Manage your public appearance and notification settings.</Dialog.Description>
                    <Dialog.Close />
                  </Dialog.Header>
                  
                  <Dialog.Body>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4 p-4 border border-subtle bg-surface-subtle/50 rounded-xl">
                        <RiInformationLine size={24} className="text-secondary" />
                        <div className="text-sm">Your changes will be visible to all members of your organization immediately after saving.</div>
                      </div>
                      <p className="text-sm">Nội dung mẫu của Dialog với hiệu ứng Backdrop blur và Shadow v6...</p>
                    </div>
                  </Dialog.Body>

                  <Dialog.Footer>
                    <Dialog.Close>
                      <Button variant="surface">Cancel</Button>
                    </Dialog.Close>
                    <Button variant="classic" color="brand">Save Changes</Button>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Choose from four standardized widths to accommodate different content types.</p>
        <div className="flex flex-wrap gap-4 py-4">
          <Dialog.Root>
            <Dialog.Trigger><Button variant="surface">Size 1 (Small)</Button></Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content size="1">
                <Dialog.Header><Dialog.Title>Small Dialog</Dialog.Title><Dialog.Close /></Dialog.Header>
                <Dialog.Body>Lý tưởng cho các thông báo xác nhận ngắn gọn.</Dialog.Body>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger><Button variant="surface">Size 3 (Large)</Button></Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content size="3">
                <Dialog.Header><Dialog.Title>Large Viewport</Dialog.Title><Dialog.Close /></Dialog.Header>
                <Dialog.Body>Không gian rộng rãi cho các dashboard con hoặc bảng dữ liệu.</Dialog.Body>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <h3 className="text-sm font-bold mb-4">Dialog.Content</h3>
        <PropsTable props={contentProps} />
      </section>
    </DocLayout>
  );
};

export default DialogDoc;
