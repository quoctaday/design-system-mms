import React, { useState } from 'react';
import Badge from '../components/ui/Badge/Badge';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Tabs } from '../components/ui/Tabs/Tabs';

const BadgeDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'solid' | 'soft' | 'outline' | 'surface'>('soft');
  
  const colors: Array<"brand" | "success" | "error" | "warning" | "orange" | "blue" | "purple" | "sky" | "pink" | "teal" | "secondary" | "black" | "gray"> = [
    'brand', 'success', 'error', 'warning', 'orange', 'blue', 'purple', 'sky', 'pink', 'teal', 'secondary', 'black', 'gray'
  ];

  const toc = [
    { id: 'variants', title: 'Variants' },
    { id: 'colors', title: 'Colors' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'radius', title: 'Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const badgeProps = [
    { name: 'children', type: 'ReactNode', required: true, description: 'Nội dung hiển thị bên trong badge.' },
    { name: 'variant', type: "'solid' | 'soft' | 'outline' | 'surface' | 'ghost'", default: "'soft'", description: 'Phong cách hiển thị của badge.' },
    { name: 'color', type: 'ColorVariant', default: "'gray'", description: 'Màu sắc chủ đề của badge.' },
    { name: 'size', type: "'1' | '2'", default: "'1'", description: 'Kích thước của badge.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", description: 'Độ bo góc của badge.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh cho badge.' }
  ];

  return (
    <DocLayout 
      title="Badge" 
      description="A small visual element that labels an object with its status or a category."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="variants" className="doc-section">
        <h2>Variants</h2>
        <p>Badges are available in four visual variants.</p>
        <CodePreview
          code={`<Badge variant="solid" color="brand">Solid</Badge>
<Badge variant="soft" color="brand">Soft</Badge>
<Badge variant="outline" color="brand">Outline</Badge>
<Badge variant="surface" color="brand">Surface</Badge>`}
        >
          <div className="flex gap-4">
            <Badge variant="solid" color="brand">Solid</Badge>
            <Badge variant="soft" color="brand">Soft</Badge>
            <Badge variant="outline" color="brand">Outline</Badge>
            <Badge variant="surface" color="brand">Surface</Badge>
          </div>
        </CodePreview>
      </section>

      <section id="colors" className="doc-section">
        <h2>Colors</h2>
        <p>Use the <code>color</code> prop to assign different semantic meanings.</p>
        
        <Tabs 
          value={activeColorVariant}
          onValueChange={(value) => setActiveColorVariant(value as 'solid' | 'soft' | 'outline' | 'surface')}
        >
          <Tabs.List>
            <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
            <Tabs.Trigger value="soft">Soft</Tabs.Trigger>
            <Tabs.Trigger value="outline">Outline</Tabs.Trigger>
            <Tabs.Trigger value="surface">Surface</Tabs.Trigger>
          </Tabs.List>
        </Tabs>

        <div className="flex flex-wrap gap-4 mt-6">
          {colors.map((color) => (
            <Badge key={color} color={color} variant={activeColorVariant}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          ))}
        </div>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Available in two sizes.</p>
        <CodePreview
          code={`<Badge size="1" variant="solid" color="brand">Size 1</Badge>
<Badge size="2" variant="solid" color="brand">Size 2</Badge>`}
        >
          <div className="flex gap-4 items-center">
            <Badge size="1" variant="solid" color="brand">Size 1</Badge>
            <Badge size="2" variant="solid" color="brand">Size 2</Badge>
          </div>
        </CodePreview>
      </section>

      <section id="radius" className="doc-section">
        <h2>Radius</h2>
        <p>Control the roundedness of the badge.</p>
        <CodePreview
          code={`<Badge radius="none" variant="surface" color="brand">None</Badge>
<Badge radius="2" variant="surface" color="brand">Small</Badge>
<Badge radius="4" variant="surface" color="brand">Medium</Badge>
<Badge radius="5" variant="surface" color="brand">Large</Badge>
<Badge radius="full" variant="surface" color="brand">Full</Badge>`}
        >
          <div className="flex gap-2">
            <Badge radius="none" variant="surface" color="brand">None</Badge>
            <Badge radius="2" variant="surface" color="brand">Small</Badge>
            <Badge radius="4" variant="surface" color="brand">Medium</Badge>
            <Badge radius="5" variant="surface" color="brand">Large</Badge>
            <Badge radius="full" variant="surface" color="brand">Full</Badge>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <p>Các thuộc tính có sẵn cho thành phần Badge.</p>
        <PropsTable props={badgeProps} />
      </section>
    </DocLayout>
  );
};

export default BadgeDoc;

