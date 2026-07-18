/**
 * Types du contenu du site.
 *
 * Principe : tout le contenu vit dans `src/content/*`, typé et séparé du rendu.
 * Ajouter une expérience, une reco, une certif ou un projet = ajouter un objet
 * dans le tableau correspondant. Aucun composant à modifier.
 */

export type Locale = 'fr' | 'en';

/** Chaîne traduite. Les deux langues sont obligatoires : le typage empêche d'oublier une traduction. */
export type I18n = { fr: string; en: string };

/** Métrique chiffrée mise en avant (gros chiffre + libellé). */
export interface Metric {
  value: string;
  label: I18n;
  /** Source de la donnée, pour traçabilité interne. Non affiché. */
  source?: string;
}

export interface Experience {
  id: string;
  /** Ordre d'affichage, décroissant. */
  start: number;
  end: number | 'present';
  period: I18n;
  role: I18n;
  org: string;
  location: I18n;
  /** Nature du contrat / du rôle. */
  kind: I18n;
  context: I18n;
  missions: I18n[];
  metrics: Metric[];
  stack: string[];
  skills: I18n[];
  /** Visuels de preuve. Vide = section masquée automatiquement. */
  media?: MediaItem[];
}

export interface MediaItem {
  /** Image (aperçu). Sert aussi de poster quand `video` est défini. */
  src: string;
  alt: I18n;
  caption?: I18n;
  /** Vidéo MP4 optionnelle : jouée en boucle silencieuse pour montrer une animation. */
  video?: string;
}

/** Cas d'usage narratif : problème → approche → résultats. */
export interface CaseStudy {
  id: string;
  title: I18n;
  org: string;
  problem: I18n;
  approach: I18n;
  metrics: Metric[];
}

export interface Course {
  id: string;
  name: I18n;
  /** Catégorie thématique (source : liste réelle des cours suivis). */
  category: string;
  /** Semestre officiel (S5→S10). `null` tant que le rattachement n'est pas validé. */
  semester: string | null;
  /** UE / module officiel de la maquette. `null` tant que non validé. */
  ue: I18n | null;
  ects?: number;
  summary?: I18n;
  objectives?: I18n[];
  skills?: I18n[];
  tools?: string[];
}

export interface Diploma {
  id: string;
  level: I18n;
  title: I18n;
  school: string;
  years: string;
  subtitle?: I18n;
  distinction?: I18n;
  courses: Course[];
}

export interface Certification {
  id: string;
  name: I18n;
  issuer: string;
  date: string;
  /** Date lisible affichée. */
  dateLabel: I18n;
  image?: string;
  credentialId?: string;
  url?: string;
  skills?: I18n[];
  /** Distinction / prix plutôt que certification. */
  isAward?: boolean;
  /** Note affichée sous le visuel (ex. coquille de l'émetteur). */
  note?: I18n;
}

export interface Project {
  id: string;
  title: I18n;
  tagline: I18n;
  context: I18n;
  problem: I18n;
  objective: I18n;
  architecture?: I18n;
  stack: string[];
  challenges?: { problem: I18n; solution: I18n }[];
  skills?: I18n[];
  metrics?: Metric[];
  github?: string;
  demo?: string;
  media?: MediaItem[];
  /** Mention de confidentialité affichée sous le projet (contenus anonymisés, etc.). */
  note?: I18n;
}

export interface Recommendation {
  id: string;
  name: string;
  role: I18n;
  org: string;
  photo?: string;
  text: I18n;
  linkedin?: string;
  /** Lien public vers la référence (hors LinkedIn), ex. engagement-jeunes.com. */
  url?: string;
  date?: string;
}

export interface SkillGroup {
  id: string;
  title: I18n;
  items: I18n[];
}

/** Force ou point d'attention — la transparence assumée du profil. */
export interface Trait {
  id: string;
  kind: 'force' | 'watch';
  title: I18n;
  short: I18n;
  detail: I18n;
}

export interface FaqItem {
  q: I18n;
  a: I18n;
}
