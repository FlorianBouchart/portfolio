import { useEffect, useRef, useState } from 'react';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';
import './Cursor.css';

/**
 * Curseur custom : un point laiton précis + un anneau qui traîne légèrement.
 * L'anneau s'ouvre sur tout élément interactif. Le curseur natif reste visible —
 * le nôtre est un accompagnement, pas un remplacement (question d'accessibilité).
 * Rien ne se rend sur écran tactile ni en motion réduite.
 */
export function Cursor() {
  const [enabled] = useState(() => hasFinePointer() && !prefersReducedMotion());
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !dot.current || !ring.current) return;

    gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power2.out' });
    const dy = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power2.out' });
    const rx = gsap.quickTo(ring.current, 'x', { duration: 0.38, ease: 'power3.out' });
    const ry = gsap.quickTo(ring.current, 'y', { duration: 0.38, ease: 'power3.out' });

    const move = (e: MouseEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    // Délégation : un seul listener détecte l'interactif, y compris le contenu
    // monté après coup par les changements de page.
    const over = (e: MouseEvent) => {
      const interactive = (e.target as Element).closest?.('a, button, input, [data-cursor]');
      ring.current?.classList.toggle('cursor-ring--on', Boolean(interactive));
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
    </>
  );
}
