import { resolvePublicAssetPath } from '../../utils/assetPaths'
import { useI18n } from '../../context/I18nContext'

const FALLBACK_IMAGE = resolvePublicAssetPath('/imgs/Minijuego/minijuego1.jpg')

export function Player({ x, y, width, height, src }) {
  const { t } = useI18n()
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
      aria-label={t('ui.game.playerAlt')}
    >
      <img src={src} alt={t('ui.game.playerAlt')} draggable={false} onError={handleImageError} />
    </div>
  )
}
