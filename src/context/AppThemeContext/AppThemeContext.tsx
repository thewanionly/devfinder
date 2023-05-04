import { createContext } from 'react'

import { useDarkMode } from 'hooks'
import { AppTheme } from 'types'

import { DARK_MODE_STORAGE_KEY } from './AppThemeContext.constants'

interface AppThemeContextValue {
  appTheme: AppTheme
  toggleAppTheme: () => void
}

const initialAppThemeContextValue: AppThemeContextValue = {
  appTheme: AppTheme.Light,
  toggleAppTheme: () => null,
}

export const AppThemeContext = createContext<AppThemeContextValue>(initialAppThemeContextValue)

type AppThemeProviderProps = {
  children: React.ReactNode
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode(DARK_MODE_STORAGE_KEY)

  const appTheme = isDarkMode ? AppTheme.Dark : AppTheme.Light

  return (
    <AppThemeContext.Provider
      value={{
        appTheme,
        toggleAppTheme: toggleDarkMode,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  )
}
