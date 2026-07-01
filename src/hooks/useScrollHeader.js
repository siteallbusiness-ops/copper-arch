'use client';

import { useEffect, useState } from 'react';

const DEFAULT_THRESHOLD = 72;
const HERO_THRESHOLD_RATIO = 0.28;
const HERO_THRESHOLD_MAX = 140;

function getScrollThreshold(hero) {
  if (!hero) return DEFAULT_THRESHOLD;
  return Math.min(hero.offsetHeight * HERO_THRESHOLD_RATIO, HERO_THRESHOLD_MAX);
}

export function useScrollHeader(heroSelector) {
  const [scrollState, setScrollState] = useState({ isScrolled: false, scrollY: 0 });

  useEffect(() => {
    let hero = document.querySelector(heroSelector);
    let rafId = 0;

    function updateScrollState() {
      rafId = 0;
      const scrollY = window.scrollY || 0;
      const threshold = getScrollThreshold(hero);
      setScrollState((prev) => {
        const isScrolled = scrollY > threshold;
        if (prev.isScrolled === isScrolled && prev.scrollY === scrollY) return prev;
        return { isScrolled, scrollY };
      });
    }

    function onScroll() {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateScrollState);
    }

    function onResize() {
      hero = document.querySelector(heroSelector);
      updateScrollState();
    }

    updateScrollState();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' && hero
        ? new ResizeObserver(onResize)
        : null;
    if (resizeObserver && hero) resizeObserver.observe(hero);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      resizeObserver?.disconnect();
    };
  }, [heroSelector]);

  return scrollState;
}
