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
import './Dialog.css';

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog.Root');
  }
  return context;
};

/* ─────────────────────────────────────────────────────────
 * 1. Dialog.Root
 * ───────────────────────────────────────────────────────── */

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

const DialogRoot: React.FC<DialogProps> = ({ 
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

/* ─────────────────────────────────────────────────────────
 * 2. Dialog.Trigger
 * ───────────────────────────────────────────────────────── */

export const DialogTrigger: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { setOpen } = useDialog();
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      setOpen(true);
    }
  });
};

/* ─────────────────────────────────────────────────────────
 * 3. Dialog.Portal
 * ───────────────────────────────────────────────────────── */

export const DialogPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useDialog();
  if (!open) return null;
  return createPortal(children, document.body);
};

/* ─────────────────────────────────────────────────────────
 * 4. Dialog.Overlay
 * ───────────────────────────────────────────────────────── */

export const DialogOverlay: React.FC<{ className?: string }> = ({ className }) => {
  const { setOpen } = useDialog();
  return (
    <div 
      className={cn('mms-dialog-overlay', className)} 
      onClick={() => setOpen(false)} 
    />
  );
};

/* ─────────────────────────────────────────────────────────
 * 5. Dialog.Content
 * ───────────────────────────────────────────────────────── */

export interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  size?: '1' | '2' | '3' | '4';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6';
}

export const DialogContent: React.FC<DialogContentProps> = ({ 
  children, 
  className, 
  size = '2',
  radius = '4'
}) => {
  const { setOpen } = useDialog();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setOpen]);

  return (
    <div className="mms-dialog-container">
      <div 
        className={cn(
          'mms-dialog-content', 
          `mms-dialog-size-${size}`,
          `mms-dialog-radius-${radius}`,
          className
        )} 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
 * 6. Internal Components (Title, Description, etc.)
 * ───────────────────────────────────────────────────────── */

export const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <h2 className={cn('mms-dialog-title', className)}>{children}</h2>
);

export const DialogDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn('mms-dialog-description', className)}>{children}</p>
);

export const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('mms-dialog-header', className)}>{children}</div>
);

export const DialogBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('mms-dialog-body', className)}>{children}</div>
);

export const DialogFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('mms-dialog-footer', className)}>{children}</div>
);

export const DialogClose: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
  const { setOpen } = useDialog();
  
  if (children) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        (children as any).props.onClick?.(e);
        setOpen(false);
      }
    });
  }

  return (
    <button className={cn('mms-dialog-close-button', className)} onClick={() => setOpen(false)}>
      <RiCloseLine size={20} />
    </button>
  );
};

/* ─────────────────────────────────────────────────────────
 * Export Object
 * ───────────────────────────────────────────────────────── */

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose
};

export default Dialog;
