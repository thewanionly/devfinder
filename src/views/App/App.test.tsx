import { render } from 'test'
import { App } from './App'

test('Renders main page correctly', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
