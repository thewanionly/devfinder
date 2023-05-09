import { useQuery } from 'react-query'
import styled from 'styled-components'

import { SearchBar } from './SearchBar'
import { UserDetailsCard } from './UserDetailsCard'
import { GithubUser } from 'types/githubUser'
import { fetchUser } from 'services'

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
  const username = 'octocat'

  const { status, data } = useQuery<GithubUser>(
    ['githubUser', username],
    () => fetchUser(username),
    {
      retry: 0,
    }
  )

  return (
    <S.MainSection>
      <SearchBar placeholder="Search GitHub username…" />
      {status === 'success' && <UserDetailsCard data={data} />}
    </S.MainSection>
  )
}
