import type { FaqItem } from './types';

/**
 * FAQ — anticipe les questions logistiques d'un recruteur.
 * Source : ancien site (blocs faq_*), avec deux mises à jour :
 *   — Q1 : disponibilité corrigée juillet → septembre 2026 (confirmé par Florian le 16/07/2026).
 *   — Q3 : la réponse ciblait « Chef de Projet » ; élargie aux métiers réellement visés
 *          par les 6 CV, le site ayant un positionnement neutre.
 */
export const faq: FaqItem[] = [
  {
    q: { fr: 'Quand êtes-vous disponible ?', en: 'When are you available?' },
    a: {
      fr: 'Mon Master 2 (IAE Valenciennes, UPHF) s’achève et mon contrat d’alternance chez GRDF prend fin en juin 2026. Je suis disponible en CDI à partir de <strong>septembre 2026</strong>.',
      en: 'My Master 2 (IAE Valenciennes, UPHF) ends and my apprenticeship at GRDF finishes in June 2026. I am available for a permanent role from <strong>September 2026</strong>.',
    },
  },
  {
    q: { fr: 'Quelle est votre zone de mobilité ?', en: 'What is your geographic mobility?' },
    a: {
      fr: 'Je cible prioritairement <strong>Lille et sa métropole</strong> et la région des Hauts-de-France (Valenciennes). Je reste ouvert à <strong>Paris</strong> ou à un poste en <strong>full télétravail</strong> partout en France. Je suis véhiculé.',
      en: 'I primarily target <strong>Lille and its metropolitan area</strong> and the Hauts-de-France region (Valenciennes). I am open to <strong>Paris</strong> or a <strong>full remote</strong> position anywhere in France. I have a car.',
    },
  },
  {
    q: { fr: 'Quel type de contrat recherchez-vous ?', en: 'What type of contract are you looking for?' },
    a: {
      fr: 'Un <strong>CDI dans les systèmes d’information et le numérique</strong> : business analysis, AMOA, product ownership ou gestion de projet, pour m’investir sur le long terme et piloter des chantiers à fort impact.',
      en: 'A <strong>permanent contract in information systems and digital</strong>: business analysis, business consulting, product ownership or project management, to invest long-term and drive high-impact initiatives.',
    },
  },
  {
    q: { fr: 'Télétravail : full ou hybride ?', en: 'Remote work: full or hybrid?' },
    a: {
      fr: 'Les deux. J’apprécie le travail en équipe et l’agilité, donc l’hybride est un excellent compromis. J’ai par ailleurs un <strong>setup professionnel</strong> qui garantit la productivité et l’animation de réunions à distance.',
      en: 'Both work for me. I value teamwork and agility, so hybrid is a great compromise. I also have a <strong>professional setup</strong> ensuring productivity and remote meeting facilitation.',
    },
  },
  {
    q: { fr: 'Quelles sont vos prétentions salariales ?', en: 'What are your salary expectations?' },
    a: {
      fr: 'Ouvert à la discussion selon le niveau de responsabilités, le secteur (banque/assurance, retail, industrie) et le package (RTT, mutuelle, intéressement). Mes attentes correspondent au marché pour un Bac+5 avec trois années d’expérience projet en alternance.',
      en: 'Open to discussion depending on the level of responsibility, the sector (banking/insurance, retail, industry) and the package. My expectations match the market for a Master’s graduate with three years of apprenticeship project experience.',
    },
  },
];
