import React, { useId, useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../../lib/utils';
import './Slider.css';
import '../_internal/base.css';

export interface SliderProps {
  label?: string;
  showValue?: boolean;
  color?: 'brand' | 'success' | 'error' | 'warning' | 'gray';
  variant?: 'surface' | 'soft' | 'classic';
  size?: '1' | '2' | '3';
  radius?: 'none' | '1' | '2' | '3' | '4' | 'full';
  formatValue?: (value: number) => string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | number[];
  value?: number | number[];
  onChange?: (value: number[]) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ 
    className, 
    label, 
    showValue = true, 
    color = 'brand', 
    variant = 'surface',
    size = '2', 
    radius = 'full', 
    disabled, 
    min = 0, 
    max = 100, 
    step = 1,
    value: controlledValue, 
    defaultValue, 
    onChange, 
    formatValue,
    id: userId,
    ...props 
  }, ref) => {
    const defaultId = useId();
    const sliderId = userId || defaultId;
    const trackRef = useRef<HTMLDivElement>(null);
    
    // ── STATE LOGIC ──────────────────────────────────────────
    const [internalValue, setInternalValue] = useState<number[]>(() => {
      const initial = controlledValue ?? defaultValue ?? [min];
      return Array.isArray(initial) ? initial : [initial];
    });

    const values = controlledValue !== undefined 
      ? (Array.isArray(controlledValue) ? controlledValue : [controlledValue])
      : internalValue;

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // ── MECHANICAL CALCULATIONS ──────────────────────────────
    
    const getValueFromPointer = useCallback((e: PointerEvent | React.PointerEvent) => {
      if (!trackRef.current) return 0;
      const rect = trackRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const rawValue = min + percentage * (max - min);
      return Math.round(rawValue / step) * step;
    }, [min, max, step]);

    const handleValueChange = (newValues: number[]) => {
      if (disabled) return;
      const sortedValues = [...newValues].sort((a, b) => a - b);
      if (controlledValue === undefined) {
        setInternalValue(sortedValues);
      }
      if (onChange) {
        onChange(sortedValues);
      }
    };

    // ── POINTER ENGINE (DRAGGING) ────────────────────────────
    
    const handlePointerDown = (e: React.PointerEvent) => {
      if (disabled) return;
      const newValue = getValueFromPointer(e);
      
      // Find closest thumb
      let closestIndex = 0;
      let minDistance = Math.abs(values[0] - newValue);
      
      for (let i = 1; i < values.length; i++) {
        const distance = Math.abs(values[i] - newValue);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      setActiveIndex(closestIndex);
      const nextValues = [...values];
      nextValues[closestIndex] = newValue;
      handleValueChange(nextValues);
      
      // Global Pointer Capture
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (disabled || activeIndex === null) return;
      const newValue = getValueFromPointer(e);
      const nextValues = [...values];
      nextValues[activeIndex] = newValue;
      handleValueChange(nextValues);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      setActiveIndex(null);
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };

    // ── KEYBOARD ENGINE ──────────────────────────────────────
    
    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
      if (disabled) return;
      let newValue = values[index];
      const largeStep = (max - min) / 10;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          newValue = Math.min(max, newValue + step);
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          newValue = Math.max(min, newValue - step);
          break;
        case 'PageUp':
          newValue = Math.min(max, newValue + largeStep);
          break;
        case 'PageDown':
          newValue = Math.max(min, newValue - largeStep);
          break;
        case 'Home':
          newValue = min;
          break;
        case 'End':
          newValue = max;
          break;
        default:
          return;
      }

      e.preventDefault();
      const nextValues = [...values];
      nextValues[index] = newValue;
      handleValueChange(nextValues);
    };

    // ── STYLE COMPUTATIONS ────────────────────────────────────
    
    const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;
    
    const fillStyle = values.length === 1 
      ? { width: `${getPercentage(values[0])}%`, left: 0 }
      : { 
          left: `${getPercentage(values[0])}%`, 
          width: `${getPercentage(values[1]) - getPercentage(values[0])}%` 
        };

    return (
      <div 
        ref={ref}
        className={cn(
          'mms-slider-container', 
          `mms-slider-size-${size}`,
          `mms-slider-color-${color}`,
          `mms-slider-variant-${variant}`,
          `mms-slider-radius-${radius}`,
          disabled && 'mms-slider-disabled',
          className
        )}
      >
        {(label || showValue) && (
          <div className="mms-slider-header">
            {label && <label className="mms-slider-label">{label}</label>}
            {showValue && (
              <span className="mms-slider-value">
                {values.map(v => (formatValue ? formatValue(v) : v)).join(' - ')}
              </span>
            )}
          </div>
        )}
        
        <div 
          className="mms-slider-wrapper"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* TRACK DNA */}
          <div ref={trackRef} className="mms-slider-root">
            <div className="mms-slider-track">
              <div 
                className="mms-slider-range" 
                style={fillStyle}
              />
            </div>
          </div>

          {/* DYNAMIC THUMBS */}
          {values.map((v, index) => (
            <div 
              key={index}
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={v}
              aria-disabled={disabled}
              className={cn(
                'mms-slider-thumb',
                activeIndex === index && 'mms-slider-thumb-active'
              )}
              style={{ left: `${getPercentage(v)}%` }}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}

          {/* HIDDEN INPUTS FOR FORM SYNC */}
          {values.map((v, index) => (
            <input 
              key={`input-${index}`}
              type="hidden" 
              name={index === 0 ? 'min' : 'max'} 
              value={v} 
            />
          ))}
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
