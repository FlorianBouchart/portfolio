import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Polices auto-hébergées : aucune requête tierce, pas de FOUT lié au réseau.
// Trio signature : Syne (titres), Schibsted Grotesk (texte), Spline Sans Mono
// (étiquettes techniques). `wght.css` seulement : l'axe de graisse suffit.
import '@fontsource-variable/syne/wght.css';
import '@fontsource-variable/schibsted-grotesk/wght.css';
import '@fontsource-variable/spline-sans-mono/wght.css';

import './styles/tokens.css';
import { App } from './App';
import { LocaleProvider } from './lib/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>
);
