import { useRef } from 'react';
import { useLocale } from '../lib/i18n';
import { getLenis, useReveal } from '../lib/motion';
import { TLink } from '../lib/transition';
import { Magnetic } from './Magnetic';
import { Logo } from './Logo';
import { profile, socials } from '../content/profile';
import './Footer.css';

/**
 * Fin de visite : une invitation simple, les coordonnées, la navigation.
 *
 * Le filigrane défilant reprend les verbes de méthode du hero (« cadrer le
 * besoin, structurer la donnée, livrer la solution ») : intemporel, cohérent,
 * et surtout aucun intitulé de poste. Les candidatures de Florian sont
 * adaptées à chaque entreprise ; afficher plusieurs métiers ciblés à la fois
 * créerait une impression d'incohérence (décision du 18/07/2026).
 */
export function Footer() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLocale();
  const year = new Date().getFullYear();
  useReveal(root);

  // Répété quatre fois : la piste doit dépasser deux largeurs d'écran pour
  // que la boucle du bandeau soit sans couture.
  const domains = t({
    fr: 'Cadrer · Structurer · Livrer · Mesurer · Itérer · ',
    en: 'Frame · Structure · Deliver · Measure · Iterate · ',
  }).repeat(4);

  const backToTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" ref={root}>
      <div className="shell footer-cta">
        <h2 className="footer-title" data-reveal data-reveal-group="fcta">
          {t({
            fr: 'Un poste, une question ? Écrivez-moi.',
            en: 'An opening, a question? Write to me.',
          })}
        </h2>
        <div className="footer-actions" data-reveal data-reveal-group="fcta">
          <Magnetic>
            <a className="footer-mail" href={`mailto:${profile.email}`}>
              <span>{profile.email}</span>
              <span className="footer-mail-arrow" aria-hidden="true">→</span>
            </a>
          </Magnetic>
          <a className="footer-secondary mono" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          {socials.github && (
            <a className="footer-secondary mono" href={socials.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      {/* Filigrane défilant : les domaines d'intervention. Deux copies pour une boucle sans couture. */}
      <div className="footer-marquee" aria-hidden="true">
        <div className="footer-marquee-track">
          <span>{domains}</span>
          <span>{domains}</span>
        </div>
      </div>

      <div className="shell footer-grid">
        <div className="footer-col">
          <p className="eyebrow">{t({ fr: 'Coordonnées', en: 'Contact' })}</p>
          <a className="footer-line" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="footer-line" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <a className="footer-line" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/florian-bouchart
          </a>
        </div>

        <div className="footer-col">
          <p className="eyebrow">{t({ fr: 'Explorer', en: 'Explore' })}</p>
          <TLink to="/realisations" className="footer-line">{t({ fr: 'Réalisations', en: 'Work' })}</TLink>
          <TLink to="/formation" className="footer-line">{t({ fr: 'Formation', en: 'Education' })}</TLink>
          <TLink to="/certifications" className="footer-line">{t({ fr: 'Certifications', en: 'Certifications' })}</TLink>
          <TLink to="/profil" className="footer-line">{t({ fr: 'Profil', en: 'Profile' })}</TLink>
        </div>

        <div className="footer-col">
          <p className="eyebrow">{t({ fr: 'Situation', en: 'Status' })}</p>
          <p className="footer-line footer-line--static">
            <span className="footer-dot" aria-hidden="true" />
            {t(profile.availability)}
          </p>
          <p className="footer-line footer-line--static">{t(profile.location)}</p>
          <p className="footer-line footer-line--static mono footer-langs">FR · EN · ES</p>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span className="footer-brand">
          <Logo size={22} />
          <span className="mono footer-copy">© {year}</span>
        </span>
        <p className="mono footer-colophon">
          {t({
            fr: 'Site conçu et développé par mes soins. React, TypeScript, GSAP, Lenis.',
            en: 'Designed and built by me. React, TypeScript, GSAP, Lenis.',
          })}
        </p>
        <button type="button" className="mono footer-top" onClick={backToTop}>
          {t({ fr: 'Haut de page', en: 'Back to top' })} ↑
        </button>
      </div>
    </footer>
  );
}
