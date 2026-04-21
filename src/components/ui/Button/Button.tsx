import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import './Button.css';
import '../_internal/base.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'soft' | 'outline' | 'ghost' | 'surface';
  color?: 'brand' | 'success' | 'error' | 'warning' | 'orange' | 'blue' | 'purple' | 'sky' | 'pink' | 'teal' | 'secondary' | 'black' | 'gray';
  size?: '1' | '2' | '3' | '4';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'solid',
  color = 'brand',
  size = '2',
  radius,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'mms-button',
        'mms-focus-halo',
        `mms-focus-halo-${color}`,
        `mms-button-variant-${variant}`,
        `mms-button-color-${color}`,
        `mms-button-size-${size}`,
        radius && `mms-button-radius-${radius}`,
        loading && 'mms-button-loading',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="mms-button-spinner">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
            <path d="M12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      ) : (
        leftIcon && <span className="mms-button-icon mms-button-icon-left">{leftIcon}</span>
      )}
      <span className="mms-button-content">{children}</span>
      {!loading && rightIcon && (
        <span className="mms-button-icon mms-button-icon-right">{rightIcon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
