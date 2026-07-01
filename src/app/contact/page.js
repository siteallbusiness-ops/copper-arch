import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/Common/PageHero/PageHero';
import Contact from '@/components/Contact/Contact';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Visit — Cake Dine',
  description: 'How to find Cake Dine, hours, and what to expect at the door. cakedine.com',
  keywords: ['visit cake dine', 'hours', 'location', 'old textile quarter', 'reservations'],
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="innerPage">
      <Header heroSelector="[data-hero]" />
      <main>
        <PageHero
          eyebrow="Under the arch"
          title="We are tucked beside the old thread market, where the pavement dips."
          description="Look for the Cake Dine sign and the single lamp that stays on until the last guest leaves. No private parking — the quarter is made for walking."
        />
        <Contact />
      </main>
      <Footer variant="visit" />
    </div>
  );
}
