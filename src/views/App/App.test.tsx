import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render, screen } from 'test'

import { App } from './App'
import { GITHUB_USERS_API } from 'services'
import { mockedUserDetails } from 'test/__mocks__/data/userDetails'

const fetchUserSuccess = rest.get(`${GITHUB_USERS_API}:username`, async (_, res, ctx) =>
  res(ctx.status(200), ctx.json(mockedUserDetails))
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

  it(`displays Octocat's profile information by default`, async () => {
    render(<App />)

    const octocatHeadingText = await screen.findByRole('heading', {
      name: new RegExp(mockedUserDetails.name),
    })
    expect(octocatHeadingText).toBeInTheDocument()
  })
})
