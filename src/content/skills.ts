import type { SkillGroup } from './types';

/**
 * Compétences, par famille. Source : ancien site (bloc FJ du bundle), recoupé avec les 6 CV.
 * "Gestion Agile (Scrum)" décrit une pratique de travail, pas une certification —
 * voir la note sur Scrum/SAFe dans certifications.ts.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'methodologie-pilotage',
    title: { fr: 'Méthodologie & Pilotage', en: 'Methodology & Steering' },
    items: [
      { fr: 'Gestion Agile (Scrum) & Cycle en V', en: 'Agile (Scrum) & Waterfall' },
      { fr: 'Rédaction de Cahier des Charges', en: 'Requirements Specification' },
      { fr: 'Animation de COPIL / Réunions', en: 'Steering Committee Facilitation' },
      { fr: 'Suivi Qualité, Coûts, Délais (QCD)', en: 'Quality, Cost, Schedule (QCS)' },
      { fr: 'Gestion des risques & Jalons', en: 'Risk Management & Milestones' },
      { fr: 'Coordination Multi-acteurs', en: 'Multi-stakeholder Coordination' },
      { fr: 'Cadrage, Recette, Mise en prod.', en: 'Scoping, UAT, Go-live' },
    ],
  },
  {
    id: 'environnement-it-digital',
    title: { fr: 'Environnement IT & Digital', en: 'IT & Digital Environment' },
    items: [
      { fr: 'Compréhension Architecture IT & API', en: 'IT Architecture & API Understanding' },
      { fr: 'Excel Avancé (TCD, Macros) & Power BI', en: 'Advanced Excel (Pivot, Macros) & Power BI' },
      { fr: 'Notions PIM/MDM & Data Produit', en: 'PIM/MDM & Product Data Basics' },
      { fr: 'Omnicanalité & Retail', en: 'Omnichannel & Retail' },
      { fr: 'Veille Technologique', en: 'Technology Watch' },
      { fr: 'UX / UI (Sensibilité)', en: 'UX / UI (Awareness)' },
    ],
  },
  {
    id: 'outils-ia',
    title: { fr: 'Outils & IA', en: 'Tools & AI' },
    items: [
      { fr: 'Jira / Notion / Linear', en: 'Jira / Notion / Linear' },
      { fr: 'Outils de ticketing & Suivi de bugs', en: 'Ticketing & Bug Tracking Tools' },
      { fr: 'Prompting IA avancé (Gains de prod.)', en: 'Advanced AI Prompting (Productivity)' },
      { fr: 'Outils de présentation (PPT, Canva, Gamma, NotebookLM)', en: 'Presentation Tools (PPT, Canva, Gamma, NotebookLM)' },
    ],
  },
  {
    id: 'bases-techniques',
    title: { fr: 'Bases Techniques', en: 'Technical Foundations' },
    items: [
      { fr: 'HTML/CSS (Fondamentaux)', en: 'HTML/CSS (Fundamentals)' },
      { fr: 'Liquid (Architecture E-commerce Shopify)', en: 'Liquid (Shopify E-commerce)' },
      { fr: 'VBA (Bases)', en: 'VBA (Basics)' },
      { fr: 'Suite Adobe / Figma (Notions)', en: 'Adobe Suite / Figma (Basics)' },
    ],
  },
  {
    id: 'soft-skills',
    title: { fr: 'Soft Skills', en: 'Soft Skills' },
    items: [
      { fr: 'Autonomie & Curiosité', en: 'Autonomy & Curiosity' },
      { fr: 'Capacité d\'analyse et de synthèse', en: 'Analytical & Synthesis Skills' },
      { fr: 'Excellente communication orale/écrite', en: 'Excellent Oral/Written Communication' },
      { fr: 'Esprit d\'équipe & Bienveillance', en: 'Teamwork & Supportiveness' },
      { fr: 'Force de proposition', en: 'Proactive Initiative' },
      { fr: 'Rigueur Méthodologique', en: 'Methodological Rigor' },
    ],
  },
  {
    id: 'langues',
    title: { fr: 'Langues', en: 'Languages' },
    items: [
      { fr: '🇫🇷 Français (Natif)', en: '🇫🇷 French (Native)' },
      { fr: '🇬🇧 Anglais (B2)', en: '🇬🇧 English (B2)' },
      { fr: '🇪🇸 Espagnol (A2)', en: '🇪🇸 Spanish (A2)' },
    ],
  },
];
