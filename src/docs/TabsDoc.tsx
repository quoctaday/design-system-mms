import React from 'react';
import { Tabs } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const TabsDoc: React.FC = () => {
  const toc = [
    { id: 'line', title: 'Line Variant' },
    { id: 'border', title: 'Border Variant' },
    { id: 'simple', title: 'Simple Variant' },
    { id: 'toggle', title: 'Toggle Variant' },
    { id: 'sizes', title: 'Sizes & Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const tabsProps = [
    { name: 'defaultValue', type: 'string', description: 'Giá trị tab mặc định được chọn khi khởi tạo.' },
    { name: 'value', type: 'string', description: 'Giá trị tab hiện tại (controlled mode).' },
    { name: 'onValueChange', type: '(value: string) => void', description: 'Callback khi chuyển đổi tab.' },
    { name: 'variant', type: "'line' | 'border' | 'simple' | 'toggle'", default: "'line'", description: 'Kiểu hiển thị của các tab.' },
    { name: 'size', type: "'1' | '2'", default: "'2'", description: 'Kích thước của các tab.' },
    { name: 'radius', type: "'none' | 'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: 'Độ bo góc của các tab (áp dụng cho variant list/trigger).' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Hướng hiển thị của tabs.' }
  ];

  return (
    <DocLayout 
      title="Tabs" 
      description="A set of layered sections of content, known as tab panels, that are displayed one at a time."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="line" className="doc-section">
        <h2>Line Variant</h2>
        <p>The default style with a bottom indicator line. Best for high-level page sections.</p>
        <CodePreview
          code={`<Tabs defaultValue="account" variant="line">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">Account Content...</Tabs.Content>
</Tabs>`}
        >
          <div className="py-2">
            <Tabs defaultValue="account" variant="line">
              <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="profile" disabled>Profile</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>
              <div className="mt-4 p-4 min-h-[80px] bg-muted/5 border border-dashed border-subtle rounded-xl text-sm text-secondary flex items-center justify-center italic">
                <Tabs.Content value="account">Manage your account details and security settings.</Tabs.Content>
                <Tabs.Content value="settings">Adjust your preferences and application settings.</Tabs.Content>
              </div>
            </Tabs>
          </div>
        </CodePreview>
      </section>

      <section id="border" className="doc-section">
        <h2>Border Variant</h2>
        <p>A bordered variant that clearly separates the active tab from its context.</p>
        <CodePreview
          code={`<Tabs defaultValue="overview" variant="border">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
  </Tabs.List>
</Tabs>`}
        >
          <div className="py-2">
            <Tabs defaultValue="overview" variant="border">
              <Tabs.List>
                <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
                <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
              </Tabs.List>
              <div className="mt-4 p-4 min-h-[80px] bg-muted/5 border border-dashed border-subtle rounded-xl text-sm text-secondary flex items-center justify-center italic text-center">
                <Tabs.Content value="overview">A quick summary of your recent activities and performance metrics.</Tabs.Content>
                <Tabs.Content value="analytics">Deep dive into your data with advanced charting tools.</Tabs.Content>
                <Tabs.Content value="reports">Download and share detailed performance reports.</Tabs.Content>
              </div>
            </Tabs>
          </div>
        </CodePreview>
      </section>

      <section id="simple" className="doc-section">
        <h2>Simple Variant</h2>
        <p>A minimalist design that uses background highlighting for the active state.</p>
        <CodePreview
          code={`<Tabs defaultValue="inbox" variant="simple">
  <Tabs.List>
    <Tabs.Trigger value="inbox">Inbox</Tabs.Trigger>
    <Tabs.Trigger value="sent">Sent</Tabs.Trigger>
  </Tabs.List>
</Tabs>`}
        >
          <div className="py-2">
            <Tabs defaultValue="inbox" variant="simple">
              <Tabs.List>
                <Tabs.Trigger value="inbox">Inbox</Tabs.Trigger>
                <Tabs.Trigger value="sent">Sent</Tabs.Trigger>
                <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
              </Tabs.List>
              <div className="mt-4 p-4 min-h-[80px] bg-muted/5 border border-dashed border-subtle rounded-xl text-sm text-secondary flex items-center justify-center italic">
                <Tabs.Content value="inbox">Your incoming messages are listed here.</Tabs.Content>
                <Tabs.Content value="sent">Review messages you have sent to others.</Tabs.Content>
                <Tabs.Content value="archived">Access your saved and archived conversations.</Tabs.Content>
              </div>
            </Tabs>
          </div>
        </CodePreview>
      </section>

      <section id="toggle" className="doc-section">
        <h2>Toggle Variant</h2>
        <p>A segmented control style, ideal for toggling between small sets of mutually exclusive options.</p>
        <CodePreview
          code={`<Tabs defaultValue="weekly" variant="toggle">
  <Tabs.List>
    <Tabs.Trigger value="daily">Daily</Tabs.Trigger>
    <Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
  </Tabs.List>
</Tabs>`}
        >
          <div className="py-2">
            <Tabs defaultValue="weekly" variant="toggle">
              <Tabs.List>
                <Tabs.Trigger value="daily">Daily</Tabs.Trigger>
                <Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
                <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
              </Tabs.List>
              <div className="mt-4 p-4 min-h-[80px] bg-muted/5 border border-dashed border-subtle rounded-xl text-sm text-secondary flex items-center justify-center italic">
                <Tabs.Content value="daily">Viewing data for today.</Tabs.Content>
                <Tabs.Content value="weekly">Viewing data for the current week.</Tabs.Content>
                <Tabs.Content value="monthly">Viewing data for the current month.</Tabs.Content>
              </div>
            </Tabs>
          </div>
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes & Radius</h2>
        <p>Control the visual scale and corner rounding of tab elements.</p>
        <CodePreview
          code={`<Tabs size="1" radius="sm" variant="toggle" defaultValue="1">
  <Tabs.List>
    <Tabs.Trigger value="1">Option 1</Tabs.Trigger>
    <Tabs.Trigger value="2">Option 2</Tabs.Trigger>
  </Tabs.List>
</Tabs>`}
        >
          <div className="flex flex-col gap-8 py-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 1 + SM Radius (Toggle)</span>
              <Tabs size="1" radius="sm" variant="toggle" defaultValue="a">
                <Tabs.List>
                  <Tabs.Trigger value="a">Weekly</Tabs.Trigger>
                  <Tabs.Trigger value="b">Monthly</Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 2 + LG Radius (Border)</span>
              <Tabs size="2" radius="lg" variant="border" defaultValue="1">
                <Tabs.List>
                  <Tabs.Trigger value="1">Active</Tabs.Trigger>
                  <Tabs.Trigger value="2">Completed</Tabs.Trigger>
                  <Tabs.Trigger value="3">Archived</Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={tabsProps} />
      </section>
    </DocLayout>
  );
};

export default TabsDoc;

