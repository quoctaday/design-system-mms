import React, { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from 'react';
import { generateRadixScale, generateDarkRadixScale, getAccessibleTextColor } from '../utils/colorUtils';
import UnipayLogo from '../assets/Unipay.svg';
import OCBLogo from '../assets/OCB.svg';
import BVBLogo from '../assets/BVB.svg';
import MPayLogo from '../assets/MPAY.svg';
import AppotapayLogo from '../assets/Appotapay.svg';

export interface BrandConfig {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  description: string;
  primaryColor: string;
}

/**
 * Brand definitions with primary colors.
 * The 12-step Radix scale is generated dynamically from the primaryColor.
 */
const BRANDS: BrandConfig[] = [
  {
    id: 'unipay',
    name: 'Unipay',
    shortName: 'unipay',
    logo: UnipayLogo,
    description: 'Digital payment platform',
    primaryColor: '#1288FF',
  },
  {
    id: 'ocb',
    name: 'OCB',
    shortName: 'ocb',
    logo: OCBLogo,
    description: 'Banking & financial services',
    primaryColor: '#008C4F',
  },
  {
    id: 'bvb',
    name: 'BVB',
    shortName: 'bvb',
    logo: BVBLogo,
    description: 'Banking & investment',
    primaryColor: '#232A75',
  },
  {
    id: 'mpay',
    name: 'MPay',
    shortName: 'mpay',
    logo: MPayLogo,
    description: 'Mobile payment solution',
    primaryColor: '#363793',
  },
  {
    id: 'appotapay',
    name: 'Appotapay',
    shortName: 'appo',
    logo: AppotapayLogo,
    description: 'Payment gateway service',
    primaryColor: '#178E38',
  },
];

interface BrandContextValue {
  activeBrand: BrandConfig;
  brands: BrandConfig[];
  switchBrand: (brandId: string) => void;
}

const BrandContext = createContext<BrandContextValue | undefined>(undefined);

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}

interface BrandProviderProps {
  children: ReactNode;
}

export const BrandProvider: React.FC<BrandProviderProps> = ({ children }) => {
  const [activeBrandId, setActiveBrandId] = useState('unipay');

  const activeBrand = BRANDS.find((b) => b.id === activeBrandId) || BRANDS[0];

  const applyBrandTokens = useCallback((brand: BrandConfig) => {
    const lightScale = generateRadixScale(brand.primaryColor, '--brand');
    const darkScale = generateDarkRadixScale(brand.primaryColor, '--brand');
    
    // Calculate accessible text colors based on the solid background (step 9)
    const contrastColorLight = getAccessibleTextColor(lightScale['--brand-9']);
    const contrastColorDark = getAccessibleTextColor(darkScale['--brand-9']);

    // Build the injected CSS for :root (light mode) and .dark (dark mode)
    let cssString = `:root {\n`;
    for (const [key, value] of Object.entries(lightScale)) {
      cssString += `  ${key}: ${value};\n`;
    }
    cssString += `  --brand-solid-bg: ${lightScale['--brand-9']};\n`;
    cssString += `  --brand-contrast: ${contrastColorLight};\n`;
    cssString += `  --text-on-color: ${contrastColorLight === '#ffffff' ? '#ffffff' : '#000000'};\n`;
    cssString += `  --brand-text-accessible: ${lightScale['--brand-11']};\n`;
    cssString += `  --border-brand: ${lightScale['--brand-7']};\n`;
    cssString += `  --icon-brand: ${lightScale['--brand-9']};\n`;
    cssString += `  --text-brand: ${lightScale['--brand-11']};\n`;
    cssString += `  --component-button-fill: ${lightScale['--brand-9']};\n`;
    cssString += `}\n\n`;

    cssString += `.dark, [data-theme='dark'] {\n`;
    for (const [key, value] of Object.entries(darkScale)) {
      cssString += `  ${key}: ${value};\n`;
    }
    cssString += `  --brand-solid-bg: ${darkScale['--brand-9']};\n`;
    cssString += `  --brand-contrast: ${contrastColorDark};\n`;
    cssString += `  --text-on-color: ${contrastColorDark === '#ffffff' ? '#ffffff' : '#000000'};\n`;
    cssString += `  --brand-text-accessible: ${darkScale['--brand-11']};\n`;
    cssString += `  --border-brand: ${darkScale['--brand-7']};\n`;
    cssString += `  --icon-brand: ${darkScale['--brand-9']};\n`;
    cssString += `  --text-brand: ${darkScale['--brand-11']};\n`;
    cssString += `  --component-button-fill: ${darkScale['--brand-9']};\n`;
    cssString += `}\n`;

    // Find or create the dynamic style tag
    const styleId = 'mms-dynamic-brand';
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = cssString;

    // Clean up any lingering inline styles from previous implementation
    const root = document.documentElement;
    Object.keys(lightScale).forEach(key => root.style.removeProperty(key));
    ['--brand-solid-bg', '--brand-contrast', '--text-on-color', '--brand-text-accessible', '--border-brand', '--icon-brand', '--text-brand', '--component-button-fill'].forEach(key => root.style.removeProperty(key));
  }, []);

  // Initialize on mount and when activeBrand changes
  useEffect(() => {
    applyBrandTokens(activeBrand);
  }, [activeBrand, applyBrandTokens]);

  const switchBrand = useCallback((brandId: string) => {
    setActiveBrandId(brandId);
  }, []);

  return (
    <BrandContext.Provider value={{ activeBrand, brands: BRANDS, switchBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandContext;
