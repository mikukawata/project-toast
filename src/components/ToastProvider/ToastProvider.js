import React, { useState } from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

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
