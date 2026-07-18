import type { Certification } from './types';

/**
 * Certifications et distinctions — uniquement celles dont le justificatif existe.
 *
 * ⚠️ ABSENTES VOLONTAIREMENT : Scrum et SAFe.
 * Les 6 CV affirment « certifié Scrum & SAFe », mais aucun justificatif n'a été fourni
 * et le seul élément du corpus est un cours de M2 intitulé « Scrum Master (Préparation) ».
 * Tant que Florian n'a pas confirmé le statut réel (certifié / en préparation), ces deux
 * mentions ne figurent pas sur le site : afficher une certification non détenue est
 * un risque disqualifiant en entretien. À réintégrer ici dès confirmation.
 */
export const certifications: Certification[] = [
  // Ajouts du 18/07/2026 : affichés en premier (les plus récents / les plus
  // pertinents pour un poste numérique).
  {
    id: 'claude-code',
    name: {
      fr: 'Claude Code in Action',
      en: 'Claude Code in Action',
    },
    issuer: 'Anthropic',
    date: '2026-07-01',
    dateLabel: { fr: 'Juillet 2026', en: 'July 2026' },
    image: '/certifications/claude-code.jpg',
    skills: [
      { fr: 'Développement assisté par IA', en: 'AI-assisted development' },
      { fr: 'Agents et outils Claude Code', en: 'Claude Code agents & tools' },
      { fr: 'Automatisation de workflows', en: 'Workflow automation' },
    ],
  },
  {
    id: 'claude-api',
    name: {
      fr: 'Claude with the Anthropic API',
      en: 'Claude with the Anthropic API',
    },
    issuer: 'Anthropic',
    date: '2026-07-01',
    dateLabel: { fr: 'Juillet 2026', en: 'July 2026' },
    image: '/certifications/claude-api.jpg',
    skills: [
      { fr: 'Intégration de l’API Claude', en: 'Claude API integration' },
      { fr: 'Prompt engineering avancé', en: 'Advanced prompt engineering' },
      { fr: 'Applications IA', en: 'AI applications' },
    ],
  },
  {
    id: 'lvmh',
    name: {
      fr: 'Inside LVMH Certificate',
      en: 'Inside LVMH Certificate',
    },
    issuer: 'LVMH',
    date: '2026-07-11',
    dateLabel: { fr: 'Juillet 2026', en: 'July 2026' },
    image: '/certifications/inside-lvmh.jpg',
    credentialId: 'fcaee30a-d1c0-4e50-a633-10090dd905e6',
    skills: [
      { fr: 'Écosystème LVMH et industrie du luxe', en: 'LVMH ecosystem & the luxury industry' },
      { fr: 'Création & Branding', en: 'Creation & Branding' },
      { fr: 'Retail & Customer Experience', en: 'Retail & Customer Experience' },
    ],
  },
  {
    id: 'ebios',
    name: {
      fr: 'Méthode EBIOS Risk Manager & outil Agile Risk Manager',
      en: 'EBIOS Risk Manager method & Agile Risk Manager tool',
    },
    issuer: 'ALL4TEC',
    date: '2025-03-17',
    dateLabel: { fr: 'Mars 2025', en: 'March 2025' },
    image: '/certifications/ebios-all4tec.jpg',
    skills: [
      { fr: 'Analyse de risques cyber (méthode ANSSI)', en: 'Cyber risk analysis (ANSSI method)' },
      { fr: 'Cartographie des sources de risque', en: 'Risk source mapping' },
      { fr: 'Outillage Agile Risk Manager', en: 'Agile Risk Manager tooling' },
    ],
  },
  {
    id: 'ubb-award',
    name: {
      fr: 'Most Innovative Idea Award (concours de pitch)',
      en: 'Most Innovative Idea Award (pitch competition)',
    },
    issuer: 'Universitatea Babeș-Bolyai (FSEGA), Cluj-Napoca',
    date: '2024-07-19',
    dateLabel: { fr: 'Juillet 2024', en: 'July 2024' },
    image: '/certifications/ubb-innovative-idea.jpg',
    isAward: true,
    skills: [
      { fr: 'Pitch et défense d’idée', en: 'Pitching & idea defence' },
      { fr: 'Innovation et pensée prospective', en: 'Innovation & forward thinking' },
    ],
  },
  {
    id: 'ubb-bootcamp',
    name: {
      fr: 'Innovation & Entrepreneurship Bootcamp',
      en: 'Innovation & Entrepreneurship Bootcamp',
    },
    issuer: 'Universitatea Babeș-Bolyai (FSEGA), Cluj-Napoca',
    date: '2024-07-19',
    dateLabel: { fr: 'Juillet 2024', en: 'July 2024' },
    image: '/certifications/ubb-achievement.jpg',
    skills: [
      { fr: 'Design Thinking', en: 'Design Thinking' },
      { fr: 'Idéation, prototypage, test', en: 'Ideation, prototyping, testing' },
    ],
  },
  {
    id: 'vaasa',
    name: {
      fr: 'International Entrepreneurship Summer School',
      en: 'International Entrepreneurship Summer School',
    },
    issuer: 'Vaasan yliopisto (University of Vaasa), Finlande',
    date: '2024-08-01',
    dateLabel: { fr: 'Été 2024', en: 'Summer 2024' },
    image: '/certifications/vaasa-summer-school.jpg',
    skills: [
      { fr: 'Entrepreneuriat international', en: 'International entrepreneurship' },
      { fr: 'Intrapreneuriat et développement de solutions', en: 'Intrapreneurship & solution development' },
    ],
    // L'université a imprimé « Florina » au lieu de « Florian ». La note désamorce
    // l'incohérence pour un recruteur qui zoome sur le visuel.
    note: {
      fr: 'Le certificat comporte une coquille de l’université sur le prénom (« Florina »).',
      en: 'The certificate contains a typo made by the university on the first name (“Florina”).',
    },
  },
];
