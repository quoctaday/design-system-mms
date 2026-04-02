import chroma from 'chroma-js';

export interface ColorScale {
  [key: string]: string;
}

/**
 * Generates a 12-step Radix-like color scale from a single base color.
 * 
 * Logic mapping (Approximate for Radix UI):
 * 1: App background (L=99)
 * 2: Subtle background (L=97)
 * 3: UI component background (L=94)
 * 4: Hovered UI component background (L=90)
 * 5: Active UI component background (L=86)
 * 6: Subtle border (L=80)
 * 7: Border (L=72)
 * 8: Hover border (L=64)
 * 9: Solid / Base (The actual color)
 * 10: Hover solid (L-5%)
 * 11: Low contrast text (Saturated, L=35-45)
 * 12: High contrast text (Very dark, L=10-15)
 */
export function generateRadixScale(baseColor: string, prefix: string = '--brand'): ColorScale {
  const c = chroma(baseColor);
  const hue = c.get('hcl.h');
  const chromaVal = c.get('hcl.c');

  // We use HCL for more perceptually uniform scales
  const scale: ColorScale = {};

  // Step 1 & 2: Very light backgrounds
  scale[`${prefix}-1`] = chroma.hcl(hue, Math.min(chromaVal * 0.1, 5), 99).hex();
  scale[`${prefix}-2`] = chroma.hcl(hue, Math.min(chromaVal * 0.15, 8), 97.5).hex();

  // Step 3, 4, 5: UI backgrounds
  scale[`${prefix}-3`] = chroma.hcl(hue, Math.min(chromaVal * 0.3, 15), 95).hex();
  scale[`${prefix}-4`] = chroma.hcl(hue, Math.min(chromaVal * 0.4, 20), 91).hex();
  scale[`${prefix}-5`] = chroma.hcl(hue, Math.min(chromaVal * 0.5, 25), 87).hex();

  // Step 6, 7, 8: Borders
  scale[`${prefix}-6`] = chroma.hcl(hue, Math.min(chromaVal * 0.6, 35), 80).hex();
  scale[`${prefix}-7`] = chroma.hcl(hue, Math.min(chromaVal * 0.7, 45), 70).hex();
  scale[`${prefix}-8`] = chroma.hcl(hue, Math.min(chromaVal * 0.8, 55), 60).hex();

  // Step 9: Base Solid
  scale[`${prefix}-9`] = c.hex();

  // Step 10: Hover Solid (Darker)
  scale[`${prefix}-10`] = c.darken(0.5).hex();

  // Step 11: Low contrast text (Typically readable on step 1/2)
  scale[`${prefix}-11`] = chroma.hcl(hue, Math.max(chromaVal * 0.8, 40), 45).hex();

  // Step 12: High contrast text
  scale[`${prefix}-12`] = chroma.hcl(hue, Math.max(chromaVal * 0.9, 50), 15).hex();

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

  // Alpha variants (Step 9 with opacity)
  scale[`${prefix}-alpha-16`] = c.alpha(0.16).css();
  scale[`${prefix}-alpha-10`] = c.alpha(0.10).css();
  scale[`${prefix}-alpha-4`] = c.alpha(0.04).css();

  return scale;
}

/**
 * Calculates accessible text color (White or Black) for a solid background.
 */
export function getAccessibleTextColor(bgColor: string): string {
  return chroma.contrast(bgColor, 'white') >= 4.5 ? '#ffffff' : '#000000';
}
