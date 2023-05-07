import { QueryClient, QueryClientProvider } from 'react-query'
import styled from 'styled-components'

import { Header } from 'views/Header'
import { MainSection } from 'views/MainSection'

const S = {
  App: styled.div`
    padding: 0 2.4rem;
  `,
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const App = () => (
  <S.App>
    <Header />
    <QueryClientProvider client={queryClient}>
      <MainSection />
    </QueryClientProvider>
  </S.App>
)
