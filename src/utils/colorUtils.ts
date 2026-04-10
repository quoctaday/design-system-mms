import chroma from 'chroma-js';

export { chroma };

/**
 * Returns the WCAG contrast ratio between two colors.
 */
export function getContrastRatio(fg: string, bg: string): number {
  return chroma.contrast(fg, bg);
}

/**
 * Returns 'Pass' or 'Fail' based on WCAG 2.0 AA standard (4.5:1).
 */
export function getWCAGStatus(ratio: number): 'Pass' | 'Fail' | 'AA Large' {
  if (ratio >= 4.5) return 'Pass';
  if (ratio >= 3.0) return 'AA Large';
  return 'Fail';
}

export interface ColorScale {
  [key: string]: string;
}

/**
 * Generates a 12-step Radix-like color scale from a single base color.
 * 
 * Logic mapping (Calibrated for Radix UI standards):
 * 1: App background
 * 2: Subtle background
 * 3: UI component background (Soft state)
 * 4: Hovered UI component background
 * 5: Active UI component background
 * 6: Subtle border
 * 7: UI element border
 * 8: Hover border
 * 9: Solid / Base
 * 10: Hover solid
 * 11: Low contrast text
 * 12: High contrast text
 */
export function generateRadixScale(baseColor: string, prefix: string = '--brand'): ColorScale {
  const c = chroma(baseColor);
  const hue = c.get('hcl.h');
  const chromaVal = c.get('hcl.c');

  const scale: ColorScale = {};

  // --- Solid Scale ---
  // Steps 1 & 2: Very light backgrounds
  scale[`${prefix}-1`] = chroma.hcl(hue, Math.min(chromaVal * 0.1, 5), 99).hex();
  scale[`${prefix}-2`] = chroma.hcl(hue, Math.min(chromaVal * 0.15, 8), 97).hex();

  // Step 3, 4, 5: UI backgrounds
  scale[`${prefix}-3`] = chroma.hcl(hue, Math.min(chromaVal * 0.2, 12), 94).hex();
  scale[`${prefix}-4`] = chroma.hcl(hue, Math.min(chromaVal * 0.3, 16), 90).hex();
  scale[`${prefix}-5`] = chroma.hcl(hue, Math.min(chromaVal * 0.4, 20), 86).hex();

  // Step 6, 7, 8: Borders
  scale[`${prefix}-6`] = chroma.hcl(hue, Math.min(chromaVal * 0.5, 30), 82).hex();
  scale[`${prefix}-7`] = chroma.hcl(hue, Math.min(chromaVal * 0.6, 40), 74).hex();
  scale[`${prefix}-8`] = chroma.hcl(hue, Math.min(chromaVal * 0.7, 50), 66).hex();

  // Step 9: Base Solid
  scale[`${prefix}-9`] = c.hex();

  // Step 10: Hover Solid (Darker)
  scale[`${prefix}-10`] = c.darken(0.4).hex();

  // Step 11: Low contrast text
  scale[`${prefix}-11`] = chroma.hcl(hue, Math.max(chromaVal * 0.8, 40), 45).hex();

  // Step 12: High contrast text
  scale[`${prefix}-12`] = chroma.hcl(hue, Math.max(chromaVal * 0.9, 50), 18).hex();

  // --- Alpha Scale (Translating solid steps to transparent equivalents) ---
  // We use step 9 as the color base and apply progressively higher alpha
  const alphaValues = [0.02, 0.05, 0.08, 0.12, 0.18, 0.25, 0.35, 0.5, 0.7, 0.8, 0.9, 0.95];
  
  alphaValues.forEach((alpha, index) => {
    scale[`${prefix}-a${index + 1}`] = c.alpha(alpha).css();
  });

  // Handle Legacy Mappings (50-800) for backward compatibility
  scale[`${prefix}-50`] = scale[`${prefix}-2`];
  scale[`${prefix}-100`] = scale[`${prefix}-3`];
  scale[`${prefix}-200`] = scale[`${prefix}-4`];
  scale[`${prefix}-300`] = scale[`${prefix}-5`];
  scale[`${prefix}-400`] = scale[`${prefix}-6`];
  scale[`${prefix}-500`] = scale[`${prefix}-9`];
  scale[`${prefix}-600`] = scale[`${prefix}-10`];
  scale[`${prefix}-700`] = scale[`${prefix}-11`];
  scale[`${prefix}-800`] = scale[`${prefix}-12`];

  // Specific legacy alpha aliases
  scale[`${prefix}-alpha-16`] = c.alpha(0.16).css();
  scale[`${prefix}-alpha-10`] = c.alpha(0.10).css();
  scale[`${prefix}-alpha-4`] = c.alpha(0.04).css();

  return scale;
}

/**
 * Generates a 12-step Radix-like color scale for DARK MODE from a single base color.
 */
export function generateDarkRadixScale(baseColor: string, prefix: string = '--brand'): ColorScale {
  const c = chroma(baseColor);
  const hue = c.get('hcl.h');
  const chromaVal = c.get('hcl.c');

  const scale: ColorScale = {};

  // Step 1 & 2: Very dark backgrounds
  scale[`${prefix}-1`] = chroma.hcl(hue, Math.min(chromaVal * 0.1, 5), 10).hex();
  scale[`${prefix}-2`] = chroma.hcl(hue, Math.min(chromaVal * 0.15, 8), 12).hex();

  // Step 3, 4, 5: UI backgrounds
  scale[`${prefix}-3`] = chroma.hcl(hue, Math.min(chromaVal * 0.2, 12), 16).hex();
  scale[`${prefix}-4`] = chroma.hcl(hue, Math.min(chromaVal * 0.3, 16), 20).hex();
  scale[`${prefix}-5`] = chroma.hcl(hue, Math.min(chromaVal * 0.4, 20), 24).hex();

  // Step 6, 7, 8: Borders
  scale[`${prefix}-6`] = chroma.hcl(hue, Math.min(chromaVal * 0.5, 30), 28).hex();
  scale[`${prefix}-7`] = chroma.hcl(hue, Math.min(chromaVal * 0.6, 40), 36).hex();
  scale[`${prefix}-8`] = chroma.hcl(hue, Math.min(chromaVal * 0.7, 50), 46).hex();

  // Step 9: Base Solid
  scale[`${prefix}-9`] = c.hex();

  // Step 10: Hover Solid (Lighter in dark mode)
  scale[`${prefix}-10`] = c.brighten(0.4).hex();

  // Step 11: Low contrast text
  scale[`${prefix}-11`] = chroma.hcl(hue, Math.max(chromaVal * 0.8, 40), 75).hex();

  // Step 12: High contrast text
  scale[`${prefix}-12`] = chroma.hcl(hue, Math.max(chromaVal * 0.9, 50), 96).hex();

  // --- Alpha Scale ---
  const alphaValues = [0.02, 0.05, 0.1, 0.15, 0.22, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
  alphaValues.forEach((alpha, index) => {
    scale[`${prefix}-a${index + 1}`] = c.alpha(alpha).css();
  });

  return scale;
}

/**
 * Calculates accessible text color (White or Black) for a solid background.
 */
export function getAccessibleTextColor(bgColor: string): string {
  // We use a 3.0 threshold (WCAG non-text standard) to favor White text on saturated action colors.
  // Saturated blues/greens like Unipay/OCB look better with White even if they are below 4.5.
  return chroma.contrast(bgColor, 'white') >= 3.0 ? '#ffffff' : '#000000';
}
