export function ProfileSection({ profile }) {
  return (
    <section id="perfil" className="section-shell">
      <h2>{'<Perfil />'}</h2>
      <p>
        Soy {profile.name}, con enfoque multidisciplinario entre arte, desarrollo interactivo, narrativa visual y
        construccion de experiencias digitales.
      </p>
    </section>
  )
}
