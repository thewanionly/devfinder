import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'test'

import { Button } from './Button'

describe('Button', () => {
  it('displays the text passed in the label prop', () => {
    const buttonLabel = 'Click me'
    render(<Button label={buttonLabel} />)

    const button = screen.getByRole('button')
    expect(button).toHaveAccessibleName(buttonLabel)
  })

  it('displays the children passed to the button', () => {
    const buttonLabel = 'Click me'
    render(
      <Button>
        <span>{buttonLabel}</span>
      </Button>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAccessibleName(buttonLabel)
  })

  it('calls the function passed in the `onClick` prop', async () => {
    const buttonLabel = 'Click me'
    const onClickHandler = jest.fn()
    render(<Button label={buttonLabel} onClick={onClickHandler} />)

    const button = screen.getByRole('button', { name: buttonLabel })
    userEvent.click(button)

    await waitFor(() => expect(onClickHandler).toHaveBeenCalled())
  })
})
