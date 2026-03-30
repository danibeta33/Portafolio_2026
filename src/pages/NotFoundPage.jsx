import { Button } from '../components/ui/Button'

export default function NotFoundPage({ currentHeroTheme, onBackHome }) {
  return (
    <main className={`game-page hero-theme-${currentHeroTheme}`}>
      <section className="section-shell game-shell">
        <article className="game-article">
          <h1>Proyecto no encontrado</h1>
          <p>La ruta no coincide con un proyecto registrado.</p>
          <div className="project-action-wrap">
            <Button bg="black" textColor="white" borderColor="white" shadow="white" onClick={onBackHome}>
              Volver a Inicio
            </Button>
          </div>
        </article>
      </section>
    </main>
  )
}
