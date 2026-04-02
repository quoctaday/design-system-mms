import React, { useState, useCallback, useMemo } from 'react';
import { useBrand } from '../contexts/BrandContext';
import { Tabs } from '../components/ui/Tabs/Tabs';
import { RiSearchLine, RiPaletteLine, RiInformationLine, RiPulseLine, RiLayout4Line } from 'react-icons/ri';
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

// ─── Data ─────────────────────────────────────────────

interface ColorToken {
  variable: string;
  value: string;
  label?: string;
  description?: string;
}

const textTokens: ColorToken[] = [
  { variable: '--text-emphasis', value: 'var(--text-emphasis)', description: 'Primary high-contrast text.' },
  { variable: '--text-subtle', value: 'var(--text-subtle)', description: 'Secondary descriptive text.' },
  { variable: '--text-muted', value: 'var(--text-muted)', description: 'Placeholders or inactive states.' },
  { variable: '--text-on-color', value: 'var(--text-on-color)', description: 'Text on solid brand/dark bgs.' },
  { variable: '--text-brand', value: 'var(--text-brand)', description: 'Brand-colored text emphasis.' },
  { variable: '--text-success', value: 'var(--text-success)', description: 'Positive feedback text.' },
  { variable: '--text-error', value: 'var(--text-error)', description: 'Negative feedback or alerts.' },
];

const iconTokens: ColorToken[] = [
  { variable: '--icon-emphasis', value: 'var(--icon-emphasis)', description: 'Primary high-contrast icons.' },
  { variable: '--icon-subtle', value: 'var(--icon-subtle)', description: 'Secondary icons.' },
  { variable: '--icon-brand', value: 'var(--icon-brand)', description: 'Brand-colored icons.' },
  { variable: '--icon-success', value: 'var(--icon-success)', description: 'Success state icons.' },
  { variable: '--icon-error', value: 'var(--icon-error)', description: 'Error state icons.' },
];

const surfaceTokens: ColorToken[] = [
  { variable: '--bg-surface', value: 'var(--bg-surface)', description: 'Panels, cards, and layers.' },
  { variable: '--bg-app', value: 'var(--bg-app)', description: 'Main application background.' },
  { variable: '--bg-component', value: 'var(--bg-component)', description: 'Base for interactive components.' },
  { variable: '--bg-component-hover', value: 'var(--bg-component-hover)', description: 'Component hover state.' },
];

const borderTokens: ColorToken[] = [
  { variable: '--border-standard', value: 'var(--border-standard)', description: 'Standard divider and border.' },
  { variable: '--border-low', value: 'var(--border-low)', description: 'Subtle, low-contrast border.' },
  { variable: '--border-brand', value: 'var(--border-brand)', description: 'Brand-colored focus or selection.' },
];

interface ColorGroup {
  name: string;
  shades: ColorToken[];
}

