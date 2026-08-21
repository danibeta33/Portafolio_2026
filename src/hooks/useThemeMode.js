import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio.themeMode'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return true

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'light') return true
    if (saved === 'dark') return false
  } catch {
    return true
  }

  return true
}

export function useThemeMode() {
  const [isLightMode, setIsLightMode] = useState(getInitialTheme)

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode)
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, isLightMode ? 'light' : 'dark')
      } catch {
        // Keep UI state even if storage is unavailable.
      }
    }
    return () => document.body.classList.remove('light-mode')
  }, [isLightMode])

  return {
    isLightMode,
    setIsLightMode,
  }
}
