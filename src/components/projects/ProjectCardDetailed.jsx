import { useState } from 'react'
import { Button } from '../ui/Button'
import { MediaPreviewModal } from '../ui/MediaPreviewModal'
import { resolvePublicAssetPath } from '../../utils/assetPaths'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')
const getMediaKind = (src) => (/(\.mp4|\.webm|\.ogg|\.mov)(\?.*)?$/i.test(src) ? 'video' : 'image')

export function ProjectCardDetailed({ project, isLightMode, heroAccentColor, onOpenProject }) {
  const [preview, setPreview] = useState(null)
  const homeDescription = project.shortDescription || project.description || ''
  const hasItch = Boolean(project.itchLink)
  const hasTrailer = Boolean(project.trailer)
  const primaryLinkLabel = project.primaryLinkLabel || 'Itch Link'

  return (
    <article className="project-card">
      <div className="project-body">
        <h3>{project.name}</h3>
        <div className="project-meta-line">
          <span className="project-meta-label">Genero:</span>
          <span>{project.genre}</span>
        </div>
        <p>{homeDescription}</p>
        <div className="project-link-wrap">
          {hasItch ? (
            <a className="project-link" href={project.itchLink} target="_blank" rel="noreferrer">
              {primaryLinkLabel}
            </a>
          ) : (
            <span className="project-link project-link-disabled">Itch no disponible</span>
          )}
          {hasTrailer ? (
            <a className="project-link" href={project.trailer} target="_blank" rel="noreferrer">
              Trailer
            </a>
          ) : (
            <span className="project-link project-link-disabled">Trailer no disponible</span>
          )}
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
            {project.captures.slice(0, 3).map((capture, index) => {
              const captureLink = project.captureLinks?.[index]

              if (captureLink) {
                return (
                  <a
                    key={`${project.id}-capture-link-${index}`}
                    href={captureLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => {
                      event.preventDefault()
                      setPreview({
                        src: capture,
                        kind: getMediaKind(capture),
                        label: `${project.name} captura ${index + 1}`,
                        alt: `${project.name} captura ${index + 1}`,
                        fallbackSrc: FALLBACK_IMAGE,
                      })
                    }}
                  >
                    {getMediaKind(capture) === 'video' ? (
                      <video className="capture-item" src={capture} muted loop playsInline preload="metadata" />
                    ) : (
                      <img className="capture-item" src={capture} alt={`${project.name} captura ${index + 1}`} />
                    )}
                  </a>
                )
              }

              return (
                <button
                  key={`${project.id}-capture-${index}`}
                  type="button"
                  className="capture-preview-btn"
                  onClick={() =>
                    setPreview({
                      src: capture,
                      kind: getMediaKind(capture),
                      label: `${project.name} captura ${index + 1}`,
                      alt: `${project.name} captura ${index + 1}`,
                      fallbackSrc: FALLBACK_IMAGE,
                    })
                  }
                  aria-label={`Abrir captura ${index + 1}`}
                >
                  {getMediaKind(capture) === 'video' ? (
                    <video className="capture-item" src={capture} muted loop playsInline preload="metadata" />
                  ) : (
                    <img className="capture-item" src={capture} alt={`${project.name} captura ${index + 1}`} />
                  )}
                </button>
              )
            })}
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

        <MediaPreviewModal preview={preview} onClose={() => setPreview(null)} />
      </div>
    </article>
  )
}
