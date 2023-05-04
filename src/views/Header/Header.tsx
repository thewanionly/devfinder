import styled from 'styled-components'
import { Icon, IconName } from 'components'

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
  DarkModeToggle: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: ${({ theme: { colors } }) => colors.appThemeToggle};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.appThemeToggleHover};
    }
  `,
  DarkModeToggleText: styled.span`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    line-height: 1.9rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  `,
  DarkModeToggleIcon: styled(Icon)`
    width: 2rem;
    height: 2rem;

    &:hover {
      color: ${({ theme: { colors } }) => colors.appThemeToggleHover};
    }
  `,
}

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderTitle>devfinder</S.HeaderTitle>
      <S.DarkModeToggle>
        <S.DarkModeToggleText>Dark</S.DarkModeToggleText>
        <S.DarkModeToggleIcon name={IconName.Moon} />
      </S.DarkModeToggle>
    </S.Header>
  )
}
