import { useMemo, useState } from 'react'
import { resolvePublicAssetPath } from '../../utils/assetPaths'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')

function GalleryMedia({ asset }) {
  const [hasVideoError, setHasVideoError] = useState(false)
  const mediaId = useMemo(() => `gallery-media-${asset.id}`, [asset.id])

  const handleImageError = (event) => {
    console.error(`[minigame-gallery] image failed: ${asset.src}`)
    if (event.currentTarget.src.endsWith(FALLBACK_IMAGE)) return
    event.currentTarget.src = FALLBACK_IMAGE
  }

  const handleVideoError = () => {
    console.error(`[minigame-gallery] video failed: ${asset.src}`)
    setHasVideoError(true)
  }

  const handleLoaded = () => {
    console.debug(`[minigame-gallery] loaded: ${asset.src}`)
  }

  if (asset.kind === 'video' && !hasVideoError) {
    return (
      <video
        id={mediaId}
        src={asset.src}
        controls
        loop
        playsInline
        preload="metadata"
        onLoadedData={handleLoaded}
        onError={handleVideoError}
      />
    )
  }

  return <img id={mediaId} src={asset.src} alt={asset.filename} loading="lazy" onLoad={handleLoaded} onError={handleImageError} />
}

export function Gallery({ assets }) {
  const [previewAsset, setPreviewAsset] = useState(null)

  const closePreview = () => setPreviewAsset(null)

  return (
    <section className="minigame-gallery-wrap" aria-label="Galeria final de capturas y videos">
      <h2>Galeria final desbloqueada</h2>
      <p>Has destruido todos los objetivos. Haz clic sobre cualquier archivo para verlo en previsualizacion grande.</p>

      <div className="minigame-gallery-grid">
        {assets.map((asset) => (
          <button
            key={asset.id}
            type="button"
            className="minigame-gallery-card"
            onClick={() => setPreviewAsset(asset)}
            aria-label={`Abrir previsualizacion de ${asset.filename}`}
          >
            <GalleryMedia asset={asset} />
          </button>
        ))}
      </div>

      {previewAsset && (
        <div className="minigame-preview-backdrop" role="dialog" aria-modal="true" aria-label="Previsualizacion" onClick={closePreview}>
          <div className="minigame-preview-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="minigame-preview-close" onClick={closePreview} aria-label="Cerrar previsualizacion">
              Cerrar
            </button>
            {previewAsset.kind === 'video' ? (
              <video src={previewAsset.src} controls autoPlay loop playsInline preload="metadata" />
            ) : (
              <img src={previewAsset.src} alt={previewAsset.filename} loading="eager" onError={(event) => {
                if (event.currentTarget.src.endsWith(FALLBACK_IMAGE)) return
                event.currentTarget.src = FALLBACK_IMAGE
              }} />
            )}
            <p>{previewAsset.filename}</p>
          </div>
        </div>
      )}
    </section>
  )
}
