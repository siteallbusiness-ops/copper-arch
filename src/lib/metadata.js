import { SITE_NAME, SITE_URL } from '@/constants/site';
import { IMAGES } from '@/constants/images';

export function createPageMetadata({
  title,
  description,
  keywords = [],
  path = '/',
  ogImage = IMAGES.hero,
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1024,
          height: 1280,
          alt: `${SITE_NAME} dessert salon`,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
