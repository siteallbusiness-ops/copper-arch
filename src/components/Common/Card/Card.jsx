import styles from './Card.module.css';
import { cn } from '@/utils/cn';

export default function Card({ children, className = '', id }) {
  return (
    <div className={cn(styles.card, className)} id={id}>
      {children}
    </div>
  );
}
