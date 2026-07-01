'use client';

import { useHoursModal } from '@/context/HoursModalContext';
import styles from './HoursModalTrigger.module.css';
import { cn } from '@/utils/cn';

export default function HoursModalTrigger({ children, className = '', ariaLabel = 'Opening hours' }) {
  const { openHoursModal } = useHoursModal();

  return (
    <button
      type="button"
      className={cn(styles.trigger, className)}
      onClick={openHoursModal}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
