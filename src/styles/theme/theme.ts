import { rgba } from 'polished'
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from 'styles/variables'

// Declare properties that are meaningful to your app
export const theme = {
  colors: {
    bodyText: COLORS.white,
    bodyText2: rgba(COLORS.white, 0.8),
  },
  fonts: {
    primary: TYPOGRAPHY.sans_serif,
  },
  fontSizes: {
    reg: TYPOGRAPHY.fontSizeReg,
  },
  fontWeights: {
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
