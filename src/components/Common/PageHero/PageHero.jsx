import Container from '@/components/Common/Container/Container';
import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className={styles.pageHero} data-hero>
      <Container>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </section>
  );
}
