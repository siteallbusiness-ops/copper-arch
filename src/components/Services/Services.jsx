import Image from 'next/image';
import Container from '@/components/Common/Container/Container';
import Reveal from '@/components/Common/Reveal/Reveal';
import { IMAGES, IMAGE_DEFAULTS } from '@/constants/images';
import styles from './Services.module.css';

const VELVET_HOUR_ITEMS = [
  {
    src: IMAGES.midnightSphere,
    alt: 'Glossy chocolate dessert sphere on cream sauce with crushed meringue on marble',
    caption: 'Midnight sphere',
    objectPosition: 'center 42%',
  },
  {
    src: IMAGES.coupeCitrus,
    alt: 'Stemmed coupe of chocolate mousse with candied orange on a salon table',
    caption: 'Coupe & citrus',
    objectPosition: 'center 35%',
  },
  {
    src: IMAGES.flatbread,
    alt: 'Halloumi flatbread with labneh and pomegranate on marble with cutlery',
    caption: 'Salted honey flatbread',
    objectPosition: 'center 45%',
  },
  {
    src: IMAGES.archwaySandwich,
    alt: 'Tall stacked sandwich on pink ribbed plate with wooden skewer',
    caption: 'Archway sandwich',
    objectPosition: 'center 40%',
  },
];

export default function Services() {
  return (
    <section className={styles.sectionDark} aria-labelledby="velvet-hour-heading">
      <div className={styles.sectionAmbient} aria-hidden="true">
        <span className={styles.ambientGlow} />
        <span className={styles.ambientGrain} />
      </div>

      <Container>
        <div className={styles.sectionTop}>
          <Reveal className={styles.sectionHeader}>
            <div className={styles.headerBadge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <p className={styles.sectionKicker}>Velvet hour</p>
            </div>
            <h2 id="velvet-hour-heading" className={styles.sectionTitle}>
              Plates that belong after the sun drops.
            </h2>
          </Reveal>

          <Reveal className={styles.sectionAside} delay={80}>
            <p className={styles.sectionDescription}>
              Chocolate work, late citrus, and savouries for guests who arrive hungry. Nothing is &ldquo;deconstructed&rdquo; unless there is a reason you can taste.
            </p>
          </Reveal>
        </div>

        <div className={styles.galleryRail}>
          {VELVET_HOUR_ITEMS.map((item, index) => (
            <Reveal
              key={item.caption}
              as="figure"
              className={styles.plateCard}
              delay={index * 100}
            >
              <div className={styles.plateFrame}>
                <div className={styles.plateImageWrap}>
                  <Image
                    src={item.src}
                    width={IMAGE_DEFAULTS.width}
                    height={IMAGE_DEFAULTS.height}
                    alt={item.alt}
                    quality={92}
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={styles.plateImage}
                    style={{ objectPosition: item.objectPosition }}
                    sizes="(max-width: 576px) 85vw, (max-width: 900px) 45vw, 25vw"
                  />
                </div>
              </div>
              <figcaption className={styles.plateCaption}>
                <span className={styles.captionIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.captionText}>{item.caption}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
