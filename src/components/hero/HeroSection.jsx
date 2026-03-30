import { Bubble } from '../ui/Bubble'

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
  return (
    <section id="inicio" className={`hero-section hero-theme-${currentHeroTheme}`}>
      <div className="hero-pattern" aria-hidden="true">
        {heroColumns.map((column, index) => (
          <pre key={`col-${index}`} className="hero-column">
            {column}
          </pre>
        ))}
        <div className="hero-sistemas-beta">
          <span>SISTEMAS BETA</span>
        </div>
      </div>

      <div className="hero-content">
        <Bubble
          direction="bottom"
          bg={isLightMode ? 'white' : 'black'}
          textColor={isLightMode ? 'black' : 'white'}
          borderColor={isLightMode ? 'black' : 'white'}
        >
          Presioname para cambiar el color
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
        <p className="hero-subtitle">Portafolio profesional creativo</p>
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
