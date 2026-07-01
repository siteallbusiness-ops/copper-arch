import { getSiteUrl } from '@/lib/site-url';

export const SITE_NAME = 'Cake Dine';
export const SITE_TAGLINE = 'Dessert salon · Old quarter';
export const SITE_URL = getSiteUrl();
export const SITE_EMAIL = 'hello@cakedine.com';
export const SITE_PHONE = '+44 (0)161 330 0000';
export const SITE_ADDRESS = '14 Auburn Walk';

export const NAV_LINKS = [
  { href: '/', label: 'Salon', ariaLabel: 'Salon home' },
  { href: '/services', label: 'Board', ariaLabel: 'Dessert board' },
  { href: '/contact', label: 'Visit', ariaLabel: 'Visit us' },
  { label: 'Hours', ariaLabel: 'Opening hours', isCta: true, opensHoursModal: true },
];

export const FOOTER_SOCIAL = [
  { href: '#', label: 'Instagram', icon: 'instagram' },
  { href: '#', label: 'Facebook', icon: 'facebook' },
  { href: `mailto:${SITE_EMAIL}`, label: 'Email', icon: 'email' },
];

export const FOOTER_LEGAL = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Use' },
];

export const BREAKPOINTS = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
};
