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
    title: { fr: 'Traduire le besoin', en: 'Translating the need' },
    short: { fr: 'Comprendre un besoin métier et le rendre exploitable côté technique', en: 'Understanding a business need and making it usable on the technical side' },
    detail: { fr: 'Chez GRDF comme sur Desrèves, mon rôle a souvent été de comprendre un besoin côté métier et de le transformer en quelque chose d\'exploitable côté technique ou opérationnel. C\'est précisément ce pont qui m\'attire dans l\'AMOA et la business analysis.', en: 'At GRDF and on Desrèves, my role was often to understand a need on the business side and turn it into something usable on the technical or operational side. That bridge is exactly what draws me to business analysis and requirements work.' },
  },
  {
    id: 'force-3',
    kind: 'force',
    title: { fr: 'Structurer et restituer', en: 'Structuring and reporting back' },
    short: { fr: 'Rendre une information complexe claire pour chaque interlocuteur', en: 'Making complex information clear for every audience' },
    detail: { fr: 'Je sais structurer une information complexe et la restituer clairement selon l\'interlocuteur (direction, métier, technique). Chez GRDF, je produisais les fiches de synthèse et les supports destinés aux collectivités.', en: 'I can structure complex information and report it back clearly depending on the audience (management, business, technical). At GRDF, I produced the summary sheets and materials for the municipalities.' },
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
    title: { fr: 'M\'appuyer sur l\'équipe', en: 'Leaning on the team' },
    short: { fr: 'Habitué à tout porter seul, j\'apprends à déléguer davantage', en: 'Used to carrying everything myself, I\'m learning to delegate more' },
    detail: { fr: 'Sur Desrèves et au BDE, j\'ai souvent tout porté de bout en bout. Je travaille à mieux déléguer et à m\'appuyer sur les autres plutôt qu\'à vouloir tout maîtriser moi-même.', en: 'On Desrèves and at the student union, I often carried everything end to end. I\'m working on delegating better and leaning on others rather than trying to control everything myself.' },
  },
  {
    id: 'watch-5',
    kind: 'watch',
    title: { fr: 'Onboarding Processus', en: 'Process Onboarding' },
    short: { fr: 'Curieux, je m\'adapte vite mais je devrai assimiler vos frameworks spécifiques', en: 'Curious, I adapt quickly but will need to learn your specific frameworks' },
    detail: { fr: 'Je m\'adapte rapidement à Jira, Notion ou tout autre outil, mais chaque entreprise a ses propres processus que je devrai intégrer.', en: 'I adapt quickly to Jira, Notion, or any other tool, but every company has its own processes that I\'ll need to integrate.' },
  },
];
