import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

export function MainLayout({
  children,
  links,
  scrolled,
  isLightMode,
  onToggleMode,
  onLogoClick,
  onNavClick,
  year,
  profileName,
  showLinks = true,
}) {
  return (
    <div className={`app-shell ${isLightMode ? 'app-shell-light' : 'app-shell-dark'}`}>
      <Navbar
        links={links}
        scrolled={scrolled}
        isLightMode={isLightMode}
        onToggleMode={onToggleMode}
        onLogoClick={onLogoClick}
        onNavClick={onNavClick}
        showLinks={showLinks}
      />
      {children}
      <Footer year={year} name={profileName} />
    </div>
  )
}
