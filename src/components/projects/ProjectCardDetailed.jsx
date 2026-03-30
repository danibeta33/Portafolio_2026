import { Button } from '../ui/Button'

export function ProjectCardDetailed({ project, isLightMode, heroAccentColor, onOpenProject }) {
  return (
    <article className="project-card">
      <div className="project-body">
        <h3>{project.name}</h3>
        <div className="project-meta-line">
          <span className="project-meta-label">Genero:</span>
          <span>{project.genre}</span>
        </div>
        <p>{project.description}</p>
        <div className="project-link-wrap">
          <a className="project-link" href={project.itchLink} target="_blank" rel="noreferrer">
            Itch Link
          </a>
          <a className="project-link" href={project.trailer} target="_blank" rel="noreferrer">
            Trailer
          </a>
        </div>
        <div className="project-tags">
          {project.categories.map((category) => (
            <span key={`${project.id}-${category}`} className="project-tag">
              {category}
            </span>
          ))}
        </div>
        <div className="project-captures">
          <p className="project-meta-title">Capturas</p>
          <div className="captures-grid">
            {project.captures.map((capture, index) => (
              <img
                key={`${project.id}-capture-${index}`}
                className="capture-item"
                src={capture}
                alt={`${project.name} captura ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="project-action-wrap">
          <Button
            bg={isLightMode ? '#ffffff' : '#000000'}
            textColor={isLightMode ? '#000000' : '#ffffff'}
            borderColor={heroAccentColor}
            shadow={heroAccentColor}
            onClick={() => onOpenProject(project.id)}
          >
            Ver proyecto
          </Button>
        </div>
      </div>
    </article>
  )
}
