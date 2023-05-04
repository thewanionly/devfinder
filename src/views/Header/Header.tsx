import { useEffect } from 'react'
import styled from 'styled-components'

import { Icon } from 'components'
import { useAppThemeContext, APP_THEME_MAP } from 'context'
import { HEADER_TITLE } from './Header.constants'

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
  const { appTheme, toggleAppTheme } = useAppThemeContext()

  const { label, icon } = APP_THEME_MAP[appTheme]

  useEffect(() => {
    function preventSelection(event: MouseEvent) {
      if (event.detail > 1) {
        event.preventDefault()
      }
    }

    document.addEventListener('mousedown', preventSelection, false)

    return () => document.removeEventListener('mousedown', preventSelection, false)
  }, [])

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
