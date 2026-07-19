import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal, usePageTitle } from '../lib/motion';
import { asset } from '../lib/asset';
import { AnimatedText } from '../components/AnimatedText';
import { recommendations } from '../content/recommendations';
import type { Recommendation } from '../content/types';
import '../sections/Recommendations.css';

/** Initiales — évite un trou visuel quand aucune photo n'est fournie. */
const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');

/**
 * Une recommandation. Le texte est long : sur mobile surtout, on le replie et on
 * n'en montre que le début, avec un bouton « En savoir plus » qui déroule le reste.
 * Le bouton n'apparaît que si le texte dépasse réellement la hauteur repliée.
 */
function RecoCard({ r }: { r: Recommendation }) {
  const { t, locale } = useLocale();
  const pRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [clampable, setClampable] = useState(false);

  useEffect(() => {
    if (expanded) return;
    const p = pRef.current;
    if (!p) return;
    const check = () => setClampable(p.scrollHeight - p.clientHeight > 6);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [expanded, locale]);

  return (
    <li className="reco" data-reveal data-reveal-group="reco">
      <blockquote className={`reco-quote${expanded ? '' : ' reco-quote--clamp'}`}>
        <p ref={pRef}>{t(r.text)}</p>
      </blockquote>

      {(clampable || expanded) && (
        <button
          type="button"
          className="reco-more mono"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? t({ fr: 'Réduire', en: 'Show less' }) : t({ fr: 'En savoir plus', en: 'Read more' })}
          <span className="reco-more-icon" aria-hidden="true" />
        </button>
      )}

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
            aria-label={t({ fr: `Profil LinkedIn de ${r.name}`, en: `${r.name}’s LinkedIn profile` })}
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
              aria-label={t({ fr: `Référence publique de ${r.name}`, en: `${r.name}’s public reference` })}
            >
              {t({ fr: 'Voir la référence', en: 'View reference' })} ↗
            </a>
          )
        )}
      </figcaption>
    </li>
  );
}

export function Recommandations() {
  const root = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  usePageTitle(locale === 'fr' ? 'Recommandations · Florian Bouchart' : 'Recommendations · Florian Bouchart');
  useReveal(root, [recommendations.length]);

  const single = recommendations.length === 1;

  return (
    <div className="page" ref={root} id="contenu">
      <header className="page-hero shell">
        <h1 className="page-title">
          <AnimatedText onScroll={false} delay={0.15} text={t({ fr: 'Recommandations', en: 'Recommendations' })} />
        </h1>
        <p className="page-intro">
          {t({
            fr: 'Ce que celles et ceux qui m’ont encadré disent de mon travail.',
            en: 'What the people who supervised me say about my work.',
          })}
        </p>
      </header>

      <div className="shell section" style={{ borderTop: 'none', paddingTop: 0 }}>
        {recommendations.length ? (
          <ul className={`recos${single ? ' recos--single' : ''}`}>
            {recommendations.map((r) => (
              <RecoCard key={r.id} r={r} />
            ))}
          </ul>
        ) : null}

        <p className="recos-soon" data-reveal>
          <span className="recos-soon-dot" aria-hidden="true" />
          {t({
            fr: 'D’autres recommandations arrivent bientôt.',
            en: 'More recommendations are coming soon.',
          })}
        </p>
      </div>
    </div>
  );
}
