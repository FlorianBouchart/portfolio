import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Pointeur précis (souris/trackpad) : condition d'activation du curseur custom, des tilts et des magnétiques. */
export const hasFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

/**
 * Instance Lenis partagée. Les composants qui doivent verrouiller le scroll
 * (menu mobile, préloader) ou scroller programmatiquement passent par ici
 * plutôt que d'instancier quoi que ce soit.
 */
let lenisInstance: Lenis | null = null;
export const getLenis = () => lenisInstance;

/**
 * Scroll fluide Lenis, piloté par la boucle GSAP.
 *
 * Un seul ticker pour les deux libs : sans cela, Lenis et ScrollTrigger tournent
 * sur deux rAF concurrents et le scrub perd des images.
 * Désactivé si l'utilisateur demande moins d'animations — le scroll natif reste
 * toujours le plus accessible.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      // Sans ceci, la boucle rAF de Lenis réécrit la position à chaque frame et
      // écrase le scroll natif des ancres. L'offset compense la nav fixe.
      anchors: { offset: -68 },
    });
    lenisInstance = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

/**
 * Révélation à l'entrée dans le viewport.
 *
 * Une seule règle pour tout le site : les éléments portant `[data-reveal]` montent
 * de 24px en fondu, décalés par groupe (`data-reveal-group`). L'animation ne se
 * joue qu'une fois — un recruteur qui remonte la page ne doit pas tout revoir s'animer.
 */
export function useReveal(root: React.RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((n) => {
        n.style.opacity = '1';
        n.style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      const groups = new Map<string, HTMLElement[]>();
      el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((node) => {
        const key = node.dataset.revealGroup ?? node.dataset.reveal ?? 'default';
        groups.set(key, [...(groups.get(key) ?? []), node]);
      });

      groups.forEach((nodes) => {
        gsap.from(nodes, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: { trigger: nodes[0], start: 'top 88%', once: true },
        });
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Synchronisation avec le préloader : les entrées de page spectaculaires (hero)
 * ne doivent pas se jouer derrière l'écran de chargement. Le préloader pose
 * `data-ready="1"` sur <html> et émet `fb:ready` quand il se retire.
 */
export function oncePreloaded(cb: () => void) {
  if (document.documentElement.dataset.ready === '1') {
    cb();
    return () => {};
  }
  const handler = () => cb();
  window.addEventListener('fb:ready', handler, { once: true });
  return () => window.removeEventListener('fb:ready', handler);
}

/** Titre d'onglet par page — multi-pages oblige. */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export { gsap, ScrollTrigger };
