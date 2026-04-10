import React, { useState } from 'react';
import { DocLayout } from './DocLayout';
import { MultiSelect, Badge } from '../components/ui';
import { CodePreview } from './CodePreview';
import { PropsTable } from './PropsTable';
import { RiAlertLine, RiSettings3Line, RiShieldUserLine, RiUserAddLine, RiUserFollowLine } from 'react-icons/ri';
import './MultiSelectDoc.css';

const USERS = [
  { id: '1', name: 'Alice Cooper', role: 'Admin' },
  { id: '2', name: 'Bob Dylan', role: 'Editor' },
  { id: '3', name: 'Charlie Watts', role: 'Viewer' },
  { id: '4', name: 'Diana Ross', role: 'Editor' },
  { id: '5', name: 'Elton John', role: 'Viewer' },
];

export const MultiSelectDoc: React.FC = () => {
  const [basicValues, setBasicValues] = useState<string[]>([]);
  const [customValues, setCustomValues] = useState<string[]>(['1', '3']);

  return (
    <DocLayout 
      title="MultiSelect"
      description="A control that allows the user to select multiple options from a list, displaying them as inline tags."
    >
      <div className="doc-content">
        <section id="usage">
          <h2>Usage</h2>
          <p>
            The <code>MultiSelect</code> component is ideal for filtering, tagging, and assigning multiple values. It dynamically renders the selected items as interactive badges within the input surface.
          </p>
          <CodePreview
            code={`import { MultiSelect } from '@/components/ui';

export const Example = () => {
  const [selected, setSelected] = useState<string[]>([]);
  
  return (
    <MultiSelect.Root value={selected} onValueChange={setSelected}>
      <MultiSelect.Trigger placeholder="Select departments..." />
      <MultiSelect.Portal>
        <MultiSelect.Content>
          <MultiSelect.Item value="Sales">Sales</MultiSelect.Item>
          <MultiSelect.Item value="Marketing">Marketing</MultiSelect.Item>
          <MultiSelect.Item value="Engineering">Engineering</MultiSelect.Item>
          <MultiSelect.Item value="HR">Human Resources</MultiSelect.Item>
        </MultiSelect.Content>
      </MultiSelect.Portal>
    </MultiSelect.Root>
  );
}`}
          >
            <div style={{ width: '100%', maxWidth: '300px' }}>
              <MultiSelect.Root value={basicValues} onValueChange={setBasicValues}>
                <MultiSelect.Trigger placeholder="Select departments..." />
                <MultiSelect.Portal>
                  <MultiSelect.Content>
                    <MultiSelect.Item value="Sales">Sales</MultiSelect.Item>
                    <MultiSelect.Item value="Marketing">Marketing</MultiSelect.Item>
                    <MultiSelect.Item value="Engineering">Engineering</MultiSelect.Item>
                    <MultiSelect.Item value="HR">Human Resources</MultiSelect.Item>
                  </MultiSelect.Content>
                </MultiSelect.Portal>
              </MultiSelect.Root>
            </div>
          </CodePreview>
        </section>

        <section id="custom-render">
          <h2>Custom Rendering</h2>
          <p>
            You can customize how the selected tags are rendered inside the trigger by passing a <code>renderItem</code> prop. This is useful when the underlying value is an ID, and you want to render the corresponding name or an icon.
          </p>
          <CodePreview
            code={`<MultiSelect.Root value={selectedUsers} onValueChange={setSelectedUsers}>
  <MultiSelect.Trigger 
    placeholder="Assign users..." 
    renderItem={(val) => {
      const user = USERS.find(u => u.id === val);
      return \`\${user?.name} (\${user?.role})\`;
    }}
  />
  <MultiSelect.Portal>
    <MultiSelect.Content>
      <MultiSelect.Label>Administrators</MultiSelect.Label>
      <MultiSelect.Item value="1">Alice Cooper</MultiSelect.Item>
      <MultiSelect.Separator />
      <MultiSelect.Label>Users</MultiSelect.Label>
      <MultiSelect.Item value="2">Bob Dylan</MultiSelect.Item>
      <MultiSelect.Item value="3">Charlie Watts</MultiSelect.Item>
      <MultiSelect.Item value="4">Diana Ross</MultiSelect.Item>
    </MultiSelect.Content>
  </MultiSelect.Portal>
</MultiSelect.Root>`}
          >
            <div style={{ width: '100%', maxWidth: '350px' }}>
              <MultiSelect.Root value={customValues} onValueChange={setCustomValues}>
                <MultiSelect.Trigger 
                  placeholder="Assign users..." 
                  renderItem={(val) => {
                    const user = USERS.find(u => u.id === val);
                    return user ? \`\${user.name} (\${user.role})\` : val;
                  }}
                />
                <MultiSelect.Portal>
                  <MultiSelect.Content>
                    <MultiSelect.Label>Administrators</MultiSelect.Label>
                    <MultiSelect.Item value="1">Alice Cooper</MultiSelect.Item>
                    <MultiSelect.Separator />
                    <MultiSelect.Label>Staff</MultiSelect.Label>
                    <MultiSelect.Item value="2">Bob Dylan</MultiSelect.Item>
                    <MultiSelect.Item value="3">Charlie Watts</MultiSelect.Item>
                    <MultiSelect.Item value="4">Diana Ross</MultiSelect.Item>
                    <MultiSelect.Item value="5">Elton John</MultiSelect.Item>
                  </MultiSelect.Content>
                </MultiSelect.Portal>
              </MultiSelect.Root>
            </div>
          </CodePreview>
        </section>

        <section id="props">
          <h2>Props</h2>
          <PropsTable
            props={[
              {
                name: 'value',
                type: 'string[]',
                description: 'The controlled array of selected values.',
              },
              {
                name: 'defaultValue',
                type: 'string[]',
                description: 'The default array of selected values when uncontrolled.',
                default: '[]',
              },
              {
                name: 'onValueChange',
                type: '(value: string[]) => void',
                description: 'Event handler called when the selection changes.',
              },
              {
                name: 'renderItem',
                type: '(item: string) => ReactNode',
                description: 'Optional function in Trigger to customize how selected strings map to visual tags.',
              },
              {
                name: 'disabled',
                type: 'boolean',
                description: 'When true, prevents the user from interacting with the multi-select.',
                default: 'false',
              },
            ]}
          />
        </section>
      </div>
    </DocLayout>
  );
};

export default MultiSelectDoc;
