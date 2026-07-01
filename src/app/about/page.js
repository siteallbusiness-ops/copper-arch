import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/Common/PageHero/PageHero';
import About from '@/components/About/About';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'About — Cake Dine',
  description:
    'The story behind Cake Dine: a narrow storefront, handwritten boards, and dessert treated like the main event. cakedine.com',
  keywords: ['about cake dine', 'dessert salon story', 'pastry kitchen', 'old quarter'],
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="innerPage">
      <Header heroSelector="[data-hero]" />
      <main>
        <PageHero
          eyebrow="Letter from the pass"
          title="A salon built on imperfect plates and honest spoons."
          description="Cake Dine started when two pastry cooks leased a drafty storefront nobody else wanted. This is the room they shaped — and the rules they still enforce."
        />
        <About />
      </main>
      <Footer variant="home" />
    </div>
  );
}
