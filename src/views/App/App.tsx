import { useState } from 'react'
import styled from 'styled-components'

import { GlobalStyles, Theme } from 'styles'
import { AppTheme } from 'types'
import { Header } from 'views/Header'

const S = {
  App: styled.div``,
}

export const App = () => {
  const [theme] = useState<AppTheme>(AppTheme.Light)

  return (
    <Theme appTheme={theme}>
      <GlobalStyles />
      <S.App>
        <Header />
      </S.App>
    </Theme>
  )
}
