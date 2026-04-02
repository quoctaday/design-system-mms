import React from 'react';
import './ThemingDoc.css';

const ThemingDoc: React.FC = () => {
  return (
    <div className="theming-doc">
      <header className="doc-header">
        <h1>Theming</h1>
        <p className="doc-description">Learn how MMS Design System uses a powerful token-based architecture to support multiple brand identities.</p>
      </header>

      <section className="doc-section">
        <h2>Architecture Overview</h2>
        <p>
          Our theming engine is built on a 3-layer architecture inspired by the industry standard for scalable design systems:
        </p>
        
        <div className="theming-layers">
          <div className="layer-item">
            <div className="layer-badge foundation">1. Foundation</div>
            <p>Raw color scales (Radix 1-12) like Blue, Green, Gray. These don't change between brands.</p>
          </div>
          <div className="layer-item">
            <div className="layer-badge aliases">2. Brand Aliases</div>
            <p>Mapped tokens like <code>--brand-9</code> which point to a foundation color (e.g., Blue-9 for Unipay, Green-9 for OCB).</p>
          </div>
          <div className="layer-item">
            <div className="layer-badge semantic">3. Semantic Tokens</div>
            <p>Role-based tokens like <code>--bg-component</code> or <code>--text-brand</code>. These are what you use in code.</p>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Multi-brand Implementation</h2>
        <p>
          The <code>BrandProvider</code> dynamically generates a 12-step Radix scale based on a brand's primary hex color. This ensures that even with a single hex input, we get a full palette of compatible shades for borders, hover states, and text.
        </p>
        
        <div className="brand-logic-card">
          <h3>How it works</h3>
          <ul>
            <li><strong>Step 1-2:</strong> Subtle backgrounds</li>
            <li><strong>Step 3-5:</strong> Interactive component states</li>
            <li><strong>Step 6-8:</strong> Borders and separators</li>
            <li><strong>Step 9:</strong> Solid backgrounds (Main Brand Color)</li>
            <li><strong>Step 11-12:</strong> High-contrast text</li>
          </ul>
        </div>
      </section>

      <section className="doc-section">
        <h2>Responsive Variables</h2>
        <p>We use standard spacing and radius tokens to ensure consistency across all components.</p>
        <div className="token-grid">
          <div className="token-item">
            <span className="token-name">--radius-medium</span>
            <span className="token-value">4px</span>
          </div>
          <div className="token-item">
            <span className="token-name">--spacing-16</span>
            <span className="token-value">16px</span>
          </div>
          <div className="token-item">
            <span className="token-name">--font-family</span>
            <span className="token-value">'Inter', sans-serif</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemingDoc;
