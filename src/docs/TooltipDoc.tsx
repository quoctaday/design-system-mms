import React from 'react';
import { Tooltip, Button } from '../components/ui';
import { 
  RiInformationLine, 
  RiQuestionFill, 
  RiDeleteBinLine, 
  RiSaveLine 
} from 'react-icons/ri';
import './TooltipDoc.css';

const TooltipDoc: React.FC = () => {
  return (
    <div className="tooltip-doc">
      <header className="doc-header">
        <h1>Tooltip</h1>
        <p className="doc-description">A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it.</p>
      </header>

      <section className="doc-section">
        <h2>Basic Usage</h2>
        <div className="demo-list">
          <Tooltip.Root side="top">
            <Tooltip.Trigger>
              <Button variant="outline">Hover me (Top)</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>This is a top tooltip</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root side="bottom">
            <Tooltip.Trigger>
              <Button variant="outline">Hover me (Bottom)</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>This is a bottom tooltip</Tooltip.Content>
          </Tooltip.Root>
        </div>
      </section>

      <section className="doc-section">
        <h2>Directions</h2>
        <div className="demo-grid">
          <div className="grid-item">
            <Tooltip.Root side="left">
              <Tooltip.Trigger>
                <div className="icon-box"><RiInformationLine /></div>
              </Tooltip.Trigger>
              <Tooltip.Content>Left side info</Tooltip.Content>
            </Tooltip.Root>
          </div>

          <div className="grid-item">
            <Tooltip.Root side="top">
              <Tooltip.Trigger>
                <div className="icon-box"><RiInformationLine /></div>
              </Tooltip.Trigger>
              <Tooltip.Content>Top side info</Tooltip.Content>
            </Tooltip.Root>
          </div>

          <div className="grid-item">
            <Tooltip.Root side="right">
              <Tooltip.Trigger>
                <div className="icon-box"><RiInformationLine /></div>
              </Tooltip.Trigger>
              <Tooltip.Content>Right side info</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>With Delay</h2>
        <div className="demo-list">
          <Tooltip.Root side="top" delayDuration={700}>
            <Tooltip.Trigger>
              <Button color="brand">Delayed (700ms)</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Slow appearing tooltip</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root side="top" delayDuration={0}>
            <Tooltip.Trigger>
              <Button color="success">Instant (0ms)</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Instant appearing tooltip</Tooltip.Content>
          </Tooltip.Root>
        </div>
      </section>

      <section className="doc-section">
        <h2>Real-world Examples</h2>
        <div className="example-actions">
          <Tooltip.Root side="top">
            <Tooltip.Trigger>
              <button className="action-btn save"><RiSaveLine /></button>
            </Tooltip.Trigger>
            <Tooltip.Content>Lưu thay đổi</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root side="top">
            <Tooltip.Trigger>
              <button className="action-btn delete"><RiDeleteBinLine /></button>
            </Tooltip.Trigger>
            <Tooltip.Content>Xóa vĩnh viễn</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root side="top">
            <Tooltip.Trigger>
              <button className="action-btn help"><RiQuestionFill /></button>
            </Tooltip.Trigger>
            <Tooltip.Content>Trợ giúp & Hỗ trợ</Tooltip.Content>
          </Tooltip.Root>
        </div>
      </section>

      {/* Debug section for screenshots */}
      <div style={{ position: 'fixed', bottom: 10, left: 10, zIndex: 9999 }}>
        <Tooltip.Root side="right" delayDuration={0}>
          <Tooltip.Trigger>
            <button id="screnshot-trigger" style={{ padding: '4px 8px', fontSize: '10px' }}>Debug UI</button>
          </Tooltip.Trigger>
          <Tooltip.Content id="screenshot-tooltip">Tooltip Verification SUCCESS</Tooltip.Content>
        </Tooltip.Root>
      </div>

      <section className="doc-section">
        <h2>API Reference</h2>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tooltip.Root</td>
                <td>side</td>
                <td>'top' | 'right' | 'bottom' | 'left'</td>
                <td>'top'</td>
                <td>The side by which the tooltip should appear.</td>
              </tr>
              <tr>
                <td>Tooltip.Root</td>
                <td>delayDuration</td>
                <td>number</td>
                <td>300</td>
                <td>The delay in milliseconds before the tooltip appears.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TooltipDoc;
