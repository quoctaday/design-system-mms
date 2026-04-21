import React, { useState } from 'react';
import { MultiSelect, Flex, Grid, Box, Text } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const MultiSelectDoc: React.FC = () => {
  const [values1, setValues1] = useState(['apple', 'banana']);
  const [values2, setValues2] = useState(['grapes']);

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'search', title: 'With Search' },
    { id: 'sizes', title: 'Sizes & Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const multiSelectProps = [
    { name: 'values', type: 'string[]', description: 'Danh sách các giá trị đang được chọn (controlled).' },
    { name: 'defaultValue', type: 'string[]', default: '[]', description: 'Giá trị mặc định ban đầu.' },
    { name: 'onValuesChange', type: '(values: string[]) => void', description: 'Callback khi thay đổi danh sách chọn.' },
    { name: 'placeholder', type: 'string', default: "'Select options...'", description: 'Text hiển thị khi chưa có giá trị.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa toàn bộ select.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của trigger: 24px, 32px, 40px.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'medium'", description: 'Độ bo góc của trigger và menu content.' },
    { name: 'variant', type: "'surface' | 'soft'", default: "'surface'", description: 'Biến thể hiển thị (Có viền hoặc Nền mờ).' },
    { name: 'maxChips', type: 'number', default: '3', description: 'Số lượng chip tối đa hiển thị trong trigger.' }
  ];

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'watermelon', label: 'Watermelon' },
  ];

  return (
    <DocLayout 
      title="MultiSelect" 
      description="A high-density multi-selection component with search, chips, and Flat-Premium aesthetics."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>Standard multi-selection with tags in the trigger and a "Clear All" action.</DocText>
        <CodePreview
          code={`const [values, setValues] = useState(['apple', 'banana']);
          
<MultiSelect values={values} onValuesChange={setValues}>
  <MultiSelect.Trigger />
  <MultiSelect.Portal>
    <MultiSelect.Content showSearch={false}>
      {options.map(opt => (
        <MultiSelect.Item key={opt.value} value={opt.value}>
          {opt.label}
        </MultiSelect.Item>
      ))}
    </MultiSelect.Content>
  </MultiSelect.Portal>
</MultiSelect>`}
        >
          <div className="max-w-[320px]">
            <MultiSelect values={values1} onValuesChange={setValues1}>
              <MultiSelect.Trigger />
              <MultiSelect.Portal>
                <MultiSelect.Content showSearch={false}>
                  <MultiSelect.Label>Fruits</MultiSelect.Label>
                  {options.map(opt => (
                    <MultiSelect.Item key={opt.value} value={opt.value}>
                      {opt.label}
                    </MultiSelect.Item>
                  ))}
                </MultiSelect.Content>
              </MultiSelect.Portal>
            </MultiSelect>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="search">
        <DocHeading>With Search</DocHeading>
        <DocText>Integrated search filtering for handling large sets of options in a dense UI.</DocText>
        <CodePreview
          code={`<MultiSelect values={values} onValuesChange={setValues}>
  <MultiSelect.Trigger placeholder="Search and select..." />
  <MultiSelect.Portal>
    <MultiSelect.Content showSearch={true}>
      {options.map(opt => (
        <MultiSelect.Item key={opt.value} value={opt.value}>
          {opt.label}
        </MultiSelect.Item>
      ))}
    </MultiSelect.Content>
  </MultiSelect.Portal>
</MultiSelect>`}
        >
          <div className="max-w-[320px]">
            <MultiSelect values={values2} onValuesChange={setValues2}>
              <MultiSelect.Trigger placeholder="Search and select..." />
              <MultiSelect.Portal>
                <MultiSelect.Content showSearch={true}>
                  {options.map(opt => (
                    <MultiSelect.Item key={opt.value} value={opt.value}>
                      {opt.label}
                    </MultiSelect.Item>
                  ))}
                </MultiSelect.Content>
              </MultiSelect.Portal>
            </MultiSelect>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <Flex direction="column" gap="2">
          <DocHeading>Sizes & Radius Matrix</DocHeading>
          <DocText>Khám phá sự nhất quán của MultiSelect qua ma trận kích thước và bán kính tinh xảo.</DocText>
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
                      <MultiSelect 
                        size={row.size as any} 
                        radius={radius} 
                        defaultValue={['apple']}
                        style={{ width: '100%', maxWidth: '120px' }}
                      >
                        <MultiSelect.Trigger />
                        <MultiSelect.Portal>
                          <MultiSelect.Content>
                            {options.map(opt => (
                              <MultiSelectItem key={opt.value} value={opt.value}>{opt.label}</MultiSelectItem>
                            ))}
                          </MultiSelect.Content>
                        </MultiSelect.Portal>
                      </MultiSelect>
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
        <PropsTable props={multiSelectProps} />
      </DocSection>
    </DocLayout>
  );
};

// Internal wrapper to fix the MultiSelectItem naming in the loop
const MultiSelectItem = MultiSelect.Item;

export default MultiSelectDoc;
