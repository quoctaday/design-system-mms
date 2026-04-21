import React, { 
  useContext, 
  createContext, 
  useRef, 
  useCallback, 
  useState, 
  useMemo,
  useEffect
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/utils';
import { useControllableState, useFloating, useKeyboardListNav } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './DropdownMenu.css';

interface DropdownMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLElement | null>;
  coords: { top: number; left: number; width: number; side: 'top' | 'bottom' | 'left' | 'right' };
  size: '1' | '2';
  radius: string;
  registerItem: (value: string) => () => void;
  highlightedIndex: number;
  items: string[];
  hasIndicators: boolean;
  setHasIndicators: (val: boolean) => void;
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | undefined>(undefined);

const useDropdownMenu = () => {
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenu components must be used within a DropdownMenu.Root');
  return context;
};

// --- Root ---
export interface DropdownMenuRootProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  size?: '1' | '2';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export const DropdownMenuRoot: React.FC<DropdownMenuRootProps> = (props) => {
  const { children, open: propOpen, onOpenChange, defaultOpen, ...mmsBase } = props;
  
  const [open, setOpen] = useControllableState({ prop: propOpen, defaultProp: defaultOpen, onChange: onOpenChange });
  const { triggerRef, contentRef, coords } = useFloating({ open, sideOffset: 8, align: 'start' });
  const { size, radius } = extractMMSProps(mmsBase as any, 'dropdown', { size: '2', radius: 'medium' });

  const [items, setItems] = useState<string[]>([]);
  const registerItem = useCallback((val: string) => {
    setItems(prev => [...prev, val]);
    return () => setItems(prev => prev.filter(i => i !== val));
  }, []);

  const [hasIndicators, setHasIndicators] = useState(false);

  const { highlightedIndex, handleKeyDown } = useKeyboardListNav({
    items,
    active: open,
    onSelect: () => setOpen(false)
  });

  const contextValue = useMemo(() => ({
    open, setOpen, triggerRef, contentRef, coords: coords as any, 
    size: size as any, radius: radius as any,
    items, registerItem, highlightedIndex,
    hasIndicators, setHasIndicators
  }), [open, setOpen, triggerRef, contentRef, coords, size, radius, items, registerItem, highlightedIndex, hasIndicators]);

  return (
    <DropdownMenuContext.Provider value={contextValue}>
      <div className="mms-dropdown-menu-root" onKeyDown={handleKeyDown}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

// --- Trigger ---
export const DropdownMenuTrigger: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { setOpen, open, triggerRef } = useDropdownMenu();
  return React.cloneElement(children, {
    ref: triggerRef,
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      setOpen(!open);
    },
    'aria-haspopup': 'menu',
    'aria-expanded': open,
    'data-state': open ? 'open' : 'closed'
  });
};

// --- Content ---
export interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  width?: number | string;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children, className, width = 200 }) => {
  const { open, contentRef, coords, size, radius, setOpen, hasIndicators } = useDropdownMenu();

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen, contentRef]);

  if (!open) return null;

  return createPortal(
    <div 
      ref={contentRef as any}
      role="menu"
      className={cn(
        'mms-dropdown-menu-content',
        `mms-dropdown-menu-size-${size}`,
        `mms-dropdown-menu-radius-${radius}`,
        hasIndicators && 'mms-dropdown-menu-has-indicators',
        className
      )}
      style={{ 
        position: 'absolute',
        top: coords.top,
        left: coords.left,
        width,
        zIndex: 1000
      }}
      data-side={coords.side}
    >
      <div className="mms-dropdown-menu-viewport">
        {children}
      </div>
    </div>,
    document.body
  );
};

// --- Item Base ---
interface ItemBaseProps {
  children: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  shortcut?: string;
  className?: string;
  value?: string;
  role?: string;
  checked?: boolean;
  indicator?: React.ReactNode;
}

const DropdownMenuItemBase: React.FC<ItemBaseProps> = ({ 
  children, onSelect, disabled, shortcut, className, value: propValue, role = 'menuitem', checked, indicator
}) => {
  const { setOpen, registerItem, highlightedIndex, items } = useDropdownMenu();
  const value = useMemo(() => propValue || (typeof children === 'string' ? children : Math.random().toString()), [propValue, children]);

  useEffect(() => registerItem(value), [value, registerItem]);
  
  const index = items.indexOf(value);
  const isHighlighted = highlightedIndex === index;

  return (
    <div 
      role={role}
      aria-disabled={disabled}
      aria-checked={checked}
      className={cn(
        'mms-dropdown-menu-item',
        isHighlighted && 'mms-dropdown-menu-item-highlighted',
        disabled && 'mms-dropdown-menu-item-disabled',
        className
      )}
      onClick={() => {
        if (disabled) return;
        onSelect?.();
        setOpen(false);
      }}
      data-highlighted={isHighlighted}
    >
      {indicator && <span className="mms-dropdown-menu-item-indicator">{indicator}</span>}
      {children}
      {shortcut && <span className="mms-dropdown-menu-shortcut">{shortcut}</span>}
    </div>
  );
};

