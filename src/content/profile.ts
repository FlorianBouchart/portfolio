import type { I18n } from './types';

export const profile = {
  name: 'Florian Bouchart',
  /** Positionnement neutre : le site est un complément de CV, pas un CV de plus. */
  discipline: {
    fr: 'Systèmes d’information · Transformation digitale',
    en: 'Information Systems · Digital Transformation',
  } as I18n,
  tagline: {
    fr: 'Je fais le pont entre les métiers et l’IT : cadrer le besoin, structurer la donnée, livrer la solution.',
    en: 'I bridge business and IT: frame the need, structure the data, ship the solution.',
  } as I18n,
  intro: {
    fr: 'Profil hybride : la rigueur méthodologique d’un grand groupe (GRDF), l’agilité d’un créateur (Desrèves) et l’animation d’une trentaine de bénévoles chaque année (BDE IAE). Ce site complète mon CV avec le détail de ce qui n’y tient pas.',
    en: 'A hybrid profile: the methodological rigour of a large group (GRDF), the agility of a founder (Desrèves) and a team of about thirty volunteers led each year (BDE IAE). This site completes my résumé with the detail a single page cannot hold.',
  } as I18n,
  email: 'florian.bouchart@hotmail.fr',
  phone: '+33 6 20 23 55 20',
  linkedin: 'https://www.linkedin.com/in/florian-bouchart',
  /** Confirmé par Florian le 16/07/2026 : septembre 2026 (l'ancien site annonçait juillet, périmé). */
  availability: {
    fr: 'Disponible en CDI à partir de septembre 2026',
    en: 'Available for a permanent role from September 2026',
  } as I18n,
  location: {
    fr: 'Hauts-de-France · ouvert à Paris et à toute la France · mobile',
    en: 'Hauts-de-France · open to Paris and anywhere in France · happy to relocate',
  } as I18n,
  languages: [
    { fr: 'Français : natif', en: 'French: native' },
    { fr: 'Anglais : B2 professionnel', en: 'English: B2 professional' },
    { fr: 'Espagnol : A2, académique', en: 'Spanish: A2, academic' },
  ] as I18n[],
};

/**
 * Liens professionnels affichés dans le footer et la page contact.
 *
 * Décision du 17/07/2026 : le site ne propose AUCUN téléchargement de CV.
 * Les CV sont adaptés à chaque candidature et envoyés directement — le site
 * est un complément, pas un duplicata. Ne pas réintroduire de PDF ici.
 *
 * `github` : renseigner l'URL du profil pour que le lien apparaisse
 * automatiquement (footer + contact). Tant que c'est `null`, rien ne s'affiche.
 */
export const socials: { linkedin: string; github: string | null } = {
  linkedin: 'https://www.linkedin.com/in/florian-bouchart',
  github: null,
};
