import React from 'react';
import { DropdownMenu, Button, Badge } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  RiUserLine, 
  RiSettings4Line, 
  RiLogoutBoxRLine, 
  RiFileTextLine, 
  RiShareLine,
  RiDeleteBinLine,
  RiAddLine,
  RiFolderLine
} from 'react-icons/ri';

const DropdownMenuDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'sub-menu', title: 'Sub-menus' },
    { id: 'variants', title: 'Item Variants' },
    { id: 'api', title: 'API Reference' }
  ];

  const dropdownProps = [
    { name: 'align', type: "'start' | 'center' | 'end'", default: "'end'", description: 'Căn lề menu so với trigger.' },
    { name: 'width', type: 'number | string', default: '200', description: 'Chiều rộng của menu content.' },
    { name: 'sideOffset', type: 'number', default: '4', description: 'Khoảng cách giữa trigger và menu.' },
  ];

  const itemProps = [
    { name: 'variant', type: "'default' | 'danger'", default: "'default'", description: 'Phong cách của menu item.' },
    { name: 'shortcut', type: 'string', description: 'Text hiển thị phím tắt bên phải.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa item.' },
  ];

  return (
    <DocLayout 
      title="Dropdown Menu" 
      description="A versatile menu system supporting nested sub-menus, shortcuts, and high-performance animations."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>A simple dropdown menu for common actions like profile settings or file operations.</p>
        <CodePreview
          code={`<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="classic">Open Menu</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>
      <RiUserLine size={16} className="mr-2" /> Profile
    </DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘S">
      <RiSettings4Line size={16} className="mr-2" /> Settings
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item variant="danger">
      <RiLogoutBoxRLine size={16} className="mr-2" /> Logout
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>`}
        >
          <div className="py-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="classic">Account Settings</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content width={220}>
                <div className="px-3 py-2 text-[10px] font-bold text-muted uppercase tracking-widest">Personal Info</div>
                <DropdownMenu.Item>
                  <RiUserLine size={16} className="mr-2" /> View Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘S">
                  <RiSettings4Line size={16} className="mr-2" /> Preferences
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="danger" shortcut="⇧⌘L">
                  <RiLogoutBoxRLine size={16} className="mr-2" /> Sign Out
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </CodePreview>
      </section>

      <section id="sub-menu" className="doc-section">
        <h2>Sub-menus</h2>
        <p>Easily create multi-level navigation using the <code>DropdownMenu.Sub</code> component.</p>
        <CodePreview
          code={`<DropdownMenu.Sub>
  <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
  <DropdownMenu.SubContent>
    <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
    <DropdownMenu.Item>Email</DropdownMenu.Item>
  </DropdownMenu.SubContent>
</DropdownMenu.Sub>`}
        >
          <div className="py-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="surface">File Operations</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content width={200}>
                <DropdownMenu.Item>
                  <RiAddLine size={16} className="mr-2" /> New Tab
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <RiFolderLine size={16} className="mr-2" /> Open Folder
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>
                    <RiShareLine size={16} className="mr-2" /> Share Project
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
                    <DropdownMenu.Item>Send to Email</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Social Media</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="danger">
                  <RiDeleteBinLine size={16} className="mr-2" /> Delete Project
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <h3 className="text-sm font-bold mb-4">DropdownMenu.Content</h3>
        <PropsTable props={dropdownProps} />
        <div className="mt-8">
          <h3 className="text-sm font-bold mb-4">DropdownMenu.Item</h3>
          <PropsTable props={itemProps} />
        </div>
      </section>
    </DocLayout>
  );
};

export default DropdownMenuDoc;
