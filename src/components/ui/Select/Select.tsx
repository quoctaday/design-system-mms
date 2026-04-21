import React, { 
  createContext, 
  useContext, 
  useCallback, 
  useState,
  useMemo,
  useEffect
} from 'react';
import { createPortal } from 'react-dom';
import { RiArrowDownSLine, RiCheckFill } from 'react-icons/ri';
import { cn } from '../../../lib/utils';
import { Separator } from '../Separator/Separator';
import { useControllableState, useFloating, useKeyboardListNav } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './Select.css';

type SelectVariant = 'surface' | 'soft';

interface SelectContextValue {
  value?: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  coords: { top: number; left: number; width: number };
  size: '1' | '2' | '3';
  variant: SelectVariant;
  radius: string;
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
  items: string[];
  registerItem: (value: string) => () => void;
}

const SelectContext = createContext<SelectContextValue | undefined>(undefined);
const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('Select components must be used within a Select.Root');
  return context;
};

// --- Root ---
export interface SelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  full?: boolean; // Thêm prop full
  size?: '1' | '2' | '3';
  variant?: SelectVariant;
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

const SelectRoot: React.FC<SelectProps> = (props) => {
  const { children, disabled, full, value: propValue, defaultValue, onValueChange, open: propOpen, onOpenChange, ...mmsBase } = props;
  
  const [value, setValue] = useControllableState({ prop: propValue, defaultProp: defaultValue, onChange: onValueChange });
  const [open, setOpen] = useControllableState({ prop: propOpen, defaultProp: false, onChange: onOpenChange });
  
  const { mmsClasses, size, variant, radius } = extractMMSProps(mmsBase as any, 'select-trigger', { size: '2', variant: 'surface', radius: 'medium' });
  const { triggerRef, contentRef, coords } = useFloating({ open });
  
  const [items, setItems] = useState<string[]>([]);
  const registerItem = useCallback((val: string) => {
    setItems(prev => [...prev, val]);
    return () => setItems(prev => prev.filter(i => i !== val));
  }, []);

  const { highlightedIndex, setHighlightedIndex, handleKeyDown } = useKeyboardListNav({
    items,
    active: open,
    onSelect: (val) => {
      setValue(val);
      setOpen(false);
    }
  });

  const contextValue = useMemo(() => ({
    value, onValueChange: setValue, open, setOpen,
    triggerRef: triggerRef as any, contentRef: contentRef as any,
    coords,
    size: size as any, variant: variant as any, radius: radius as any,
    highlightedIndex, setHighlightedIndex,
    items, registerItem
  }), [value, setValue, open, setOpen, triggerRef, contentRef, coords, size, variant, radius, highlightedIndex, items, registerItem]);

  return (
    <SelectContext.Provider value={contextValue}>
      <div 
        className={cn(
          "mms-select-root", 
          disabled && "mms-select-disabled",
          full && "mms-select-root-full" // Áp dụng class full
        )}
        onKeyDown={handleKeyDown}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};

// --- Trigger ---
export const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    const { open, setOpen, triggerRef, size, variant, radius, disabled } = useSelect();

    return (
      <button
        ref={(node) => {
          (triggerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        type="button"
        className={cn(
          'mms-select-trigger',
          'mms-focus-halo-brand',
          `mms-select-trigger-variant-${variant}`,
          `mms-select-trigger-size-${size}`,
          `mms-select-trigger-radius-${radius}`,
          className
        )}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        data-state={open ? 'open' : 'closed'}
        {...props}
      >
        <span className="mms-select-trigger-content">{children}</span>
        <span className="mms-select-trigger-icon">
          <RiArrowDownSLine />
        </span>
      </button>
    );
  }
);

// --- Portal ---
export const SelectPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useSelect();
  if (!open) return null;
  return createPortal(children, document.body);
};

// --- Content ---
export const SelectContent = React.forwardRef<HTMLDivElement, { children: React.ReactNode, className?: string }>(
  ({ children, className }, ref) => {
    const { open, contentRef, radius, size, coords } = useSelect();

    if (!open) return null;

    return (
      <div 
        ref={(node) => {
          (contentRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={cn(
          'mms-select-content', 
          `mms-select-radius-${radius}`,
          `mms-select-size-${size}`,
          className
        )}
        style={{
          position: 'absolute',
          top: coords.top + 4,
          left: coords.left,
          minWidth: coords.width,
          zIndex: 2000
        }}
        data-state={open ? 'open' : 'closed'}
      >
        <div className="mms-select-viewport">
          {children}
        </div>
      </div>
    );
  }
);

// --- Item ---
export const SelectItem: React.FC<{ value: string, children: React.ReactNode, className?: string, disabled?: boolean }> = ({ 
  value: itemValue, children, className, disabled 
}) => {
  const { value, onValueChange, size, highlightedIndex, setHighlightedIndex, items, registerItem } = useSelect();
  
  useEffect(() => registerItem(itemValue), [itemValue, registerItem]);
  
  const index = items.indexOf(itemValue);
  const isSelected = value === itemValue;
  const isHighlighted = highlightedIndex === index;

  return (
    <div
      className={cn(
        'mms-select-item',
        'mms-interactive-surface',
        `mms-select-item-size-${size}`,
        isSelected && 'mms-select-item-selected',
        isHighlighted && 'mms-select-item-highlighted',
        disabled && 'mms-select-item-disabled',
        className
      )}
      onClick={() => !disabled && onValueChange(itemValue)}
      onMouseEnter={() => !disabled && setHighlightedIndex(index)}
      data-state={isSelected ? 'checked' : 'unchecked'}
      data-highlighted={isHighlighted ? '' : undefined}
    >
      <span className="mms-select-item-text">{children}</span>
      {isSelected && (
        <span className="mms-select-item-indicator">
          <RiCheckFill />
        </span>
      )}
    </div>
  );
};

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Portal: SelectPortal,
  Content: SelectContent,
  Item: SelectItem,
  Label: ({ children }: any) => (
    <div className="mms-select-label px-2 py-1.5 text-[10px] uppercase font-bold text-gray-9 tracking-[0.05em]">
      {children}
    </div>
  ),
  Separator: () => <Separator className="mms-select-separator my-1" size="1" />,
  Group: ({ children }: any) => <div className="mms-select-group">{children}</div>,
});

export default Select;
