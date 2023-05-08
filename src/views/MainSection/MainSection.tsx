// import { useQuery } from 'react-query'
import styled from 'styled-components'

import { SearchBar } from './SearchBar'
import { UserDetailsCard } from './UserDetailsCard'
import { GithubUser } from 'types/githubUser'

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

const mockedUserDetails: GithubUser = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  name: 'The Octocat',
  login: 'octocat',
  created_at: '2011-01-25T18:44:36Z',
  bio: 'Lorem ipsum',
  public_repos: 8,
  followers: 9146,
  following: 9,
  location: 'San Francisco',
  blog: 'https://github.blog',
  twitter_username: 'test',
  company: '@github',
}

export const MainSection = () => {
  return (
    <S.MainSection>
      <SearchBar placeholder="Search GitHub username…" />
      <UserDetailsCard data={mockedUserDetails} />
    </S.MainSection>
  )
}
