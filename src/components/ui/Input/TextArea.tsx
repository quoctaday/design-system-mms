import React from 'react';
import { cn } from '../../../lib/utils';
import './Input.css';

type TextAreaSize = '1' | '2' | '3' | '4';
type TextAreaVariant = 'classic' | 'surface' | 'soft';
type TextAreaColor = 'brand' | 'gray' | 'success' | 'warning' | 'error';
type TextAreaRadius = 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextAreaSize;
  variant?: TextAreaVariant;
  color?: TextAreaColor;
  radius?: TextAreaRadius;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size = '2', variant = 'surface', color = 'brand', radius = '4', disabled, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={cn(
          'mms-textfield-root mms-textarea-root',
          `mms-textfield-size-${size}`,
          `mms-textfield-variant-${variant}`,
          `mms-textfield-color-${color}`,
          `mms-textfield-radius-${radius}`,
          focused && 'mms-textfield-focused',
          disabled && 'mms-textfield-disabled',
          className
        )}
      >
        <textarea
          ref={ref}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn('mms-textfield-input mms-textarea-input')}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
