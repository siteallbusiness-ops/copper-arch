import Link from 'next/link';
import styles from './Button.module.css';
import { cn } from '@/utils/cn';

const VARIANT_CLASS = {
  primary: styles.primary,
  ghost: styles.ghost,
  nav: styles.nav,
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ariaLabel,
  onClick,
  type = 'button',
}) {
  const classes = cn(styles.button, VARIANT_CLASS[variant], className);

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

    if (isExternal) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
