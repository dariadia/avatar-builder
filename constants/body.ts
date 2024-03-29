import { mainTheme } from 'danni-s-design-system'

export const BACKGROUND = 'background'
export const SKIN = 'skin'
export const CLOTHES = 'clothes'
export const EYES = 'eyes'
export const EYEBROWS = 'eyebrows'
export const MOUTH = 'mouth'
export const NOSE = 'nose'
export const HAIR = 'hair'
export const EARS = 'ears'
export const FACIAL_HAIR = 'facial_hair'
export const FRECKLES = 'freckles'
export const GLASSES = 'glasses'

export const SLIM = 'SLIM'
export const PLUMP = 'PLUMP'
export const BUSHY = 'BUSHY'
export const DASHED = 'DASHED'
export const DEFAULT = 'DEFAULT'
export const TYPE = 'TYPE'
export const COLOUR = 'COLOUR'

export const MOUSTACHE = 'MOUSTACHE'
export const BEARD = 'BEARD'
export const PENCIL = 'PENCIL'
export const GOATY = 'GOATY'
export const MOUSE = 'MOUSE'
export const DEVIL = 'DEVIL'
export const NONE = 'NONE'
export const DOUG = 'DOUG'
export const LAMPSHADE = 'LAMPSHADE'
export const PAINTERS = 'PAINTERS'
export const WALRUS = 'WALRUS'
export const PYRAMID = 'PYRAMID'
export const INFINITY = 'INFINITY'
export const HORSESHOE = 'HORSESHOE'
export const DALI = 'DALI'
export const FOX = 'FOX'
export const MASTER = 'MASTER'
export const BOW = 'BOW'
export const GLAZE = 'GLAZE'

export const EYEBROWS_TYPES = [DEFAULT, BUSHY, SLIM, DASHED]
export const FACIAL_HAIR_TYPES = [
  MOUSTACHE,
  PENCIL,
  MOUSE,
  DOUG,
  LAMPSHADE,
  PAINTERS,
  PYRAMID,
  WALRUS,
  HORSESHOE,
  FOX,
  DALI,
  INFINITY,
  BOW,
  BEARD,
  MASTER,
  GOATY,
  GLAZE,
  NONE,
]

export const SUN_TOUCHED = 'SUN_TOUCHED'
export const SUN_KISSED = 'SUN_KISSED'
export const SUN_STRUCK = 'SUN_STRUCK'
export const MARILYN_MONROE = 'MARILYN_MONROE'
export const LA_BOUFF = 'LA_BOUFF'
export const ARISTOCRAT = 'ARISTOCRAT'
export const GENTRY = 'GENTRY'
export const EARL = 'EARL'
export const VISCOUNT = 'VISCOUNT'
export const PARSON = 'PARSON'

export const FRECKLES_TYPES = [
  SUN_TOUCHED,
  SUN_KISSED,
  SUN_STRUCK,
  MARILYN_MONROE,
  LA_BOUFF,
  ARISTOCRAT,
  GENTRY,
  EARL,
  VISCOUNT,
  PARSON,
  NONE,
]

export const SAD = 'SAD'
export const CONFUSED = 'CONFUSED'
export const SHOCKED = 'SHOCKED'
export const SMILE = 'SMILE'
export const MOUTH_TYPES = [SLIM, SMILE, PLUMP, SAD, CONFUSED, SHOCKED]

export const DARIA = 'DARIA'
export const GUILLERMO = 'GUILLERMO'
export const COLIN_ROBINSON = 'COLIN_ROBINSON'
export const CHARLOTTE_HARRIS = 'CHARLOTTE_HARRIS'
export const OFFICE = 'OFFICE'
export const NEW_KID = 'NEW_KID'
export const FRESHMAN = 'FRESHMAN'
export const SOPHOMORE = 'SOPHOMORE'
export const JUNIOR = 'JUNIOR'
export const SENIOR = 'SENIOR'
export const CARL_FREDRICKSEN = 'CARL_FREDRICKSEN'
export const GLASSES_TYPES = [
  DARIA,
  GUILLERMO,
  OFFICE,
  NEW_KID,
  FRESHMAN,
  COLIN_ROBINSON,
  SOPHOMORE,
  CARL_FREDRICKSEN,
  CHARLOTTE_HARRIS,
  JUNIOR,
  SENIOR,
  '',
]

export const WAVES = 'WAVES'
export const TIDE = 'TIDE'
export const EBB = 'EBB'
export const MINIMALISM = 'MINIMALISM'
export const AUSTERE = 'AUSTERE'
export const UHURA = 'UHURA'
export const MASKED = 'MASKED'
export const CROW = 'CROW'
export const WARRIOR = 'WARRIOR'
export const GIDEON = 'GIDEON'
export const WATERFALL = 'WATERFALL'
export const HAMILTON = 'HAMILTON'
export const STICKY_BUNS = 'STICKY_BUNS'
export const GLIMMER = 'GLIMMER'
export const MADDIE = 'MADDIE'
export const BREEZE = 'BREEZE'

export const SHORT = 'SHORT'
export const MIDDLE = 'MIDDLE'
export const LONG = 'LONG'
export const SPECIAL = 'SPECIAL'

