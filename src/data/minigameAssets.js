import { resolvePublicAssetPath } from '../utils/assetPaths'

const base = '/imgs/Minijuego'

const enemyFiles = [
  'minijuego1.jpg',
  'minijuego2.mp4',
  'minijuego3.png',
  'minijuego4.jpg',
  'minijuego5.mp4',
  'minijuego6.png',
  'minijuego7.jpg',
  'minijuego8.mp4',
  'minijuego9.png',
  'minijuego10.jpg',
  'minijuego11.mp4',
  'minijuego12.png',
  'minijuego13.jpg',
  'minijuego14.png',
  'minijuego15.jpg',
  'minijuego16.png',
  'minijuego17.jpg',
  'minijuego18.jpg',
  'minijuego19.png',
  'minijuego20.jpg',
  'minijuego21.png',
  'minijuego22.jpg',
  'minijuego23.png',
  'minijuego24.jpg',
  'minijuego25.png',
  'minijuego26.jpg',
  'minijuego27.png',
  'minijuego28.jpg',
  'minijuego29.png',
  'minijuego30.jpg',
  'minijuego31.png',
  'minijuego32.png',
  'minijuego33.png',
  'minijuego34.png',
  'minijuego35.png',
  'minijuego36.png',
  'minijuego37.png',
  'minijuego38.png',
  'minijuego39.png',
  'minijuego40.png',
  'minijuego41.png',
  'minijuego42.png',
  'minijuego43.png',
  'minijuego44.png',
  'minijuego45.png',
  'minijuego46.png',
  'minijuego47.png',
  'minijuego48.png',
  'minijuego49.png',
]

const getKind = (filename) => {
  const ext = filename.split('.').pop()?.toLowerCase()
  if (ext === 'mp4' || ext === 'webm' || ext === 'mov') return 'video'
  return 'image'
}

export const MINIGAME_ENEMIES = enemyFiles.map((filename, index) => ({
  id: `enemy-${index + 1}`,
  filename,
  src: resolvePublicAssetPath(`${base}/${encodeURIComponent(filename)}`),
  kind: getKind(filename),
}))

export const MINIGAME_PLAYER_SRC = resolvePublicAssetPath(`${base}/nave.png`)

if (typeof console !== 'undefined') {
  MINIGAME_ENEMIES.forEach((asset) => {
    console.debug(`[minigame-assets] ${asset.kind}: ${asset.src}`)
  })
  console.debug(`[minigame-assets] player: ${MINIGAME_PLAYER_SRC}`)
}
