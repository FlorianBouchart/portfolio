import type { Project } from './types';

/**
 * Projets documentés. Dès qu'un projet existe ici, la page Projets apparaît
 * dans la navigation, automatiquement.
 *
 * Confidentialité : seules des pages choisies sont montrées, sans donnée
 * commerciale ni client identifiable. Chaque projet concerné porte une `note`
 * affichée sous ses visuels.
 *
 * Miamintosch (ajouté le 30/07/2026) : produit personnel, donc les captures
 * montrent de vraies données de foyer. La note le dit explicitement plutôt que
 * de faire passer un jeu de démonstration pour un usage réel.
 *
 * À VENIR (validé par Florian le 18/07/2026) : le site de mariage, après
 * l'événement, ou avant si tout est anonymisé (noms, visages, lieux,
 * informations personnelles). L'objet sera le travail de conception,
 * l'expérience utilisateur et les choix techniques, pas le mariage lui-même.
 */
export const projects: Project[] = [
  {
    id: 'miamintosch',
    title: { fr: 'Miamintosch', en: 'Miamintosch' },
    tagline: {
      fr: 'Copilote alimentaire local-first : le stock se tient à jour tout seul, l’IA propose les repas, la liste de courses se déduit.',
      en: 'A local-first food copilot: the pantry keeps itself up to date, AI suggests the meals, the shopping list follows.',
    },
    context: {
      fr: 'Produit personnel conçu et développé de bout en bout, du cahier des charges à l’interface : modèle de données, arbitrages fonctionnels, direction artistique et code. Il répond à une charge mentale très concrète, savoir quoi cuisiner avec ce qu’on a déjà, sans y passer ses soirées. Tout tourne en local sur la machine, y compris l’IA.',
      en: 'A personal product designed and built end to end, from specification to interface: data model, product trade-offs, art direction and code. It answers a very concrete mental load, knowing what to cook with what you already have, without spending your evenings on it. Everything runs locally on the machine, including the AI.',
    },
    problem: {
      fr: 'Ce type d’outil meurt toujours de la même cause : la friction de saisie. Personne ne saisit ses courses article par article. Deuxième piège, un assistant qui se contente de rejouer l’historique finit par proposer toujours les mêmes plats.',
      en: 'This kind of tool always dies of the same cause: data-entry friction. Nobody logs their groceries item by item. Second trap, an assistant that merely replays history ends up suggesting the same meals forever.',
    },
    objective: {
      fr: 'Une boucle complète où chaque étape alimente la suivante : capturer une course en photo, comprendre la consommation, proposer des repas ancrés dans le stock réel, en déduire la liste de courses, apprendre des retours. La règle produit : automatiser le maximum, ne jamais demander une saisie que le système peut déduire.',
      en: 'A complete loop where each step feeds the next: capture a shop from a photo, understand consumption, suggest meals anchored in the real pantry, derive the shopping list, learn from feedback. The product rule: automate as much as possible, never ask for input the system can derive.',
    },
    architecture: {
      fr: 'Next.js (App Router) et TypeScript de bout en bout, base SQLite avec Drizzle, IA exécutée localement par Ollama. La frontière est stricte et volontaire : tout ce qui se calcule reste déterministe (stocks, budgets, dates de péremption, listes), l’IA ne sert qu’à ce qu’elle fait mieux, lire un ticket en photo et proposer des plats. Une addition ne passe jamais par un modèle. L’interface s’appuie sur un design system maison et une scène Three.js générée par le code.',
      en: 'Next.js (App Router) and TypeScript end to end, a SQLite database with Drizzle, AI running locally through Ollama. The boundary is strict and deliberate: everything computable stays deterministic (stock, budgets, expiry dates, lists), the AI only does what it does better, reading a receipt photo and proposing dishes. An addition never goes through a model. The interface relies on a homemade design system and a procedurally generated Three.js scene.',
    },
    stack: ['Next.js', 'TypeScript', 'SQLite / Drizzle', 'Ollama (IA locale)', 'Three.js', 'Lenis'],
    skills: [
      { fr: 'Conception produit de bout en bout', en: 'End-to-end product design' },
      { fr: 'Modélisation de données', en: 'Data modelling' },
      { fr: 'Frontière déterministe et IA', en: 'Deterministic / AI boundary' },
      { fr: 'Lecture de document par vision', en: 'Document reading via vision' },
      { fr: 'Direction artistique et design system', en: 'Art direction & design system' },
    ],
    metrics: [
      { value: '100 %', label: { fr: 'local, aucune donnée ne sort de la machine', en: 'local, no data leaves the machine' } },
      { value: '0', label: { fr: 'saisie manuelle : le stock naît d’une photo', en: 'manual entry: stock comes from a photo' } },
      { value: '7', label: { fr: 'écrans, de l’inventaire à la liste de courses', en: 'screens, from inventory to shopping list' } },
    ],
    challenges: [
      {
        problem: {
          fr: 'Remplir un inventaire à la main est rédhibitoire : sans capture automatique, l’outil n’est jamais utilisé plus d’une semaine.',
          en: 'Filling an inventory by hand is a deal breaker: without automatic capture, the tool never survives its first week.',
        },
        solution: {
          fr: 'Un modèle de vision lit la photo du ticket et en sort les articles, les quantités et les prix. L’écran de relecture reste éditable, puis le stock se crée seul avec sa zone de rangement et une date de péremption estimée par catégorie.',
          en: 'A vision model reads the receipt photo and extracts items, quantities and prices. The review screen stays editable, then the stock is created on its own with its storage zone and an expiry date estimated per category.',
        },
      },
      {
        problem: {
          fr: 'La liste de courses ressortait presque toujours vide : un ingrédient était considéré comme couvert dès qu’un produit de la même catégorie existait en stock. Avoir des carottes suffisait à « couvrir » des courgettes.',
          en: 'The shopping list came out almost always empty: an ingredient counted as covered as soon as any product of the same category was in stock. Having carrots was enough to “cover” courgettes.',
        },
        solution: {
          fr: 'Le rapprochement se fait désormais par nom, sur des mots significatifs normalisés, et non plus par catégorie. Vérifié sur des cas limites : seul l’ingrédient réellement absent passe en « à acheter », sans faux positif.',
          en: 'Matching is now done by name, on normalised significant words, no longer by category. Verified on edge cases: only the genuinely missing ingredient moves to “to buy”, with no false positives.',
        },
      },
      {
        problem: {
          fr: 'Un bug transverse faussait toutes les dates : la conversion utilisée renvoyait la date UTC, donc la veille entre minuit et deux heures du matin en France. Le plan de repas démarrait la veille.',
          en: 'A cross-cutting bug skewed every date: the conversion in use returned the UTC date, hence the previous day between midnight and 2am in France. The meal plan started a day early.',
        },
        solution: {
          fr: 'Des fonctions de date locales centralisées, appliquées partout où une date était calculée, plus aucune conversion UTC pour une date du quotidien.',
          en: 'Centralised local-date helpers, applied everywhere a date was computed, with no UTC conversion left for an everyday date.',
        },
      },
    ],
    media: [
      {
        src: '/projects/miamintosch/accueil.jpg',
        video: '/projects/miamintosch/accueil.mp4',
        alt: { fr: 'Accueil de Miamintosch, machine 3D et relances du jour', en: 'Miamintosch home screen, 3D machine and daily prompts' },
        caption: {
          fr: 'L’accueil : la machine est modélisée par le code et suit le curseur. En dessous, le produit relance de lui-même sur ce qui vient d’être cuisiné.',
          en: 'The home screen: the machine is generated by code and follows the cursor. Below, the product proactively asks about what was just cooked.',
        },
      },
      {
        src: '/projects/miamintosch/stocks.jpg',
        video: '/projects/miamintosch/stocks.mp4',
        alt: { fr: 'Écran des stocks, priorité aux produits qui périment', en: 'Stock screen, prioritising items about to expire' },
        caption: {
          fr: 'Le stock, né de la photo d’une course : ce qui périme en premier passe en tête, avec la valeur en jeu sur les cinq prochains jours.',
          en: 'The pantry, born from a shop photo: whatever expires first comes first, with the value at stake over the next five days.',
        },
      },
      {
        src: '/projects/miamintosch/assistant.jpg',
        video: '/projects/miamintosch/assistant.mp4',
        alt: { fr: 'L’assistant de courses, contexte lu automatiquement puis brief', en: 'The shopping assistant, context read automatically then brief' },
        caption: {
          fr: 'L’assistant lit d’abord la situation réelle (stock, budget déjà consommé, repas prévus), puis ne pose que les questions utiles avant de composer.',
          en: 'The assistant first reads the real situation (stock, budget already spent, planned meals), then asks only the questions that matter before composing.',
        },
      },
    ],
    note: {
      fr: 'Les écrans montrent mes propres données de foyer, puisque le produit se nourrit d’usages réels. Rien n’est simulé.',
      en: 'The screens show my own household data, since the product feeds on real usage. Nothing is mocked up.',
    },
    noteBadge: { fr: 'Données réelles', en: 'Real data' },
  },
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
