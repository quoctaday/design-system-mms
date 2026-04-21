import { useState, useCallback, useRef, useEffect, useId } from 'react';

/**
 * MMS Engine: A zero-dependency logic layer for high-quality UI components.
 * Inspired by Radix but built natively for MMS.
 */

// --- State Management ---

export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: {
  prop?: T;
  defaultProp?: T;
  onChange?: (state: T) => void;
}) {
  const [uncontrolledProp, setUncontrolledProp] = useState(defaultProp);
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setUncontrolledProp(nextValue);
      }
      onChange?.(nextValue);
    },
    [isControlled, onChange]
  );

  return [value, setValue] as const;
}

// --- Floating Logic (Positioning & Collision) ---

interface FloatingOptions {
  open: boolean;
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'bottom' | 'left' | 'right';
}

export function useFloating({ open, sideOffset = 4, align = 'start', side: propSide = 'bottom' }: FloatingOptions) {
  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0, side: propSide as 'top' | 'bottom' | 'left' | 'right' });

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !open) return;
    
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const contentHeight = contentRef.current?.offsetHeight || 0;
    const contentWidth = contentRef.current?.offsetWidth || 0;
    
    let top = 0;
    let left = 0;
    let actualSide = propSide;

    if (propSide === 'bottom' || propSide === 'top') {
      top = propSide === 'bottom' ? rect.bottom + window.scrollY + sideOffset : rect.top + window.scrollY - contentHeight - sideOffset;
      // Collision check for vertical
      if (propSide === 'bottom' && rect.bottom + contentHeight > viewportHeight) {
        top = rect.top + window.scrollY - contentHeight - sideOffset;
        actualSide = 'top';
      }
      
      left = rect.left + window.scrollX;
      if (align === 'center') left += (rect.width - contentWidth) / 2;
      else if (align === 'end') left += rect.width - contentWidth;
    } 
    else {
      // Horizontal positioning (Submenus)
      left = propSide === 'right' ? rect.right + window.scrollX + sideOffset : rect.left + window.scrollX - contentWidth - sideOffset;
      top = rect.top + window.scrollY;
      if (align === 'center') top += (rect.height - contentHeight) / 2;
      else if (align === 'end') top += rect.height - contentHeight;
      actualSide = propSide;
    }

    setCoords({
      top,
      left,
      width: rect.width,
      side: actualSide
    });
  }, [open, sideOffset, align, propSide]);

  useEffect(() => {
    if (open) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    }
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [open, updatePosition]);

  return { triggerRef, contentRef, coords, updatePosition };
}

// --- Keyboard Orchestration ---

export function useKeyboardListNav({
  items,
  onSelect,
  active,
  orientation = 'vertical',
}: {
  items: string[];
  onSelect: (value: string) => void;
  active: boolean;
  orientation?: 'vertical' | 'horizontal';
}) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!active) return;

      const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
      const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';

      switch (e.key) {
        case nextKey:
          e.preventDefault();
          setHighlightedIndex((prev) => Math.min(prev + 1, items.length - 1));
          break;
        case prevKey:
          e.preventDefault();
          setHighlightedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            onSelect(items[highlightedIndex]);
          }
          break;
        case 'Escape':
          setHighlightedIndex(-1);
          break;
      }
    },
    [active, items, highlightedIndex, onSelect, orientation]
  );

  return { highlightedIndex, setHighlightedIndex, handleKeyDown };
}

export { useId };
