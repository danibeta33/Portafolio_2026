import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Game } from '../components/minigame/Game'
import { MediaPreviewModal } from '../components/ui/MediaPreviewModal'
import { resolvePublicAssetPath } from '../utils/assetPaths'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')

const getMediaKind = (src) => (/(\.mp4|\.webm|\.ogg|\.mov)(\?.*)?$/i.test(src) ? 'video' : 'image')

export default function GamePage({ project, profileName, currentHeroTheme, onBack }) {
  const [preview, setPreview] = useState(null)
  const gameDescription =
    project.longDescription ||
    project.description ||
    project.shortDescription ||
    'Destruye todos los medios que invaden la pantalla para desbloquear la galeria final.'
  const isIllustrationsGame = Boolean(project.isIllustrationsGame || project.id === 9)
  const hasItch = Boolean(project.itchLink)
  const hasTrailer = Boolean(project.trailer)
  const primaryLinkLabel = project.primaryLinkLabel || 'Ir a Itch'
  const expectationsText = project.expectations?.trim() || 'Sin expectativas registradas por ahora.'
  const learningsText = project.learnings?.trim() || 'Sin aprendizajes registrados por ahora.'

  const openPreview = (src, label) => {
    setPreview({
      src,
      kind: getMediaKind(src),
      label,
      alt: label,
      fallbackSrc: FALLBACK_IMAGE,
    })
  }

  return (
    <main className={`game-page hero-theme-${currentHeroTheme}`}>
      <section className="section-shell game-shell">
        <div className="game-topbar">
          <Button bg="black" textColor="white" borderColor="white" shadow="white" onClick={onBack}>
            Volver a Inicio
          </Button>
        </div>

        <article className="game-article">
          {isIllustrationsGame ? (
            <>
              <Game title={project.name} subtitle={`${profileName} · ${gameDescription}`} />

              <section className="game-grid-info">
                <div className="game-info-box">
                  <p className="project-meta-title">Expectativas</p>
                  <p>{expectationsText}</p>
                </div>
                <div className="game-info-box">
                  <p className="project-meta-title">Aprendizajes</p>
                  <p>{learningsText}</p>
                </div>
              </section>
            </>
          ) : (
            <>
              <header className="game-header">
                <p className="game-author">{profileName}</p>
                <h1>{project.name}</h1>
                <p className="game-description">{gameDescription}</p>
              </header>

              <section className="game-grid-info">
                <div className="game-info-box">
                  <p className="project-meta-title">Expectativas</p>
                  <p>{expectationsText}</p>
                </div>
                <div className="game-info-box">
                  <p className="project-meta-title">Aprendizajes</p>
                  <p>{learningsText}</p>
                </div>
              </section>

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
                {hasItch ? (
                  <a className="project-link" href={project.itchLink} target="_blank" rel="noreferrer">
                    {primaryLinkLabel}
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">Itch no disponible</span>
                )}
                {hasTrailer ? (
                  <a className="project-link" href={project.trailer} target="_blank" rel="noreferrer">
                    Ver Trailer
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">Trailer no disponible</span>
                )}
              </div>

              <section className="project-captures">
                <p className="project-meta-title">Capturas</p>
                <div className="captures-grid">
                  {project.captures.map((capture, index) => {
                    const captureLink = project.captureLinks?.[index]

                    if (captureLink) {
                      return (
                        <a
                          key={`${project.id}-game-capture-link-${index}`}
                          href={captureLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => {
                            event.preventDefault()
                            openPreview(capture, `${project.name} captura ${index + 1}`)
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
                        key={`${project.id}-game-capture-${index}`}
                        type="button"
                        className="capture-preview-btn"
                        onClick={() => openPreview(capture, `${project.name} captura ${index + 1}`)}
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
              </section>
            </>
          )}

          <MediaPreviewModal preview={preview} onClose={() => setPreview(null)} />
        </article>
      </section>
    </main>
  )
}
