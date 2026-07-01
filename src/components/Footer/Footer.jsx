import Link from 'next/link';
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SITE_PHONE,
  FOOTER_SOCIAL,
  FOOTER_LEGAL,
} from '@/constants/site';
import HoursModalTrigger from '@/components/Common/HoursModalTrigger/HoursModalTrigger';
import Container from '@/components/Common/Container/Container';
import LogoMark from '@/components/Common/LogoMark/LogoMark';
import FooterSocial from './FooterSocial';
import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

function FooterColumn({ title, children }) {
  return (
    <div className={styles.footColumn}>
      <h3 className={styles.footHeading}>{title}</h3>
      {children}
    </div>
  );
}

function FooterLinks({ items }) {
  return (
    <ul className={styles.footList}>
      {items.map((item) => (
        <li key={item.label} className={styles.footListItem}>
          {item.opensHoursModal ? (
            <HoursModalTrigger className={styles.footLink} ariaLabel={item.label}>
              {item.label}
            </HoursModalTrigger>
          ) : item.external ? (
            <a href={item.href} className={styles.footLink}>
              {item.label}
            </a>
          ) : (
            <Link href={item.href} className={styles.footLink}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer({ variant = 'home' }) {
  const descriptions = {
    home: 'Fictional salon for demo layouts. Replace copy, hours, and imagery with your venue.',
    menu: 'Demo menu — adjust currency, diet codes, and service charge notes.',
    visit: '14 Auburn Walk, Old Textile Quarter (fictional). Map embed goes here in production.',
  };

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.accentLine} aria-hidden="true" />

      <Container className={styles.footerMain}>
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <Link href="/" className={styles.brandLogo} aria-label={`${SITE_NAME} home`}>
              <LogoMark className={styles.brandMark} size="sm" title={`${SITE_NAME} logo`} />
              <span className={styles.brandName}>{SITE_NAME}</span>
            </Link>
            <p className={styles.brandTagline}>{SITE_TAGLINE}</p>
            <p className={styles.footCopy}>{descriptions[variant]}</p>
            <FooterSocial links={FOOTER_SOCIAL} />
          </div>

          {variant === 'home' && (
            <>
              <FooterColumn title="Visit">
                <FooterLinks
                  items={[
                    { href: '/contact', label: '14 Auburn Walk' },
                    { opensHoursModal: true, label: 'Hours & access' },
                    { href: `mailto:${SITE_EMAIL}`, label: SITE_EMAIL, external: true },
                    { href: SITE_URL, label: SITE_URL.replace('https://', ''), external: true },
                  ]}
                />
              </FooterColumn>
              <FooterColumn title="Explore">
                <FooterLinks
                  items={[
                    { href: '/services', label: 'Dessert board' },
                    { href: '/services#seasonal', label: 'Seasonal tins' },
                  ]}
                />
              </FooterColumn>
            </>
          )}

          {variant === 'menu' && (
            <>
              <FooterColumn title="Visit">
                <FooterLinks
                  items={[
                    { href: '/contact', label: '14 Auburn Walk' },
                    { opensHoursModal: true, label: 'Hours' },
                  ]}
                />
              </FooterColumn>
              <FooterColumn title="Contact">
                <FooterLinks
                  items={[
                    { href: `mailto:${SITE_EMAIL}`, label: SITE_EMAIL, external: true },
                    { href: SITE_URL, label: SITE_URL.replace('https://', ''), external: true },
                  ]}
                />
              </FooterColumn>
            </>
          )}

          {variant === 'visit' && (
            <>
              <FooterColumn title="Contact">
                <FooterLinks
                  items={[
                    { href: 'tel:+441613300000', label: SITE_PHONE, external: true },
                    { href: `mailto:${SITE_EMAIL}`, label: SITE_EMAIL, external: true },
                    { href: SITE_URL, label: SITE_URL.replace('https://', ''), external: true },
                  ]}
                />
              </FooterColumn>
              <FooterColumn title="Salon">
                <FooterLinks
                  items={[
                    { href: '/', label: 'Story' },
                    { href: '/services', label: 'Board' },
                  ]}
                />
              </FooterColumn>
            </>
          )}
        </div>
      </Container>

      <div className={styles.footerBottom}>
        <Container className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            &copy; {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <nav className={styles.legalNav} aria-label="Legal navigation">
            <ul className={styles.legalList}>
              {FOOTER_LEGAL.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.legalLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
