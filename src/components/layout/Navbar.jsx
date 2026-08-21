import { useI18n } from '../../context/I18nContext'

export function Navbar({
  links,
  scrolled,
  isLightMode,
  onToggleMode,
  isEnglish,
  onToggleLocale,
  onLogoClick,
  onNavClick,
  showLinks = true,
}) {
  const { t } = useI18n()

  return (
    <header className="site-header">
      <nav className="nav-shell">
        <a className={`logo-tag ${scrolled ? 'logo-tag-scrolled' : ''}`} href="/" onClick={onLogoClick}>
          DANIEL
        </a>
        <div className="nav-side">
          {showLinks && (
            <div className="nav-links">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={(event) => onNavClick(event, link.href)}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <div className="switch-cluster">
            <label className="mode-switch" aria-label={t('ui.navbar.themeAria')}>
              <input type="checkbox" checked={isLightMode} onChange={(event) => onToggleMode(event.target.checked)} />
              <span className="mode-switch-slider" />
              <span className="mode-switch-text">{isLightMode ? t('ui.navbar.themeLight') : t('ui.navbar.themeDark')}</span>
            </label>
            <label className="mode-switch" aria-label={t('ui.navbar.languageAria')}>
              <input type="checkbox" checked={isEnglish} onChange={(event) => onToggleLocale(event.target.checked)} />
              <span className="mode-switch-slider" />
              <span className="mode-switch-text">{isEnglish ? t('ui.navbar.languageEn') : t('ui.navbar.languageEs')}</span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  )
}
