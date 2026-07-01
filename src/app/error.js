'use client';

import { useEffect } from 'react';
import Button from '@/components/Common/Button/Button';
import styles from './error.module.css';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <p className={styles.kicker}>Salon pause</p>
        <h1 className={styles.title}>Something went wrong on our side.</h1>
        <p className={styles.text}>
          The room is still here — try refreshing, or return home while we reset the pass.
        </p>
        <div className={styles.actions}>
          <Button type="button" variant="primary" onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/" variant="ghost">
            Back to salon
          </Button>
        </div>
      </div>
    </div>
  );
}
