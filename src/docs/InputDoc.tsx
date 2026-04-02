import React, { useState } from 'react';
import Input from '../components/ui/Input/Input';
import { Tabs } from '../components/ui/Tabs/Tabs';
import { RiSearchLine, RiCommandLine } from 'react-icons/ri';
import './InputDoc.css';

const InputDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'surface' | 'classic' | 'soft'>('surface');
  
  const colors: Array<"brand" | "success" | "error" | "warning" | "gray"> = [
    'brand', 'gray', 'success', 'warning', 'error'
  ];

  return (
    <div className="input-doc">
      <header className="doc-header">
        <h1>Input</h1>
        <p className="doc-description">A component for receiving text user input.</p>
      </header>
      
      <section className="doc-section">
        <h2>Variants</h2>
        <p>Inputs are available in three visual variants.</p>
        <div className="example-grid">
          <div className="example-item">
            <Input variant="surface" placeholder="Search..." />
            <code>variant="surface"</code>
          </div>
          <div className="example-item">
            <Input variant="classic" placeholder="Search..." />
            <code>variant="classic"</code>
          </div>
          <div className="example-item">
            <Input variant="soft" placeholder="Search..." />
            <code>variant="soft"</code>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Focus Rings (Colors)</h2>
        <p>Use the <code>color</code> prop to change the focus ring behavior, especially useful for validation states.</p>
        
        <Tabs 
          value={activeColorVariant}
          onValueChange={(value) => setActiveColorVariant(value as any)}
        >
          <Tabs.List>
            <Tabs.Trigger value="surface">Surface</Tabs.Trigger>
            <Tabs.Trigger value="classic">Classic</Tabs.Trigger>
            <Tabs.Trigger value="soft">Soft</Tabs.Trigger>
          </Tabs.List>
        </Tabs>

        <div className="example-stack" style={{ marginTop: '24px' }}>
          {colors.map((color) => (
            <div key={color} className="input-row">
              <span className="input-label" style={{ minWidth: 80 }}>{color}</span>
              <Input 
                color={color} 
                variant={activeColorVariant} 
                defaultValue={color === 'error' ? 'Invalid entry' : undefined}
                placeholder={`Focus me (${color})`} 
              />
            </div>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2>Sizes</h2>
        <p>Available in three sizes.</p>
        <div className="example-stack" style={{ maxWidth: 300 }}>
          <Input size="1" placeholder="Size 1" />
          <Input size="2" placeholder="Size 2" />
          <Input size="3" placeholder="Size 3" />
        </div>
      </section>

      <section className="doc-section">
        <h2>Radius</h2>
        <p>Control the roundedness of the input corners.</p>
        <div className="example-stack" style={{ maxWidth: 300 }}>
          <Input radius="none" placeholder="None" />
          <Input radius="small" placeholder="Small" />
          <Input radius="medium" placeholder="Medium" />
          <Input radius="large" placeholder="Large" />
          <Input radius="full" placeholder="Full (Pill)" />
        </div>
      </section>

      <section className="doc-section">
        <h2>Slots</h2>
        <p>Pass custom elements to either side of the input field.</p>
        <div className="example-stack" style={{ maxWidth: 300 }}>
          <Input leftSlot={<RiSearchLine size={16} />} placeholder="Search documentation" />
          <Input rightSlot={<span style={{fontSize: 12, display: 'flex', alignItems: 'center', gap: 2}}><RiCommandLine />K</span>} placeholder="Search documentation" />
          <Input leftSlot={<RiSearchLine size={16} />} rightSlot={<span style={{fontSize: 12}}>⏎</span>} placeholder="Search..." />
        </div>
      </section>
      
      <section className="doc-section">
        <h2>Disabled State</h2>
        <p>Use the <code>disabled</code> boolean to prevent interaction.</p>
        <div className="example-stack" style={{ maxWidth: 300 }}>
          <Input disabled placeholder="Cannot type here" />
          <Input disabled value="Pre-filled disabled" />
        </div>
      </section>
    </div>
  );
};

export default InputDoc;
