import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';

/**
 * Texte révélé mot à mot : chaque mot monte hors de son masque, en cascade.
 * Le texte réel reste dans l'aria-label — les lecteurs d'écran lisent une
 * phrase, pas soixante spans.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  onScroll = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** true : se joue à l'entrée dans le viewport ; false : au montage (heros). */
  onScroll?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.at-word'), {
        yPercent: 118,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.05,
        delay,
        scrollTrigger: onScroll ? { trigger: el, start: 'top 90%', once: true } : undefined,
      });
    }, el);

    return () => ctx.revert();
  }, [text, delay, onScroll]);

  return (
    <span ref={ref} className={className} aria-label={text} role="text">
      {text.split(' ').map((word, i) => (
        <span className="at-mask" key={i} aria-hidden="true">
          <span className="at-word">{word}</span>
        </span>
      ))}
    </span>
  );
}
