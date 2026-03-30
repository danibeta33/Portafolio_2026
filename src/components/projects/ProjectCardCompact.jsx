import { Button } from '../ui/Button'

export function ProjectCardCompact({ project, isLightMode, heroAccentColor, onOpenProject }) {
  const homeDescription = project.shortDescription || project.description || ''

  return (
    <article className="project-card">
      <div className="project-body">
        <h3>{project.name}</h3>
        <img className="project-thumb" src={project.captures[0]} alt={project.name} />
        <p>{homeDescription}</p>
        <div className="project-tags">
          {project.categories.map((category) => (
            <span key={`${project.id}-${category}`} className="project-tag">
              {category}
            </span>
          ))}
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
