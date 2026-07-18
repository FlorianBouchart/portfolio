import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getLenis, gsap, prefersReducedMotion, ScrollTrigger } from '../lib/motion';
import { Logo } from './Logo';
import './Preloader.css';

const SESSION_KEY = 'fb-intro';

/**
 * Ouverture du site, une fois par session : plein écran bleu royal, le logo
 * circuit se trace comme un signal qui parcourt sa piste, le nœud de données
 * s'allume, le compteur monte, puis l'écran se retire en cinq lamelles
 * verticales. Les lamelles sont la signature de transition de tout le site.
 */
export function Preloader() {
  const [active] = useState(
    () =>
      typeof window !== 'undefined' &&
      !window.sessionStorage.getItem(SESSION_KEY) &&
      !prefersReducedMotion()
  );
  const [gone, setGone] = useState(!active);
  const root = useRef<HTMLDivElement>(null);

  // Si le préloader ne joue pas, la page est « prête » immédiatement.
  useLayoutEffect(() => {
    if (!active) {
      document.documentElement.dataset.ready = '1';
      window.dispatchEvent(new Event('fb:ready'));
    }
  }, [active]);

  useEffect(() => {
    if (!active || !root.current) return;
    window.sessionStorage.setItem(SESSION_KEY, '1');

    const el = root.current;
    document.body.style.overflow = 'hidden';
    getLenis()?.stop();

    const release = () => {
      document.body.style.overflow = '';
      getLenis()?.start();
      document.documentElement.dataset.ready = '1';
      window.dispatchEvent(new Event('fb:ready'));
      setGone(true);
      // Les ScrollTriggers créés pendant le verrouillage du scroll n'évaluent
      // leur état initial qu'au premier défilement : on force la remesure.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const ctx = gsap.context(() => {
      const counter = el.querySelector<HTMLElement>('.pre-counter');
      const progress = { n: 0 };

      gsap
        .timeline({ onComplete: release })
        // Le logo se pose au centre exact, légèrement tourné, puis se redresse :
        // il « se forme » plutôt qu'il n'apparaît.
        .set('.logo-trace', { strokeDasharray: 1, strokeDashoffset: 1 })
        .set('.logo-node', { scale: 0, transformOrigin: '37px 27px' })
        .set('.pre-logo', { opacity: 0, scale: 0.82, rotationY: -26, transformPerspective: 640, transformOrigin: 'center center' })
        .to('.pre-logo', { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.15)
        // Le signal parcourt la piste, posément.
        .to('.logo-trace', { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', stagger: 0.3 }, 0.25)
        // Le nœud de données s'allume à l'arrivée du signal.
        .to('.logo-node', { scale: 1, duration: 0.5, ease: 'back.out(2.2)' }, '>-0.15')
        // La marque se redresse : rotation et échelle, mouvement ample et fluide.
        .to('.pre-logo', { rotationY: 0, scale: 1, duration: 1.15, ease: 'power3.out' }, 0.55)
        // Compteur et filet courent en fond sur toute la séquence.
        .to(
          progress,
          {
            n: 100,
            duration: 2,
            ease: 'power1.inOut',
            onUpdate: () => {
              if (counter) counter.textContent = String(Math.round(progress.n)).padStart(3, '0');
            },
          },
          0
        )
        .to('.pre-rule', { scaleX: 1, duration: 2, ease: 'power1.inOut' }, 0)
        // Un temps de respiration, puis les lamelles se lèvent d'un même geste.
        .to('.pre-content', { opacity: 0, y: -22, duration: 0.4, ease: 'power2.in' }, '+=0.35')
        .to('.pre-slat', { yPercent: -101, duration: 0.75, ease: 'power4.inOut', stagger: { each: 0.05, from: 'start' } }, '<0.05');
    }, el);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
      getLenis()?.start();
    };
  }, [active]);

  if (gone) return null;

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="pre-slats">
        {Array.from({ length: 5 }, (_, i) => (
          <span className="pre-slat" key={i} />
        ))}
      </div>
      <div className="pre-content">
        <div className="pre-logo">
          <Logo size={128} tone="inverse" />
        </div>
        <div className="pre-foot">
          <span className="pre-rule" />
          <span className="pre-counter mono">000</span>
        </div>
      </div>
    </div>
  );
}
