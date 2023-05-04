import { render, screen } from 'test'

import { Header } from './Header'
import { IconName } from 'components'

describe('Header', () => {
  it('displays header title', () => {
    render(<Header />)

    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/devfinder/i)
  })

  it('displays dark mode toggle text', () => {
    render(<Header />)

    // TODO: value here should be the default value of the toggle
    const toggleText = screen.getByText(/dark/i)

    expect(toggleText).toBeInTheDocument()
  })

  it('displays dark mode toggle icon', () => {
    render(<Header />)

    // TODO: value here should be the default icon of the toggle
    const iconName = IconName.Moon

    const icon = screen.getByLabelText(`${iconName} icon`)

    expect(icon).toBeInTheDocument()
  })
})
