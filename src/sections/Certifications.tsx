import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal, usePageTitle } from '../lib/motion';
import { asset } from '../lib/asset';
import { AnimatedText } from '../components/AnimatedText';
import { Tilt } from '../components/Tilt';
import { certifications } from '../content/certifications';
import type { Certification } from '../content/types';
import './Certifications.css';

/** Visionneuse plein écran : un certificat doit être lisible, donc agrandissable. */
function Lightbox({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  const { t } = useLocale();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    // Empêche la page de scroller derrière la visionneuse.
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={t(cert.name)} onClick={onClose}>
      <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
        <img className="lb-img" src={cert.image ? asset(cert.image) : undefined} alt={t(cert.name)} />
        <div className="lb-meta">
          <div>
            <h3 className="lb-title">{t(cert.name)}</h3>
            <p className="lb-issuer mono">
              {cert.issuer} · {t(cert.dateLabel)}
            </p>
            {cert.note && <p className="lb-note">{t(cert.note)}</p>}
            {cert.credentialId && <p className="lb-id mono">ID : {cert.credentialId}</p>}
          </div>
          <button type="button" className="lb-close mono" onClick={onClose} ref={closeRef}>
            {t({ fr: 'Fermer', en: 'Close' })} <span aria-hidden="true">✕</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const root = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  const [open, setOpen] = useState<Certification | null>(null);
  usePageTitle(locale === 'fr' ? 'Certifications · Florian Bouchart' : 'Certifications · Florian Bouchart');
  useReveal(root);

  if (!certifications.length) return null;

  return (
    <div className="page" ref={root} id="contenu">
      <header className="page-hero shell">
        <h1 className="page-title">
          <AnimatedText onScroll={false} delay={0.15} text={t({ fr: 'Certifications', en: 'Certifications' })} />
        </h1>
        <p className="page-intro">
          {t({
            fr: 'Les certifications obtenues, chacune avec son justificatif. Cliquez sur un document pour l’agrandir.',
            en: 'The certifications earned, each with its supporting document. Click one to enlarge it.',
          })}
        </p>
      </header>

      <div className="shell section" style={{ borderTop: 'none', paddingTop: 0 }}>
        <ul className="certs tilt-scene">
          {certifications.map((c) => (
            <li key={c.id} data-reveal data-reveal-group="cert">
              <Tilt max={4} className="cert-tilt">
                <button type="button" className="cert" onClick={() => setOpen(c)}>
                <span className="cert-figure">
                  <img
                    className="cert-img"
                    src={c.image ? asset(c.image) : undefined}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={1400}
                    height={970}
                  />
                  {c.isAward && (
                    <span className="cert-award mono">{t({ fr: 'Distinction', en: 'Award' })}</span>
                  )}
                  <span className="cert-zoom mono" aria-hidden="true">
                    {t({ fr: 'Agrandir', en: 'Enlarge' })}
                  </span>
                </span>

                <span className="cert-body">
                  <span className="cert-name">{t(c.name)}</span>
                  <span className="cert-issuer mono">{c.issuer}</span>
                  <span className="cert-date mono">{t(c.dateLabel)}</span>
                  {c.skills && (
                    <span className="cert-skills">
                      {c.skills.map((s) => (
                        <span className="cert-skill" key={s.fr}>
                          {t(s)}
                        </span>
                      ))}
                    </span>
                  )}
                  {c.note && <span className="cert-note">{t(c.note)}</span>}
                </span>
                </button>
              </Tilt>
            </li>
          ))}
        </ul>
      </div>

      {open && <Lightbox cert={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
