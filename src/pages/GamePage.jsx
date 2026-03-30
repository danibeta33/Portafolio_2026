import { Button } from '../components/ui/Button'

export default function GamePage({ project, profileName, currentHeroTheme, onBack }) {
  return (
    <main className={`game-page hero-theme-${currentHeroTheme}`}>
      <section className="section-shell game-shell">
        <div className="game-topbar">
          <Button bg="black" textColor="white" borderColor="white" shadow="white" onClick={onBack}>
            Volver a Inicio
          </Button>
        </div>

        <article className="game-article">
          <header className="game-header">
            <p className="game-author">{profileName}</p>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </header>

          <div className="game-grid-info">
            <div className="game-info-box">
              <p className="project-meta-title">Genero</p>
              <p>{project.genre}</p>
            </div>
            <div className="game-info-box">
              <p className="project-meta-title">Categorias</p>
              <div className="project-tags">
                {project.categories.map((category) => (
                  <span key={`${project.id}-${category}`} className="project-tag">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-link-wrap">
            <a className="project-link" href={project.itchLink} target="_blank" rel="noreferrer">
              Ir a Itch
            </a>
            <a className="project-link" href={project.trailer} target="_blank" rel="noreferrer">
              Ver Trailer
            </a>
          </div>

          <section className="project-captures">
            <p className="project-meta-title">Capturas</p>
            <div className="captures-grid">
              {project.captures.map((capture, index) => (
                <img
                  key={`${project.id}-game-capture-${index}`}
                  className="capture-item"
                  src={capture}
                  alt={`${project.name} captura ${index + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="game-grid-info">
            <div className="game-info-box">
              <p className="project-meta-title">Expectativas</p>
              <p>{project.expectations}</p>
            </div>
            <div className="game-info-box">
              <p className="project-meta-title">Aprendizajes</p>
              <p>{project.learnings}</p>
            </div>
          </section>
        </article>
      </section>
    </main>
  )
}
