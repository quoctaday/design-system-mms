import React, { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from 'react';
import { generateRadixScale } from '../utils/colorUtils';
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
    const root = document.documentElement;
    const scale = generateRadixScale(brand.primaryColor, '--brand');

    // Apply entire 12-step scale + legacy aliases
    for (const [key, value] of Object.entries(scale)) {
      root.style.setProperty(key, value);
    }

    // Dynamic Semantic Aliases
    const solidBg = scale['--brand-9'];
    const accessibleText = scale['--brand-11'];

    root.style.setProperty('--brand-solid-bg', solidBg);
    root.style.setProperty('--text-on-color', '#ffffff'); 
    root.style.setProperty('--brand-text-accessible', accessibleText);
    root.style.setProperty('--border-brand', scale['--brand-7']);
    root.style.setProperty('--icon-brand', scale['--brand-9']);
    root.style.setProperty('--text-brand', accessibleText);
    root.style.setProperty('--component-button-fill', solidBg);
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
