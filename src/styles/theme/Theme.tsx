import { ThemeProvider } from 'styled-components'

import { theme } from './theme'
import { AppTheme } from 'types'

type ThemeProps = {
  appTheme: AppTheme
  children: React.ReactNode
}

export const Theme = ({ appTheme = AppTheme.Light, children }: ThemeProps) => (
  <ThemeProvider theme={{ ...theme, colors: theme.colors[appTheme] }}>{children}</ThemeProvider>
)
