'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Reveal.module.css';
import { cn } from '@/utils/cn';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={cn(styles.reveal, isVisible && styles.isVisible, className)}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
