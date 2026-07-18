import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal, usePageTitle } from '../lib/motion';
import { AnimatedText } from '../components/AnimatedText';
import { projects } from '../content/projects';
import type { MediaItem } from '../content/types';
import './Projets.css';

/** Visionneuse plein écran pour une capture de projet. */
function Shot({ media, onClose }: { media: MediaItem; onClose: () => void }) {
  const { t } = useLocale();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="pshot" role="dialog" aria-modal="true" aria-label={t(media.alt)} onClick={onClose}>
      <div className="pshot-inner" onClick={(e) => e.stopPropagation()}>
        {media.video ? (
          <video
            className="pshot-img"
            src={media.video}
            poster={media.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            aria-label={t(media.alt)}
          />
        ) : (
          <img className="pshot-img" src={media.src} alt={t(media.alt)} />
        )}
        <div className="pshot-bar">
          {media.caption && <p className="pshot-caption">{t(media.caption)}</p>}
          <button type="button" className="pshot-close mono" onClick={onClose} ref={closeRef}>
            {t({ fr: 'Fermer', en: 'Close' })} <span aria-hidden="true">✕</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function Projets() {
  const root = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  const [shot, setShot] = useState<MediaItem | null>(null);
  usePageTitle(locale === 'fr' ? 'Projets · Florian Bouchart' : 'Projects · Florian Bouchart');
  useReveal(root);

  return (
    <div className="page" ref={root} id="contenu">
      <header className="page-hero shell">
        <h1 className="page-title">
          <AnimatedText onScroll={false} delay={0.15} text={t({ fr: 'Projets', en: 'Projects' })} />
        </h1>
        <p className="page-intro">
          {t({
            fr: 'Des projets conçus et développés de bout en bout : le contexte, les choix techniques et le travail réel derrière l’interface.',
            en: 'Projects designed and built end to end: the context, the technical choices and the real work behind the interface.',
          })}
        </p>
      </header>

      <div className="shell pj-list">
        {projects.map((p, i) => (
          <article className="pj" key={p.id}>
            <header className="pj-head">
              <span className="pj-index mono">
                {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <h2 className="pj-title">{t(p.title)}</h2>
              <p className="pj-tagline">{t(p.tagline)}</p>
              <ul className="pj-stack">
                {p.stack.map((s) => (
                  <li key={s} className="mono">
                    {s}
                  </li>
                ))}
              </ul>
            </header>

            {p.media && p.media.length > 0 && (
              <div className="pj-shots">
                {p.media.map((m) => (
                  <figure className="pj-shot" key={m.src} data-reveal data-reveal-group={`pj-${p.id}`}>
                    <button type="button" className="pj-shot-btn" onClick={() => setShot(m)}>
                      <span className="pj-shot-frame">
                        {m.video ? (
                          // Lecture auto silencieuse en boucle : l'animation vit
                          // dès l'arrivée dans la galerie, sans clic requis.
                          <video
                            className="pj-shot-img"
                            src={m.video}
                            poster={m.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={t(m.alt)}
                          />
                        ) : (
                          <img className="pj-shot-img" src={m.src} alt={t(m.alt)} loading="lazy" decoding="async" />
                        )}
                        <span className="pj-shot-zoom mono" aria-hidden="true">
                          {m.video ? t({ fr: 'Voir en grand', en: 'View larger' }) : t({ fr: 'Agrandir', en: 'Enlarge' })}
                        </span>
                      </span>
                      {m.caption && <figcaption className="pj-shot-cap">{t(m.caption)}</figcaption>}
                    </button>
                  </figure>
                ))}
              </div>
            )}

            <div className="pj-detail">
              <div className="pj-block" data-reveal data-reveal-group={`pjd-${p.id}`}>
                <p className="eyebrow">{t({ fr: 'Contexte', en: 'Context' })}</p>
                <p className="pj-text">{t(p.context)}</p>
              </div>
              <div className="pj-block" data-reveal data-reveal-group={`pjd-${p.id}`}>
                <p className="eyebrow">{t({ fr: 'Enjeu', en: 'Challenge' })}</p>
                <p className="pj-text">{t(p.problem)}</p>
              </div>
              <div className="pj-block" data-reveal data-reveal-group={`pjd-${p.id}`}>
                <p className="eyebrow">{t({ fr: 'Parti pris', en: 'Approach' })}</p>
                <p className="pj-text">{t(p.objective)}</p>
              </div>
              {p.architecture && (
                <div className="pj-block" data-reveal data-reveal-group={`pjd-${p.id}`}>
                  <p className="eyebrow">{t({ fr: 'Architecture', en: 'Architecture' })}</p>
                  <p className="pj-text">{t(p.architecture)}</p>
                </div>
              )}
            </div>

            {p.skills && (
              <ul className="pj-skills">
                {p.skills.map((s) => (
                  <li key={s.fr}>{t(s)}</li>
                ))}
              </ul>
            )}

            {(p.github || p.demo) && (
              <div className="pj-links">
                {p.demo && (
                  <a className="pj-link" href={p.demo} target="_blank" rel="noopener noreferrer">
                    {t({ fr: 'Voir en ligne', en: 'View live' })} ↗
                  </a>
                )}
                {p.github && (
                  <a className="pj-link" href={p.github} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                )}
              </div>
            )}

            {p.note && (
              <p className="pj-note">
                <span className="pj-note-badge mono">{t({ fr: 'Confidentiel', en: 'Confidential' })}</span>
                {t(p.note)}
              </p>
            )}
          </article>
        ))}
      </div>

      {shot && <Shot media={shot} onClose={() => setShot(null)} />}
    </div>
  );
}