// --- Exported Items ---
export const DropdownMenuItem: React.FC<Omit<ItemBaseProps, 'role' | 'checked' | 'indicator'>> = (props) => (
  <DropdownMenuItemBase {...props} />
);

export const DropdownMenuCheckboxItem: React.FC<ItemBaseProps & { checked?: boolean }> = (props) => {
  const { setHasIndicators } = useDropdownMenu();
  useEffect(() => { setHasIndicators(true); }, [setHasIndicators]);
  return (
    <DropdownMenuItemBase 
      {...props} 
      role="menuitemcheckbox" 
      indicator={props.checked ? '✓' : null} 
    />
  );
};

// --- Radio Group ---
const RadioGroupContext = createContext<{ value?: string; onValueChange?: (val: string) => void }>({});

export const DropdownMenuRadioGroup: React.FC<{ children: React.ReactNode, value?: string, onValueChange?: (val: string) => void }> = ({ children, value, onValueChange }) => (
  <RadioGroupContext.Provider value={{ value, onValueChange }}>
    {children}
  </RadioGroupContext.Provider>
);

export const DropdownMenuRadioItem: React.FC<ItemBaseProps & { value: string }> = (props) => {
  const { value: groupValue, onValueChange } = useContext(RadioGroupContext);
  const { setHasIndicators } = useDropdownMenu();
  const isChecked = groupValue === props.value;
  
  useEffect(() => { setHasIndicators(true); }, [setHasIndicators]);

  return (
    <DropdownMenuItemBase 
      {...props} 
      role="menuitemradio" 
      checked={isChecked}
      indicator={isChecked ? '●' : null}
      onSelect={() => {
        props.onSelect?.();
        onValueChange?.(props.value);
      }}
    />
  );
};

// --- Sub-Menu (Advanced) ---
export const DropdownMenuSub: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { size, radius } = useDropdownMenu();
  const [open, setOpen] = useState(false);
  const { triggerRef, contentRef, coords } = useFloating({ open, sideOffset: 4, align: 'start', side: 'right' });
  
  return (
    <div 
      className="mms-dropdown-menu-sub"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          if ((child.type as any).displayName === 'DropdownMenuSubTrigger') {
            return React.cloneElement(child as any, { ref: triggerRef, 'data-state': open ? 'open' : 'closed' });
          }
          if ((child.type as any).displayName === 'DropdownMenuSubContent') {
            return open ? createPortal(
              <div 
                ref={contentRef as any}
                className={cn(
                  'mms-dropdown-menu-content',
                  'mms-dropdown-menu-sub-content',
                  `mms-dropdown-menu-size-${size}`,
                  `mms-dropdown-menu-radius-${radius}`
                )}
                style={{ 
                  position: 'absolute', 
                  top: coords.top, 
                  left: coords.left, 
                  zIndex: 1001, 
                  width: (child.props as any).width || 180 
                }}
                data-side={coords.side}
              >
                <div className="mms-dropdown-menu-viewport">
                  {child.props.children}
                </div>
              </div>,
              document.body
            ) : null;
          }
        }
        return child;
      })}
    </div>
  );
};

export const DropdownMenuSubTrigger = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
  <div ref={ref} className="mms-dropdown-menu-item mms-dropdown-menu-sub-trigger" {...props}>
    <span className="mms-dropdown-menu-item-label">{children}</span>
    <span className="mms-dropdown-menu-sub-icon">›</span>
  </div>
));
(DropdownMenuSubTrigger as any).displayName = 'DropdownMenuSubTrigger';

export const DropdownMenuSubContent: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
(DropdownMenuSubContent as any).displayName = 'DropdownMenuSubContent';

// --- Static Components ---
export const DropdownMenuLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('mms-dropdown-menu-label', className)}>{children}</div>
);

export const DropdownMenuSeparator: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('mms-dropdown-menu-separator', className)} />
);

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator
};

export default DropdownMenu;
