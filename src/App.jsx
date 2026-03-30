import { useEffect, useMemo, useState } from 'react'
import './index.css'

const PROFILE = {
  name: 'Daniel Felipe Betancourt Buitrago',
  roles: [
    'Tecnical Artist',
    'Desarrollador de videojuegos',
    'Editor de videos',
    'Ilustrador',
  ],
  email: 'danielfbetancourt33@gmail.com',
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Bloques', href: '#bloques' },
  { label: 'Contacto', href: '#contacto' },
]

const TEMPLATE_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"%3E%3Crect width="640" height="360" fill="%23070707"/%3E%3Crect x="18" y="18" width="604" height="324" fill="none" stroke="%23f0f0f0" stroke-opacity="0.45" stroke-dasharray="12 8"/%3E%3Ctext x="50%25" y="46%25" fill="%23f0f0f0" fill-opacity="0.75" font-size="28" text-anchor="middle" font-family="monospace"%3ETemplate Image%3C/text%3E%3Ctext x="50%25" y="58%25" fill="%23f0f0f0" fill-opacity="0.55" font-size="16" text-anchor="middle" font-family="monospace"%3EPreview Placeholder%3C/text%3E%3C/svg%3E'

const PROJECT_CATEGORIES = [
  'Todos',
  'Proyectos Universitarios',
  'Proyectos Personales',
  'Ganadores',
  'Proyectos de Formacion',
]

const PROJECT_BLOCKS = [
  {
    id: 1,
    title: 'Template Project 01',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    image: TEMPLATE_IMAGE,
    categories: ['Proyectos Universitarios'],
  },
  {
    id: 2,
    title: 'Template Project 02',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    image: TEMPLATE_IMAGE,
    categories: ['Proyectos Personales'],
  },
  {
    id: 3,
    title: 'Template Project 03',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    image: TEMPLATE_IMAGE,
    categories: ['Ganadores'],
  },
  {
    id: 4,
    title: 'Template Project 04',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    image: TEMPLATE_IMAGE,
    categories: ['Proyectos de Formacion'],
  },
  {
    id: 5,
    title: 'Template Project 05',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    image: TEMPLATE_IMAGE,
    categories: ['Proyectos Universitarios', 'Ganadores'],
  },
  {
    id: 6,
    title: 'Template Project 06',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    image: TEMPLATE_IMAGE,
    categories: ['Proyectos Personales', 'Proyectos de Formacion'],
  },
]

const SERVICES = [
  {
    title: 'Arte tecnico para videojuegos',
    description:
      'Flujos visuales optimizados, integracion artistica y soporte para pipelines de produccion interactiva.',
  },
  {
    title: 'Desarrollo de gameplay',
    description:
      'Prototipos y mecanicas funcionales con enfoque en jugabilidad, rendimiento y claridad de sistemas.',
  },
  {
    title: 'Edicion de video',
    description:
      'Montaje narrativo, ritmo visual y postproduccion para piezas promocionales o contenido digital.',
  },
  {
    title: 'Ilustracion',
    description:
      'Concept art e ilustracion digital para identidad visual, storytelling y presentaciones de proyectos.',
  },
]

const HERO_THEME_COLORS = {
  dark: {
    yellow: { main: '#c7e85f', neonDark: '#9db447' },
    blue: { main: '#4dd4e0', neonDark: '#2eaab6' },
    red: { main: '#ea5b5b', neonDark: '#be3e3e' },
    green: { main: '#58d470', neonDark: '#36a74c' },
  },
  light: {
    yellow: { main: '#8f9d20', neonDark: '#6f7b15' },
    blue: { main: '#007f94', neonDark: '#005c6b' },
    red: { main: '#b23838', neonDark: '#842626' },
    green: { main: '#1c8d35', neonDark: '#126824' },
  },
}

