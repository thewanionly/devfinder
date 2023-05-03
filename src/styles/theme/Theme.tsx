import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from './theme'
import { AppTheme } from 'types'

type ThemeProps = {
  children: React.ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
  const [appTheme] = useState<AppTheme>(AppTheme.Light)

  return (
    <ThemeProvider theme={{ ...theme, colors: theme.colors[appTheme] }}>{children}</ThemeProvider>
  )
}
