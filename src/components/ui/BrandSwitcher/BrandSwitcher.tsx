import React, { useState } from 'react';
import { useBrand } from '../../../contexts/BrandContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { RiCloseLine, RiCheckLine, RiSunLine, RiMoonLine } from 'react-icons/ri';
import './BrandSwitcher.css';

type Radius = 'none' | 'small' | 'medium' | 'large' | 'full';

/**
 * Fixed floating brand panel — always visible at top-right.
 * Expanded to include Appearance and Radius controls.
 */
export const BrandPanel: React.FC = () => {
  const { brands, activeBrand, switchBrand } = useBrand();
  const { theme, setTheme, radius, setRadius } = useTheme();
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
        <img src={activeBrand.logo} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
      </button>
    );
  }

  const radiusOptions: { id: Radius; label: string; value: string }[] = [
    { id: 'none', label: 'None', value: '0px' },
    { id: 'small', label: 'Small', value: '4px' },
    { id: 'medium', label: 'Medium', value: '8px' },
    { id: 'large', label: 'Large', value: '12px' },
    { id: 'full', label: 'Full', value: '999px' },
  ];

  // ── Expanded Panel ─────────────────────────
  return (
    <div className="brand-panel">
      <div className="brand-panel-header">
        <p className="brand-panel-title">Brand</p>
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
        <div className="appearance-picker">
          <button
            className={`appearance-button ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            <RiSunLine />
            Light
          </button>
          <button
            className={`appearance-button ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            <RiMoonLine />
            Dark
          </button>
        </div>
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
                <div 
                  className="radius-glyph" 
                  style={{ borderRadius: `${opt.value} 0 0 0` }} 
                />
              </div>
              <span className="radius-label">{opt.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brand-panel-divider" />

      {/* 3. BRAND LIST */}
      <div className="brand-list-compact">
        {brands.map((brand) => (
          <button
            key={brand.id}
            className={`brand-list-item ${activeBrand.id === brand.id ? 'active' : ''}`}
            onClick={() => switchBrand(brand.id)}
          >
            <div
              className="brand-list-item-dot"
              style={{ background: `${brand.primaryColor}22` }}
            >
              <img src={brand.logo} alt="" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
            </div>
            <div className="brand-list-item-info">
              <p className="brand-list-item-name">{brand.name}</p>
              <p className="brand-list-item-desc">{brand.description}</p>
            </div>
            <div
              className="brand-list-item-check"
              style={{ color: brand.primaryColor }}
            >
              <RiCheckLine size={16} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandPanel;
