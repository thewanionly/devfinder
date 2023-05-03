import { useState } from 'react'
import styled from 'styled-components'

import { GlobalStyles, Theme } from 'styles'
import { AppTheme } from 'types'

const S = {
  App: styled.div``,
  AppTitle: styled.h1``,
}

export const App = () => {
  const [theme, setTheme] = useState<AppTheme>(AppTheme.Light)

  return (
    <Theme appTheme={theme}>
      <GlobalStyles />
      <S.App>
        <S.AppTitle>Devfinder</S.AppTitle>
        {theme === AppTheme.Light ? (
          <button onClick={() => setTheme(AppTheme.Dark)}>Dark mode</button>
        ) : (
          <button onClick={() => setTheme(AppTheme.Light)}>Light mode</button>
        )}
      </S.App>
    </Theme>
  )
}
