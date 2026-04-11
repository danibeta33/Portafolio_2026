import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { resolvePublicAssetPath } from '../utils/assetPaths'
import { useSound } from './SoundContext'

const LOGRO_BASE = '/imgs'
const TOTAL_GAME_PAGES = 9

const ACHIEVEMENT_DEFS = [
  {
    id: 1,
    name: 'Explorador Novato',
    description: 'Explora el Inicio al Fin',
  },
  {
    id: 2,
    name: 'HaterClick?',
    description: 'Esos 200CPS es de Tryhards',
  },
  {
    id: 3,
    name: 'TeGusto?',
    description: 'Lo viste todo?',
  },
  {
    id: 4,
    name: 'Boomer en accion?',
    description: 'Precision al 100 a pesar de los anos',
  },
  {
    id: 5,
    name: 'Platinador De Webs',
    description: 'Gracias por apoyar esta pagina',
  },
]

const addAssetPaths = (achievement) => ({
  ...achievement,
  image: resolvePublicAssetPath(`${LOGRO_BASE}/Logro${achievement.id}.png`),
  lockedImage: resolvePublicAssetPath(`${LOGRO_BASE}/Logro${achievement.id}Bloq.png`),
  gif: resolvePublicAssetPath(`${LOGRO_BASE}/Logro${achievement.id}.gif`),
})

const initialState = {
  unlocked: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  },
  clicks: 0,
  visitedGameIds: [],
  bottomReached: false,
  minigamePerfect: false,
}

const AchievementContext = createContext(null)

