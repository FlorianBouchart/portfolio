# Florian Bouchart — Portfolio

Site compagnon de mon CV : le PDF donne les faits, ce site donne les coulisses, les preuves et la méthode. Il ne duplique pas le CV et ne propose volontairement aucun téléchargement — les CV sont adaptés à chaque candidature et envoyés directement.

**En ligne → https://florianbouchart.github.io/portfolio/**

Conçu, écrit et développé de bout en bout (contenu, direction artistique et code), avec l'aide de Claude Code.

## Stack

React 19 · TypeScript · Vite · React Router · GSAP / ScrollTrigger · Lenis · Canvas 2D. Bilingue FR / EN. Polices auto-hébergées, aucun appel tiers au runtime. Déployé sur GitHub Pages via GitHub Actions.

## Pages

| Route | Page | Contenu |
|---|---|---|
| `/` | Accueil | Préloader, hero (particules, parallaxe souris, compteurs) et le deck 3D des pages |
| `/realisations` | Réalisations | 5 études de cas (contexte → travail → résultats), animées au scroll |
| `/projets` | Projets | Étude de projet (Reskope), avec vidéos des animations |
| `/formation` | Formation | 72 cours cherchables et filtrables |
| `/certifications` | Certifications | Galerie tilt 3D + visionneuse plein écran |
| `/recommandations` | Recommandations | Références, texte long repliable |
| `/profil` | Profil | Ce que je recherche, points forts / axes de progression, compétences |
| `/contact` | Contact | FAQ + carte de contact |
| `*` | 404 | Page introuvable |

Chaque navigation interne passe par un **rideau de transition** (`lib/transition.tsx`) : les liens internes utilisent `<TLink>`, jamais `<Link>` nu.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # vérifie les types (tsc) puis produit dist/
npm run preview  # sert dist/ localement
```

## Le contenu est séparé du design

Tout le contenu vit dans `src/content/*.ts`, typé par `types.ts`. Chaque chaîne visible est un `I18n = { fr, en }` : oublier une traduction est une **erreur de compilation**. Les sections `recommendations` et `projects` se masquent d'elles-mêmes si elles sont vides et réapparaissent (navigation comprise) dès qu'un objet est ajouté.

## Système d'animation

- **Préloader** (`components/Preloader.tsx`) : une fois par session (`sessionStorage`). Émet `fb:ready` ; les entrées du hero attendent ce signal via `oncePreloaded()`.
- **Transitions de pages** : rideau d'encre en `clip-path`, navigation effectuée derrière le rideau, scroll remis à zéro pendant l'occultation.
- **`useReveal(ref)`** : révèle les `[data-reveal]` groupés par `data-reveal-group`, une seule fois. Une section imbriquée dans une page qui appelle déjà `useReveal` ne le rappelle pas (sinon deux tweens se marchent dessus).
- **`Counter`** : chiffres qui se construisent ; les éléments visibles au chargement comptent dès `fb:ready`.
- **`HeroCanvas`** : particules en Canvas 2D (profondeur + parallaxe souris), choix assumé face à WebGL pour le budget Lighthouse ; la boucle se coupe hors viewport et onglet caché.
- **`Cursor`, `Magnetic`, `Tilt`, `AnimatedText`** : micro-interactions, inertes en `pointer: coarse` et/ou `prefers-reduced-motion`.
- **Lenis** piloté par le ticker GSAP (une seule boucle rAF).

`prefers-reduced-motion` est respecté partout : préloader sauté, transitions instantanées, particules coupées, révélations neutralisées.

## Déploiement

`.github/workflows/deploy.yml` reconstruit et publie le site à chaque push sur `main` (build avec `VITE_BASE=/portfolio/`, copie `index.html → 404.html` pour que les routes profondes survivent à un rafraîchissement). Source des Pages : *GitHub Actions*.

## Licence

Code sous licence MIT. Le contenu éditorial, les visuels et les documents personnels ne sont pas réutilisables.
