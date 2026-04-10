import React, { 
  useState, 
  useRef, 
  useEffect, 
  useContext, 
  createContext, 
  forwardRef 
} from 'react';
import { cn } from '../../../lib/utils';
import './Dropdown.css';

interface DropdownContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onClose: () => void;
}

const DropdownContext = createContext<DropdownContextValue | undefined>(undefined);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown.Root');
  }
  return context;
};

// Root Component
export interface DropdownRootProps {
  children: React.ReactNode;
}

const DropdownRoot: React.FC<DropdownRootProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <DropdownContext.Provider value={{ isOpen, setIsOpen, onClose }}>
      <div className="mms-dropdown-root" ref={containerRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// Trigger Component
export interface DropdownTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useDropdown();

  return (
    <div 
      className="mms-dropdown-trigger" 
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </div>
  );
};

// Content Component
export interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'right';
  width?: number | string;
}

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ 
  children, 
  align = 'right', 
  width = 180, 
  className,
  ...props 
}, ref) => {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return (
    <div 
      ref={ref}
      className={cn(
        'mms-dropdown-content',
        `mms-dropdown-align-${align}`,
        className
      )}
      style={{ width }}
      {...props}
    >
      {children}
    </div>
  );
});

// Item Component
export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  variant?: 'default' | 'danger';
}

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(({ 
  children, 
  leftIcon, 
  rightIcon, 
  disabled,
  variant = 'default',
  className,
  onClick,
  ...props 
}, ref) => {
  const { onClose } = useDropdown();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
    onClose();
  };

  return (
    <div 
      ref={ref}
      className={cn(
        'mms-dropdown-item',
        variant === 'danger' && 'mms-dropdown-item-danger',
        disabled && 'mms-dropdown-item-disabled',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {leftIcon && <span className="mms-dropdown-item-icon-left">{leftIcon}</span>}
      <span className="mms-dropdown-item-label">{children}</span>
      {rightIcon && <span className="mms-dropdown-item-icon-right">{rightIcon}</span>}
    </div>
  );
});

// Separator Component
const DropdownSeparator: React.FC = () => {
  return <div className="mms-dropdown-separator" />;
};

// Export as object
export const Dropdown = Object.assign(DropdownRoot, {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Separator: DropdownSeparator,
});

export default Dropdown;
