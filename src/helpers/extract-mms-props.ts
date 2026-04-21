import { cn } from '../lib/utils';

/**
 * MMS Prop Extraction Utility
 * Standardizes how common atoms (size, variant, radius) are applied to DOM elements.
 */

export interface MMSBaseProps {
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  variant?: string;
  className?: string;
}

export function extractMMSProps<T extends MMSBaseProps>(
  props: T,
  componentName: string,
  defaults: { size?: string; radius?: string; variant?: string } = {}
) {
  const {
    size = defaults.size,
    radius = defaults.radius,
    variant = defaults.variant,
    className,
    ...rest
  } = props;

  const mmsClasses = cn(
    size && `mms-${componentName}-size-${size}`,
    radius && `mms-${componentName}-radius-${radius}`,
    variant && `mms-${componentName}-variant-${variant}`,
    className
  );

  return {
    mmsClasses,
    restProps: rest,
    // Return individual values if needed for further logic
    size,
    radius,
    variant
  };
}
