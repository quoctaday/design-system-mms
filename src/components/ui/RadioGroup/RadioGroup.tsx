import React, { createContext, useContext } from 'react';
import { cn } from '../../../lib/utils';
import './RadioGroup.css';

interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('RadioGroup components must be used within a RadioGroup.Root');
  }
  return context;
};

// Root
export interface RadioGroupProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
}

const RadioGroupRoot: React.FC<RadioGroupProps> = ({ 
  children, 
  value: controlledValue, 
  defaultValue, 
  onValueChange, 
  className,
  name,
  orientation = 'vertical'
}) => {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onValueChange: handleValueChange, name }}>
      <div 
        className={cn(
          'mms-radio-group-root',
          `mms-radio-group-orientation-${orientation}`,
          className
        )}
        role="radiogroup"
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

// Item
export interface RadioGroupItemProps {
  value: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ 
  value: itemValue, 
  children, 
  className, 
  disabled,
  id 
}) => {
  const { value, onValueChange, name } = useRadioGroup();
  const isChecked = value === itemValue;
  const inputId = id || `radio-${itemValue}`;

  return (
    <label 
      className={cn(
        'mms-radio-group-item',
        disabled && 'mms-radio-group-item-disabled',
        className
      )}
      htmlFor={inputId}
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
};

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
});

export default RadioGroup;
