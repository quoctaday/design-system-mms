import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'surface' | 'classic' | 'soft';
  color?: 'brand' | 'success' | 'error' | 'warning' | 'gray';
  size?: '1' | '2' | '3';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  variant = 'surface',
  color = 'brand',
  size = '2',
  radius = 'medium',
  leftSlot,
  rightSlot,
  disabled,
  ...props
}, ref) => {
  return (
    <div
      className={cn(
        'mms-input-wrapper',
        `mms-input-variant-${variant}`,
        `mms-input-color-${color}`,
        `mms-input-size-${size}`,
        `mms-input-radius-${radius}`,
        disabled && 'mms-input-disabled',
        className
      )}
    >
      {leftSlot && <div className="mms-input-slot">{leftSlot}</div>}
      
      <input
        ref={ref}
        className="mms-input-control"
        disabled={disabled}
        {...props}
      />
      
      {rightSlot && <div className="mms-input-slot">{rightSlot}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
