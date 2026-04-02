import React, { useState } from 'react';
import { Switch } from '../components/ui';

const SwitchDoc: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className="doc-container">
      <header className="doc-header">
        <h1>Switch</h1>
        <p>A control that allows the user to toggle between checked and unchecked states, typically used for binary settings.</p>
      </header>

      <section className="doc-section">
        <h2>Basic Usage</h2>
        <p>Simple toggle with a label. The Switch uses standard checkbox logic under the hood.</p>
        <div className="demo-box">
          <Switch 
            label="Enable Notifications" 
            checked={checked1} 
            onChange={(e) => setChecked1(e.target.checked)} 
          />
        </div>
      </section>

      <section className="doc-section">
        <h2>Sizes</h2>
        <p>Two sizes for different UI contexts: <code>medium</code> (default) and <code>small</code>.</p>
        <div className="demo-box" style={{ display: 'flex', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--gray-11)', fontWeight: 600 }}>MEDIUM (DEFAULT)</span>
            <Switch label="Default size" defaultChecked />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--gray-11)', fontWeight: 600 }}>SMALL</span>
            <Switch size="small" label="Compact size" defaultChecked />
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>States</h2>
        <p>Visual representation of different interactive states: Off, On, and Disabled.</p>
        <div className="demo-box" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <Switch 
            label="Interactive" 
            checked={checked2} 
            onChange={(e) => setChecked2(e.target.checked)} 
          />
          <Switch label="Disabled Off" disabled />
          <Switch label="Disabled On" disabled defaultChecked />
        </div>
      </section>

      <section className="doc-section">
        <h2>Advanced Examples</h2>
        <p>Using Switch in common UI patterns like list items.</p>
        <div className="demo-box" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--gray-6)', borderRadius: 'var(--radius-3)' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--gray-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Dark Mode</span>
              <span style={{ fontSize: '12px', color: 'var(--gray-11)' }}>Adjust the UI to be easier on your eyes.</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--gray-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Automatic Updates</span>
              <span style={{ fontSize: '12px', color: 'var(--gray-11)' }}>Update the application automatically.</span>
            </div>
            <Switch />
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Two-factor Authentication</span>
              <span style={{ fontSize: '12px', color: 'var(--gray-11)' }}>Add an extra layer of security.</span>
            </div>
            <Switch disabled />
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Component API</h2>
        <table className="doc-api-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>label</code></td>
              <td><code>string</code></td>
              <td>-</td>
              <td>Optional text label next to the switch.</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>'small' | 'medium'</code></td>
              <td><code>'medium'</code></td>
              <td>The size of the switch.</td>
            </tr>
            <tr>
              <td><code>checked</code></td>
              <td><code>boolean</code></td>
              <td>-</td>
              <td>Whether the switch is on.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Disables interaction with the switch.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SwitchDoc;
