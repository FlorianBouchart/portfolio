import { useEffect, useRef } from 'react';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion';

interface Particle {
  x: number;
  y: number;
  /** Profondeur 0.25 → 1 : gouverne taille, vitesse, opacité et parallaxe. */
  z: number;
  vx: number;
  vy: number;
}

/**
 * Champ de particules en profondeur derrière le hero — poussière de laiton
 * en suspension, reliée par des filets quand les points se rapprochent.
 * La souris décale chaque couche selon sa profondeur : l'effet 3D vient de là.
 *
 * Canvas 2D volontairement (et non Three.js) : l'effet visé ne justifie pas
 * ~150 Ko de runtime WebGL, et le budget Lighthouse prime. La boucle se coupe
 * hors viewport, onglet caché et en motion réduite.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion()) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // La teinte suit le thème : on relit la variable CSS au basculement.
    let accent = '207, 174, 99';
    const readAccent = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      const probe = document.createElement('span');
      probe.style.color = v;
      document.body.appendChild(probe);
      const rgb = getComputedStyle(probe).color.match(/\d+/g);
      probe.remove();
      if (rgb) accent = rgb.slice(0, 3).join(', ');
    };
    readAccent();
    const themeObserver = new MutationObserver(readAccent);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Densité proportionnelle à la surface, plafonnée : jamais plus cher sur grand écran.
      const count = Math.min(110, Math.round((width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.25 + Math.random() * 0.75,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
      }));
    };

    const step = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      ctx.clearRect(0, 0, width, height);

      const px = (mouse.x - 0.5) * 34;
      const py = (mouse.y - 0.5) * 22;

      for (const p of particles) {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // Filets entre points proches d'une même couche — le « schéma » se dessine seul.
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const ax = a.x + px * a.z;
        const ay = a.y + py * a.z;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (Math.abs(a.z - b.z) > 0.3) continue;
          const bx = b.x + px * b.z;
          const by = b.y + py * b.z;
          const dx = ax - bx;
          const dy = ay - by;
          const d2 = dx * dx + dy * dy;
          if (d2 > 8100) continue;
          const alpha = (1 - d2 / 8100) * 0.10 * a.z;
          ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        const r = 0.6 + p.z * 1.3;
        ctx.fillStyle = `rgba(${accent}, ${0.14 + p.z * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x + px * p.z, p.y + py * p.z, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMouse = (e: MouseEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = e.clientY / window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);
    if (hasFinePointer()) window.addEventListener('mousemove', onMouse, { passive: true });

    // Hors écran ou onglet caché : la boucle s'arrête, zéro coût.
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      io.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}
