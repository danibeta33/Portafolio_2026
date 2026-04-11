import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { resolvePublicAssetPath } from '../utils/assetPaths'

const SOUND_SOURCES = {
  logro: '/imgs/logro.mp3',
  click: '/imgs/click.mp3',
  hover: '/imgs/hover.mp3',
}

const SoundContext = createContext(null)

export function SoundProvider({ children }) {
  const soundsRef = useRef(new Map())
  const unlockedRef = useRef(false)
  const pendingQueueRef = useRef([])
  const [volume, setVolumeState] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  const effectiveVolume = isMuted ? 0 : volume

  const preloadSounds = useCallback((names) => {
    const targetNames = Array.isArray(names) && names.length > 0 ? names : Object.keys(SOUND_SOURCES)

    targetNames.forEach((name) => {
      if (!SOUND_SOURCES[name]) return
      if (soundsRef.current.has(name)) return

      const src = resolvePublicAssetPath(SOUND_SOURCES[name])
      const audio = new Audio(src)
      audio.preload = 'auto'
      audio.volume = effectiveVolume

      audio.addEventListener(
        'canplaythrough',
        () => {
          console.log('[sound] loaded:', name, src)
        },
        { once: true },
      )

      audio.addEventListener(
        'error',
        () => {
          console.log('[sound] failed to load:', name, src)
        },
        { once: true },
      )

      audio.load()
      soundsRef.current.set(name, audio)
    })
  }, [effectiveVolume])

  const playNow = useCallback(
    (name) => {
      const base = soundsRef.current.get(name)
      if (!base) {
        console.log('[sound] not preloaded, skipping:', name)
        return
      }

      const instance = base.cloneNode(true)
      instance.volume = effectiveVolume
      instance.currentTime = 0

      console.log('Playing sound:', name)
      instance.play().catch((error) => {
        console.log('[sound] blocked:', name, error)
        pendingQueueRef.current.push(name)
      })
    },
    [effectiveVolume],
  )

  const flushQueue = useCallback(() => {
    if (pendingQueueRef.current.length === 0) return

    const queued = [...pendingQueueRef.current]
    pendingQueueRef.current = []

    queued.forEach((name) => playNow(name))
  }, [playNow])

  const unlockAudio = useCallback(() => {
    if (unlockedRef.current) return

    unlockedRef.current = true
    setIsUnlocked(true)
    console.log('[sound] unlocked by user interaction')
    flushQueue()
  }, [flushQueue])

  const playSound = useCallback(
    (name) => {
      preloadSounds([name])

      if (!unlockedRef.current) {
        console.log('[sound] blocked (awaiting interaction):', name)
        pendingQueueRef.current.push(name)
        return
      }

      playNow(name)
    },
    [playNow, preloadSounds],
  )

  const setVolume = useCallback((value) => {
    const safe = Math.max(0, Math.min(1, Number(value) || 0))
    setVolumeState(safe)
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  useEffect(() => {
    preloadSounds()
  }, [preloadSounds])

  useEffect(() => {
    const onUserInteraction = () => {
      unlockAudio()
    }

    window.addEventListener('pointerdown', onUserInteraction, { passive: true })
    window.addEventListener('click', onUserInteraction, { passive: true })
    window.addEventListener('keydown', onUserInteraction)

    return () => {
      window.removeEventListener('pointerdown', onUserInteraction)
      window.removeEventListener('click', onUserInteraction)
      window.removeEventListener('keydown', onUserInteraction)
    }
  }, [unlockAudio])

  useEffect(() => {
    soundsRef.current.forEach((audio) => {
      audio.volume = effectiveVolume
    })
  }, [effectiveVolume])

  const value = useMemo(
    () => ({
      playSound,
      preloadSounds,
      setVolume,
      isMuted,
      toggleMute,
      volume,
      isUnlocked,
    }),
    [isMuted, isUnlocked, playSound, preloadSounds, setVolume, toggleMute, volume],
  )

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

export function useSound() {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSound must be used inside SoundProvider')
  }
  return context
}
