import { Bubble } from '../ui/Bubble'
import { useI18n } from '../../context/I18nContext'

export function HeroSection({
  profile,
  isLightMode,
  heroColumns,
  currentHeroTheme,
  isNamePressed,
  heroAccentColor,
  heroAccentDark,
  onNameClick,
}) {
  const { t } = useI18n()

  return (
    <section id="inicio" className={`hero-section hero-theme-${currentHeroTheme}`}>
      <div className="hero-pattern" aria-hidden="true">
        {heroColumns.map((column, index) => (
          <pre key={`col-${index}`} className="hero-column">
            {column}
          </pre>
        ))}
        <div className="hero-sistemas-beta">
          <span>{t('ui.hero.systemsBeta')}</span>
        </div>
      </div>

      <div className="hero-content">
        <Bubble
          direction="bottom"
          bg={isLightMode ? 'white' : 'black'}
          textColor={isLightMode ? 'black' : 'white'}
          borderColor={isLightMode ? 'black' : 'white'}
        >
          {t('ui.hero.bubble')}
        </Bubble>
        <h1
          className="hero-title-text"
          onClick={onNameClick}
          style={{
            color: isNamePressed ? heroAccentDark : heroAccentColor,
            textShadow: `0 0 14px ${isNamePressed ? heroAccentDark : heroAccentColor}`,
          }}
        >
          {`<${profile.name} />`}
        </h1>
        <p className="hero-subtitle">{t('ui.hero.subtitle')}</p>
        <div className="roles-grid">
          {profile.roles.map((role) => (
            <span key={role} className="chip">
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
