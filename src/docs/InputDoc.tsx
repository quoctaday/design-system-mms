import React, { useState } from 'react';
import Input from '../components/ui/Input/Input';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Tabs } from '../components/ui/Tabs/Tabs';
import { RiSearchLine, RiCommandLine } from 'react-icons/ri';

const InputDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'surface' | 'classic' | 'soft'>('surface');
  
  const colors: Array<"brand" | "success" | "error" | "warning" | "gray"> = [
    'brand', 'gray', 'success', 'warning', 'error'
  ];

  const toc = [
    { id: 'variants', title: 'Variants' },
    { id: 'colors', title: 'Colors' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'radius', title: 'Radius' },
    { id: 'slots', title: 'Slots' },
    { id: 'states', title: 'States' },
    { id: 'api', title: 'API Reference' }
  ];

  const inputProps = [
    { name: 'placeholder', type: 'string', description: 'Văn bản gợi ý khi trống.' },
    { name: 'variant', type: "'surface' | 'classic' | 'soft'", default: "'surface'", description: 'Phong cách hiển thị.' },
    { name: 'color', type: 'ColorVariant', default: "'brand'", description: 'Màu sắc vòng tiêu điểm (focus ring).' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", description: 'Độ bo góc.' },
    { name: 'leftSlot', type: 'ReactNode', description: 'Nội dung hiển thị bên trái.' },
    { name: 'rightSlot', type: 'ReactNode', description: 'Nội dung hiển thị bên phải.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa tương tác.' },
    { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Trạng thái lỗi.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout 
      title="Input" 
      description="A component for receiving text user input."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="variants" className="doc-section">
        <h2>Variants</h2>
        <p>Inputs are available in three visual variants.</p>
        <CodePreview
          code={`<Input variant="surface" placeholder="Surface variant" />
<Input variant="classic" placeholder="Classic variant" />
<Input variant="soft" placeholder="Soft variant" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input variant="surface" placeholder="Surface variant" />
            <Input variant="classic" placeholder="Classic variant" />
            <Input variant="soft" placeholder="Soft variant" />
          </div>
        </CodePreview>
      </section>

      <section id="colors" className="doc-section">
        <h2>Focus Rings (Colors)</h2>
        <p>Use the <code>color</code> prop to change the focus ring behavior.</p>
        
        <Tabs 
          value={activeColorVariant}
          onValueChange={(value) => setActiveColorVariant(value as 'surface' | 'classic' | 'soft')}
        >
          <Tabs.List>
            <Tabs.Trigger value="surface">Surface</Tabs.Trigger>
            <Tabs.Trigger value="classic">Classic</Tabs.Trigger>
            <Tabs.Trigger value="soft">Soft</Tabs.Trigger>
          </Tabs.List>
        </Tabs>

        <div className="flex flex-col gap-4 mt-6 max-w-sm">
          {colors.map((color) => (
            <div key={color} className="flex items-center gap-4">
              <span className="text-sm font-medium w-20">{color}</span>
              <Input 
                color={color} 
                variant={activeColorVariant} 
                defaultValue={color === 'error' ? 'Invalid entry' : undefined}
                placeholder={`Focus me (${color})`} 
              />
            </div>
          ))}
        </div>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Available in three sizes.</p>
        <CodePreview
          code={`<Input size="1" placeholder="Size 1" />
<Input size="2" placeholder="Size 2" />
<Input size="3" placeholder="Size 3" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input size="1" placeholder="Size 1" />
            <Input size="2" placeholder="Size 2" />
            <Input size="3" placeholder="Size 3" />
          </div>
        </CodePreview>
      </section>

      <section id="radius" className="doc-section">
        <h2>Radius</h2>
        <p>Control the roundedness of the input corners.</p>
        <CodePreview
          code={`<Input radius="none" placeholder="None" />
<Input radius="small" placeholder="Small" />
<Input radius="full" placeholder="Full" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input radius="none" placeholder="None" />
            <Input radius="sm" placeholder="Small (sm)" />
            <Input radius="md" placeholder="Medium (md)" />
            <Input radius="lg" placeholder="Large (lg)" />
            <Input radius="full" placeholder="Full (Pill)" />
          </div>
        </CodePreview>
      </section>

      <section id="slots" className="doc-section">
        <h2>Slots</h2>
        <p>Pass custom elements to either side of the input field.</p>
        <CodePreview
          code={`<Input leftSlot={<RiSearchLine />} placeholder="Search..." />
<Input rightSlot={<kbd>⌘K</kbd>} placeholder="Quick find" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input leftSlot={<RiSearchLine size={16} />} placeholder="Search documentation" />
            <Input rightSlot={<span className="flex items-center gap-1 text-xs px-1.5 py-0.5 rounded border bg-muted"><RiCommandLine />K</span>} placeholder="Search documentation" />
            <Input leftSlot={<RiSearchLine size={16} />} rightSlot={<span className="text-xs">⏎</span>} placeholder="Search..." />
          </div>
        </CodePreview>
      </section>
      
      <section id="states" className="doc-section">
        <h2>Disabled State</h2>
        <p>Use the <code>disabled</code> boolean to prevent interaction.</p>
        <CodePreview
          code={`<Input disabled placeholder="Cannot type here" />
<Input disabled value="Pre-filled disabled" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input disabled placeholder="Cannot type here" />
            <Input disabled value="Pre-filled disabled" />
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={inputProps} />
      </section>
    </DocLayout>
  );
};

export default InputDoc;

