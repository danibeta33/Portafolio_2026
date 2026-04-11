import { resolvePublicAssetPath } from '../../utils/assetPaths'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')

export function Player({ x, y, width, height, src }) {
  const handleImageError = (event) => {
    console.error(`[minigame-player] failed to load: ${src}`)
    if (event.currentTarget.src.endsWith(FALLBACK_IMAGE)) return
    event.currentTarget.src = FALLBACK_IMAGE
  }

  return (
    <div
      className="minigame-player"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
      aria-label="Nave"
    >
      <img src={src} alt="Nave" draggable={false} onError={handleImageError} />
    </div>
  )
}
