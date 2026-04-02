import React, { useState } from 'react';
import { useBrand } from '../../../contexts/BrandContext';
import type { BrandConfig } from '../../../contexts/BrandContext';
import { RiCloseLine, RiCheckLine } from 'react-icons/ri';
import './BrandSwitcher.css';

/**
 * Fixed floating brand panel — always visible at top-right.
 * Inspired by the Radix UI Themes floating panel.
 */
export const BrandPanel: React.FC = () => {
  const { brands, activeBrand, switchBrand } = useBrand();
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

      <div className="brand-list-compact">
        {brands.map((brand) => (
          <BrandListItem
            key={brand.id}
            brand={brand}
            isActive={activeBrand.id === brand.id}
            onSelect={() => switchBrand(brand.id)}
          />
        ))}
      </div>
    </div>
  );
};

// ── Brand List Item ──────────────────────────
interface BrandListItemProps {
  brand: BrandConfig;
  isActive: boolean;
  onSelect: () => void;
}

const BrandListItem: React.FC<BrandListItemProps> = ({ brand, isActive, onSelect }) => (
  <button
    className={`brand-list-item ${isActive ? 'active' : ''}`}
    onClick={onSelect}
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
      <RiCheckLine size={14} />
    </div>
  </button>
);

export default BrandPanel;
