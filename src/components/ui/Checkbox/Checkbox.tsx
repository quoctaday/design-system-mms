import React, { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../../lib/utils';
import { RiCheckLine, RiSubtractLine } from 'react-icons/ri';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked' | 'size'> {
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  label?: string;
  size?: '1' | '2';
  color?: 'brand' | 'success' | 'error' | 'warning' | 'gray';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className,
  checked = false,
  onCheckedChange,
  label,
  size = '2',
  color = 'brand',
  radius,
  disabled,
  ...props
}, ref) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const combinedRef = (ref as React.MutableRefObject<HTMLInputElement>) || internalRef;

  useEffect(() => {
    if (combinedRef.current) {
      combinedRef.current.indeterminate = checked === 'indeterminate';
    }
  }, [checked, combinedRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onCheckedChange?.(checked === 'indeterminate' ? true : e.target.checked);
  };

  const isChecked = checked === true;
  const isIndeterminate = checked === 'indeterminate';

  return (
    <label 
      className={cn(
        'mms-checkbox-root',
        `mms-checkbox-size-${size}`,
        `mms-checkbox-color-${color}`,
        disabled && 'mms-checkbox-disabled',
        className
      )}
    >
      <div className="mms-checkbox-container">
        <input
          type="checkbox"
          ref={combinedRef}
          className="mms-checkbox-input"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <div 
          className={cn(
            'mms-checkbox-indicator',
            radius && `mms-checkbox-radius-${radius}`,
            (isChecked || isIndeterminate) && 'mms-checkbox-indicator-checked'
          )}
        >
          {isChecked && <RiCheckLine className="mms-checkbox-icon" />}
          {isIndeterminate && <RiSubtractLine className="mms-checkbox-icon" />}
        </div>
      </div>
      {label && <span className="mms-checkbox-label">{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
