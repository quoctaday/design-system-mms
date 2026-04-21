import React, { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from 'react';
import { 
  generateRadixScale, 
  generateDarkRadixScale, 
  generateGrayScale,
  getAccessibleTextColor 
} from '../utils/colorUtils';
import { BRANDS, type BrandConfig } from '../config/brands';

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

  // Dynamic Font Injection
  useEffect(() => {
    const fontId = 'mms-dynamic-font';
    let linkTag = document.getElementById(fontId) as HTMLLinkElement;
    
    if (activeBrand.fontFamily?.googleFont) {
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.id = fontId;
        linkTag.rel = 'stylesheet';
        document.head.appendChild(linkTag);
      }
      linkTag.href = activeBrand.fontFamily.googleFont;
    } else if (linkTag) {
      linkTag.remove();
    }
  }, [activeBrand]);

  const applyBrandTokens = useCallback((brand: BrandConfig) => {
    const lightAccentScale = generateRadixScale(brand.primaryColor, '--accent');
    const darkAccentScale = generateDarkRadixScale(brand.primaryColor, '--accent');
    
    // Generate Gray scale based on brand variant (e.g., Slate, Sage)
    const grayScale = generateGrayScale(brand.primaryColor, brand.grayVariant || 'neutral', '--gray');
    
    // Calculate accessible text colors based on the solid background (step 9)
    const contrastColorLight = getAccessibleTextColor(lightAccentScale['--accent-9']);
    const contrastColorDark = getAccessibleTextColor(darkAccentScale['--accent-9']);

    // Build the injected CSS for :root (light mode) and .dark (dark mode)
    let cssString = `:root {\n`;
    
    // 1. Inject Accent Scale
    for (const [key, value] of Object.entries(lightAccentScale)) {
      cssString += `  ${key}: ${value};\n`;
    }
    
    // 2. Inject Gray Scale (Light)
    for (let i = 1; i <= 12; i++) {
      cssString += `  --gray-${i}: ${grayScale[`--gray-${i}`]};\n`;
    }

    // 3. Inject Typography
    if (brand.fontFamily) {
      cssString += `  --font-display-custom: ${brand.fontFamily.heading};\n`;
      cssString += `  --font-body-custom: ${brand.fontFamily.body};\n`;
    }

    // 4. Aliases
    cssString += `  --accent-9-contrast: ${contrastColorLight};\n`;
    cssString += `  --accent-solid: ${lightAccentScale['--accent-9']};\n`;
    cssString += `  --accent-surface: ${lightAccentScale['--accent-2']};\n`;
    
    // Categorical Chart Palette (Injected as direct values to ensure SVG resolution)
    cssString += `  --chart-1: ${lightAccentScale['--accent-9']};\n`;
    cssString += `  --chart-2: #3e63dd;\n`; // Indigo 9
    cssString += `  --chart-3: #12a594;\n`; // Teal 9
    cssString += `  --chart-4: #ffc53d;\n`; // Amber 9
    cssString += `  --chart-5: #8b5cf6;\n`; // Purple 9
    cssString += `  --chart-6: #d6409f;\n`; // Pink 9
    cssString += `  --chart-7: #30a46c;\n`; // Green 9
    cssString += `  --chart-8: #f76808;\n`; // Orange 9
    cssString += `  --chart-9: #e5484d;\n`; // Red 9
    cssString += `  --chart-10: #0091ff;\n`; // Sky 9
    
    cssString += `}\n\n`;

    // Dark Mode Injection
    cssString += `.dark, [data-theme='dark'], [data-brand] .dark {\n`;
    for (const [key, value] of Object.entries(darkAccentScale)) {
      cssString += `  ${key}: ${value};\n`;
    }
    
    // Inject Gray Scale (Dark)
    for (let i = 1; i <= 12; i++) {
      cssString += `  --gray-${i}: ${grayScale[`--gray-dark-${i}`]};\n`;
    }

    cssString += `  --accent-9-contrast: ${contrastColorDark};\n`;
    cssString += `  --accent-solid: ${darkAccentScale['--accent-9']};\n`;
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

    // Update the data-brand attribute
    document.documentElement.setAttribute('data-brand', brand.id);

    // Final cleanup of any potential inline style leaks
    const root = document.documentElement;
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
