import { render, screen } from 'test'

import { UserDetailsCard } from './UserDetailsCard'

import { formatDate } from './UserDetailsCard.utils'
import { mockedUserDetails } from 'test/__mocks__/data/userDetails'

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
