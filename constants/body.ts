import { mainTheme } from 'danni-s-design-system'

export const BACKGROUND = 'background'
export const SKIN = 'skin'
export const CLOTHES = 'clothes'
export const EYES = 'eyes'
export const EYEBROWS = 'eyebrows'

export const SLIM = 'slim'
export const PLUMP = 'plump'

export const SELECTOR_NAMES = [BACKGROUND, SKIN, CLOTHES, EYES, EYEBROWS]
export type SelectorName = keyof typeof SELECTOR_NAMES

export const LEFT = 'left'
export const RIGHT = 'right'

const RAINBOW_COLOUR =
  'linear-gradient(180deg, #FE0000 16.66%,#FD8C00 16.66%, 33.32%,#FFE500 33.32%, 49.98%,#119F0B 49.98%, 66.64%,#0644B3 66.64%, 83.3%,#C22EDC 83.3%)'
const ASEXUAL_COLOUR =
  'linear-gradient(180deg, #181818 25%, #A3A3A3 25%, 50%, #FFFFFF 50%, 75%, #800080 75%)'
const NONBINARY_COLOUR =
  'linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)'
const TRANSGENDER_COLOUR =
  'linear-gradient(180deg, #5BCEFA 20%, #F5A9B8 20%, 40%, #FFFFFF 40%, 60%, #F5A9B8 60%, 80%, #5BCEFA 80%)'
const BISEXUAL_COLOUR =
  'linear-gradient(180deg, #D60270 40%, #9B4F96 40%, 60%, #0038A8 60%)'
const PANSEXUAL_COLOUR =
  'linear-gradient(180deg, #FF218C 33.33%, #FFD800 33.33%, 66.66%, #21B1FF 66.66%)'
const GENDER_QUEER_COLOUR =
  'linear-gradient(180deg, #B57EDC 33.33%, #FFFFFF 33.33%, 66.66%, #4A8123 66.66%)'
const LESBIAN_COLOUR =
  'linear-gradient(180deg, #A60061 14.285%,#B95393 14.285%, 28.57%, #D260A7 28.57%, 42.855%,#EDEDEB 42.855%, 57.14%, #E5ABD0 57.14%, 71.425%,#C74D52 71.425%, 85.71%, #8C1D00 85.71%)'
const AROMANTIC_COLOUR =
  'linear-gradient(180deg, #39A33E 20%, #A2CF72 20%, 40%, #FFFFFF 40%, 60%, #A3A3A3 60%, 80%, #181818 80%);'
const DUNE_SUNSET =
  'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
const PURPLE_BLAST =
  'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
const KYOOPAL = 'linear-gradient(to right, #dd3e54, #6be585)'
const MOONLIT_ASTEROID = 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'
const QUEPAL = 'linear-gradient(to right, #11998e, #38ef7d)'
const AQUALICIOUS = 'linear-gradient(to right, #50c9c3, #96deda)'
const WITCHING_HOUR = 'linear-gradient(to right, #c31432, #240b36)'
const ULTRA_VIOLET = 'linear-gradient(to right, #654ea3, #eaafc8)'
const RASTAFARI = 'linear-gradient(to right, #1e9600, #fff200, #ff0000)'
const BEYOND = 'linear-gradient(to right, #f0f2f0, #000c40)'

export const BACKGROUND_COLOURS = {
  YELLOW: 'yellow',
  GREEN: mainTheme.colours.accentDark,
  MIST: mainTheme.colours.accentLightest,
  PEACH: '#F5B041',
  AQUAMARINE: '#7FFFD4',
  SALMON: '#FA8072',
  STEEL_BLUE: '#4682B4',
  MAROON: '#800000',
  DUNE_SUNSET,
  MOONLIT_ASTEROID,
  QUEPAL,
  PURPLE_BLAST,
  AQUALICIOUS,
  KYOOPAL,
  RAINBOW: RAINBOW_COLOUR,
  NONBINARY: NONBINARY_COLOUR,
  TRANSGENDER: TRANSGENDER_COLOUR,
  GENDER_QUEER: GENDER_QUEER_COLOUR,
  LESBIAN: LESBIAN_COLOUR,
  ASEXUAL: ASEXUAL_COLOUR,
  AROMANTIC: AROMANTIC_COLOUR,
  BISEXUAL: BISEXUAL_COLOUR,
  PANSEXUAL: PANSEXUAL_COLOUR,
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
  PALE_BLUE: '#AFEEEE',
  PALE_GREEN: '#98FB98',
  OLIVE: '#BAB86C',
}

export const CLOTHES_COLOURS = {
  LAWN: mainTheme.colours.complementaryDark,
  BLUE: 'blue',
  SALMON: 'salmon',
  DARK_GREEN: mainTheme.colours.accentDark,
  MAROON: '#800000',
  BLACK: 'black',
  GREY: 'grey',
  ORANGE: 'orange',
  MILK: '#FDFFF5',
  WITCHING_HOUR,
  ULTRA_VIOLET,
  RASTAFARI,
  BEYOND,
  RAINBOW: RAINBOW_COLOUR,
  NONBINARY: NONBINARY_COLOUR,
  TRANSGENDER: TRANSGENDER_COLOUR,
  GENDER_QUEER: GENDER_QUEER_COLOUR,
  LESBIAN: LESBIAN_COLOUR,
  ASEXUAL: ASEXUAL_COLOUR,
  AROMANTIC: AROMANTIC_COLOUR,
  BISEXUAL: BISEXUAL_COLOUR,
  PANSEXUAL: PANSEXUAL_COLOUR,
}

export const HAIR_COLOURS = {
  SMOKY_BLACK: '#100C07',
  BLACK_OLIVE: '#3D3D3D',
  CHARLESTON_GREEN: '#2B2B2B',
  ROOT_BEAR: '#23120B',
  BISTRE: '#3D2314',
  FUR: '#5A3825',
  SAND: '#C2B280',
  BARN_RED: '#7C0A02',
  SEAL_BROWN: '#5D1916',
  CARROT: '#DE8A19',
  BEER: '#FF9321',
  METALIC_ORANGE: '#DA680F',
  COPPER: '#B87333',
  CHESTNUT: '#97502D',
  DARK_SIENNA: '#401215',
  SMOKY_TOPAZ: '#9A4442',
  SALMON: 'salmon',
  SMOKE: '#505050',
  ARGENT: '#C0C0C0',
  GOLD: '#E6BE8A',
  MAIZE: '#FFCC47',
  CYAN: '#3264C8',
}

export const ALL_COLOURS = {
  ...BACKGROUND_COLOURS,
  ...SKIN_COLOURS,
  ...CLOTHES_COLOURS,
}
