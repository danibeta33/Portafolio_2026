import { useEffect, useState } from 'react'

export function useThemeMode() {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode)
    return () => document.body.classList.remove('light-mode')
  }, [isLightMode])

  return {
    isLightMode,
    setIsLightMode,
  }
}
