'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Common/Reveal/Reveal';
import Container from '@/components/Common/Container/Container';
import { IMAGES, IMAGE_DEFAULTS } from '@/constants/images';
import styles from './MenuGalleryRail.module.css';
import { cn } from '@/utils/cn';

const BOARD_GALLERY = [
  {
    src: IMAGES.brunchSpread,
    alt: 'Overhead brunch spread with flatbread, skillet, and toast on marble',
    caption: 'Shared board',
    category: 'Daylight',
    price: '£28',
  },
  {
    src: IMAGES.midnightSphere,
    alt: 'Glossy chocolate dessert sphere on cream sauce with crushed meringue',
    caption: 'Midnight sphere',
    category: 'Velvet hour',
    price: '£11',
  },
  {
    src: IMAGES.coupeCitrus,
    alt: 'Stemmed coupe of chocolate mousse with candied orange',
    caption: 'Coupe & citrus',
    category: 'Velvet hour',
    price: '£9',
  },
  {
    src: IMAGES.flatbread,
    alt: 'Salted honey flatbread with labneh and pomegranate on marble',
    caption: 'Salted flatbread',
    category: 'Velvet hour',
    price: '£10',
  },
  {
    src: IMAGES.archwaySandwich,
    alt: 'Tall stacked sandwich on pink ribbed plate',
    caption: 'Archway sandwich',
    category: 'Velvet hour',
    price: '£12',
  },
  {
    src: IMAGES.puddingPour,
    alt: 'Custard poured from a pitcher onto warm chocolate cake',
    caption: 'Warm pudding pour',
    category: 'Daylight',
    price: '£8',
  },
  {
    src: IMAGES.tinCake,
    alt: 'Pistachio crumble dessert in a round metal tin with gold spoon',
    caption: 'Pistachio tin',
    category: 'Seasonal',
    price: '£13',
  },
  {
    src: IMAGES.tinService,
    alt: 'Guest holds a round Cake Dine dessert tin at the counter',
    caption: 'Tin service',
    category: 'Seasonal',
    price: '£14',
  },
  {
    src: IMAGES.carrotTin,
    alt: 'Guest presents a carrot cake tin at the Cake Dine salon',
    caption: 'Counter handoff',
    category: 'Seasonal',
    price: '£14',
  },
  {
    src: IMAGES.tableForTwo,
    alt: 'Two guests sharing brunch at a marble table',
    caption: 'Marble for two',
    category: 'Daylight',
    price: '£28',
  },
  {
    src: IMAGES.tinWalk,
    alt: 'Hands hold a Cake Dine dessert tin above autumn leaves outdoors',
    caption: 'Takeaway walk',
    category: 'Seasonal',
    price: '—',
  },
  {
    src: IMAGES.parkPairing,
    alt: 'Hands hold a coffee cup and a small Cake Dine dessert tin outdoors',
    caption: 'Park bench pairing',
    category: 'Seasonal',
    price: '£11',
  },
];

const SCROLL_STEP = 320;
const AUTO_SCROLL_MS = 4500;
const USER_PAUSE_MS = 8000;

