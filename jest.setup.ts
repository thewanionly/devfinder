import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { setLogger } from 'react-query'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

beforeAll(() => {
  setLogger({
    log: window.console.log,
    warn: window.console.warn,
    error: () => {
      // disable error logging
    },
  })
})

afterAll(() => {
  setLogger(window.console)
})
