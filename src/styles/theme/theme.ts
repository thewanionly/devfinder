import { rgba } from 'polished'
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
      searchBarBoxShadow: rgba(COLORS.iris, 0.198567),
      searchIcon: COLORS.deepSkyBlue,
      searchError: COLORS.coralRed,
      userDetailsCardBg: COLORS.white,
      userDetailsCardBoxShadow: rgba(COLORS.iris, 0.198567),
      userDetailsHeaderText: COLORS.gunmetal,
      userDetailsUsername: COLORS.deepSkyBlue,
      userDetailsJoinedDate: COLORS.greyishBlue,
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
      searchBarBoxShadow: 'none',
      searchIcon: COLORS.deepSkyBlue,
      searchError: COLORS.coralRed,
      userDetailsCardBg: COLORS.blueZodiac,
      userDetailsCardBoxShadow: 'none',
      userDetailsHeaderText: COLORS.white,
      userDetailsUsername: COLORS.deepSkyBlue,
      userDetailsJoinedDate: COLORS.white,
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
