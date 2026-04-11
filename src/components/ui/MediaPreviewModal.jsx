import { useEffect } from 'react'

export function MediaPreviewModal({ preview, onClose }) {
  useEffect(() => {
    if (!preview) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, preview])

  if (!preview) return null

  return (
    <div className="media-preview-backdrop" role="dialog" aria-modal="true" aria-label="Previsualizacion" onClick={onClose}>
      <div className="media-preview-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="media-preview-close" onClick={onClose} aria-label="Cerrar previsualizacion">
          Cerrar
        </button>

        {preview.kind === 'video' ? (
          <video src={preview.src} controls autoPlay loop playsInline preload="metadata" />
        ) : (
          <img
            src={preview.src}
            alt={preview.alt || 'Previsualizacion'}
            loading="eager"
            onError={(event) => {
              if (!preview.fallbackSrc) return
              if (event.currentTarget.src.endsWith(preview.fallbackSrc)) return
              event.currentTarget.src = preview.fallbackSrc
            }}
          />
        )}

        {preview.label && <p>{preview.label}</p>}
      </div>
    </div>
  )
}
