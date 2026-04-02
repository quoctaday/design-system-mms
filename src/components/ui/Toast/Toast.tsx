import React from 'react';
import { createPortal } from 'react-dom';
import { 
  RiCheckFill, 
  RiErrorWarningFill, 
  RiInformationFill, 
  RiCloseLine,
  RiLoader4Line
} from 'react-icons/ri';
import { type Toast, useToast } from '../../../contexts/ToastContext';
import './Toast.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  success: <RiCheckFill className="toast-status-icon" />,
  error: <RiErrorWarningFill className="toast-status-icon" />,
  info: <RiInformationFill className="toast-status-icon" />,
  warning: <RiErrorWarningFill className="toast-status-icon" />,
  loading: <RiLoader4Line className="toast-status-icon toast-spin" />,
};

const ToastItem: React.FC<{ toast: Toast }> = ({ toast }) => {
  const { removeToast } = useToast();

  return (
    <div className={`mms-toast mms-toast-${toast.type}`}>
      {ICON_MAP[toast.type as keyof typeof ICON_MAP]}
      <div className="toast-content">
        <h4 className="toast-title">{toast.title}</h4>
        {toast.description && <p className="toast-description">{toast.description}</p>}
        {toast.action && (
          <button 
            className="toast-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              toast.action?.onClick();
              removeToast(toast.id);
            }}
          >
            {toast.action.label}
          </button>
        )}
      </div>
      <button 
        className="toast-close-btn" 
        onClick={() => removeToast(toast.id)}
        aria-label="Close"
      >
        <RiCloseLine />
      </button>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="mms-toast-container">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>,
    document.body
  );
};
