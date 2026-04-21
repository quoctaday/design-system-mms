import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';

const AdaptiveUIDoc: React.FC = () => {
  const toc = [
    { id: 'overview', title: 'Overview' },
    { id: 'design-system', title: 'Design System' },
    { id: 'architecture', title: 'Information Architecture' },
    { id: 'demo', title: 'View Demo' },
    { id: 'technical', title: 'Technical Details' },
  ];

  return (
    <DocLayout
      title="Adaptive UI Demo"
      description="AI-Driven Adaptive OS Merchant Management System (MMS) - A proof of concept featuring dynamic personas that transform the UI in real-time."
      toc={toc}
    >
      <DocSection id="overview">
        <DocHeading>Overview</DocHeading>
        <DocText>
          The Adaptive UI Demo is a complete proof-of-concept for a Merchant Management System that demonstrates enterprise-grade UI patterns with three distinct personas:
        </DocText>

        <div style={{ marginTop: '16px', marginBottom: '16px' }}>
          <DocHeading level={3}>Personas</DocHeading>
          <ul style={{ marginLeft: '20px' }}>
            <li><strong>Director:</strong> Macro-view dashboard with high-level metrics and charts</li>
            <li><strong>Accountant:</strong> Data-heavy table view with semantic status indicators</li>
            <li><strong>Approver:</strong> Split-view workspace with document management and AI alerts</li>
          </ul>
        </div>

        <DocText>
          Each persona transforms the entire UI including navigation density, layout structure, and information hierarchy without page reload. The system includes a real-time DevTool panel that displays the current state specification in JSON.
        </DocText>
      </DocSection>

      <DocSection id="design-system">
        <DocHeading>Design System</DocHeading>
        <DocText>Built on the "Flat-Premium" aesthetic:</DocText>
        <ul style={{ marginLeft: '20px', marginTop: '12px' }}>
          <li>No drop shadows on containers—only thin borders and subtle backgrounds</li>
          <li>12-4-8 nesting rule: rounded-xl for outer containers, gap-4/gap-6 for spacing, rounded-lg for inner elements</li>
          <li>Responsive density tokens: "relaxed" and "dense" modes that reflow the layout</li>
          <li>Semantic color system for status indicators (emerald, amber, red)</li>
        </ul>
      </DocSection>

      <DocSection id="architecture">
        <DocHeading>Information Architecture</DocHeading>
        <DocText>The system organizes 13 modules across 4 groups:</DocText>
        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <DocHeading level={4}>Operations</DocHeading>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>Merchants</li>
              <li>Transactions</li>
              <li>Services</li>
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <DocHeading level={4}>Logistics</DocHeading>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>Inventory</li>
              <li>Products</li>
            </ul>
          </div>
          <div>
            <DocHeading level={4}>Finance</DocHeading>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>Reports</li>
              <li>Reconciliation</li>
              <li>MDR Pricing</li>
            </ul>
          </div>
          <div>
            <DocHeading level={4}>System</DocHeading>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>Admin Users</li>
              <li>Data Source</li>
              <li>Bank Data</li>
              <li>Risk Control</li>
            </ul>
          </div>
        </div>
      </DocSection>

      <DocSection id="demo">
        <DocHeading>View Full Demo</DocHeading>
        <DocText>To see the interactive Adaptive UI in action, visit the full demo:</DocText>
        <div style={{ marginTop: '16px', padding: '12px 16px', backgroundColor: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
          <a href="/mms-poc" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}>
            Open Adaptive UI Demo →
          </a>
        </div>
      </DocSection>

      <DocSection id="technical">
        <DocHeading>Technical Details</DocHeading>
        <DocText>The demo is implemented as a single React component with:</DocText>
        <ul style={{ marginLeft: '20px', marginTop: '12px' }}>
          <li>State management via React useState for persona switching</li>
          <li>Inline SVG icons (Remixicon style)</li>
          <li>Tailwind CSS for styling with flat-premium aesthetic</li>
          <li>No external dependencies beyond React and Tailwind</li>
          <li>Fully responsive and self-healing layout with Flexbox and Grid</li>
        </ul>
      </DocSection>
    </DocLayout>
  );
};

export default AdaptiveUIDoc;
