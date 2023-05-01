import 'styled-components'

// This type declaration should match theme.ts
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      appBgLight: string
      appBgDark: string
    }
    fonts: {
      primary: string
    }
    fontSizes: {
      xs: string
      sm1: string
      sm2: string
      reg: string
      med: string
      lg: string
      xl: string
    }
    fontWeights: {
      regular: number
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
