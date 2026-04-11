import { useState } from 'react'
import { Button } from '../ui/Button'
import { MediaPreviewModal } from '../ui/MediaPreviewModal'
import { resolvePublicAssetPath } from '../../utils/assetPaths'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')
const getMediaKind = (src) => (/(\.mp4|\.webm|\.ogg|\.mov)(\?.*)?$/i.test(src) ? 'video' : 'image')

export function ProjectCardCompact({ project, isLightMode, heroAccentColor, onOpenProject }) {
  const [preview, setPreview] = useState(null)
  const homeDescription = project.shortDescription || project.description || ''
  const thumbSrc = project.captures[0]

  return (
    <article className="project-card">
      <div className="project-body">
        <h3>{project.name}</h3>
        <button
          type="button"
          className="project-thumb-preview-btn"
          onClick={() =>
            setPreview({
              src: thumbSrc,
              kind: getMediaKind(thumbSrc),
              label: `${project.name} portada`,
              alt: `${project.name} portada`,
              fallbackSrc: FALLBACK_IMAGE,
            })
          }
          aria-label={`Abrir portada de ${project.name}`}
        >
          {getMediaKind(thumbSrc) === 'video' ? (
            <video className="project-thumb" src={thumbSrc} muted loop playsInline preload="metadata" />
          ) : (
            <img className="project-thumb" src={thumbSrc} alt={project.name} />
          )}
        </button>
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

        <MediaPreviewModal preview={preview} onClose={() => setPreview(null)} />
      </div>
    </article>
  )
}
