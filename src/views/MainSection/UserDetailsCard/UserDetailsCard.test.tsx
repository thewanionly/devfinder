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
})
