import { AchievementItem } from './AchievementItem'
import { AchievementImage } from './AchievementImage'
import { resolvePublicAssetPath } from '../../utils/assetPaths'

const LOGRO_TRIGGER_FALLBACK = resolvePublicAssetPath('/imgs/Logro5Bloq.png')

export function AchievementDropUp({
  achievements,
  isOpen,
  selectedId,
  onToggle,
  onSelect,
  onToggleRainbow,
  isRainbowManual,
  isRainbowUnlocked,
  rainbowMessage,
}) {
  const trigger = achievements.find((item) => item.id === 5)

  return (
    <div className={`achievement-dropup ${isOpen ? 'achievement-dropup-open' : ''}`}>
      {isOpen && (
        <div className="achievement-dropup-menu">
          {achievements.map((achievement) => (
            <AchievementItem
              key={achievement.id}
              achievement={achievement}
              isSelected={selectedId === achievement.id}
              onSelect={onSelect}
            />
          ))}
          <button
            type="button"
            className="achievement-rainbow-toggle"
            onClick={onToggleRainbow}
            disabled={!isRainbowUnlocked}
          >
            {isRainbowManual ? 'Desactivar Rainbow' : 'Activar Rainbow'}
          </button>
          {rainbowMessage && <p className="achievement-rainbow-message">{rainbowMessage}</p>}
        </div>
      )}

      <button type="button" className="achievement-dropup-trigger" onClick={onToggle} aria-label="Abrir panel de logros">
        <AchievementImage
          src={
            trigger
              ? trigger.unlocked
                ? selectedId === 5 && isOpen
                  ? trigger.gif
                  : trigger.image
                : trigger.lockedImage
              : LOGRO_TRIGGER_FALLBACK
          }
          alt="Abrir logros"
          loading="eager"
          fallbackSrc={LOGRO_TRIGGER_FALLBACK}
        />
      </button>
    </div>
  )
}
