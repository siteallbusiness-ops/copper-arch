import Image from 'next/image';
import Container from '@/components/Common/Container/Container';
import Reveal from '@/components/Common/Reveal/Reveal';
import {
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_NAME,
} from '@/constants/site';
import { HOURS_NOTE, HOURS_ROWS } from '@/constants/hours';
import { IMAGES, IMAGE_DEFAULTS } from '@/constants/images';
import styles from './Contact.module.css';

const ACCESS_LINES = [
  'Step at the door (4 cm).',
  'One accessible WC on the ground floor.',
  'High chairs by request.',
  'Dogs: water outside, pastries inside for humans only.',
];

export default function Contact() {
  return (
    <div className={styles.pageBody}>
      <section className={styles.arrivalRibbon} aria-label="Contact details">
        <Container>
          <Reveal className={styles.ribbonInner}>
            <div className={styles.ribbonItem}>
              <span className={styles.ribbonLabel}>Find us</span>
              <span className={styles.ribbonValue}>{SITE_ADDRESS}</span>
            </div>
            <span className={styles.ribbonDivider} aria-hidden="true" />
            <div className={styles.ribbonItem}>
              <span className={styles.ribbonLabel}>Call</span>
              <a href={`tel:${SITE_PHONE.replace(/\s/g, '')}`} className={styles.ribbonLink}>
                {SITE_PHONE}
              </a>
            </div>
            <span className={styles.ribbonDivider} aria-hidden="true" />
            <div className={styles.ribbonItem}>
              <span className={styles.ribbonLabel}>Write</span>
              <a href={`mailto:${SITE_EMAIL}`} className={styles.ribbonLink}>
                {SITE_EMAIL}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={styles.salonSpread} aria-labelledby="visit-spread-heading">
        <div className={styles.spreadGlow} aria-hidden="true" />
        <Container>
          <div className={styles.spreadGrid}>
            <Reveal className={styles.spreadVisual}>
              <figure className={styles.visualPrimary}>
                <div className={styles.visualFrame}>
                  <span className={styles.frameCorner} data-pos="tl" aria-hidden="true" />
                  <span className={styles.frameCorner} data-pos="tr" aria-hidden="true" />
                  <span className={styles.frameCorner} data-pos="bl" aria-hidden="true" />
                  <span className={styles.frameCorner} data-pos="br" aria-hidden="true" />
                  <Image
                    src={IMAGES.visitHero}
                    width={IMAGE_DEFAULTS.width}
                    height={IMAGE_DEFAULTS.height}
                    alt="Marble salon table with chocolate sphere, coupe mousse, and pistachio tin cake"
                    quality={92}
                    loading="lazy"
                    className={styles.visualPrimaryImage}
                    style={{ objectPosition: 'center 48%' }}
                    sizes="(max-width: 900px) 100vw, 52vw"
                  />
                </div>
                <figcaption className={styles.visualCaption}>Through the door</figcaption>
              </figure>
            </Reveal>

            <div className={styles.spreadDetails}>
              <Reveal delay={80}>
                <p className={styles.spreadKicker}>Your visit</p>
                <h2 id="visit-spread-heading" className={styles.spreadTitle}>
                  The lamp stays on until the last guest leaves.
                </h2>
              </Reveal>

              <div id="hours">
                <Reveal className={styles.hoursTicket} delay={140}>
                <div className={styles.ticketPerforation} aria-hidden="true" />
                <div className={styles.ticketHeader}>
                  <span className={styles.ticketBrand}>{SITE_NAME}</span>
                  <span className={styles.ticketStub}>Salon hours</span>
                </div>
                <h3 className={styles.ticketTitle}>Hours (sample)</h3>
                <dl className={styles.hoursList}>
                  {HOURS_ROWS.map(([day, hours]) => (
                    <div key={day} className={styles.hoursRow}>
                      <dt>{day}</dt>
                      <dd>{hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className={styles.ticketNote}>
                  {HOURS_NOTE}
                </p>
                </Reveal>
              </div>

              <Reveal className={styles.accessPanel} delay={200}>
                <h3 className={styles.accessTitle}>Access</h3>
                <ul className={styles.accessList}>
                  {ACCESS_LINES.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.quarterNote} aria-labelledby="quarter-heading">
        <Container>
          <div className={styles.quarterGrid}>
            <Reveal className={styles.quarterPoster}>
              <div className={styles.posterFrame}>
                <Image
                  src={IMAGES.poster}
                  width={IMAGE_DEFAULTS.width}
                  height={IMAGE_DEFAULTS.height}
                  alt="Cake Dine neighbourhood poster on warm cream paper"
                  quality={92}
                  loading="lazy"
                  className={styles.posterImage}
                  sizes="(max-width: 768px) 70vw, 280px"
                />
              </div>
            </Reveal>
            <Reveal className={styles.quarterCopy} delay={100}>
              <p className={styles.quarterKicker}>The quarter</p>
              <h2 id="quarter-heading" className={styles.quarterTitle}>
                Neighbourhood note
              </h2>
              <p className={styles.quarterText}>
                We borrow energy from the quarter&apos;s markets. Swap this poster tile for your own opening announcement.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={styles.glimpses} aria-label="Salon glimpses">
        <Container>
          <Reveal className={styles.glimpsesHeader}>
            <p className={styles.glimpsesKicker}>Before you arrive</p>
            <p className={styles.glimpsesLead}>A few frames from the room waiting for you.</p>
          </Reveal>
          <div className={styles.glimpseTrack}>
            <Reveal className={styles.glimpseCard} delay={0}>
              <figure className={styles.glimpseFigure}>
                <Image
                  src={IMAGES.glimpseRoom}
                  width={IMAGE_DEFAULTS.width}
                  height={IMAGE_DEFAULTS.height}
                  alt="Cake Dine salon interior with banquette seating and warm lamp light"
                  quality={92}
                  loading="lazy"
                  className={styles.glimpseImage}
                  style={{ objectPosition: 'center 45%' }}
                  sizes="(max-width: 768px) 85vw, 33vw"
                />
                <figcaption className={styles.glimpseCaption}>The room</figcaption>
              </figure>
            </Reveal>
            <Reveal className={styles.glimpseCard} delay={80}>
              <figure className={styles.glimpseFigure}>
                <Image
                  src={IMAGES.glimpseWall}
                  width={IMAGE_DEFAULTS.width}
                  height={IMAGE_DEFAULTS.height}
                  alt="Cake Dine feature wall with gold lettering and marble textures"
                  quality={92}
                  loading="lazy"
                  className={styles.glimpseImage}
                  style={{ objectPosition: 'center 40%' }}
                  sizes="(max-width: 768px) 85vw, 33vw"
                />
                <figcaption className={styles.glimpseCaption}>Lettering wall</figcaption>
              </figure>
            </Reveal>
            <Reveal className={styles.glimpseCard} delay={160}>
              <figure className={styles.glimpseFigure}>
                <Image
                  src={IMAGES.glimpseCounter}
                  width={IMAGE_DEFAULTS.width}
                  height={IMAGE_DEFAULTS.height}
                  alt="Marble counter at Cake Dine with chocolate desserts in warm lamp light"
                  quality={92}
                  loading="lazy"
                  className={styles.glimpseImage}
                  style={{ objectPosition: 'center 50%' }}
                  sizes="(max-width: 768px) 85vw, 33vw"
                />
                <figcaption className={styles.glimpseCaption}>Counter light</figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
