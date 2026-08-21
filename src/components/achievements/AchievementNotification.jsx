import { AchievementImage } from './AchievementImage'
import { useI18n } from '../../context/I18nContext'

export function AchievementNotification({ notifications }) {
  const { t } = useI18n()

  return (
    <div className="achievement-notification-stack" aria-live="polite">
      {notifications.map((notification) => (
        <article key={notification.id} className="achievement-notification-card">
          <AchievementImage src={notification.image} alt={notification.title} loading="eager" />
          <div>
            <p className="achievement-notification-kicker">{t('ui.achievements.unlockKicker')}</p>
            <p className="achievement-notification-title">{notification.title}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