export function AchievementProvider({ children }) {
  const location = useLocation()
  const { playSound } = useSound()
  const [state, setState] = useState(initialState)
  const [notifications, setNotifications] = useState([])
  const [isRainbowAuto, setIsRainbowAuto] = useState(false)
  const [isRainbowManual, setIsRainbowManual] = useState(false)
  const [isRainbowUnlocked, setIsRainbowUnlocked] = useState(false)
  const [rainbowMessage, setRainbowMessage] = useState('')
  const rainbowTimeoutRef = useRef(null)
  const hasTriggeredAutoRainbowRef = useRef(false)
  const rainbowMessageTimeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (rainbowTimeoutRef.current) {
        window.clearTimeout(rainbowTimeoutRef.current)
      }
      if (rainbowMessageTimeoutRef.current) {
        window.clearTimeout(rainbowMessageTimeoutRef.current)
      }
    }
  }, [])

  const achievements = useMemo(
    () => ACHIEVEMENT_DEFS.map((item) => ({ ...addAssetPaths(item), unlocked: state.unlocked[item.id] })),
    [state.unlocked],
  )

  const enqueueNotification = useCallback((achievement) => {
    const id = `${achievement.id}-${Date.now()}`
    setNotifications((prev) => [...prev, { id, title: achievement.name, image: achievement.image }])
    window.setTimeout(() => {
      setNotifications((prev) => prev.filter((item) => item.id !== id))
    }, 2600)
  }, [])

  const playUnlockSound = useCallback(() => {
    playSound('logro')
  }, [playSound])

  const unlockAchievement = useCallback(
    (id) => {
      let didUnlock = false

      setState((prev) => {
        if (prev.unlocked[id]) return prev
        didUnlock = true
        return {
          ...prev,
          unlocked: {
            ...prev.unlocked,
            [id]: true,
          },
        }
      })

      if (!didUnlock) return

      const achievement = ACHIEVEMENT_DEFS.find((item) => item.id === id)
      if (achievement) {
        playUnlockSound()
        enqueueNotification(addAssetPaths(achievement))
      }
    },
    [enqueueNotification, playUnlockSound],
  )

  const registerPerfectMinigame = useCallback(() => {
    setState((prev) => {
      if (prev.minigamePerfect) return prev
      return {
        ...prev,
        minigamePerfect: true,
      }
    })
  }, [])

  const toggleRainbowMode = useCallback(() => {
    if (!isRainbowUnlocked) {
      setRainbowMessage('Complete all achievements to unlock this feature')
      if (rainbowMessageTimeoutRef.current) {
        window.clearTimeout(rainbowMessageTimeoutRef.current)
      }
      rainbowMessageTimeoutRef.current = window.setTimeout(() => {
        setRainbowMessage('')
      }, 2600)
      return
    }

    setRainbowMessage('')
    setIsRainbowManual((prev) => !prev)
  }, [isRainbowUnlocked])

  useEffect(() => {
    const isHome = location.pathname === '/'
    if (!isHome) return undefined

    const onScroll = () => {
      const bottomOffset = window.innerHeight + window.scrollY
      const maxHeight = document.documentElement.scrollHeight
      const reachedBottom = bottomOffset >= maxHeight - 4

      if (!reachedBottom) return
      setState((prev) => (prev.bottomReached ? prev : { ...prev, bottomReached: true }))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    const onClick = () => {
      setState((prev) => ({
        ...prev,
        clicks: prev.clicks + 1,
      }))
    }

    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const match = location.pathname.match(/^\/game\/(\d+)$/)
    if (!match) return

    const gameId = Number(match[1])
    if (Number.isNaN(gameId)) return
    if (gameId < 1 || gameId > TOTAL_GAME_PAGES) return

    setState((prev) => {
      if (prev.visitedGameIds.includes(gameId)) return prev
      return {
        ...prev,
        visitedGameIds: [...prev.visitedGameIds, gameId],
      }
    })
  }, [location.pathname])

  useEffect(() => {
    if (state.bottomReached) unlockAchievement(1)
  }, [state.bottomReached, unlockAchievement])

  useEffect(() => {
    if (state.clicks >= 200) unlockAchievement(2)
  }, [state.clicks, unlockAchievement])

  useEffect(() => {
    if (state.visitedGameIds.length >= TOTAL_GAME_PAGES) unlockAchievement(3)
  }, [state.visitedGameIds.length, unlockAchievement])

  useEffect(() => {
    if (state.minigamePerfect) unlockAchievement(4)
  }, [state.minigamePerfect, unlockAchievement])

  useEffect(() => {
    if (state.unlocked[1] && state.unlocked[2] && state.unlocked[3] && state.unlocked[4]) {
      unlockAchievement(5)
    }
  }, [state.unlocked, unlockAchievement])

  useEffect(() => {
    const allUnlocked = Object.values(state.unlocked).every(Boolean)
    if (!allUnlocked) {
      setIsRainbowUnlocked(false)
      setIsRainbowManual(false)
      return
    }

    setIsRainbowUnlocked(true)
    if (hasTriggeredAutoRainbowRef.current) return

    hasTriggeredAutoRainbowRef.current = true
    setIsRainbowAuto(true)

    rainbowTimeoutRef.current = window.setTimeout(() => {
      setIsRainbowAuto(false)
    }, 10000)
  }, [state.unlocked])

  const isRainbowActive = isRainbowAuto || isRainbowManual

  useEffect(() => {
    document.body.classList.toggle('rainbow-mode', isRainbowActive)
  }, [isRainbowActive])

  const value = useMemo(
    () => ({
      achievements,
      unlocked: state.unlocked,
      clicks: state.clicks,
      visitedCount: state.visitedGameIds.length,
      registerPerfectMinigame,
      notifications,
      isRainbowActive,
      isRainbowManual,
      isRainbowUnlocked,
      rainbowMessage,
      toggleRainbowMode,
    }),
    [
      achievements,
      state.unlocked,
      state.clicks,
      state.visitedGameIds.length,
      registerPerfectMinigame,
      notifications,
      isRainbowActive,
      isRainbowManual,
      isRainbowUnlocked,
      rainbowMessage,
      toggleRainbowMode,
    ],
  )

  return <AchievementContext.Provider value={value}>{children}</AchievementContext.Provider>
}

export function useAchievements() {
  const context = useContext(AchievementContext)
  if (!context) {
    throw new Error('useAchievements must be used inside AchievementProvider')
  }
  return context
}
