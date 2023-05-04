import { ThemeProvider } from 'styled-components'

import { theme } from './theme'

import { useAppThemeContext } from 'context'

type ThemeProps = {
  children: React.ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
  const { appTheme } = useAppThemeContext()

  return (
    <ThemeProvider theme={{ ...theme, colors: theme.colors[appTheme] }}>{children}</ThemeProvider>
  )
}
