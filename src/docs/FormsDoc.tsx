import React, { useState } from 'react';
import { 
  RadioGroup, 
  Select, 
  Badge 
} from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const FormsDoc: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedRole, setSelectedRole] = useState('editor');

  const toc = [
    { id: 'radio', title: 'RadioGroup' },
    { id: 'select', title: 'Select' },
    { id: 'api', title: 'API Reference' }
  ];

  const radioProps = [
    { name: 'value', type: 'string', description: 'Giá trị đang được chọn (controlled).' },
    { name: 'defaultValue', type: 'string', description: 'Giá trị mặc định ban đầu.' },
    { name: 'onValueChange', type: '(value: string) => void', description: 'Callback khi thay đổi giá trị.' },
    { name: 'variant', type: "'classic' | 'surface' | 'soft'", default: "'classic'", description: 'Phong cách hiển thị của vòng tròn radio.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của vòng tròn radio.' },
    { name: 'color', type: 'SemanticColors', default: "'brand'", description: 'Màu sắc khi được chọn và focus.' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'vertical'", description: 'Hướng hiển thị của các item.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa toàn bộ group.' }
  ];

  const selectProps = [
    { name: 'value', type: 'string', description: 'Giá trị đang được chọn.' },
    { name: 'onValueChange', type: '(value: string) => void', description: 'Callback khi thay đổi giá trị.' },
    { name: 'placeholder', type: 'string', description: 'Text hiển thị khi chưa có giá trị.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa select.' }
  ];

  return (
    <DocLayout 
      title="Advanced Form Components" 
      description="Collection of complex form controls powered by Radix UI primitives for high density interfaces."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="radio">
        <DocHeading>RadioGroup</DocHeading>
        <DocText>A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.</DocText>
        <CodePreview
          code={`<RadioGroup value={plan} onValueChange={setPlan} variant="surface">
  <RadioGroup.Item value="basic">Basic Plan</RadioGroup.Item>
  <RadioGroup.Item value="pro">Pro Plan</RadioGroup.Item>
</RadioGroup>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-2">
            <div>
              <DocHeading level={3} className="text-xs font-bold text-muted uppercase tracking-tighter mb-4">Surface Variant (Standard)</DocHeading>
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} variant="surface">
                <RadioGroup.Item value="basic">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Gói cơ bản</span>
                    <span className="text-xs text-secondary">Miễn phí cho cá nhân</span>
                  </div>
                </RadioGroup.Item>
                <RadioGroup.Item value="pro">
                  <div className="flex gap-2 items-center">
                    <span className="text-sm font-medium">Gói chuyên nghiệp</span>
                    <Badge color="brand" variant="soft" size="1">Popular</Badge>
                  </div>
                </RadioGroup.Item>
                <RadioGroup.Item value="enterprise" disabled>Gói doanh nghiệp (Soon)</RadioGroup.Item>
              </RadioGroup>
            </div>

            <div className="md:border-l border-subtle md:pl-12">
              <DocHeading level={3} className="text-xs font-bold text-muted uppercase tracking-tighter mb-4">Classic Variant (Horizontal)</DocHeading>
              <RadioGroup orientation="horizontal" defaultValue="1" variant="classic">
                <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
                <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
                <RadioGroup.Item value="3">Option 3</RadioGroup.Item>
              </RadioGroup>
              
              <div className="mt-8">
                <DocHeading level={3} className="text-xs font-bold text-muted uppercase tracking-tighter mb-4">Sizes</DocHeading>
                <div className="flex flex-col gap-4">
                  <RadioGroup size="1" defaultValue="1">
                    <RadioGroup.Item value="1">Size 1 (16px)</RadioGroup.Item>
                  </RadioGroup>
                  <RadioGroup size="2" defaultValue="1">
                    <RadioGroup.Item value="1">Size 2 (20px)</RadioGroup.Item>
                  </RadioGroup>
                  <RadioGroup size="3" defaultValue="1">
                    <RadioGroup.Item value="1">Size 3 (24px)</RadioGroup.Item>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="select">
        <DocHeading>Select</DocHeading>
        <DocText>Displays a list of options for the user to pick from—triggered by a button.</DocText>
        <CodePreview
          code={`<Select value={role} onValueChange={setRole}>
  <Select.Trigger placeholder="Select role..." />
  <Select.Portal>
    <Select.Content>
      <Select.Item value="admin">Admin</Select.Item>
    </Select.Content>
  </Select.Portal>
</Select>`}
        >
          <div className="flex flex-wrap gap-8 py-2">
            <div className="w-60">
              <DocHeading level={3} className="text-xs font-bold text-muted uppercase tracking-tighter mb-3">User Options</DocHeading>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <Select.Trigger placeholder="Chọn vai trò...">
                  {selectedRole === 'admin' && 'Administrator'}
                  {selectedRole === 'editor' && 'Editor'}
                  {selectedRole === 'viewer' && 'Viewer'}
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content>
                    <Select.Label>Quyền hạn</Select.Label>
                    <Select.Item value="admin">Administrator</Select.Item>
                    <Select.Item value="editor">Editor</Select.Item>
                    <Select.Separator />
                    <Select.Label>Chỉ xem</Select.Label>
                    <Select.Item value="viewer">Viewer</Select.Item>
                    <Select.Item value="guest" disabled>Guest Account</Select.Item>
                  </Select.Content>
                </Select.Portal>
              </Select>
            </div>

            <div className="w-60">
              <DocHeading level={3} className="text-xs font-bold text-muted uppercase tracking-tighter mb-3">Disabled State</DocHeading>
              <Select disabled>
                <Select.Trigger placeholder="Không thể chọn..." />
              </Select>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <DocHeading level={3} className="text-sm font-bold text-strong mb-4">RadioGroup Props</DocHeading>
        <PropsTable props={radioProps} />
        <div className="mt-8">
          <DocHeading level={3} className="text-sm font-bold text-strong mb-4">Select Props</DocHeading>
          <PropsTable props={selectProps} />
        </div>
      </DocSection>
    </DocLayout>
  );
};

export default FormsDoc;

