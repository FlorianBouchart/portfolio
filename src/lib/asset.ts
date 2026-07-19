/**
 * Résout le chemin d'un média du dossier `public/` en tenant compte du base path.
 *
 * Vite ne réécrit le base (`import.meta.env.BASE_URL`) que dans index.html et
 * dans les assets importés — PAS dans les chaînes JS évaluées au runtime. Un
 * `src="/media/x.jpg"` fonctionne donc en dev (base `/`) mais pointe vers la
 * racine du domaine en production GitHub Pages (base `/portfolio/`), d'où les
 * 404 sur les images, certifs et vidéos une fois déployé.
 *
 * On centralise ici : `asset('/media/x.jpg')` donne `/media/x.jpg` en dev et
 * `/portfolio/media/x.jpg` en prod. À utiliser pour TOUT média de `public/`
 * référencé au runtime (src d'image, poster/src de vidéo…).
 */
export const asset = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
