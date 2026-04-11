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
    { id: 'sizes', title: 'Sizes & Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const dropdownProps = [
    { name: 'align', type: "'left' | 'right'", default: "'right'", description: 'Căn lề của menu so với trigger.' },
    { name: 'width', type: 'number | string', default: '180', description: 'Chiều rộng tùy chỉnh của menu.' },
    { name: 'radius', type: "'none' | 'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: 'Độ bo góc của menu.' },
    { name: 'sideOffset', type: 'number', default: '4', description: 'Khoảng cách từ trigger.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh cho nôi dung menu.' }
  ];

  const itemProps = [
    { name: 'leftIcon', type: 'ReactNode', description: 'Icon hiển thị bên trái.' },
    { name: 'rightIcon', type: 'ReactNode', description: 'Icon hiển thị bên phải.' },
    { name: 'size', type: "'1' | '2'", default: "'2'", description: 'Kích thước của mục menu.' },
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

      <section id="sizes" className="doc-section">
        <h2>Sizes & Radius</h2>
        <p>Control the visual scale and corner rounding of dropdown content and items.</p>
        <CodePreview
          code={`<Dropdown.Root>
  <Dropdown.Trigger>
    <Button size="1">Small Menu</Button>
  </Dropdown.Trigger>
  <Dropdown.Content radius="sm" width={200}>
    <Dropdown.Item size="1">Small Item 1</Dropdown.Item>
    <Dropdown.Item size="1">Small Item 2</Dropdown.Item>
  </Dropdown.Content>
</Dropdown.Root>`}
        >
          <div className="flex flex-wrap gap-8 justify-center p-8">
            <Dropdown.Root>
              <Dropdown.Trigger>
                <Button size="1" variant="outline">Small + SM Radius</Button>
              </Dropdown.Trigger>
              <Dropdown.Content radius="sm" align="left" width={180}>
                <Dropdown.Item size="1">Small Item 1</Dropdown.Item>
                <Dropdown.Item size="1">Small Item 2</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item size="1">Small Item 3</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>

            <Dropdown.Root>
              <Dropdown.Trigger>
                <Button variant="outline">Medium + LG Radius</Button>
              </Dropdown.Trigger>
              <Dropdown.Content radius="lg" align="left" width={180}>
                <Dropdown.Item size="2">Medium Item 1</Dropdown.Item>
                <Dropdown.Item size="2">Medium Item 2</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item size="2">Medium Item 3</Dropdown.Item>
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

