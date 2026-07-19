import { useRef, useState } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal, usePageTitle } from '../lib/motion';
import { asset } from '../lib/asset';
import { AnimatedText } from '../components/AnimatedText';
import { traits } from '../content/traits';
import { skillGroups } from '../content/skills';
import './Profil.css';

function TraitList({ kind }: { kind: 'force' | 'watch' }) {
  const { t } = useLocale();
  const [open, setOpen] = useState<string | null>(null);
  const items = traits.filter((tr) => tr.kind === kind);

  return (
    <ul className={`traits traits--${kind}`}>
      {items.map((tr) => {
        const isOpen = open === tr.id;
        return (
          <li key={tr.id} className={`trait${isOpen ? ' trait--open' : ''}`} data-reveal data-reveal-group={`trait-${kind}`}>
            <button
              type="button"
              className="trait-btn"
              onClick={() => setOpen(isOpen ? null : tr.id)}
              aria-expanded={isOpen}
            >
              <span className="trait-tick" aria-hidden="true" />
              <span className="trait-text">
                <span className="trait-title">{t(tr.title)}</span>
                <span className="trait-short">{t(tr.short)}</span>
              </span>
            </button>
            <div className="trait-detail" hidden={!isOpen}>
              <p>{t(tr.detail)}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function Profil() {
  const root = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  usePageTitle(locale === 'fr' ? 'Profil · Florian Bouchart' : 'Profile · Florian Bouchart');
  useReveal(root);

  return (
    <div className="page" ref={root} id="contenu">
      <header className="page-hero shell profil-hero">
        <div className="profil-hero-text">
          <h1 className="page-title">
            <AnimatedText onScroll={false} delay={0.15} text={t({ fr: 'Profil', en: 'Profile' })} />
          </h1>
          <p className="page-intro">
            {t({
              fr: 'Qui je suis, ce que je cherche, et comment j’y suis venu, sans généralités.',
              en: 'Who I am, what I’m looking for, and how I got here, no generalities.',
            })}
          </p>
          <p className="profil-hero-tag mono">
            {t({
              fr: 'Entrepreneur et jeune diplômé, en route vers le produit numérique.',
              en: 'Entrepreneur and recent graduate, heading into digital product.',
            })}
          </p>
        </div>
        <figure className="profil-portrait" data-reveal>
          <img
            src={asset('/media/portrait.jpg')}
            alt={t({ fr: 'Portrait de Florian Bouchart', en: 'Portrait of Florian Bouchart' })}
            width={900}
            height={1144}
            loading="eager"
          />
        </figure>
      </header>

      <div className="shell section" style={{ borderTop: 'none', paddingTop: 0 }}>
        {/* Ce que je recherche — une seule ligne de positionnement, volontairement.
            Le détail se raconte de vive voix, pas sur la page. */}
        <section className="profil-seek" data-reveal>
          <h2 className="profil-h mono">{t({ fr: 'Ce que je recherche', en: 'What I’m looking for' })}</h2>
          <p className="profil-seek-lead">
            {t({
              fr: 'Une porte d’entrée dans le conseil, le produit ou la gestion de projet digital. Pas un choix par défaut : c’est ce que j’ai constaté sur le terrain et ce qui me passionne qui m’y mènent.',
              en: 'A way into consulting, product or digital project management. Not a fallback: it’s what I’ve seen on the ground, and what genuinely excites me, that lead me there.',
            })}
          </p>
        </section>

        {/* Points forts et axes de progression */}
        <div className="balance">
          <div className="balance-col">
            <h2 className="balance-title">
              <span className="eyebrow balance-eyebrow balance-eyebrow--force">
                {t({ fr: 'Points forts', en: 'Strengths' })}
              </span>
            </h2>
            <TraitList kind="force" />
          </div>

          <div className="balance-col">
            <h2 className="balance-title">
              <span className="eyebrow balance-eyebrow balance-eyebrow--watch">
                {t({ fr: 'Axes de progression', en: 'Areas of growth' })}
              </span>
            </h2>
            <TraitList kind="watch" />
          </div>
        </div>

        {/* Compétences */}
        <h2 className="profil-h mono">{t({ fr: 'Compétences', en: 'Skills' })}</h2>
        <div className="skills">
          {skillGroups.map((g) => (
            <article className="skill-group" key={g.id} data-reveal data-reveal-group="skill">
              <h3 className="skill-title">{t(g.title)}</h3>
              <ul className="skill-items">
                {g.items.map((s) => (
                  <li key={s.fr}>{t(s)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
