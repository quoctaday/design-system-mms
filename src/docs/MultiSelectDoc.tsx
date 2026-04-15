import React, { useState } from 'react';
import { MultiSelect } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
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
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của trigger và items.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", default: "'md'", description: 'Độ bo góc của trigger và menu content.' },
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
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>Standard multi-selection with tags in the trigger and a "Clear All" action.</p>
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
      </section>

      <section id="search" className="doc-section">
        <h2>With Search</h2>
        <p>Integrated search filtering for handling large sets of options in a dense UI.</p>
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
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes & Radius</h2>
        <p>Following the 14px high-density standard with atomic radius tokens.</p>
        <CodePreview
          code={`<MultiSelect size="1" radius="2">...</MultiSelect>
<MultiSelect size="3" radius="full">...</MultiSelect>`}
        >
          <div className="flex flex-col gap-6 max-w-[400px] py-2">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 1 (32px) + SM Radius</span>
              <MultiSelect size="1" radius="2" defaultValue={['apple']}>
                <MultiSelect.Trigger />
                <MultiSelect.Portal>
                  <MultiSelect.Content>
                    {options.map(opt => (
                      <MultiSelectItem key={opt.value} value={opt.value}>{opt.label}</MultiSelectItem>
                    ))}
                  </MultiSelect.Content>
                </MultiSelect.Portal>
              </MultiSelect>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 3 (48px) + Full Radius</span>
              <MultiSelect size="3" radius="full" defaultValue={['watermelon', 'strawberry']}>
                <MultiSelect.Trigger />
                <MultiSelect.Portal>
                  <MultiSelect.Content>
                    {options.map(opt => (
                      <MultiSelectItem key={opt.value} value={opt.value}>{opt.label}</MultiSelectItem>
                    ))}
                  </MultiSelect.Content>
                </MultiSelect.Portal>
              </MultiSelect>
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={multiSelectProps} />
      </section>
    </DocLayout>
  );
};

// Internal wrapper to fix the MultiSelectItem naming in the loop
const MultiSelectItem = MultiSelect.Item;

export default MultiSelectDoc;
