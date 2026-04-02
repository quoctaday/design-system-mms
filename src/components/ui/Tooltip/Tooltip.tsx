import React, { 
  useState, 
  useRef, 
  useContext, 
  createContext, 
  forwardRef 
} from 'react';
import { cn } from '../../../lib/utils';
import './Tooltip.css';

interface TooltipContextValue {
  isVisible: boolean;
  onOpen: () => void;
  onClose: () => void;
  side: 'top' | 'right' | 'bottom' | 'left';
}

const TooltipContext = createContext<TooltipContextValue | undefined>(undefined);

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('Tooltip components must be used within a Tooltip.Root');
  }
  return context;
};

// Root Component
export interface TooltipRootProps {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delayDuration?: number;
}

const TooltipRoot: React.FC<TooltipRootProps> = ({ 
  children, 
  side = 'top', 
  delayDuration = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<any>(null);

  const onOpen = () => {
    if (delayDuration === 0) {
      setIsVisible(true);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayDuration);
  };

  const onClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <TooltipContext.Provider value={{ isVisible, onOpen, onClose, side }}>
      <div className="mms-tooltip-root">
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

// Trigger Component
export interface TooltipTriggerProps {
  children: React.ReactNode;
}

const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children }) => {
  const { onOpen, onClose } = useTooltip();

  return (
    <div 
      className="mms-tooltip-trigger" 
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onClose}
    >
      {children}
    </div>
  );
};

// Content Component
export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({ 
  children, 
  className,
  ...props 
}, ref) => {
  const { isVisible, side } = useTooltip();

  if (!isVisible) return null;

  return (
    <div 
      ref={ref}
      className={cn(
        'mms-tooltip-content',
        `mms-tooltip-side-${side}`,
        className
      )}
      data-state={isVisible ? 'open' : 'closed'}
      {...props}
    >
      {children}
      <div className="mms-tooltip-arrow" />
    </div>
  );
});

// Export as object
export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export default Tooltip;
