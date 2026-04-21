import React from 'react';
import { Kbd, Flex, Box } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import './TypographyDoc.css';

const TypographyDoc: React.FC = () => {
  const typeScale = [
    { token: '--font-size-1', size: '12px', usage: 'Labels, micro-information' },
    { token: '--font-size-2', size: '14px', usage: 'Primary Body text, Standard UI labels' },
    { token: '--font-size-3', size: '16px', usage: 'Small headers, Form labels' },
    { token: '--font-size-4', size: '18px', usage: 'Section titles, UI Emphasis' },
    { token: '--font-size-5', size: '20px', usage: 'Primary Module headers' },
    { token: '--font-size-6', size: '24px', usage: 'Page headers, Large titles' },
    { token: '--font-size-7', size: '28px', usage: 'Display 1, Hero sections' },
    { token: '--font-size-8', size: '32px', usage: 'Display 2, Impact metrics' },
    { token: '--font-size-9', size: '36px', usage: 'Display 3, Large impact areas' },
  ];

  const weights = [
    { weight: 300, label: 'Light', usage: 'Refined display text' },
    { weight: 400, label: 'Regular', usage: 'Primary reading surface' },
    { weight: 500, label: 'Medium', usage: 'Secondary emphasis, meta' },
    { weight: 600, label: 'Semibold', usage: 'Interaction points, card titles' },
    { weight: 700, label: 'Bold', usage: 'Display headings and key metrics' },
  ];

  const toc = [
    { id: 'specimen', title: 'Specimen' },
    { id: 'scale', title: 'Typography Scale' },
    { id: 'weights', title: 'Font Weights' },
    { id: 'numbers', title: 'Numerical Data' },
    { id: 'kbd', title: 'Keyboard Shortcuts' }
  ];

  return (
    <DocLayout 
      title="Institutional Typography" 
      description="Engineered for high-frequency financial dashboards. Built on Swiss design principles and optimized for total operational clarity."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="specimen">
        <DocHeading>The Typeface Protocol</DocHeading>
        <div className="type-specimen-grid">
          <div className="specimen-card">
             <div className="specimen-title">Primary Display Face</div>
             <div className="large-char" style={{ fontFamily: 'var(--font-display)' }}>Aa</div>
             <div className="specimen-meta">
               <span className="specimen-name">Inter Display</span>
               <span className="specimen-desc">Tight tracking and increased x-height for high-impact directives.</span>
             </div>
          </div>
          <div className="specimen-card">
             <div className="specimen-title">Operational Body Face</div>
             <div className="large-char" style={{ fontFamily: 'var(--font-body)', color: 'var(--content-subtle)' }}>Aa</div>
             <div className="specimen-meta">
               <span className="specimen-name">Inter</span>
               <span className="specimen-desc">Maximum rhythmic legibility for high-density secondary data.</span>
             </div>
          </div>
        </div>
      </DocSection>

      <DocSection id="scale">
        <DocHeading>The Modular Type Scale</DocHeading>
        <div className="premium-table-container">
          <table className="premium-type-table">
            <thead>
              <tr>
                <th>Protocol Token</th>
                <th>Visual Preview</th>
                <th>Standardized Usage</th>
              </tr>
            </thead>
            <tbody>
              {typeScale.map(t => (
                <tr key={t.token}>
                  <td className="type-token-cell"><code>{t.token}</code></td>
                  <td className="type-preview-cell" style={{ fontSize: t.size }}>MMS Global Intelligence</td>
                  <td className="type-usage-cell">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="weights">
        <DocHeading>Established Weights</DocHeading>
        <div className="weights-premium-flex">
          {weights.map(w => (
            <div key={w.weight} className="weight-item">
              <div className="weight-info">
                <span className="weight-label" style={{ fontWeight: w.weight }}>{w.label}</span>
                <span className="weight-usage">{w.usage}</span>
              </div>
              <span className="weight-value">{w.weight}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="numbers">
        <DocHeading>Numerical Data Integrity</DocHeading>
        <DocText>In financial environments, numerical precision is paramount. We strictly enforce <code>tabular-nums</code> for all currency, balance, and metric values to ensure absolute vertical alignment across complex data arrays.</DocText>
        
        <div className="tabular-nums-showcase">
           <div className="comparison-grid">
              <div className="comparison-item">
                <DocHeading level={4}>Proportional (Unauthorized)</DocHeading>
                <div className="num-sample">111,111.00</div>
                <div className="num-sample">888,888.88</div>
              </div>
              <div className="comparison-item">
                <DocHeading level={4}>Tabular (Optimized)</DocHeading>
                <div className="num-sample tabular">111,111.00</div>
                <div className="num-sample tabular">888,888.88</div>
              </div>
           </div>
        </div>
        
        <div className="mt-8">
          <CodePreview 
            code={`.metric-data {
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
  font-feature-settings: "tnum" 1;
}`}
          />
        </div>
      </DocSection>

      <DocSection id="kbd">
        <DocHeading>Keyboard Shortcuts</DocHeading>
        <DocText>The <code>Kbd</code> component is used to display keyboard shortcuts and command sequences.</DocText>
        <div className="mt-8">
          <CodePreview 
            code={`<Flex gap="3" align="center">
  <Text size="2">Press</Text>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
  <Text size="2">to search.</Text>
</Flex>`}
          >
            <Flex gap="3" align="center">
              <Text size="2">Press</Text>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
              <Text size="2">to search.</Text>
            </Flex>
          </CodePreview>
        </div>
      </DocSection>
    </DocLayout>
  );
};

export default TypographyDoc;

