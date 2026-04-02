import React from 'react';
import './IntroDoc.css';

const IntroDoc: React.FC = () => {
  return (
    <div className="intro-doc">
      <header className="doc-header">
        <h1>Introduction</h1>
        <p className="doc-description">Build high-quality, professional user interfaces for MMS brands with speed and consistency.</p>
      </header>

      <section className="doc-section">
        <h2>What is MMS Design System?</h2>
        <p>
          The MMS Design System is a comprehensive UI library and set of guidelines built specifically to unify the digital experience across all MMS brands, including <strong>Unipay, OCB, BVB, MPay, and Appotapay</strong>.
        </p>
        <p>
          It is built on top of <strong>Radix UI</strong> primitives, ensuring world-class accessibility and robust interaction patterns, while providing a powerful theming engine that automatically adapts to each brand's unique visual identity.
        </p>
      </section>

      <section className="doc-section">
        <div className="intro-grid">
          <div className="intro-card">
            <div className="intro-card-icon">🎨</div>
            <h3>Multi-brand Theming</h3>
            <p>Switch between different brand identities instantly with a single dynamic theme provider.</p>
          </div>
          <div className="intro-card">
            <div className="intro-card-icon">🧩</div>
            <h3>Atomic Components</h3>
            <p>A library of modular, accessible components optimized for building financial and dashboard interfaces.</p>
          </div>
          <div className="intro-card">
            <div className="intro-card-icon">⚡</div>
            <h3>Developer Experience</h3>
            <p>Fully typed with TypeScript, optimized for high performance and rapid prototyping.</p>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Icons</h2>
        <p>
          The MMS Design System uses <strong>Remix Icon</strong> as its official icon library. We recommend using the <code>react-icons/ri</code> package for the best developer experience and tree-shaking support.
        </p>
        <div className="code-block">
          <code>
            {`import { RiSearchLine, RiAddLine, RiUserLine } from 'react-icons/ri';

// Usage in components
<Button leftIcon={<RiAddLine />}>New Project</Button>
<Input leftSlot={<RiSearchLine />} />`}
          </code>
        </div>
      </section>

      <section className="doc-section">
        <h2>Quick Start</h2>
        <p>To start using the components in your React project, import the style and the components you need:</p>
        <div className="code-block">
          <code>
            {`// Import the design system styles
import '@mms/design-system/style.css';

// Import components
import { Button, BrandProvider } from '@mms/design-system';

function App() {
  return (
    <BrandProvider>
      <Button variant="solid" color="brand">
        Hello World
      </Button>
    </BrandProvider>
  );
}`}
          </code>
        </div>
      </section>
    </div>
  );
};

export default IntroDoc;
