import type { ChangeEvent } from 'react'
import { useI18n } from '../i18n'

const formatOptionLabel = (label: string, nativeName: string) => {
  if (label.toLowerCase() === nativeName.toLowerCase()) {
    return nativeName
  }

  return `${nativeName} · ${label}`
}

export const LanguageSwitcher = () => {
  const { locale, setLocale, availableLocales, translation } = useI18n()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setLocale(value as typeof locale)
  }

  return (
    <label className="language-switcher">
      <span className="visually-hidden">{translation.layout.languageSwitcherLabel}</span>
      <select
        className="language-switcher__select"
        value={locale}
        onChange={handleChange}
        aria-label={translation.layout.languageSwitcherLabel}
      >
        {availableLocales.map(({ code, label: localeLabel, nativeName }) => (
          <option key={code} value={code}>
            {formatOptionLabel(localeLabel, nativeName)}
          </option>
        ))}
      </select>
      <span className="language-switcher__icon material-symbols-rounded" aria-hidden="true">
        expand_more
      </span>
    </label>
  )
}
