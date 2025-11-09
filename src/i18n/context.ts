import { createContext } from 'react'
import en, { type Translation } from './locales/en'
import de from './locales/de'
import ro from './locales/ro'
import ru from './locales/ru'

export const locales = {
  en,
  ru,
  de,
  ro,
} as const

export type Locale = keyof typeof locales

export type AvailableLocale = {
  code: Locale
  label: string
  nativeName: string
}

export type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  translation: Translation
  availableLocales: AvailableLocale[]
}

export const defaultLocale: Locale = 'en'
export const storageKey = 'cv-template-locale'

export const detectInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const stored = window.localStorage.getItem(storageKey)
  if (stored && stored in locales) {
    return stored as Locale
  }

  const browserLocale = window.navigator.language.slice(0, 2).toLowerCase()
  if (browserLocale in locales) {
    return browserLocale as Locale
  }

  return defaultLocale
}

export const I18nContext = createContext<I18nContextValue | null>(null)
