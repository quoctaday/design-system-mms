import React, { 
  useState, 
  useEffect, 
  useContext, 
  createContext, 
  useCallback 
} from 'react';
import { createPortal } from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';
import { cn } from '../../../lib/utils';
import './Modal.css';

interface ModalContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal.Root');
  }
  return context;
};

// Root
export interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

const ModalRoot: React.FC<ModalProps> = ({ 
  children, 
  open: controlledOpen, 
  onOpenChange, 
  defaultOpen = false 
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback((newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [controlledOpen, onOpenChange]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

// Trigger
export const ModalTrigger: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { setOpen } = useModal();
  return React.cloneElement(children as React.ReactElement<any>, {
    onClick: (e: React.MouseEvent) => {
      (children as any).props.onClick?.(e);
      setOpen(true);
    }
  });
};

// Portal
export const ModalPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useModal();
  if (!open) return null;
  return createPortal(children, document.body);
};

// Overlay
export const ModalOverlay: React.FC<{ className?: string }> = ({ className }) => {
  const { setOpen } = useModal();
  return (
    <div 
      className={cn('mms-modal-overlay', className)} 
      onClick={() => setOpen(false)} 
    />
  );
};

// Content
export interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children, className, style }) => {
  const { setOpen } = useModal();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setOpen]);

  return (
    <div className="mms-modal-container">
      <div 
        className={cn('mms-modal-content', className)} 
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

// Header
export const ModalHeader: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={cn('mms-modal-header', className)} style={style}>{children}</div>
);

// Icon
export const ModalIcon: React.FC<{ children: React.ReactNode; className?: string; color?: 'brand' | 'error' | 'success' | 'warning' }> = ({ 
  children, 
  className,
  color = 'brand'
}) => (
  <div className={cn('mms-modal-icon', `mms-modal-icon-${color}`, className)}>
    {children}
  </div>
);

export const ModalTitle: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <h2 className={cn('mms-modal-title', className)} style={style}>{children}</h2>
);

export const ModalDescription: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <p className={cn('mms-modal-description', className)} style={style}>{children}</p>
);

export const ModalBody: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={cn('mms-modal-body', className)} style={style}>{children}</div>
);

export const ModalFooter: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={cn('mms-modal-footer', className)} style={style}>{children}</div>
);

export const ModalClose: React.FC<{ children?: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => {
  const { setOpen } = useModal();
  
  if (children) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        (children as any).props.onClick?.(e);
        setOpen(false);
      }
    });
  }

  return (
    <button className={cn('mms-modal-close', className)} style={style} onClick={() => setOpen(false)}>
      <RiCloseLine />
    </button>
  );
};

// Export as object
export const Modal = Object.assign(ModalRoot, {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Portal: ModalPortal,
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
  Icon: ModalIcon,
  Title: ModalTitle,
  Description: ModalDescription,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
});

export default Modal;
