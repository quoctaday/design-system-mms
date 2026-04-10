import React, { useState } from 'react';
import { Switch } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const SwitchDoc: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'states', title: 'Interactive States' },
    { id: 'patterns', title: 'UI Patterns' },
    { id: 'api', title: 'API Reference' }
  ];

  const switchProps = [
    { name: 'label', type: 'string', description: 'Nhãn hiển thị bên cạnh switch.' },
    { name: 'size', type: "'small' | 'medium'", default: "'medium'", description: 'Kích thước của switch.' },
    { name: 'checked', type: 'boolean', description: 'Trạng thái bật/tắt (controlled).' },
    { name: 'onChange', type: '(e: React.ChangeEvent<HTMLInputElement>) => void', description: 'Callback khi thay đổi trạng thái.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa switch.' }
  ];

  return (
    <DocLayout 
      title="Switch" 
      description="A control that allows the user to toggle between checked and unchecked states."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>Simple toggle with a label. The Switch uses standard checkbox logic under the hood.</p>
        <CodePreview
          code={`<Switch 
  label="Enable Notifications" 
  checked={checked} 
  onChange={(e) => setChecked(e.target.checked)} 
/>`}
        >
          <div className="py-2">
            <Switch 
              label="Enable Notifications" 
              checked={checked1} 
              onChange={(e) => setChecked1(e.target.checked)} 
            />
          </div>
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Two sizes for different UI contexts: <code>medium</code> (default) and <code>small</code>.</p>
        <CodePreview
          code={`<Switch label="Default size" defaultChecked />
<Switch size="small" label="Compact size" defaultChecked />`}
        >
          <div className="flex items-center gap-12 py-2">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Medium</span>
              <Switch label="Notifications" defaultChecked />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Small</span>
              <Switch size="small" label="Compact mode" defaultChecked />
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="states" className="doc-section">
        <h2>Interactive States</h2>
        <p>Visual representation of different interactive states: Off, On, and Disabled.</p>
        <CodePreview
          code={`<Switch label="Interactive" checked={checked} onChange={...} />
<Switch label="Disabled Off" disabled />
<Switch label="Disabled On" disabled defaultChecked />`}
        >
          <div className="flex flex-wrap gap-8 py-2">
            <Switch 
              label="Active State" 
              checked={checked2} 
              onChange={(e) => setChecked2(e.target.checked)} 
            />
            <Switch label="Disabled Off" disabled />
            <Switch label="Disabled On" disabled defaultChecked />
          </div>
        </CodePreview>
      </section>

      <section id="patterns" className="doc-section">
        <h2>UI Patterns</h2>
        <p>Common usage in settings lists and configuration panels.</p>
        <CodePreview
          code={`<div className="divide-y divide-subtle border border-subtle rounded-xl overflow-hidden">
  <div className="p-4 flex justify-between items-center transition-colors hover:bg-muted/5">
    {/* Setting Info and Switch */}
  </div>
</div>`}
        >
          <div className="max-w-md bg-canvas border border-subtle rounded-2xl overflow-hidden divide-y divide-subtle shadow-sm">
            <div className="p-4 flex justify-between items-center transition-colors hover:bg-muted/10">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-strong">Dark Mode</span>
                <span className="text-xs text-secondary italic">Adjust UI for better night viewing</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="p-4 flex justify-between items-center transition-colors hover:bg-muted/10">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-strong">Automatic Updates</span>
                <span className="text-xs text-secondary italic">Keep system up to date</span>
              </div>
              <Switch />
            </div>
            <div className="p-4 flex justify-between items-center opacity-60 bg-muted/5">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-strong text-muted">Two-factor Authentication</span>
                <span className="text-xs text-muted italic line-through">Security feature unavailable</span>
              </div>
              <Switch disabled />
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={switchProps} />
      </section>
    </DocLayout>
  );
};

export default SwitchDoc;

