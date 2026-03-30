import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
  { label: 'Proyectos', href: '#proyectos' },
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
    name: 'Template Project 01',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    genre: 'Aventura narrativa',
    itchLink: 'https://example.itch.io/template-project-01',
    categories: ['Proyectos Universitarios'],
    captures: [TEMPLATE_IMAGE, TEMPLATE_IMAGE, TEMPLATE_IMAGE],
    trailer: 'https://www.youtube.com/watch?v=template01',
    expectations:
      'Construir una experiencia jugable estable, con identidad visual clara y una presentacion lista para entrega.',
    learnings:
      'Aprendizaje template sobre pipeline, organizacion de tareas y optimizacion de tiempos de produccion.',
  },
  {
    id: 2,
    name: 'Template Project 02',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    genre: 'Puzzle 2D',
    itchLink: 'https://example.itch.io/template-project-02',
    categories: ['Proyectos Personales'],
    captures: [TEMPLATE_IMAGE, TEMPLATE_IMAGE, TEMPLATE_IMAGE],
    trailer: 'https://www.youtube.com/watch?v=template02',
    expectations:
      'Consolidar mecanicas comprensibles y una curva de dificultad progresiva para mejorar la experiencia.',
    learnings:
      'Aprendizaje template en diseno de niveles, balance de sistemas y depuracion de eventos.',
  },
  {
    id: 3,
    name: 'Template Project 03',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    genre: 'Accion arcade',
    itchLink: 'https://example.itch.io/template-project-03',
    categories: ['Ganadores'],
    captures: [TEMPLATE_IMAGE, TEMPLATE_IMAGE, TEMPLATE_IMAGE],
    trailer: 'https://www.youtube.com/watch?v=template03',
    expectations:
      'Lograr una build pulida para convocatoria con rendimiento estable y una identidad audiovisual fuerte.',
    learnings:
      'Aprendizaje template en testing, iteracion rapida y documentacion para jurados y usuarios.',
  },
  {
    id: 4,
    name: 'Template Project 04',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    genre: 'Simulacion',
    itchLink: 'https://example.itch.io/template-project-04',
    categories: ['Proyectos de Formacion'],
    captures: [TEMPLATE_IMAGE, TEMPLATE_IMAGE, TEMPLATE_IMAGE],
    trailer: 'https://www.youtube.com/watch?v=template04',
    expectations:
      'Desarrollar una entrega academica robusta con tecnicas visuales y gameplay alineado al brief.',
    learnings:
      'Aprendizaje template en integracion entre arte tecnico, scripting y presentacion final.',
  },
  {
    id: 5,
    name: 'Template Project 05',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    genre: 'RPG tactico',
    itchLink: 'https://example.itch.io/template-project-05',
    categories: ['Proyectos Universitarios', 'Ganadores'],
    captures: [TEMPLATE_IMAGE, TEMPLATE_IMAGE, TEMPLATE_IMAGE],
    trailer: 'https://www.youtube.com/watch?v=template05',
    expectations:
      'Crear una demo vertical slice que comunique el potencial total del proyecto para concurso o vitrina.',
    learnings:
      'Aprendizaje template en planificacion de milestones, UI diegetica y optimizacion de flujo.',
  },
  {
    id: 6,
    name: 'Template Project 06',
    description:
      'Descripcion template para este bloque. Puedes reemplazarla por detalles del objetivo, proceso y resultado.',
    genre: 'Plataformas',
    itchLink: 'https://example.itch.io/template-project-06',
    categories: ['Proyectos Personales', 'Proyectos de Formacion'],
    captures: [TEMPLATE_IMAGE, TEMPLATE_IMAGE, TEMPLATE_IMAGE],
    trailer: 'https://www.youtube.com/watch?v=template06',
    expectations:
      'Mejorar sensaciones de control, feedback visual y coherencia artistica para una experiencia solida.',
    learnings:
      'Aprendizaje template sobre ajustes finos de jugabilidad y consistencia visual entre escenas.',
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

function GamePage({ project, profileName, currentHeroTheme, onBack }) {
  return (
    <main className={`game-page hero-theme-${currentHeroTheme}`}>
      <section className="section-shell game-shell">
        <div className="game-topbar">
          <Button bg="black" textColor="white" borderColor="white" shadow="white" onClick={onBack}>
            Volver a Inicio
          </Button>
        </div>
        <article className="game-article">
          <header className="game-header">
            <p className="game-author">{profileName}</p>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </header>

          <div className="game-grid-info">
            <div className="game-info-box">
              <p className="project-meta-title">Genero</p>
              <p>{project.genre}</p>
            </div>
            <div className="game-info-box">
              <p className="project-meta-title">Categorias</p>
              <div className="project-tags">
                {project.categories.map((category) => (
                  <span key={`${project.id}-${category}`} className="project-tag">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-link-wrap">
            <a className="project-link" href={project.itchLink} target="_blank" rel="noreferrer">
              Ir a Itch
            </a>
            <a className="project-link" href={project.trailer} target="_blank" rel="noreferrer">
              Ver Trailer
            </a>
          </div>

          <section className="project-captures">
            <p className="project-meta-title">Capturas</p>
            <div className="captures-grid">
              {project.captures.map((capture, index) => (
                <img
                  key={`${project.id}-game-capture-${index}`}
                  className="capture-item"
                  src={capture}
                  alt={`${project.name} captura ${index + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="game-grid-info">
            <div className="game-info-box">
              <p className="project-meta-title">Expectativas</p>
              <p>{project.expectations}</p>
            </div>
            <div className="game-info-box">
              <p className="project-meta-title">Aprendizajes</p>
              <p>{project.learnings}</p>
            </div>
          </section>
        </article>
      </section>
    </main>
  )
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
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
  const isDetailedProjectsView = selectedCategory !== 'Todos'
  const activeProject = useMemo(() => {
    const gameMatch = location.pathname.match(/^\/game\/(\d+)$/)
    if (!gameMatch) return null
    const id = Number(gameMatch[1])
    return PROJECT_BLOCKS.find((project) => project.id === id) ?? null
  }, [location.pathname])
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

  const scrollTopHard = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  const handleHomeNavigation = (event) => {
    if (event) event.preventDefault()
    navigate('/')
    requestAnimationFrame(scrollTopHard)
  }

  const handleSectionNavigation = (event, href) => {
    event.preventDefault()
    if (href === '#inicio') {
      handleHomeNavigation()
      return
    }
    const sectionId = href.replace('#', '')
    navigate('/')
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }, 0)
  }

  const handleOpenProject = (projectId) => {
    navigate(`/game/${projectId}`)
    requestAnimationFrame(scrollTopHard)
  }

  useEffect(() => {
    if (location.pathname.startsWith('/game/')) {
      scrollTopHard()
    }
  }, [location.pathname])

  if (location.pathname.startsWith('/game/')) {
    return (
      <div className={`app-shell ${isLightMode ? 'app-shell-light' : 'app-shell-dark'}`}>
        <header className="site-header">
          <nav className="nav-shell">
            <a
              className={`logo-tag ${scrolled ? 'logo-tag-scrolled' : ''}`}
              href="/"
              onClick={handleHomeNavigation}
            >
              DANIEL
            </a>
            <div className="nav-side">
              <div className="nav-links">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleSectionNavigation(event, link.href)}
                  >
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

        {activeProject ? (
          <GamePage
            project={activeProject}
            profileName={PROFILE.name}
            currentHeroTheme={currentHeroTheme}
            onBack={handleHomeNavigation}
          />
        ) : (
          <main className={`game-page hero-theme-${currentHeroTheme}`}>
            <section className="section-shell game-shell">
              <article className="game-article">
                <h1>Proyecto no encontrado</h1>
                <p>La ruta no coincide con un proyecto registrado.</p>
                <div className="project-action-wrap">
                  <Button bg="black" textColor="white" borderColor="white" shadow="white" onClick={handleHomeNavigation}>
                    Volver a Inicio
                  </Button>
                </div>
              </article>
            </section>
          </main>
        )}
      </div>
    )
  }

  return (
    <div className={`app-shell ${isLightMode ? 'app-shell-light' : 'app-shell-dark'}`}>
      <header className="site-header">
        <nav className="nav-shell">
          <a
            className={`logo-tag ${scrolled ? 'logo-tag-scrolled' : ''}`}
            href="/"
            onClick={handleHomeNavigation}
          >
            DANIEL
          </a>
          <div className="nav-side">
            <div className="nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={(event) => handleSectionNavigation(event, link.href)}>
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
          <div className={`project-grid ${isDetailedProjectsView ? 'project-grid-detailed' : 'project-grid-compact'}`}>
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-body">
                  <h3>{project.name}</h3>

                  {!isDetailedProjectsView && (
                    <>
                      <img className="project-thumb" src={project.captures[0]} alt={project.name} />
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.categories.map((category) => (
                          <span key={`${project.id}-${category}`} className="project-tag">
                            {category}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {isDetailedProjectsView && (
                    <>
                      <div className="project-meta-line">
                        <span className="project-meta-label">Genero:</span>
                        <span>{project.genre}</span>
                      </div>
                      <p>{project.description}</p>
                      <div className="project-link-wrap">
                        <a className="project-link" href={project.itchLink} target="_blank" rel="noreferrer">
                          Itch Link
                        </a>
                        <a className="project-link" href={project.trailer} target="_blank" rel="noreferrer">
                          Trailer
                        </a>
                      </div>
                      <div className="project-tags">
                        {project.categories.map((category) => (
                          <span key={`${project.id}-${category}`} className="project-tag">
                            {category}
                          </span>
                        ))}
                      </div>
                      <div className="project-captures">
                        <p className="project-meta-title">Capturas</p>
                        <div className="captures-grid">
                          {project.captures.map((capture, index) => (
                            <img
                              key={`${project.id}-capture-${index}`}
                              className="capture-item"
                              src={capture}
                              alt={`${project.name} captura ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="project-action-wrap">
                        <Button
                          bg={isLightMode ? '#ffffff' : '#000000'}
                          textColor={isLightMode ? '#000000' : '#ffffff'}
                          borderColor={heroAccentColor}
                          shadow={heroAccentColor}
                          onClick={() => handleOpenProject(project.id)}
                        >
                          Ver proyecto
                        </Button>
                      </div>
                    </>
                  )}
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
