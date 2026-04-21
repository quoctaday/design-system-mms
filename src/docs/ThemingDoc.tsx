import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { RiListCheck2, RiRulerLine, RiPaintBrushFill, RiFocus3Line } from 'react-icons/ri';
import './ThemingDoc.css';

const ThemingDoc: React.FC = () => {
  const toc = [
    { id: 'architecture', title: 'Architecture' },
    { id: 'logic', title: 'Scaling Logic' },
    { id: 'tokens', title: 'Core Variables' }
  ];

  return (
    <DocLayout 
      title="Theming Architecture" 
      description="A mission-critical token engine designed for deep multi-brand governance without architectural entropy."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="architecture">
        <DocHeading>Recursive Token Architecture</DocHeading>
        <DocText>
          MMS employs a **triple-layer token sandwich** to decouple brand identity from engineering logic. This ensures that a global rebrand for a specific entity like <em>Unipay</em> or <em>OCB</em> remains an immutable data change rather than a code-intensive refactor.
        </DocText>
        
        <div className="theming-stack">
          <div className="stack-item foundation">
            <div className="stack-level">01</div>
            <div className="stack-content">
              <DocHeading level={3}>Primitive Foundation</DocHeading>
              <DocText>The "Hard" layer. Literal values like <code>Blue-9</code> or <code>12px</code>. These are global constants that do not change between brands.</DocText>
            </div>
          </div>

          <div className="stack-item accent">
            <div className="stack-level">02</div>
            <div className="stack-content">
              <DocHeading level={3}>Identity Bridge (Aliases)</DocHeading>
              <DocText>The "Variable" layer. Maps broad identifiers like <code>--accent-primary</code> to primitives based on the active brand logic.</DocText>
            </div>
          </div>

          <div className="stack-item semantic">
            <div className="stack-level">03</div>
            <div className="stack-content">
              <DocHeading level={3}>Semantic Roles (v4.0)</DocHeading>
              <DocText>The "Consumable" layer. High-integrity roles like <code>--surface-panel</code>, <code>--content-strong</code>, and <code>--border-default</code>. This layer translates luminance and geometric spacing scales into predictable UI behaviors.</DocText>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="logic">
        <DocHeading>Luminance-Locked Scale</DocHeading>
        <DocText>
          We utilize a predictable 12-step scale for all color families. By locking luminance to specific steps (e.g., Step 9 is always the high-contrast interaction point), we guarantee that UI accessibility remains constant even as the brand hue shifts.
        </DocText>
        
        <div className="logic-grid">
          <div className="logic-card">
            <RiFocus3Line className="logic-icon" />
            <div className="logic-content">
              <DocHeading level={4}>System Weighting</DocHeading>
              <ul className="logic-list">
                <li><strong>Step 1-2</strong>: Atmosphere & App backgrounds</li>
                <li><strong>Step 3-5</strong>: Interactive states & component fills</li>
                <li><strong>Step 9</strong>: Primary high-impact Call to Action</li>
                <li><strong>Step 11-12</strong>: High-readability typography</li>
              </ul>
            </div>
          </div>
          
          <div className="logic-example-box">
             <div className="code-header">Governance Implementation</div>
             <pre className="code-snippet">
{`.action-surface {
  background: var(--accent-9);
  color: var(--content-on-solid);
  border-radius: var(--radius-4);
  transition: all 200ms var(--ease-out);
}`}
             </pre>
          </div>
        </div>
      </DocSection>

      <DocSection id="tokens">
        <DocHeading>Unified Constants</DocHeading>
        <div className="token-premium-grid">
          <div className="token-premium-card">
            <RiRulerLine className="token-card-icon" />
            <div className="token-card-body">
              <span className="token-card-label">Radius Geometry</span>
              <span className="token-card-value">--radius-5 (16px)</span>
              <DocText>Derived from our "Flat-Premium" core logic to emphasize clean, professional structural containment.</DocText>
            </div>
          </div>

          <div className="token-premium-card">
            <RiListCheck2 className="token-card-icon" />
            <div className="token-card-body">
              <span className="token-card-label">Modular Spacing</span>
              <span className="token-card-value">--space-4 (16px)</span>
              <DocText>Our Radix Themes-aligned geometric scale ensures perfect vertical rhythm in high-density operational views.</DocText>
            </div>
          </div>

          <div className="token-premium-card">
            <RiPaintBrushFill className="token-card-icon" />
            <div className="token-card-body">
              <span className="token-card-label">Institutional Typography</span>
              <span className="token-card-value">Inter Display</span>
              <DocText>Optimized for rapid recognition in high-frequency dashboards across the MMS portfolio.</DocText>
            </div>
          </div>
        </div>
      </DocSection>
    </DocLayout>
  );
};

export default ThemingDoc;

