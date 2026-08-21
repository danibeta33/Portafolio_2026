import { AchievementImage } from './AchievementImage'
import { useI18n } from '../../context/I18nContext'

export function AchievementModal({ achievement, onClose }) {
  const { t } = useI18n()
  if (!achievement) return null

  return (
    <div className="achievement-modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="achievement-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="achievement-modal-close" onClick={onClose}>
          {t('ui.achievements.close')}
        </button>
        <h3>{achievement.name}</h3>
        <p>{achievement.description}</p>
        <AchievementImage
          src={achievement.gif}
          alt={t('ui.achievements.animatedAlt', { name: achievement.name }, `${achievement.name} animado`)}
          loading="eager"
          fallbackSrc={achievement.image}
        />
      </div>
    </div>
  )
}
