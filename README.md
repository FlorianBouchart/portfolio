# Florian Bouchart — dossier professionnel

Site compagnon du CV. Le PDF donne les faits ; ce site donne les coulisses, les preuves et la méthode. **Ce n'est pas un duplicata du CV** — et il ne propose volontairement aucun téléchargement de CV (les CV sont adaptés à chaque candidature et envoyés directement).

React 19 · TypeScript · Vite · React Router · GSAP/ScrollTrigger · Lenis. Bilingue FR/EN. Aucun appel tiers au runtime (polices auto-hébergées).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # vérifie les types puis produit dist/
npm run preview  # sert dist/ localement
```

## Architecture multi-pages

| Route | Page | Contenu |
|---|---|---|
| `/` | Accueil | Préloader, hero (particules, parallaxe souris, compteurs), les « quatre portes », recommandations |
| `/realisations` | Réalisations | 3 études de cas problème → approche → résultats, filigranes au scroll |
| `/formation` | Formation | 72 cours cherchables, filtres compacts (scroll horizontal sur mobile) |
| `/certifications` | Certifications | Galerie tilt 3D + visionneuse plein écran |
| `/approche` | Approche | Convictions, forces / points d'attention, compétences |
| `/contact` | Contact | FAQ + carte contact |
| `/projets` | Projets | Masquée de la nav tant que `content/projects.ts` est vide |
| `*` | 404 | Page introuvable |

Chaque navigation interne passe par le **rideau de transition** (`lib/transition.tsx`) : tous les liens internes utilisent `<TLink>`, jamais `<Link>` nu — sinon la page change sans transition.

## Le contenu n'est pas dans le design

Tout le contenu vit dans `src/content/*.ts`, typé par `types.ts`. Chaque chaîne visible est un `I18n = { fr, en }` : oublier une traduction est une **erreur de compilation**. `recommendations.ts` et `projects.ts` sont vides → leurs sections/pages se masquent seules et réapparaissent dès qu'un objet est ajouté.

Le lien GitHub du footer/contact s'active en renseignant `socials.github` dans `content/profile.ts`.

## Système d'animation

- **Préloader** (`components/Preloader.tsx`) : une fois par session (`sessionStorage`). Émet `fb:ready` — les entrées de hero attendent ce signal via `oncePreloaded()`.
- **Transitions de pages** : rideau d'encre en `clip-path`, navigation derrière le rideau, scroll remis à zéro pendant l'occultation.
- **`useReveal(ref)`** : révélation des `[data-reveal]` groupés par `data-reveal-group`, une seule fois.
- **`Counter`** : chiffres qui se construisent. Les éléments visibles au chargement comptent dès `fb:ready` (un ScrollTrigger créé pendant le verrouillage du scroll n'évalue son état qu'au premier défilement — piège connu, déjà corrigé une fois).
- **`HeroCanvas`** : particules 2D avec profondeur et parallaxe souris. Canvas 2D et non Three.js : l'effet ne justifie pas ~150 Ko de WebGL face au budget Lighthouse. La boucle se coupe hors viewport et onglet caché.
- **`Cursor`, `Magnetic`, `Tilt`, `AnimatedText`** : micro-interactions ; toutes inertes en `pointer: coarse` et/ou `prefers-reduced-motion`.
- **Lenis** piloté par le ticker GSAP (une seule boucle rAF). `anchors: { offset: -68 }` reste indispensable pour les ancres.

`prefers-reduced-motion` est respecté partout : préloader sauté, transitions instantanées, particules coupées, reveals neutralisés.

## Déploiement (GitHub Pages)

`.github/workflows/deploy.yml` : build + publication à chaque push sur `main`, avec copie `index.html → 404.html` pour que les routes profondes (`/formation`…) survivent au rafraîchissement.

**Réglages à faire une fois :**
1. *Settings → Pages → Source = GitHub Actions*.
2. Site de **projet** (`user.github.io/mon-repo`) : variable de dépôt `VITE_BASE` = `/mon-repo/`. Site utilisateur : rien.
3. Remplacer l'URL de démonstration `https://florian-bouchart.github.io/` dans `index.html`, `public/robots.txt`, `public/sitemap.xml`.

## Ce qu'il manque

Voir [`../CONTENU-SOURCE.md`](../CONTENU-SOURCE.md) — inventaire des sources, contradictions relevées, éléments à fournir (projets, recommandation, photo HD, pseudo GitHub, statut Scrum/SAFe).
