import { createContext, useCallback, useContext, useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getLenis, gsap, prefersReducedMotion } from './motion';
import { Logo } from '../components/Logo';
import './transition.css';

/**
 * Transitions de pages : un rideau d'encre monte, la route change derrière lui,
 * le rideau se retire. Le changement de page n'est jamais un « saut » sec.
 *
 * Tous les liens internes passent par <TLink> (ou useTransitionGo) pour
 * déclencher le rideau ; un lien react-router nu changerait la page sans lui.
 */

interface TransitionCtxValue {
  go: (to: string) => void;
}

const TransitionCtx = createContext<TransitionCtxValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const curtain = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  // location dans une ref : `go` reste stable et lit toujours la route courante.
  const current = useRef(location.pathname);
  current.current = location.pathname;

  const go = useCallback(
    (to: string) => {
      if (to === current.current || busy.current) return;

      if (prefersReducedMotion() || !curtain.current) {
        navigate(to);
        return;
      }

      busy.current = true;
      const el = curtain.current;
      const slats = el.querySelectorAll('.curtain-slat');
      const mark = el.querySelector('.curtain-mark');

      // Les lamelles montent du bas pour couvrir, puis se lèvent vers le haut
      // pour révéler : le même geste que le préloader, la signature du site.
      gsap
        .timeline({
          onComplete: () => {
            busy.current = false;
          },
        })
        .set(el, { display: 'block' })
        .set(slats, { yPercent: 101 })
        .set(mark, { opacity: 0, scale: 0.9 })
        .set(el.querySelectorAll('.logo-trace'), { strokeDasharray: 1, strokeDashoffset: 1 })
        .set(el.querySelectorAll('.logo-node'), { scale: 0, transformOrigin: '37px 27px' })
        .to(slats, { yPercent: 0, duration: 0.5, ease: 'power4.inOut', stagger: { each: 0.05, from: 'start' } })
        .to(mark, { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }, '-=0.2')
        .to(el.querySelectorAll('.logo-trace'), { strokeDashoffset: 0, duration: 0.5, ease: 'power2.inOut', stagger: 0.12 }, '<')
        .to(el.querySelectorAll('.logo-node'), { scale: 1, duration: 0.3, ease: 'back.out(2.4)' }, '>-0.1')
        .add(() => {
          navigate(to);
          // Nouvelle page derrière les lamelles : on se cale en haut sans animation.
          getLenis()?.scrollTo(0, { immediate: true });
          window.scrollTo(0, 0);
        })
        .to(mark, { opacity: 0, y: -18, duration: 0.25, ease: 'power2.in' }, '+=0.15')
        .to(slats, { yPercent: -101, duration: 0.6, ease: 'power4.inOut', stagger: 0.05 }, '<0.05')
        .set(el, { display: 'none' });
    },
    [navigate]
  );

  return (
    <TransitionCtx.Provider value={{ go }}>
      {children}
      <div className="curtain" ref={curtain} aria-hidden="true">
        <div className="curtain-slats">
          {Array.from({ length: 5 }, (_, i) => (
            <span className="curtain-slat" key={i} />
          ))}
        </div>
        <span className="curtain-mark">
          <Logo size={64} tone="inverse" />
        </span>
      </div>
    </TransitionCtx.Provider>
  );
}

export function useTransitionGo() {
  const ctx = useContext(TransitionCtx);
  if (!ctx) throw new Error('useTransitionGo must be used inside <TransitionProvider>');
  return ctx.go;
}

/** Lien interne avec transition. Rend un vrai <a> (SEO, cmd+clic, molette). */
export function TLink({
  to,
  className,
  children,
  onNavigate,
  ...rest
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  [key: string]: unknown;
}) {
  const go = useTransitionGo();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Laisse faire le navigateur pour ouvrir dans un onglet / une fenêtre.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate?.();
    go(to);
  };

  return (
    <Link to={to} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
