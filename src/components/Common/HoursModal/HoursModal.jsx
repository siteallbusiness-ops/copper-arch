'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { HOURS_NOTE, HOURS_ROWS, isTodayHoursRow } from '@/constants/hours';
import { SITE_ADDRESS, SITE_NAME } from '@/constants/site';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import styles from './HoursModal.module.css';
import { cn } from '@/utils/cn';

export default function HoursModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hours-modal-title"
        aria-describedby="hours-modal-note"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close hours"
        >
          <span aria-hidden="true" />
        </button>

        <div className={styles.ticket}>
          <div className={styles.perforation} aria-hidden="true" />

          <div className={styles.ticketHeader}>
            <div className={styles.brandBlock}>
              <p className={styles.brandName}>{SITE_NAME}</p>
              <p className={styles.brandAddress}>{SITE_ADDRESS}</p>
            </div>
            <span className={styles.stubLabel}>Salon ticket</span>
          </div>

          <div className={styles.ticketBody}>
            <p className={styles.kicker}>Opening hours</p>
            <h2 id="hours-modal-title" className={styles.title}>
              Hours (sample)
            </h2>

            <dl className={styles.hoursList}>
              {HOURS_ROWS.map(([day, hours]) => {
                const isToday = isTodayHoursRow(day);
                return (
                  <div
                    key={day}
                    className={cn(styles.hoursRow, isToday && styles.hoursRowToday)}
                  >
                    <dt>
                      {day}
                      {isToday && (
                        <span className={styles.todayBadge}>Today</span>
                      )}
                    </dt>
                    <dd>{hours}</dd>
                  </div>
                );
              })}
            </dl>

            <p id="hours-modal-note" className={styles.note}>
              {HOURS_NOTE}
            </p>
          </div>

          <div className={styles.ticketFooter}>
            <Link href="/contact" className={styles.visitLink} onClick={onClose}>
              Full visit details
              <span className={styles.visitArrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
