// import { useQuery } from 'react-query'
import styled from 'styled-components'

import { SearchBar } from 'views/MainSection/SearchBar'

const S = {
  MainSection: styled.main`
    max-width: 73rem;
    min-width: 32.7rem;
    margin: 3.6rem auto 0;
  `,
}

export const MainSection = () => {
  return (
    <S.MainSection>
      <SearchBar placeholder="Search GitHub username…" />
    </S.MainSection>
  )
}
