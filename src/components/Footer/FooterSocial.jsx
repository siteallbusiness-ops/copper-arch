import styles from './FooterSocial.module.css';

function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'facebook') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 8.5V7.25C14 6.56 14.56 6 15.25 6H16.5V3.5H14.75C12.68 3.5 11 5.18 11 7.25V8.5H9V11H11V20.5H14V11H16.25L17 8.5H14Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 8.5L12 13.5L21 8.5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

export default function FooterSocial({ links }) {
  return (
    <ul className={styles.socialList} aria-label="Social media links">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className={styles.socialButton}
            aria-label={link.label}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <SocialIcon type={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
