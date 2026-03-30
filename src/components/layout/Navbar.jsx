export function Navbar({
  links,
  scrolled,
  isLightMode,
  onToggleMode,
  onLogoClick,
  onNavClick,
  showLinks = true,
}) {
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
          <label className="mode-switch" aria-label="Cambiar modo claro u oscuro">
            <input type="checkbox" checked={isLightMode} onChange={(event) => onToggleMode(event.target.checked)} />
            <span className="mode-switch-slider" />
            <span className="mode-switch-text">{isLightMode ? 'Light' : 'Dark'}</span>
          </label>
        </div>
      </nav>
    </header>
  )
}
