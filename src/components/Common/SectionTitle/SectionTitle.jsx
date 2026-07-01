import styles from './SectionTitle.module.css';
import { cn } from '@/utils/cn';

export default function SectionTitle({
  kicker,
  title,
  description,
  variant = 'default',
  className = '',
}) {
  return (
    <div className={cn(styles.sectionTitle, styles[variant], className)}>
      {kicker && <p className={styles.eyebrow}>{kicker}</p>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