const statusColors: ColorGroup[] = [
  {
    name: 'Success',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--green-${i + 1}`, value: `var(--green-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Error',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--red-${i + 1}`, value: `var(--red-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Warning',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--amber-${i + 1}`, value: `var(--amber-${i + 1})`, label: `${i + 1}` })),
  },
];

const accentColors: ColorGroup[] = [
  {
    name: 'Blue',
    shades: Array.from({ length: 12 }, (_, i) => ({ variable: `--blue-${i + 1}`, value: `var(--blue-${i + 1})`, label: `${i + 1}` })),
  },
  {
    name: 'Purple',
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
      className="color-scale-swatch" 
      style={{ backgroundColor: `var(${token.variable})`, color: contrast }}
      onClick={() => copy(resolved)}
    >
      <span className="color-scale-label">{token.variable.split('-').pop()}</span>
      <span className="color-scale-value">{resolved.toUpperCase()}</span>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────

const ColorsDoc: React.FC = () => {
  const { activeBrand } = useBrand();
  const [activeTab, setActiveTab] = useState('brand');
  const [search, setSearch] = useState('');
  const { copied } = useClipboard();

  const brandScale = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    variable: `--brand-${i + 1}`,
    value: `var(--brand-${i + 1})`,
  })), [activeBrand]);

  const filteredTokens = useMemo(() => {
    if (!search) return null;
    const s = search.toLowerCase();
    const all = [
      ...textTokens, ...iconTokens, ...surfaceTokens, ...borderTokens,
      ...statusColors.flatMap(g => g.shades),
      ...accentColors.flatMap(g => g.shades)
    ];
    return all.filter(t => t.variable.toLowerCase().includes(s) || (t.description?.toLowerCase().includes(s)));
  }, [search]);

  return (
    <div className="colors-doc">
      <header className="doc-header">
        <h1>Design Tokens</h1>
        <p className="doc-description">
          The system's visual foundation. These tokens ensure consistency across all MMS brands 
          and provide high-fidelity color scales for any interface requirement.
        </p>

        <div style={{ marginTop: 32, position: 'relative', maxWidth: '400px' }}>
          <RiSearchLine style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-9)', fontSize: 20 }} />
          <input 
            type="text" 
            placeholder="Search tokens (e.g. brand, success, border)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px 14px 48px',
              borderRadius: 'var(--radius-12)',
              border: '1px solid var(--brand-200)',
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(10px)',
              fontSize: '15px',
              outline: 'none',
              boxShadow: 'var(--shadow-small)'
            }}
          />
        </div>
      </header>

      {search ? (
        <section className="doc-section">
          <h2>Search Results for "{search}"</h2>
          <div className="token-table-container">
            <table className="token-table">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {filteredTokens?.map(t => (
                  <tr key={t.variable} onClick={() => useClipboard().copy(resolveCSSVar(t.variable))} style={{ cursor: 'pointer' }}>
                    <td><div className="token-dot" style={{ backgroundColor: `var(${t.variable})` }} /></td>
                    <td className="token-var">{t.variable}</td>
                    <td className="token-hex">{resolveCSSVar(t.variable).toUpperCase()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Trigger value="brand"><RiPaletteLine /> Brand</Tabs.Trigger>
              <Tabs.Trigger value="semantic"><RiInformationLine /> Semantic</Tabs.Trigger>
              <Tabs.Trigger value="accent"><RiPulseLine /> Accents</Tabs.Trigger>
              <Tabs.Trigger value="foundation"><RiLayout4Line /> Foundations</Tabs.Trigger>
            </Tabs.List>
          </Tabs>

          <div style={{ marginTop: 40 }}>
            {activeTab === 'brand' && (
              <>
                <section className="doc-section">
                  <h2>Brand Primary Scale</h2>
                  <div className="note-card">
                    <img src={activeBrand.logo} alt="" style={{ height: 24, width: 'auto', marginRight: 12 }} />
                    <span>Active: <strong>{activeBrand.name}</strong>. Switch brand in the floating panel to update tokens.</span>
                  </div>
                  <div className="color-scale-row">
                    {brandScale.map(t => <ColorSwatch key={t.variable} token={t} />)}
                  </div>
                </section>

                <section className="doc-section">
                  <h2>Brand Alpha & Contrast</h2>
                  <div className="swatch-grid">
                    {[
                      { variable: '--brand-solid-bg', value: 'Brand Solid', description: 'WCAG AA ≥ 4.5:1 on white' },
                      { variable: '--brand-alpha-16', value: 'Alpha 16%', description: 'Subtle overlays' },
                      { variable: '--brand-alpha-4', value: 'Alpha 4%', description: 'Surface hints' },
                    ].map(t => (
                      <div key={t.variable} className="pro-max-card swatch-card">
                        <div className="swatch-color" style={{ backgroundColor: `var(${t.variable})` }} />
                        <div className="swatch-info">
                          <div className="swatch-name">{t.variable}</div>
                          <div className="swatch-desc">{t.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {activeTab === 'semantic' && (
              <>
                <section className="doc-section">
                  <h2>Grayscale Basis</h2>
                  <div className="color-scale-row">
                    {Array.from({ length: 12 }, (_, i) => ({ variable: `--gray-${i + 1}`, value: '' })).map(t => (
                      <ColorSwatch key={t.variable} token={t} />
                    ))}
                  </div>
                </section>

                <section className="doc-section">
                  <h2>Text & Typography</h2>
                  <div className="token-table-container">
                    <table className="token-table">
                      <thead>
                        <tr>
                          <th>Preview</th>
                          <th>Token</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {textTokens.map(t => (
                          <tr key={t.variable}>
                            <td><div className="token-dot" style={{ backgroundColor: `var(${t.variable})` }} /></td>
                            <td className="token-var">{t.variable}</td>
                            <td>{t.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </>
            )}

            {activeTab === 'accent' && (
              <>
                {statusColors.concat(accentColors).map(g => (
                  <section className="doc-section" key={g.name}>
                    <h2>{g.name} Scale</h2>
                    <div className="color-scale-row">
                      {g.shades.map(t => <ColorSwatch key={t.variable} token={t} />)}
                    </div>
                  </section>
                ))}
              </>
            )}

            {activeTab === 'foundation' && (
              <>
                <section className="doc-section">
                  <h2>Spacing Hierarchy</h2>
                  <div className="foundation-grid">
                    {[4, 8, 12, 16, 24, 32, 40, 80].map(s => (
                      <div key={s} className="foundation-item">
                        <div className="spacing-preview" style={{ width: s, height: s }} />
                        <div className="swatch-name">--spacing-{s}</div>
                        <div className="swatch-desc">{s}px</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="doc-section">
                  <h2>Shadow Elevation</h2>
                  <div className="foundation-grid">
                    {['xsmall', 'small', 'medium', 'large', '2xlarge'].map(s => (
                      <div key={s} className="foundation-item">
                        <div className="shadow-preview" style={{ boxShadow: `var(--shadow-${s})` }} />
                        <div className="swatch-name">--shadow-{s}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>
        </>
      )}

      <div className={`copied-toast ${copied ? 'visible' : ''}`}>
        Copied: {copied}
      </div>
    </div>
  );
};

export default ColorsDoc;
