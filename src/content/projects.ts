import type { Project } from './types';

/**
 * Projets documentés. Dès qu'un projet existe ici, la page Projets apparaît
 * dans la navigation, automatiquement.
 *
 * Confidentialité : seules des pages choisies sont montrées, sans donnée
 * commerciale ni client identifiable. Chaque projet concerné porte une `note`
 * affichée sous ses visuels.
 *
 * À VENIR (validé par Florian le 18/07/2026) : le site de mariage, après
 * l'événement, ou avant si tout est anonymisé (noms, visages, lieux,
 * informations personnelles). L'objet sera le travail de conception,
 * l'expérience utilisateur et les choix techniques, pas le mariage lui-même.
 */
export const projects: Project[] = [
  {
    id: 'reskope',
    title: { fr: 'Reskope', en: 'Reskope' },
    tagline: {
      fr: 'Site immersif multi-pages pour une activité de conseil et d’ingénierie numérique.',
      en: 'Immersive multi-page website for a digital consulting and engineering practice.',
    },
    context: {
      fr: 'Conception et développement complets du site d’une activité de conseil numérique : identité visuelle, direction artistique, contenu et code. Le fil conducteur visuel est un réseau de points animé qui se réorganise au fil du scroll, décliné jusqu’au logo.',
      en: 'Full design and build of a digital consulting website: visual identity, art direction, content and code. The visual thread is an animated dot network that reorganises itself as you scroll, echoed down to the logo.',
    },
    problem: {
      fr: 'Rendre tangible une promesse abstraite (transformer des outils dispersés en un système cohérent) sans jargon, et tenir un niveau d’animation élevé sur neuf pages sans sacrifier la fluidité.',
      en: 'Making an abstract promise tangible (turning scattered tools into a coherent system) without jargon, while sustaining a high level of animation across nine pages without sacrificing smoothness.',
    },
    objective: {
      fr: 'Un site qui démontre par lui-même ce qu’il vend : chaque page raconte une étape (constat, méthode, offres, engagement écologique) portée par des animations liées au scroll.',
      en: 'A site that demonstrates what it sells: each page tells a step (the problem, the method, the offers, the ecological commitment) carried by scroll-driven animation.',
    },
    architecture: {
      fr: 'React 19 et Vite, React Router en multi-pages, animations GSAP et défilement Lenis, scènes de particules Three.js (React Three Fiber), micro-interactions Framer Motion. Bilingue français-anglais.',
      en: 'React 19 and Vite, multi-page React Router, GSAP animation with Lenis scrolling, Three.js particle scenes (React Three Fiber), Framer Motion micro-interactions. Bilingual French-English.',
    },
    stack: ['React 19', 'Vite', 'GSAP', 'Lenis', 'Three.js / R3F', 'Framer Motion', 'React Router'],
    skills: [
      { fr: 'Direction artistique et identité visuelle', en: 'Art direction & visual identity' },
      { fr: 'Animation liée au scroll', en: 'Scroll-driven animation' },
      { fr: 'Particules et scènes 3D', en: 'Particles & 3D scenes' },
      { fr: 'Site bilingue multi-pages', en: 'Bilingual multi-page site' },
    ],
    // Les captures sont des vidéos : c'est l'animation au scroll qui fait la
    // valeur du projet, une image figée ne la montrerait pas.
    media: [
      {
        src: '/projects/reskope/home.jpg',
        video: '/projects/reskope/home.mp4',
        alt: { fr: 'Accueil de Reskope, animation au scroll', en: 'Reskope home page, scroll animation' },
        caption: {
          fr: 'L’accueil : le réseau de points signature réagit au scroll et à la souris.',
          en: 'The home page: the signature dot network reacts to scroll and mouse.',
        },
      },
      {
        src: '/projects/reskope/methode.jpg',
        video: '/projects/reskope/methode.mp4',
        alt: { fr: 'Page méthode de Reskope, animation au scroll', en: 'Reskope method page, scroll animation' },
        caption: {
          fr: 'La méthode : le réseau se réorganise au fil du scroll pour raconter les cinq étapes.',
          en: 'The method: the network reorganises through scroll to tell the five steps.',
        },
      },
      {
        src: '/projects/reskope/offres.jpg',
        video: '/projects/reskope/offres.mp4',
        alt: { fr: 'Page offres de Reskope, animation au scroll', en: 'Reskope offers page, scroll animation' },
        caption: {
          fr: 'Les offres : une sphère de particules Three.js, le chiffre dessiné en constellation.',
          en: 'The offers: a Three.js particle sphere, the number drawn as a constellation.',
        },
      },
    ],
    note: {
      fr: 'Confidentialité : seules des pages choisies sont montrées ici, sans contenu commercial détaillé ni information client. Certains éléments du projet sont volontairement absents.',
      en: 'Confidentiality: only selected pages are shown here, with no detailed commercial content or client information. Some parts of the project are deliberately left out.',
    },
  },
];
