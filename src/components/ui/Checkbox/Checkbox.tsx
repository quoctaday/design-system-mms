import React, { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../../lib/utils';
import { RiCheckLine, RiSubtractLine } from 'react-icons/ri';
import './Checkbox.css';
import '../_internal/base.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked' | 'size'> {
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  label?: string;
  color?: 'brand' | 'success' | 'error' | 'warning' | 'gray';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  size?: '1' | '2' | '3';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className,
  checked = false,
  onCheckedChange,
  label,
  color = 'brand',
  radius,
  size = '2',
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
        'mms-checkbox-wrapper',
        `mms-checkbox-size-${size}`,
        disabled && 'mms-checkbox-disabled',
        className
      )}
    >
      <div className={cn(
        'mms-checkbox-box',
        `mms-checkbox-color-${color}`,
        radius && `mms-checkbox-radius-${radius}`
      )}>
        <input
          type="checkbox"
          ref={combinedRef}
          className="mms-checkbox-input"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <div className="mms-checkbox-indicator">
          {isChecked && <RiCheckLine className="mms-checkbox-icon" />}
          {isIndeterminate && <RiSubtractLine className="mms-checkbox-icon" />}
        </div>
      </div>
      {label && <span className="mms-checkbox-label">{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
