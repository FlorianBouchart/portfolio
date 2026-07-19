import type { I18n } from './types';

/**
 * « Mon fil conducteur » — comment les expériences réelles de Florian l'ont
 * amené vers le produit / la BA / l'AMOA.
 *
 * Réécrit le 18/07/2026 : plus de convictions génériques de « chef de projet ».
 * Chaque bloc est ancré dans un fait vérifiable (GRDF, Desrèves, Master MDPE)
 * et tourné vers les métiers réellement visés. Rien d'inventé.
 */
export const visions: { title: I18n; desc: I18n }[] = [
  {
    title: { fr: 'Analyser le besoin avant l’outil', en: 'Analysing the need before the tool' },
    desc: {
      fr: 'Chez GRDF, mes automatisations et la campagne CRAC ont moins été une affaire de technique que de besoin : identifier les bons contrats, croiser des données de plusieurs sources, poser les bonnes questions aux métiers et fiabiliser l’information. C’est le cœur du travail d’AMOA et de business analyst, et c’est là que je me sens le plus utile.',
      en: 'At GRDF, my automations and the CRAC campaign were less about technology than about the need: identifying the right contracts, cross-referencing data from several sources, asking business teams the right questions and making information reliable. That is the heart of business analysis and requirements work, and it is where I feel most useful.',
    },
  },
  {
    title: { fr: 'Porter un produit de bout en bout', en: 'Owning a product end to end' },
    desc: {
      fr: 'Avec Desrèves, j’ai tenu le rôle d’un product owner sur un projet réel : vision, roadmap, arbitrages, étude de marché et persona, boutique Shopify pilotée par la donnée. J’y ai appris à décider avec des utilisateurs et des chiffres, et à assumer un pivot stratégique complet quand le modèle ne tenait pas.',
      en: 'With Desrèves, I played the role of a product owner on a real project: vision, roadmap, trade-offs, market study and persona, a data-driven Shopify store. I learned to decide with users and numbers, and to own a full strategic pivot when the model did not hold.',
    },
  },
  {
    title: { fr: 'Comprendre le numérique de l’intérieur', en: 'Understanding digital from the inside' },
    desc: {
      fr: 'Mon Master Management Digital et Projet Entrepreneurial (major de promotion) et mes certifications récentes sur Claude Code et l’API d’Anthropic prolongent la même trajectoire : je préfère comprendre comment se construit un produit numérique pour mieux dialoguer avec ceux qui le font.',
      en: 'My Master’s in Digital Management and Entrepreneurial Projects (top of class) and my recent certifications on Claude Code and the Anthropic API extend the same path: I prefer to understand how a digital product is built so I can work better with the people who build it.',
    },
  },
];
