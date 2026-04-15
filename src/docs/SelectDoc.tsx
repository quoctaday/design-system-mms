import React, { useState } from 'react';
import { Select } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
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
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của trigger và items.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", default: "'md'", description: 'Độ bo góc của trigger và menu content.' }
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
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>A standard select with interactive items and status tracking.</p>
        <CodePreview
          code={`const [value, setValue] = useState('apple');

<Select value={value} onValueChange={setValue}>
  <Select.Trigger>
    {options.find(opt => opt.value === value)?.label}
  </Select.Trigger>
  <Select.Portal>
    <Select.Content>
      {options.map(opt => (
        <Select.Item key={opt.value} value={opt.value}>
          {opt.label}
        </Select.Item>
      ))}
    </Select.Content>
  </Select.Portal>
</Select>`}
        >
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
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes & Radius</h2>
        <p>Standardizing the Select trigger and menu content to match the design system tokens.</p>
        <CodePreview
          code={`<Select size="1" radius="2">...</Select>
<Select size="2" radius="4">...</Select>
<Select size="3" radius="5">...</Select>`}
        >
          <div className="flex flex-col gap-6 max-w-[320px] py-2">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 1 + SM Radius</span>
              <Select size="1" radius="2" defaultValue="apple">
                <Select.Trigger />
                <Select.Portal>
                  <Select.Content>
                    {options.map(opt => (
                      <Select.Item key={opt.value} value={opt.value}>{opt.label}</Select.Item>
                    ))}
                  </Select.Content>
                </Select.Portal>
              </Select>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 2 + MD Radius</span>
              <Select size="2" radius="4">
                <Select.Trigger placeholder="Pick a fruit" />
                <Select.Portal>
                  <Select.Content>
                    {options.map(opt => (
                      <Select.Item key={opt.value} value={opt.value}>{opt.label}</Select.Item>
                    ))}
                  </Select.Content>
                </Select.Portal>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 3 + LG Radius</span>
              <Select size="3" radius="5">
                <Select.Trigger placeholder="Large Select" />
                <Select.Portal>
                  <Select.Content>
                    {options.map(opt => (
                      <Select.Item key={opt.value} value={opt.value}>{opt.label}</Select.Item>
                    ))}
                  </Select.Content>
                </Select.Portal>
              </Select>
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={selectProps} />
      </section>
    </DocLayout>
  );
};

export default SelectDoc;
