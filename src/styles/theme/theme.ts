import { rgba } from 'polished'
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from 'styles/variables'

// Declare properties that are meaningful to your app
export const theme = {
  colors: {
    bodyText: COLORS.white,
    bodyText2: rgba(COLORS.white, 0.8),
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
