import { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { GlobalStyles, Theme } from 'styles'

type RootWrapperProps = {
  children?: React.ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
const RootWrapper = ({ children }: RootWrapperProps) => {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: RootWrapper, ...options })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

export { customRender as render }
