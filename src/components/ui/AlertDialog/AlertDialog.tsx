import React, { 
  useContext, 
  createContext, 
  useEffect,
  useMemo
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../lib/utils';
import { useControllableState } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import '../Dialog/Dialog.css'; // Reusing base dialog styles

interface AlertDialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AlertDialogContext = createContext<AlertDialogContextValue | undefined>(undefined);
const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) throw new Error('AlertDialog components must be used within an AlertDialog.Root');
  return context;
};

// --- Root ---
export interface AlertDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

const AlertDialogRoot: React.FC<AlertDialogProps> = ({ 
  children, 
  open: propOpen, 
  onOpenChange, 
  defaultOpen = false 
}) => {
  const [open, setOpen] = useControllableState({ prop: propOpen, defaultProp: defaultOpen, onChange: onOpenChange });

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const contextValue = useMemo(() => ({ open, setOpen }), [open, setOpen]);

  return (
    <AlertDialogContext.Provider value={contextValue}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// --- Trigger ---
export const AlertDialogTrigger: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { setOpen } = useAlertDialog();
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      setOpen(true);
    }
  });
};

// --- Portal ---
export const AlertDialogPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useAlertDialog();
  if (!open) return null;
  return createPortal(children, document.body);
};

// --- Overlay ---
export const AlertDialogOverlay: React.FC<{ className?: string }> = ({ className }) => {
  // AlertDialog usually prevents close on overlay click
  return (
    <div className={cn('mms-dialog-overlay mms-alert-dialog-overlay', className)} />
  );
};

// --- Content ---
export interface AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
  size?: '1' | '2' | '3' | '4';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export const AlertDialogContent: React.FC<AlertDialogContentProps> = (props) => {
  const { children, className, ...mmsBase } = props;
  const { mmsClasses } = extractMMSProps(mmsBase as any, 'alert-dialog', { size: '2', radius: '4' });

  return (
    <div className="mms-dialog-scroll">
      <div className="mms-dialog-scroll-padding">
        <div 
          role="alertdialog"
          aria-modal="true"
          className={cn('mms-dialog-content', mmsClasses, className)} 
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Action & Cancel ---
export const AlertDialogAction: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { setOpen } = useAlertDialog();
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      setOpen(false);
    }
  });
};

export const AlertDialogCancel: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { setOpen } = useAlertDialog();
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      setOpen(false);
    }
  });
};

// --- Reusing Dialog Titles & Descriptions ---
export const AlertDialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <h2 className={cn('mms-dialog-title', className)}>{children}</h2>
);

export const AlertDialogDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn('mms-dialog-description', className)}>{children}</p>
);

export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel
};

export default AlertDialog;
