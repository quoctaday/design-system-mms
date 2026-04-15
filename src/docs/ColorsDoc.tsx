import React, { useState, useCallback, useMemo } from 'react';
import { useBrand } from '../contexts/BrandContext';
import { Tabs } from '../components/ui';
import { 
  RiSearchLine, 
  RiPaletteLine
} from 'react-icons/ri';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import './ColorsDoc.css';

// ─── Helpers ──────────────────────────────────────────
function getContrastColor(hex: string): string {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? '#1a1a1a' : '#ffffff';
}

interface ColorToken {
  variable: string;
  value: string;
  label?: string;
  description?: string;
}

const surfaceTokens: ColorToken[] = [
  { variable: '--surface-app', value: 'var(--surface-app)', description: 'The absolute foundation. S1 light gray for app-wide containment.' },
  { variable: '--surface-panel', value: 'var(--surface-panel)', description: 'Clean white surface for primary content cards and data tables.' },
  { variable: '--surface-component', value: 'var(--surface-component)', description: 'Subtle gray fill (S3) for input fields, buttons, and secondary modules.' },
  { variable: '--surface-solid', value: 'var(--brand-9)', description: 'High-impact identity surface for primary CTAs and active states.' },
  { variable: '--surface-overlay', value: 'var(--black-a8)', description: 'Backdrop for modals and dialogs to enforce visual hierarchy.' },
];

const contentTokens: ColorToken[] = [
  { variable: '--content-strong', value: 'var(--content-strong)', description: 'High-contrast ink (S12) for authoritative headers and critical data.' },
  { variable: '--content-subtle', value: 'var(--content-subtle)', description: 'Secondary text (S11) for descriptions and meta-information.' },
  { variable: '--content-accent', value: 'var(--content-accent)', description: 'Brand-tinted text (A11) for emphasis and interactive links.' },
  { variable: '--content-on-solid', value: 'var(--white)', description: 'Maximum contrast ink for use atop vibrant identity surfaces.' },
];

const borderTokens: ColorToken[] = [
  { variable: '--border-subtle', value: 'var(--border-subtle)', description: 'Light divider (S6) for low-impact structural separation.' },
  { variable: '--border-default', value: 'var(--border-default)', description: 'Standard boundary (S7) for cards, inputs, and primary containers.' },
  { variable: '--border-accent', value: 'var(--border-accent)', description: 'Brand-tinted boundary (A7) for focus states and themed emphasis.' },
];

interface ColorGroup {
  name: string;
  id: string;
  shades: ColorToken[];
}

const statusColors: ColorGroup[] = [
  {
    name: 'Success', id: 'success',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--green-${i + 1}`, value: `var(--green-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Error', id: 'error',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--red-${i + 1}`, value: `var(--red-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Warning', id: 'warning',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--amber-${i + 1}`, value: `var(--amber-${i + 1})`, label: `${i + 1}` })),
  },
];

const accentColors: ColorGroup[] = [
  {
    name: 'Blue', id: 'blue',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--blue-${i + 1}`, value: `var(--blue-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Sky', id: 'sky',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--sky-${i + 1}`, value: `var(--sky-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Teal', id: 'teal',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--teal-${i + 1}`, value: `var(--teal-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Lime', id: 'lime',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--lime-${i + 1}`, value: `var(--lime-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Orange', id: 'orange',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--orange-${i + 1}`, value: `var(--orange-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Pink', id: 'pink',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--pink-${i + 1}`, value: `var(--pink-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Purple', id: 'purple',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--purple-${i + 1}`, value: `var(--purple-${i + 1})`, label: `${i + 1}` })),
  },
];

// ─── Sub-Components ───────────────────────────────────

function useClipboard() {
  const [copied, setCopied] = useState('');
  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  }, []);
  return { copied, copy };
}

function resolveCSSVar(variable: string): string {
  if (typeof window === 'undefined') return '';
  const varName = variable.match(/var\((--[^)]+)\)/)?.[1] || variable;
  const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return val || variable;
}

