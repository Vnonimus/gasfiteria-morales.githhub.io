import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Coverage } from './components/Coverage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip link for keyboard users */}
      <a href="#contenido-principal" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg">Saltar al contenido</a>

      <Header />
      <main id="contenido-principal" role="main">
        <Hero />
        <Services />
        <Testimonials />
        <Coverage />
      </main>
      <Footer />
    </div>
  );
}
