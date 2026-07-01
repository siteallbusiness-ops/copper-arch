'use client';

import { useId } from 'react';
import styles from './LogoMark.module.css';
import { cn } from '@/utils/cn';

const SIZES = {
  xs: 28,
  sm: 36,
  md: 40,
  lg: 44,
};

const TONE_GRADIENTS = {
  light: [
    { offset: '0%', color: '#c9a84c', opacity: 0.18 },
    { offset: '100%', color: '#c9a84c', opacity: 0.04 },
  ],
  dark: [
    { offset: '0%', color: '#a8873a', opacity: 0.22 },
    { offset: '100%', color: '#0f1210', opacity: 0.08 },
  ],
};

export default function LogoMark({ className, size = 'md', title, tone = 'light' }) {
  const dimension = SIZES[size] ?? SIZES.md;
  const gradientId = useId();
  const gradientStops = TONE_GRADIENTS[tone] ?? TONE_GRADIENTS.light;
  const sizeClass = styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}`];
  const toneClass = tone === 'dark' ? styles.toneDark : styles.toneLight;

  return (
    <svg
      className={cn(styles.mark, sizeClass, toneClass, className)}
      width={dimension}
      height={dimension}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gradientId} x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          {gradientStops.map((stop) => (
            <stop
              key={stop.offset}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={stop.opacity}
            />
          ))}
        </linearGradient>
      </defs>
      <rect
        x="1.25"
        y="1.25"
        width="33.5"
        height="33.5"
        rx="9"
        fill={`url(#${gradientId})`}
        className={styles.markFrame}
      />
      <path
        d="M18 10.25c-2.55 0-4.5 2.05-4.5 4.5 0 3.05 4.5 8.75 4.5 8.75s4.5-5.7 4.5-8.75c0-2.45-1.95-4.5-4.5-4.5Z"
        className={styles.markPin}
      />
      <circle cx="18" cy="14.5" r="2.1" className={styles.markPinHole} />
    </svg>
  );
}
