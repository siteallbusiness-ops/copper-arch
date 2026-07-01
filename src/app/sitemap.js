import { getSiteUrl } from '@/lib/site-url';

const ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
];

export default function sitemap() {
  const baseUrl = getSiteUrl();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? baseUrl : `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
