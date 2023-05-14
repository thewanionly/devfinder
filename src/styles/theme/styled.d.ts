import 'styled-components'

// This type declaration should match the `theme` prop of the ThemeProvider, not the one declared in `theme.ts`
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      appBg: string
      appHeaderText: string
      appThemeToggle: string
      appThemeToggleHover: string
      bodyText: string
      buttonBg: string
      buttonBgHover: string
      buttonText: string
      loadingDot: string
      searchBarBg: string
      searchBarBoxShadow: string
      searchIcon: string
      searchError: string
      userDetailsCardBg: string
      userDetailsCardBoxShadow: string
      userDetailsHeaderText: string
      userDetailsUsername: string
      userDetailsJoinedDate: string
      userDetailsStats: string
      userDetailsStatLabel: string
      userDetailsStatValue: string
      userDetailsSocials: string
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
