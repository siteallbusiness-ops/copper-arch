import Container from '@/components/Common/Container/Container';
import Reveal from '@/components/Common/Reveal/Reveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.bandCream} aria-labelledby="about-heading">
      <div className={styles.sectionFade} aria-hidden="true" />
      <div className={styles.sectionTexture} aria-hidden="true" />

      <Container>
        <div className={styles.editorialGrid}>
          <Reveal className={styles.primaryColumn}>
            <div className={styles.sectionLabel}>
              <span className={styles.labelDot} aria-hidden="true" />
              <p className={styles.eyebrowMist}>Letter from the pass</p>
            </div>

            <blockquote className={styles.pullquote}>
              <p className={styles.pullquoteText} id="about-heading">
                &ldquo;If it looks perfect on a moodboard, we probably sent it back.&rdquo;
              </p>
            </blockquote>

            <div className={styles.prose}>
              <p className={styles.paragraph}>
                Cake Dine started when two pastry cooks leased a drafty storefront nobody else wanted. The name is simple: cake worth sitting down for, and a room that treats dinner dessert like the main event.
              </p>
              <p className={styles.paragraph}>
                Guests bring first dates, tired parents, and friends who &ldquo;do not do dessert.&rdquo; They leave with chocolate on their cuffs and a second reservation.
              </p>
            </div>

            <aside className={styles.stamp} role="note">
              <span className={styles.stampAccent} aria-hidden="true" />
              <div className={styles.stampBody}>
                <strong>House rule</strong>
                <span>Share plates encouraged. Judgement for licking spoons discouraged.</span>
              </div>
            </aside>
          </Reveal>

          <Reveal className={styles.secondaryPanel} delay={100}>
            <div className={styles.sectionLabel}>
              <span className={styles.labelDot} aria-hidden="true" />
              <p className={styles.eyebrowMist}>What authentic means here</p>
            </div>

            <div className={styles.prose}>
              <p className={styles.paragraph}>
                Handwritten cross-outs on the printed board. A playlist that wanders into soul, then silence during the last pour. Staff who will tell you &ldquo;order the smaller portion&rdquo; when they mean it.
              </p>
              <p className={styles.paragraph}>
                Every photograph on this demo is styled for Cake Dine — replace them with your own kitchen and room when you go live.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
