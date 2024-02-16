import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [messageValue, setaMessageValue] = useState('');
  const [variantValue, setVariantValue] = useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = useState([]);

  const handlecreateToast = (e) => {
    e.preventDefault();

    const newToasts = [...toasts, { id: new Date().getTime(), message: messageValue, variant: variantValue }];
    setToasts(newToasts);
    setVariantValue(VARIANT_OPTIONS[0]);
    setaMessageValue('');
  };

  const handleDismiss = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
      <form className={styles.controlsWrapper} onSubmit={handlecreateToast}>
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id='message' className={styles.messageInput} value={messageValue} onChange={(e) => setaMessageValue(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type='radio'
                  name='variant'
                  value={variant}
                  onChange={(e) => setVariantValue(e.target.value)}
                  checked={variant === variantValue}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
