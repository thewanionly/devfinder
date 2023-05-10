import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import { render, screen, waitForElementToBeRemoved } from 'test'
import { GITHUB_USERS_API } from 'services'
import { mockedUserDetails } from 'test/__mocks__/data/userDetails'

import { App } from './App'
import { INITIAL_USERNAME } from './App.constants'

const fetchUserSuccess = rest.get(`${GITHUB_USERS_API}:username`, async (_, res, ctx) =>
  res(ctx.status(200), ctx.delay(500), ctx.json(mockedUserDetails))
)

const server = setupServer(fetchUserSuccess)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

describe('App', () => {
  it('displays header ', () => {
    render(<App />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it(`displays ${INITIAL_USERNAME} profile information by default`, async () => {
    render(<App />)

    const userCardHeadingText = await screen.findByRole('heading', {
      name: new RegExp(mockedUserDetails.name),
    })
    expect(userCardHeadingText).toBeInTheDocument()
  })

  it(`displays loading message in the searchbar after user inputs a username and clicks the search button`, async () => {
    render(<App />)

    expect(screen.queryByText(/searching…/i)).not.toBeInTheDocument()

    const searchInput = screen.getByRole('textbox')
    await userEvent.type(searchInput, 'test')

    const button = screen.getByRole('button', { name: /search/i })
    await userEvent.click(button)

    const loadingText = await screen.findByText(/searching…/i)

    expect(loadingText).toBeInTheDocument()
    await waitForElementToBeRemoved(loadingText)
  })

  xit(`displays inputted username's information in user details card after clicking search button when username is found`, async () => {
    render(<App />)

    const userCardHeadingText = await screen.findByRole('heading', {
      name: new RegExp(mockedUserDetails.name),
    })
    expect(userCardHeadingText).toBeInTheDocument()
  })

  xit(`displays an error message in the searchbar after clicking search button when inputted username is not found `, async () => {
    render(<App />)

    const userCardHeadingText = await screen.findByRole('heading', {
      name: new RegExp(mockedUserDetails.name),
    })
    expect(userCardHeadingText).toBeInTheDocument()
  })
})
