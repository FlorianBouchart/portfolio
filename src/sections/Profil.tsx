import { useRef, useState } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal, usePageTitle } from '../lib/motion';
import { asset } from '../lib/asset';
import { AnimatedText } from '../components/AnimatedText';
import { traits } from '../content/traits';
import { visions } from '../content/vision';
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
        {/* Ce que je recherche */}
        <section className="profil-seek" data-reveal>
          <h2 className="profil-h mono">{t({ fr: 'Ce que je recherche', en: 'What I’m looking for' })}</h2>
          <p className="profil-seek-lead">
            {t({
              fr: 'Ma porte d’entrée dans les métiers du produit numérique : product ownership, business analysis, AMOA, gestion de produit. Ce n’est pas un choix par défaut : c’est la direction vers laquelle mon alternance chez GRDF, ma marque Desrèves et mon Master m’ont progressivement amené.',
              en: 'My way into digital product roles: product ownership, business analysis, business consulting (AMOA), product management. Not a fallback: it’s the direction my apprenticeship at GRDF, my brand Desrèves and my Master’s degree have gradually led me toward.',
            })}
          </p>
          <p className="profil-seek-lead">
            {t({
              fr: 'Ce que je veux ensuite : un rôle où je fais le lien entre un besoin métier et une solution numérique, dans une équipe qui me laisse apprendre et monter en compétence.',
              en: 'What I want next: a role where I connect a business need to a digital solution, in a team that lets me learn and grow.',
            })}
          </p>
        </section>

        {/* Mon fil conducteur */}
        <h2 className="profil-h mono">{t({ fr: 'Mon fil conducteur', en: 'My throughline' })}</h2>
        <div className="visions">
          {visions.map((v) => (
            <article className="vision" key={v.title.fr} data-reveal data-reveal-group="vision">
              <h3 className="vision-title">{t(v.title)}</h3>
              <p className="vision-desc">{t(v.desc)}</p>
            </article>
          ))}
        </div>

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
