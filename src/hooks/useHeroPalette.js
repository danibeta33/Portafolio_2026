import { useMemo, useState } from 'react'
import { HERO_THEME_COLORS, HERO_THEME_ORDER } from '../data/siteData'

export function useHeroPalette(isLightMode) {
  const [themeIndex, setThemeIndex] = useState(() => {
    const redIndex = HERO_THEME_ORDER.indexOf('red')
    return redIndex >= 0 ? redIndex : 0
  })
  const [isNamePressed, setIsNamePressed] = useState(false)

  const currentHeroTheme = HERO_THEME_ORDER[themeIndex]
  const paletteMode = isLightMode ? 'light' : 'dark'
  const heroPalette = HERO_THEME_COLORS[paletteMode][currentHeroTheme]

  const colors = useMemo(
    () => ({
      heroAccentColor: heroPalette.main,
      heroAccentDark: heroPalette.neonDark,
      currentHeroTheme,
    }),
    [heroPalette, currentHeroTheme],
  )

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % HERO_THEME_ORDER.length)
    setIsNamePressed(true)
    window.setTimeout(() => setIsNamePressed(false), 260)
  }

  return {
    ...colors,
    isNamePressed,
    cycleTheme,
  }
}
