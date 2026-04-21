import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../../lib/utils';
import './RadioGroup.css';

type RadioGroupSize = '1' | '2' | '3';
type RadioGroupVariant = 'classic' | 'surface' | 'soft';
type RadioColor = 'brand' | 'gray' | 'success' | 'warning' | 'error';

interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  size: RadioGroupSize;
  variant: RadioGroupVariant;
  color: RadioColor;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('RadioGroup components must be used within a RadioGroup.Root');
  }
  return context;
};

/* ─────────────────────────────────────────────────────────
 * 1. RadioGroup.Root
 * ───────────────────────────────────────────────────────── */

export interface RadioGroupRootProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: RadioGroupSize;
  variant?: RadioGroupVariant;
  color?: RadioColor;
  disabled?: boolean;
}

const RadioGroupRoot = React.forwardRef<HTMLDivElement, RadioGroupRootProps>(({ 
  children, 
  value: controlledValue, 
  defaultValue, 
  onValueChange, 
  className,
  name,
  orientation = 'vertical',
  size = '2',
  variant = 'classic',
  color = 'brand',
  disabled,
  ...props
}, ref) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onValueChange: handleValueChange, name, size, variant, color, disabled }}>
      <div 
        ref={ref}
        className={cn(
          'mms-radio-group-root',
          `mms-radio-group-orientation-${orientation}`,
          className
        )}
        role="radiogroup"
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
});

RadioGroupRoot.displayName = 'RadioGroup.Root';

/* ─────────────────────────────────────────────────────────
 * 2. RadioGroup.Item
 * ───────────────────────────────────────────────────────── */

export interface RadioGroupItemProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'children'> {
  value: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const RadioGroupItem = React.forwardRef<HTMLLabelElement, RadioGroupItemProps>(({ 
  value: itemValue, 
  children, 
  className, 
  disabled: itemDisabled,
  id,
  ...props
}, ref) => {
  const { value, onValueChange, name, size, variant, color, disabled: groupDisabled } = useRadioGroup();
  const isChecked = value === itemValue;
  const disabled = itemDisabled || groupDisabled;
  const inputId = id || `radio-${itemValue}`;

  return (
    <label 
      ref={ref}
      className={cn(
        'mms-radio-group-item',
        `mms-radio-group-item-size-${size}`,
        `mms-radio-group-item-variant-${variant}`,
        `mms-radio-group-item-color-${color}`,
        isChecked && 'mms-radio-group-item-checked',
        disabled && 'mms-radio-group-item-disabled',
        className
      )}
      htmlFor={inputId}
      {...props}
    >
      <div className="mms-radio-item-container">
        <input
          type="radio"
          name={name}
          id={inputId}
          className="mms-radio-item-input"
          checked={isChecked}
          disabled={disabled}
          onChange={() => onValueChange?.(itemValue)}
        />
        <span className="mms-radio-item-circle">
          <span className="mms-radio-item-indicator" />
        </span>
      </div>
      {children && <span className="mms-radio-item-label">{children}</span>}
    </label>
  );
});

RadioGroupItem.displayName = 'RadioGroup.Item';

/* ─────────────────────────────────────────────────────────
 * Export Object
 * ───────────────────────────────────────────────────────── */

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};
