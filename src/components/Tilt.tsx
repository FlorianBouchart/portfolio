import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap, hasFinePointer, prefersReducedMotion } from '../lib/motion';

/**
 * Carte en perspective : elle s'incline vers le pointeur (rotation 3D CSS).
 * Le parent doit poser `perspective` — voir `.tilt-scene` dans tokens.css.
 */
export function Tilt({
  children,
  className,
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;

    const rxTo = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3.out' });
    const ryTo = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3.out' });

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      rxTo(-ny * max);
      ryTo(nx * max);
    };
    const leave = () => {
      rxTo(0);
      ryTo(0);
    };

    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [max]);

  return (
    <div ref={ref} className={className} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
      {children}
    </div>
  );
}
