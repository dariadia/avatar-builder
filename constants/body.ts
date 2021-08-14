import { mainTheme } from 'danni-s-design-system'

export const BACKGROUND = 'background'
export const SKIN = 'skin'

export const SELECTOR_NAMES = [BACKGROUND, SKIN]
export type SelectorName = keyof typeof SELECTOR_NAMES

export const LEFT = 'left'
export const RIGHT = 'right'

const RAINBOW_COLOUR =
  'linear-gradient(180deg, #FE0000 16.66%,#FD8C00 16.66%, 33.32%,#FFE500 33.32%, 49.98%,#119F0B 49.98%, 66.64%,#0644B3 66.64%, 83.3%,#C22EDC 83.3%)'
const ASEXUAL_COLOUR =
  'linear-gradient(180deg, #181818 25%, #A3A3A3 25%, 50%, #FFFFFF 50%, 75%, #800080 75%)'
const NONBINARY_COLOUR =
  'linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)'

export const BACKGROUND_COLOURS = {
  YELLOW: 'yellow',
  GREEN: mainTheme.colours.accentDark,
  MIST: mainTheme.colours.accentLightest,
  RAINBOW: RAINBOW_COLOUR,
  ASEXUAL: ASEXUAL_COLOUR,
  NONBINARY: NONBINARY_COLOUR,
}

export const SKIN_COLOURS = {
  DARK_CHOCOLATE: '#33101C',
  CHOCOLATE: '#8D5524',
  CARAMEL: '#C68642',
  WHISKEY: '#D2996C',
  CONDENSED_MILK: '#E0AC69',
  HONEY: '#F1C27D',
  CREAM: '#FFDBAC',
  MILK: '#FDFFF5',
}
