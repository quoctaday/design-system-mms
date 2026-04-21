import React, { useState } from 'react';
import { Input, TextField, TextArea, Flex, Grid, Box, Text, AuroraBackground, Tabs } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { CodeSnippet } from '../components/docs/CodeSnippet';
import { 
  RiSearchLine, 
  RiCommandLine, 
  RiMailLine, 
  RiCheckFill,
  RiErrorWarningFill,
  RiCloseCircleFill,
  RiInformationFill,
} from 'react-icons/ri';

import '../components/docs/PremiumBlock.css';

const InputDoc: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState<'surface' | 'soft'>('surface');
  
  const colors: Array<"brand" | "success" | "warning" | "error" | "gray"> = [
    'brand', 'success', 'warning', 'error', 'gray'
  ];

  const toc = [
    { id: 'variants', title: 'Variants' },
    { id: 'compound', title: 'Compound Architecture' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'states', title: 'Semantic States' },
    { id: 'textarea', title: 'TextArea' },
    { id: 'api', title: 'API Reference' }
  ];

  const inputProps = [
    { name: 'variant', type: "'surface' | 'soft'", default: "'surface'", description: 'Phong cách hiển thị tuân thủ Radix Themes.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích cỡ: 24px, 32px (Mặc định), 40px.' },
    { name: 'color', type: "'brand' | 'success' | 'warning' | 'error' | 'gray'", default: "'brand'", description: 'Màu sắc semantic cho vòng Focus Halo.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'medium'", description: 'Hệ thống bo góc 5 cấp độ Radix.' },
    { name: 'leftSlot', type: 'ReactNode', description: 'Shorthand cho leading icon.' },
    { name: 'rightSlot', type: 'ReactNode', description: 'Shorthand cho trailing icon/action.' }
  ];

  return (
    <DocLayout 
      title="Input / TextField" 
      description="Thành phần nhập liệu độ phân giải cao với cấu trúc Compound và cơ chế Focus Halo 3 lớp."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="variants">
        <Flex direction="column" gap="2">
          <DocHeading>Variants & Colors</DocHeading>
          <DocText>Khám phá bộ 3 diện mạo đặc trưng của MMS Native Engine qua các trạng thái màu sắc.</DocText>
        </Flex>

        <div className="premium-block">
          <Tabs
            value={activeVariant}
            onValueChange={(value) => setActiveVariant(value as 'surface' | 'classic' | 'soft')}
            className="premium-block-tabs"
          >
            <Tabs.List className="border-none bg-transparent h-auto gap-2">
              <Tabs.Trigger value="surface">Surface</Tabs.Trigger>
              <Tabs.Trigger value="soft">Soft</Tabs.Trigger>
            </Tabs.List>
          </Tabs>

          <div className="premium-block-content p-8">
            <div className="premium-block-preview">
              <Flex direction="column" gap="8" className="w-full">
                {colors.map((color) => (
                  <Flex key={color} direction="column" gap="2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-9 px-1">
                      {color} Context
                    </span>
                    <Input 
                      variant={activeVariant}
                      color={color}
                      leftSlot={color === 'success' ? <RiCheckFill /> : color === 'warning' ? <RiMailLine /> : color === 'error' ? <RiInformationFill /> : <RiMailLine />}
                      placeholder={`Typing in ${color}...`} 
                    />
                  </Flex>
                ))}
              </Flex>
            </div>
          </div>

          <div className="premium-block-footer">
            <CodeSnippet 
              code={`<Input variant="${activeVariant}" color="brand" placeholder="..." />`}
              title="source"
            />
          </div>
        </div>
      </DocSection>

      <DocSection id="compound">
        <Flex direction="column" gap="2">
          <DocHeading>Compound Architecture</DocHeading>
          <DocText>Sử dụng cấu trúc linh hoạt để xây dựng thanh công cụ phức tạp.</DocText>
        </Flex>
        <CodePreview
          code={`<TextField.Root size="2" variant="surface">
  <TextField.Slot>
    <RiSearchLine size={16} />
  </TextField.Slot>
  <TextField.Input placeholder="Search documentation..." />
  <TextField.Slot pr="3">
    <Kbd>⌘K</Kbd>
  </TextField.Slot>
</TextField.Root>`}
        >
          <div className="max-w-md w-full">
            <TextField.Root size="2" variant="surface">
              <TextField.Slot>
                <RiSearchLine size={16} className="text-gray-9" />
              </TextField.Slot>
              <TextField.Input placeholder="Search documentation..." />
              <TextField.Slot pr="4">
                <div className="flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded border border-gray-4 bg-gray-2 text-gray-11 opacity-70">
                  <RiCommandLine size={10} />K
                </div>
              </TextField.Slot>
            </TextField.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <Flex direction="column" gap="2">
          <DocHeading>Sizes & Radius Matrix</DocHeading>
          <DocText>Khám phá sự linh hoạt của Input qua ma trận kích thước và các cấp độ bo góc chuẩn Radix.</DocText>
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
                    <Flex key={radius} justify="center">
                      <Input 
                        size={row.size as any} 
                        radius={radius} 
                        placeholder="Type..." 
                        style={{ width: '100%', maxWidth: '120px' }}
                      />
                    </Flex>
                  ))}
                </Grid>
              ))}
            </Box>
          </div>
        </div>
      </DocSection>

      <DocSection id="textarea">
        <Flex direction="column" gap="2">
          <DocHeading>TextArea</DocHeading>
          <DocText>Phiên bản mở rộng dành cho nhập liệu đa dòng, hỗ trợ đầy đủ Variant và Slot.</DocText>
        </Flex>
        <CodePreview
          code={`<TextArea variant="surface" placeholder="Type message..." rows={4} />`}
        >
          <div className="max-w-md">
            <TextArea variant="surface" placeholder="Type your message here..." rows={4} />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={inputProps} />
      </DocSection>
    </DocLayout>
  );
};

export default InputDoc;
