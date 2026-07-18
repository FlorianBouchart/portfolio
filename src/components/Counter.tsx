import { useEffect, useRef } from 'react';
import { gsap, oncePreloaded, prefersReducedMotion } from '../lib/motion';

/**
 * Chiffre qui se construit sous les yeux du lecteur.
 * Accepte n'importe quelle valeur texte : la première portion numérique est
 * comptée, le reste (préfixe, unité, suffixe) reste tel quel. Les valeurs
 * sans nombre s'affichent sans animation.
 *
 * Deux cas de déclenchement :
 *   — élément déjà visible au chargement (métriques du hero) : le compteur
 *     part dès que le préloader libère la page. Un ScrollTrigger serait
 *     inerte ici — créé pendant le verrouillage du scroll, il n'évalue son
 *     état initial qu'au premier défilement réel.
 *   — élément plus bas dans la page : ScrollTrigger classique, une seule fois.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Le groupe numérique se termine sur un chiffre : l'espace de « 800 k€ »
    // reste dans le suffixe et survit à la reconstruction du texte.
    const match = value.match(/^(\D*?)(\d[\d\s]*\d|\d)(.*)$/);
    if (!match || prefersReducedMotion()) {
      el.textContent = value;
      return;
    }

    const [, prefix, num, suffix] = match;
    const target = Number(num.replace(/\s/g, ''));
    const obj = { n: 0 };
    el.textContent = `${prefix}0${suffix}`;

    const ctx = gsap.context(() => {});
    const unsub = oncePreloaded(() => {
      ctx.add(() => {
        // « Visible » = n'importe quelle partie dans le viewport. Un seuil plus
        // strict (92 %) laissait la bande du hero — à 863px sur un écran de
        // 900px — attendre un scroll qui ne devait rien conditionner.
        const inView = el.getBoundingClientRect().top < window.innerHeight;
        gsap.to(obj, {
          n: target,
          duration: 1.4,
          ease: 'power2.out',
          // Visible d'emblée : léger différé pour laisser l'entrée du hero se poser.
          delay: inView ? 0.9 : 0,
          scrollTrigger: inView ? undefined : { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.n).toLocaleString('fr-FR')}${suffix}`;
          },
        });
      });
    });

    return () => {
      unsub();
      ctx.revert();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
