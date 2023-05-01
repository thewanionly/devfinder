import 'styled-components'

// This type declaration should match theme.ts
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bodyText: string
      bodyText2: string
    }
    fonts: {
      primary: string
    }
    fontSizes: {
      reg: string
    }
    fontWeights: {
      bold: number
    }
    breakPoints: {
      mobile: string
      tabletPortrait: string
      tabletLandscape: string
      desktop: string
      desktopLarge: string
    }
  }
}
