import React, { 
  useState, 
  useContext, 
  createContext, 
  useCallback, 
  useRef, 
  useEffect 
} from 'react';
import { createPortal } from 'react-dom';
import { RiArrowDropDownLine, RiCheckLine } from 'react-icons/ri';
import { cn } from '../../../lib/utils';
import './Select.css';
import '../_internal/base.css';

type SelectVariant = 'classic' | 'surface' | 'soft';

interface SelectContextValue {
  value?: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  disabled?: boolean;
  size: '1' | '2' | '3';
  variant: SelectVariant;
  radius: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
}

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select components must be used within a Select.Root');
  }
  return context;
};

// Root
export interface SelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  size?: '1' | '2' | '3';
  variant?: SelectVariant;
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
}

const SelectRoot: React.FC<SelectProps> = ({ 
  children, 
  value: controlledValue, 
  defaultValue, 
  onValueChange,
  open: controlledOpen,
  onOpenChange,
  disabled,
  size = '2',
  variant = 'surface',
  radius = '4'
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleValueChange = useCallback((newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
    setOpen(false);
  }, [controlledValue, onValueChange]);

  const setOpen = useCallback((newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [controlledOpen, onOpenChange]);

  return (
    <SelectContext.Provider value={{ value, onValueChange: handleValueChange, open, setOpen, triggerRef, disabled, size, variant, radius }}>
      <div className={cn("mms-select-root", disabled && "mms-select-disabled")}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

// Trigger
export interface SelectTriggerProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ 
  children, 
  className, 
  placeholder,
  style,
  disabled: propDisabled
}) => {
  const { open, setOpen, value, triggerRef, disabled: contextDisabled, size, variant, radius } = useSelect();
  const disabled = propDisabled || contextDisabled;

  return (
    <button
      ref={triggerRef}
      type="button"
      className={cn(
        'mms-select-trigger',
        'mms-focus-halo-brand',
        `mms-select-trigger-variant-${variant}`,
        `mms-select-trigger-size-${size}`,
        `mms-select-trigger-radius-${radius}`,
        open && 'mms-select-trigger-open',
        disabled && 'mms-select-trigger-disabled',
        className
      )}
      style={style}
      disabled={disabled}
      onClick={() => setOpen(!open)}
      data-state={open ? 'open' : 'closed'}
    >
      <span className="mms-select-trigger-content">
        {value ? children : (placeholder || 'Select...')}
      </span>
      <span className="mms-select-trigger-icon">
        <RiArrowDropDownLine />
      </span>
    </button>
  );
};

// Value
export const SelectValue: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Portal
export const SelectPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useSelect();
  if (!open) return null;
  return createPortal(children, document.body);
};

// Content
export interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
}

export const SelectContent: React.FC<SelectContentProps> = ({ 
  children, 
  className,
  align = 'left',
  radius: propRadius
}) => {
  const { open, setOpen, triggerRef, radius: contextRadius, size } = useSelect();
  const radius = propRadius || contextRadius;
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      
      setPosition({
        top: rect.bottom + scrollY + 4,
        left: align === 'left' ? rect.left + scrollX : rect.right + scrollX - rect.width,
        width: rect.width
      });
    }
  }, [open, triggerRef, align]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (triggerRef.current?.contains(e.target as Node)) return;
      if (contentRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    if (open) window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen, triggerRef]);

  if (!open) return null;

  return (
    <div 
      ref={contentRef}
      className={cn(
        'mms-select-content', 
        `mms-select-radius-${radius}`,
        `mms-select-size-${size}`,
        className
      )}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        minWidth: Math.max(160, position.width),
        zIndex: 2000
      }}
      data-state={open ? 'open' : 'closed'}
    >
      <div className="mms-select-viewport">
        {children}
      </div>
    </div>
  );
};

// Item
export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const SelectItem: React.FC<SelectItemProps> = ({ 
  value: itemValue, 
  children, 
  className,
  disabled 
}) => {
  const { value, onValueChange, size } = useSelect();
  const isSelected = value === itemValue;

  return (
    <div
      className={cn(
        'mms-select-item',
        'mms-interactive-surface',
        `mms-select-item-size-${size}`,
        isSelected && 'mms-select-item-selected',
        disabled && 'mms-select-item-disabled',
        className
      )}
      onClick={() => !disabled && onValueChange(itemValue)}
      data-state={isSelected ? 'checked' : 'unchecked'}
    >
      <span className="mms-select-item-text">{children}</span>
      {isSelected && (
        <span className="mms-select-item-indicator">
          <RiCheckLine />
        </span>
      )}
    </div>
  );
};

// More structural parts
export const SelectLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mms-select-label">{children}</div>
);

export const SelectSeparator: React.FC = () => (
  <div className="mms-select-separator" />
);

export const SelectGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mms-select-group">{children}</div>
);

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Portal: SelectPortal,
  Content: SelectContent,
  Item: SelectItem,
  Label: SelectLabel,
  Separator: SelectSeparator,
  Group: SelectGroup,
});

export default Select;
