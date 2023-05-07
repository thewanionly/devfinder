// import { useQuery } from 'react-query'
import styled from 'styled-components'

import { SearchBar } from './SearchBar'
import { UserDetailsCard } from './UserDetailsCard'

const S = {
  MainSection: styled.main`
    max-width: 73rem;
    min-width: 32.7rem;
    margin: 3.6rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      gap: 2.4rem;
    }
  `,
}

export const MainSection = () => {
  return (
    <S.MainSection>
      <SearchBar placeholder="Search GitHub username…" />
      <UserDetailsCard />
    </S.MainSection>
  )
}
