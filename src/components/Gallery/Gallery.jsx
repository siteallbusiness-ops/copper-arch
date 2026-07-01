import Image from 'next/image';
import Button from '@/components/Common/Button/Button';
import Container from '@/components/Common/Container/Container';
import Reveal from '@/components/Common/Reveal/Reveal';
import { IMAGES, IMAGE_DEFAULTS } from '@/constants/images';
import styles from './Gallery.module.css';

const TILT_ITEMS = [
  {
    src: IMAGES.tinCake,
    alt: 'Dessert in a round metal tin with pistachio crumble and a gold spoon',
    caption: 'Tin cake · pistachio crumble',
  },
  {
    src: IMAGES.puddingPour,
    alt: 'Custard poured from a pitcher onto a square of warm chocolate cake',
    caption: 'Warm pudding pour',
  },
  {
    src: IMAGES.tableForTwo,
    alt: 'Two guests sharing brunch at a marble table with pink wall behind',
    caption: 'Marble table for two',
  },
];

const ROOM_MENU_ITEMS = [
  {
    src: IMAGES.midnightSphere,
    alt: 'Chocolate dessert sphere on cream sauce served on marble in the salon',
    caption: 'Midnight sphere',
  },
  {
    src: IMAGES.coupeCitrus,
    alt: 'Stemmed coupe of chocolate mousse with candied orange on a salon table',
    caption: 'Coupe & citrus',
  },
  {
    src: IMAGES.flatbread,
    alt: 'Salted honey flatbread with labneh and pomegranate on marble',
    caption: 'Salted honey flatbread',
  },
];

const PHOTO_DUO_ITEMS = [
  {
    src: IMAGES.glimpseWall,
    alt: 'Cake Dine feature wall with gold lettering and marble textures',
    caption: 'Archway wall detail',
  },
  {
    src: IMAGES.flatbread,
    alt: 'Halloumi flatbread with labneh and pomegranate on marble with cutlery',
    caption: 'Midday flatbread',
  },
];

