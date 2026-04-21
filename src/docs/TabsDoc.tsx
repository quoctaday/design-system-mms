import React from 'react';
import { Tabs } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { RiUser6Line, RiSettings4Line, RiFileList3Line } from 'react-icons/ri';

const TabsDoc: React.FC = () => {
  const toc = [
    { id: 'classic', title: 'Classic Variant' },
    { id: 'surface', title: 'Surface Variant' },
    { id: 'sizes', title: 'Sizes & Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const tabsProps = [
    { name: 'defaultValue', type: 'string', description: 'Giá trị tab mặc định được chọn khi khởi tạo.' },
    { name: 'value', type: 'string', description: 'Giá trị tab hiện tại (controlled mode).' },
    { name: 'onValueChange', type: '(value: string) => void', description: 'Callback khi chuyển đổi tab.' },
    { name: 'variant', type: "'classic' | 'surface'", default: "'classic'", description: 'Kiểu hiển thị. Classic cho điều hướng chính, Surface cho điều hướng phụ.' },
    { name: 'size', type: "'1' | '2'", default: "'2'", description: 'Kích thước của các tab.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", default: "'4'", description: 'Độ bo góc. Với variant surface, bo góc sẽ tự động tính toán bù trừ (nesting) dựa trên 6px padding.' },
  ];

  return (
    <DocLayout 
      title="Tabs" 
      description="A high-performance navigation component with smooth sliding transitions and Radix-aligned architecture."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="classic">
        <DocHeading>Classic Variant</DocHeading>
        <DocText>A minimalist design with a subtle bottom indicator line. Ideal for main navigation or high-level views.</DocText>
        <CodePreview
          code={`<Tabs defaultValue="account" variant="classic">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">Account Content...</Tabs.Content>
</Tabs>`}
        >
          <div className="py-2">
            <Tabs defaultValue="account" variant="classic">
              <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                <Tabs.Trigger value="disabled" disabled>Security</Tabs.Trigger>
              </Tabs.List>
              <div className="mt-4 min-h-[100px] flex items-center justify-center bg-surface-subtle/30 rounded-2xl border border-dashed border-subtle">
                <Tabs.Content value="account" className="w-full h-full flex items-center justify-center italic text-secondary text-sm">
                  Manage your personal information and security settings.
                </Tabs.Content>
                <Tabs.Content value="profile" className="w-full h-full flex items-center justify-center italic text-secondary text-sm">
                  Public profile information and social connections.
                </Tabs.Content>
                <Tabs.Content value="settings" className="w-full h-full flex items-center justify-center italic text-secondary text-sm">
                  Notification preferences and application defaults.
                </Tabs.Content>
              </div>
            </Tabs>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="surface">
        <DocHeading>Surface Variant</DocHeading>
        <DocText>A spacious, segmented-style navigation. Optimized with <strong>6px Padding</strong> to create a clear visual distinction from tighter form controls.</DocText>
        <CodePreview
          code={`<Tabs defaultValue="overview" variant="surface">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="integration">Integration</Tabs.Trigger>
    <Tabs.Trigger value="api">API Keys</Tabs.Trigger>
  </Tabs.List>
</Tabs>`}
        >
          <div className="py-6 flex flex-col gap-12">
            <div>
              <Tabs defaultValue="overview" variant="surface">
                <Tabs.List>
                  <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                  <Tabs.Trigger value="integration">Integration</Tabs.Trigger>
                  <Tabs.Trigger value="api">API Keys</Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>

            <div>
              <DocHeading level={3} className="text-xs font-bold text-muted uppercase tracking-widest mb-4">With Icons</DocHeading>
              <Tabs defaultValue="user" variant="surface" size="1">
                <Tabs.List>
                  <Tabs.Trigger value="user"><RiUser6Line size={14} /> User</Tabs.Trigger>
                  <Tabs.Trigger value="files"><RiFileList3Line size={14} /> Files</Tabs.Trigger>
                  <Tabs.Trigger value="settings"><RiSettings4Line size={14} /> Settings</Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes & Radius</DocHeading>
        <DocText>Adjust the density and shape of your tabs to match the surrounding UI components.</DocText>
        <CodePreview
          code={`<Tabs size="1" radius="2" variant="surface" defaultValue="1">
  <Tabs.List>
    <Tabs.Trigger value="1">Small</Tabs.Trigger>
    <Tabs.Trigger value="2">Compact</Tabs.Trigger>
  </Tabs.List>
</Tabs>

<Tabs size="2" radius="full" variant="surface" defaultValue="1">
  <Tabs.List>
    <Tabs.Trigger value="1">Default</Tabs.Trigger>
    <Tabs.Trigger value="2">Standard</Tabs.Trigger>
  </Tabs.List>
</Tabs>`}
        >
          <div className="flex flex-col gap-8 py-4">
            <div className="flex flex-col gap-3">
              <DocHeading level={4} className="text-[10px] uppercase font-bold text-muted tracking-widest">Size 1 + Radius 2</DocHeading>
              <Tabs size="1" radius="2" variant="surface" defaultValue="a">
                <Tabs.List>
                  <Tabs.Trigger value="a">Development</Tabs.Trigger>
                  <Tabs.Trigger value="b">Production</Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>
            
            <div className="flex flex-col gap-3">
              <DocHeading level={4} className="text-[10px] uppercase font-bold text-muted tracking-widest">Size 2 + Radius Full</DocHeading>
              <Tabs size="2" radius="full" variant="surface" defaultValue="1">
                <Tabs.List>
                  <Tabs.Trigger value="1">Line Chart</Tabs.Trigger>
                  <Tabs.Trigger value="2">Bar Chart</Tabs.Trigger>
                  <Tabs.Trigger value="3">Table View</Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={tabsProps} />
      </DocSection>
    </DocLayout>
  );
};

export default TabsDoc;

