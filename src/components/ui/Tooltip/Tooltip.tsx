import React, { createContext, useContext, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/utils';
import { useFloating, useControllableState } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import type { MMSBaseProps } from '../../../helpers/extract-mms-props';
import './Tooltip.css';

// --- Context ---
interface TooltipContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLElement>;
  coords: { top: number; left: number; side: string };
  delayDuration: number;
}

const TooltipContext = createContext<TooltipContextValue | undefined>(undefined);

const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) throw new Error('Tooltip sub-components must be used within Tooltip.Root');
  return context;
};

// --- Components ---

export interface TooltipRootProps {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  offset?: number;
}

const TooltipRoot: React.FC<TooltipRootProps> = ({
  children,
  side = 'top',
  align = 'center',
  delayDuration = 200,
  open: propOpen,
  defaultOpen,
  onOpenChange,
  offset = 8,
}) => {
  const [open, setOpen] = useControllableState({
    prop: propOpen,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
  });

  const { triggerRef, contentRef, coords, updatePosition } = useFloating({
    open,
    side,
    align,
    sideOffset: offset,
  });

  useEffect(() => {
    if (open) updatePosition();
  }, [open, updatePosition]);

  const value = useMemo(() => ({
    open,
    setOpen,
    triggerRef,
    contentRef,
    coords,
    delayDuration
  }), [open, setOpen, triggerRef, contentRef, coords, delayDuration]);

  return (
    <TooltipContext.Provider value={value}>
      {children}
    </TooltipContext.Provider>
  );
};

export const TooltipTrigger: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { setOpen, triggerRef, delayDuration } = useTooltipContext();
  const timerRef = useRef<number | null>(null);

  const handleOpen = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, delayDuration);
  };

  const handleClose = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return React.cloneElement(children, {
    // @ts-ignore
    ref: triggerRef,
    onMouseEnter: handleOpen,
    onMouseLeave: handleClose,
    onFocus: handleOpen,
    onBlur: handleClose,
  });
};

export interface TooltipContentProps extends MMSBaseProps {
  children: React.ReactNode;
}

export const TooltipContent: React.FC<TooltipContentProps> = ({ children, ...rest }) => {
  const { open, contentRef, coords } = useTooltipContext();
  const { mmsClasses, radius } = extractMMSProps(rest, 'tooltip', {
    radius: 'small',
    size: '2',
  });

  if (!open) return null;

  return createPortal(
    <div
      ref={contentRef as any}
      className={cn('mms-tooltip-content', mmsClasses)}
      style={{
        position: 'absolute',
        top: coords.top,
        left: coords.left,
        zIndex: 3000,
      }}
      data-state={open ? 'open' : 'closed'}
      data-side={coords.side}
      data-radius={radius}
    >
      {children}
      <div className="mms-tooltip-arrow" data-side={coords.side} />
    </div>,
    document.body
  );
};

// Main Tooltip stays as a wrapper for backward compatibility and simple usage
export interface TooltipProps extends TooltipRootProps, MMSBaseProps {
  content: React.ReactNode;
  children: React.ReactElement;
}

export const TooltipWrapper: React.FC<TooltipProps> = ({ 
  content, 
  children, 
  radius, 
  size, 
  variant, 
  className,
  ...rootProps 
}) => {
  return (
    <TooltipRoot {...rootProps}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent radius={radius} size={size} variant={variant} className={className}>
        {content}
      </TooltipContent>
    </TooltipRoot>
  );
};

// --- Exports ---
const Tooltip = Object.assign(TooltipWrapper, {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export default Tooltip;
