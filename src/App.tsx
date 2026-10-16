import { Coming } from '@/components/sections/Coming';
import { Faq } from '@/components/sections/Faq';
import { Features } from '@/components/sections/Features';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Loop } from '@/components/sections/Loop';
import { Nav } from '@/components/sections/Nav';
import { Testimonials } from '@/components/sections/Testimonials';

export default function App(): React.JSX.Element {
  return (
    <div className="relative">
      <div className="nav-gradient" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Loop />
        <Coming />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