export default function Gallery() {
  return (
    <>
      <section className={styles.interlude} aria-label="Salon table interlude">
        <div className={styles.interludeAmbient} aria-hidden="true">
          <span className={styles.interludeArch} />
          <span className={styles.interludeGlow} />
        </div>

        <Container className={styles.interludeContainer}>
          <Reveal className={styles.interludeLayout}>
            <div className={styles.interludeEditorial}>
              <p className={styles.interludeKicker}>Shared table</p>
              <p className={styles.interludeHeadline}>
                The pause between pours is part of the menu.
              </p>
              <p className={styles.interludeSubline}>
                Boards meant for passing, coupes that cool while conversation warms, crumbs that stay on the marble a beat too long.
              </p>
              <ul className={styles.interludeChips} aria-label="Table highlights">
                <li>Overhead brunch</li>
                <li>Cold coupe</li>
                <li>Marble daylight</li>
              </ul>
            </div>

            <div className={styles.interludeStage}>
              <figure className={styles.interludePanorama}>
                <div className={styles.panoramaFrame}>
                  <Image
                    src={IMAGES.brunchSpread}
                    width={IMAGE_DEFAULTS.width}
                    height={IMAGE_DEFAULTS.height}
                    alt="Overhead brunch spread with flatbread, skillet, and toast on marble"
                    quality={92}
                    loading="lazy"
                    className={styles.panoramaImage}
                    style={{ objectPosition: 'center 55%' }}
                    sizes="(max-width: 768px) 100vw, 65vw"
                  />
                </div>
                <figcaption className={styles.panoramaCaption}>
                  <span className={styles.captionMark} aria-hidden="true" />
                  Brunch spread · pass the skillet
                </figcaption>
              </figure>

              <figure className={styles.interludeFloat}>
                <div className={styles.floatFrame}>
                  <Image
                    src={IMAGES.coupeCitrus}
                    width={IMAGE_DEFAULTS.width}
                    height={IMAGE_DEFAULTS.height}
                    alt="Stemmed coupe of chocolate mousse with candied orange at Cake Dine"
                    quality={92}
                    loading="lazy"
                    className={styles.floatImage}
                    style={{ objectPosition: 'center 30%' }}
                    sizes="(max-width: 768px) 85vw, 220px"
                  />
                </div>
                <figcaption className={styles.floatCaption}>Coupe &amp; citrus</figcaption>
              </figure>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={styles.roomChamber} aria-labelledby="room-heading">
        <div className={styles.roomMarble} aria-hidden="true" />
        <Container className={styles.roomContainer}>
          <div className={styles.roomLayout}>
            <Reveal className={styles.roomGallery}>
              <figure className={styles.roomPrimary}>
                <div className={styles.roomFrame}>
                  <span className={styles.frameCorner} data-pos="tl" aria-hidden="true" />
                  <span className={styles.frameCorner} data-pos="tr" aria-hidden="true" />
                  <span className={styles.frameCorner} data-pos="bl" aria-hidden="true" />
                  <span className={styles.frameCorner} data-pos="br" aria-hidden="true" />
                  <Image
                    src={IMAGES.salonHero}
                    width={IMAGE_DEFAULTS.width}
                    height={IMAGE_DEFAULTS.height}
                    alt="Cake Dine salon interior with marble table, banquette seating, and evening desserts"
                    quality={92}
                    loading="lazy"
                    className={styles.roomPrimaryImage}
                    style={{ objectPosition: 'center 45%' }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <figcaption className={styles.roomHeroCaption}>The salon at velvet hour</figcaption>
              </figure>

              <div className={styles.roomMenuStrip} aria-label="Plates from the board">
                <p className={styles.roomMenuLabel}>On the table tonight</p>
                <div className={styles.roomMenuGrid}>
                  {ROOM_MENU_ITEMS.map((item) => (
                    <figure key={item.caption} className={styles.roomMenuCard}>
                      <div className={styles.roomMenuImageWrap}>
                        <Image
                          src={item.src}
                          width={IMAGE_DEFAULTS.width}
                          height={IMAGE_DEFAULTS.height}
                          alt={item.alt}
                          quality={90}
                          loading="lazy"
                          className={styles.roomMenuImage}
                          sizes="(max-width: 576px) 28vw, 140px"
                        />
                      </div>
                      <figcaption className={styles.roomMenuCaption}>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className={styles.roomScript} delay={120}>
              <div className={styles.roomScriptInner}>
                <p className={styles.roomKicker}>The room</p>
                <h2 id="room-heading" className={styles.roomTitle}>
                  Marble that catches voice, not echo.
                </h2>
                <p className={styles.roomLead}>
                  Banquettes the colour of strong tea, tables low enough for elbows, lamps that forgive everyone&apos;s skin tone. We built the room for conversations that run long.
                </p>
                <div className={styles.roomSensory}>
                  <p className={styles.sensoryLine}>
                    Friday nights smell like browned butter and cold metal trays.
                  </p>
                  <p className={styles.sensoryLine}>
                    Sunday afternoons smell like coffee grounds and rain through the arch.
                  </p>
                </div>
                <Button href="/contact" variant="primary" className={styles.roomButton}>
                  Plan a visit
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={styles.rowTilt} aria-labelledby="daylight-heading">
        <Container>
          <Reveal className={styles.rowTiltHeader}>
            <p className={styles.eyebrowMist}>Daylight pastry</p>
            <h2 id="daylight-heading" className={styles.rowTiltTitle}>
              Three things regulars pretend not to order every week.
            </h2>
            <p className={styles.rowTiltLead}>
              We rotate the tilt cards when the light shifts — same recipes, new crumbs. Ask for the tin cakes if you need something to carry home for someone who &ldquo;does not have a sweet tooth.&rdquo;
            </p>
          </Reveal>

          <div className={styles.tiltGrid}>
            {TILT_ITEMS.map((item, index) => (
              <Reveal
                key={item.caption}
                as="figure"
                className={`${styles.tiltCard} ${styles[`tilt${index + 1}`]}`}
                delay={index * 90}
              >
                <div className={styles.tiltImageWrap}>
                  <Image
                    src={item.src}
                    width={IMAGE_DEFAULTS.width}
                    height={IMAGE_DEFAULTS.height}
                    alt={item.alt}
                    loading="lazy"
                    className={styles.tiltImage}
                  />
                  <span className={styles.cardShine} aria-hidden="true" />
                </div>
                <figcaption className={styles.tiltCaption}>{item.caption}</figcaption>
              </Reveal>
            ))}
          </div>

          <div className={styles.photoDuo}>
            {PHOTO_DUO_ITEMS.map((item, index) => (
              <Reveal
                key={item.caption}
                as="figure"
                className={styles.photoDuoItem}
                delay={index * 100}
              >
                <div className={styles.photoDuoImageWrap}>
                  <Image
                    src={item.src}
                    width={IMAGE_DEFAULTS.width}
                    height={IMAGE_DEFAULTS.height}
                    alt={item.alt}
                    loading="lazy"
                    className={styles.photoDuoImage}
                  />
                  <span className={styles.cardShine} aria-hidden="true" />
                </div>
                <figcaption className={styles.photoDuoCaption}>{item.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
