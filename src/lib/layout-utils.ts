import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type Responsive<T> = T | {
  initial?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

/**
 * Get responsive class names for a given prop and prefix.
 * @example getResponsiveClass('gap', 'wds-r-gap', { initial: '2', md: '5' }) 
 * => ['wds-r-gap-2', 'wds-r-md-gap-5']
 */
export function getResponsiveClass<T extends string | number | undefined>(
  propName: string,
  classPrefix: string,
  value: Responsive<T>
): string[] {
  if (value === undefined) return [];

  if (typeof value !== 'object') {
    return [`${classPrefix}-${value}`];
  }

  const classes: string[] = [];
  const bps = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'] as const;

  bps.forEach((bp) => {
    const bpValue = value[bp];
    if (bpValue !== undefined) {
      if (bp === 'initial') {
        classes.push(`${classPrefix}-${bpValue}`);
      } else {
        // Mapping md to wds-r-md-gap-X
        // classPrefix is usually wds-r-gap
        // result: wds-r-md-gap-X
        const parts = classPrefix.split('-'); // ['wds', 'r', 'gap']
        const prefixBase = parts.slice(0, 2).join('-'); // 'wds-r'
        const propPart = parts.slice(2).join('-'); // 'gap'
        classes.push(`${prefixBase}-${bp}-${propPart}-${bpValue}`);
      }
    }
  });

  return classes;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
