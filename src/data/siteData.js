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

const TEMPLATE_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"%3E%3Crect width="640" height="360" fill="%23070707"/%3E%3Crect x="18" y="18" width="604" height="324" fill="none" stroke="%23f0f0f0" stroke-opacity="0.45" stroke-dasharray="12 8"/%3E%3Ctext x="50%25" y="46%25" fill="%23f0f0f0" fill-opacity="0.75" font-size="28" text-anchor="middle" font-family="monospace"%3ETemplate Image%3C/text%3E%3Ctext x="50%25" y="58%25" fill="%23f0f0f0" fill-opacity="0.55" font-size="16" text-anchor="middle" font-family="monospace"%3EPreview Placeholder%3C/text%3E%3C/svg%3E'

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

export const PROJECTS = [
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
