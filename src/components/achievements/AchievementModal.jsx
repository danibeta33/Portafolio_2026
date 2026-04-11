import { AchievementImage } from './AchievementImage'

export function AchievementModal({ achievement, onClose }) {
  if (!achievement) return null

  return (
    <div className="achievement-modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="achievement-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="achievement-modal-close" onClick={onClose}>
          Cerrar
        </button>
        <h3>{achievement.name}</h3>
        <p>{achievement.description}</p>
        <AchievementImage
          src={achievement.gif}
          alt={`${achievement.name} animado`}
          loading="eager"
          fallbackSrc={achievement.image}
        />
      </div>
    </div>
  )
}
