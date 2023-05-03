import { render, screen } from 'test'

import { Header } from './Header'

describe('Header', () => {
  it('displays header title', () => {
    render(<Header />)

    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/devfinder/i)
  })
})