export default function MenuGalleryRail() {
  const trackRef = useRef(null);
  const shellRef = useRef(null);
  const pauseTimerRef = useRef(null);
  const isPausedRef = useRef(false);
  const isUserInteractingRef = useRef(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const pauseAutoPlay = useCallback((duration = USER_PAUSE_MS) => {
    isUserInteractingRef.current = true;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, duration);
  }, []);

  const scrollToNext = useCallback((behavior = 'smooth') => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    if (scrollLeft >= maxScroll - 8) {
      track.scrollTo({ left: 0, behavior });
    } else {
      const nextLeft = Math.min(scrollLeft + SCROLL_STEP, maxScroll);
      track.scrollTo({ left: nextLeft, behavior });
    }
  }, []);

  const scrollBy = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;

    pauseAutoPlay();

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;

    if (direction > 0 && scrollLeft >= maxScroll - 8) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction < 0 && scrollLeft <= 8) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: direction * SCROLL_STEP, behavior: 'smooth' });
    }
  }, [pauseAutoPlay]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      setIsAutoPlaying(false);
      return undefined;
    }

    setIsAutoPlaying(true);

    const tick = () => {
      try {
        if (isPausedRef.current || isUserInteractingRef.current) return;
        scrollToNext('smooth');
      } catch {
        /* ignore scroll errors when layout is not ready */
      }
    };

    const intervalId = setInterval(tick, AUTO_SCROLL_MS);
    return () => clearInterval(intervalId);
  }, [scrollToNext]);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const handleUserInteraction = useCallback(() => {
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  const handleShellEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleShellLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  return (
    <section className={styles.gallerySection} aria-labelledby="board-gallery-heading">
      <div className={styles.galleryAmbient} aria-hidden="true" />
      <Container>
        <Reveal className={styles.galleryHeader}>
          <p className={styles.galleryKicker}>From the pass</p>
          <h2 id="board-gallery-heading" className={styles.galleryTitle}>
            Plates worth a second look
          </h2>
          <p className={styles.galleryLead}>
            Twelve frames from tonight&apos;s board — the rail moves on its own; hover to pause.
          </p>
        </Reveal>

        <div
          ref={shellRef}
          className={styles.railShell}
          onMouseEnter={handleShellEnter}
          onMouseLeave={handleShellLeave}
          onFocus={handleShellEnter}
          onBlur={(event) => {
            if (!shellRef.current?.contains(event.relatedTarget)) {
              handleShellLeave();
            }
          }}
        >
          <button
            type="button"
            className={cn(styles.railNav, styles.railNavPrev)}
            onClick={() => scrollBy(-1)}
            aria-label="Scroll gallery left"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className={styles.railViewport}>
            <span className={styles.railFadeLeft} aria-hidden="true" />
            <span className={styles.railFadeRight} aria-hidden="true" />

            <div
              ref={trackRef}
              className={styles.railTrack}
              onPointerDown={handleUserInteraction}
              onWheel={handleUserInteraction}
              onTouchStart={handleUserInteraction}
              tabIndex={0}
              role="region"
              aria-label="Board gallery scroll strip"
              aria-live="off"
            >
              {BOARD_GALLERY.map((item, index) => (
                <Reveal
                  key={item.caption}
                  as="figure"
                  className={styles.boardCard}
                  delay={Math.min(index * 60, 360)}
                >
                  <div className={styles.cardFrame}>
                    <span className={styles.cardIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.cardCategory}>{item.category}</span>
                    <div className={styles.cardImageWrap}>
                      <Image
                        src={item.src}
                        width={IMAGE_DEFAULTS.width}
                        height={IMAGE_DEFAULTS.height}
                        alt={item.alt}
                        quality={92}
                        loading={index < 3 ? 'eager' : 'lazy'}
                        className={styles.cardImage}
                        sizes="(max-width: 576px) 78vw, (max-width: 992px) 42vw, 280px"
                      />
                      <span className={styles.cardShine} aria-hidden="true" />
                    </div>
                    <figcaption className={styles.cardCaption}>
                      <span className={styles.captionName}>{item.caption}</span>
                      <span className={styles.captionPrice}>{item.price}</span>
                    </figcaption>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={cn(styles.railNav, styles.railNavNext)}
            onClick={() => scrollBy(1)}
            aria-label="Scroll gallery right"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <p className={styles.railHint}>
          <span className={styles.hintLine} aria-hidden="true" />
          {isAutoPlaying ? (
            <>
              <span className={styles.autoDot} aria-hidden="true" />
              Auto-scrolling · hover to pause
            </>
          ) : (
            'Swipe or scroll to browse the full board'
          )}
          <span className={styles.hintLine} aria-hidden="true" />
        </p>
      </Container>
    </section>
  );
}
