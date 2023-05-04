import { IconName } from 'components'
import { AppTheme } from 'types'

export const DARK_MODE_STORAGE_KEY = 'isDarkMode'

export const APP_THEME_MAP = {
  [AppTheme.Dark]: {
    label: 'Light',
    icon: IconName.Sun,
  },
  [AppTheme.Light]: {
    label: 'Dark',
    icon: IconName.Moon,
  },
}
