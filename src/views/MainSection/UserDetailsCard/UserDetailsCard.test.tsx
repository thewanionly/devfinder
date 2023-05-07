import { render } from 'test'

import { UserDetailsCard } from './UserDetailsCard'

describe('UserDetailsCard', () => {
  it('displays user name', () => {
    render(<UserDetailsCard />)
  })
})
