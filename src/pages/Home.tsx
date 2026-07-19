import { useEffect, useRef } from 'react';
import { useLocale } from '../lib/i18n';
import { gsap, hasFinePointer, oncePreloaded, prefersReducedMotion, useReveal, usePageTitle } from '../lib/motion';
import { TLink } from '../lib/transition';
import { HeroCanvas } from '../components/HeroCanvas';
import { Counter } from '../components/Counter';
import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { recommendations } from '../content/recommendations';
import './Home.css';

/**
 * Les chiffres du hero, tracés dans CONTENU-SOURCE.md.
 * Corrections Florian (18/07/2026) : le reporting GRDF était déjà automatisé,
 * sa réalisation phare est la génération de contrats de 100+ pages ; les 100k
 * visites/mois de Desrèves sont sur Instagram ; le BDE, c'est 30 à 35 bénévoles
 * par année universitaire.
 */
const proof = [
  {
    value: '100+',
    label: { fr: 'pages par contrat généré automatiquement chez GRDF', en: 'pages per contract auto-generated at GRDF' },
  },
  {
    value: '30 à 800 k€',
    label: {
      fr: 'd’investissement par affaire, analysés en rentabilité',
      en: 'of investment per deal, assessed for profitability',
    },
  },
  {
    value: '100k',
    label: { fr: 'visites/mois au pic sur l’Instagram Desrèves', en: 'monthly visits at peak on Desrèves’ Instagram' },
  },
  {
    value: '30-35',
    label: { fr: 'bénévoles encadrés par an au BDE', en: 'volunteers led per year at the BDE' },
  },
  { value: '72', label: { fr: 'cours documentés sur ce site', en: 'courses documented on this site' } },
];

/**
 * Les cartes du deck : une par grande section du site.
 * Chacune a sa propre surface colorée, l'empilement 3D fait le reste.
 * La carte Projets n'est présente que si un projet existe (sinon la page
 * est masquée et pointer dessus mènerait à un cul-de-sac).
 */
const deck = [
  {
    to: '/realisations',
    tone: 'royal',
    title: { fr: 'Réalisations', en: 'Work' },
    desc: {
      fr: 'Ce que le CV résume en une ligne, raconté du contexte aux résultats mesurés.',
      en: 'What the résumé sums up in one line, told from context to measured results.',
    },
    tag: { fr: '5 études de cas', en: '5 case studies' },
  },
  ...(projects.length
    ? [
        {
          to: '/projets',
          tone: 'marine',
          title: { fr: 'Projets', en: 'Projects' },
          desc: {
            fr: 'Des interfaces conçues et développées de bout en bout, captures et choix techniques à l’appui.',
            en: 'Interfaces designed and built end to end, with screenshots and technical choices.',
          },
          tag: {
            fr: `${projects.length} projet${projects.length > 1 ? 's' : ''}`,
            en: `${projects.length} project${projects.length > 1 ? 's' : ''}`,
          },
        } as const,
      ]
    : []),
  {
    to: '/formation',
    tone: 'paper',
    title: { fr: 'Formation', en: 'Education' },
    desc: {
      fr: 'Les 72 enseignements suivis de la Licence 3 au Master 2, avec recherche et filtres.',
      en: 'The 72 courses taken from Bachelor 3 to Master 2, with search and filters.',
    },
    tag: { fr: '72 cours', en: '72 courses' },
  },
  {
    to: '/certifications',
    tone: 'pale',
    title: { fr: 'Certifications', en: 'Certifications' },
    desc: {
      fr: 'Les certifications obtenues, chacune avec son justificatif lisible en grand.',
      en: 'The certifications earned, each with its supporting document readable in full.',
    },
    tag: { fr: '5 justificatifs', en: '5 documents' },
  },
  {
    to: '/profil',
    tone: 'royal',
    title: { fr: 'Profil', en: 'Profile' },
    desc: {
      fr: 'Ma façon de travailler, mes points forts, mes axes de progression et mes compétences.',
      en: 'How I work, my strengths, my areas of growth and my skills.',
    },
    tag: { fr: 'Méthode & compétences', en: 'Method & skills' },
  },
  ...(recommendations.length
    ? [
        {
          to: '/recommandations',
          tone: 'marine',
          title: { fr: 'Recommandations', en: 'Recommendations' },
          desc: {
            fr: 'Ce que celles et ceux qui m’ont encadré disent de mon travail, référence à l’appui.',
            en: 'What the people who supervised me say about my work, with a public reference.',
          },
          tag: {
            fr: `${recommendations.length} recommandation${recommendations.length > 1 ? 's' : ''}`,
            en: `${recommendations.length} recommendation${recommendations.length > 1 ? 's' : ''}`,
          },
        } as const,
      ]
    : []),
] as const;