export const SHORT_HAIR_TYPES = [
  MINIMALISM,
  AUSTERE,
  UHURA,
  MASKED,
  WARRIOR,
  CROW,
  GIDEON,
]
export const MIDDLE_HAIR_TYPES = [
  WATERFALL,
  GLIMMER,
  MADDIE,
  BREEZE,
  EBB,
  MOUSE,
  DEVIL,
]
export const LONG_HAIR_TYPES = [WAVES, TIDE, BUSHY]
export const SPECIAL_HAIR_TYPES = [HAMILTON, STICKY_BUNS]
export const HAIR_TYPES = [
  ...SHORT_HAIR_TYPES,
  ...MIDDLE_HAIR_TYPES,
  ...LONG_HAIR_TYPES,
  ...SPECIAL_HAIR_TYPES,
]

export const ROUND = 'ROUND'
export const VULCAN = 'VULCAN'
export const KITTY = 'KITTY'
export const DUMPLING = 'DUMPLING'
export const PIZZA = 'PIZZA'
export const BUN = 'BUN'
export const WITCH = 'WITCH'
export const VEE = 'VEE'
export const ELF = 'ELF'
export const SANATA_S_ELF = 'SANATA_S_ELF'
export const CAT = 'CAT'
export const EARS_TYPES = [
  ROUND,
  DUMPLING,
  PIZZA,
  BUN,
  WITCH,
  VEE,
  ELF,
  SANATA_S_ELF,
  VULCAN,
  CAT,
  KITTY,
]

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
  EARS,
  FACIAL_HAIR,
  FRECKLES,
  GLASSES,
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
const SWAMP = 'linear-gradient(to bottom, #6a9113, #141517)'
const OCEAN_BLUES = 'linear-gradient(to left, #373b44, #4286f4)'
const DJ_SHINE = 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)'
const YODA_RAVE = 'linear-gradient(to right, #ff0099, #493240)'
const SEA_HUGS = 'linear-gradient(to right, #2b5876, #4e4376)'
const NOON_TO_DUSK = 'linear-gradient(to right, #ff6e7f, #bfe9ff)'
const SOVIET = 'linear-gradient(to right, #e52d27, #b31217)'
const INDIGO_BURN = 'linear-gradient(to right, #aa076b, #61045f)'
const MIDNIGHT_OUT = 'linear-gradient(to right, #232526, #414345)'

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
  SWAMP,
  OCEAN_BLUES,
  DJ_SHINE,
  YODA_RAVE,
  SEA_HUGS,
  NOON_TO_DUSK,
  SOVIET,
  INDIGO_BURN,
  MIDNIGHT_OUT,
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
  CHAK_CHAK: '#E9AE92',
  HONEY: '#F1C27D',
  CREAM: '#FFDBAC',
  CREAMIER: '#FDE0CD',
  BURNT_MARSHMALLOW: '#FCF0E9',
  MARSHMALLOW: '#FBF0EF',
  MILK: '#FDFFF5',
  PALE_BLUE: '#AFEEEE',
  PALE_GREEN: '#98FB98',
  OLIVE: '#BAB86C',
  LILAC: '#DDD3EE',
}

export const CLOTHES_COLOURS = {
  LAWN: mainTheme.colours.complementaryDark,
  BLUE: 'blue',
  SALMON: 'salmon',
  NINETIES_RED: '#E30B5D',
  INDIGO: '#4B0082',
  GOLD: '#FFD700',
  DARK_GREEN: mainTheme.colours.accentDark,
  MAROON: '#800000',
  BLACK: 'black',
  GREY: 'grey',
  WOLF: '#4C4E52',
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
  COFFEE: '#463432',
  SPICE: '#8C6448',
  CAPPUCCINO: '#9C836B',
  DEER: '#BD7E5D',
  CARROT: '#DE8A19',
  BEER: '#FF9321',
  METALIC_ORANGE: '#DA680F',
  ORANGE: '#FF5500',
  DARK_ORANGE: '#AF3E12',
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
  WHITE_SAND: '#E7D9B2',
  PALE_BLOND: '#F9E4B9',
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

export const GLASSES_COLOURS = {
  ESPRESSO: '#030303',
  BLACK_OLIVE: '#3D3D3D',
  ARGENT: '#C0C0C0',
  GHOST_WHITE: '#F9F7FD',
  CADET: '#253354',
  CYAN: '#3264C8',
  JORDY: '#9BB3EB',
  AERO_BLUE: '#D9FFEE',
  DARK_MINT: '#3EB489',
  LANTERN: '#00FF00',
  SLYTHERIN: '#1A472A',
  GRAPES: '#B266B2',
  VELVET: '#8240AD',
  METALIC_ORANGE: '#DA680F',
  ORANGE: '#FF5500',
  FIRE: 'red',
  PALE_PEACH: '#FFCB8E',
  MAIZE: '#FFCC47',
  SALMON: 'salmon',
  STRAWBERRY: '#FC5A8D',
  ROSE: '#FF66CD',
  JAZZBERRY: '#AB155F',
}

export const MOUTH_EMOTIONS_EMOJI = {
  SLIM: '😐',
  SMILE: '🙂',
  PLUMP: '👄',
  SAD: '🙁',
  CONFUSED: '😕',
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
  [HAIR]: 'UHURA:GARNET',
  [EARS]: 'EARS:PIZZA',
  [FACIAL_HAIR]: 'MOUSTACHE:PERSIAN_SUN',
  [FRECKLES]: 'LA_BOUFF',
  [GLASSES]: 'GUILLERMO:LANTERN',
}
