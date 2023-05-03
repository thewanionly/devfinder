import styled from 'styled-components'

const S = {
  Header: styled.header`
    margin: 3.1rem auto 3.6rem;
    max-width: 73rem;
    min-width: 32.7rem;
    padding: 0 2.4rem;
  `,
  HeaderTitle: styled.h1``,
}

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderTitle>devfinder</S.HeaderTitle>
    </S.Header>
  )
}
