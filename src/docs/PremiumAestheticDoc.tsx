import React, { useState } from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { AuroraBackground } from '../components/ui';
import { MetricCard, Button } from '../components/ui';
import { RiFocus2Line, RiCompassDiscoverLine, RiShapesLine, RiRuler2Line, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import './PremiumAestheticDoc.css';

interface SpecCardProps {
  children: React.ReactNode;
  show: boolean;
  type?: 'default' | 'flush';
}

const SpecCard: React.FC<SpecCardProps> = ({ children, show, type = 'default' }) => {
  return (
    <div className={`spec-card-container ${show ? 'specs-active' : ''}`}>
      {children}
      {show && (
        <div className="spec-overlay">
          {/* Outer Radius */}
          <div className="spec-indicator radius-outer" data-label="Radius: 5"></div>
          
          {/* Outer Padding */}
          {type !== 'flush' && (
            <>
              <div className="spec-indicator padding-outer top" data-label="Space: 1"></div>
              <div className="spec-indicator padding-outer left" data-label="Space: 1"></div>
            </>
          )}

          {/* Inner Radius */}
          <div className="spec-indicator radius-inner" data-label={type === 'flush' ? 'Radius: 5' : 'Radius: 4'}></div>

          {/* Inner Padding */}
          <div className="spec-indicator padding-inner" data-label="Space: 3"></div>
          
          {/* Header Padding */}
          <div className="spec-indicator padding-header" data-label="Space: 3"></div>

          {/* Hairline Border */}
          <div className="spec-indicator border-hairline" data-label="0.5px"></div>
        </div>
      )}
    </div>
  );
};

const PremiumAestheticDoc: React.FC = () => {
  const [showSpecs, setShowSpecs] = useState(false);

  const toc = [
    { id: 'introduction', title: 'Philosophy' },
    { id: 'nesting-rule', title: 'The 12-4-8 Rule' },
    { id: 'zero-gap', title: 'Zero-Gap Standard' },
    { id: 'examples', title: 'Live Examples' },
  ];

  return (
    <DocLayout
      title="Visual Aesthetic"
      description="The definitive guide to the Flat-Premium (V4.0) visual language. Standardizing the operational density and mathematical precision of the MMS platform."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <div className="doc-sticky-header">
        <Button 
          variant={showSpecs ? 'solid' : 'outline'} 
          color={showSpecs ? 'brand' : 'gray'}
          onClick={() => setShowSpecs(!showSpecs)}
          className="specs-toggle-btn"
        >
          {showSpecs ? <RiEyeOffLine /> : <RiRuler2Line />}
          <span>{showSpecs ? 'Hide Technical Specs' : 'Show Technical Specs'}</span>
        </Button>
      </div>

      <DocSection id="introduction">
        <DocHeading>The Flat-Premium Philosophy</DocHeading>
        <DocText className="section-intro">
          Our design language moves away from generic shadows and excessive rounding. 
          The <strong>Flat-Premium</strong> style relies on high-contrast hairline borders, 
          mathematical radius synchronization, and surgical background shifts to achieve hierarchy.
        </DocText>

        <div className="aesthetic-pillars">
          <div className="pillar-card">
            <RiFocus2Line className="pillar-icon" />
            <DocHeading level={3}>Operational Density</DocHeading>
            <DocText>Maximizing data visibility by reducing internal margins and whitespace without sacrificing clarity.</DocText>
          </div>
          <div className="pillar-card">
            <RiCompassDiscoverLine className="pillar-icon" />
            <DocHeading level={3}>Precision Curves</DocHeading>
            <DocText>Every corner is calculated. Inner and outer radii are synchronized to create perfectly concentric paths.</DocText>
          </div>
          <div className="pillar-card">
            <RiShapesLine className="pillar-icon" />
            <DocHeading level={3}>Structured Flatness</DocHeading>
            <DocText>Hierarchy is defined by subtle surfaces (S1, S2, S3) and micro-shadows (Alpha 0.06) for professional depth.</DocText>
          </div>
        </div>
      </DocSection>

      <DocSection id="nesting-rule">
        <DocHeading>The 12-4-8 Nesting Rule</DocHeading>
        <DocText>
          To achieve a premium, engineered look, nested radii must follow a strict mathematical relationship. 
          For most metrics and compact widgets, we follow the <strong>Radix Spacing Alignment</strong> (Radius 5 + Space 1 = Radius 4):
        </DocText>
        
        <div className="nesting-formula-grid">
          <div className="formula-box">
            <span className="formula-label">Outer Radius (R5)</span>
            <span className="formula-value">12px</span>
          </div>
          <div className="formula-operator">+</div>
          <div className="formula-box">
            <span className="formula-label">Outer Padding (S1)</span>
            <span className="formula-value">4px</span>
          </div>
          <div className="formula-operator">=</div>
          <div className="formula-box highlight">
            <span className="formula-label">Inner Radius (R4)</span>
            <span className="formula-value">8px</span>
          </div>
        </div>

        <div className="nesting-comparison mt-8">
           <div className="comparison-item correct">
             <DocHeading level={4}>Correct Nesting</DocHeading>
             <SpecCard show={showSpecs}>
               <div className="nest-preview correct-nest">
                 <div className="nest-inner" />
               </div>
             </SpecCard>
             <DocText className="text-xs text-success-9 mt-2">Smooth, concentric curves.</DocText>
           </div>
           <div className="comparison-item incorrect">
             <DocHeading level={4}>Incorrect Nesting</DocHeading>
             <div className="nest-preview incorrect-nest">
               <div className="nest-inner" />
             </div>
             <DocText className="text-xs text-error-9 mt-2">Mismatched, unbalanced gaps.</DocText>
           </div>
        </div>
      </DocSection>

      <DocSection id="zero-gap">
        <DocHeading>Zero-Gap Integration</DocHeading>
        <DocText>
          To maintain structural integrity in data-dense components, internal gaps between header elements and 
          content panels are set to zero. Spacing is instead managed via internal padding of the header.
        </DocText>

        <CodePreview
          code={`<div className="premium-container">
  <header style={{ padding: 'var(--space-3)', gap: 'var(--space-2)' }}>
    <Label>PROTOCOL STATUS (Radius-5)</Label>
  </header>
  {/* No Gap Here */}
  <div className="inner-panel" style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-4)' }}>
    24.8B
  </div>
</div>`}
        >
          <div style={{ width: '300px' }}>
            <SpecCard show={showSpecs}>
              <MetricCard 
                label="PROTOCOL STATUS" 
                value="24.8B" 
                trend="up" 
                change="5.2%" 
                design="premium"
              />
            </SpecCard>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="examples">
        <DocHeading>Live Premium Blocks</DocHeading>
        <DocText className="mb-8">Explore how the V4.0 standards behave in various functional contexts.</DocText>
        
        <div className="premium-showcase-grid">
           <SpecCard show={showSpecs}>
            <MetricCard 
              label="REVENUE" 
              value="$1,240,000" 
              trend="up" 
              change="+12.5%" 
              design="premium"
              variant="success"
            />
          </SpecCard>
          <SpecCard show={showSpecs} type="flush">
            <MetricCard 
              label="FLUSH VARIANT" 
              value="No Padding" 
              design="premium"
              isFlush={true}
            />
          </SpecCard>
          <SpecCard show={showSpecs}>
            <MetricCard 
              label="ERROR RATE" 
              value="0.04%" 
              trend="down" 
              change="-0.2%" 
              design="premium"
              variant="error"
            />
          </SpecCard>
        </div>
      </DocSection>
    </DocLayout>
  );
};

export default PremiumAestheticDoc;
