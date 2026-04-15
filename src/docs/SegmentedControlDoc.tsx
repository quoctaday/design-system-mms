import React, { useState } from 'react';
import SegmentedControl from '../components/ui/SegmentedControl/SegmentedControl';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  RiLayoutGridLine, 
  RiListCheck, 
  RiCalendarLine, 
  RiMoonLine, 
  RiSunLine, 
  RiMacLine 
} from 'react-icons/ri';

const SegmentedControlDoc: React.FC = () => {
  const [view, setView] = useState('grid');
  const [variant, setVariant] = useState<'surface' | 'classic' | 'soft'>('surface');
  const [size, setSize] = useState<'1' | '2' | '3'>('2');

  const toc = [
    { id: 'compound', title: 'Compound Architecture' },
    { id: 'variants', title: 'Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'radius', title: 'Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const rootProps = [
    { name: 'value', type: 'string', description: 'Giá trị đang được chọn.' },
    { name: 'defaultValue', type: 'string', description: 'Giá trị mặc định khi khởi tạo.' },
    { name: 'onValueChange', type: '(value: string) => void', description: 'Callback khi thay đổi giá trị.' },
    { name: 'variant', type: "'surface' | 'classic' | 'soft'", default: "'surface'", description: 'Biến thể hiển thị.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của control.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", default: "'full'", description: 'Độ bo góc.' },
    { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Mở rộng tối đa chiều ngang.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa toàn bộ control.' }
  ];

  return (
    <DocLayout
      title="Segmented Control"
      description="A high-density choice component for value selection. Optimized with 4px Padding for a compact, mechanical feel."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="compound" className="doc-section">
        <h2>Compound Architecture</h2>
        <p>Following Radix UI standards, use <code>Root</code> and <code>Item</code> for maximum flexibility.</p>
        <CodePreview
          code={`<SegmentedControl.Root value={view} onValueChange={setView}>
  <SegmentedControl.Item value="grid">
    <RiLayoutGridLine /> Grid
  </SegmentedControl.Item>
  <SegmentedControl.Item value="list">
    <RiListCheck /> List
  </SegmentedControl.Item>
</SegmentedControl.Root>`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <SegmentedControl.Root value={view} onValueChange={setView}>
              <SegmentedControl.Item value="grid" className="gap-2">
                <RiLayoutGridLine style={{ fontSize: '1.2em' }} /> Grid
              </SegmentedControl.Item>
              <SegmentedControl.Item value="list" className="gap-2">
                <RiListCheck style={{ fontSize: '1.2em' }} /> List
              </SegmentedControl.Item>
            </SegmentedControl.Root>
            <span className="text-sm font-medium text-muted">Active: {view}</span>
          </div>
        </CodePreview>
      </section>

      <section id="variants" className="doc-section">
        <h2>Variants</h2>
        <p>Available in three visual styles to suit your layout's hierarchy.</p>
        <CodePreview
          code={`<SegmentedControl.Root variant="surface">...</SegmentedControl.Root>\n<SegmentedControl.Root variant="classic">...</SegmentedControl.Root>\n<SegmentedControl.Root variant="soft">...</SegmentedControl.Root>`}
        >
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted opacity-50">Surface (Default)</span>
              <SegmentedControl.Root variant="surface" defaultValue="1">
                <SegmentedControl.Item value="1">Daily</SegmentedControl.Item>
                <SegmentedControl.Item value="2">Monthly</SegmentedControl.Item>
                <SegmentedControl.Item value="3">Yearly</SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted opacity-50">Classic</span>
              <SegmentedControl.Root variant="classic" defaultValue="1">
                <SegmentedControl.Item value="1">Daily</SegmentedControl.Item>
                <SegmentedControl.Item value="2">Monthly</SegmentedControl.Item>
                <SegmentedControl.Item value="3">Yearly</SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted opacity-50">Soft</span>
              <SegmentedControl.Root variant="soft" defaultValue="1">
                <SegmentedControl.Item value="1">Daily</SegmentedControl.Item>
                <SegmentedControl.Item value="2">Monthly</SegmentedControl.Item>
                <SegmentedControl.Item value="3">Yearly</SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Choose from three precise sizes tailored for operational density.</p>
        <CodePreview
          code={`<SegmentedControl.Root size="1">...</SegmentedControl.Root>\n<SegmentedControl.Root size="2">...</SegmentedControl.Root>\n<SegmentedControl.Root size="3">...</SegmentedControl.Root>`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted">Size 1</span>
              <SegmentedControl.Root size="1" defaultValue="system">
                <SegmentedControl.Item value="light"><RiSunLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="dark"><RiMoonLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="system"><RiMacLine /></SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted">Size 2</span>
              <SegmentedControl.Root size="2" defaultValue="system">
                <SegmentedControl.Item value="light"><RiSunLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="dark"><RiMoonLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="system"><RiMacLine /></SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted">Size 3</span>
              <SegmentedControl.Root size="3" defaultValue="system">
                <SegmentedControl.Item value="light"><RiSunLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="dark"><RiMoonLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="system"><RiMacLine /></SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="radius" className="doc-section">
        <h2>Radius</h2>
        <p>All numeric radius tokens are supported. The indicator radius is automatically computed as <code>radius - 4px</code> for perfect nesting.</p>
        <CodePreview
          code={`<SegmentedControl.Root radius="none">...</SegmentedControl.Root>\n<SegmentedControl.Root radius="3">...</SegmentedControl.Root>\n<SegmentedControl.Root radius="full">...</SegmentedControl.Root>`}
        >
          <div className="flex flex-wrap gap-6">
            <SegmentedControl.Root radius="none" defaultValue="1" variant="classic">
              <SegmentedControl.Item value="1">None</SegmentedControl.Item>
              <SegmentedControl.Item value="2">None</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root radius="3" defaultValue="1" variant="classic">
              <SegmentedControl.Item value="1">Medium</SegmentedControl.Item>
              <SegmentedControl.Item value="2">Medium</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root radius="full" defaultValue="1" variant="classic">
              <SegmentedControl.Item value="1">Full</SegmentedControl.Item>
              <SegmentedControl.Item value="2">Full</SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
        </CodePreview>
      </section>

      <section id="comparison" className="doc-section">
        <div className="p-6 rounded-2xl bg-surface-sunken border border-subtle">
          <h2 className="mt-0 text-lg">Tabs vs Segmented Control</h2>
          <p className="text-secondary text-sm mb-6">Mặc dù trông tương đồng, chúng được tối ưu hóa cho các mục đích và mật độ hình học khác nhau:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase text-muted tracking-widest">Tabs (Spacious: 6px Padding)</span>
              <div className="p-8 rounded-xl bg-surface-panel border border-subtle flex flex-col items-center">
                <Tabs defaultValue="1" variant="surface">
                   <Tabs.List>
                     <Tabs.Trigger value="1">Inbox</Tabs.Trigger>
                     <Tabs.Trigger value="2">Sent</Tabs.Trigger>
                     <Tabs.Trigger value="3">Archived</Tabs.Trigger>
                   </Tabs.List>
                </Tabs>
                <span className="mt-4 text-[10px] text-muted italic">Dùng cho điều hướng panel lớn.</span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase text-muted tracking-widest">Segmented (Dense: 4px Padding)</span>
              <div className="p-8 rounded-xl bg-surface-panel border border-subtle flex flex-col items-center">
                <SegmentedControl.Root defaultValue="1">
                   <SegmentedControl.Item value="1">Grid</SegmentedControl.Item>
                   <SegmentedControl.Item value="2">List</SegmentedControl.Item>
                   <SegmentedControl.Item value="3">Table</SegmentedControl.Item>
                </SegmentedControl.Root>
                <span className="mt-4 text-[10px] text-muted italic">Dùng cho lựa chọn giá trị nhanh.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <h3>SegmentedControl.Root</h3>
        <PropsTable props={rootProps} />
        <h3 className="mt-8">SegmentedControl.Item</h3>
        <PropsTable props={[
          { name: 'value', type: 'string', required: true, description: 'Giá trị duy nhất của item này.' },
          { name: 'disabled', type: 'boolean', description: 'Vô hiệu hóa item này.' },
          { name: 'className', type: 'string', description: 'Class tùy chỉnh.' }
        ]} />
      </section>
    </DocLayout>
  );
};

export default SegmentedControlDoc;
