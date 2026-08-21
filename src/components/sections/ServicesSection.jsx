import { useI18n } from '../../context/I18nContext'

export function ServicesSection({ services }) {
  const { t } = useI18n()

  return (
    <section id="servicios" className="section-shell">
      <h2>{t('ui.sections.services')}</h2>
      <div className="cards-grid">
        {services.map((service) => (
          <article key={service.title} className="terminal-card">
            <div className="terminal-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
