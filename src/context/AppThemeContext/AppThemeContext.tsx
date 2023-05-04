import { createContext, useState } from 'react'

import { AppTheme } from 'types'

interface AppThemeContextValue {
  appTheme: AppTheme
  setAppTheme: (newTheme: AppTheme) => void
}

const initialAppThemeContextValue: AppThemeContextValue = {
  appTheme: AppTheme.Light,
  setAppTheme: () => null,
}

export const AppThemeContext = createContext<AppThemeContextValue>(initialAppThemeContextValue)

type AppThemeProviderProps = {
  children: React.ReactNode
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [appTheme, setAppTheme] = useState<AppTheme>(AppTheme.Light)

  return (
    <AppThemeContext.Provider
      value={{
        appTheme,
        setAppTheme,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  )
}
