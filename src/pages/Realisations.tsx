import { useEffect, useRef } from 'react';
import { useLocale } from '../lib/i18n';
import { gsap, prefersReducedMotion, useReveal, usePageTitle } from '../lib/motion';
import { AnimatedText } from '../components/AnimatedText';
import { Counter } from '../components/Counter';
import { cases } from '../content/cases';
import './Realisations.css';

/**
 * Trois projets détaillés : le complément du CV, pas sa copie.
 * Le nom de l'organisation dérive en filigrane au scroll et le filet
 * vertical se trace au fil de la lecture.
 */
export function Realisations() {
  const root = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  usePageTitle(locale === 'fr' ? 'Réalisations · Florian Bouchart' : 'Work · Florian Bouchart');
  useReveal(root);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>('.rea-watermark').forEach((w) => {
        gsap.fromTo(
          w,
          { yPercent: 26 },
          {
            yPercent: -26,
            ease: 'none',
            scrollTrigger: { trigger: w.closest('.rea'), start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      });

      /**
       * Chaque cas se raconte dans l'ordre au fil du scroll : le contexte
       * apparaît, le filet se trace du problème vers l'action, l'action
       * apparaît quand le filet l'atteint. Une seule timeline scrubée par cas,
       * pour que la séquence soit liée au geste de lecture.
       */
      el.querySelectorAll<HTMLElement>('.rea-grid').forEach((grid) => {
        const steps = grid.querySelectorAll<HTMLElement>('.rea-step');
        const line = grid.querySelector<HTMLElement>('.rea-line');
        if (steps.length < 2 || !line) return;

        gsap
          .timeline({
            scrollTrigger: { trigger: grid, start: 'top 82%', end: 'center 42%', scrub: 0.5 },
          })
          .from(steps[0], { opacity: 0, y: 44, duration: 0.35, ease: 'none' })
          .from(line, { scaleY: 0, transformOrigin: 'top center', duration: 0.5, ease: 'none' }, 0.15)
          .from(steps[1], { opacity: 0, y: 44, duration: 0.35, ease: 'none' }, 0.5);
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page" ref={root} id="contenu">
      <header className="page-hero shell">
        <h1 className="page-title">
          <AnimatedText onScroll={false} delay={0.15} text={t({ fr: 'Réalisations', en: 'Work' })} />
        </h1>
        <p className="page-intro">
          {t({
            fr: 'Trois projets détaillés : le contexte de départ, ce qui a été fait, les résultats mesurés.',
            en: 'Three projects in detail: the starting context, what was done, the measured results.',
          })}
        </p>
      </header>

      <div className="shell rea-list">
        {cases.map((c) => (
          <article className="rea" key={c.id}>
            <span className="rea-watermark" aria-hidden="true">
              {c.org.split(' ')[0]}
            </span>

            <header className="rea-head" data-reveal data-reveal-group={`rea-${c.id}`}>
              <p className="rea-org mono">{c.org}</p>
              <h2 className="rea-title">
                <AnimatedText text={t(c.title)} />
              </h2>
            </header>

            {/* L'ordre des enfants compte : contexte, filet, action. Le filet
                relie visuellement le problème à sa réponse et se trace entre
                les deux au fil du scroll. */}
            <div className="rea-grid">
              <div className="rea-step">
                <p className="eyebrow rea-step-label">{t({ fr: 'Le contexte', en: 'The context' })}</p>
                <p className="rea-step-text">{t(c.problem)}</p>
              </div>

              <span className="rea-line" aria-hidden="true" />

              <div className="rea-step">
                <p className="eyebrow rea-step-label">{t({ fr: 'Ce qui a été fait', en: 'What was done' })}</p>
                <p className="rea-step-text">{t(c.approach)}</p>
              </div>
            </div>

            <ul className="rea-metrics">
              {c.metrics.map((m) => (
                <li key={m.label.fr} data-reveal data-reveal-group={`rea-m-${c.id}`}>
                  <Counter value={m.value} className="rea-metric-value mono" />
                  <span className="rea-metric-label">{t(m.label)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <aside className="shell rea-more" data-reveal>
        <p className="eyebrow">{t({ fr: 'À venir', en: 'Coming' })}</p>
        <p className="rea-more-text">
          {t({
            fr: 'D’autres projets rejoindront cette page au fil de leur documentation : sites web, démonstrations, livrables.',
            en: 'More projects will join this page as they are documented: websites, demos, deliverables.',
          })}
        </p>
      </aside>
    </div>
  );
}