const ColorSwatch: React.FC<{ token: ColorToken }> = ({ token }) => {
  const { copy } = useClipboard();
  const resolved = resolveCSSVar(token.variable);
  const contrast = getContrastColor(resolved);

  return (
    <div 
      className="color-premium-swatch" 
      style={{ backgroundColor: `var(${token.variable})`, color: contrast }}
      onClick={() => copy(token.variable)}
    >
      <div className="swatch-overlay">
        <span className="swatch-step">{token.variable.split('-').pop()}</span>
        <span className="swatch-hex">{resolved.toUpperCase()}</span>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────

const ColorsDoc: React.FC = () => {
  const { activeBrand } = useBrand();
  const [activeTab, setActiveTab] = useState('brand');
  const [search, setSearch] = useState('');
  const { copy, copied } = useClipboard();

  const brandScale = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    variable: `--brand-${i + 1}`,
    value: `var(--brand-${i + 1})`,
  })), []);

  const brandAlphaScale = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    variable: `--brand-a${i + 1}`,
    value: `var(--brand-a${i + 1})`,
  })), []);

  const toc = [
    { id: 'brand', title: 'Brand Protocols' },
    { id: 'semantic', title: 'Implementation Tokens' },
    { id: 'accents', title: 'Feedback & Logic' },
    { id: 'foundations', title: 'Spatial Metrics' }
  ];

  return (
    <DocLayout 
      title="Visual Protocols" 
      description="The definitive atomic definitions for the MMS environment. Every hex value is audited for luminance and operational accessibility."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <div className="premium-search-container">
        <RiSearchLine className="search-icon-inside" />
        <input 
          type="text" 
          placeholder="Filter protocols e.g. success, brand-9..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="premium-token-search"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="premium-tabs-list">
          <Tabs.Trigger value="brand">Identity</Tabs.Trigger>
          <Tabs.Trigger value="semantic">Implementation</Tabs.Trigger>
          <Tabs.Trigger value="accents">Feedback</Tabs.Trigger>
          <Tabs.Trigger value="foundations">Metrics</Tabs.Trigger>
        </Tabs.List>

        <div className="premium-tab-content">
          {activeTab === 'brand' && (
            <div className="animate-reveal">
              <section id="brand" className="doc-section">
                <h2 className="section-title">Brand Protocol: {activeBrand.name}</h2>
                <div className="brand-info-stripe">
                   <div className="brand-logo-mini">
                     <img src={activeBrand.logo} alt="" />
                   </div>
                   <div className="brand-summary">
                     <p>Dynamic 12-step identity scale derived from <code>{activeBrand.primaryColor}</code> using our precision luminance curve.</p>
                   </div>
                </div>
                <div className="swatch-premium-row">
                  {brandScale.map(t => <ColorSwatch key={t.variable} token={t} />)}
                </div>

                <h3 className="sub-section-title mt-12">Adaptive Alpha Standards (Glassmorphism)</h3>
                <p className="mb-4">Identity scales with progressive transparency for overlays and glass effects. These are aliased from foundational alpha primitives.</p>
                <div className="swatch-premium-row">
                  {brandAlphaScale.map(t => <ColorSwatch key={t.variable} token={t} />)}
                </div>
              </section>

              <section className="doc-section">
                <h3 className="sub-section-title">Established Applications</h3>
                <div className="app-token-grid">
                  {[
                    { variable: '--brand-9', label: 'Primary Directive', desc: 'The base surface for mission-critical actions.' },
                    { variable: '--brand-a3', label: 'Adaptive Surface', desc: 'Low-impact component containers.' },
                    { variable: '--brand-a6', label: 'Protocol Separator', desc: 'Internal structural dividers.' },
                  ].map(t => (
                    <div key={t.variable} className="app-token-card" onClick={() => copy(t.variable)}>
                      <div className="app-token-preview" style={{ backgroundColor: `var(${t.variable})` }} />
                      <div className="app-token-meta">
                        <span className="app-token-name">{t.label}</span>
                        <span className="app-token-var">{t.variable}</span>
                        <span className="app-token-desc">{t.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'semantic' && (
            <div className="animate-reveal">
              <section id="semantic" className="doc-section">
                <h2 className="section-title">The Semantic Registry (v4.0)</h2>
                <p className="mb-8">Consumable tokens mapped to specific behavioral roles. Built on a strict Radix-aligned foundation.</p>
                
                <h3 className="sub-section-title mt-12">Surfaces</h3>
                <div className="semantic-table-premium">
                  <div className="table-header-premium">
                    <span>Preview</span>
                    <span>Token</span>
                    <span>Behavioral Role</span>
                  </div>
                  {surfaceTokens.map(t => (
                    <div key={t.variable} className="table-row-premium" onClick={() => copy(t.variable)}>
                      <div className="row-preview"><div className="swatch-rect" style={{ backgroundColor: `var(${t.variable})` }} /></div>
                      <div className="row-token"><code>{t.variable}</code></div>
                      <div className="row-desc">{t.description}</div>
                    </div>
                  ))}
                </div>

                <h3 className="sub-section-title mt-12">Data Ink & Content</h3>
                <div className="semantic-table-premium">
                  {contentTokens.map(t => (
                    <div key={t.variable} className="table-row-premium" onClick={() => copy(t.variable)}>
                      <div className="row-preview"><div className="swatch-dot" style={{ backgroundColor: `var(${t.variable})` }} /></div>
                      <div className="row-token"><code>{t.variable}</code></div>
                      <div className="row-desc">{t.description}</div>
                    </div>
                  ))}
                </div>

                <h3 className="sub-section-title mt-12">Structural Boundaries</h3>
                <div className="semantic-table-premium">
                  {borderTokens.map(t => (
                    <div key={t.variable} className="table-row-premium" onClick={() => copy(t.variable)}>
                      <div className="row-preview"><div className="swatch-line" style={{ backgroundColor: `var(${t.variable})` }} /></div>
                      <div className="row-token"><code>{t.variable}</code></div>
                      <div className="row-desc">{t.description}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'accents' && (
            <div className="animate-reveal space-y-16">
              {statusColors.concat(accentColors).map(g => (
                <section id={g.id} key={g.name} className="doc-section">
                  <h3 className="sub-section-title">{g.name} Protocol</h3>
                  <div className="swatch-premium-row">
                    {g.shades.map(t => <ColorSwatch key={t.variable} token={t} />)}
                  </div>
                </section>
              ))}
            </div>
          )}

          {activeTab === 'foundations' && (
            <div className="animate-reveal space-y-24">
              <section id="foundations" className="doc-section">
                <h2 className="section-title">Spatial Protocols</h2>
                <p>Consistent vertical rhythm is enforced via a 4px modular unit for padding/margin, and standardized heights for components.</p>
                
                <h3 className="sub-section-title mt-8">Modular Spacing (Radix Scales 1-9)</h3>
                <div className="spacing-premium-grid">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
                    const pixels = index === 1 ? 4 : index === 2 ? 8 : index === 3 ? 12 : index === 4 ? 16 : index === 5 ? 24 : index === 6 ? 32 : index === 7 ? 40 : index === 8 ? 48 : 64;
                    return (
                      <div key={index} className="spacing-premium-item">
                        <div className="spacing-box-wrapper">
                           <div className="spacing-box-core" style={{ width: `var(--space-${index})`, height: `var(--space-${index})` }} />
                        </div>
                        <span className="spacing-label">--space-{index}</span>
                        <span className="spacing-val">{pixels}px</span>
                      </div>
                    );
                  })}
                </div>

                <h3 className="sub-section-title mt-12">Interface Heights (Sizes)</h3>
                <p className="mb-8">Standardized heights for input components, buttons, and row items across the platform.</p>
                <div className="spacing-premium-grid">
                  {[1, 2, 3, 4].map(size => (
                    <div key={size} className="spacing-premium-item">
                       <div className="spacing-box-wrapper">
                         {/* We resolve the variable height for the preview box */}
                         <div className="spacing-box-core" style={{ height: `var(--size-${size})`, width: 120, borderRadius: 4 }} />
                      </div>
                      <span className="spacing-label">--size-{size}</span>
                      <span className="spacing-val">{size === 1 ? '32' : size === 2 ? '40' : size === 3 ? '48' : '56'}px</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="doc-section">
                <h2 className="section-title">The Flat Policy</h2>
                <p>In accordance with our **Flat-Premium** core directive, shadows are deprecated. Elevation hierarchy is achieved through high-contrast borders and surgical background shifts, maximizing interface clarity in data-dense scenarios.</p>
                <div className="elevation-flat-grid">
                   <div className="elevation-box level-0">Background (S1)</div>
                   <div className="elevation-box level-1">Raised Interface (Border)</div>
                   <div className="elevation-box level-2">Active Overlay (High Contrast)</div>
                </div>
              </section>
            </div>
          )}
        </div>
      </Tabs>

      <div className={`copy-toast-premium ${copied ? 'visible' : ''}`}>
        <RiPaletteLine />
        <span>Copied: <strong>{copied}</strong></span>
      </div>
    </DocLayout>
  );
};

export default ColorsDoc;
