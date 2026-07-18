import type { Trait } from './types';

/**
 * Forces et points d'attention. Source : ancien site (blocs force_* / weak_*).
 *
 * Assumer publiquement cinq points d'attention est rare sur un portfolio, et c'est
 * précisément ce qui rend la section crédible : un recruteur y lit de la lucidité,
 * pas de la faiblesse. À conserver tel quel.
 */
export const traits: Trait[] = [
  {
    id: 'force-1',
    kind: 'force',
    title: { fr: 'Esprit Intrapreneur', en: 'Intrapreneurial Mindset' },
    short: { fr: 'Capable de tester, itérer, et de faire bouger les lignes avec autonomie', en: 'Able to test, iterate, and push boundaries autonomously' },
    detail: { fr: 'Mon expérience entrepreneuriale (Desrèves) m\'a appris à lancer des projets de zéro, à pivoter rapidement et à avancer sans attendre que tout soit parfait. J\'apporte cet état d\'esprit « maker » dans chaque mission.', en: 'My entrepreneurial experience (Desrèves) taught me to launch projects from scratch, pivot quickly, and move forward without waiting for perfection. I bring this \'maker\' mindset to every mission.' },
  },
  {
    id: 'force-2',
    kind: 'force',
    title: { fr: 'Traducteur Métier/IT', en: 'Business/IT Translator' },
    short: { fr: 'Facilité à lier les enjeux opérationnels globaux aux réalités techniques', en: 'Ease in connecting global operational stakes to technical realities' },
    detail: { fr: 'Je sais parler aux équipes métiers pour comprendre leurs besoins et aux équipes techniques pour traduire ces besoins en spécifications claires. Cette double casquette fluidifie la coordination projet.', en: 'I know how to speak with business teams to understand their needs and with technical teams to translate those needs into clear specifications. This dual hat streamlines project coordination.' },
  },
  {
    id: 'force-3',
    kind: 'force',
    title: { fr: 'Communication & Synthèse', en: 'Communication & Synthesis' },
    short: { fr: 'Animation de comités et rédaction de documentations claires', en: 'Committee facilitation and clear documentation writing' },
    detail: { fr: 'Je sais structurer l\'information, animer des réunions de pilotage et produire des livrables de synthèse adaptés à chaque interlocuteur (direction, métier, technique).', en: 'I know how to structure information, lead steering meetings, and produce synthesis deliverables tailored to each audience (management, business, technical).' },
  },
  {
    id: 'force-4',
    kind: 'force',
    title: { fr: 'Travail en Équipe', en: 'Teamwork' },
    short: { fr: 'Créer un environnement collaboratif et bienveillant', en: 'Creating a collaborative and supportive environment' },
    detail: { fr: 'Mes expériences associatives et entrepreneuriales m\'ont appris que la réussite d\'un projet passe par la cohésion d\'équipe. Je fédère les acteurs autour d\'un objectif commun.', en: 'My associative and entrepreneurial experiences taught me that project success depends on team cohesion. I unite stakeholders around a common objective.' },
  },
  {
    id: 'force-5',
    kind: 'force',
    title: { fr: 'Méthodique & Rigoureux', en: 'Methodical & Rigorous' },
    short: { fr: 'Gestion précise des plannings, budgets et comparatifs technico-économiques', en: 'Precise management of schedules, budgets, and techno-economic comparisons' },
    detail: { fr: 'Chez GRDF, j\'ai appris la rigueur du suivi budgétaire et des études de rentabilité. Cette approche méthodique me permet de sécuriser l\'avancement des projets.', en: 'At GRDF, I learned the rigor of budget tracking and profitability studies. This methodical approach allows me to secure project progress.' },
  },
  {
    id: 'watch-1',
    kind: 'watch',
    title: { fr: 'Biais d\'action', en: 'Action Bias' },
    short: { fr: 'Mon côté « maker » me pousse à avancer vite ; j\'apprends à temporiser', en: 'My \'maker\' side pushes me to move fast; I\'m learning to pace myself' },
    detail: { fr: 'L\'esprit entrepreneurial me pousse parfois à vouloir avancer trop vite. J\'apprends à temporiser face aux process internes et à valider chaque étape avant de passer à la suivante.', en: 'The entrepreneurial spirit sometimes pushes me to move too fast. I\'m learning to pace myself against internal processes and validate each step before moving to the next.' },
  },
  {
    id: 'watch-2',
    kind: 'watch',
    title: { fr: 'Limites techniques', en: 'Technical Limits' },
    short: { fr: 'Je comprends l\'architecture IT, mais je ne suis pas développeur', en: 'I understand IT architecture, but I\'m not a developer' },
    detail: { fr: 'Je comprends l\'architecture web (Front/Back, API) et sais dialoguer avec les équipes techniques, mais je m\'appuie sur les experts pour les estimations de complexité.', en: 'I understand web architecture (Front/Back, API) and can dialogue with technical teams, but I rely on experts for complexity estimates.' },
  },
  {
    id: 'watch-3',
    kind: 'watch',
    title: { fr: 'Besoin de sens', en: 'Need for Purpose' },
    short: { fr: 'J\'ai besoin de comprendre l\'impact pour m\'investir pleinement', en: 'I need to understand the impact to fully commit' },
    detail: { fr: 'J\'ai besoin de comprendre l\'impact économique, social ou environnemental d\'un projet pour m\'y investir pleinement. C\'est aussi un moteur de motivation.', en: 'I need to understand the economic, social, or environmental impact of a project to fully invest myself. It\'s also a motivation driver.' },
  },
  {
    id: 'watch-4',
    kind: 'watch',
    title: { fr: 'L\'art de la délégation', en: 'The Art of Delegation' },
    short: { fr: 'Ayant souvent porté des projets de A à Z, j\'aiguise ma posture de « faire faire »', en: 'Having often managed projects end-to-end, I\'m sharpening my \'make it happen through others\' posture' },
    detail: { fr: 'Habitué à gérer des projets de bout en bout, je travaille à lâcher prise sur l\'opérationnel pour me concentrer sur le pilotage et faire confiance à l\'équipe.', en: 'Used to managing projects from start to finish, I\'m working on letting go of pure operations to focus on steering and trusting the team.' },
  },
  {
    id: 'watch-5',
    kind: 'watch',
    title: { fr: 'Onboarding Processus', en: 'Process Onboarding' },
    short: { fr: 'Curieux, je m\'adapte vite mais je devrai assimiler vos frameworks spécifiques', en: 'Curious, I adapt quickly but will need to learn your specific frameworks' },
    detail: { fr: 'Je m\'adapte rapidement à Jira, Notion ou tout autre outil, mais chaque entreprise a ses propres processus que je devrai intégrer.', en: 'I adapt quickly to Jira, Notion, or any other tool, but every company has its own processes that I\'ll need to integrate.' },
  },
];
