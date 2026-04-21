import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { RiPaletteLine, RiLayout4Line, RiShieldFlashLine, RiTerminalBoxLine } from 'react-icons/ri';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { TerminalSnippet } from '../components/docs/TerminalSnippet';
import './IntroDoc.css';

const IntroDoc: React.FC = () => {
  const toc = [
    { id: 'overview', title: 'What is it?' },
    { id: 'pillars', title: 'Design Pillars' },
    { id: 'icons', title: 'Icon Library' },
    { id: 'installation', title: 'Installation' },
    { id: 'quickstart', title: 'Quick Start' }
  ];

  return (
    <DocLayout 
      title="Architecture Overview" 
      description="The definitive framework for high-performance financial ecosystems. Built for extreme density, engineered for total predictable control."
      toc={toc}
      headerBackground={<AuroraBackground />}
    >
      <DocSection id="overview">
        <DocHeading>The MMS Ecosystem</DocHeading>
        <div className="prose-premium">
          <DocText>
            MMS is not merely a library—it is a <strong>governance infrastructure</strong>. It provides the shared visual and behavioral protocols necessary to unify the experience across our diverse financial portfolio, including Unipay, OCB, BVB, MPay, and Appotapay.
          </DocText>
          <DocText>
            Built atop <strong>Radix UI</strong> primitives, the system enforces a strict "Flat-Premium" aesthetic via the **v4.0 (Radix-Aligned) Architecture**. This standardizes all visual logic into a predictable 1-12 luminance scale and a geometric (1-9) spacing scale.
          </DocText>
        </div>
      </DocSection>
 
      <DocSection id="pillars">
        <DocHeading>Governance Pillars</DocHeading>
        <div className="intro-feature-grid">
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiPaletteLine />
            </div>
            <DocHeading level={3}>Multi-brand Logic</DocHeading>
            <DocText>A recursive token architecture that enables rapid identity pivoting while maintaining zero drift in operational UX semantics.</DocText>
          </div>
 
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiLayout4Line />
            </div>
            <DocHeading level={3}>Operational Density</DocHeading>
            <DocText>Engineered for complexity. Optimized for financial audits and real-time monitoring via 14px grid-aligned typography.</DocText>
          </div>
 
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiShieldFlashLine />
            </div>
            <DocHeading level={3}>Total Accessibility</DocHeading>
            <DocText>WAI-ARIA compliance is baked into the foundation, ensuring that precision tools are usable by every member of the workforce.</DocText>
          </div>
 
          <div className="feature-card">
            <div className="feature-icon-box">
              <RiTerminalBoxLine />
            </div>
            <DocHeading level={3}>Engineering Velocity</DocHeading>
            <DocText>Zero-dependency overhead at the component level. Lightweight bundles and tree-shaking ensure consistent 60fps performance.</DocText>
          </div>
        </div>
      </DocSection>

      <DocSection id="icons">
        <DocHeading>Icons</DocHeading>
        <DocText>
          We use <strong>Remix Icon</strong> as our official system library for its clean, geometric aesthetic. All icons should use the <code>react-icons/ri</code> package for seamless TypeScript integration.
        </DocText>
        <CodePreview
          code={`import { RiSearchLine, RiAddLine } from 'react-icons/ri';

<Button leftIcon={<RiAddLine />}>New Project</Button>
<Input leftSlot={<RiSearchLine />} />`}
        />
      </DocSection>

      <DocSection id="installation">
        <DocHeading>Installation</DocHeading>
        <TerminalSnippet package="@mms/design-system" />
      </DocSection>

      <DocSection id="quickstart">
        <DocHeading>Quick Start</DocHeading>
        <DocText>Wrap your application with the <code>BrandProvider</code> to inject the design tokens into your environment:</DocText>
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
      </DocSection>
    </DocLayout>
  );
};

export default IntroDoc;

