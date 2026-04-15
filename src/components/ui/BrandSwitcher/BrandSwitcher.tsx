import React, { useState } from 'react';
import { useBrand } from '../../../contexts/BrandContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { RiCloseLine, RiCheckLine, RiSunLine, RiMoonLine } from 'react-icons/ri';
import Tabs from '../Tabs/Tabs';
import './BrandSwitcher.css';

type Radius = 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';

/**
 * Fixed floating brand panel — always visible at top-right.
 * Expanded to include Appearance and Radius controls.
 */
export const BrandPanel: React.FC = () => {
  const { brands, activeBrand, switchBrand } = useBrand();
  const { theme, setTheme, radius, setRadius, scaling, setScaling } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  // ── Collapsed FAB ──────────────────────────
  if (!isOpen) {
    return (
      <button
        className="brand-panel-fab"
        onClick={() => setIsOpen(true)}
        aria-label="Open brand switcher"
        title={`Current: ${activeBrand.name}`}
      >
        <img src={activeBrand.logo} alt="" style={{ width: 'var(--size-0)', height: 'var(--size-0)', objectFit: 'contain' }} />
      </button>
    );
  }

  const radiusOptions: { id: Radius; label: string; value: string }[] = [
    { id: 'none', label: 'None', value: 'var(--radius-none)' },
    { id: '2', label: 'Small', value: 'var(--radius-2)' },
    { id: '4', label: 'Medium', value: 'var(--radius-3)' },
    { id: '5', label: 'Large', value: 'var(--radius-4)' },
    { id: 'full', label: 'Full', value: 'var(--radius-full)' },
  ];

  type Scaling = '90' | '95' | '100' | '105' | '110';
  const scalingOptions: { id: Scaling; label: string }[] = [
    { id: '90', label: '90%' },
    { id: '95', label: '95%' },
    { id: '100', label: '100%' },
    { id: '105', label: '105%' },
    { id: '110', label: '110%' },
  ];

  // ── Expanded Panel ─────────────────────────
  return (
    <div className="brand-panel">
      <div className="brand-panel-header">
        <div className="brand-panel-header-left">
          <div className="brand-active-indicator">
            <span className="pulse-dot" style={{ backgroundColor: activeBrand.primaryColor }} />
          </div>
          <p className="brand-panel-title">MMS Engine</p>
        </div>
        <button
          className="brand-panel-toggle"
          onClick={() => setIsOpen(false)}
          aria-label="Collapse brand panel"
          title="Collapse"
        >
          <RiCloseLine size={18} />
        </button>
      </div>

      {/* 1. APPEARANCE SECTION */}
      <div className="brand-panel-section">
        <p className="brand-panel-section-title">Appearance</p>
        <Tabs 
          variant="toggle" 
          size="1" 
          radius="4" 
          value={theme}
          onValueChange={(val) => setTheme(val as 'light' | 'dark')}
        >
          <Tabs.List className="full-width">
            <Tabs.Trigger value="light" className="flex-1">
              <RiSunLine style={{ marginRight: 'var(--space-2)' }} />
              Light
            </Tabs.Trigger>
            <Tabs.Trigger value="dark" className="flex-1">
              <RiMoonLine style={{ marginRight: 'var(--space-2)' }} />
              Dark
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      </div>

      {/* 2. RADIUS SECTION */}
      <div className="brand-panel-section">
        <p className="brand-panel-section-title">Radius</p>
        <div className="radius-picker">
          {radiusOptions.map((opt) => (
            <div
              key={opt.id}
              className={`radius-option ${radius === opt.id ? 'active' : ''}`}
              onClick={() => setRadius(opt.id)}
            >
              <div className="radius-box">
                <div className="radius-glyph-container">
                  <div 
                    className="radius-glyph" 
                    style={{ 
                      borderRadius: opt.id === 'full' ? 'var(--radius-full) 0 0 0' : 
                                   opt.id === '5' ? 'var(--radius-4) 0 0 0' :
                                   opt.id === '4' ? 'var(--radius-3) 0 0 0' :
                                   opt.id === '2' ? 'var(--radius-2) 0 0 0' : '0' 
                    }} 
                  />
                </div>
              </div>
              <span className="radius-label">{opt.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SCALING SECTION */}
      <div className="brand-panel-section">
        <p className="brand-panel-section-title">Scaling</p>
        <Tabs 
          variant="toggle" 
          size="1" 
          radius="4" 
          value={scaling}
          onValueChange={(val) => setScaling(val as any)}
        >
          <Tabs.List className="full-width">
            {scalingOptions.map((opt) => (
              <Tabs.Trigger key={opt.id} value={opt.id} className="flex-1">
                {opt.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs>
      </div>

      <div className="brand-panel-divider" />

      {/* 4. BRAND LIST */}
      <div className="brand-panel-section brand-list-section">
        <p className="brand-panel-section-title">Active Brand</p>
        <div className="brand-list-compact">
          {brands.map((brand) => (
            <button
              key={brand.id}
              className={`brand-list-item ${activeBrand.id === brand.id ? 'active' : ''}`}
              onClick={() => switchBrand(brand.id)}
            >
              <div
                className="brand-list-item-dot"
                style={{ background: activeBrand.id === brand.id ? `${brand.primaryColor}22` : 'var(--surface-component)' }}
              >
                <img src={brand.logo} alt="" style={{ width: 'var(--space-4)', height: 'var(--space-4)', objectFit: 'contain' }} />
              </div>
              <div className="brand-list-item-info">
                <p className="brand-list-item-name">{brand.name}</p>
              </div>
              {activeBrand.id === brand.id && (
                <div
                  className="brand-list-item-check"
                  style={{ color: brand.primaryColor }}
                >
                  <RiCheckLine size={14} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPanel;
