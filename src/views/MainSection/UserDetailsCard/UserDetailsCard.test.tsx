import { render, screen } from 'test'
import { mockedEmptyUserDetails, mockedUserDetails } from 'test/__mocks__/data/userDetails'

import { UserDetailsCard } from './UserDetailsCard'
import {
  formatDate,
  formatUsername,
  getGithubLink,
  getTwitterLink,
  getUsername,
} from './UserDetailsCard.utils'
import { EMPTY_BIO_TEXT } from './UserDetailsCard.constants'
import { IconName } from 'components'

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

    const username = screen.getByText(formatUsername(mockedUserDetails.login))
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

  it.each`
    label          | testId         | data
    ${'Repos'}     | ${'repos'}     | ${mockedUserDetails.public_repos}
    ${'Followers'} | ${'followers'} | ${mockedUserDetails.followers}
    ${'Following'} | ${'following'} | ${mockedUserDetails.following}
  `(`displays user's $label count`, ({ label, testId, data }) => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    // assert the label
    const statLabel = screen.getByText(label)
    expect(statLabel).toBeInTheDocument()

    // assert the value
    const statValue = screen.getByTestId(testId)
    expect(Number(statValue.textContent)).toBe(data)
  })

  it(`displays user's location`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    // assert the icon
    const locationIcon = screen.getByLabelText(`${IconName.Location} icon`)
    expect(locationIcon).toBeInTheDocument()

    // assert the value
    const locationValue = screen.getByTestId('location')
    expect(locationValue.textContent).toBe(mockedUserDetails.location)
  })

  it(`displays user's website link`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    // assert the icon
    const websiteIcon = screen.getByLabelText(`${IconName.Website} icon`)
    expect(websiteIcon).toBeInTheDocument()

    const websiteLink = screen.getByRole('link', { name: mockedUserDetails.blog })

    // assert the link name
    expect(websiteLink).toBeInTheDocument()

    // assert the link href
    expect(websiteLink).toHaveAttribute('href', mockedUserDetails.blog)
  })

  it(`displays user's twitter link`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    // assert the icon
    const twitterIcon = screen.getByLabelText(`${IconName.Twitter} icon`)
    expect(twitterIcon).toBeInTheDocument()

    const twitterLink = screen.getByRole('link', {
      name: formatUsername(mockedUserDetails.twitter_username),
    })

    // assert the link name
    expect(twitterLink).toBeInTheDocument()

    // assert the link href
    expect(twitterLink).toHaveAttribute('href', getTwitterLink(mockedUserDetails.twitter_username))
  })

  it(`displays user's company's github account link`, () => {
    render(<UserDetailsCard data={mockedUserDetails} />)

    // assert the icon
    const companyIcon = screen.getByLabelText(`${IconName.Company} icon`)
    expect(companyIcon).toBeInTheDocument()

    const companyLink = screen.getByRole('link', {
      name: formatUsername(mockedUserDetails.company),
    })

    // assert the link name
    expect(companyLink).toBeInTheDocument()

    // assert the link href
    expect(companyLink).toHaveAttribute(
      'href',
      getGithubLink(getUsername(mockedUserDetails.company))
    )
  })
})
