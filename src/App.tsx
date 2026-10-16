import { Beyond } from '@/components/sections/Beyond';
import { Faq } from '@/components/sections/Faq';
import { Features } from '@/components/sections/Features';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Install } from '@/components/sections/Install';
import { Loop } from '@/components/sections/Loop';
import { Nav } from '@/components/sections/Nav';

export default function App(): React.JSX.Element {
  return (
    <div className="relative">
      <div className="nav-gradient" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Loop />
        <Beyond />
        <Install />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
