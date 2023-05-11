import { render, screen } from 'test'
import { mockedEmptyUserDetails, mockedUserDetails } from 'test/__mocks__/data/userDetails'

import { UserDetailsCard } from './UserDetailsCard'
import { formatDate } from './UserDetailsCard.utils'
import { EMPTY_BIO_TEXT } from './UserDetailsCard.constants'

describe('UserDetailsCard', () => {
  it(`displays user's avatar`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const avatar = screen.getByAltText(mockedUserDetails.name)

    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('src', mockedUserDetails.avatar_url)
  })

  it(`displays user's name as a heading text`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const name = screen.getByRole('heading', { name: mockedUserDetails.name })
    expect(name).toBeInTheDocument()
  })

  it(`displays user's username as a heading text when name is not defined`, () => {
    render(<UserDetailsCard data={mockedEmptyUserDetails} />)

    const name = screen.getByRole('heading', { name: mockedEmptyUserDetails.login })
    expect(name).toBeInTheDocument()
  })

  it(`displays user's username prepended with @`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const username = screen.getByText(`@${mockedUserDetails.login}`)
    expect(username).toBeInTheDocument()
  })

  it(`displays user's joined date`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const joinedDate = screen.getByText(new RegExp(formatDate(mockedUserDetails.created_at)))
    expect(joinedDate).toBeInTheDocument()
  })

  it(`displays user's bio if present`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const bio = screen.getByText(mockedUserDetails.bio)
    expect(bio).toBeInTheDocument()
  })

  it(`displays ${EMPTY_BIO_TEXT} if the user has no bio`, () => {
    render(<UserDetailsCard data={mockedEmptyUserDetails} />)

    const emptyBio = screen.getByText(EMPTY_BIO_TEXT)
    expect(emptyBio).toBeInTheDocument()
  })

  it(`displays user's repos count`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const reposLabel = screen.getByText('Repos')
    const repos = screen.getByTestId('repos')
    expect(reposLabel).toBeInTheDocument()
    expect(Number(repos.textContent)).toBe(mockedUserDetails.public_repos)
  })

  it(`displays user's followers count`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const followersLabel = screen.getByText('Followers')
    const followers = screen.getByTestId('followers')
    expect(followersLabel).toBeInTheDocument()
    expect(Number(followers.textContent)).toBe(mockedUserDetails.followers)
  })

  it(`displays user's following count`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    const followingLabel = screen.getByText('Following')
    const following = screen.getByTestId('following')
    expect(followingLabel).toBeInTheDocument()
    expect(Number(following.textContent)).toBe(mockedUserDetails.following)
  })
})
