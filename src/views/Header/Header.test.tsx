import userEvent from '@testing-library/user-event'
import { render, screen } from 'test'

import { Header } from './Header'
import { APP_THEME_MAP, DARK_MODE_STORAGE_KEY } from 'context'
import { AppTheme } from 'types'

import { HEADER_TITLE } from './Header.constants'

beforeEach(() => {
  localStorage.clear()
})

describe('Header', () => {
  it('displays header title', () => {
    render(<Header />)

    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(new RegExp(HEADER_TITLE))
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

  it(`toggles the label from ${APP_THEME_MAP.light.label} to ${APP_THEME_MAP.dark.label} and vice versa when dark mode toggle text is clicked`, async () => {
    // Set default appTheme to light
    const mockedAppTheme = AppTheme.Light
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(mockedAppTheme !== AppTheme.Light))

    render(<Header />)

    // toggle to dark
    await userEvent.click(screen.getByText(new RegExp(APP_THEME_MAP[mockedAppTheme].label)))

    expect(screen.getByText(new RegExp(APP_THEME_MAP.dark.label))).toBeInTheDocument()

    // toggle back to light
    await userEvent.click(screen.getByText(new RegExp(APP_THEME_MAP.dark.label)))

    expect(screen.getByText(new RegExp(APP_THEME_MAP[mockedAppTheme].label))).toBeInTheDocument()
  })

  it(`toggles the label from ${APP_THEME_MAP.light.label} to ${APP_THEME_MAP.dark.label} and vice versa when dark mode toggle icon is clicked`, async () => {
    // Set default appTheme to light
    const mockedAppTheme = AppTheme.Light
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(mockedAppTheme !== AppTheme.Light))

    render(<Header />)

    // toggle to dark
    await userEvent.click(screen.getByLabelText(`${APP_THEME_MAP[mockedAppTheme].icon} icon`))

    expect(screen.getByText(new RegExp(APP_THEME_MAP.dark.label))).toBeInTheDocument()

    // toggle back to light
    await userEvent.click(screen.getByLabelText(`${APP_THEME_MAP.dark.icon} icon`))

    expect(screen.getByText(new RegExp(APP_THEME_MAP[mockedAppTheme].label))).toBeInTheDocument()
  })

  it(`toggles the icon from ${APP_THEME_MAP.light.icon} to ${APP_THEME_MAP.dark.icon} and vice versa when dark mode toggle text is clicked`, async () => {
    // Set default appTheme to light
    const mockedAppTheme = AppTheme.Light
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(mockedAppTheme !== AppTheme.Light))

    render(<Header />)

    // toggle to dark
    await userEvent.click(screen.getByText(new RegExp(APP_THEME_MAP[mockedAppTheme].label)))

    expect(screen.getByLabelText(`${APP_THEME_MAP.dark.icon} icon`)).toBeInTheDocument()

    // toggle back to light
    await userEvent.click(screen.getByText(new RegExp(APP_THEME_MAP.dark.label)))

    expect(screen.getByLabelText(`${APP_THEME_MAP[mockedAppTheme].icon} icon`)).toBeInTheDocument()
  })

  it(`toggles the icon from ${APP_THEME_MAP.light.icon} to ${APP_THEME_MAP.dark.icon} and vice versa when dark mode toggle icon is clicked`, async () => {
    // Set default appTheme to light
    const mockedAppTheme = AppTheme.Light
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(mockedAppTheme !== AppTheme.Light))

    render(<Header />)

    // toggle to dark
    await userEvent.click(screen.getByLabelText(`${APP_THEME_MAP[mockedAppTheme].icon} icon`))

    expect(screen.getByLabelText(`${APP_THEME_MAP.dark.icon} icon`)).toBeInTheDocument()

    // toggle back to light
    await userEvent.click(screen.getByLabelText(`${APP_THEME_MAP.dark.icon} icon`))

    expect(screen.getByLabelText(`${APP_THEME_MAP[mockedAppTheme].icon} icon`)).toBeInTheDocument()
  })
})
