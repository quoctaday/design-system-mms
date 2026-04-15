import React, { createContext, useContext } from 'react';
import { cn } from '../../../lib/utils';

type TextFieldSize = '1' | '2' | '3' | '4';
type TextFieldVariant = 'classic' | 'surface' | 'soft';
type TextFieldColor = 'brand' | 'gray' | 'success' | 'warning' | 'error';
type TextFieldRadius = 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';

interface TextFieldContextValue {
  size: TextFieldSize;
  variant: TextFieldVariant;
  color: TextFieldColor;
  radius: TextFieldRadius;
  disabled?: boolean;
  focused?: boolean;
  onFocusChange?: (focused: boolean) => void;
}

const TextFieldContext = createContext<TextFieldContextValue | undefined>(undefined);

const useTextField = () => {
  const context = useContext(TextFieldContext);
  if (!context) {
    throw new Error('TextField components must be used within a TextField.Root');
  }
  return context;
};

/* ─────────────────────────────────────────────────────────
 * 1. TextField.Root
 * ───────────────────────────────────────────────────────── */

export interface TextFieldRootProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  color?: TextFieldColor;
  radius?: TextFieldRadius;
  disabled?: boolean;
}

const TextFieldRoot = React.forwardRef<HTMLDivElement, TextFieldRootProps>(
  ({ className, size = '2', variant = 'surface', color = 'brand', radius = '4', disabled, children, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);

    return (
      <TextFieldContext.Provider value={{ size, variant, color, radius, disabled, focused, onFocusChange: setFocused }}>
        <div
          ref={ref}
          className={cn(
            'mms-textfield-root',
            `mms-textfield-size-${size}`,
            `mms-textfield-variant-${variant}`,
            `mms-textfield-color-${color}`,
            `mms-textfield-radius-${radius}`,
            focused && 'mms-textfield-focused',
            disabled && 'mms-textfield-disabled',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TextFieldContext.Provider>
    );
  }
);
TextFieldRoot.displayName = 'TextField.Root';

/* ─────────────────────────────────────────────────────────
 * 2. TextField.Slot
 * ───────────────────────────────────────────────────────── */

export interface TextFieldSlotProps extends React.HTMLAttributes<HTMLDivElement> {}

const TextFieldSlot = React.forwardRef<HTMLDivElement, TextFieldSlotProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mms-textfield-slot', className)}
        {...props}
      />
    );
  }
);
TextFieldSlot.displayName = 'TextField.Slot';

/* ─────────────────────────────────────────────────────────
 * 3. TextField.Input
 * ───────────────────────────────────────────────────────── */

export interface TextFieldInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {}

const TextFieldInput = React.forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ className, disabled: disabledProp, onFocus, onBlur, ...props }, ref) => {
    const { disabled: contextDisabled, onFocusChange } = useTextField();
    const disabled = disabledProp || contextDisabled;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      onFocusChange?.(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onFocusChange?.(false);
      onBlur?.(e);
    };

    return (
      <input
        ref={ref}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn('mms-textfield-input', className)}
        {...props}
      />
    );
  }
);
TextFieldInput.displayName = 'TextField.Input';

/* ─────────────────────────────────────────────────────────
 * Export Object
 * ───────────────────────────────────────────────────────── */

export const TextField = {
  Root: TextFieldRoot,
  Slot: TextFieldSlot,
  Input: TextFieldInput,
};

export default TextField;
