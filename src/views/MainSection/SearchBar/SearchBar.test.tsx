import userEvent from '@testing-library/user-event'
import { render, screen } from 'test'

import { SearchBar } from './SearchBar'
import { IconName } from 'components'

describe('SearchBar', () => {
  it('displays search icon', () => {
    render(<SearchBar />)

    const searchIcon = screen.getByLabelText(`${IconName.Search} icon`)
    expect(searchIcon).toBeInTheDocument()
  })

  it('displays search input field', () => {
    render(<SearchBar />)

    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toBeInTheDocument()
  })

  it('displays passed placeholder prop', () => {
    render(<SearchBar placeholder="search placeholder" />)

    const searchInputPlaceholder = screen.getByPlaceholderText(/search placeholder/i)
    expect(searchInputPlaceholder).toBeInTheDocument()
  })

  it('displays search button', () => {
    render(<SearchBar />)

    const searchButton = screen.getByRole('button', { name: /search/i })
    expect(searchButton).toBeInTheDocument()
  })

  it('displays passed errorMessage prop', () => {
    const errorText = 'No results'
    render(<SearchBar errorMessage={errorText} />)

    const errorTextEl = screen.getByText(errorText)
    expect(errorTextEl).toBeInTheDocument()
  })

  it('displays Searching… text when isLoading prop is true', () => {
    render(<SearchBar isLoading />)

    const loadingText = screen.getByText(/searching…/i)
    expect(loadingText).toBeInTheDocument()
  })

  it('disables Search button when isLoading prop is true', () => {
    render(<SearchBar isLoading />)

    const searchButton = screen.getByRole('button', { name: /search/i })
    expect(searchButton).toBeDisabled()
  })

  it('calls the function passed in the `onSearch` prop when search button is clicked and searchTerm is not empty', async () => {
    const onSearchHandler = jest.fn()
    render(<SearchBar onSearch={onSearchHandler} />)

    const searchInput = screen.getByRole('textbox')
    await userEvent.type(searchInput, 'test')

    const button = screen.getByRole('button', { name: /search/i })
    await userEvent.click(button)

    expect(onSearchHandler).toHaveBeenCalled()
  })

  it('calls the function passed in the `onSearch` prop when Enter key is pressed and searchTerm is not empty', async () => {
    const onSearchHandler = jest.fn()
    render(<SearchBar onSearch={onSearchHandler} />)

    const searchInput = screen.getByRole('textbox')
    await userEvent.type(searchInput, 'a{enter}')

    expect(onSearchHandler).toHaveBeenCalled()
  })

  it('does not call the function passed in the `onSearch` prop when search button is clicked and searchTerm is empty', async () => {
    const onSearchHandler = jest.fn()
    render(<SearchBar onSearch={onSearchHandler} />)

    const button = screen.getByRole('button', { name: /search/i })
    await userEvent.click(button)

    expect(onSearchHandler).not.toHaveBeenCalled()
  })

  it('does not calls the function passed in the `onSearch` prop when Enter key is pressed and searchTerm is empty', async () => {
    const onSearchHandler = jest.fn()
    render(<SearchBar onSearch={onSearchHandler} />)

    const searchInput = screen.getByRole('textbox')
    await userEvent.type(searchInput, '{enter}')

    expect(onSearchHandler).not.toHaveBeenCalled()
  })
})
