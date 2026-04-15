import React, { useState } from 'react';
import { Input, TextField, TextArea } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Tabs } from '../components/ui/Tabs/Tabs';
import { RiSearchLine, RiCommandLine, RiMailLine } from 'react-icons/ri';

const InputDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'classic' | 'surface' | 'soft'>('surface');
  
  const colors: Array<"brand" | "gray" | "success" | "warning" | "error"> = [
    'brand', 'gray', 'success', 'warning', 'error'
  ];

  const toc = [
    { id: 'compound', title: 'Compound Architecture' },
    { id: 'variants', title: 'Variants' },
    { id: 'textarea', title: 'TextArea' },
    { id: 'colors', title: 'Colors' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'radius', title: 'Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const inputProps = [
    { name: 'placeholder', type: 'string', description: 'Văn bản gợi ý khi trống.' },
    { name: 'variant', type: "'surface' | 'classic' | 'soft'", default: "'surface'", description: 'Phong cách hiển thị của Input.' },
    { name: 'color', type: 'ColorVariant', default: "'brand'", description: 'Màu sắc vòng tiêu điểm (focus ring).' },
    { name: 'size', type: "'1' | '2' | '3' | '4'", default: "'2'", description: 'Kích thước.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", description: 'Độ bo góc.' },
    { name: 'leftSlot', type: 'ReactNode', description: 'Nội dung hiển thị bên trái (chỉ dùng cho Input shorthand).' },
    { name: 'rightSlot', type: 'ReactNode', description: 'Nội dung hiển thị bên phải (chỉ dùng cho Input shorthand).' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa tương tác.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout 
      title="Input / TextField" 
      description="A high-precision text entry component with Radix-inspired compound architecture."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="compound" className="doc-section">
        <h2>Compound Architecture</h2>
        <p>Use the compound pattern for complex requirements like multiple slots or custom interactions.</p>
        <CodePreview
          code={`<TextField.Root size="2" variant="surface">
  <TextField.Slot>
    <RiSearchLine />
  </TextField.Slot>
  <TextField.Input placeholder="Search documentation..." />
  <TextField.Slot>
    <span className="flex items-center gap-1 text-xs px-1.5 py-0.5 rounded border bg-muted">
      <RiCommandLine />K
    </span>
  </TextField.Slot>
</TextField.Root>`}
        >
          <div className="max-w-sm">
            <TextField.Root size="2" variant="surface">
              <TextField.Slot>
                <RiSearchLine size={16} />
              </TextField.Slot>
              <TextField.Input placeholder="Search documentation..." />
              <TextField.Slot>
                <span className="flex items-center gap-1 text-xs px-1.5 py-0.5 rounded border bg-muted">
                  <RiCommandLine size={10} />K
                </span>
              </TextField.Slot>
            </TextField.Root>
          </div>
        </CodePreview>
      </section>

      <section id="variants" className="doc-section">
        <h2>Variants</h2>
        <p>Choose from three levels of intensity to match your interface's surface logic.</p>
        <CodePreview
          code={`<Input variant="surface" placeholder="Surface (Subtle)" />
<Input variant="classic" placeholder="Classic (Bordered)" />
<Input variant="soft" placeholder="Soft (Fill only)" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input variant="surface" placeholder="Surface (Subtle)" />
            <Input variant="classic" placeholder="Classic (Bordered)" />
            <Input variant="soft" placeholder="Soft (Fill only)" />
          </div>
        </CodePreview>
      </section>

      <section id="textarea" className="doc-section">
        <h2>TextArea</h2>
        <p>A multi-line text input that shares the same visual architecture and variants as TextField.</p>
        <CodePreview
          code={`<TextArea variant="surface" placeholder="Type your message..." />
<TextArea size="1" radius="2" placeholder="Small textarea" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <TextArea variant="surface" placeholder="Type your message..." />
            <TextArea size="1" radius="2" placeholder="Small textarea (size 1)" rows={3} />
          </div>
        </CodePreview>
      </section>

      <section id="colors" className="doc-section">
        <h2>Focus Rings (Colors)</h2>
        <p>Use the <code>color</code> prop to synchronize the focus ring with your semantic state.</p>
        
        <Tabs 
          value={activeColorVariant}
          onValueChange={(value) => setActiveColorVariant(value as 'classic' | 'surface' | 'soft')}
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
              <span className="text-sm font-medium w-20 capitalize">{color}</span>
              <Input 
                color={color} 
                variant={activeColorVariant} 
                placeholder={`Focus halo (${color})`} 
              />
            </div>
          ))}
        </div>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Supports 4 sizes to cover all density scenarios from dense forms to hero search inputs.</p>
        <CodePreview
          code={`<Input size="1" placeholder="Size 1" />
<Input size="2" placeholder="Size 2" />
<Input size="3" placeholder="Size 3" />
<Input size="4" placeholder="Size 4" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input size="1" leftSlot={<RiMailLine />} placeholder="Size 1" />
            <Input size="2" leftSlot={<RiMailLine />} placeholder="Size 2" />
            <Input size="3" leftSlot={<RiMailLine />} placeholder="Size 3" />
            <Input size="4" leftSlot={<RiMailLine />} placeholder="Size 4" />
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
