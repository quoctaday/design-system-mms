import React, { useState } from 'react';
import Button from '../components/ui/Button/Button';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Tabs } from '../components/ui/Tabs/Tabs';
import { CodeSnippet } from '../components/docs/CodeSnippet';
import {
  RiAddLine,
  RiArrowRightLine,
  RiDownloadLine,
  RiSendPlaneLine,
} from 'react-icons/ri';
import '../components/docs/PremiumBlock.css';

const ButtonDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'solid' | 'soft' | 'outline' | 'ghost' | 'surface'>('solid');

  const colors: Array<"brand" | "success" | "error" | "warning" | "orange" | "blue" | "purple" | "sky" | "pink" | "teal" | "secondary" | "gray"> = [
    'brand', 'success', 'error', 'warning', 'orange', 'blue', 'purple', 'sky', 'pink', 'teal', 'secondary', 'gray'
  ];

  const toc = [
    { id: 'variants', title: 'Variants' },
    { id: 'colors', title: 'Colors' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'icons', title: 'Icons' },
    { id: 'radius', title: 'Radius' },
    { id: 'states', title: 'States' },
    { id: 'api', title: 'API Reference' }
  ];

  const buttonProps = [
    { name: 'children', type: 'ReactNode', required: true, description: 'Nội dung hiển thị bên trong nút.' },
    { name: 'variant', type: "'solid' | 'soft' | 'outline' | 'ghost' | 'surface'", default: "'solid'", description: 'Phong cách hiển thị của nút.' },
    { name: 'color', type: 'ColorVariant', default: "'brand'", description: 'Màu sắc chủ đề của nút.' },
    { name: 'size', type: "'1' | '2' | '3' | '4'", default: "'2'", description: 'Kích thước của nút.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", description: 'Độ bo góc của nút.' },
    { name: 'leftIcon', type: 'ReactNode', description: 'Icon hiển thị bên trái văn bản.' },
    { name: 'rightIcon', type: 'ReactNode', description: 'Icon hiển thị bên phải văn bản.' },
    { name: 'loading', type: 'boolean', default: 'false', description: 'Trạng thái đang tải.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Trạng thái vô hiệu hóa.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout
      title="Button"
      description="An interactive element used to trigger actions."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="variants" className="doc-section">
        <h2>Variants</h2>
        <p>Buttons are available in five visual variants.</p>
        <CodePreview
          code={`<Button variant="solid" color="brand">Solid</Button>
<Button variant="soft" color="brand">Soft</Button>
<Button variant="outline" color="brand">Outline</Button>
<Button variant="ghost" color="brand">Ghost</Button>
<Button variant="surface" color="brand">Surface</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="solid" color="brand">Solid</Button>
            <Button variant="soft" color="brand">Soft</Button>
            <Button variant="outline" color="brand">Outline</Button>
            <Button variant="ghost" color="brand">Ghost</Button>
            <Button variant="surface" color="brand">Surface</Button>
          </div>
        </CodePreview>
      </section>

      <section id="colors" className="doc-section">
        <h2>Colors</h2>
        <p>Combine variants with different semantic colors for specific context.</p>

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
              {/* Primary & Brand */}
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Primary & Brand</h3>
                <div className="flex flex-wrap gap-4">
                  <Button color="brand" variant={activeColorVariant}>Brand</Button>
                  <Button color="secondary" variant={activeColorVariant}>Secondary</Button>
                  <Button color="black" variant={activeColorVariant}>Black</Button>
                </div>
              </div>

              {/* Semantic Feedback */}
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Semantic Feedback</h3>
                <div className="flex flex-wrap gap-4">
                  <Button color="success" variant={activeColorVariant}>Success</Button>
                  <Button color="error" variant={activeColorVariant}>Error</Button>
                  <Button color="warning" variant={activeColorVariant}>Warning</Button>
                </div>
              </div>

              {/* Accent Palettes */}
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Accent Palettes</h3>
                <div className="flex flex-wrap gap-4">
                  <Button color="orange" variant={activeColorVariant}>Orange</Button>
                  <Button color="blue" variant={activeColorVariant}>Blue</Button>
                  <Button color="purple" variant={activeColorVariant}>Purple</Button>
                  <Button color="sky" variant={activeColorVariant}>Sky</Button>
                  <Button color="pink" variant={activeColorVariant}>Pink</Button>
                  <Button color="teal" variant={activeColorVariant}>Teal</Button>
                  <Button color="gray" variant={activeColorVariant}>Gray</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-block-footer">
            <CodeSnippet 
              code={`<Button variant="${activeColorVariant}" color="brand">Brand</Button>\n<Button variant="${activeColorVariant}" color="success">Success</Button>`}
              title="source"
            />
          </div>
        </div>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Buttons support four standard sizes.</p>
        <CodePreview
          code={`<Button size="1">Size 1</Button>
<Button size="2">Size 2</Button>
<Button size="3">Size 3</Button>
<Button size="4">Size 4</Button>`}
        >
          <div className="flex gap-4 items-center">
            <Button size="1">Size 1</Button>
            <Button size="2">Size 2</Button>
            <Button size="3">Size 3</Button>
            <Button size="4">Size 4</Button>
          </div>
        </CodePreview>
      </section>

      <section id="icons" className="doc-section">
        <h2>Icons</h2>
        <p>Buttons can contain icons to provide extra visual context.</p>
        <CodePreview
          code={`<Button leftIcon={<RiAddLine />}>New Project</Button>
<Button rightIcon={<RiArrowRightLine />}>Next Step</Button>
<Button color="success" rightIcon={<RiSendPlaneLine />}>Send</Button>
<Button variant="outline" leftIcon={<RiDownloadLine />}>Download</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<RiAddLine />}>New Project</Button>
            <Button rightIcon={<RiArrowRightLine />}>Next Step</Button>
            <Button color="success" rightIcon={<RiSendPlaneLine />}>Send</Button>
            <Button variant="outline" leftIcon={<RiDownloadLine />}>Download</Button>
          </div>
        </CodePreview>
      </section>

      <section id="radius" className="doc-section">
        <h2>Radius</h2>
        <p>Control the roundedness of the button corners.</p>
        <CodePreview
          code={`<Button radius="none">None</Button>
<Button radius="2">Small</Button>
<Button radius="4">Medium</Button>
<Button radius="5">Large</Button>
<Button radius="full">Full</Button>`}
        >
          <div className="flex flex-wrap gap-2">
            <Button radius="none">None</Button>
            <Button radius="2">Small</Button>
            <Button radius="4">Medium</Button>
            <Button radius="5">Large</Button>
            <Button radius="full">Full</Button>
          </div>
        </CodePreview>
      </section>

      <section id="states" className="doc-section">
        <h2>States</h2>
        <p>Buttons support disabled and loading states natively.</p>
        <CodePreview
          code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button variant="outline" color="brand" loading>Syncing</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button variant="outline" color="brand" loading>Syncing</Button>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={buttonProps} />
      </section>
    </DocLayout>
  );
};

export default ButtonDoc;
