import { useRef, useState } from 'react';
import { useLocale } from '../lib/i18n';
import { useReveal, usePageTitle } from '../lib/motion';
import { AnimatedText } from '../components/AnimatedText';
import { faq } from '../content/faq';
import { profile, socials } from '../content/profile';
import './Contact.css';

export function Contact() {
  const root = useRef<HTMLDivElement>(null);
  const { t, locale } = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  usePageTitle(locale === 'fr' ? 'Contact · Florian Bouchart' : 'Contact · Florian Bouchart');
  useReveal(root);

  return (
    <div className="page contact-section" ref={root} id="contenu">
      <header className="page-hero shell">
        <h1 className="page-title">
          <AnimatedText onScroll={false} delay={0.15} text={t({ fr: 'Contact', en: 'Contact' })} />
        </h1>
        <p className="page-intro">
          {t({
            fr: 'Disponibilité, mobilité, type de contrat : les réponses aux questions pratiques, et mes coordonnées.',
            en: 'Availability, mobility, contract type: the practical answers, and how to reach me.',
          })}
        </p>
      </header>

      <div className="shell section" style={{ borderTop: 'none', paddingTop: 0 }}>
        <div className="contact">
          <div className="faq" data-reveal>
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={i}>
                  <h2 className="faq-q">
                    <button
                      type="button"
                      className="faq-trigger"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                    >
                      <span>{t(item.q)}</span>
                      <span className="faq-sign" aria-hidden="true" />
                    </button>
                  </h2>
                  <div className="faq-a" id={`faq-a-${i}`} hidden={!isOpen}>
                    {/* Le contenu FAQ porte du <strong> volontaire, rédigé par nos soins
                        dans content/faq.ts — aucune saisie externe n'alimente ce HTML. */}
                    <p dangerouslySetInnerHTML={{ __html: t(item.a) }} />
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="contact-card" data-reveal>
            <p className="eyebrow">{t({ fr: 'Me joindre', en: 'Reach me' })}</p>

            <p className="contact-lead">
              {t({
                fr: 'Une question, une annonce, un simple échange : le plus direct reste le mail.',
                en: 'A question, an opening, or just a chat: email is the most direct route.',
              })}
            </p>

            <ul className="contact-links">
              <li>
                <a className="contact-link" href={`mailto:${profile.email}`}>
                  <span className="mono contact-link-key">Mail</span>
                  <span className="contact-link-val">{profile.email}</span>
                </a>
              </li>
              <li>
                <a className="contact-link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  <span className="mono contact-link-key">Tél</span>
                  <span className="contact-link-val">{profile.phone}</span>
                </a>
              </li>
              <li>
                <a className="contact-link" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="mono contact-link-key">LinkedIn</span>
                  <span className="contact-link-val">/in/florian-bouchart ↗</span>
                </a>
              </li>
              {socials.github && (
                <li>
                  <a className="contact-link" href={socials.github} target="_blank" rel="noopener noreferrer">
                    <span className="mono contact-link-key">GitHub</span>
                    <span className="contact-link-val">{socials.github.replace('https://', '')} ↗</span>
                  </a>
                </li>
              )}
            </ul>

            <div className="contact-status">
              <span className="contact-status-dot" aria-hidden="true" />
              <span>{t(profile.availability)}</span>
            </div>
            <p className="contact-loc mono">{t(profile.location)}</p>

            <ul className="contact-langs">
              {profile.languages.map((l) => (
                <li key={l.fr} className="mono">
                  {t(l)}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
