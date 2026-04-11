import { AchievementImage } from './AchievementImage'

export function AchievementItem({ achievement, isSelected, onSelect }) {
  const src = achievement.unlocked ? (isSelected ? achievement.gif : achievement.image) : achievement.lockedImage

  return (
    <button
      type="button"
      className={`achievement-item ${achievement.unlocked ? 'achievement-item-unlocked' : 'achievement-item-locked'} ${
        isSelected ? 'achievement-item-selected' : ''
      }`}
      onClick={() => onSelect(achievement)}
      aria-label={`${achievement.name} ${achievement.unlocked ? 'desbloqueado' : 'bloqueado'}`}
    >
      <AchievementImage src={src} alt={achievement.name} loading="lazy" />
    </button>
  )
}
