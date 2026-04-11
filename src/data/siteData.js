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
  {
    id: 6,
    name: 'Despercha234',
    shortDescription:
      'Un juego multijugador local para 2 a 4 jugadores que reune minijuegos clasicos colombianos como canicas, catapis, la lleva... Compite con tus amigos, gana puntos y revive la esencia de la cultura y la diversion en las calles.',
    longDescription:
      'Desparcha 2-3-4 es una experiencia multijugador local disenada para 2 a 4 jugadores, que captura la esencia de la infancia y la cultura colombiana a traves de una coleccion de minijuegos iconicos. Inspirado en juegos tradicionales como canicas, catapis, la lleva, carrera de sacos, tingo tingo tango y tejo, el juego invita a los jugadores a competir en dinamicas rapidas, divertidas y llenas de nostalgia.\nCada minijuego ofrece mecanicas unicas que ponen a prueba la habilidad, los reflejos y la estrategia, mientras los jugadores acumulan puntos para determinar al ganador. Ademas, el entorno visual y los elementos del juego incorporan simbolos representativos de la cultura colombiana, fortaleciendo la identidad y conexion con el contexto local.\nDesarrollado por The Lost Kids Studio x OP Studio, el juego fue reconocido en el DEX Showcase 2025-02 con los premios a Creatividad en Gameplay y Mejor videojuego del Semestre, destacandose por su propuesta innovadora y su enfoque cultural.',
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
    expectations: '',
    learnings: '',
  },
  {
    id: 7,
    name: 'Canal de Edicion de Video',
    shortDescription:
      'Un canal donde comparto proyectos de edicion de video realizados en distintos contextos, explorando diversos estilos, herramientas y enfoques creativos, incluyendo tambien algunos trabajos en bruto.',
    longDescription:
      'Este canal reune una variedad de proyectos que reflejan mi experiencia en la edicion de video en diferentes ambitos como el educativo, personal y profesional. A lo largo del tiempo he desarrollado habilidades de manera constante, experimentando con multiples formatos y estilos para mejorar cada resultado.\nAqui se presentan tanto trabajos finales como procesos de edicion, permitiendo ver la evolucion y el enfoque creativo detras de cada proyecto. He aprendido a adaptarme a distintas herramientas, incluso cuando presentan limitaciones por versiones o planes, aprovechando al maximo sus recursos para lograr resultados solidos y funcionales.\nHerramientas y Nivel de Manejo:\n- Adobe Premiere Pro - Nivel medio (en constante aprendizaje)\n- Camtasia - Nivel alto\n- CapCut - Nivel alto\n- Vegas Pro - Nivel medio\n- Adobe After Effects - Nivel basico (en aprendizaje)',
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
    expectations: '',
    learnings: '',
  },
  {
    id: 8,
    name: 'U-Bicate',
    shortDescription:
      'Plataforma web desarrollada para aplicar buenas practicas de diseno y desarrollo, utilizando React, Tailwind y Vite, con enfoque en interfaces modernas y responsive.',
    longDescription:
      'Esta plataforma web surge con el objetivo de aplicar y consolidar buenas practicas de diseno y desarrollo en entornos digitales, integrando tecnologias modernas como React, Tailwind CSS y Vite. El proyecto se enfoca en la creacion de interfaces intuitivas, eficientes y completamente adaptables a distintos dispositivos, priorizando la experiencia del usuario y la escalabilidad del sistema.\nMas alla de su enfoque tecnico, la plataforma aborda una problematica relevante: la falta de orientacion vocacional en jovenes que enfrentan la decision de elegir una carrera profesional. La ausencia de informacion clara y de autoconocimiento puede derivar en elecciones inadecuadas, desmotivacion e incluso abandono academico.\nEn este contexto, la solucion propuesta busca ofrecer un entorno digital que no solo cumpla con estandares de desarrollo moderno, sino que tambien sirva como herramienta de apoyo para guiar a los usuarios en la identificacion de sus habilidades, intereses y posibles caminos profesionales. A traves de un diseno accesible, dinamico y centrado en el usuario, la plataforma pretende facilitar la toma de decisiones informadas, combinando funcionalidad tecnologica con impacto social.',
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
    expectations: '',
    learnings: '',
  },
  {
    id: 9,
    name: 'Ilustraciones',
    isIllustrationsGame: true,
    shortDescription:
      'Coleccion interactiva de ilustraciones y clips convertida en un minijuego estilo Space Invaders.',
    longDescription:
      'Controla la nave y destruye todas las ilustraciones y videos que descienden desde la parte superior. Al terminar, se desbloquea una galeria final limpia con todos los assets.',
    genre: 'Arcade, Interactivo',
    itchLink: '',
    categories: ['Proyectos Personales', 'Proyectos de Formacion'],
    captures: [
      withBase('/imgs/Minijuego/minijuego3.png'),
      withBase('/imgs/Minijuego/minijuego14.png'),
      withBase('/imgs/Minijuego/minijuego24.jpg'),
    ],
    trailer: '',
    expectations: '',
    learnings: '',
  },
]
