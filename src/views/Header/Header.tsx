import styled from 'styled-components'

const S = {
  Header: styled.header`
    margin: 3.1rem auto 3.6rem;
    max-width: 73rem;
    min-width: 32.7rem;
    padding: 0 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  HeaderTitle: styled.h1``,
  DarkModeToggle: styled.div``,
  DarkModeToggleText: styled.span`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    line-height: 1.9rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    color: ${({ theme: { colors } }) => colors.appHeaderText};
  `,
}

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderTitle>devfinder</S.HeaderTitle>
      <S.DarkModeToggle>
        <S.DarkModeToggleText>Light</S.DarkModeToggleText>
      </S.DarkModeToggle>
    </S.Header>
  )
}
