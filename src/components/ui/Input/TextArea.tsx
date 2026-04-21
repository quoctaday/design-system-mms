import React from 'react';
import { cn } from '../../../lib/utils';
import { TextField } from './TextField';
import './Input.css';

type TextAreaSize = '1' | '2' | '3';
type TextAreaVariant = 'surface' | 'soft';
type TextAreaColor = 'brand' | 'gray' | 'success' | 'warning' | 'error';
type TextAreaRadius = 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextAreaSize;
  variant?: TextAreaVariant;
  color?: TextAreaColor;
  radius?: TextAreaRadius;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

/**
 * Premium TextArea component using the TextField system logic.
 * Supports shorthand slots for icons and semantic status colors.
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ 
    className, 
    size = '2', 
    variant = 'surface', 
    color = 'brand', 
    radius = '4', 
    disabled, 
    leftSlot,
    rightSlot,
    ...props 
  }, ref) => {
    return (
      <TextField.Root 
        size={size as any} 
        variant={variant as any} 
        color={color as any} 
        radius={radius as any} 
        disabled={disabled}
        className={cn('mms-textarea-root', className)}
      >
        {leftSlot && (
          <TextField.Slot className="mms-textarea-slot-top">
            {leftSlot}
          </TextField.Slot>
        )}
        
        <textarea
          ref={ref}
          disabled={disabled}
          className={cn('mms-textfield-input mms-textarea-input')}
          {...props}
        />

        {rightSlot && (
          <TextField.Slot className="mms-textarea-slot-top">
            {rightSlot}
          </TextField.Slot>
        )}
      </TextField.Root>
    );
  }
);

TextArea.displayName = 'TextArea';
