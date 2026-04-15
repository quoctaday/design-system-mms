import React, { useState } from 'react';
import { Checkbox } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const CheckboxDoc: React.FC = () => {
  const [checked1, setChecked1] = useState<boolean | 'indeterminate'>(true);
  const [checked2, setChecked2] = useState<boolean | 'indeterminate'>(false);
  const [indeterminate, setIndeterminate] = useState<boolean | 'indeterminate'>('indeterminate');

  const colors: Array<'brand' | 'success' | 'error' | 'warning' | 'gray'> = [
    'brand', 'success', 'error', 'warning', 'gray'
  ];

  const toc = [
    { id: 'states', title: 'States' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'colors', title: 'Colors' },
    { id: 'radius', title: 'Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const checkboxProps = [
    { name: 'checked', type: "boolean | 'indeterminate'", default: 'false', description: 'Trạng thái chọn của checkbox.' },
    { name: 'onCheckedChange', type: '(checked: boolean | "indeterminate") => void', description: 'Hàm gọi khi trạng thái thay đổi.' },
    { name: 'label', type: 'string', description: 'Văn bản nhãn hiển thị bên cạnh.' },
    { name: 'size', type: "'1' | '2'", default: "'1'", description: 'Kích thước của checkbox.' },
    { name: 'color', type: 'ColorVariant', default: "'brand'", description: 'Màu sắc chủ đề.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", description: 'Độ bo góc của checkbox.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa tương tác.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout 
      title="Checkbox" 
      description="A control that allows the user to select one or more options from a set."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="states" className="doc-section">
        <h2>States</h2>
        <p>Checkbox supports checked, unchecked, and indeterminate states.</p>
        <CodePreview
          code={`<Checkbox checked={true} label="Checked" />
<Checkbox checked={false} label="Unchecked" />
<Checkbox checked="indeterminate" label="Indeterminate" />
<Checkbox disabled label="Disabled" />`}
        >
          <div className="flex flex-wrap gap-6 items-center">
            <Checkbox 
              checked={checked1} 
              onCheckedChange={setChecked1} 
              label="Checked" 
            />
            <Checkbox 
              checked={checked2} 
              onCheckedChange={setChecked2} 
              label="Unchecked" 
            />
            <Checkbox 
              checked={indeterminate} 
              onCheckedChange={setIndeterminate} 
              label="Indeterminate" 
            />
            <Checkbox checked disabled label="Disabled Checked" />
          </div>
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Available in two standard sizes.</p>
        <CodePreview
          code={`<Checkbox size="1" label="Size 1 (16px)" checked />
<Checkbox size="2" label="Size 2 (20px)" checked />`}
        >
          <div className="flex gap-6 items-center">
            <Checkbox size="1" label="Size 1 (16px)" checked />
            <Checkbox size="2" label="Size 2 (20px)" checked />
          </div>
        </CodePreview>
      </section>

      <section id="colors" className="doc-section">
        <h2>Colors</h2>
        <p>Use the <code>color</code> prop to change the checkbox color theme.</p>
        <CodePreview
          code={`<Checkbox color="success" checked label="Success" />
<Checkbox color="error" checked label="Error" />`}
        >
          <div className="flex flex-wrap gap-6">
            {colors.map(color => (
              <Checkbox key={color} color={color} checked label={color.charAt(0).toUpperCase() + color.slice(1)} />
            ))}
          </div>
        </CodePreview>
      </section>

      <section id="radius" className="doc-section">
        <h2>Radius</h2>
        <p>Control the rounding of the checkbox to match your UI protocol.</p>
        <CodePreview
          code={`<Checkbox radius="none" label="None" checked />
<Checkbox radius="2" label="Small" checked />
<Checkbox radius="4" label="Medium" checked />
<Checkbox radius="5" label="Large" checked />
<Checkbox radius="full" label="Full" checked />`}
        >
          <div className="flex flex-wrap gap-6">
            <Checkbox radius="none" label="None" checked />
            <Checkbox radius="2" label="Small" checked />
            <Checkbox radius="4" label="Medium" checked />
            <Checkbox radius="5" label="Large" checked />
            <Checkbox radius="full" label="Full" checked />
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={checkboxProps} />
      </section>
    </DocLayout>
  );
};

export default CheckboxDoc;

