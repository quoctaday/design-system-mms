import React, { useState } from 'react';
import { Slider, Flex, Grid, Box, Text } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { RiVolumeUpLine, RiSunLine, RiMoonLine } from 'react-icons/ri';

const SliderDoc: React.FC = () => {
  const [volume, setVolume] = useState(65);
  
  const colors: Array<"brand" | "blue" | "success" | "warning" | "error" | "purple"> = [
    'brand', 'blue', 'success', 'warning', 'error', 'purple'
  ];

  const toc = [
    { id: 'interactive', title: 'Interactive Example' },
    { id: 'variants', title: 'Variants' },
    { id: 'colors', title: 'Colors' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'radius', title: 'Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const sliderProps = [
    { name: 'value', type: 'number', description: 'Giá trị hiện tại của slider (khi dùng controlled mode).' },
    { name: 'defaultValue', type: 'number', default: '0', description: 'Giá trị mặc định ban đầu.' },
    { name: 'min', type: 'number', default: '0', description: 'Giá trị tối thiểu.' },
    { name: 'max', type: 'number', default: '100', description: 'Giá trị tối đa.' },
    { name: 'step', type: 'number', default: '1', description: 'Bước nhảy của giá trị.' },
    { name: 'variant', type: "'surface' | 'classic' | 'soft'", default: "'surface'", description: 'Kiểu dáng hiển thị của Slider theo chuẩn Radix.' },
    { name: 'color', type: "SemanticColors", default: "'brand'", description: 'Màu sắc chủ đạo của thanh fill.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của slider.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'full'", description: 'Hệ thống bo góc chuẩn 5 cấp độ Radix.' },
    { name: 'label', type: 'string', description: 'Nhãn hiển thị phía trên slider.' },
    { name: 'showValue', type: 'boolean', default: 'false', description: 'Hiển thị giá trị hiện tại ở góc phải.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa tương tác.' },
    { name: 'onChange', type: '(value: number) => void', description: 'Callback khi giá trị thay đổi.' }
  ];

  return (
    <DocLayout 
      title="Slider" 
      description="A high-precision range selection component with tactile elevation and smooth transitions."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="interactive">
        <DocHeading>Interactive Playground</DocHeading>
        <DocText>A controlled slider example with real-time state feedback and icons.</DocText>
        <CodePreview
          code={`const [volume, setVolume] = useState(65);

<div className="flex items-center gap-4">
  <RiVolumeUpLine size={20} className="text-subtle" />
  <Slider 
    value={volume} 
    onChange={setVolume} 
    min={0} 
    max={100}
    label="Master Volume"
    showValue
    size="2"
    className="flex-1"
  />
</div>`}
        >
          <div className="max-w-md p-6 bg-surface-panel rounded-xl border border-subtle shadow-sm">
            <div className="flex items-center gap-4">
              <RiVolumeUpLine size={20} className="text-subtle" />
              <Slider 
                value={volume} 
                onChange={setVolume} 
                min={0} 
                max={100}
                label="Master Volume"
                showValue
                size="2"
                className="flex-1"
              />
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Radix-inspired visual styles to match different UI densities and contexts.</DocText>
        <CodePreview
          code={`<Slider variant="surface" label="Surface Style (Inner Shadow)" defaultValue={30} />
<Slider variant="classic" label="Classic Style (High Contrast)" defaultValue={60} />
<Slider variant="soft" label="Soft Style (Translucent)" defaultValue={80} />`}
        >
          <div className="flex flex-col gap-8 max-w-sm">
            <Slider variant="surface" label="Surface Style" defaultValue={30} />
            <Slider variant="classic" label="Classic Style" defaultValue={60} />
            <Slider variant="soft" label="Soft Style" defaultValue={80} />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="colors">
        <DocHeading>Colors</DocHeading>
        <DocText>Use semantic colors to communicate intent or brand personality.</DocText>
        <CodePreview
          code={`<Slider color="blue" label="System Update" defaultValue={70} />
<Slider color="success" label="Battery Level" defaultValue={95} />
<Slider color="error" label="Critical Temp" defaultValue={20} />`}
        >
          <div className="flex flex-col gap-6 max-w-sm">
            {colors.map(color => (
              <Slider 
                key={color} 
                color={color} 
                label={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`} 
                defaultValue={Math.floor(Math.random() * 60) + 20} 
              />
            ))}
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>Three distinct sizes to match the density of your interface.</DocText>
        <CodePreview
          code={`<Slider size="1" label="Size 1" defaultValue={30} />
<Slider size="2" label="Size 2" defaultValue={50} />
<Slider size="3" label="Size 3" defaultValue={80} />`}
        >
          <div className="flex flex-col gap-8 max-w-sm">
            <Slider size="1" label="Size 1 (12px thumb)" defaultValue={30} />
            <Slider size="2" label="Size 2 (16px thumb)" defaultValue={50} />
            <Slider size="3" label="Size 3 (20px thumb)" defaultValue={80} />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="radius">
        <Flex direction="column" gap="2">
          <DocHeading>Sizes & Radius Matrix</DocHeading>
          <DocText>Ma trận trực quan hóa sự nhất quán của Slider qua mọi biến thể hình học.</DocText>
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
              ].map(row => (
                <Grid key={row.size} columns="6" gap="4" align="center" style={{ marginBottom: '24px' }}>
                  <Text size="2" weight="bold" style={{ color: 'var(--gray-12)' }}>{row.label}</Text>
                  {row.radiusTokens.map((radius: any) => (
                    <Flex key={radius} justify="center" style={{ padding: '0 8px' }}>
                      <Slider 
                        size={row.size as any} 
                        radius={radius} 
                        defaultValue={60}
                        style={{ width: '100%', maxWidth: '100px' }}
                      />
                    </Flex>
                  ))}
                </Grid>
              ))}
            </Box>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={sliderProps} />
      </DocSection>
    </DocLayout>
  );
};

export default SliderDoc;
