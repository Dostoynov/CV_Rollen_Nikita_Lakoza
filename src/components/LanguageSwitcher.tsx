import { useI18n } from '../i18n'

export const LanguageSwitcher = () => {
  const { locale, setLocale, availableLocales, translation } = useI18n()

  const currentIndex = availableLocales.findIndex(({ code }) => code === locale)
  const safeIndex = currentIndex === -1 ? 0 : currentIndex
  const nextIndex = (safeIndex + 1) % availableLocales.length
  const nextLocale = availableLocales[nextIndex]
  const currentLocale = availableLocales[safeIndex]

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={() => setLocale(nextLocale.code)}
      aria-label={translation.layout.languageSwitcherLabel}
    >
      <span aria-hidden="true">{currentLocale.code.toUpperCase()}</span>
    </button>
  )
}
