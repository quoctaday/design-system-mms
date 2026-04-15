import React, { 
  useState, 
  useRef, 
  useEffect, 
  useContext, 
  createContext, 
  forwardRef 
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/utils';
import './DropdownMenu.css';

interface DropdownMenuContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onClose: () => void;
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | undefined>(undefined);

const useDropdownMenu = () => {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('DropdownMenu components must be used within a DropdownMenu.Root');
  }
  return context;
};

/* ─────────────────────────────────────────────────────────
 * 1. DropdownMenu.Root
 * ───────────────────────────────────────────────────────── */

export interface DropdownMenuRootProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DropdownMenuRoot: React.FC<DropdownMenuRootProps> = ({ 
  children,
  open: controlledOpen,
  onOpenChange
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const containerRef = useRef<HTMLDivElement>(null);

  const setIsOpen = (open: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(open);
    }
    onOpenChange?.(open);
  };

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen, onClose }}>
      <div className="mms-dropdown-menu-root" ref={containerRef}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

/* ─────────────────────────────────────────────────────────
 * 2. DropdownMenu.Trigger
 * ───────────────────────────────────────────────────────── */

export interface DropdownMenuTriggerProps {
  children: React.ReactElement;
  asChild?: boolean;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useDropdownMenu();

  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      setIsOpen(!isOpen);
    },
    'data-state': isOpen ? 'open' : 'closed'
  });
};

/* ─────────────────────────────────────────────────────────
 * 3. DropdownMenu.Content
 * ───────────────────────────────────────────────────────── */

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  width?: number | string;
}

const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(({ 
  children, 
  align = 'end', 
  width = 200, 
  className,
  ...props 
}, ref) => {
  const { isOpen } = useDropdownMenu();

  if (!isOpen) return null;

  return (
    <div 
      ref={ref}
      className={cn(
        'mms-dropdown-menu-content',
        `mms-dropdown-menu-align-${align}`,
        className
      )}
      style={{ width }}
      {...props}
    >
      {children}
    </div>
  );
});

/* ─────────────────────────────────────────────────────────
 * 4. DropdownMenu.Item
 * ───────────────────────────────────────────────────────── */

export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  shortcut?: string;
  disabled?: boolean;
  variant?: 'default' | 'danger';
}

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(({ 
  children, 
  shortcut, 
  disabled,
  variant = 'default',
  className,
  onClick,
  ...props 
}, ref) => {
  const { onClose } = useDropdownMenu();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
    onClose();
  };

  return (
    <div 
      ref={ref}
      className={cn(
        'mms-dropdown-menu-item',
        variant === 'danger' && 'mms-dropdown-menu-item-danger',
        disabled && 'mms-dropdown-menu-item-disabled',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="mms-dropdown-menu-item-label">{children}</span>
      {shortcut && <span className="mms-dropdown-menu-shortcut">{shortcut}</span>}
    </div>
  );
});

/* ─────────────────────────────────────────────────────────
 * 5. DropdownMenu.Sub (Simplified Sub-menu logic)
 * ───────────────────────────────────────────────────────── */

const DropdownMenuSub: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  return (
    <div 
      className="mms-dropdown-menu-sub"
      onMouseEnter={() => setIsSubOpen(true)}
      onMouseLeave={() => setIsSubOpen(false)}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { isSubOpen, setIsSubOpen });
        }
        return child;
      })}
    </div>
  );
};

const DropdownMenuSubTrigger = forwardRef<HTMLDivElement, DropdownMenuItemProps & { isSubOpen?: boolean }>(({ 
  children, 
  isSubOpen,
  className,
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(
        'mms-dropdown-menu-item mms-dropdown-menu-sub-trigger',
        isSubOpen && 'mms-dropdown-menu-sub-trigger-active',
        className
      )}
      {...props}
    >
      <span className="mms-dropdown-menu-item-label">{children}</span>
      <span className="mms-dropdown-menu-sub-icon">›</span>
    </div>
  );
});

const DropdownMenuSubContent = forwardRef<HTMLDivElement, DropdownMenuContentProps & { isSubOpen?: boolean }>(({ 
  children, 
  isSubOpen,
  className,
  ...props 
}, ref) => {
  if (!isSubOpen) return null;
  return (
    <div 
      ref={ref}
      className={cn('mms-dropdown-menu-sub-content', className)}
      {...props}
    >
      {children}
    </div>
  );
});

/* ─────────────────────────────────────────────────────────
 * 6. DropdownMenu.Separator
 * ───────────────────────────────────────────────────────── */

const DropdownMenuSeparator: React.FC = () => {
  return <div className="mms-dropdown-menu-separator" />;
};

/* ─────────────────────────────────────────────────────────
 * Export Object
 * ───────────────────────────────────────────────────────── */

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Separator: DropdownMenuSeparator,
};

export default DropdownMenu;
