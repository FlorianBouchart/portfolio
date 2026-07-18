import type { Recommendation } from './types';

/**
 * Recommandations.
 *
 * Ajoutée le 18/07/2026 : référence d'Isabelle Kustosz (enseignante-chercheuse
 * à l'IAE Valenciennes), publiée sur engagement-jeunes.com. D'autres suivront.
 *
 * Le design gère 1, 3 ou 12 recommandations sans retouche : la section se masque
 * si le tableau est vide, s'affiche en pleine largeur pour une seule, et en
 * grille au-delà. Photo : déposer un carré (400×400 min) dans public/recommendations/.
 */
export const recommendations: Recommendation[] = [
  {
    id: 'isabelle-kustosz',
    name: 'Isabelle Kustosz',
    role: {
      fr: 'Enseignante-chercheuse, responsable de formation',
      en: 'Senior lecturer & researcher, programme director',
    },
    org: 'IAE Valenciennes',
    text: {
      fr: 'Florian Bouchart est un étudiant et apprenti très impliqué dans ses cours, son apprentissage et la vie associative étudiante. C’est un excellent élément, pertinent, fiable et moteur. Il sait insuffler des dynamiques de groupe positives et proactives. J’ai été son enseignante en L3, M1 et M2 et j’ai toujours pu constater son comportement irréprochable et sa participation enrichissante. Ses soft skills sont nombreuses : curiosité, esprit d’équipe, sérénité. À l’issue du M2, les contenus académiques, les expériences professionnelles et ses projets entrepreneuriaux font de lui un excellent candidat sur des postes de management, gestion de projet, pilotage, digitalisation, amélioration continue et démarche qualité. Nous précisons en outre que M. Bouchart est major de promotion du M2 MDPE.',
      en: 'Florian Bouchart is a student and apprentice who is deeply involved in his courses, his apprenticeship and student life. He is an excellent, relevant, reliable and driving force. He knows how to spark positive, proactive group dynamics. I taught him in the third year of his Bachelor’s and throughout his Master’s, and I have consistently observed his exemplary conduct and his enriching participation. His soft skills are many: curiosity, team spirit, composure. On completing his Master’s, his academic record, professional experience and entrepreneurial projects make him an excellent candidate for roles in management, project management, steering, digitalisation, continuous improvement and quality. We also note that Mr Bouchart graduated top of his M2 MDPE class.',
    },
    url: 'https://www.engagement-jeunes.com/fr/recommandations/48873/florian-bouchart.html',
    date: '2026-03-06',
  },
];
