import React, { useState } from 'react';
import { useEscapeKey } from '../../hooks/use-escape-key.js';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  const createToast = (message, variant) => {
    const newToasts = [...toasts, { id: new Date().getTime(), message, variant }];
    setToasts(newToasts);
  };

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  return <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
