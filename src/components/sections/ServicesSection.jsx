export function ServicesSection({ services }) {
  return (
    <section id="servicios" className="section-shell">
      <h2>{'<Servicios />'}</h2>
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
