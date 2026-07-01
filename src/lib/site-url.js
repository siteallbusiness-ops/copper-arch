const DEFAULT_SITE_URL = 'https://cakedine.com';

function normalizeUrl(url) {
  return url.replace(/\/$/, '');
}

/**
 * Resolves the public site URL for metadata, sitemaps, and canonical links.
 * Set NEXT_PUBLIC_SITE_URL in Vercel for production (e.g. https://cakedine.com).
 */
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${normalizeUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${normalizeUrl(process.env.VERCEL_URL)}`;
  }

  return DEFAULT_SITE_URL;
}
