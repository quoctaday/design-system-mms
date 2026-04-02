import React, { useState } from 'react';
import { DatePicker } from '../components/ui';

const DatePickerDoc: React.FC = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(null);
  const [range1, setRange1] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });

  return (
    <div className="doc-container">
      <header className="doc-header">
        <h1>DatePicker</h1>
        <p>A component that allows users to select a specific date from a visual calendar overlay. Essential for forms handling scheduling or timelines.</p>
      </header>

      <section className="doc-section">
        <h2>Basic Usage</h2>
        <p>A basic date picker that triggers a popover calendar.</p>
        <div className="demo-box" style={{ height: '380px' }}>
          <div style={{ maxWidth: '280px' }}>
            <DatePicker 
              value={date2} 
              onChange={setDate2} 
              placeholder="Pick a date"
            />
            {date2 && (
              <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--brand-9)' }}>
                Selected: {date2.toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Pre-filled & Disabled</h2>
        <p>A date picker can have an initial value or be disabled to prevent user interaction.</p>
        <div className="demo-box" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 200px', maxWidth: '280px' }}>
            <span style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 600 }}>Default Date</span>
            <DatePicker 
              value={date1} 
              onChange={setDate1} 
            />
          </div>
          
          <div style={{ flex: '1 1 200px', maxWidth: '280px' }}>
            <span style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 600 }}>Disabled</span>
            <DatePicker 
              value={new Date()} 
              disabled={true} 
            />
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Date Range Picker</h2>
        <p>Using <code>mode="range"</code> to select a start and end date.</p>
        <div className="demo-box" style={{ height: '380px' }}>
          <div style={{ maxWidth: '300px' }}>
            <DatePicker 
              mode="range"
              rangeValue={range1} 
              onRangeChange={setRange1} 
              placeholder="Select date range"
            />
            {(range1.start || range1.end) && (
              <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--brand-9)' }}>
                {range1.start && <div>Start: {range1.start.toLocaleDateString()}</div>}
                {range1.end && <div>End: {range1.end.toLocaleDateString()}</div>}
              </div>
            )}
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
              <td><code>value</code></td>
              <td><code>Date | null</code></td>
              <td><code>null</code></td>
              <td>The currently selected date object.</td>
            </tr>
            <tr>
              <td><code>onChange</code></td>
              <td><code>(date: Date) =&gt; void</code></td>
              <td>-</td>
              <td>Callback fired when a date is selected.</td>
            </tr>
            <tr>
              <td><code>mode</code></td>
              <td><code>'single' | 'range'</code></td>
              <td><code>'single'</code></td>
              <td>The selection mode of the date picker.</td>
            </tr>
            <tr>
              <td><code>rangeValue</code></td>
              <td><code>DateRange</code></td>
              <td>-</td>
              <td>The currently selected range. Required if mode="range".</td>
            </tr>
            <tr>
              <td><code>onRangeChange</code></td>
              <td><code>(range: DateRange) =&gt; void</code></td>
              <td>-</td>
              <td>Callback fired when range selection changes.</td>
            </tr>
            <tr>
              <td><code>placeholder</code></td>
              <td><code>string</code></td>
              <td><code>'Select date'</code></td>
              <td>Text displayed when no date is selected.</td>
            </tr>
            <tr>
              <td><code>className</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td>Optional additional CSS classes for the container.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Disables the input trigger and dropdown operation.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DatePickerDoc;
