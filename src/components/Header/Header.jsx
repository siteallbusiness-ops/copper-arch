'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from '@/constants/site';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useHoursModal } from '@/context/HoursModalContext';
import Container from '@/components/Common/Container/Container';
import LogoMark from '@/components/Common/LogoMark/LogoMark';
import styles from './Header.module.css';
import { cn } from '@/utils/cn';

export default function Header({ heroSelector = '[data-hero]' }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isScrolled } = useScrollHeader(heroSelector);
  const { openHoursModal } = useHoursModal();
  const pathname = usePathname();
  const menuRef = useRef(null);
  const menuTriggerRef = useRef(null);

  useBodyScrollLock(isNavOpen);

  const handleNavClose = useCallback(() => setIsNavOpen(false), []);
  const handleNavToggle = useCallback(() => setIsNavOpen((prev) => !prev), []);

  function isActiveLink(href) {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    if (href.includes('#')) return pathname === href.split('#')[0];
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    if (!isNavOpen) return undefined;

    function handlePointerDown(event) {
      const target = event.target;
      if (menuRef.current?.contains(target) || menuTriggerRef.current?.contains(target)) return;
      handleNavClose();
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isNavOpen, handleNavClose]);

  useEffect(() => {
    if (!isNavOpen) return undefined;
    function handleKeyDown(event) {
      if (event.key === 'Escape') handleNavClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isNavOpen, handleNavClose]);

  useEffect(() => {
    handleNavClose();
  }, [pathname, handleNavClose]);

  function handleHoursOpen() {
    openHoursModal();
    handleNavClose();
  }

  const navLinks = NAV_LINKS.filter((link) => !link.isCta);
  const ctaLink = NAV_LINKS.find((link) => link.isCta);

  return (
    <>
      <header
        className={cn(
          styles.siteHeader,
          isScrolled && styles.isScrolled,
          isNavOpen && styles.menuOpen
        )}
      >
        <div className={styles.headerGlow} aria-hidden="true" />

        <Container className={styles.headerWrap}>
          <div className={styles.capsule}>
            <span className={styles.capsuleThread} aria-hidden="true" />

            {/* Logo */}
            <Link href="/" className={styles.logo} aria-label={`${SITE_NAME} home`}>
              <LogoMark
                className={styles.logoMark}
                size="xs"
                tone={isScrolled && !isNavOpen ? 'dark' : 'light'}
              />
              <span className={styles.logoText}>
                <span className={styles.logoWordmark}>
                  <span className={styles.logoWord}>Cake</span>
                  <span className={styles.logoJewel} aria-hidden="true" />
                  <span className={styles.logoWord}>Dine</span>
                </span>
                <span className={styles.logoSub}>{SITE_TAGLINE}</span>
              </span>
            </Link>

            {/* Desktop nav — segmented track */}
            <nav className={styles.desktopNav} aria-label="Primary navigation">
              <div className={styles.navTrack}>
                <ul className={styles.navList}>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          styles.navLink,
                          isActiveLink(link.href) && styles.navLinkActive
                        )}
                        aria-current={isActiveLink(link.href) ? 'page' : undefined}
                        aria-label={link.ariaLabel}
                      >
                        <span className={styles.navLinkLabel}>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Actions */}
            <div className={styles.headerActions}>
              {ctaLink && (
                <button
                  type="button"
                  className={styles.ctaTicket}
                  aria-label={ctaLink.ariaLabel}
                  onClick={handleHoursOpen}
                >
                  <span className={styles.ctaPerforation} aria-hidden="true" />
                  <span className={styles.ctaText}>{ctaLink.label}</span>
                  <span className={styles.ctaShine} aria-hidden="true" />
                </button>
              )}

              <button
                ref={menuTriggerRef}
                type="button"
                className={cn(styles.menuTrigger, isNavOpen && styles.menuTriggerOpen)}
                aria-expanded={isNavOpen}
                aria-controls="mobile-navigation"
                aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
                onClick={handleNavToggle}
              >
                <span className={styles.menuTriggerRing} aria-hidden="true" />
                <span className={styles.menuTriggerLines} aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile — editorial curtain menu */}
      <div
        className={cn(styles.mobileCurtain, isNavOpen && styles.mobileCurtainOpen)}
        aria-hidden={!isNavOpen}
      >
        <div className={styles.mobileBackdrop} onClick={handleNavClose} aria-hidden="true" />

        <nav
          id="mobile-navigation"
          ref={menuRef}
          className={styles.mobileNav}
          aria-label="Mobile navigation"
          aria-hidden={!isNavOpen}
        >
          <div className={styles.mobileNavArch} aria-hidden="true" />

          <p className={styles.mobileNavKicker}>Navigate</p>

          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href ?? link.label}
                className={styles.mobileNavItem}
                style={{ '--item-index': index }}
              >
                {link.isCta ? (
                  <button
                    type="button"
                    className={styles.mobileCtaTicket}
                    aria-label={link.ariaLabel}
                    onClick={handleHoursOpen}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className={styles.ctaPerforation} aria-hidden="true" />
                    <span className={styles.ctaText}>{link.label}</span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      styles.mobileNavLink,
                      isActiveLink(link.href) && styles.mobileNavLinkActive
                    )}
                    aria-current={isActiveLink(link.href) ? 'page' : undefined}
                    aria-label={link.ariaLabel}
                    onClick={handleNavClose}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className={styles.mobileNavIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.mobileNavLabel}>{link.label}</span>
                    <span className={styles.mobileNavArrow} aria-hidden="true">→</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <p className={styles.mobileNavFooter}>{SITE_TAGLINE}</p>
        </nav>
      </div>
    </>
  );
}
