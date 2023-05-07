import { BREAKPOINTS, COLORS, TYPOGRAPHY } from 'styles/variables'
import { AppTheme } from 'types'

// Declare properties that are meaningful to your app
export const theme = {
  colors: {
    [AppTheme.Light]: {
      appBg: COLORS.zircon,
      appHeaderText: COLORS.dark,
      appThemeToggle: COLORS.kashmirBlue,
      appThemeToggleHover: COLORS.dark,
      bodyText: COLORS.kashmirBlue,
      buttonBg: COLORS.deepSkyBlue,
      buttonBgHover: COLORS.crystalBlue,
      buttonText: COLORS.white,
      searchBarBg: COLORS.white,
      searchIcon: COLORS.deepSkyBlue,
      searchError: COLORS.coralRed,
    },
    [AppTheme.Dark]: {
      appBg: COLORS.mirage,
      appHeaderText: COLORS.white,
      appThemeToggle: COLORS.white,
      appThemeToggleHover: COLORS.blueBell,
      bodyText: COLORS.white,
      buttonBg: COLORS.deepSkyBlue,
      buttonBgHover: COLORS.crystalBlue,
      buttonText: COLORS.white,
      searchBarBg: COLORS.blueZodiac,
      searchIcon: COLORS.deepSkyBlue,
      searchError: COLORS.coralRed,
    },
  },
  fonts: {
    primary: TYPOGRAPHY.space_mono,
  },
  fontSizes: {
    xs: TYPOGRAPHY.fontSizeXs,
    sm1: TYPOGRAPHY.fontSizeSm1,
    sm2: TYPOGRAPHY.fontSizeSm2,
    reg: TYPOGRAPHY.fontSizeReg,
    med: TYPOGRAPHY.fontSizeMed,
    lg: TYPOGRAPHY.fontSizeLg,
    xl: TYPOGRAPHY.fontSizeXl,
  },
  fontWeights: {
    regular: TYPOGRAPHY.fontWeightRegular,
    bold: TYPOGRAPHY.fontWeightBold,
  },
  breakPoints: {
    mobile: BREAKPOINTS.mobile,
    tabletPortrait: BREAKPOINTS.tabletPortrait,
    tabletLandscape: BREAKPOINTS.tabletLandscape,
    desktop: BREAKPOINTS.desktop,
    desktopLarge: BREAKPOINTS.desktopLarge,
  },
}
