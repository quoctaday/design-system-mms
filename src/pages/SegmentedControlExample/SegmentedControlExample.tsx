import React, { useState } from 'react';
import { Card, SegmentedControl, Badge } from '../../components/ui';
import './SegmentedControlExample.css';
import { 
  RiLayoutGridLine, 
  RiCalendarLine, 
} from 'react-icons/ri';

const SegmentedControlExample: React.FC = () => {
  const [size, setSize] = useState('md');
  const [view, setView] = useState('list');
  const [period, setPeriod] = useState('monthly');
  const [theme, setTheme] = useState('system');
  const [status, setStatus] = useState('all');

  const sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' }
  ];

  const viewOptions = [
    { label: 'Grid View', value: 'grid' },
    { label: 'List View', value: 'list' }
  ];

  const periodOptions = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' }
  ];

  const themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'System', value: 'system' }
  ];

  const statusOptions = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Pending', value: 'pending', disabled: true },
    { label: 'Completed', value: 'completed' }
  ];

  return (
    <div className="segmented-example-page">
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">Segmented Control</h1>
          <p className="page-description">
            A linear set of two or more segments, each of which functions as a mutually exclusive button.
          </p>
        </div>
        <Badge variant="surface" color="brand" radius="small">COMPONENTS</Badge>
      </div>

      <div className="example-grid">
        {/* Basic Usage */}
        <Card title="Basic Usage" subtitle="Simple segments for switching between views or modes.">
          <div className="example-content">
            <div className="demo-group">
              <span className="demo-label">Display Mode</span>
              <SegmentedControl 
                options={viewOptions} 
                value={view} 
                onChange={setView} 
              />
              <p className="demo-value">Selected View: <strong>{view}</strong></p>
            </div>
          </div>
        </Card>

        {/* Sizes */}
        <Card title="Sizes" subtitle="Available in Small, Medium, and Large sizes.">
          <div className="example-content">
            <div className="demo-group">
              <span className="demo-label">Size Variants</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ width: 60, fontSize: 12, color: 'var(--text-subtle)' }}>Small</span>
                  <SegmentedControl options={sizeOptions} value={size} onChange={setSize} size="sm" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ width: 60, fontSize: 12, color: 'var(--text-subtle)' }}>Medium</span>
                  <SegmentedControl options={sizeOptions} value={size} onChange={setSize} size="md" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ width: 60, fontSize: 12, color: 'var(--text-subtle)' }}>Large</span>
                  <SegmentedControl options={sizeOptions} value={size} onChange={setSize} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Full Width */}
        <Card title="Full Width" subtitle="Control expands to fill the container width.">
          <div className="example-content">
            <div className="demo-group">
              <span className="demo-label">Reports Period</span>
              <SegmentedControl 
                options={periodOptions} 
                value={period} 
                onChange={setPeriod} 
                fullWidth 
              />
            </div>
          </div>
        </Card>

        {/* Disabled Options */}
        <Card title="Disabled Segments" subtitle="Specific segments can be disabled to prevent interaction.">
          <div className="example-content">
            <div className="demo-group">
              <span className="demo-label">Process Status</span>
              <SegmentedControl 
                options={statusOptions} 
                value={status} 
                onChange={setStatus} 
              />
            </div>
          </div>
        </Card>

        {/* Real-world Example: Settings */}
        <Card title="Settings Pattern" subtitle="Integrated into a settings card UI.">
          <div className="example-content">
            <div className="settings-panel">
              <div className="settings-row">
                <div className="settings-info">
                  <div className="settings-icon"><RiLayoutGridLine /></div>
                  <div className="settings-text">
                    <span className="settings-label">Interface Theme</span>
                    <span className="settings-sub">Choose how MMS appears to you</span>
                  </div>
                </div>
                <SegmentedControl 
                  options={themeOptions} 
                  value={theme} 
                  onChange={setTheme} 
                  size="sm"
                />
              </div>
              
              <div className="settings-row">
                <div className="settings-info">
                  <div className="settings-icon"><RiCalendarLine /></div>
                  <div className="settings-text">
                    <span className="settings-label">Default Range</span>
                    <span className="settings-sub">Set your preferred initial date range</span>
                  </div>
                </div>
                <SegmentedControl 
                  options={[
                    { label: '7D', value: '7d' },
                    { label: '30D', value: '30d' },
                    { label: '90D', value: '90d' }
                  ]} 
                  value="7d" 
                  onChange={() => {}} 
                  size="sm"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Code reference section */}
      <div className="code-section">
        <h3 className="section-title">Usage</h3>
        <pre className="code-block">
{`import { SegmentedControl } from '@/components/ui';

const options = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
  { label: 'Custom', value: 'custom', disabled: true }
];

<SegmentedControl 
  options={options}
  value={value}
  onChange={setValue}
  size="md"
/>`}
        </pre>
      </div>
    </div>
  );
};

export default SegmentedControlExample;