export function Home() {
  const root = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  usePageTitle(
    locale === 'fr'
      ? 'Florian Bouchart · Systèmes d’information · Produit numérique'
      : 'Florian Bouchart · Information Systems · Digital Product'
  );
  useReveal(root);

  // Entrée du hero : attend la fin du préloader.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll('[data-hero]'), { opacity: 1, y: 0 });
      return;
    }

    let ctx: gsap.Context | undefined;
    const unsub = oncePreloaded(() => {
      ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('[data-hero="rule"]', { scaleX: 0, duration: 1.1, stagger: 0.08, transformOrigin: 'left center' })
          .from('.hero-floor', { opacity: 0, duration: 1.4, ease: 'power2.out' }, 0)
          .from('[data-hero="eyebrow"]', { opacity: 0, y: 12, duration: 0.6 }, '-=0.8')
          // Les lettres arrivent de la profondeur, comme tirées vers la caméra.
          .from(
            '.hero-letter',
            { z: -340, rotationX: -55, opacity: 0, transformPerspective: 700, duration: 1, stagger: 0.032, ease: 'power4.out' },
            '-=0.45'
          )
          .from('[data-hero="fade"]', { opacity: 0, y: 16, duration: 0.7, stagger: 0.09 }, '-=0.5');
      }, el);
    });

    return () => {
      unsub();
      ctx?.revert();
    };
  }, []);

  /**
   * La caméra du hero : toute la scène (sol 3D, grille, contenu) pivote
   * doucement avec la souris, le nom glisse un cran de plus, la lueur suit
   * le pointeur. Trois couches à des vitesses différentes : la profondeur
   * vient de leur désynchronisation.
   */
  useEffect(() => {
    const el = heroRef.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;

    const cam = el.querySelector('.hero-cam');
    const name = el.querySelector('.hero-name');
    const glow = el.querySelector('.hero-glow');
    if (!cam || !name) return;

    const camRx = gsap.quickTo(cam, 'rotationX', { duration: 1.1, ease: 'power3.out' });
    const camRy = gsap.quickTo(cam, 'rotationY', { duration: 1.1, ease: 'power3.out' });
    const nx = gsap.quickTo(name, 'x', { duration: 0.8, ease: 'power3.out' });
    const ny = gsap.quickTo(name, 'y', { duration: 0.8, ease: 'power3.out' });
    const glowX = glow ? gsap.quickTo(glow, 'x', { duration: 0.5, ease: 'power2.out' }) : null;
    const glowY = glow ? gsap.quickTo(glow, 'y', { duration: 0.5, ease: 'power2.out' }) : null;

    const move = (e: MouseEvent) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      camRy(dx * 3.2);
      camRx(dy * -2.2);
      nx(dx * 16);
      ny(dy * 9);
      glowX?.(e.clientX);
      glowY?.(e.clientY);
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Sortie du hero au scroll : la scène recule dans la profondeur (dolly arrière).
  useEffect(() => {
    const el = heroRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to('.hero-cam', {
        yPercent: -7,
        scale: 0.93,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 0.4 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  /**
   * Le deck 3D : la zone se fige (pin) et chaque carte arrive de dessous en
   * perspective pour recouvrir la précédente, qui recule dans la profondeur.
   * Desktop uniquement : sur mobile et en motion réduite, les cartes se lisent
   * en flux vertical classique.
   */
  useEffect(() => {
    const zone = deckRef.current;
    if (!zone) return;
    if (prefersReducedMotion()) return;

    // Sur mobile, le pin 3D scrubé est capricieux au tactile. On garde l'esprit
    // « carte qu'on pose » avec une entrée 2D propre : la carte monte depuis le bas
    // en fondu, avec un très léger zoom qui se stabilise. Pas de bascule 3D (qui
    // déformait la carte sur un grand format), juste un mouvement net et lisible.
    if (!window.matchMedia('(min-width: 56rem)').matches) {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.deck-card').forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.965 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.72,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 90%', once: true },
            }
          );
        });
      }, zone);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.deck-card');
      if (cards.length < 2) return;

      gsap.set(cards, { transformOrigin: 'center 20%' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: zone,
          start: 'top top',
          end: `+=${(cards.length - 1) * 90}%`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(
          card,
          { yPercent: 118, rotationX: -13, z: -140, scale: 1.02 },
          { yPercent: 0, rotationX: 0, z: 0, scale: 1, duration: 1, ease: 'none' }
        ).to(
          cards[i - 1],
          { scale: 0.93, yPercent: -3.5, rotationX: 3.5, z: -110, opacity: 0.42, duration: 1, ease: 'none' },
          '<'
        );
      });
    }, zone);

    return () => ctx.revert();
  }, []);

  const renderWord = (word: string) => (
    <span className="hero-line">
      {word.split('').map((c, i) => (
        <span className="hero-letter-mask" key={i}>
          <span className="hero-letter">{c}</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="page" ref={root}>
      <header className="hero" ref={heroRef}>
        <HeroCanvas />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-cam">
          <div className="hero-floor" aria-hidden="true" />

          <div className="hero-grid" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} />
            ))}
          </div>

          <div className="shell hero-inner">
          <div className="hero-rule" data-hero="rule" />

          <p className="eyebrow hero-eyebrow" data-hero="eyebrow">
            <span>{t({ fr: 'CV digital', en: 'Digital résumé' })}</span>
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            <span>{t({ fr: 'Systèmes d’information', en: 'Information systems' })}</span>
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            <span>2026</span>
          </p>

          <h1 className="hero-name">
            <span className="visually-hidden">Florian Bouchart</span>
            <span aria-hidden="true">
              {renderWord('Florian')}
              <span className="hero-line hero-line--accent">
                {'Bouchart'.split('').map((c, i) => (
                  <span className="hero-letter-mask" key={i}>
                    <span className="hero-letter">{c}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <div className="hero-rule" data-hero="rule" />

          <div className="hero-body">
            <p className="mono hero-discipline" data-hero="fade">
              {t(profile.discipline)}
            </p>
            <div className="hero-statement">
              <p className="hero-tagline" data-hero="fade">
                {t(profile.tagline)}
              </p>
              <p className="hero-intro measure" data-hero="fade">
                {t({
                  fr: 'Vous avez mon CV entre les mains. Ce site le complète : il détaille les projets, la formation et les certifications qu’une page résume en quelques lignes.',
                  en: 'You already have my résumé. This site completes it: the projects, education and certifications a single page can only summarise.',
                })}
              </p>
              <div className="hero-meta" data-hero="fade">
                <span className="hero-status">
                  <span className="hero-status-dot" aria-hidden="true" />
                  {t(profile.availability)}
                </span>
                <span className="mono hero-location">{t(profile.location)}</span>
              </div>
            </div>
          </div>

          <div className="hero-rule" data-hero="rule" />

          <ul className="hero-proof" data-hero="fade">
            {proof.map((p) => (
              <li key={p.label.fr}>
                <Counter value={p.value} className="hero-proof-value mono" />
                <span className="hero-proof-label">{t(p.label)}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>

        <p className="hero-scroll mono" aria-hidden="true">
          {t({ fr: 'Défiler', en: 'Scroll' })}
          <span className="hero-scroll-line" />
        </p>
      </header>

      <section className="deck-zone" id="contenu" ref={deckRef}>
        <div className="deck-head shell">
          <h2 className="deck-title">{t({ fr: 'Ce que ce site ajoute à mon CV', en: 'What this site adds to my résumé' })}</h2>
          <p className="deck-sub">
            {t({
              fr: 'Le détail de ce qui ne tient pas sur une page A4.',
              en: 'The detail that does not fit on an A4 page.',
            })}
          </p>
        </div>

        <div className="deck">
          {deck.map((d) => (
            <TLink to={d.to} className={`deck-card deck-card--${d.tone}`} key={d.to}>
              <span className="deck-card-top">
                <span className="deck-card-tag">{t(d.tag)}</span>
              </span>
              <span className="deck-card-title">{t(d.title)}</span>
              <span className="deck-card-desc">{t(d.desc)}</span>
              <span className="deck-card-go">
                {t({ fr: 'Découvrir', en: 'Discover' })}
                <span className="deck-card-arrow" aria-hidden="true">→</span>
              </span>
            </TLink>
          ))}
        </div>
      </section>

    </div>
  );
}
