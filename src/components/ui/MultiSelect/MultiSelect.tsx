import React, { 
  useState, 
  useContext, 
  createContext, 
  useCallback, 
  useRef, 
  useEffect,
  useMemo
} from 'react';
import { createPortal } from 'react-dom';
import { RiArrowDropDownLine, RiCheckLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { cn } from '../../../lib/utils';
import './MultiSelect.css';

interface MultiSelectContextValue {
  values: string[];
  onValuesChange: (values: string[]) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  disabled?: boolean;
  size: '1' | '2' | '3';
  radius: 'none' | 'small' | 'medium' | 'large' | 'full';
  variant: 'surface' | 'soft';
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const MultiSelectContext = createContext<MultiSelectContextValue | undefined>(undefined);

const useMultiSelect = () => {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error('MultiSelect components must be used within a MultiSelect.Root');
  }
  return context;
};

// Root
export interface MultiSelectProps {
  children: React.ReactNode;
  values?: string[];
  defaultValue?: string[];
  onValuesChange?: (values: string[]) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  size?: '1' | '2' | '3';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  variant?: 'surface' | 'soft';
}

const MultiSelectRoot: React.FC<MultiSelectProps> = ({ 
  children, 
  values: controlledValues, 
  defaultValue = [], 
  onValuesChange,
  open: controlledOpen,
  onOpenChange,
  disabled,
  size = '2',
  radius = 'medium',
  variant = 'surface'
}) => {
  const [uncontrolledValues, setUncontrolledValues] = useState<string[]>(defaultValue);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const values = controlledValues !== undefined ? controlledValues : uncontrolledValues;
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleValuesChange = useCallback((newValues: string[]) => {
    if (controlledValues === undefined) {
      setUncontrolledValues(newValues);
    }
    onValuesChange?.(newValues);
  }, [controlledValues, onValuesChange]);

  const setOpen = useCallback((newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
    if (!newOpen) setSearchTerm(''); // Reset search when closing
  }, [controlledOpen, onOpenChange]);

  return (
    <MultiSelectContext.Provider value={{ 
      values, 
      onValuesChange: handleValuesChange, 
      open, 
      setOpen, 
      triggerRef, 
      disabled, 
      size, 
      radius,
      variant,
      searchTerm,
      setSearchTerm
    }}>
      {children}
    </MultiSelectContext.Provider>
  );
};

// Tag (The Interactive Indicator)
interface MultiSelectTagProps {
  children: React.ReactNode;
  onRemove?: () => void;
}

const MultiSelectTag: React.FC<MultiSelectTagProps> = ({ children, onRemove }) => {
  const { size, radius } = useMultiSelect();
  return (
    <div className={cn(
      "mms-multi-select-chip", 
      `mms-multi-select-chip-size-${size}`,
      `mms-multi-select-trigger-radius-${radius}` // Sync radius
    )}>
      <span className="mms-multi-select-chip-text">{children}</span>
      {onRemove && (
        <span 
          className="mms-multi-select-chip-remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <RiCloseLine />
        </span>
      )}
    </div>
  );
};

// Trigger
export interface MultiSelectTriggerProps {
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  maxChips?: number;
}

export const MultiSelectTrigger: React.FC<MultiSelectTriggerProps> = ({ 
  className, 
  placeholder = 'Select options...',
  style,
  disabled: propDisabled,
  maxChips = 3
}) => {
  const { open, setOpen, values, triggerRef, disabled: contextDisabled, size, radius, variant, onValuesChange } = useMultiSelect();
  const disabled = propDisabled || contextDisabled;

  const handleRemoveValue = (valueToRemove: string) => {
    onValuesChange(values.filter(v => v !== valueToRemove));
  };

  return (
    <button
      ref={triggerRef}
      type="button"
      className={cn(
        'mms-multi-select-trigger',
        `mms-multi-select-trigger-size-${size}`,
        `mms-multi-select-trigger-radius-${radius}`,
        `mms-multi-select-trigger-variant-${variant}`,
        open && 'mms-multi-select-trigger-open',
        disabled && 'mms-multi-select-trigger-disabled',
        className
      )}
      style={style}
      disabled={disabled}
      onClick={() => setOpen(!open)}
    >
      <div className="mms-multi-select-trigger-content">
        {values.length > 0 ? (
          <>
            {values.slice(0, maxChips).map(val => (
              <MultiSelectTag key={val} onRemove={() => handleRemoveValue(val)}>
                {val}
              </MultiSelectTag>
            ))}
            {values.length > maxChips && (
              <MultiSelectTag>
                +{values.length - maxChips}
              </MultiSelectTag>
            )}
          </>
        ) : (
          <span className="mms-multi-select-placeholder">{placeholder}</span>
        )}
      </div>
      <span className="mms-multi-select-trigger-icon">
        <RiArrowDropDownLine />
      </span>
    </button>
  );
};

// Portal
export const MultiSelectPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useMultiSelect();
  if (!open) return null;
  return createPortal(children, document.body);
};

