import { useMemo } from 'react'
import { useTheme } from '../theme'
import { useI18n } from '../i18n'

type ExplicitTheme = 'light' | 'dark'

const ICON_GLYPHS: Record<ExplicitTheme, string> = {
  light: 'light_mode',
  dark: 'dark_mode',
}

export const ThemeSwitcher = () => {
  const { resolvedTheme, setMode } = useTheme()
  const { translation } = useI18n()

  const labels = useMemo<Record<ExplicitTheme, string>>(
    () => ({
      light: translation.layout.themeOptionLight,
      dark: translation.layout.themeOptionDark,
    }),
    [translation.layout.themeOptionDark, translation.layout.themeOptionLight],
  )

  const currentTheme: ExplicitTheme = resolvedTheme === 'dark' ? 'dark' : 'light'
  const nextTheme: ExplicitTheme = currentTheme === 'light' ? 'dark' : 'light'

  const ariaLabel = `${translation.layout.themeSwitcherToggle} (${labels[currentTheme]} -> ${labels[nextTheme]})`

  return (
    <button
      type="button"
      className="theme-switcher"
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={() => setMode(nextTheme)}
    >
      <span className="visually-hidden">{labels[currentTheme]}</span>
      <span aria-hidden="true" className="theme-switcher__icon material-symbols-rounded">{ICON_GLYPHS[currentTheme]}</span>
    </button>
  )
}
