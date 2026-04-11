import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '../ui/Button'
import { MINIGAME_ENEMIES, MINIGAME_PLAYER_SRC } from '../../data/minigameAssets'
import { Player } from './Player'
import { Enemy } from './Enemy'
import { Projectile } from './Projectile'
import { Gallery } from './Gallery'
import { useAchievements } from '../../context/AchievementContext'

const PLAYER_WIDTH = 74
const PLAYER_HEIGHT = 74
const PLAYER_PADDING = 14
const PLAYER_SPEED = 420
const PROJECTILE_SPEED = 660
const SHOT_COOLDOWN_MS = 140

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

const seeded = (index, salt = 1) => {
  const raw = Math.sin((index + 1) * (salt * 97.37)) * 12345.6789
  return raw - Math.floor(raw)
}

const overlaps = (projectile, enemy) => {
  const projectileWidth = 4
  const projectileHeight = 20

  return (
    projectile.x < enemy.x + enemy.width &&
    projectile.x + projectileWidth > enemy.x &&
    projectile.y < enemy.y + enemy.height &&
    projectile.y + projectileHeight > enemy.y
  )
}

const makeEnemy = (asset, index, stageWidth, stageHeight, yOffset = 0) => {
  const laneCount = Math.max(4, Math.floor(stageWidth / 125))
  const laneWidth = stageWidth / laneCount
  const lane = index % laneCount
  const baseWidth = asset.kind === 'video' ? 112 : 84
  const width = baseWidth + seeded(index, 2) * 24
  const height = width * (asset.kind === 'video' ? 0.62 : 0.68)
  const maxX = Math.max(stageWidth - width - 2, 2)
  const laneStart = lane * laneWidth
  const laneTravel = Math.max(laneWidth - width, 0)
  const x = clamp(laneStart + laneTravel * seeded(index, 3), 2, maxX)
  const y = -1 * (yOffset + 80 + index * 72 + seeded(index, 4) * stageHeight * 0.8)
  const speed = 46 + seeded(index, 5) * 36 + (asset.kind === 'video' ? 10 : 0)

  return {
    ...asset,
    x,
    y,
    width,
    height,
    speed,
  }
}

const createInitialState = (stageWidth, stageHeight) => {
  const enemies = MINIGAME_ENEMIES.map((asset, index) => makeEnemy(asset, index, stageWidth, stageHeight))

  return {
    playerX: stageWidth / 2 - PLAYER_WIDTH / 2,
    projectiles: [],
    enemies,
    effects: [],
    score: 0,
    shots: 0,
    destroyed: 0,
    lastShotAt: 0,
  }
}

function Explosion({ effect }) {
  return (
    <span
      className="minigame-explosion"
      style={{
        left: `${effect.x}px`,
        top: `${effect.y}px`,
      }}
    />
  )
}