// Content
export interface MultiSelectContentProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
  showSearch?: boolean;
  showClearAll?: boolean;
}

export const MultiSelectContent: React.FC<MultiSelectContentProps> = ({ 
  children, 
  className,
  align = 'left',
  showSearch = true,
  showClearAll = true
}) => {
  const { open, setOpen, triggerRef, radius, size, searchTerm, setSearchTerm, values, onValuesChange } = useMultiSelect();
  const contentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8, // Standard Spacing-8
        left: align === 'left' ? rect.left + window.scrollX : rect.right + window.scrollX - rect.width,
        width: rect.width
      });
    }
  }, [open, triggerRef, align]);

  // Ironclad: Focus search input after positioning to prevent page jump
  useEffect(() => {
    if (open && position.top !== 0 && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [open, position.top]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (triggerRef.current?.contains(e.target as Node)) return;
      if (contentRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    if (open) window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen, triggerRef]);

  return (
    <div 
      ref={contentRef}
      className={cn(
        'mms-multi-select-content', 
        `mms-multi-select-radius-${radius}`,
        `mms-multi-select-content-size-${size}`,
        className
      )}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        minWidth: `max(${position.width}px, var(--size-10))`,
        zIndex: 2000,
        opacity: position.top === 0 ? 0 : 1, // Prevent flickering at (0,0)
        pointerEvents: position.top === 0 ? 'none' : 'auto'
      }}
    >
      {showSearch && (
        <div className="mms-multi-select-search-container">
          <RiSearchLine className="mms-multi-select-search-icon" />
          <input 
            ref={searchInputRef}
            className="mms-multi-select-search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <div className="mms-multi-select-viewport">
        {children}
      </div>
      {showClearAll && values.length > 0 && (
        <div className="mms-multi-select-footer">
          <span className="mms-multi-select-item-text" style={{ fontSize: 'var(--font-size-1)', opacity: 0.7 }}>
            {values.length} selected
          </span>
          <span 
            className="mms-multi-select-clear-all"
            onClick={() => onValuesChange([])}
          >
            Clear All
          </span>
        </div>
      )}
    </div>
  );
};

// Item
export interface MultiSelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const MultiSelectItem: React.FC<MultiSelectItemProps> = ({ 
  value: itemValue, 
  children, 
  className,
  disabled 
}) => {
  const { values, onValuesChange, size, searchTerm } = useMultiSelect();
  const isSelected = values.includes(itemValue);

  // Filter based on search term
  if (searchTerm && !String(children).toLowerCase().includes(searchTerm.toLowerCase())) {
    return null;
  }

  const handleToggle = () => {
    if (disabled) return;
    if (isSelected) {
      onValuesChange(values.filter(v => v !== itemValue));
    } else {
      onValuesChange([...values, itemValue]);
    }
  };

  return (
    <div
      className={cn(
        'mms-multi-select-item',
        `mms-multi-select-item-size-${size}`,
        isSelected && 'mms-multi-select-item-selected',
        disabled && 'mms-multi-select-item-disabled',
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        handleToggle();
      }}
    >
      <div className="mms-multi-select-item-checkbox">
        {isSelected && <RiCheckLine />}
      </div>
      <span className="mms-multi-select-item-text">{children}</span>
    </div>
  );
};

// Structure
export const MultiSelectLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mms-select-label">{children}</div>
);

export const MultiSelectSeparator: React.FC = () => (
  <div className="mms-select-separator" />
);

export const MultiSelect = Object.assign(MultiSelectRoot, {
  Root: MultiSelectRoot,
  Trigger: MultiSelectTrigger,
  Portal: MultiSelectPortal,
  Content: MultiSelectContent,
  Item: MultiSelectItem,
  Label: MultiSelectLabel,
  Separator: MultiSelectSeparator,
});
