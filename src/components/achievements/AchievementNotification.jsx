import { AchievementImage } from './AchievementImage'

export function AchievementNotification({ notifications }) {
  return (
    <div className="achievement-notification-stack" aria-live="polite">
      {notifications.map((notification) => (
        <article key={notification.id} className="achievement-notification-card">
          <AchievementImage src={notification.image} alt={notification.title} loading="eager" />
          <div>
            <p className="achievement-notification-kicker">Logro Desbloqueado</p>
            <p className="achievement-notification-title">{notification.title}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
