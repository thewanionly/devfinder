import styled from 'styled-components'

import { Header } from 'views/Header'
import { SearchBar } from 'views/SearchBar'

const S = {
  App: styled.div`
    padding: 0 2.4rem;
  `,
}

export const App = () => (
  <S.App>
    <Header />
    <SearchBar placeholder="Search GitHub username…" />
  </S.App>
)
