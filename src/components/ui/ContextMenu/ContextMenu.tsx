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
import { useControllableState } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './ContextMenu.css';

interface ContextMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  coords: { top: number; left: number };
  size: '1' | '2';
  radius: string;
}

const ContextMenuContext = createContext<ContextMenuContextValue | undefined>(undefined);

const useContextMenu = () => {
  const context = useContext(ContextMenuContext);
  if (!context) throw new Error('ContextMenu components must be used within a ContextMenu.Root');
  return context;
};

// --- Root ---
export interface ContextMenuRootProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  size?: '1' | '2';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export const ContextMenuRoot: React.FC<ContextMenuRootProps> = (props) => {
  const { children, onOpenChange, ...mmsBase } = props;
  
  const [open, setOpen] = useControllableState({ prop: undefined, defaultProp: false, onChange: onOpenChange });
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const { size, radius } = extractMMSProps(mmsBase as any, 'context-menu', { size: '2', radius: 'medium' });

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCoords({ top: e.pageY, left: e.pageX });
    setOpen(true);
  }, [setOpen]);

  // Handle click outside to close
  useEffect(() => {
    if (!open) return;
    const handleClose = () => setOpen(false);
    window.addEventListener('click', handleClose);
    window.addEventListener('contextmenu', handleClose); // Close existing on new right click is handled by logic
    return () => {
      window.removeEventListener('click', handleClose);
      window.removeEventListener('contextmenu', handleClose);
    };
  }, [open, setOpen]);

  const contextValue = useMemo(() => ({
    open, setOpen, coords, size: size as any, radius: radius as any
  }), [open, setOpen, coords, size, radius]);

  const childrenWithContextMenu = React.Children.map(children, child => {
    if (React.isValidElement(child) && (child.type as any).displayName === 'ContextMenuTrigger') {
      return React.cloneElement(child as any, { onContextMenu: handleContextMenu });
    }
    return child;
  });

  return (
    <ContextMenuContext.Provider value={contextValue}>
      <div className="mms-context-menu-root">
        {childrenWithContextMenu}
      </div>
    </ContextMenuContext.Provider>
  );
};

// --- Trigger ---
export const ContextMenuTrigger = React.forwardRef<HTMLDivElement, { children: React.ReactNode, onContextMenu?: (e: React.MouseEvent) => void }>(
  ({ children, onContextMenu, ...props }, ref) => (
    <div ref={ref} onContextMenu={onContextMenu} {...props} style={{ display: 'contents' }}>
      {children}
    </div>
  )
);
(ContextMenuTrigger as any).displayName = 'ContextMenuTrigger';

// --- Content ---
export const ContextMenuContent: React.FC<{ children: React.ReactNode, className?: string, width?: number }> = ({ children, className, width = 180 }) => {
  const { open, coords, size, radius } = useContextMenu();

  if (!open) return null;

  return createPortal(
    <div 
      role="menu"
      className={cn(
        'mms-context-menu-content',
        `mms-context-menu-size-${size}`,
        `mms-context-menu-radius-${radius}`,
        className
      )}
      style={{ 
        position: 'absolute',
        top: coords.top,
        left: coords.left,
        width,
        zIndex: 1000
      }}
    >
      <div className="mms-context-menu-viewport">
        {children}
      </div>
    </div>,
    document.body
  );
};

// --- Item ---
export const ContextMenuItem: React.FC<{ 
  children: React.ReactNode; 
  onSelect?: () => void; 
  disabled?: boolean;
  className?: string;
  shortcut?: string;
}> = ({ children, onSelect, disabled, className, shortcut }) => {
  const { setOpen } = useContextMenu();

  return (
    <div 
      role="menuitem"
      className={cn(
        'mms-context-menu-item',
        disabled && 'mms-context-menu-item-disabled',
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        if (disabled) return;
        onSelect?.();
        setOpen(false);
      }}
    >
      {children}
      {shortcut && <span className="mms-context-menu-shortcut">{shortcut}</span>}
    </div>
  );
};

// --- Separator ---
export const ContextMenuSeparator: React.FC = () => (
  <div className="mms-context-menu-separator" />
);

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  Separator: ContextMenuSeparator
};

export default ContextMenu;
