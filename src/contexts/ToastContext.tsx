import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  updateToast: (id: string, toast: Partial<Omit<Toast, 'id'>>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const updateToast = useCallback((id: string, updates: Partial<Omit<Toast, 'id'>>) => {
    setToasts((prev) => prev.map((t) => t.id === id ? { ...t, ...updates } : t));
  }, []);

  const addToast = useCallback((toast: Omit<Toast, 'id'>): string => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    
    setToasts((prev) => [...prev, newToast]);

    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }

    return id;
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, updateToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { toasts, addToast, updateToast, removeToast } = context;

  const toast = {
    success: (title: string, description?: string, duration?: number) => 
      addToast({ type: 'success', title, description, duration }),
    error: (title: string, description?: string, duration?: number) => 
      addToast({ type: 'error', title, description, duration }),
    info: (title: string, description?: string, duration?: number) => 
      addToast({ type: 'info', title, description, duration }),
    warning: (title: string, description?: string, duration?: number) => 
      addToast({ type: 'warning', title, description, duration }),
    loading: (title: string, description?: string) => 
      addToast({ type: 'loading', title, description, duration: 0 }),
    custom: (toast: Omit<Toast, 'id'>) => addToast(toast),
    promise: <T,>(
      promise: Promise<T>,
      messages: { loading: string; success: string; error: string },
      options?: { duration?: number }
    ) => {
      const id = addToast({ type: 'loading', title: messages.loading, duration: 0 });
      
      promise
        .then(() => {
          updateToast(id, { 
            type: 'success', 
            title: messages.success, 
            duration: options?.duration || 5000 
          });
          // Auto-remove after duration
          setTimeout(() => removeToast(id), options?.duration || 5000);
        })
        .catch(() => {
          updateToast(id, { 
            type: 'error', 
            title: messages.error, 
            duration: options?.duration || 5000 
          });
          // Auto-remove after duration
          setTimeout(() => removeToast(id), options?.duration || 5000);
        });
        
      return promise;
    }
  };

  return {
    toasts,
    toast,
    removeToast,
  };
};
