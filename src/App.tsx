import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ScrollTrigger, useSmoothScroll } from './lib/motion';
import { TransitionProvider } from './lib/transition';
import { Preloader } from './components/Preloader';
import { Cursor } from './components/Cursor';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Realisations } from './pages/Realisations';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Profil } from './sections/Profil';
import { Contact } from './sections/Contact';
import { Projets } from './pages/Projets';
import { NotFound } from './pages/NotFound';

/**
 * Après chaque changement de page, ScrollTrigger doit remesurer : le DOM a
 * entièrement changé sous lui. (Le scroll haut de page est géré par le rideau
 * de transition, pendant que l'ancien contenu est encore masqué.)
 */
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
  return null;
}

function Shell() {
  useSmoothScroll();

  return (
    <TransitionProvider>
      <Preloader />
      <Cursor />
      <Nav />
      <RouteEffects />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/formation" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/profil" element={<Profil />} />
          {/* Ancienne adresse de la page Profil : on ne casse pas un lien déjà partagé. */}
          <Route path="/approche" element={<Profil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </TransitionProvider>
  );
}

export function App() {
  // GitHub Pages « site de projet » : BASE_URL vaut « /nom-du-repo/ » et le
  // routeur doit en tenir compte. Sur un site utilisateur, c'est « / ».
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      <Shell />
    </BrowserRouter>
  );
}
