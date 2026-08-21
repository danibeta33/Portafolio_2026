import { useI18n } from '../../context/I18nContext'

export function ProfileSection({ profile }) {
  const { t } = useI18n()
  const bioParagraphs = profile.bio?.length
    ? profile.bio
    : [
        `Soy ${profile.name}, con enfoque multidisciplinario entre arte, desarrollo interactivo, narrativa visual y construccion de experiencias digitales.`,
      ]

  return (
    <section id="perfil" className="section-shell">
      <h2>{t('ui.sections.profile')}</h2>
      {profile.location ? <p className="profile-location">{`${t('ui.profile.location', {}, 'Ubicacion')}: ${profile.location}`}</p> : null}
      <div className="profile-text">
        {bioParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {profile.quote ? (
        <blockquote className="profile-quote">
          <p>{profile.quote}</p>
          {profile.quoteAuthor ? <cite>- {profile.quoteAuthor}</cite> : null}
        </blockquote>
      ) : null}
    </section>
  )
}
