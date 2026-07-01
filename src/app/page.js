import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Gallery from '@/components/Gallery/Gallery';
import Testimonials from '@/components/Testimonials/Testimonials';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Cake Dine — Dessert salon in the old quarter',
  description:
    'Cake Dine — dessert salon: velvet evenings, marble daylight, and pastry that reads like a letter from someone who remembers your order. cakedine.com',
  keywords: ['dessert salon', 'cake dine', 'pastry', 'old quarter', 'dessert board'],
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Header heroSelector="[data-hero]" />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer variant="home" />
    </>
  );
}
