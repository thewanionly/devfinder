import styled from 'styled-components'

import { Icon } from 'components'
import { useAppThemeContext, APP_THEME_MAP } from 'context'
import { HEADER_TITLE } from './Header.constants'

const S = {
  Header: styled.header`
    margin: 3.1rem auto 0;
    max-width: 73rem;
    min-width: 32.7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      margin-top: 14rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      margin-top: 14.4rem;
    }
  `,
  HeaderTitle: styled.h1`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    line-height: 3.9rem;
    color: ${({ theme: { colors } }) => colors.appHeaderText};
  `,
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
    user-select: none;
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
  const { appTheme, toggleAppTheme } = useAppThemeContext()

  const { label, icon } = APP_THEME_MAP[appTheme]

  return (
    <S.Header>
      <S.HeaderTitle>{HEADER_TITLE}</S.HeaderTitle>
      <S.DarkModeToggle onClick={toggleAppTheme}>
        <S.DarkModeToggleText>{label}</S.DarkModeToggleText>
        <S.DarkModeToggleIcon name={icon} />
      </S.DarkModeToggle>
    </S.Header>
  )
}
