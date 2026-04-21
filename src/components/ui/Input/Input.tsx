import React, { forwardRef } from 'react';
import { TextField } from './TextField';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'surface' | 'soft';
  color?: 'brand' | 'success' | 'error' | 'warning' | 'gray';
  size?: '1' | '2' | '3';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'surface',
  color = 'brand',
  size = '2',
  radius = '4',
  leftSlot,
  rightSlot,
  disabled,
  ...props
}, ref) => {
  return (
    <TextField.Root 
      variant={variant} 
      color={color} 
      size={size} 
      radius={radius} 
      disabled={disabled}
    >
      {leftSlot && <TextField.Slot side="left">{leftSlot}</TextField.Slot>}
      
      <TextField.Input
        ref={ref}
        {...props}
      />
      
      {rightSlot && <TextField.Slot side="right">{rightSlot}</TextField.Slot>}
    </TextField.Root>
  );
});

Input.displayName = 'Input';

export default Input;
