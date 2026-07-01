import Image from 'next/image';
import Button from '@/components/Common/Button/Button';
import Container from '@/components/Common/Container/Container';
import { IMAGES } from '@/constants/images';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.heroAmbient} aria-hidden="true">
        <span className={styles.orb1} />
        <span className={styles.orb2} />
        <span className={styles.gridLines} />
      </div>

      <Container className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <div className={styles.heroIntro}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <p className={styles.eyebrow}>Walk-ins · reservations after six</p>
          </div>

          <h1 className={styles.heroTitle}>
            A room that still believes in dessert as a slow evening.
          </h1>

          <p className={styles.heroLead}>
            We are not a template. We are a narrow storefront with too many spoons, servers who know the difference between &ldquo;extra hot&rdquo; and &ldquo;just warm,&rdquo; and a pastry board that changes when the market does.
          </p>

          <div className={styles.heroActions}>
            <Button href="/services" variant="primary">Read tonight&apos;s board</Button>
            <Button href="/contact" variant="ghost">Find us</Button>
          </div>

          <div className={styles.heroMeta} aria-label="Salon facts">
            <div className={styles.metaCard}>
              <strong>Since</strong>
              <span>2014 in the textile warehouses</span>
            </div>
            <div className={styles.metaCard}>
              <strong>Kitchen</strong>
              <span>Open flame &amp; marble pass</span>
            </div>
            <div className={styles.metaCard}>
              <strong>Last seating</strong>
              <span>10:15 Thu–Sat</span>
            </div>
          </div>
        </div>

        <figure className={styles.heroVisual}>
          <span className={styles.heroFrameGlow} aria-hidden="true" />
          <div className={styles.heroShot}>
            <Image
              src={IMAGES.hero}
              alt="Marble salon table at Cake Dine with chocolate sphere, coupe, and evening lamp light"
              fill
              priority
              quality={92}
              className={styles.heroImage}
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
        </figure>
      </Container>
    </section>
  );
}
