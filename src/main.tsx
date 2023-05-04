import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppThemeProvider } from 'context'
import { GlobalStyles, Theme } from 'styles'
import { App } from 'views/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </AppThemeProvider>
  </React.StrictMode>
)
