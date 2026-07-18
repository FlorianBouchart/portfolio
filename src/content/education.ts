import type { Diploma } from './types';

/**
 * Parcours académique — IAE Valenciennes (UPHF).
 *
 * Les 72 cours sont la liste réelle des enseignements suivis (source : ancien site
 * academic-training.lovable.app, extraite du bundle et vérifiée FR/EN, 72 = 20 + 27 + 25).
 *
 * `semester` et `ue` sont à `null` : la maquette officielle UPHF du parcours MDPE
 * structure bien les enseignements en UE et semestres (S7→S10), mais le rattachement
 * cours par cours n'a PAS été validé par Florian — l'inventer produirait un faux.
 * Les filtres correspondants se masquent tant que ces champs sont vides.
 */
export const diplomas: Diploma[] = [
  {
    id: 'l3',
    level: { fr: 'Licence 3', en: 'Bachelor 3' },
    title: { fr: 'Management et Développement des Organisations', en: 'Management & Organizational Development' },
    school: 'IAE Valenciennes (UPHF)',
    years: '2023-2024',
    subtitle: { fr: 'Les fondations', en: 'The foundations' },
    courses: [
      { id: 'l3-rh-et-management-d-equipe', name: { fr: 'RH et Management d\'équipe', en: 'HR & Team Management' }, category: 'Gestion & Business', semester: null, ue: null },
      { id: 'l3-marketing-btob-negociation', name: { fr: 'Marketing BtoB (Négociation)', en: 'B2B Marketing (Negotiation)' }, category: 'Gestion & Business', semester: null, ue: null },
      { id: 'l3-marketing-international', name: { fr: 'Marketing International', en: 'International Marketing' }, category: 'Gestion & Business', semester: null, ue: null },
      { id: 'l3-financement-et-investissement', name: { fr: 'Financement et Investissement', en: 'Financing and Investment' }, category: 'Gestion & Business', semester: null, ue: null },
      { id: 'l3-controle-de-gestion', name: { fr: 'Contrôle de gestion', en: 'Management Control' }, category: 'Gestion & Business', semester: null, ue: null },
      { id: 'l3-management-strategique', name: { fr: 'Management Stratégique', en: 'Strategic Management' }, category: 'Gestion & Business', semester: null, ue: null },
      { id: 'l3-rgpd-marketing-digital', name: { fr: 'RGPD / Marketing Digital', en: 'GDPR / Digital Marketing' }, category: 'Stratégie Digitale', semester: null, ue: null },
      { id: 'l3-digitalisation-des-entreprises', name: { fr: 'Digitalisation des entreprises', en: 'Business Digitalization' }, category: 'Stratégie Digitale', semester: null, ue: null },
      { id: 'l3-communication-reseaux-sociaux', name: { fr: 'Communication Réseaux Sociaux', en: 'Social Media Communication' }, category: 'Stratégie Digitale', semester: null, ue: null },
      { id: 'l3-droit-du-travail', name: { fr: 'Droit du travail', en: 'Labor Law' }, category: 'Juridique', semester: null, ue: null },
      { id: 'l3-droit-de-la-distribution-consommation', name: { fr: 'Droit de la distribution/consommation', en: 'Distribution/Consumer Law' }, category: 'Juridique', semester: null, ue: null },
      { id: 'l3-outils-de-creation-graphique', name: { fr: 'Outils de création graphique', en: 'Graphic Design Tools' }, category: 'Outils & Tech', semester: null, ue: null },
      { id: 'l3-systeme-d-information-pour-la-gestion', name: { fr: 'Système d\'information pour la gestion', en: 'Information Systems' }, category: 'Outils & Tech', semester: null, ue: null },
      { id: 'l3-tableaux-de-bord', name: { fr: 'Tableaux de bord', en: 'Dashboards' }, category: 'Outils & Tech', semester: null, ue: null },
      { id: 'l3-introduction-a-la-programmation', name: { fr: 'Introduction à la programmation', en: 'Intro to Programming' }, category: 'Outils & Tech', semester: null, ue: null },
      { id: 'l3-innovation-et-design-thinking', name: { fr: 'Innovation et Design Thinking', en: 'Innovation & Design Thinking' }, category: 'Innovation & International', semester: null, ue: null },
      { id: 'l3-module-polytechnique-eunice', name: { fr: 'Module Polytechnique (Eunice)', en: 'Polytechnic Module (Eunice)' }, category: 'Innovation & International', semester: null, ue: null },
      { id: 'l3-management-english', name: { fr: 'Management English', en: 'Management English' }, category: 'Innovation & International', semester: null, ue: null },
      { id: 'l3-gestion-de-projet-et-qualite', name: { fr: 'Gestion de projet et qualité', en: 'Project Mgmt & Quality' }, category: 'Innovation & International', semester: null, ue: null },
      { id: 'l3-simulation-de-gestion', name: { fr: 'Simulation de gestion', en: 'Business Simulation' }, category: 'Innovation & International', semester: null, ue: null },
    ],
  },
  {
    id: 'm1',
    level: { fr: 'Master 1', en: 'Master 1' },
    title: { fr: 'Entrepreneuriat et Management de Projets, parcours MDPE', en: 'Entrepreneurship & Project Management, MDPE track' },
    school: 'IAE Valenciennes (UPHF)',
    years: '2024-2025',
    subtitle: { fr: 'L\'expertise', en: 'The expertise' },
    courses: [
      { id: 'm1-comportements-organisationnels', name: { fr: 'Comportements organisationnels', en: 'Organizational Behavior' }, category: 'Management des Organisations', semester: null, ue: null },
      { id: 'm1-conduite-de-reunion', name: { fr: 'Conduite de réunion', en: 'Meeting Management' }, category: 'Management des Organisations', semester: null, ue: null },
      { id: 'm1-negociation-avec-les-syndicats', name: { fr: 'Négociation avec les syndicats', en: 'Union Negotiation' }, category: 'Management des Organisations', semester: null, ue: null },
      { id: 'm1-recrutement-5-0', name: { fr: 'Recrutement 5.0', en: 'Recruitment 5.0' }, category: 'Management des Organisations', semester: null, ue: null },
      { id: 'm1-gestion-de-conflits', name: { fr: 'Gestion de conflits', en: 'Conflict Management' }, category: 'Management des Organisations', semester: null, ue: null },
      { id: 'm1-conduire-des-entretiens', name: { fr: 'Conduire des entretiens', en: 'Conducting Interviews' }, category: 'Management des Organisations', semester: null, ue: null },
      { id: 'm1-ingenierie-de-projet', name: { fr: 'Ingénierie de projet', en: 'Project Engineering' }, category: 'Gestion de Projet Agile', semester: null, ue: null },
      { id: 'm1-design-entrepreneurial', name: { fr: 'Design entrepreneurial', en: 'Entrepreneurial Design' }, category: 'Gestion de Projet Agile', semester: null, ue: null },
      { id: 'm1-approche-phygitale', name: { fr: 'Approche Phygitale', en: 'Phygital Approach' }, category: 'Gestion de Projet Agile', semester: null, ue: null },
      { id: 'm1-crm', name: { fr: 'CRM', en: 'CRM' }, category: 'Gestion de Projet Agile', semester: null, ue: null },
      { id: 'm1-business-model-et-start-up', name: { fr: 'Business Model et start-up', en: 'Business Model & Startups' }, category: 'Gestion de Projet Agile', semester: null, ue: null },
      { id: 'm1-management-de-la-performance-financiere', name: { fr: 'Management de la performance financière', en: 'Financial Performance Mgmt' }, category: 'Finance & Performance', semester: null, ue: null },
      { id: 'm1-gestion-des-risques-risk-agil', name: { fr: 'Gestion des risques (Risk agil)', en: 'Risk Management (Agile Risk)' }, category: 'Finance & Performance', semester: null, ue: null },
      { id: 'm1-outils-financiers', name: { fr: 'Outils financiers', en: 'Financial Tools' }, category: 'Finance & Performance', semester: null, ue: null },
      { id: 'm1-fiscalite-d-entreprise', name: { fr: 'Fiscalité d\'entreprise', en: 'Corporate Tax' }, category: 'Finance & Performance', semester: null, ue: null },
      { id: 'm1-droit-des-affaires', name: { fr: 'Droit des affaires', en: 'Business Law' }, category: 'Environnement Légal', semester: null, ue: null },
      { id: 'm1-droit-du-numerique-rgpd', name: { fr: 'Droit du numérique/RGPD', en: 'Digital Law/GDPR' }, category: 'Environnement Légal', semester: null, ue: null },
      { id: 'm1-appliquer-la-reglementation', name: { fr: 'Appliquer la réglementation', en: 'Regulatory Compliance' }, category: 'Environnement Légal', semester: null, ue: null },
      { id: 'm1-maitrise-suite-adobe-power-bi', name: { fr: 'Maîtrise Suite Adobe & Power BI', en: 'Adobe Suite & Power BI' }, category: 'Outils Numériques', semester: null, ue: null },
      { id: 'm1-optimisation-systeme-d-information', name: { fr: 'Optimisation système d\'information', en: 'Information System Optimization' }, category: 'Outils Numériques', semester: null, ue: null },
      { id: 'm1-veille-numerique', name: { fr: 'Veille numérique', en: 'Digital Watch' }, category: 'Outils Numériques', semester: null, ue: null },
      { id: 'm1-conception-etudes-et-recherches', name: { fr: 'Conception études et recherches', en: 'Research Design' }, category: 'Outils Numériques', semester: null, ue: null },
      { id: 'm1-diagnostic-ethique-et-ecologique', name: { fr: 'Diagnostic éthique et écologique', en: 'Ethical & Ecological Diagnosis' }, category: 'RSE & International', semester: null, ue: null },
      { id: 'm1-management-durable', name: { fr: 'Management durable', en: 'Sustainable Management' }, category: 'RSE & International', semester: null, ue: null },
      { id: 'm1-business-english-toeic', name: { fr: 'Business English (+TOEIC)', en: 'Business English (+TOEIC)' }, category: 'RSE & International', semester: null, ue: null },
      { id: 'm1-semaine-internationale', name: { fr: 'Semaine internationale', en: 'International Week' }, category: 'RSE & International', semester: null, ue: null },
      { id: 'm1-developper-capacites-de-transfert', name: { fr: 'Développer capacités de transfert', en: 'Developing Transfer Capabilities' }, category: 'RSE & International', semester: null, ue: null },
    ],
  },
  {
    id: 'm2',
    level: { fr: 'Master 2', en: 'Master 2' },
    title: { fr: 'Entrepreneuriat et Management de Projets, parcours MDPE', en: 'Entrepreneurship & Project Management, MDPE track' },
    school: 'IAE Valenciennes (UPHF)',
    years: '2025-2026',
    subtitle: { fr: 'La confirmation', en: 'The confirmation' },
    distinction: { fr: 'Major de promotion', en: 'Top of class' },
    courses: [
      { id: 'm2-intelligence-collective', name: { fr: 'Intelligence collective', en: 'Collective Intelligence' }, category: 'Stratégie Avancée', semester: null, ue: null },
      { id: 'm2-negociation-salariale', name: { fr: 'Négociation salariale', en: 'Salary Negotiation' }, category: 'Stratégie Avancée', semester: null, ue: null },
      { id: 'm2-indices-de-sante-entreprise', name: { fr: 'Indices de santé entreprise', en: 'Company Health Indices' }, category: 'Stratégie Avancée', semester: null, ue: null },
      { id: 'm2-conduire-projets-de-changement', name: { fr: 'Conduire projets de changement', en: 'Leading Change Projects' }, category: 'Stratégie Avancée', semester: null, ue: null },
      { id: 'm2-valoriser-le-potentiel-d-equipe', name: { fr: 'Valoriser le potentiel d\'équipe', en: 'Valuing Team Potential' }, category: 'Stratégie Avancée', semester: null, ue: null },
      { id: 'm2-integrer-personnalites-difficiles', name: { fr: 'Intégrer personnalités difficiles', en: 'Managing Difficult Personalities' }, category: 'Stratégie Avancée', semester: null, ue: null },
      { id: 'm2-ms-project', name: { fr: 'MS Project', en: 'MS Project' }, category: 'Pilotage de Projet', semester: null, ue: null },
      { id: 'm2-manager-la-dimension-digitale', name: { fr: 'Manager la dimension digitale', en: 'Managing Digital Dimension' }, category: 'Pilotage de Projet', semester: null, ue: null },
      { id: 'm2-amelioration-continue', name: { fr: 'Amélioration continue', en: 'Continuous Improvement' }, category: 'Pilotage de Projet', semester: null, ue: null },
      { id: 'm2-scrum-master-preparation', name: { fr: 'Scrum Master (Préparation)', en: 'Scrum Master (Prep)' }, category: 'Pilotage de Projet', semester: null, ue: null },
      { id: 'm2-manager-qualite', name: { fr: 'Manager qualité', en: 'Quality Management' }, category: 'Pilotage de Projet', semester: null, ue: null },
      { id: 'm2-power-bi-traitement-avance', name: { fr: 'Power BI (Traitement avancé)', en: 'Power BI (Advanced)' }, category: 'Data & Innovation', semester: null, ue: null },
      { id: 'm2-analyse-de-donnees', name: { fr: 'Analyse de données', en: 'Data Analysis' }, category: 'Data & Innovation', semester: null, ue: null },
      { id: 'm2-design-thinking', name: { fr: 'Design Thinking', en: 'Design Thinking' }, category: 'Data & Innovation', semester: null, ue: null },
      { id: 'm2-slow-management', name: { fr: 'Slow Management', en: 'Slow Management' }, category: 'Data & Innovation', semester: null, ue: null },
      { id: 'm2-protection-de-l-innovation', name: { fr: 'Protection de l\'innovation', en: 'Innovation Protection' }, category: 'Data & Innovation', semester: null, ue: null },
      { id: 'm2-implementer-innovations-manageriales', name: { fr: 'Implémenter innovations managériales', en: 'Implementing Managerial Innovations' }, category: 'Data & Innovation', semester: null, ue: null },
      { id: 'm2-business-model-financier', name: { fr: 'Business Model financier', en: 'Financial Business Model' }, category: 'Entrepreneuriat & Finance', semester: null, ue: null },
      { id: 'm2-reseaux-d-accompagnement', name: { fr: 'Réseaux d\'accompagnement', en: 'Support Networks' }, category: 'Entrepreneuriat & Finance', semester: null, ue: null },
      { id: 'm2-financer-son-projet', name: { fr: 'Financer son projet', en: 'Project Financing' }, category: 'Entrepreneuriat & Finance', semester: null, ue: null },
      { id: 'm2-decouverte-parcours-createurs', name: { fr: 'Découverte parcours créateurs', en: 'Creator Journey' }, category: 'Entrepreneuriat & Finance', semester: null, ue: null },
      { id: 'm2-memoire-de-recherche', name: { fr: 'Mémoire de recherche', en: 'Research Thesis' }, category: 'Entrepreneuriat & Finance', semester: null, ue: null },
      { id: 'm2-marketing-btob', name: { fr: 'Marketing BtoB', en: 'B2B Marketing' }, category: 'Marketing Digital', semester: null, ue: null },
      { id: 'm2-web-marketing', name: { fr: 'Web marketing', en: 'Web Marketing' }, category: 'Marketing Digital', semester: null, ue: null },
      { id: 'm2-marketing-digital-avance', name: { fr: 'Marketing digital avancé', en: 'Advanced Digital Marketing' }, category: 'Marketing Digital', semester: null, ue: null },
    ],
  },
];

/** Catégories thématiques présentes, par diplôme — utilisé pour les filtres. */
export const categoriesByDiploma: Record<string, string[]> = {
  l3: ['Gestion & Business', 'Stratégie Digitale', 'Juridique', 'Outils & Tech', 'Innovation & International'],
  m1: ['Management des Organisations', 'Gestion de Projet Agile', 'Finance & Performance', 'Environnement Légal', 'Outils Numériques', 'RSE & International'],
  m2: ['Stratégie Avancée', 'Pilotage de Projet', 'Data & Innovation', 'Entrepreneuriat & Finance', 'Marketing Digital'],
};
