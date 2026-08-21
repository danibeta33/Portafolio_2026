import { createContext, useContext, useMemo, useState } from 'react'
import en from '../i18n/locales/en.json'
import es from '../i18n/locales/es.json'

const STORAGE_KEY = 'portfolio.locale'
const SUPPORTED_LOCALES = new Set(['es', 'en'])
const LOCALES = { es, en }

const getNestedValue = (source, path) =>
  path.split('.').reduce((current, part) => {
    if (current && typeof current === 'object' && part in current) return current[part]
    return undefined
  }, source)

const withParams = (message, params) => {
  if (typeof message !== 'string') return message

  return message.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
    const value = params[key]
    return value == null ? '' : String(value)
  })
}

const getInitialLocale = () => {
  if (typeof window === 'undefined') return 'es'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && SUPPORTED_LOCALES.has(saved)) return saved
  } catch {
    return 'es'
  }
  return 'es'
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  const setLocale = (nextLocale) => {
    if (!SUPPORTED_LOCALES.has(nextLocale)) return
    setLocaleState(nextLocale)
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLocale)
      } catch {
        // Ignore storage write failures and keep state in memory.
      }
    }
  }

  const dictionary = LOCALES[locale] || LOCALES.es

  const t = (path, params = {}, fallback = '') => {
    const value = getNestedValue(dictionary, path)
    if (value == null) return fallback || path
    return withParams(value, params)
  }

  const value = useMemo(
    () => ({
      locale,
      isEnglish: locale === 'en',
      dictionary,
      site: dictionary.site || {},
      setLocale,
      toggleLocale: () => setLocale(locale === 'es' ? 'en' : 'es'),
      t,
    }),
    [dictionary, locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider')
  }
  return context
}
