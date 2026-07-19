import { useRef } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal } from '../lib/motion';
import { asset } from '../lib/asset';
import { recommendations } from '../content/recommendations';
import './Recommendations.css';

/** Initiales — évite un trou visuel quand aucune photo n'est fournie. */
const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');

export function Recommendations() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLocale();
  useReveal(root, [recommendations.length]);

  // Aucune recommandation : la section disparaît plutôt que d'afficher un vide.
  // Elle réapparaît seule dès qu'un objet est ajouté dans content/recommendations.ts.
  if (!recommendations.length) return null;

  const single = recommendations.length === 1;

  return (
    <section className="section" id="recommandations" ref={root}>
      <div className="shell">
        <div className="section-head">
          <h2 className="section-title">{t({ fr: 'Recommandations', en: 'Recommendations' })}</h2>
          <p className="section-sub">{t({ fr: 'Ce qu’ils en disent.', en: 'What they say.' })}</p>
        </div>

        <ul className={`recos${single ? ' recos--single' : ''}`}>
          {recommendations.map((r) => (
            <li key={r.id} className="reco" data-reveal data-reveal-group="reco">
              <blockquote className="reco-quote">
                <p>{t(r.text)}</p>
              </blockquote>

              <figcaption className="reco-author">
                {r.photo ? (
                  <img className="reco-photo" src={asset(r.photo)} alt="" loading="lazy" width={96} height={96} />
                ) : (
                  <span className="reco-photo reco-photo--fallback mono" aria-hidden="true">
                    {initials(r.name)}
                  </span>
                )}

                <span className="reco-id">
                  <span className="reco-name">{r.name}</span>
                  <span className="reco-role">
                    {t(r.role)} · {r.org}
                  </span>
                </span>

                {r.linkedin ? (
                  <a
                    className="reco-link mono"
                    href={r.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t({
                      fr: `Profil LinkedIn de ${r.name}`,
                      en: `${r.name}’s LinkedIn profile`,
                    })}
                  >
                    LinkedIn ↗
                  </a>
                ) : (
                  r.url && (
                    <a
                      className="reco-link mono"
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t({
                        fr: `Référence publique de ${r.name}`,
                        en: `${r.name}’s public reference`,
                      })}
                    >
                      {t({ fr: 'Voir la référence', en: 'View reference' })} ↗
                    </a>
                  )
                )}
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
