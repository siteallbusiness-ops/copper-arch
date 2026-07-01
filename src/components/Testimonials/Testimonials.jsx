import Button from '@/components/Common/Button/Button';
import Container from '@/components/Common/Container/Container';
import Reveal from '@/components/Common/Reveal/Reveal';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.finisher} aria-labelledby="finisher-heading">
      <div className={styles.finisherAmbient} aria-hidden="true">
        <span className={styles.finisherRing} />
        <span className={styles.finisherRing2} />
      </div>

      <Container>
        <Reveal className={styles.finisherInner}>
          <h2 id="finisher-heading" className={styles.finisherTitle}>
            Bring the messy parts of your week.
          </h2>
          <p className={styles.finisherCopy}>
            We will meet them with something warm on a plate, a clean napkin, and a door that closes quietly behind you.
          </p>
          <Button href="/services" variant="primary">
            See the board
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
