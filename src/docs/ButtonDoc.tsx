import React, { useState } from 'react';
import { Button, Flex, Grid, Box, Text, AuroraBackground, Tabs } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
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
    { id: 'states', title: 'States' },
    { id: 'api', title: 'API Reference' }
  ];

  const buttonProps = [
    { name: 'children', type: 'ReactNode', required: true, description: 'Nội dung hiển thị bên trong nút.' },
    { name: 'variant', type: "'solid' | 'soft' | 'outline' | 'ghost' | 'surface'", default: "'solid'", description: 'Phong cách hiển thị của nút.' },
    { name: 'color', type: 'ColorVariant', default: "'brand'", description: 'Màu sắc chủ đề của nút.' },
    { name: 'size', type: "'1' | '2' | '3' | '4'", default: "'2'", description: 'Kích thước: 24px, 32px (Mặc định), 40px, 56px.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", description: 'Độ bo góc chuẩn hệ thống 5 cấp độ Radix.' },
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
      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Buttons are available in five visual variants.</DocText>
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
              {/* Primary & Brand */}
              <div className="space-y-4">
                <DocHeading level={3} className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Primary & Brand</DocHeading>
                <div className="flex flex-wrap gap-4">
                  <Button color="brand" variant={activeColorVariant}>Brand</Button>
                  <Button color="secondary" variant={activeColorVariant}>Secondary</Button>
                  <Button color="black" variant={activeColorVariant}>Black</Button>
                </div>
              </div>

              {/* Semantic Feedback */}
              <div className="space-y-4">
                <DocHeading level={3} className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Semantic Feedback</DocHeading>
                <div className="flex flex-wrap gap-4">
                  <Button color="success" variant={activeColorVariant}>Success</Button>
                  <Button color="error" variant={activeColorVariant}>Error</Button>
                  <Button color="warning" variant={activeColorVariant}>Warning</Button>
                </div>
              </div>

              {/* Accent Palettes */}
              <div className="space-y-4">
                <DocHeading level={3} className="text-[11px] font-bold uppercase tracking-widest text-muted opacity-60">Accent Palettes</DocHeading>
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
              code={`<Button variant="\${activeColorVariant}" color="brand">Brand</Button>\n<Button variant="\${activeColorVariant}" color="success">Success</Button>`}
              title="source"
            />
          </div>
        </div>
      </DocSection>

      <DocSection id="sizes">
        <Flex direction="column" gap="2">
          <DocHeading>Sizes & Radius Matrix</DocHeading>
          <DocText>Hệ thống nút bấm đa dạng với sự kết hợp linh hoạt giữa kích thước và bo góc.</DocText>
        </Flex>
        <div className="premium-block mt-6">
          <div className="premium-block-content p-8 overflow-x-auto">
            <Box style={{ minWidth: '700px' }}>
              {/* Header Row */}
              <Grid columns="6" gap="4" style={{ marginBottom: '16px' }}>
                <Box />
                {['No radius', 'Small', 'Medium', 'Large', 'Full'].map(label => (
                  <Text key={label} align="center" size="1" weight="bold" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-9)', opacity: 0.6 }}>
                    {label}
                  </Text>
                ))}
              </Grid>

              {/* Data Rows */}
              {[
                { size: '1', label: 'Size 1', radiusTokens: ['none', 'small', 'medium', 'large', 'full'] },
                { size: '2', label: 'Size 2', radiusTokens: ['none', 'small', 'medium', 'large', 'full'] },
                { size: '3', label: 'Size 3', radiusTokens: ['none', 'small', 'medium', 'large', 'full'] },
                { size: '4', label: 'Size 4', radiusTokens: ['none', 'small', 'medium', 'large', 'full'] },
              ].map(row => (
                <Grid key={row.size} columns="6" gap="4" align="center" style={{ marginBottom: '24px' }}>
                  <Text size="2" weight="bold" style={{ color: 'var(--gray-12)' }}>{row.label}</Text>
                  {row.radiusTokens.map((radius: any) => (
                    <Flex key={radius} justify="center">
                      <Button 
                        size={row.size as any} 
                        radius={radius}
                        className="w-full"
                        style={{ maxWidth: '120px' }}
                      >
                        Action
                      </Button>
                    </Flex>
                  ))}
                </Grid>
              ))}
            </Box>
          </div>
        </div>
      </DocSection>

      <DocSection id="icons">
        <DocHeading>Icons</DocHeading>
        <DocText>Buttons can contain icons to provide extra visual context.</DocText>
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
      </DocSection>

      <DocSection id="states">
        <DocHeading>States</DocHeading>
        <DocText>Buttons support disabled and loading states natively.</DocText>
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
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={buttonProps} />
      </DocSection>
    </DocLayout>
  );
};

export default ButtonDoc;
