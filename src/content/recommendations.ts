import type { Recommendation } from './types';

/**
 * Recommandations.
 *
 * ⚠️ VIDE : aucune recommandation n'a été fournie à ce jour.
 * L'ancien site avait une section « RECOMMANDATIONS » mais son code ne contenait
 * que le titre et le sous-titre — aucun témoignage réel.
 *
 * Pour en ajouter une, il suffit d'ajouter un objet ci-dessous. Le design est prévu
 * pour 1, 3 ou 12 recommandations sans retouche : la section se masque si le tableau
 * est vide, s'affiche en pleine largeur pour une seule, et en grille au-delà.
 *
 * Photo : déposer le fichier dans `public/recommendations/` (carré, 400×400 min).
 *
 * export const recommendations: Recommendation[] = [
 *   {
 *     id: 'prenom-nom',
 *     name: 'Prénom Nom',
 *     role: { fr: 'Son poste', en: 'Their role' },
 *     org: 'Son entreprise',
 *     photo: '/recommendations/prenom-nom.jpg',
 *     text: { fr: 'Le texte de la recommandation…', en: 'The recommendation text…' },
 *     linkedin: 'https://www.linkedin.com/in/…',
 *     date: '2026-05',
 *   },
 * ];
 */
export const recommendations: Recommendation[] = [];
