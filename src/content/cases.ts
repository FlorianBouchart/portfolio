import type { CaseStudy } from './types';

/**
 * Études de cas : contexte → travail réalisé → résultats.
 *
 * Réécrit le 18/07/2026 sur corrections détaillées de Florian. Règle absolue :
 * chaque ligne doit être défendable en entretien sans nuance à apporter.
 *   — GRDF repose sur UNE base de données centrale qui alimente plusieurs
 *     fichiers connectés (publipostage des contrats, calcul des pénalités).
 *   — Contrats : ~35 renouvellements/an visés, mais 60-80 contrats produits ;
 *     chaque contrat renouvelé fait 100+ pages ; gain 10-15 min → 1 min.
 *   — Pénalités : le vrai apport est le passage d'un traitement commune par
 *     commune à un traitement global sur tout le périmètre.
 *   — CRAC : PAS une automatisation faite par Florian. L'outil de
 *     personnalisation est piloté au national ; son rôle = préparer,
 *     coordonner et fiabiliser les données (transversalité, AMOA).
 *   — Les 100k visites/mois de Desrèves sont sur Instagram, pas sur le site.
 */
export const cases: CaseStudy[] = [
  {
    id: 'contrats',
    title: {
      fr: 'Génération automatisée des contrats de concession',
      en: 'Automated generation of concession contracts',
    },
    org: 'GRDF',
    problem: {
      fr: 'Le portefeuille compte plus de 600 contrats de concession. L’objectif annuel de renouvellement était d’environ 35 contrats, mais le volume de production documentaire pouvait atteindre 60 à 80 contrats par an. Chaque contrat renouvelé représente un document de plus de 100 pages qui doit être parfaitement cohérent avant signature : données administratives, clauses, informations territoriales, annexes, indicateurs, éléments réglementaires. L’enjeu : produire plusieurs dizaines de documents longs, fiables et homogènes, sur lesquels les chargés de territoires s’appuient ensuite pour accompagner les collectivités.',
      en: 'The portfolio holds 600+ concession contracts. The annual renewal target was around 35 contracts, but documentary output could reach 60 to 80 contracts a year. Each renewed contract is a 100+ page document that must be fully consistent before signature: administrative data, clauses, territorial information, annexes, indicators, regulatory elements. The challenge: producing dozens of long, reliable and consistent documents, which territory managers then use to guide the municipalities.',
    },
    approach: {
      fr: 'Conception d’un processus industrialisé autour d’une base de données centrale (Excel, VBA, génération documentaire) : plusieurs fichiers connectés exploitent les mêmes informations. L’utilisateur actualise les données une fois par an, renseigne les codes INSEE des communes concernées et lance l’automatisation ; les fichiers se mettent à jour et alimentent notamment le publipostage des contrats. Au-delà du temps gagné, l’automatisation réduit les risques d’erreur, garantit une méthode homogène et facilite le suivi des renouvellements.',
      en: 'Designed an industrialised process built around a central database (Excel, VBA, document generation): several connected files draw on the same information. The user refreshes the data once a year, enters the INSEE codes of the municipalities and runs the automation; the files update and feed the contract mail-merge, among others. Beyond the time saved, the automation reduces error risk, enforces a consistent method and eases renewal tracking.',
    },
    metrics: [
      { value: '100+', label: { fr: 'pages par contrat renouvelé', en: 'pages per renewed contract' } },
      { value: '10-15 min → 1 min', label: { fr: 'par contrat préparé', en: 'per contract prepared' } },
      { value: '60-80', label: { fr: 'contrats produits par an', en: 'contracts produced per year' } },
    ],
  },
  {
    id: 'penalites',
    title: {
      fr: 'Automatisation du calcul des pénalités contractuelles',
      en: 'Automating contractual penalty calculations',
    },
    org: 'GRDF',
    problem: {
      fr: 'Les contrats portent des indicateurs de performance. À la clôture de l’exercice, il fallait, commune par commune, réaliser des extractions, récupérer les données, puis utiliser un fichier de calcul pour déterminer les pénalités éventuellement dues aux collectivités. Un traitement répétitif, chronophage et exposé à l’erreur humaine.',
      en: 'Contracts carry performance indicators. At year-end close, each municipality required its own extractions, data gathering, then a calculation file to determine any penalties owed to the local authorities. A repetitive, time-consuming and error-prone process.',
    },
    approach: {
      fr: 'Le calcul s’appuie sur la même base de données centrale : les données sont centralisées, les règles de calcul intégrées, et les résultats obtenus pour l’ensemble des communes simultanément. Le vrai changement : passer d’un traitement individuel, commune par commune, à un traitement global automatisé sur tout le périmètre. On y gagne en temps et en fiabilité, avec une vision consolidée immédiate qui facilite l’anticipation des provisions comptables.',
      en: 'The calculation relies on the same central database: data centralised, calculation rules embedded, results obtained for every municipality at once. The real shift: moving from an individual, municipality-by-municipality process to a global automated one across the whole scope. The gain is speed and reliability, with an immediate consolidated view that eases the anticipation of accounting provisions.',
    },
    metrics: [
      {
        value: 'Commune par commune → global',
        label: { fr: 'le passage d’un traitement individuel à un traitement d’ensemble', en: 'from per-municipality to portfolio-wide processing' },
      },
      {
        value: 'Vision consolidée',
        label: { fr: 'des montants potentiellement dus, immédiatement', en: 'of potential amounts due, instantly' },
      },
    ],
  },
  {
    id: 'crac',
    title: {
      fr: 'Coordination transverse de la campagne CRAC',
      en: 'Cross-functional coordination of the CRAC campaign',
    },
    org: 'GRDF',
    problem: {
      fr: 'Chaque contrat donne lieu à un Compte Rendu d’Activité de Concession (CRAC), établi chaque année. Certains exigent des personnalisations spécifiques selon les projets en cours (par exemple un changement de gaz), leur état d’avancement, les communes concernées et les informations disponibles. Ces personnalisations, réalisées dans un logiciel piloté au niveau national, ne sont donc identiques pour aucun contrat.',
      en: 'Each contract produces a Concession Activity Report (CRAC), issued every year. Some require specific customisations depending on ongoing projects (a gas conversion, for instance), their progress, the municipalities involved and the data available. These customisations, handled in a nationally managed tool, are identical for no two contracts.',
    },
    approach: {
      fr: 'Mon rôle portait sur la préparation, la coordination et la fiabilisation des données. Concrètement : identifier les contrats concernés, récupérer et croiser les bonnes informations, poser les bonnes questions aux bons interlocuteurs, vérifier la pertinence des données et coordonner les échanges entre métiers, qui rédigent ensuite les textes personnalisés. L’intérêt de cette mission n’est pas technique : c’est la transversalité, la compréhension d’un besoin métier et sa transformation en une personnalisation exploitable, plus proche de la gestion de projet et de l’AMOA que de l’outil.',
      en: 'My role was the preparation, coordination and reliability of the data. In practice: identify the contracts concerned, gather and cross-reference the right information, ask the right people the right questions, check the data’s relevance and coordinate exchanges between teams, who then write the customised text. The value here is not technical: it is cross-functional coordination, understanding a business need and turning it into a usable customisation, closer to project management and business analysis than to tooling.',
    },
    metrics: [
      {
        value: 'Transversal',
        label: { fr: 'coordination entre métiers et sources de données', en: 'coordination across teams and data sources' },
      },
      {
        value: 'AMOA',
        label: { fr: 'du besoin métier à la personnalisation exploitable', en: 'from business need to usable customisation' },
      },
    ],
  },
  {
    id: 'pivot',
    title: {
      fr: 'Desrèves : repenser un modèle de A à Z',
      en: 'Desrèves: rebuilding a business model from scratch',
    },
    org: 'Desrèves',
    problem: {
      fr: 'À l’origine, Desrèves était une marque de vêtements fabriqués en Asie. Le modèle ne convainquait ni sur la différenciation ni sur le sens : sur un marché e-commerce saturé, difficile d’exister sans proposition de valeur forte. Plutôt que d’ajuster la gamme, j’ai choisi de remettre le modèle économique en question.',
      en: 'Desrèves began as a clothing brand manufactured in Asia. The model convinced neither on differentiation nor on meaning: in a saturated e-commerce market, standing out without a strong value proposition is hard. Rather than tweak the range, I chose to question the business model itself.',
    },
    approach: {
      fr: 'Pivot stratégique complet vers une marque d’accessoires en soie naturelle, fabriqués en petite série dans des ateliers partenaires à Paris, Lyon et en Normandie. Nouvelle vision, nouvelle proposition de valeur, nouvelle cible : presque une nouvelle entreprise. Le repositionnement s’appuie sur une vraie démarche : étude de marché (questionnaire quantitatif de 60+ répondants, entretiens qualitatifs, construction du persona), site e-commerce Shopify (fiches produit, tunnel de conversion, pré-commandes), contenu Instagram et TikTok, négociation directe avec les ateliers. Le tout défendu dans un business plan complet, présenté en soutenance de Master 2 et noté meilleure note de la promotion (18/20).',
      en: 'A full strategic pivot to a natural-silk accessories brand, made in small batches by partner workshops in Paris, Lyon and Normandy. New vision, new value proposition, new target: almost a new company. The repositioning rests on a real method: a market study (quantitative survey of 60+ respondents, qualitative interviews, persona building), a Shopify e-commerce site (product pages, conversion funnel, pre-orders), Instagram and TikTok content, direct negotiation with the workshops. All of it defended in a complete business plan, presented at the Master 2 defence and graded top of the class (18/20).',
    },
    // Précisions Florian (18/07/2026) + profil LinkedIn : marque d'accessoires
    // en soie made in France (Paris/Lyon/Normandie), pivot depuis du vêtement
    // fabriqué en Asie ; les 100k visites/mois sont sur Instagram, pas le site ;
    // business plan noté 18/20, meilleure note de la promo.
    metrics: [
      { value: 'Asie → Made in France', label: { fr: 'un repositionnement complet du modèle', en: 'a full repositioning of the model' } },
      { value: '100k', label: { fr: 'visites/mois au pic sur Instagram', en: 'monthly visits at peak on Instagram' } },
      { value: '18/20', label: { fr: 'business plan, meilleure note de la promo', en: 'business plan, top grade of the class' } },
    ],
  },
  {
    id: 'amoses',
    title: { fr: 'Projet textile BDE × Amoses', en: 'BDE × Amoses apparel project' },
    org: 'BDE IAE Valenciennes',
    problem: {
      fr: 'Aucune offre de merchandising de qualité n’existait pour les étudiants de l’IAE. L’idée était inédite en France : aucun BDE n’avait collaboré avec une marque de vêtements reconnue.',
      en: 'No quality merchandise existed for IAE students. The idea was unprecedented in France: no student union had ever partnered with a recognised clothing brand.',
    },
    approach: {
      fr: 'Gestion de bout en bout : sourcing fournisseurs, design, prix fixé à 45 €, campagne de lancement et distribution, en pilotant une trentaine de bénévoles.',
      en: 'End-to-end delivery: supplier sourcing, design, €45 pricing, launch campaign and distribution, leading around thirty volunteers.',
    },
    metrics: [
      { value: '100+', label: { fr: 'ventes réalisées', en: 'sales completed' } },
      { value: '45 €', label: { fr: 'le prix de vente unitaire', en: 'unit selling price' } },
      { value: '30', label: { fr: 'bénévoles pilotés', en: 'volunteers led' } },
    ],
  },
];
