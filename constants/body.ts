import { mainTheme } from 'danni-s-design-system'

export const BACKGROUND = 'background'
export const SKIN = 'skin'
export const CLOTHES = 'clothes'
export const EYES = 'eyes'
export const EYEBROWS = 'eyebrows'
export const MOUTH = 'mouth'
export const NOSE = 'nose'
export const HAIR = 'hair'

export const SLIM = 'SLIM'
export const PLUMP = 'PLUMP'
export const BUSHY = 'BUSHY'
export const DASHED = 'DASHED'
export const DEFAULT = 'DEFAULT'
export const TYPE = 'TYPE'
export const COLOUR = 'COLOUR'
export const EYEBROWS_TYPES = [DEFAULT, BUSHY, SLIM, DASHED]
export const SAD = 'SAD'
export const CONFUSED = 'CONFUSED'
export const SHOCKED = 'SHOCKED'
export const SMILE = 'SMILE'
export const MOUTH_TYPES = [SLIM, SMILE, PLUMP, SAD, CONFUSED, SHOCKED]
export const WAVES = 'WAVES'
export const HAIR_TYPES = [WAVES, BUSHY]

export const SKIN_OUTLINE = '1px solid rgba(0, 0, 0, 0.08)'

export const SELECTOR_NAMES = [
  BACKGROUND,
  SKIN,
  CLOTHES,
  EYES,
  EYEBROWS,
  MOUTH,
  NOSE,
  HAIR,
]
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

export const EYEBROWS_COLOURS = {
  ESPRESSO: '#030303',
  SMOKE: '#505050',
  ARGENT: '#C0C0C0',
  QUICK_SILVER: '#A2A39D',
  DEW: '#F5F7F2',
  GHOST_WHITE: '#F9F7FD',
  SPICE: '#8C6448',
  CAPPUCCINO: '#9C836B',
  DEER: '#BD7E5D',
  CARROT: '#DE8A19',
  BEER: '#FF9321',
  METALIC_ORANGE: '#DA680F',
  ORANGE: '#FF5500',
  PERSIAN_SUN: '#D4392D',
  BURN: '#C20507',
  IVORY: '#FEFFEC',
  BLOND: '#FAF0BE',
  CHAMPAGNE: '#FCDEA3',
  SAND: '#E6BE8A',
  MAIZE: '#FFCC47',
  PALE_SALMON: '#FFA37B',
  SALMON: 'salmon',
  STRAWBERRY: '#FC5A8D',
  ROSE_DUST: '#9E586D',
  WHITE_COFFEE: '#E9E1D4',
  SHADOW: '#7587B4',
  CYAN: '#3264C8',
  MINT: '#AAF0D0',
  DARK_MINT: '#3EB489',
  SPRING_BUD: '#BDD993',
  IGUANA: '#76B878',
  VELVET: '#8240AD',
}

export const HAIR_COLOURS = {
  ...EYEBROWS_COLOURS,
  SMOKY_BLACK: '#100C07',
  ESPRESSO: '#030303',
  CHARLESTON_GREEN: '#2B2B2B',
  BLACK_OLIVE: '#3D3D3D',
  SMOKE: '#505050',
  ARGENT: '#C0C0C0',
  QUICK_SILVER: '#A2A39D',
  DEW: '#F5F7F2',
  GHOST_WHITE: '#F9F7FD',
  ROOT_BEAR: '#23120B',
  BISTRE: '#3D2314',
  FUR: '#5A3825',
  BROWN_COFFEE: '#4A2E2C',
  SPICE: '#8C6448',
  GARNET: '#663533',
  SUGAR_COFFEE: '#704140',
  RAW_UMBER: '#805D49',
  CAPPUCCINO: '#9C836B',
  DEER: '#BD7E5D',
  BARN_RED: '#7C0A02',
  SEAL_BROWN: '#5D1916',
  COPPER: '#B87333',
  CARROT: '#DE8A19',
  BEER: '#FF9321',
  METALIC_ORANGE: '#DA680F',
  ORANGE: '#FF5500',
  PERSIAN_SUN: '#D4392D',
  BURN: '#C20507',
  CHESTNUT: '#97502D',
  DARK_SIENNA: '#401215',
  SMOKY_TOPAZ: '#9A4442',
  IVORY: '#FEFFEC',
  BLOND: '#FAF0BE',
  CHAMPAGNE: '#FCDEA3',
  PALE_PEACH: '#FFCB8E',
  SAND: '#E6BE8A',
  GOLDENROD: '#BB8719',
  MAIZE: '#FFCC47',
  PALE_SALMON: '#FFA37B',
  SALMON: 'salmon',
  STRAWBERRY: '#FC5A8D',
  ROSE: '#FF66CD',
  JAZZBERRY: '#AB155F',
  ROSE_DUST: '#9E586D',
  ROSE_GOLD: '#B77079',
  WHITE_COFFEE: '#E9E1D4',
  MOUNTBATTEN_PINK: '#A0878A',
  CADET: '#253354',
  SHADOW: '#7587B4',
  CYAN: '#3264C8',
  JORDY: '#9BB3EB',
  AERO_BLUE: '#D9FFEE',
  MINT: '#AAF0D0',
  DARK_MINT: '#3EB489',
  GREEN_TEA: '#D1F0BD',
  SPRING_BUD: '#BDD993',
  IGUANA: '#76B878',
  AVOCADO: '#5D8700',
  VELVET: '#8240AD',
  BYZANTIUM: '#762E56',
  PRUNE: '#461449',
}

export const MOUTH_COLOURS = {
  ...SKIN_COLOURS,
  SMOKY_BLACK: '#100C07',
  QUICK_SILVER: '#A2A39D',
  BEER: '#FF9321',
  PERSIAN_SUN: '#D4392D',
  BURN: '#C20507',
  CHAMPAGNE: '#FCDEA3',
  SALMON: 'salmon',
  ROSE: '#FF66CD',
  JAZZBERRY: '#AB155F',
  CADET: '#253354',
  JORDY: '#9BB3EB',
  AVOCADO: '#5D8700',
  VELVET: '#8240AD',
}

export const MOUTH_EMOTIONS_EMOJI = {
  SLIM: '😐',
  SMILE: '🙂',
  PLUMP: '👄',
  SAD: '🙁',
  CONFUSED: '😐',
  SHOCKED: '😮',
}

export const ALL_COLOURS = {
  ...BACKGROUND_COLOURS,
  ...SKIN_COLOURS,
  ...CLOTHES_COLOURS,
}

export const defaultAvatarState = {
  [BACKGROUND]: 'MIST',
  [SKIN]: 'SLIM:CHOCOLATE',
  [CLOTHES]: 'BLUE',
  [EYES]: 'OVAL',
  [EYEBROWS]: 'DEFAULT:PERSIAN_SUN',
  [MOUTH]: 'SLIM:CHOCOLATE',
  [NOSE]: 'BUTTON',
  [HAIR]: 'WAVES:GARNET',
}
