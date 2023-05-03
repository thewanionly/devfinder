import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles, Theme } from 'styles'
import { App } from 'views/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>
)
