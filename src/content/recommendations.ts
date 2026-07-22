import type { Recommendation } from './types';

/**
 * Recommandations.
 *
 * - Isabelle Kustosz (enseignante-chercheuse, IAE Valenciennes), publiée sur
 *   engagement-jeunes.com — ajoutée le 18/07/2026.
 * - Sourav Hasan (UX/UI Designer, rencontré à la Summer School de Vaasa),
 *   recommandation LinkedIn — ajoutée le 20/07/2026.
 *
 * Le design gère 1, 3 ou 12 recommandations sans retouche : la section se masque
 * si le tableau est vide, s'affiche en pleine largeur pour une seule, et en
 * grille au-delà. Photo : déposer un carré (400×400 min) dans public/recommendations/.
 * Le texte de Sourav est d'origine en anglais ; la version FR est une traduction
 * fidèle (le site étant bilingue, chaque recommandation a ses deux langues).
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
  {
    id: 'sourav-hasan',
    name: 'Sourav Hasan',
    role: {
      fr: 'UX/UI Designer',
      en: 'UX/UI Designer',
    },
    org: 'Astha IT',
    text: {
      fr: 'J’ai eu le plaisir de travailler avec Florian pendant la Summer School de Vaasa. Il a constamment fait preuve d’un état d’esprit collaboratif, d’excellentes qualités de communication et d’une vraie curiosité d’apprendre. Florian a activement contribué aux discussions et aux projets de groupe, s’est parfaitement adapté à notre environnement multiculturel et a toujours apporté une énergie positive à l’équipe. Son état d’esprit entrepreneurial et sa créativité en ont fait un coéquipier précieux. Je suis convaincu qu’il aura un impact positif dans n’importe quel poste et lui souhaite une belle réussite.',
      en: 'I had the pleasure of working with Florian during the Vaasa Summer Class. He consistently demonstrated a collaborative mindset, strong communication skills, and a genuine curiosity for learning. Florian actively contributed to group discussions and projects, adapted well to our multicultural environment, and always brought positive energy to the team. His entrepreneurial mindset and creativity made him a valuable teammate. I’m confident he will make a positive impact in any future role and wish him continued success.',
    },
    date: '2026-07-20',
  },
];
