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
import { useControllableState, useFloating } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './Popover.css';

interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLElement | null>;
  coords: { top: number; left: number; width: number; side: 'top' | 'bottom' | 'left' | 'right' };
  size: '1' | '2' | '3';
  radius: 'none' | 'small' | 'medium' | 'large' | 'full';
}

const PopoverContext = createContext<PopoverContextValue | undefined>(undefined);

const usePopover = () => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error('Popover components must be used within a Popover.Root');
  return context;
};

// --- Root ---
export interface PopoverRootProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  size?: '1' | '2' | '3';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export const PopoverRoot: React.FC<PopoverRootProps> = (props) => {
  const { children, open: propOpen, onOpenChange, defaultOpen, ...mmsBase } = props;
  
  const [open, setOpen] = useControllableState({ prop: propOpen, defaultProp: defaultOpen, onChange: onOpenChange });
  const { triggerRef, contentRef, coords } = useFloating({ open, sideOffset: 8, align: 'start' });
  const { size, radius } = extractMMSProps(mmsBase as any, 'popover', { size: '2', radius: 'medium' });

  const contextValue = useMemo(() => ({
    open, 
    setOpen, 
    triggerRef, 
    contentRef, 
    coords: coords as any, 
    size: size as any, 
    radius: radius as any,
  }), [open, setOpen, triggerRef, contentRef, coords, size, radius]);

  return (
    <PopoverContext.Provider value={contextValue}>
      <div className="mms-popover-root">
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

// --- Trigger ---
export const PopoverTrigger = React.forwardRef<HTMLElement, { children: React.ReactElement }>(
  ({ children }, ref) => {
    const { setOpen, open, triggerRef } = usePopover();
    
    return React.cloneElement(children, {
      ref: (node: HTMLElement) => {
        (triggerRef as any).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as any).current = node;
      },
      onClick: (e: React.MouseEvent) => {
        children.props.onClick?.(e);
        setOpen(!open);
      },
      'aria-haspopup': 'dialog',
      'aria-expanded': open,
      'data-state': open ? 'open' : 'closed'
    });
  }
);

// --- Content ---
export interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
  width?: number | string;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className, width = 240 }, ref) => {
    const { open, contentRef, coords, size, radius, setOpen } = usePopover();

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
        ref={(node) => {
          (contentRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        role="dialog"
        className={cn(
          'mms-popover-content',
          `mms-popover-size-${size}`,
          `mms-popover-radius-${radius}`,
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
        data-state={open ? 'open' : 'closed'}
      >
        <div className="mms-popover-viewport">
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

// --- Close ---
export const PopoverClose = React.forwardRef<HTMLElement, { children: React.ReactElement }>(
  ({ children }, ref) => {
    const { setOpen } = usePopover();
    return React.cloneElement(children, {
      ref,
      onClick: (e: React.MouseEvent) => {
        children.props.onClick?.(e);
        setOpen(false);
      }
    });
  }
);

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Close: PopoverClose,
});

export default Popover;
