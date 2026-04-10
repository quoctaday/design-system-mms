import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { CodePreview } from '../components/docs/CodePreview';
import { RiPaletteLine, RiLayout4Line, RiShieldFlashLine, RiTerminalBoxLine } from 'react-icons/ri';
import { AuroraBackground } from '../components/ui';
import './IntroDoc.css';

const IntroDoc: React.FC = () => {
  const toc = [
    { id: 'overview', title: 'What is it?' },
    { id: 'pillars', title: 'Design Pillars' },
    { id: 'icons', title: 'Icon Library' },
    { id: 'quickstart', title: 'Quick Start' }
  ];

  return (
    <DocLayout 
      title="Architecture Overview" 
      description="The definitive framework for high-performance financial ecosystems. Built for extreme density, engineered for total predictable control."
      toc={toc}
      headerBackground={<AuroraBackground />}
    >
      <section id="overview" className="doc-section">
        <h2 className="section-title">The MMS Ecosystem</h2>
        <div className="prose-premium">
          <p>
            MMS is not merely a library—it is a <strong>governance infrastructure</strong>. It provides the shared visual and behavioral protocols necessary to unify the experience across our diverse financial portfolio, including Unipay, OCB, BVB, MPay, and Appotapay.
          </p>
          <p>
            Built atop <strong>Radix UI</strong> primitives, the system enforces a strict "Flat-Premium" aesthetic via the **v3.0 Canonical Architecture**. This standardizes all visual logic into a predictable 1-12 luminance scale across all brand portfolios.
          </p>
        </div>
      </section>
 
      <section id="pillars" className="doc-section">
        <h2 className="section-title">Governance Pillars</h2>
        <div className="intro-feature-grid">
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiPaletteLine />
            </div>
            <h3>Multi-brand Logic</h3>
            <p>A recursive token architecture that enables rapid identity pivoting while maintaining zero drift in operational UX semantics.</p>
          </div>
 
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiLayout4Line />
            </div>
            <h3>Operational Density</h3>
            <p>Engineered for complexity. Optimized for financial audits and real-time monitoring via 14px grid-aligned typography.</p>
          </div>
 
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiShieldFlashLine />
            </div>
            <h3>Total Accessibility</h3>
            <p>WAI-ARIA compliance is baked into the foundation, ensuring that precision tools are usable by every member of the workforce.</p>
          </div>
 
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiTerminalBoxLine />
            </div>
            <h3>Engineering Velocity</h3>
            <p>Zero-dependency overhead at the component level. Lightweight bundles and tree-shaking ensure consistent 60fps performance.</p>
          </div>
        </div>
      </section>

      <section id="icons" className="doc-section">
        <h2 className="section-title">Icons</h2>
        <p>
          We use <strong>Remix Icon</strong> as our official system library for its clean, geometric aesthetic. All icons should use the <code>react-icons/ri</code> package for seamless TypeScript integration.
        </p>
        <CodePreview
          code={`import { RiSearchLine, RiAddLine } from 'react-icons/ri';

<Button leftIcon={<RiAddLine />}>New Project</Button>
<Input leftSlot={<RiSearchLine />} />`}
        />
      </section>

      <section id="quickstart" className="doc-section">
        <h2 className="section-title">Quick Start</h2>
        <p>Wrap your application with the <code>BrandProvider</code> to inject the design tokens into your environment:</p>
        <CodePreview
          code={`import { BrandProvider, Button } from '@mms/design-system';

function App() {
  return (
    <BrandProvider brand="unipay">
      <Button color="brand">Initiate Project</Button>
    </BrandProvider>
  );
}`}
        />
      </section>
    </DocLayout>
  );
};

export default IntroDoc;

