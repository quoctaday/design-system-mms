import React from 'react';
import { cn } from '../../../lib/utils';
import './SegmentedControl.css';

export interface SegmentedControlOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  /**
   * List of options to display
   */
  options: SegmentedControlOption[];
  /**
   * Currently selected value
   */
  value: string;
  /**
   * Callback function when selection changes
   */
  onChange: (value: string) => void;
  /**
   * Size of the control
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the control should take full width
   */
  fullWidth?: boolean;
  /**
   * Additional class names
   */
  className?: string;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        'mms-segmented-control', 
        `size-${size}`,
        fullWidth && 'full-width',
        className
      )}
      role="radiogroup"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cn(
            'mms-segmented-item',
            value === option.value && 'active'
          )}
          onClick={() => !option.disabled && onChange(option.value)}
          disabled={option.disabled}
          role="radio"
          aria-checked={value === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
