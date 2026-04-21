import React, { useState } from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  Badge, 
  AuroraBackground, 
  Tabs 
} from '../components/ui';
import { CodeSnippet } from '../components/docs/CodeSnippet';
import '../components/docs/PremiumBlock.css';

const BadgeDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'solid' | 'soft' | 'outline' | 'ghost' | 'surface'>('soft');
  
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
      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Badges are available in five visual variants.</DocText>
        <CodePreview
          code={`<Badge variant="solid" color="brand">Solid</Badge>
<Badge variant="soft" color="brand">Soft</Badge>
<Badge variant="outline" color="brand">Outline</Badge>
<Badge variant="surface" color="brand">Surface</Badge>
<Badge variant="ghost" color="brand">Ghost</Badge>`}
        >
          <div className="flex gap-4">
            <Badge variant="solid" color="brand">Solid</Badge>
            <Badge variant="soft" color="brand">Soft</Badge>
            <Badge variant="outline" color="brand">Outline</Badge>
            <Badge variant="surface" color="brand">Surface</Badge>
            <Badge variant="ghost" color="brand">Ghost</Badge>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="colors">
        <DocHeading>Colors</DocHeading>
        <DocText>Combine variants with different semantic colors for specific context.</DocText>
        
        <div className="premium-block mt-8">
          <Tabs 
            value={activeColorVariant}
            onValueChange={(value) => setActiveColorVariant(value as 'solid' | 'soft' | 'outline' | 'ghost' | 'surface')}
            className="premium-block-tabs"
          >
            <Tabs.List className="border-none bg-transparent h-auto gap-2">
              <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
              <Tabs.Trigger value="soft">Soft</Tabs.Trigger>
              <Tabs.Trigger value="outline">Outline</Tabs.Trigger>
              <Tabs.Trigger value="ghost">Ghost</Tabs.Trigger>
              <Tabs.Trigger value="surface">Surface</Tabs.Trigger>
            </Tabs.List>
          </Tabs>

          <div className="premium-block-content">
            <div className="premium-block-preview">
              <div className="space-y-4">
                <DocHeading level={3} className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Primary & Brand</DocHeading>
                <div className="flex flex-wrap gap-4">
                  <Badge color="brand" variant={activeColorVariant}>Brand</Badge>
                  <Badge color="secondary" variant={activeColorVariant}>Secondary</Badge>
                  <Badge color="black" variant={activeColorVariant}>Black</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <DocHeading level={3} className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Semantic Feedback</DocHeading>
                <div className="flex flex-wrap gap-4">
                  <Badge color="success" variant={activeColorVariant}>Success</Badge>
                  <Badge color="error" variant={activeColorVariant}>Error</Badge>
                  <Badge color="warning" variant={activeColorVariant}>Warning</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <DocHeading level={3} className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Accent Palettes</DocHeading>
                <div className="flex flex-wrap gap-4">
                  <Badge color="orange" variant={activeColorVariant}>Orange</Badge>
                  <Badge color="blue" variant={activeColorVariant}>Blue</Badge>
                  <Badge color="purple" variant={activeColorVariant}>Purple</Badge>
                  <Badge color="sky" variant={activeColorVariant}>Sky</Badge>
                  <Badge color="pink" variant={activeColorVariant}>Pink</Badge>
                  <Badge color="teal" variant={activeColorVariant}>Teal</Badge>
                  <Badge color="gray" variant={activeColorVariant}>Gray</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-block-footer">
            <CodeSnippet 
              code={`<Badge variant="\${activeColorVariant}" color="brand">Brand</Badge>\n<Badge variant="\${activeColorVariant}" color="success">Success</Badge>`}
              title="source"
            />
          </div>
        </div>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>Available in two sizes.</DocText>
        <CodePreview
          code={`<Badge size="1" variant="solid" color="brand">Size 1</Badge>
<Badge size="2" variant="solid" color="brand">Size 2</Badge>`}
        >
          <div className="flex gap-4 items-center">
            <Badge size="1" variant="solid" color="brand">Size 1</Badge>
            <Badge size="2" variant="solid" color="brand">Size 2</Badge>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="radius">
        <DocHeading>Radius</DocHeading>
        <DocText>Control the roundedness of the badge.</DocText>
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
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <DocText>Các thuộc tính có sẵn cho thành phần Badge.</DocText>
        <PropsTable props={badgeProps} />
      </DocSection>
    </DocLayout>
  );
};

export default BadgeDoc;
