import { render, screen } from 'test'

import { App } from './App'

describe('App', () => {
  it('displays header ', () => {
    render(<App />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })
})
