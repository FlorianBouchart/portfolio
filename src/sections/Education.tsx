import { useDeferredValue, useMemo, useRef, useState } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal, usePageTitle } from '../lib/motion';
import { AnimatedText } from '../components/AnimatedText';
import { diplomas } from '../content/education';
import type { Course } from '../content/types';
import './Education.css';

/** Normalise pour une recherche insensible à la casse ET aux accents ("systeme" trouve "Système"). */
const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

/** Surligne la portion correspondant à la requête, sans injecter de HTML. */
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const i = norm(text).indexOf(norm(query));
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  );
}

export function Education() {
  const root = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  const [query, setQuery] = useState('');
  const [diploma, setDiploma] = useState<string>('all');
  const [category, setCategory] = useState<string>('all');
  const deferredQuery = useDeferredValue(query);
  usePageTitle(locale === 'fr' ? 'Formation · Florian Bouchart' : 'Education · Florian Bouchart');
  useReveal(root, [diploma]);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    diplomas
      .filter((d) => diploma === 'all' || d.id === diploma)
      .forEach((d) => d.courses.forEach((c) => set.add(c.category)));
    return [...set];
  }, [diploma]);

  const results = useMemo(() => {
    const q = norm(deferredQuery);
    return diplomas
      .filter((d) => diploma === 'all' || d.id === diploma)
      .map((d) => ({
        diploma: d,
        courses: d.courses.filter((c: Course) => {
          if (category !== 'all' && c.category !== category) return false;
          if (!q) return true;
          return (
            norm(c.name[locale]).includes(q) ||
            norm(c.name.fr).includes(q) ||
            norm(c.name.en).includes(q) ||
            norm(c.category).includes(q)
          );
        }),
      }))
      .filter((g) => g.courses.length > 0);
  }, [deferredQuery, diploma, category, locale]);

  const total = results.reduce((n, g) => n + g.courses.length, 0);
  const grandTotal = diplomas.reduce((n, d) => n + d.courses.length, 0);

  /** Les domaines diffèrent d'un diplôme à l'autre : changer de diplôme remet le domaine à zéro
   *  plutôt que de laisser un filtre actif qui ne correspond à rien. */
  const selectDiploma = (id: string) => {
    setDiploma(id);
    setCategory('all');
  };

  return (
    <div className="page" ref={root} id="contenu">
      <header className="page-hero shell">
        <h1 className="page-title">
          <AnimatedText onScroll={false} delay={0.15} text={t({ fr: 'Formation', en: 'Education' })} />
        </h1>
        <p className="page-intro">
          {t({
            fr: `Les ${grandTotal} enseignements suivis de la Licence 3 au Master 2 à l'IAE Valenciennes (UPHF). Recherche libre, filtres par diplôme et par domaine.`,
            en: `The ${grandTotal} courses taken from Bachelor 3 to Master 2 at IAE Valenciennes (UPHF). Free search, filters by degree and by field.`,
          })}
        </p>
      </header>

      <div className="shell">

        <div className="edu-controls" data-reveal>
          <div className="edu-search">
            <svg className="edu-search-icon" viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5L14 14" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              className="edu-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t({
                fr: 'Rechercher un cours : Scrum, RGPD, Power BI, données…',
                en: 'Search a course: Scrum, GDPR, Power BI, data…',
              })}
              aria-label={t({ fr: 'Rechercher un cours', en: 'Search a course' })}
            />
            {query && (
              <button type="button" className="edu-clear mono" onClick={() => setQuery('')}>
                {t({ fr: 'Effacer', en: 'Clear' })}
              </button>
            )}
          </div>

          <div className="edu-filters">
            <div className="edu-filter-row" role="group" aria-label={t({ fr: 'Filtrer par diplôme', en: 'Filter by degree' })}>
              <span className="eyebrow edu-filter-label">{t({ fr: 'Diplôme', en: 'Degree' })}</span>
              <button
                type="button"
                className={`edu-chip mono${diploma === 'all' ? ' edu-chip--on' : ''}`}
                onClick={() => selectDiploma('all')}
                aria-pressed={diploma === 'all'}
              >
                {t({ fr: 'Tous', en: 'All' })}
              </button>
              {diplomas.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`edu-chip mono${diploma === d.id ? ' edu-chip--on' : ''}`}
                  onClick={() => selectDiploma(d.id)}
                  aria-pressed={diploma === d.id}
                >
                  {t(d.level)} <span className="edu-chip-year">{d.years}</span>
                </button>
              ))}
            </div>

            <div className="edu-filter-row" role="group" aria-label={t({ fr: 'Filtrer par domaine', en: 'Filter by field' })}>
              <span className="eyebrow edu-filter-label">{t({ fr: 'Domaine', en: 'Field' })}</span>
              <button
                type="button"
                className={`edu-chip mono${category === 'all' ? ' edu-chip--on' : ''}`}
                onClick={() => setCategory('all')}
                aria-pressed={category === 'all'}
              >
                {t({ fr: 'Tous', en: 'All' })}
              </button>
              {allCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`edu-chip mono${category === c ? ' edu-chip--on' : ''}`}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <p className="edu-count mono" role="status" aria-live="polite">
            {total === grandTotal
              ? t({ fr: `${grandTotal} enseignements`, en: `${grandTotal} courses` })
              : t({
                  fr: `${total} / ${grandTotal} enseignement${total > 1 ? 's' : ''}`,
                  en: `${total} / ${grandTotal} course${total > 1 ? 's' : ''}`,
                })}
          </p>
        </div>

        {total === 0 ? (
          <p className="edu-empty">
            {t({
              fr: 'Aucun enseignement ne correspond à cette recherche.',
              en: 'No course matches this search.',
            })}
          </p>
        ) : (
          <div className="edu-results">
            {results.map(({ diploma: d, courses }) => (
              <section className="edu-group" key={d.id} aria-label={t(d.title)}>
                <header className="edu-group-head">
                  <div className="edu-group-id">
                    <span className="mono edu-group-years">{d.years}</span>
                    <h3 className="edu-group-title">
                      {t(d.level)} · {t(d.title)}
                    </h3>
                    <p className="edu-group-meta mono">
                      {d.school}
                      {d.subtitle && <> · {t(d.subtitle)}</>}
                      {d.distinction && <span className="edu-distinction"> · {t(d.distinction)}</span>}
                    </p>
                  </div>
                  <span className="edu-group-count mono">
                    {courses.length}
                    <span className="edu-group-count-of">/{d.courses.length}</span>
                  </span>
                </header>

                <ul className="edu-courses">
                  {courses.map((c) => (
                    <li className="edu-course" key={c.id} data-reveal data-reveal-group={`edu-${d.id}`}>
                      <span className="edu-course-name">
                        <Highlight text={t(c.name)} query={deferredQuery} />
                      </span>
                      <span className="edu-course-cat mono">{c.category}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
