import React from 'react';
import { Dropdown, Button } from '../components/ui';
import { 
  RiMore2Fill, 
  RiEditLine, 
  RiDeleteBinLine, 
  RiShareLine,
  RiFileCopyLine,
  RiHistoryLine,
  RiSettings4Line
} from 'react-icons/ri';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const DropdownDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'icons', title: 'With Icons' },
    { id: 'api', title: 'API Reference' }
  ];

  const dropdownProps = [
    { name: 'align', type: "'left' | 'right'", default: "'right'", description: 'Căn lề của menu so với trigger.' },
    { name: 'width', type: 'number | string', default: '180', description: 'Chiều rộng tùy chỉnh của menu.' },
    { name: 'sideOffset', type: 'number', default: '4', description: 'Khoảng cách từ trigger.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh cho nôi dung menu.' }
  ];

  const itemProps = [
    { name: 'leftIcon', type: 'ReactNode', description: 'Icon hiển thị bên trái.' },
    { name: 'rightIcon', type: 'ReactNode', description: 'Icon hiển thị bên phải.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa mục.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh cho mục.' }
  ];

  return (
    <DocLayout 
      title="Dropdown" 
      description="Displays a menu to the user—such as a set of actions or functions—triggered by a button."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>A standard dropdown menu with interactive items and a separator.</p>
        <CodePreview
          code={`<Dropdown.Root>
  <Dropdown.Trigger>
    <Button>Options</Button>
  </Dropdown.Trigger>
  <Dropdown.Content align="left">
    <Dropdown.Item>View Details</Dropdown.Item>
    <Dropdown.Item>Mark as read</Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item disabled>Export as PDF</Dropdown.Item>
  </Dropdown.Content>
</Dropdown.Root>`}
        >
          <div className="flex justify-center p-8">
            <Dropdown.Root>
              <Dropdown.Trigger>
                <Button rightIcon={<RiMore2Fill />}>Options</Button>
              </Dropdown.Trigger>
              <Dropdown.Content align="left">
                <Dropdown.Item>View Details</Dropdown.Item>
                <Dropdown.Item>Mark as read</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item disabled>Export as PDF</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
        </CodePreview>
      </section>

      <section id="icons" className="doc-section">
        <h2>With Icons & Colors</h2>
        <p>Enhance menu items with icons and custom danger states.</p>
        <CodePreview
          code={`<Dropdown.Item leftIcon={<RiEditLine />}>Edit Profile</Dropdown.Item>
<Dropdown.Item 
  leftIcon={<RiDeleteBinLine />} 
  className="text-error"
>
  Delete Account
</Dropdown.Item>`}
        >
          <div className="flex justify-center p-8">
            <Dropdown.Root>
              <Dropdown.Trigger>
                <Button variant="outline">User Actions</Button>
              </Dropdown.Trigger>
              <Dropdown.Content align="left" width={220}>
                <Dropdown.Item leftIcon={<RiEditLine />}>Edit Profile</Dropdown.Item>
                <Dropdown.Item leftIcon={<RiFileCopyLine />}>Duplicate</Dropdown.Item>
                <Dropdown.Item leftIcon={<RiShareLine />}>Share Link</Dropdown.Item>
                <Dropdown.Item leftIcon={<RiHistoryLine />}>View History</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item leftIcon={<RiSettings4Line />}>Settings</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item 
                  leftIcon={<RiDeleteBinLine />} 
                  className="text-error"
                >
                  Delete Account
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <h3 className="text-lg font-semibold mt-8 mb-4">Dropdown.Content</h3>
        <PropsTable props={dropdownProps} />
        
        <h3 className="text-lg font-semibold mt-12 mb-4">Dropdown.Item</h3>
        <PropsTable props={itemProps} />
      </section>
    </DocLayout>
  );
};

export default DropdownDoc;