function Button({
  bg = 'black',
  textColor = 'white',
  borderColor = 'white',
  shadow = 'white',
  className = '',
  type = 'button',
  onClick,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`themed-button ${className}`.trim()}
      style={{
        '--btn-bg': bg,
        '--btn-text': textColor,
        '--btn-border': borderColor,
        '--btn-shadow': shadow,
      }}
    >
      {children}
    </button>
  )
}

function Bubble({ direction = 'left', bg = 'black', textColor = 'white', borderColor = 'white', children }) {
  return (
    <div
      className={`speech-bubble speech-bubble-${direction}`}
      style={{
        backgroundColor: bg,
        color: textColor,
        borderColor,
        '--bubble-bg': bg,
        '--bubble-border': borderColor,
      }}
    >
      {children}
    </div>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [themeIndex, setThemeIndex] = useState(0)
  const [isLightMode, setIsLightMode] = useState(false)
  const [isNamePressed, setIsNamePressed] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const year = useMemo(() => new Date().getFullYear(), [])
  const heroThemes = useMemo(() => ['yellow', 'blue', 'red', 'green'], [])
  const currentHeroTheme = heroThemes[themeIndex]
  const paletteMode = isLightMode ? 'light' : 'dark'
  const heroPalette = HERO_THEME_COLORS[paletteMode][currentHeroTheme]
  const heroAccentColor = heroPalette.main
  const heroAccentDark = heroPalette.neonDark
  const heroPattern = useMemo(
    () =>
      `+--------------------------------------------------------------------------------+
| [BOOT] Initializing Unity Engine...                                            |
| [BOOT] Loading Blender modules...                                               |
| [BOOT] Starting Photoshop rendering engine...                                   |
| [BOOT] Launching Aseprite pixel editor...                                       |
| [BOOT] Connecting to Adobe After Effects pipeline...                            |
| [BOOT] Booting Krita workspace...                                               |
| [BOOT] Linking Premiere Pro timeline cache...                                   |
| [BOOT] Syncing Camtasia recorder channels...                                    |
| [BOOT] Verifying Vegas Pro compositing nodes...                                 |
| [BOOT] Checking Excel production sheets...                                      |
|--------------------------------------------------------------------------------|
| // Unity runtime                                                               |
| ParticleSystem fx = GetComponent<ParticleSystem>();                            |
| Rigidbody rb = GetComponent<Rigidbody>();                                       |
| Transform tr = transform;                                                       |
| Debug.Log("Unity: " + tr.position);                                            |
| if (rb != null) { rb.linearVelocity = new Vector3(0f, 2f, 0f); }               |
|--------------------------------------------------------------------------------|
| // Pipeline operations                                                         |
| const engine = "creative-pipeline";                                            |
| function renderFrame(step) {                                                   |
|   console.log("Render step", step);                                            |
|   return step * 1.618;                                                         |
| }                                                                              |
| let status = "ONLINE";                                                         |
|--------------------------------------------------------------------------------|
| [SYS] Krita brushes loaded                                                     |
| [SYS] Aseprite spritesheets indexed                                            |
| [SYS] Unity shaders compiled                                                   |
| [SYS] Blender geometry nodes ready                                             |
| [SYS] Photoshop smart objects linked                                           |
| [SYS] After Effects compositions cached                                        |
| [SYS] Premiere proxies connected                                               |
| [SYS] Camtasia capture profile active                                          |
| [SYS] Vegas timeline stabilized                                                |
| [SYS] System Status: ONLINE                                                    |
| [SYS] All creative modules loaded successfully                                 |
| [SYS] Sistemas BETA ready                                                      |
+--------------------------------------------------------------------------------+`,
    [],
  )
  const heroColumns = useMemo(() => {
    const filledColumn = Array.from({ length: 4 }, () => heroPattern).join('\n')
    return [filledColumn, filledColumn, filledColumn]
  }, [heroPattern])
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Todos') return PROJECT_BLOCKS
    return PROJECT_BLOCKS.filter((project) => project.categories.includes(selectedCategory))
  }, [selectedCategory])
  const categoryCounts = useMemo(
    () =>
      PROJECT_CATEGORIES.map((category) => ({
        category,
        count:
          category === 'Todos'
            ? PROJECT_BLOCKS.length
            : PROJECT_BLOCKS.filter((project) => project.categories.includes(category)).length,
      })),
    [],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode)
    return () => document.body.classList.remove('light-mode')
  }, [isLightMode])

  useEffect(() => {
    if (!isNamePressed) return undefined
    const timer = window.setTimeout(() => setIsNamePressed(false), 260)
    return () => window.clearTimeout(timer)
  }, [isNamePressed])

  const handleNameClick = () => {
    setThemeIndex((prev) => (prev + 1) % heroThemes.length)
    setIsNamePressed(true)
  }

  return (
    <div className={`app-shell ${isLightMode ? 'app-shell-light' : 'app-shell-dark'}`}>
      <header className="site-header">
        <nav className="nav-shell">
          <a className={`logo-tag ${scrolled ? 'logo-tag-scrolled' : ''}`} href="#inicio">
            DANIEL
          </a>
          <div className="nav-side">
            <div className="nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <label className="mode-switch" aria-label="Cambiar modo claro u oscuro">
              <input
                type="checkbox"
                checked={isLightMode}
                onChange={(event) => setIsLightMode(event.target.checked)}
              />
              <span className="mode-switch-slider" />
              <span className="mode-switch-text">{isLightMode ? 'Light' : 'Dark'}</span>
            </label>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className={`hero-section hero-theme-${currentHeroTheme}`}>
          <div className="hero-pattern" aria-hidden="true">
            {heroColumns.map((column, index) => (
              <pre key={index} className="hero-column">
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
              onClick={handleNameClick}
              style={{
                color: isNamePressed ? heroAccentDark : heroAccentColor,
                textShadow: `0 0 14px ${isNamePressed ? heroAccentDark : heroAccentColor}`,
              }}
            >
              {`<${PROFILE.name} />`}
            </h1>
            <p className="hero-subtitle">Portafolio profesional creativo</p>
            <div className="roles-grid">
              {PROFILE.roles.map((role) => (
                <span key={role} className="chip">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="perfil" className="section-shell">
          <h2>{'<Perfil />'}</h2>
          <p>
            Soy {PROFILE.name}, con enfoque multidisciplinario entre arte, desarrollo interactivo,
            narrativa visual y construccion de experiencias digitales.
          </p>
        </section>

        <section id="servicios" className="section-shell">
          <h2>{'<Servicios />'}</h2>
          <div className="cards-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="terminal-card">
                <div className="terminal-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="terminal-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className={`section-shell projects-shell hero-theme-${currentHeroTheme}`}>
          <h2>{'<Proyectos />'}</h2>
          <p>
            Proyectos filtrables por categoria para mostrar proyectos con imagen, descripcion y etiquetas.
          </p>
          <div className="category-row" role="tablist" aria-label="Categorias de bloques">
            {categoryCounts.map(({ category, count }) => (
              <Button
                key={category}
                bg={isLightMode ? '#ffffff' : '#000000'}
                textColor={isLightMode ? '#000000' : '#ffffff'}
                borderColor={heroAccentColor}
                shadow={heroAccentColor}
                className={`category-button ${selectedCategory === category ? 'category-button-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {`${category} (${count})`}
              </Button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <img className="project-image" src={project.image} alt={project.title} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.categories.map((category) => (
                      <span key={`${project.id}-${category}`} className="project-tag">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="section-shell contact-shell">
          <h2>{'<Contacto />'}</h2>
          <p>Disponible para colaboraciones, proyectos y oportunidades.</p>
          <a className="email-link" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </section>
      </main>

      <footer className="site-footer">{`© ${year} ${PROFILE.name}. All rights reserved.`}</footer>
    </div>
  )
}

export default App
