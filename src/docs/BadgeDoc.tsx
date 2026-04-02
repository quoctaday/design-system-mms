import React, { useState } from 'react';
import Badge from '../components/ui/Badge/Badge';
import { Tabs } from '../components/ui/Tabs/Tabs';
import './BadgeDoc.css';

const BadgeDoc: React.FC = () => {
  const [activeColorVariant, setActiveColorVariant] = useState<'solid' | 'soft' | 'outline' | 'surface'>('soft');
  
  const colors: Array<"brand" | "success" | "error" | "warning" | "orange" | "blue" | "purple" | "sky" | "pink" | "teal" | "secondary" | "black" | "gray"> = [
    'brand', 'success', 'error', 'warning', 'orange', 'blue', 'purple', 'sky', 'pink', 'teal', 'secondary', 'black', 'gray'
  ];

  return (
    <div className="badge-doc">
      <header className="doc-header">
        <h1>Badge</h1>
        <p className="doc-description">A small visual element that labels an object with its status or a category.</p>
      </header>
      
      <section className="doc-section">
        <h2>Variants</h2>
        <p>Badges are available in four visual variants.</p>
        <div className="example-grid">
          <div className="example-item">
            <Badge variant="solid" color="brand">Solid</Badge>
            <code>variant="solid"</code>
          </div>
          <div className="example-item">
            <Badge variant="soft" color="brand">Soft</Badge>
            <code>variant="soft"</code>
          </div>
          <div className="example-item">
            <Badge variant="outline" color="brand">Outline</Badge>
            <code>variant="outline"</code>
          </div>
          <div className="example-item">
            <Badge variant="surface" color="brand">Surface</Badge>
            <code>variant="surface"</code>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Colors</h2>
        <p>Use the <code>color</code> prop to assign different semantic meanings.</p>
        
        <Tabs 
          value={activeColorVariant}
          onValueChange={(value) => setActiveColorVariant(value as any)}
        >
          <Tabs.List>
            <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
            <Tabs.Trigger value="soft">Soft</Tabs.Trigger>
            <Tabs.Trigger value="outline">Outline</Tabs.Trigger>
            <Tabs.Trigger value="surface">Surface</Tabs.Trigger>
          </Tabs.List>
        </Tabs>

        <div className="example-flex" style={{ marginTop: '24px' }}>
          {colors.map((color) => (
            <Badge key={color} color={color} variant={activeColorVariant}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2>Sizes</h2>
        <p>Available in two sizes.</p>
        <div className="example-flex">
          <Badge size="1" variant="solid" color="brand">Size 1</Badge>
          <Badge size="2" variant="solid" color="brand">Size 2</Badge>
        </div>
      </section>

      <section className="doc-section">
        <h2>Radius</h2>
        <p>Control the roundedness of the badge.</p>
        <div className="example-flex">
          <Badge radius="none" variant="soft" color="blue">None</Badge>
          <Badge radius="small" variant="soft" color="purple">Small</Badge>
          <Badge radius="medium" variant="soft" color="sky">Medium</Badge>
          <Badge radius="large" variant="soft" color="pink">Large</Badge>
          <Badge radius="full" variant="soft" color="brand">Full (Pill)</Badge>
        </div>
      </section>
    </div>
  );
};

export default BadgeDoc;
