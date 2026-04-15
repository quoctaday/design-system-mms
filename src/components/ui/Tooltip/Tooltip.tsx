import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/utils';
import './Tooltip.css';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = 'top',
  align = 'center',
  delayDuration = 200,
  className,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  
  const timerRef = useRef<number | null>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const setOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) setUncontrolledOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  const updateCoords = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;

    let top = 0;
    let left = 0;

    // Basic side positioning
    switch (side) {
      case 'top':
        top = rect.top + scrollY - 8;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case 'bottom':
        top = rect.bottom + scrollY + 8;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case 'left':
        top = rect.top + scrollY + rect.height / 2;
        left = rect.left + scrollX - 8;
        break;
      case 'right':
        top = rect.top + scrollY + rect.height / 2;
        left = rect.right + scrollX + 8;
        break;
    }

    setCoords({ top, left });
  };

  const handleMouseEnter = () => {
    timerRef.current = window.setTimeout(() => {
      updateCoords();
      setOpen(true);
    }, delayDuration);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const trigger = React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleMouseEnter,
    onBlur: handleMouseLeave,
  });

  return (
    <>
      {trigger}
      {open && createPortal(
        <div 
          className={cn(
            'mms-tooltip-content',
            `mms-tooltip-side-${side}`,
            `mms-tooltip-align-${align}`,
            className
          )}
          style={{
            position: 'absolute',
            top: coords.top,
            left: coords.left,
            zIndex: 3000,
          }}
          data-state={open ? 'open' : 'closed'}
        >
          {content}
          <div className="mms-tooltip-arrow" />
        </div>,
        document.body
      )}
    </>
  );
};

export default Tooltip;
