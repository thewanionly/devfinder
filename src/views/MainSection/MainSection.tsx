import { useState } from 'react'

import { useQuery } from 'react-query'
import styled from 'styled-components'

import { GithubUser } from 'types/githubUser'
import { fetchUser } from 'services'
import { SearchBar } from './SearchBar'
import { UserDetailsCard } from './UserDetailsCard'
import { INITIAL_USERNAME, NO_SEARCH_RESULTS_TEXT } from 'views/App/App.constants'

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
  const [username, setUsername] = useState(INITIAL_USERNAME)

  const { status, data } = useQuery<GithubUser>(
    ['githubUser', username],
    () => fetchUser(username),
    {
      retry: 0,
    }
  )

  const handleSearch = (searchTerm: string) => {
    setUsername(searchTerm)
  }

  return (
    <S.MainSection>
      <SearchBar
        placeholder="Search GitHub username…"
        onSearch={handleSearch}
        errorMessage={status === 'error' ? NO_SEARCH_RESULTS_TEXT : ''}
        isLoading={status === 'loading'}
      />
      {status === 'success' && <UserDetailsCard data={data} />}
    </S.MainSection>
  )
}
