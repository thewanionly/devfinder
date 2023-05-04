import { render, screen } from 'test'

import { Header } from './Header'
import {
  APP_THEME_MAP,
  DARK_MODE_STORAGE_KEY,
} from 'context/AppThemeContext/AppThemeContext.constants'
import { AppTheme } from 'types'

beforeEach(() => {
  localStorage.clear()
})

describe('Header', () => {
  it('displays header title', () => {
    render(<Header />)

    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/devfinder/i)
  })

  it('displays dark mode toggle text', () => {
    // Set default appTheme to light
    const mockedAppTheme = AppTheme.Light
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(mockedAppTheme !== AppTheme.Light))

    render(<Header />)

    const { label } = APP_THEME_MAP[mockedAppTheme]

    const toggleText = screen.getByText(new RegExp(label))

    expect(toggleText).toBeInTheDocument()
  })

  it('displays dark mode toggle icon', () => {
    // Set default appTheme to light
    const mockedAppTheme = AppTheme.Light
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(mockedAppTheme !== AppTheme.Light))

    render(<Header />)

    const { icon } = APP_THEME_MAP[mockedAppTheme]

    const iconEl = screen.getByLabelText(`${icon} icon`)

    expect(iconEl).toBeInTheDocument()
  })
})
