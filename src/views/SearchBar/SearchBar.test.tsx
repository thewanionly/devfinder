import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'test'

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

  it('displays error text', () => {
    const errorText = 'No results'
    render(<SearchBar errorMessage={errorText} />)

    const errorTextEl = screen.getByText(errorText)
    expect(errorTextEl).toBeInTheDocument()
  })

  it('calls the function passed in the `onSearch` prop when search button is clicked', async () => {
    const onSearchHandler = jest.fn()
    render(<SearchBar onSearch={onSearchHandler} />)

    const button = screen.getByRole('button', { name: /search/i })
    userEvent.click(button)

    await waitFor(() => expect(onSearchHandler).toHaveBeenCalled())
  })

  it('calls the function passed in the `onSearch` prop when Enter key is pressed', async () => {
    const onSearchHandler = jest.fn()
    render(<SearchBar onSearch={onSearchHandler} />)

    const searchInput = screen.getByRole('textbox')
    userEvent.type(searchInput, 'a{enter}')

    await waitFor(() => expect(onSearchHandler).toHaveBeenCalled())
  })
})
