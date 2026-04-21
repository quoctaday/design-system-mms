import React, { useId } from 'react';
import { cn } from '../../../lib/utils';
import './Switch.css';
import '../_internal/base.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: '1' | '2' | '3';
  color?: 'brand' | 'success' | 'error' | 'warning' | 'gray';
}

/**
 * MMS Switch - IRONCLAD EDITION (Strict Radix Parity)
 * A premium toggle following Radix Themes 3.0 specs: 1.75x width ratio and 5-layer shadows.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, size = '2', color = 'brand', disabled, checked, defaultChecked, onChange, ...props }, ref) => {
    const id = useId();
    const switchId = props.id || id;

    return (
      <label 
        className={cn(
          'mms-switch-wrapper',
          `mms-switch-size-${size}`,
          `mms-switch-color-${color}`,
          disabled && 'mms-switch-disabled',
          className
        )}
        htmlFor={switchId}
      >
        <div className="mms-switch-root">
          <input
            {...props}
            type="checkbox"
            id={switchId}
            className="mms-switch-input"
            ref={ref}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            disabled={disabled}
          />
          <span className="mms-switch-track">
            <span className="mms-switch-thumb" />
          </span>
        </div>
        {label && <span className="mms-switch-label">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
