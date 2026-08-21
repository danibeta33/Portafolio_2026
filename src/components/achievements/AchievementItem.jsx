import { AchievementImage } from './AchievementImage'
import { useI18n } from '../../context/I18nContext'

export function AchievementItem({ achievement, isSelected, onSelect }) {
  const { t } = useI18n()
  const src = achievement.unlocked ? (isSelected ? achievement.gif : achievement.image) : achievement.lockedImage

  return (
    <button
      type="button"
      className={`achievement-item ${achievement.unlocked ? 'achievement-item-unlocked' : 'achievement-item-locked'} ${
        isSelected ? 'achievement-item-selected' : ''
      }`}
      onClick={() => onSelect(achievement)}
      aria-label={`${achievement.name} ${achievement.unlocked ? t('ui.achievements.statusUnlocked') : t('ui.achievements.statusLocked')}`}
    >
      <AchievementImage src={src} alt={achievement.name} loading="lazy" />
    </button>
  )
}
