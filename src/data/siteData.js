export const PROFILE = {
  name: 'Daniel Felipe Betancourt Buitrago',
  location: 'Colombia',
  bio: [
    'Soy estudiante de Ingenieria en Diseno de Entretenimiento Digital, con enfoque en desarrollo de videojuegos, arte para esta industria y creacion de experiencias digitales en VR/AR.',
    'He participado en la creacion de multiples experiencias interactivas y en diversos eventos de desarrollo (game jams), donde, junto a mi equipo OP Studios, he adquirido experiencia en procesos colaborativos y produccion de videojuegos.',
    'Me especializo en la construccion de identidades visuales para videojuegos y en su implementacion dentro del motor Unity, convirtiendo conceptos en experiencias funcionales. He trabajado de manera experimental en el rol de Artista Tecnico, con el objetivo de seguir fortaleciendo mis habilidades y profundizar en la integracion entre arte, diseno y tecnologia dentro de motores de desarrollo.',
  ],
  quote:
    '"En mi tarjeta de presentacion, soy presidente de una corporacion. En mi mente, soy desarrollador de videojuegos. Pero en mi corazon, soy un jugador."',
  quoteAuthor: 'Satoru Iwata',
  roles: [
    'Tecnical Artist',
    'Desarrollador de videojuegos',
    'Editor de videos',
    'Ilustrador',
  ],
  email: 'danielfbetancourt33@gmail.com',
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export const HERO_THEME_ORDER = ['yellow', 'blue', 'red', 'green']

export const HERO_THEME_COLORS = {
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

export const HERO_PATTERN = `+--------------------------------------------------------------------------------+
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
+--------------------------------------------------------------------------------+`

export const PROJECT_CATEGORIES = [
  'Todos',
  'Proyectos Universitarios',
  'Proyectos Personales',
  'Ganadores',
  'Proyectos de Formacion',
]

export const SERVICES = [
  {
    title: 'Arte Tecnico en Videojuegos',
    description:
      'Desarrollo de flujos visuales optimizados, integracion artistica y soporte a equipos de arte para materializar la vision del proyecto.',
  },
  {
    title: 'Desarrollo de Gameplay',
    description:
      'Diseno e implementacion de mecanicas enfocadas en experiencias divertidas, junto con diseno de niveles.',
  },
  {
    title: 'Edicion de Video',
    description:
      'Montaje narrativo, ritmo visual y postproduccion para piezas promocionales y contenido digital.',
  },
  {
    title: 'Ilustracion',
    description:
      'Concept art e ilustracion digital (pixel art y vectorial) orientados a identidad visual, storytelling y presentacion de proyectos.',
  },
]

const BASE_URL = import.meta.env.BASE_URL || '/'
const withBase = (assetPath) => `${BASE_URL}${assetPath.replace(/^\//, '')}`

export const PROJECTS = [
  {
    id: 1,
    name: 'Perfect Tourist',
    shortDescription:
      'Con lo que tengas a la mano, deberas superar desafios, rebuscarte la plata y ahorrar juicioso para lograr el paseo de tu vida.',
    longDescription:
      'Juego desarrollado para la INTERACTION: GAME JAM DE VERANO, ganadores del primer puesto.\n\nEs un juego de retos rapidos donde tendras que improvisar porque... se te olvidaron las vacaciones. Con lo que tengas a la mano, deberas superar desafios, rebuscarte la plata y ahorrar juicioso para lograr el paseo de tu vida, demostrando que si se puede vacacionar bueno, bonito y barato.\nSumergite en ambientes de playa, sol y mar, con un flow bien vacacional, y preparate para convertir cualquier situacion en la oportunidad perfecta para viajar.',
    genre: 'Rompecabezas, Accion',
    itchLink: 'https://danibeta33.itch.io/perfect-tourist',
    categories: ['Proyectos Personales', 'Ganadores'],
    captures: [
      withBase('/imgs/PerfectTourist_Portada.jpeg'),
      withBase('/imgs/PerfectTourist_1.png'),
      withBase('/imgs/PerfectTourist_2.jpg'),
      withBase('/imgs/PerfectTourist_3.jpeg'),
      withBase('/imgs/PerfectTourist_4.jpeg'),
      withBase('/imgs/PerfectTourist_5.png'),
    ],
    trailer: 'https://www.youtube.com/watch?v=HcFZ8kX9dYc&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fdanibeta33.itch.io%2Fperfect-tourist',
    roles: ['Desarrollado con OP Studios', 'Artista Tecnico', 'Desarrollador', 'Game Designer'],
    expectations: '',
    learnings:
      'Desarrollo de herramientas internas (pipeline tools) orientadas a la optimizacion de flujos de trabajo. Creacion de contenido escalable, implementacion de sistemas de rigging y animaciones reutilizables. Trabajo colaborativo con el area creativa para fortalecer la produccion y coherencia del contenido.',
  },
  {
    id: 2,
    name: 'MasKeeper',
    shortDescription:
      'En MasKeeper, un golem ancestral encargado de proteger las mascaras que dan forma a la realidad.',
    longDescription:
      'Juego desarrollado para la GLOBAL GAME JAM 2026, ganadores del segundo puesto sede Antioquia.\nPresentado con su propio stand en la Feria de la Animacion 2026.\nEn MasKeeper, tomaras el rol del Mask Keeper, un golem ancestral encargado de proteger las mascaras que dan forma a la realidad.\nTras un largo letargo, despiertas para descubrir que el mundo ha sido fragmentado en multiples capas, luego de que casi todas las mascaras fueran robadas.',
    genre: 'Puzzle, Rompecabezas',
    itchLink: 'https://jsm269.itch.io/maskeeper',
    categories: ['Proyectos Personales', 'Ganadores'],
    captures: [
      withBase('/imgs/MasKeeper_Portada.jpeg'),
      withBase('/imgs/MasKeeper_1.png'),
      withBase('/imgs/MasKeeper_2.png'),
      withBase('/imgs/MasKeeper_3.png'),
      withBase('/imgs/MasKeeper_4.jpeg'),
      withBase('/imgs/MasKeeper_5.jpeg'),
      withBase('/imgs/MasKeeper_6.png'),
    ],
    trailer: 'https://www.youtube.com/watch?v=T999Y6quyLg',
    roles: ['Desarrollado con OP Studios', 'Artista 2D / Disenador Visual', 'Level Designer', 'Game Designer'],
    expectations: '',
    learnings:
      'Participacion en el diseno de personajes, entornos y direccion artistica general del videojuego, incluyendo efectos visuales como particulas. Desarrollo de un sistema visual modular y adaptable que permitio la creacion rapida de niveles dentro de un tiempo de produccion reducido. Enfoque en diseno de niveles y optimizacion de procesos creativos.',
  },
  {
    id: 3,
    name: 'Klondike Miner',
    shortDescription:
      'Proyecto enfocado en el aprendizaje del diseno de videojuegos, combinando elementos del genero roguelite con mecanicas inspiradas en el juego de mesa Klondike.',
    longDescription:
      'Proyecto enfocado en el aprendizaje del diseno de videojuegos, combinando elementos del genero roguelite con mecanicas inspiradas en el juego de mesa Klondike.\n\nPreparate para lanzar los dados y adentrarte en una experiencia donde el azar y la estrategia se combinan. Explora una mina ambientada en un casino lleno de materiales misteriosos, utilizando dados magicos que determinan tu progreso en cada partida.',
    genre: 'Roguelite, Dice',
    itchLink: 'https://danibeta33.itch.io/klondike-miner',
    categories: ['Proyectos Universitarios'],
    captures: [
      withBase('/imgs/KlondikeMiner_Portada.png'),
      withBase('/imgs/KlondikeMiner_1.png'),
      withBase('/imgs/KlondikeMiner_2.png'),
      withBase('/imgs/KlondikeMiner_3.png'),
      withBase('/imgs/KlondikeMiner_4.png'),
    ],
    trailer: '',
    roles: ['Pixel Artist', 'Game Designer', 'Desarrollador'],
    expectations: '',
    learnings:
      'Desarrollo completo del apartado visual en pixel art, enfocado en construir una identidad coherente con la tematica minera y roguelite. Exploracion de sistemas de progresion, repetibilidad y diseno de mecanicas basadas en el azar.',
  },
  {
    id: 4,
    name: 'The White Square Simulator: Clicker',
    shortDescription:
      'Experiencia clicker disenada para generar una progresion constante y satisfactoria mediante sistemas matematicos precisos.',
    longDescription:
      'Experiencia clicker disenada para generar una progresion constante y satisfactoria mediante sistemas matematicos precisos. El jugador asume el rol de gerente de una tienda, optimizando procesos, gestionando pedidos y expandiendo su negocio.',
    genre: 'Clicker',
    itchLink: 'https://danibeta33.itch.io/ws-clicker',
    categories: ['Proyectos Universitarios'],
    captures: [
      withBase('/imgs/Clicker_Portada.png'),
      withBase('/imgs/Clicker_1.png'),
      withBase('/imgs/Clicker_2.png'),
    ],
    trailer: '',
    roles: ['Desarrollador', 'Game Designer', 'UI/UX Designer', 'Artista'],
    expectations: '',
    learnings:
      'Desarrollo integral del proyecto de forma individual, abarcando arte y programacion. Enfoque en el balance de sistemas, diseno de progresion, economia del juego y curvas de dificultad. Exploracion de mecanicas de optimizacion y retencion del jugador.',
  },
  {
    id: 5,
    name: 'Las Sombras de la Mente',
    shortDescription:
      'Videojuego de terror psicologico y puzzles en 2D con perspectiva top-down ambientado en la ciudad de Amarys.',
    longDescription:
      'Videojuego de terror psicologico y puzzles en 2D con perspectiva top-down. Ambientado en la ciudad de Amarys, donde un virus transforma a personas con trastornos mentales en criaturas hostiles. El jugador explora un hospital mientras enfrenta desafios narrativos y cognitivos.',
    genre: 'Puzzle, Terror',
    itchLink: 'https://danibeta33.itch.io/ws-clicker',
    categories: ['Proyectos Universitarios'],
    captures: [
      withBase('/imgs/Sombras_Portada.png'),
      withBase('/imgs/Sombras_1.png'),
      withBase('/imgs/Sombras_2.jpeg'),
      withBase('/imgs/Sombras_3.jpeg'),
      withBase('/imgs/Sombras_4.png'),
      withBase('/imgs/Sombras_5.jpeg'),
    ],
    trailer: '',
    roles: ['Artista 2D', 'Disenador de Juego', 'Disenador Narrativo'],
    expectations: '',
    learnings:
      'Primer proyecto de desarrollo de videojuegos, enfocado en la experimentacion con herramientas, trabajo en equipo y construccion de una experiencia completa. Participacion en la creacion artistica y conceptual del juego.',
  },
  {
    id: 6,
    name: 'Desparcha 2-3-4',
    shortDescription:
      'Experiencia multijugador local para 2 a 4 jugadores que rescata juegos tradicionales colombianos como canicas, la lleva, carrera de sacos y tejo.',
    longDescription:
      'Experiencia multijugador local para 2 a 4 jugadores que rescata juegos tradicionales colombianos como canicas, la lleva, carrera de sacos y tejo. Cada minijuego propone dinamicas rapidas que combinan habilidad, reflejos y estrategia, integrando elementos culturales en su identidad visual.\nDesarrollado por The Lost Kids Studio x OP Studios, fue reconocido en el DEX Showcase 2025-02 con los premios a Creatividad en Gameplay y Mejor Videojuego del Semestre.',
    genre: 'Puzzle, Minijuegos',
    itchLink: 'https://jacobo1304.itch.io/desparcha234',
    categories: ['Proyectos Universitarios', 'Ganadores'],
    captures: [
      withBase('/imgs/Des_Portada.png'),
      withBase('/imgs/Des_1.png'),
      withBase('/imgs/Des_2.png'),
      withBase('/imgs/Des_3.png'),
      withBase('/imgs/Des_4.png'),
      withBase('/imgs/Des_5.png'),
    ],
    trailer: '',
    roles: ['Artista 2D (Vectorial)', 'Game Designer', 'Disenador de Mecanicas', 'Disenador de UI'],
    expectations: '',
    learnings:
      'Desarrollo de un producto con enfoque en calidad y coherencia cultural. Encargado del diseno visual completo en formato vectorial (personajes, iconos, escenarios) y del diseno de jugabilidad de los minijuegos. Integracion de estetica colombiana con mecanicas claras y accesibles para multijugador local.',
  },
  {
    id: 7,
    name: 'Canal de Edicion de Video',
    shortDescription:
      'Canal que reune proyectos de edicion de video en ambitos educativo, personal y profesional, mostrando evolucion tecnica y creativa.',
    longDescription:
      'Este canal reune una variedad de proyectos que reflejan mi experiencia en la edicion de video en distintos ambitos: educativo, personal y profesional. A lo largo del tiempo, he desarrollado mis habilidades de manera constante, explorando multiples formatos y estilos para mejorar la calidad de cada resultado.\nAqui se presentan tanto productos finales como procesos de edicion, lo que permite evidenciar mi evolucion y el enfoque creativo detras de cada proyecto. Ademas, he aprendido a adaptarme a diferentes herramientas, incluso bajo limitaciones tecnicas (versiones o planes), optimizando sus recursos para lograr resultados solidos y funcionales.',
    genre: 'Videos',
    itchLink: 'https://www.youtube.com/@saldeaqui33/videos',
    primaryLinkLabel: 'Canal de Youtube',
    categories: ['Proyectos de Formacion'],
    captures: [
      withBase('/imgs/Falta_Portada.png'),
      'https://img.youtube.com/vi/bLU37bVLafE/hqdefault.jpg',
      'https://img.youtube.com/vi/olqNA_G5vYQ/hqdefault.jpg',
      'https://img.youtube.com/vi/VIPJtVqPYa4/hqdefault.jpg',
      'https://img.youtube.com/vi/-g0WYGpjXlE/hqdefault.jpg',
    ],
    captureLinks: [
      'https://www.youtube.com/@saldeaqui33/videos',
      'https://www.youtube.com/watch?v=bLU37bVLafE',
      'https://www.youtube.com/watch?v=olqNA_G5vYQ&t=38s',
      'https://www.youtube.com/watch?v=VIPJtVqPYa4',
      'https://www.youtube.com/watch?v=-g0WYGpjXlE',
    ],
    trailer: '',
    roles: ['Editor de Video', 'Disenador Audiovisual', 'Creador de Contenido'],
    tools: [
      'Adobe Premiere Pro - Nivel medio (en constante aprendizaje)',
      'Camtasia - Nivel alto',
      'CapCut - Nivel alto',
      'Vegas Pro - Nivel medio',
      'Adobe After Effects - Nivel basico (en aprendizaje)',
    ],
    expectations: '',
    learnings:
      'Desarrollo de narrativa audiovisual, manejo del ritmo visual, adaptacion a diferentes formatos de contenido y optimizacion de recursos tecnicos en herramientas de edicion.',
  },
  {
    id: 8,
    name: 'Plataforma Web de Orientacion Vocacional',
    shortDescription:
      'Plataforma web para orientacion vocacional con enfoque en experiencia de usuario, escalabilidad y buenas practicas de desarrollo frontend.',
    longDescription:
      'Plataforma web desarrollada con el objetivo de aplicar y consolidar buenas practicas de diseno y desarrollo en entornos digitales, integrando tecnologias modernas como React, Tailwind CSS y Vite. El proyecto se centra en la creacion de interfaces intuitivas, eficientes y adaptables a distintos dispositivos, priorizando la experiencia del usuario y la escalabilidad.\nMas alla de su enfoque tecnico, la plataforma aborda una problematica relevante: la falta de orientacion vocacional en jovenes que deben elegir una carrera profesional. La propuesta busca ofrecer un entorno digital que facilite la identificacion de habilidades, intereses y posibles caminos profesionales, combinando tecnologia con impacto social.',
    genre: 'Pagina web',
    itchLink: 'https://www.youtube.com/@saldeaqui33/videos',
    primaryLinkLabel: 'Pagina Web',
    categories: ['Proyectos Universitarios'],
    captures: [
      withBase('/imgs/Diseño_Portada.png'),
      withBase('/imgs/Diseño_1.png'),
      withBase('/imgs/Diseño_2.png'),
      withBase('/imgs/Diseño_3.png'),
      withBase('/imgs/Diseño_4.png'),
    ],
    trailer: '',
    roles: ['Frontend Developer', 'Disenador UI/UX', 'Desarrollador Web'],
    tools: ['React', 'Vite', 'Tailwind CSS', 'Figma', 'Herramientas de IA aplicadas al desarrollo'],
    expectations: '',
    learnings:
      'Desarrollo de aplicaciones web responsivas, integracion de tecnologias modernas (React, Vite, Tailwind), implementacion de buenas practicas de UI/UX y uso de herramientas de IA como apoyo en el desarrollo.',
  },
  {
    id: 9,
    name: 'Ilustraciones',
    isIllustrationsGame: true,
    shortDescription:
      'Coleccion de ilustraciones enfocadas en personajes, identidad visual y recursos graficos para experiencias interactivas.',
    longDescription:
      'Coleccion de ilustraciones desarrolladas a lo largo de mi proceso universitario, enfocadas en diseno de personajes, construccion de identidades visuales y desarrollo de elementos graficos para experiencias interactivas. Incluye trabajos de concept art, storytelling visual, storyboard y recursos utilizados en la produccion de videojuegos.\nEl espacio tambien incorpora una propuesta interactiva donde el usuario puede explorar los contenidos de manera dinamica, reforzando la presentacion visual del portafolio.',
    genre: 'Arcade, Interactivo',
    itchLink: '',
    categories: ['Proyectos Personales', 'Proyectos de Formacion'],
    captures: [
      withBase('/imgs/Minijuego/minijuego3.png'),
      withBase('/imgs/Minijuego/minijuego14.png'),
      withBase('/imgs/Minijuego/minijuego24.jpg'),
    ],
    trailer: '',
    roles: ['Ilustrador', 'Concept Artist', 'Disenador Visual'],
    tools: ['Krita', 'Adobe Photoshop', 'Aseprite', 'Tecnicas de ilustracion tradicional (analoga)'],
    expectations: '',
    learnings:
      'Desarrollo de habilidades en ilustracion digital, construccion de identidad visual, exploracion de estilos graficos y uso de recursos tanto digitales como tradicionales para la creacion artistica.',
  },
]
