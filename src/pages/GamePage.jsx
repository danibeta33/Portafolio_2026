import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Game } from '../components/minigame/Game'
import { MediaPreviewModal } from '../components/ui/MediaPreviewModal'
import { resolvePublicAssetPath } from '../utils/assetPaths'
import { useI18n } from '../context/I18nContext'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')

const getMediaKind = (src) => (/(\.mp4|\.webm|\.ogg|\.mov)(\?.*)?$/i.test(src) ? 'video' : 'image')

export default function GamePage({ project, profileName, currentHeroTheme, onBack }) {
  const { t, site } = useI18n()
  const [preview, setPreview] = useState(null)
  const gameDescription =
    project.longDescription ||
    project.description ||
    project.shortDescription ||
    t('ui.game.galleryEnabled')
  const isIllustrationsGame = Boolean(project.isIllustrationsGame || project.id === 9)
  const hasItch = Boolean(project.itchLink)
  const hasTrailer = Boolean(project.trailer)
  const primaryLinkLabel = project.primaryLinkLabel || t('ui.game.itchLabel')
  const rolesList = Array.isArray(project.roles)
    ? project.roles.filter((role) => typeof role === 'string' && role.trim().length > 0)
    : []
  const toolsList = Array.isArray(project.tools)
    ? project.tools.filter((tool) => typeof tool === 'string' && tool.trim().length > 0)
    : []
  const rolesText = typeof project.roles === 'string' ? project.roles.trim() : ''
  const expectationsText = project.expectations?.trim() || t('ui.game.expectationsFallback')
  const learningsText = project.learnings?.trim() || t('ui.game.learningsFallback')

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
            {t('ui.game.back')}
          </Button>
        </div>

        <article className="game-article">
          {isIllustrationsGame ? (
            <>
              <Game title={project.name} subtitle={`${profileName} · ${gameDescription}`} />

              <section className="game-grid-info">
                <div className="game-info-box">
                  <p className="project-meta-title">
                    {rolesList.length > 0 || rolesText ? t('ui.game.roles') : t('ui.game.expectations')}
                  </p>
                  {rolesList.length > 0 ? (
                    <ul className="roles-list">
                      {rolesList.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{rolesText || expectationsText}</p>
                  )}
                </div>
                <div className="game-info-box">
                  <p className="project-meta-title">{t('ui.game.learnings')}</p>
                  <p>{learningsText}</p>
                </div>
                {toolsList.length > 0 ? (
                  <div className="game-info-box">
                    <p className="project-meta-title">{t('ui.game.tools')}</p>
                    <ul className="roles-list">
                      {toolsList.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
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
                  <p className="project-meta-title">
                    {rolesList.length > 0 || rolesText ? t('ui.game.roles') : t('ui.game.expectations')}
                  </p>
                  {rolesList.length > 0 ? (
                    <ul className="roles-list">
                      {rolesList.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{rolesText || expectationsText}</p>
                  )}
                </div>
                <div className="game-info-box">
                  <p className="project-meta-title">{t('ui.game.learnings')}</p>
                  <p>{learningsText}</p>
                </div>
                {toolsList.length > 0 ? (
                  <div className="game-info-box">
                    <p className="project-meta-title">{t('ui.game.tools')}</p>
                    <ul className="roles-list">
                      {toolsList.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>

              <div className="game-grid-info">
                <div className="game-info-box">
                  <p className="project-meta-title">{t('ui.game.genre')}</p>
                  <p>{project.genre}</p>
                </div>
                <div className="game-info-box">
                  <p className="project-meta-title">{t('ui.game.categories')}</p>
                  <div className="project-tags">
                    {project.categories.map((category) => (
                      <span key={`${project.id}-${category}`} className="project-tag">
                        {site.categoryLabels?.[category] || category}
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
                  <span className="project-link project-link-disabled">{t('ui.game.itchUnavailable')}</span>
                )}
                {hasTrailer ? (
                  <a className="project-link" href={project.trailer} target="_blank" rel="noreferrer">
                    {t('ui.game.viewTrailer')}
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">{t('ui.game.trailerUnavailable')}</span>
                )}
              </div>

              <section className="project-captures">
                <p className="project-meta-title">{t('ui.game.captures')}</p>
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
                        aria-label={t('ui.projects.openCapture', { index: index + 1 }, `Abrir captura ${index + 1}`)}
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