export function Game({ title, subtitle }) {
  const { registerPerfectMinigame } = useAchievements()
  const stageRef = useRef(null)
  const keysRef = useRef({ left: false, right: false })
  const touchDirectionRef = useRef(0)
  const effectIdRef = useRef(0)
  const projectileIdRef = useRef(0)
  const audioContextRef = useRef(null)
  const [stageSize, setStageSize] = useState({ width: 900, height: 560 })
  const [phase, setPhase] = useState('idle')
  const [game, setGame] = useState(() => createInitialState(900, 560))

  const totalTargets = useMemo(() => MINIGAME_ENEMIES.length, [])

  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined' || !window.AudioContext) return null

    if (!audioContextRef.current) {
      audioContextRef.current = new window.AudioContext()
    }

    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {})
    }

    return audioContextRef.current
  }, [])

  const playPulse = useCallback((frequency, duration, type = 'square', gain = 0.03) => {
    const ctx = getAudioContext()
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    oscillator.type = type
    oscillator.frequency.value = frequency
    gainNode.gain.value = gain
    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    const now = ctx.currentTime
    gainNode.gain.setValueAtTime(gain, now)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    oscillator.start(now)
    oscillator.stop(now + duration)
  }, [getAudioContext])

  const startGame = useCallback(() => {
    const next = createInitialState(stageSize.width, stageSize.height)
    setGame(next)
    setPhase('playing')
  }, [stageSize.height, stageSize.width])

  const shoot = useCallback(() => {
    if (phase !== 'playing') return

    let didShoot = false

    setGame((previous) => {
      const now = performance.now()
      if (now - previous.lastShotAt < SHOT_COOLDOWN_MS) return previous

      didShoot = true
      const playerY = stageSize.height - PLAYER_HEIGHT - PLAYER_PADDING

      return {
        ...previous,
        shots: previous.shots + 1,
        lastShotAt: now,
        projectiles: [
          ...previous.projectiles,
          {
            id: `p-${projectileIdRef.current++}`,
            x: previous.playerX + PLAYER_WIDTH / 2 - 2,
            y: playerY - 14,
          },
        ],
      }
    })

    if (didShoot) {
      playPulse(210, 0.09)
    }
  }, [phase, playPulse, stageSize.height])

  useEffect(() => {
    const node = stageRef.current
    if (!node || typeof ResizeObserver === 'undefined') return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const { width, height } = entry.contentRect
      setStageSize({
        width: Math.max(320, width),
        height: Math.max(360, height),
      })
    })

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setGame((previous) => ({
      ...previous,
      playerX: clamp(previous.playerX, 0, stageSize.width - PLAYER_WIDTH),
      enemies: previous.enemies.map((enemy, index) => ({
        ...enemy,
        x: clamp(enemy.x, 2, Math.max(2, stageSize.width - enemy.width - 2)),
        y: enemy.y > stageSize.height ? makeEnemy(enemy, index, stageSize.width, stageSize.height, 30).y : enemy.y,
      })),
    }))
  }, [stageSize.height, stageSize.width])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') keysRef.current.left = true
      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') keysRef.current.right = true

      if (event.code === 'Space' || event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
        event.preventDefault()
        shoot()
      }
    }

    const onKeyUp = (event) => {
      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') keysRef.current.left = false
      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') keysRef.current.right = false
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [shoot])

  useEffect(() => {
    if (phase !== 'playing') return

    let rafId = 0
    let lastTime = performance.now()

    const tick = (now) => {
      const delta = Math.min((now - lastTime) / 1000, 0.04)
      lastTime = now

      let hitsInFrame = 0

      setGame((previous) => {
        const inputDirection =
          (keysRef.current.right ? 1 : 0) - (keysRef.current.left ? 1 : 0) + touchDirectionRef.current

        const nextPlayerX = clamp(previous.playerX + inputDirection * PLAYER_SPEED * delta, 0, stageSize.width - PLAYER_WIDTH)

        const playerY = stageSize.height - PLAYER_HEIGHT - PLAYER_PADDING

        const nextProjectiles = previous.projectiles
          .map((projectile) => ({
            ...projectile,
            y: projectile.y - PROJECTILE_SPEED * delta,
          }))
          .filter((projectile) => projectile.y > -22)

        const remainingTargets = totalTargets - previous.destroyed
        const reachedHalf = remainingTargets <= Math.ceil(totalTargets / 2)
        const liveAccuracy = previous.shots > 0 ? (previous.destroyed / previous.shots) * 100 : 100
        const speedMultiplier = reachedHalf ? (liveAccuracy === 100 ? 1.0175 : 1.0125) : 1

        const movedEnemies = previous.enemies.map((enemy, index) => {
          const nextY = enemy.y + enemy.speed * speedMultiplier * delta
          if (nextY > stageSize.height + 26) {
            return {
              ...makeEnemy(enemy, index, stageSize.width, stageSize.height, 24),
              y: -30 - seeded(index, 7) * 140,
            }
          }

          return {
            ...enemy,
            y: nextY,
          }
        })

        const hitProjectileIds = new Set()
        const hitEnemyIds = new Set()

        for (let pIndex = 0; pIndex < nextProjectiles.length; pIndex += 1) {
          const projectile = nextProjectiles[pIndex]
          for (let eIndex = 0; eIndex < movedEnemies.length; eIndex += 1) {
            const enemy = movedEnemies[eIndex]
            if (hitEnemyIds.has(enemy.id)) continue
            if (!overlaps(projectile, enemy)) continue
            hitProjectileIds.add(projectile.id)
            hitEnemyIds.add(enemy.id)
            hitsInFrame += 1
            break
          }
        }

        const remainingProjectiles = nextProjectiles.filter((projectile) => !hitProjectileIds.has(projectile.id))
        const remainingEnemies = movedEnemies.filter((enemy) => !hitEnemyIds.has(enemy.id))

        const nowMs = performance.now()
        const nextEffects = previous.effects
          .filter((effect) => nowMs - effect.createdAt <= 320)
          .concat(
            movedEnemies
              .filter((enemy) => hitEnemyIds.has(enemy.id))
              .map((enemy) => ({
                id: `fx-${effectIdRef.current++}`,
                x: enemy.x + enemy.width / 2 - 15,
                y: enemy.y + enemy.height / 2 - 15,
                createdAt: nowMs,
              })),
          )

        return {
          ...previous,
          playerX: nextPlayerX,
          projectiles: remainingProjectiles,
          enemies: remainingEnemies,
          effects: nextEffects,
          destroyed: previous.destroyed + hitEnemyIds.size,
          score: previous.score + hitEnemyIds.size * 100,
          playerY,
        }
      })

      if (hitsInFrame > 0) {
        playPulse(480, 0.1, 'triangle', 0.04)
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [phase, playPulse, stageSize.height, stageSize.width, totalTargets])

  useEffect(() => {
    if (phase === 'playing' && game.enemies.length === 0) {
      setPhase('gallery')
    }
  }, [game.enemies.length, phase])

  const handlePointerMove = useCallback(
    (event) => {
      if (phase !== 'playing') return
      const rect = stageRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = event.clientX - rect.left - PLAYER_WIDTH / 2
      setGame((previous) => ({ ...previous, playerX: clamp(x, 0, stageSize.width - PLAYER_WIDTH) }))
    },
    [phase, stageSize.width],
  )

  const handleTouchMove = useCallback(
    (event) => {
      if (phase !== 'playing') return
      const touch = event.touches[0]
      if (!touch) return
      const rect = stageRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = touch.clientX - rect.left - PLAYER_WIDTH / 2
      setGame((previous) => ({ ...previous, playerX: clamp(x, 0, stageSize.width - PLAYER_WIDTH) }))
    },
    [phase, stageSize.width],
  )

  const accuracy = game.shots > 0 ? Math.round((game.destroyed / game.shots) * 100) : 100
  const isPerfectAccuracy = phase === 'gallery' && game.destroyed === totalTargets && game.shots === game.destroyed

  useEffect(() => {
    if (!isPerfectAccuracy) return
    registerPerfectMinigame()
  }, [isPerfectAccuracy, registerPerfectMinigame])

  return (
    <section className="minigame-layout">
      <header className="minigame-header">
        <p className="minigame-kicker">Arcade Showcase</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>

      <div className="minigame-hud">
        <span>Puntaje: {game.score}</span>
        <span>Objetivos: {game.destroyed} / {totalTargets}</span>
        <span>Precision: {accuracy}%</span>
      </div>

      <div
        ref={stageRef}
        className={`minigame-stage minigame-stage-${phase}`}
        onMouseMove={handlePointerMove}
        onTouchMove={handleTouchMove}
      >
        <div className="minigame-grid-overlay" />

        {game.enemies.map((enemy) => (
          <Enemy key={enemy.id} enemy={enemy} />
        ))}

        {game.projectiles.map((projectile) => (
          <Projectile key={projectile.id} projectile={projectile} />
        ))}

        {game.effects.map((effect) => (
          <Explosion key={effect.id} effect={effect} />
        ))}

        <Player
          x={game.playerX}
          y={stageSize.height - PLAYER_HEIGHT - PLAYER_PADDING}
          width={PLAYER_WIDTH}
          height={PLAYER_HEIGHT}
          src={MINIGAME_PLAYER_SRC}
        />

        {phase !== 'playing' && (
          <div className="minigame-overlay-panel">
            <h2>{phase === 'gallery' ? 'Nivel Completado' : 'Invasion de Memorias'}</h2>
            <p>
              {phase === 'gallery'
                ? 'Todos los archivos fueron destruidos. Se habilito la galeria final.'
                : 'Mueve la nave con A/D o flechas, y dispara con espacio.'}
            </p>
            <Button onClick={startGame} bg="black" textColor="white" borderColor="white" shadow="white">
              {phase === 'gallery' ? 'Jugar de nuevo' : 'Iniciar partida'}
            </Button>
          </div>
        )}
      </div>

      <div className="minigame-mobile-controls" aria-label="Controles tactiles">
        <button
          type="button"
          onPointerDown={() => {
            touchDirectionRef.current = -1
          }}
          onPointerUp={() => {
            touchDirectionRef.current = 0
          }}
          onPointerLeave={() => {
            touchDirectionRef.current = 0
          }}
          onPointerCancel={() => {
            touchDirectionRef.current = 0
          }}
        >
          Izquierda
        </button>
        <button type="button" className="minigame-shoot-btn" onClick={shoot}>
          Disparar
        </button>
        <button
          type="button"
          onPointerDown={() => {
            touchDirectionRef.current = 1
          }}
          onPointerUp={() => {
            touchDirectionRef.current = 0
          }}
          onPointerLeave={() => {
            touchDirectionRef.current = 0
          }}
          onPointerCancel={() => {
            touchDirectionRef.current = 0
          }}
        >
          Derecha
        </button>
      </div>

      {phase === 'gallery' && <Gallery assets={MINIGAME_ENEMIES} />}
    </section>
  )
}
