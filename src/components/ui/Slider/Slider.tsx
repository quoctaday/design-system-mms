import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../../../lib/utils';
import './Slider.css';
import '../_internal/base.css';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  variant?: 'surface' | 'classic' | 'soft';
  color?: 'brand' | 'success' | 'warning' | 'error' | 'gray' | 'blue' | 'purple' | 'orange' | 'pink' | 'teal' | 'indigo';
  size?: '1' | '2' | '3';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
  showValue?: boolean;
  label?: string;
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  variant = 'surface',
  color = 'brand',
  size = '2',
  radius = 'full',
  showValue = false,
  label,
  className,
  onChange,
  disabled,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue! : internalValue;

  const percentage = ((value - min) / (max - min)) * 100;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={cn(
      'mms-slider-container', 
      `mms-slider-size-${size}`, 
      `mms-slider-variant-${variant}`,
      `mms-slider-color-${color}`,
      className
    )}>
      {(label || showValue) && (
        <div className="mms-slider-header">
          {label && <span className="mms-slider-label">{label}</span>}
          {showValue && <span className="mms-slider-value">{value}</span>}
        </div>
      )}
      
      <div 
        className={cn(
          'mms-slider-wrapper',
          `mms-slider-radius-${radius}`,
          disabled && 'mms-slider-disabled'
        )}
      >
        <div className="mms-slider-track">
          <div 
            className="mms-slider-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleInput}
          disabled={disabled}
          className="mms-slider-native-input"
          {...props}
        />
        
        <div 
          className="mms-slider-thumb"
          style={{ left: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Slider;
