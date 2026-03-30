export const PROFILE = {
  name: 'Daniel Felipe Betancourt Buitrago',
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
    expectations: '',
    learnings: '',
  },
  {
    id: 2,
    name: 'MasKeeper',
    shortDescription:
      'En MasKeeper, un golem ancestral encargado de proteger las mascaras que dan forma a la realidad.',
    longDescription:
      'Juego desarrollado para la GLOBAL GAME JAM 2026, ganadores del segundo puesto sede Antioquia.\nPresentado con su propio stand en la Feria de la Animacion 2026.\nEn MasKeeper, tomaras el rol del Mask Keeper, un golem ancestral encargado de proteger las mascaras que dan forma a la realidad.\nTras un largo letargo, despiertas para descubrir que el mundo ha sido fragmentado en multiples capas, luego de que casi todas las mascaras fueran robadas.',
    genre: 'Puzzle, Rompecabezas',
    itchLink: 'https://danibeta33.itch.io/perfect-tourist',
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
    expectations: '',
    learnings: '',
  },
  {
    id: 3,
    name: 'Klondike Miner',
    shortDescription:
      'Preparate para lanzar los dados y dejarte llevar por una avalancha de partidas mientras ves girar tu destino.',
    longDescription:
      'Juego desarrollado con el proposito de mejorar en el entendimiento del diseno de juego, usando como fin usar el genero RogueLite y el juego de mesa Klondike.\n\nPreparate para lanzar los dados y dejarte llevar por una avalancha de partidas mientras ves girar tu destino. En este juego, usaras dados magicos disenados especialmente para explorar una mina sumergida en un casino repleto de materiales misteriosos.',
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
    expectations: '',
    learnings: '',
  },
  {
    id: 4,
    name: 'The White Square Simulator: Clicker',
    shortDescription:
      'The White Square surge como un proyecto universitario orientado a comprender y aplicar estos principios del genero clicker.',
    longDescription:
      'The White Square es una experiencia clicker disenada para enganchar desde el primer segundo, combinando sistemas matematicos precisos con una progresion constante y altamente satisfactoria. Cada accion del jugador impacta directamente en el crecimiento del negocio, creando un ciclo adictivo de decisiones, optimizacion y recompensas.\nEn este juego, asumes el rol de gerente de una tienda en constante movimiento, donde deberas gestionar pedidos de forma eficiente para generar ingresos, expandir tu operacion y desbloquear nuevas oportunidades. A medida que la demanda crece, podras contratar personal, adquirir mejoras estrategicas y optimizar cada aspecto de tu negocio para maximizar tus ganancias.',
    genre: 'Clicker',
    itchLink: 'https://danibeta33.itch.io/ws-clicker',
    categories: ['Proyectos Universitarios'],
    captures: [
      withBase('/imgs/Clicker_Portada.png'),
      withBase('/imgs/Clicker_1.png'),
      withBase('/imgs/Clicker_2.png'),
    ],
    trailer: '',
    expectations: '',
    learnings: '',
  },
  {
    id: 5,
    name: 'Las Sombras de la Mente',
    shortDescription:
      'Un juego de terror y puzzles en 2D donde, a traves de minijuegos, deberas sobrevivir a un virus que convierte a las personas en monstruos y encontrar una cura antes de perder la cordura.',
    longDescription:
      'Las Sombras de la Mente, nacio siendo un juego, el primer juego desarrollado para todos los integrantes del curso.\nEn la ciudad de Amarys, un misterioso virus amenaza con destruir todo rastro de humanidad, transformando a quienes padecen enfermedades o trastornos mentales en criaturas aterradoras. En este juego de terror y puzzles en 2D con perspectiva top-down, asumiras el rol de una protagonista recluida en el hospital mas grande de la ciudad, junto a un equipo de medicos que representa la ultima esperanza.\nLa experiencia combina exploracion, narrativa psicologica y una serie de minijuegos que actuan como desafios clave para avanzar. Cada reto pondra a prueba tus habilidades cognitivas, tu capacidad de analisis y tu temple frente a situaciones de alta tension. A medida que progresas, descubriras mas sobre el origen del virus y las complejidades de la mente humana.',
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
    expectations: '',
    learnings: '',
  },
]
