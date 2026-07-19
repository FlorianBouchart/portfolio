import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from '../lib/i18n';
import { useTheme } from '../lib/theme';
import { getLenis, gsap, prefersReducedMotion } from '../lib/motion';
import { TLink } from '../lib/transition';
import { Logo } from './Logo';
import { projects } from '../content/projects';
import { recommendations } from '../content/recommendations';
import { profile } from '../content/profile';
import './Nav.css';

/** Les pages Projets et Recommandations n'entrent dans la nav que lorsqu'elles ont du contenu. */
const links = [
  { to: '/', label: { fr: 'Accueil', en: 'Home' } },
  { to: '/realisations', label: { fr: 'Réalisations', en: 'Work' } },
  ...(projects.length ? [{ to: '/projets', label: { fr: 'Projets', en: 'Projects' } }] : []),
  { to: '/formation', label: { fr: 'Formation', en: 'Education' } },
  { to: '/certifications', label: { fr: 'Certifications', en: 'Certifications' } },
  ...(recommendations.length ? [{ to: '/recommandations', label: { fr: 'Recommandations', en: 'Recommendations' } }] : []),
  { to: '/profil', label: { fr: 'Profil', en: 'Profile' } },
];

export function Nav() {
  const { locale, setLocale, t } = useLocale();
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    if (open) {
      getLenis()?.stop();
      document.body.style.overflow = 'hidden';
      if (menu && !prefersReducedMotion()) {
        // Révélation ligne par ligne : chaque lien monte depuis son masque
        // (li en overflow hidden), décalé, pendant que le rideau du menu s'ouvre.
        gsap.fromTo(
          menu.querySelectorAll('.menu-link'),
          { yPercent: 118 },
          { yPercent: 0, duration: 0.8, ease: 'power4.out', stagger: 0.06, delay: 0.12 }
        );
        gsap.fromTo(
          menu.querySelectorAll('.menu-meta'),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 }
        );
      }
    } else {
      getLenis()?.start();
      document.body.style.overflow = '';
    }
    return () => {
      getLenis()?.start();
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a href="#contenu" className="skip-link">
        {t({ fr: 'Aller au contenu', en: 'Skip to content' })}
      </a>

      <nav
        className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}
        aria-label={t({ fr: 'Principale', en: 'Main' })}
      >
        <div className="nav-progress" ref={progressRef} aria-hidden="true" />

        <div className="nav-inner shell">
          <TLink to="/" className="nav-mark" aria-label={t({ fr: 'Accueil', en: 'Home' })}>
            <Logo size={30} />
          </TLink>

          <ul className="nav-links">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <TLink
                    to={l.to}
                    className={`nav-link${active ? ' nav-link--active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {t(l.label)}
                  </TLink>
                </li>
              );
            })}
          </ul>

          <div className="nav-tools">
            <button
              type="button"
              className="nav-theme"
              onClick={toggle}
              aria-label={
                theme === 'dark'
                  ? t({ fr: 'Passer en thème clair', en: 'Switch to light theme' })
                  : t({ fr: 'Passer en thème sombre', en: 'Switch to dark theme' })
              }
            >
              <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                {theme === 'dark' ? (
                  <>
                    <circle cx="10" cy="10" r="3.4" />
                    <path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4" strokeLinecap="round" />
                  </>
                ) : (
                  <path d="M16 11.5A6.5 6.5 0 018.5 4a6.5 6.5 0 107.5 7.5z" strokeLinejoin="round" />
                )}
              </svg>
            </button>

            <div className="nav-lang" role="group" aria-label={t({ fr: 'Langue', en: 'Language' })}>
              {(['fr', 'en'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  className={`nav-lang-btn mono${locale === l ? ' nav-lang-btn--active' : ''}`}
                  onClick={() => setLocale(l)}
                  aria-pressed={locale === l}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <TLink to="/contact" className={`nav-cta${pathname === '/contact' ? ' nav-cta--active' : ''}`}>
              Contact
            </TLink>

            <button
              type="button"
              className="nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t({ fr: 'Fermer le menu', en: 'Close menu' }) : t({ fr: 'Ouvrir le menu', en: 'Open menu' })}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`menu${open ? ' menu--open' : ''}`} ref={menuRef} aria-hidden={!open}>
        <nav className="menu-inner shell" aria-label={t({ fr: 'Menu mobile', en: 'Mobile menu' })}>
          <ul className="menu-list">
            {[...links, { to: '/contact', label: { fr: 'Contact', en: 'Contact' } }].map((l) => (
              <li key={l.to}>
                <TLink
                  to={l.to}
                  className={`menu-link${pathname === l.to ? ' menu-link--active' : ''}`}
                  onNavigate={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  {t(l.label)}
                </TLink>
              </li>
            ))}
          </ul>
          <div className="menu-meta">
            <p className="menu-status">
              <span className="menu-status-dot" aria-hidden="true" />
              {t(profile.availability)}
            </p>
            <a className="menu-mail mono" href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>
              {profile.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
