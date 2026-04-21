import React, { useState } from 'react';
import { Select, Flex, Grid, Box, Text } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const SelectDoc: React.FC = () => {
  const [value1, setValue1] = useState('apple');

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'sizes', title: 'Sizes & Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const selectProps = [
    { name: 'value', type: 'string', description: 'Giá trị đang được chọn (controlled).' },
    { name: 'defaultValue', type: 'string', description: 'Giá trị mặc định ban đầu.' },
    { name: 'onValueChange', type: '(value: string) => void', description: 'Callback khi thay đổi giá trị.' },
    { name: 'placeholder', type: 'string', default: "'Select...'", description: 'Text hiển thị khi chưa có giá trị.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa toàn bộ select.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của trigger: 24px, 32px, 40px.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'medium'", description: 'Độ bo góc chuẩn hệ thống 5 cấp độ Radix.' }
  ];

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
  ];

  return (
    <DocLayout 
      title="Select" 
      description="Displays a list of options for the user to pick from—triggered by a button."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <Flex direction="column" gap="2">
          <DocHeading>Basic Usage</DocHeading>
          <DocText>A standard select with interactive items and status tracking.</DocText>
        </Flex>

        <div className="premium-block">
          <div className="premium-block-content p-8">
            <div className="premium-block-preview">
              <div className="max-w-[240px]">
                <Select value={value1} onValueChange={setValue1}>
                  <Select.Trigger>
                    {options.find(opt => opt.value === value1)?.label}
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content>
                      <Select.Label>Fruits</Select.Label>
                      {options.map(opt => (
                        <Select.Item key={opt.value} value={opt.value}>
                          {opt.label}
                        </Select.Item>
                      ))}
                      <Select.Separator />
                      <Select.Item value="custom" disabled>Other (Coming Soon)</Select.Item>
                    </Select.Content>
                  </Select.Portal>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="sizes">
        <Flex direction="column" gap="2">
          <DocHeading>Sizes & Radius Matrix</DocHeading>
          <DocText>Ma trận trực quan hóa sự kết hợp giữa 3 kích chuẩn Grid và 5 cấp độ bo góc của hệ thống.</DocText>
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
                      <Select size={row.size as any} radius={radius} defaultValue="apple">
                        <Select.Trigger style={{ width: '100%', maxWidth: '120px' }} />
                        <Select.Portal>
                          <Select.Content>
                            {options.map(opt => (
                              <Select.Item key={opt.value} value={opt.value}>{opt.label}</Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Portal>
                      </Select>
                    </Flex>
                  ))}
                </Grid>
              ))}
            </Box>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <Flex direction="column" gap="2">
          <DocHeading>API Reference</DocHeading>
          <PropsTable props={selectProps} />
        </Flex>
      </DocSection>
    </DocLayout>
  );
};

export default SelectDoc;
