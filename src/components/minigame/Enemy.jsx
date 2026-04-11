import { useState } from 'react'
import { resolvePublicAssetPath } from '../../utils/assetPaths'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')

export function Enemy({ enemy }) {
  const [hasFailed, setHasFailed] = useState(false)

  const handleMediaError = () => {
    console.error(`[minigame-enemy] failed to load: ${enemy.src}`)
    setHasFailed(true)
  }

  const handleImageFallback = (event) => {
    if (event.currentTarget.src.endsWith(FALLBACK_IMAGE)) return
    event.currentTarget.src = FALLBACK_IMAGE
    console.warn(`[minigame-enemy] using fallback for: ${enemy.src}`)
  }

  return (
    <div
      className="minigame-enemy"
      style={{
        width: `${enemy.width}px`,
        height: `${enemy.height}px`,
        transform: `translate3d(${enemy.x}px, ${enemy.y}px, 0)`,
      }}
    >
      {enemy.kind === 'video' && !hasFailed ? (
        <video src={enemy.src} autoPlay muted loop playsInline preload="metadata" onError={handleMediaError} />
      ) : hasFailed ? (
        <img src={FALLBACK_IMAGE} alt={`${enemy.filename} no disponible`} loading="lazy" draggable={false} />
      ) : (
        <img src={enemy.src} alt={enemy.filename} loading="lazy" draggable={false} onError={handleImageFallback} />
      )}
    </div>
  )
}
