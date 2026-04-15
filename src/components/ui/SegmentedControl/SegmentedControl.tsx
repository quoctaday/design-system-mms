import React, { 
  createContext, 
  useContext, 
  forwardRef, 
  useState, 
  useRef, 
  useLayoutEffect 
} from 'react';
import { cn } from '../../../lib/utils';
import './SegmentedControl.css';

// ── CONTEXT ──────────────────────────────────────────────────

interface SegmentedControlContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  size?: '1' | '2' | '3';
  variant?: 'surface' | 'classic' | 'soft';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
  disabled?: boolean;
  registerItem?: (value: string, element: HTMLButtonElement) => void;
  unregisterItem?: (value: string) => void;
}

const SegmentedControlContext = createContext<SegmentedControlContextValue>({});

// ── ROOT ─────────────────────────────────────────────────────

export interface SegmentedControlRootProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: '1' | '2' | '3';
  variant?: 'surface' | 'classic' | 'soft';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Root = forwardRef<HTMLDivElement, SegmentedControlRootProps>((props, ref) => {
  const {
    children,
    className,
    value,
    defaultValue,
    onValueChange,
    size = '2',
    variant = 'surface',
    radius = 'full',
    disabled = false,
    fullWidth = false,
    ...rootProps
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const itemsRef = useRef<Map<string, HTMLButtonElement>>(new Map());
  const rootRef = useRef<HTMLDivElement>(null);

  const handleValueChange = (newValue: string) => {
    if (!isControlled) setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  const registerItem = (val: string, el: HTMLButtonElement) => {
    itemsRef.current.set(val, el);
  };

  const unregisterItem = (val: string) => {
    itemsRef.current.delete(val);
  };

  // ── INDICATOR LOGIC ──
  useLayoutEffect(() => {
    if (!activeValue) return;
    const activeEl = itemsRef.current.get(activeValue);
    const rootEl = rootRef.current;

    if (activeEl && rootEl) {
      const activeRect = activeEl.getBoundingClientRect();
      const rootRect = rootEl.getBoundingClientRect();

      setIndicatorStyle({
        width: activeRect.width,
        height: activeRect.height,
        transform: `translateX(${activeRect.left - rootRect.left}px) translateY(${activeRect.top - rootRect.top}px)`,
        opacity: 1,
      });
    }
  }, [activeValue]);

  return (
    <SegmentedControlContext.Provider
      value={{
        value: activeValue,
        onValueChange: handleValueChange,
        size,
        variant,
        radius,
        disabled,
        registerItem,
        unregisterItem
      }}
    >
      <div
        ref={(node) => {
          rootRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        role="radiogroup"
        className={cn(
          'mms-segmented-root',
          `mms-segmented-size-${size}`,
          `mms-segmented-variant-${variant}`,
          `mms-segmented-radius-${radius}`,
          fullWidth && 'mms-segmented-full-width',
          className
        )}
        {...rootProps}
      >
        {/* Animated Indicator */}
        <div className="mms-segmented-indicator" style={indicatorStyle} aria-hidden="true" />
        
        <div className="mms-segmented-items-container">
          {children}
        </div>
      </div>
    </SegmentedControlContext.Provider>
  );
});

Root.displayName = 'SegmentedControl.Root';

// ── ITEM ─────────────────────────────────────────────────────

export interface SegmentedControlItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const Item = forwardRef<HTMLButtonElement, SegmentedControlItemProps>((props, ref) => {
  const { children, className, value: itemValue, disabled: itemDisabled, ...itemProps } = props;
  const context = useContext(SegmentedControlContext);
  const internalRef = useRef<HTMLButtonElement>(null);

  const isActive = context.value === itemValue;
  const isDisabled = context.disabled || itemDisabled;

  useLayoutEffect(() => {
    if (internalRef.current && context.registerItem) {
      context.registerItem(itemValue, internalRef.current);
    }
    return () => {
      if (context.unregisterItem) context.unregisterItem(itemValue);
    };
  }, [itemValue, context]);

  return (
    <button
      ref={(node) => {
        (internalRef as any).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as any).current = node;
      }}
      type="button"
      role="radio"
      aria-checked={isActive}
      disabled={isDisabled}
      data-state={isActive ? 'active' : 'inactive'}
      className={cn('mms-segmented-item', className)}
      onClick={(e) => {
        itemProps.onClick?.(e);
        if (!isDisabled) context.onValueChange?.(itemValue);
      }}
      {...itemProps}
    >
      <span className="mms-segmented-item-label">{children}</span>
    </button>
  );
});

Item.displayName = 'SegmentedControl.Item';

// ── EXPORTS ──────────────────────────────────────────────────

export interface LegacySegmentedControlProps {
  options: Array<{ label: string; value: string; disabled?: boolean }>;
  value: string;
  onChange: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const SegmentedControlMonolithic: React.FC<LegacySegmentedControlProps> = ({
  options,
  value,
  onChange,
  size = 'md',
  fullWidth,
  className,
}) => {
  const mappedSize = size === 'sm' ? '1' : size === 'lg' ? '3' : '2';
  return (
    <Root
      value={value}
      onValueChange={onChange}
      size={mappedSize}
      fullWidth={fullWidth}
      className={className}
    >
      {options.map((opt) => (
        <Item key={opt.value} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </Item>
      ))}
    </Root>
  );
};

export const SegmentedControl = Object.assign(SegmentedControlMonolithic, {
  Root,
  Item,
});

export default SegmentedControl;
