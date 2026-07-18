import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  /**
   * Chemin de base pour GitHub Pages.
   *   — site utilisateur (florian-bouchart.github.io)     → '/'   (défaut)
   *   — site de projet  (florian-bouchart.github.io/site) → '/site/'
   * Se surcharge au build sans toucher au code : `VITE_BASE=/mon-repo/ npm run build`.
   */
  base: process.env.VITE_BASE ?? '/',

  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        /**
         * GSAP pèse à lui seul plus que React. En le sortant dans son propre chunk,
         * il est mis en cache séparément : une correction de contenu n'invalide plus
         * le bundle d'animation chez les visiteurs qui reviennent.
         */
        manualChunks: (id) => {
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) return 'motion';
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) return 'react';
          return undefined;
        },
      },
    },
  },
});
