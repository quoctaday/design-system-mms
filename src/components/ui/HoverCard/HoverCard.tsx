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
import './HoverCard.css';

interface HoverCardContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLElement | null>;
  coords: { top: number; left: number; width: number; side: 'top' | 'bottom' | 'left' | 'right' };
  openDelay: number;
  closeDelay: number;
}

const HoverCardContext = createContext<HoverCardContextValue | undefined>(undefined);

const useHoverCard = () => {
  const context = useContext(HoverCardContext);
  if (!context) throw new Error('HoverCard components must be used within a HoverCard.Root');
  return context;
};

// --- Root ---
export interface HoverCardRootProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
}

export const HoverCardRoot: React.FC<HoverCardRootProps> = ({ 
  children, 
  open: propOpen, 
  onOpenChange, 
  defaultOpen,
  openDelay = 700,
  closeDelay = 300
}) => {
  const [open, setOpen] = useControllableState({ prop: propOpen, defaultProp: defaultOpen, onChange: onOpenChange });
  const { triggerRef, contentRef, coords } = useFloating({ open, sideOffset: 8, align: 'start' });

  const openTimerRef = useRef<number>(0);
  const closeTimerRef = useRef<number>(0);

  const handleOpen = useCallback(() => {
    window.clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
  }, [openDelay, setOpen]);

  const handleClose = useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
  }, [closeDelay, setOpen]);

  const contextValue = useMemo(() => ({
    open, setOpen: (val: boolean) => val ? handleOpen() : handleClose(), 
    triggerRef, contentRef, coords: coords as any,
    openDelay, closeDelay
  }), [open, handleOpen, handleClose, triggerRef, contentRef, coords, openDelay, closeDelay]);

  return (
    <HoverCardContext.Provider value={contextValue}>
      <div className="mms-hover-card-root" onMouseLeave={handleClose}>
        {children}
      </div>
    </HoverCardContext.Provider>
  );
};

// --- Trigger ---
export const HoverCardTrigger = React.forwardRef<HTMLElement, { children: React.ReactElement }>(
  ({ children }, ref) => {
    const { setOpen, triggerRef } = useHoverCard();
    
    return React.cloneElement(children, {
      ref: (node: HTMLElement) => {
        (triggerRef as any).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as any).current = node;
      },
      onMouseEnter: () => setOpen(true),
      'aria-haspopup': 'dialog',
      'aria-expanded': false // Simplified
    });
  }
);

// --- Content ---
export interface HoverCardContentProps {
  children: React.ReactNode;
  className?: string;
  width?: number | string;
}

export const HoverCardContent = React.forwardRef<HTMLDivElement, HoverCardContentProps>(
  ({ children, className, width = 280 }, ref) => {
    const { open, contentRef, coords, setOpen } = useHoverCard();

    if (!open) return null;

    return createPortal(
      <div 
        ref={(node) => {
          (contentRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={cn(
          'mms-hover-card-content',
          className
        )}
        style={{ 
          position: 'absolute',
          top: coords.top,
          left: coords.left,
          width,
          zIndex: 1000
        }}
        onMouseEnter={() => setOpen(true)}
      >
        <div className="mms-hover-card-viewport">
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

export const HoverCard = {
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
};

export default HoverCard;
