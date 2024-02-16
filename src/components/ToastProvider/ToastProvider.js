import React, { useState } from 'react';
import { useKeyDown } from '../../hooks/use-keydown.js';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useKeyDown('Escape', () => {
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
