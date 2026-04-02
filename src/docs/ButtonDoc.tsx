import React, { useState } from 'react';
import Button from '../components/ui/Button/Button';
import { Tabs } from '../components/ui/Tabs/Tabs';
import { 
  RiAddLine, 
  RiArrowRightLine, 
  RiDownloadLine, 
  RiSearchLine,
  RiSendPlaneLine,
  RiUserLine
} from 'react-icons/ri';
import './ButtonDoc.css';

const ButtonDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'solid' | 'soft' | 'outline' | 'ghost' | 'surface'>('solid');
  
  const colors: Array<"brand" | "success" | "error" | "warning" | "orange" | "blue" | "purple" | "sky" | "pink" | "teal" | "secondary" | "gray"> = [
    'brand', 'success', 'error', 'warning', 'orange', 'blue', 'purple', 'sky', 'pink', 'teal', 'secondary', 'gray'
  ];

  return (
    <div className="button-doc">
      <header className="doc-header">
        <h1>Button</h1>
        <p className="doc-description">An interactive element used to trigger actions.</p>
      </header>
      
      <section className="doc-section">
        <h2>Icons</h2>
        <p>Buttons can contain icons to provide extra visual context. Use <code>leftIcon</code> or <code>rightIcon</code> props.</p>
        <div className="example-flex">
          <Button variant="solid" color="brand" leftIcon={<RiAddLine />}>
            New Project
          </Button>
          <Button variant="outline" color="brand" rightIcon={<RiArrowRightLine />}>
            Next Step
          </Button>
          <Button variant="soft" color="brand" leftIcon={<RiDownloadLine />}>
            Download
          </Button>
          <Button variant="surface" leftIcon={<RiSearchLine />}>
            Search
          </Button>
          <Button variant="solid" color="success" rightIcon={<RiSendPlaneLine />}>
            Send
          </Button>
          <Button variant="ghost" color="gray" leftIcon={<RiUserLine />}>
            Profile
          </Button>
        </div>
      </section>
      
      <section className="doc-section">
        <h2>Variants</h2>
        <p>Buttons are available in five visual variants.</p>
        <div className="example-grid">
          <div className="example-item">
            <Button variant="solid" color="brand">Solid</Button>
            <code>variant="solid"</code>
          </div>
          <div className="example-item">
            <Button variant="soft" color="brand">Soft</Button>
            <code>variant="soft"</code>
          </div>
          <div className="example-item">
            <Button variant="outline" color="brand">Outline</Button>
            <code>variant="outline"</code>
          </div>
          <div className="example-item">
            <Button variant="ghost" color="brand">Ghost</Button>
            <code>variant="ghost"</code>
          </div>
          <div className="example-item">
            <Button variant="surface" color="brand">Surface</Button>
            <code>variant="surface"</code>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Colors</h2>
        <p>Use the <code>color</code> prop to assign different semantic meanings to buttons.</p>
        
        <Tabs 
          value={activeColorVariant}
          onValueChange={(value) => setActiveColorVariant(value as any)}
        >
          <Tabs.List>
            <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
            <Tabs.Trigger value="soft">Soft</Tabs.Trigger>
            <Tabs.Trigger value="outline">Outline</Tabs.Trigger>
            <Tabs.Trigger value="ghost">Ghost</Tabs.Trigger>
            <Tabs.Trigger value="surface">Surface</Tabs.Trigger>
          </Tabs.List>
        </Tabs>

        <div className="example-flex" style={{ marginTop: '24px' }}>
          {colors.map((color) => (
            <Button key={color} color={color} variant={activeColorVariant}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2>Sizes</h2>
        <p>Available in four sizes.</p>
        <div className="example-flex" style={{ alignItems: 'center' }}>
          <Button size="1" variant="solid" color="brand">Size 1</Button>
          <Button size="2" variant="solid" color="brand">Size 2</Button>
          <Button size="3" variant="solid" color="brand">Size 3</Button>
          <Button size="4" variant="solid" color="brand">Size 4</Button>
        </div>
      </section>

      <section className="doc-section">
        <h2>Radius</h2>
        <p>Control the roundedness of the button corners.</p>
        <div className="example-flex">
          <Button radius="none" variant="solid" color="brand">None</Button>
          <Button radius="small" variant="solid" color="brand">Small</Button>
          <Button radius="medium" variant="solid" color="brand">Medium</Button>
          <Button radius="large" variant="solid" color="brand">Large</Button>
          <Button radius="full" variant="solid" color="brand">Full (Pill)</Button>
        </div>
      </section>

      <section className="doc-section">
        <h2>States</h2>
        <p>Buttons support disabled and loading states natively.</p>
        <div className="example-flex">
          <Button variant="solid" color="brand">Default</Button>
          <Button variant="solid" color="brand" disabled>Disabled</Button>
          <Button variant="solid" color="brand" loading>Loading</Button>
          <Button variant="outline" color="brand" loading>Syncing</Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonDoc;
