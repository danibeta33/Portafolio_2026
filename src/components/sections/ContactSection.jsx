export function ContactSection({ profile }) {
  return (
    <section id="contacto" className="section-shell contact-shell">
      <h2>{'<Contacto />'}</h2>
      <p>Disponible para colaboraciones, proyectos y oportunidades.</p>
      <a className="email-link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  )
}
