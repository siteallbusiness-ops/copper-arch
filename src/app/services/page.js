import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/Common/PageHero/PageHero';
import MenuBoard from '@/components/Services/MenuBoard';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Board — Cake Dine',
  description: 'Dessert board for Cake Dine: tins, puddings, and velvet-hour plates. cakedine.com',
  keywords: ['dessert board', 'menu', 'seasonal tins', 'cake dine', 'velvet hour'],
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="innerPage">
      <Header heroSelector="[data-hero]" />
      <main>
        <PageHero
          eyebrow="Changes daily · ask for allergens"
          title="Tonight's board is written in ink, then crossed out."
          description="Prices are sample placeholders. Swap dishes for your real pass — keep the tone if you like how it reads."
        />
        <MenuBoard />
      </main>
      <Footer variant="menu" />
    </div>
  );
}
