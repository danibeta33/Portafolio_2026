import { useI18n } from '../../context/I18nContext'

export function ContactSection({ profile }) {
  const { t } = useI18n()

  return (
    <section id="contacto" className="section-shell contact-shell">
      <h2>{t('ui.sections.contact')}</h2>
      <p>{t('ui.contact.description')}</p>
      <a className="email-link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  )
}
