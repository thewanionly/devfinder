import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    background-color: ${({ theme: { colors } }) => colors.appBg};
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

    & * {
      font-family: ${({ theme: { fonts } }) => fonts.primary};
      font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    }
  }

  h1 {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    line-height: 3.9rem;
    color: ${({ theme: { colors } }) => colors.appHeaderText};
  }

`
