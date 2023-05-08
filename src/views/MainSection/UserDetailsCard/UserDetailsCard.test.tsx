import { render, screen } from 'test'

import { UserDetailsCard } from './UserDetailsCard'
import { GithubUser } from 'types/githubUser'
import { formatDate } from './UserDetailsCard.utils'

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

describe('UserDetailsCard', () => {
  it(`displays user's name`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const name = screen.getByRole('heading', { name: mockedUserDetails.name })
    expect(name).toBeInTheDocument()
  })

  it(`displays user's username`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const username = screen.getByText(`@${mockedUserDetails.login}`)
    expect(username).toBeInTheDocument()
  })

  it(`displays user's joined date`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const joinedDate = screen.getByText(new RegExp(formatDate(mockedUserDetails.created_at)))
    expect(joinedDate).toBeInTheDocument()
  })
})
