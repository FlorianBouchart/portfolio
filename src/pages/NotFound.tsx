import { useLocale } from '../lib/i18n';
import { usePageTitle } from '../lib/motion';
import { TLink } from '../lib/transition';

export function NotFound() {
  const { t, locale } = useLocale();
  usePageTitle(locale === 'fr' ? 'Page introuvable · Florian Bouchart' : 'Page not found · Florian Bouchart');

  return (
    <div className="page" id="contenu">
      <header className="page-hero shell">
        <h1 className="page-title">{t({ fr: 'Page introuvable', en: 'Page not found' })}</h1>
        <p className="page-intro">
          {t({
            fr: 'L’adresse demandée ne correspond à aucune page de ce site.',
            en: 'The requested address does not match any page of this site.',
          })}
        </p>
        <p>
          <TLink to="/" className="mono" style={{ color: 'var(--accent)' }}>
            {t({ fr: '← Retour à l’accueil', en: '← Back to home' })}
          </TLink>
        </p>
      </header>
    </div>
  );
}
