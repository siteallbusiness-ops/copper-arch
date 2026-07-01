import { EB_Garamond, Source_Sans_3 } from 'next/font/google';
import { SITE_URL } from '@/constants/site';
import Providers from '@/components/Providers/Providers';
import '@/styles/globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${sourceSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
