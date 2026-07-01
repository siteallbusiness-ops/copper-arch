'use client';

import styles from './error.module.css';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className={styles.wrap}>
        <div className={styles.panel}>
          <p className={styles.kicker}>Salon pause</p>
          <h1 className={styles.title}>Something went wrong.</h1>
          <p className={styles.text}>{error?.message || 'An unexpected error occurred.'}</p>
          <button type="button" className={styles.retry} onClick={() => reset()}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
