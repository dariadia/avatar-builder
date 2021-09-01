import { ConstrainedBoxProps } from 'danni-s-design-system'
import {
  BACKGROUND_COLOURS,
  SKIN_COLOURS,
  CLOTHES_COLOURS,
  HAIR_COLOURS,
  EYEBROWS_COLOURS,
  MOUTH_COLOURS,
  PLUMP,
  SLIM,
  BACKGROUND,
  EYEBROWS,
  SKIN,
  CLOTHES,
  MOUTH,
  EYES,
  MOUTH_EMOTIONS,
} from 'constants/body'

import { CLOTHES_PAIR, EYES_TYPES, EyebrowSamples } from '@/components'

export type Hair = {
  side: 'left' | 'right'
}

export type Eyebrow = {
  type: EyebrowType
  colour: HairColour
}

export type GlassesLensProps = {
  side: 'left' | 'right'
}

export type Skin = {
  colour: SkinColour
  type?: BodyType
}

export type BodyType = SLIM | PLUMP

export type EyebrowType = keyof typeof EyebrowSamples

export type BackgroundColourKey = keyof typeof BACKGROUND_COLOURS
type BackgroundColour = BACKGROUND_COLOURS[keyof BACKGROUND_COLOURS]

export type SkinColourKey = keyof typeof SKIN_COLOURS
type SkinColour = SKIN_COLOURS[keyof SKIN_COLOURS]

export type ClothesColourKey = keyof typeof CLOTHES_COLOURS
type ClothesColour = CLOTHES_COLOURS[keyof CLOTHES_COLOURS]

export type ClothesPairKey = keyof typeof CLOTHES_PAIR
type ClothesPair = CLOTHES_PAIR[keyof CLOTHES_PAIR]

export type EyesTypeKey = keyof typeof EYES_TYPES
type EyesType = EYES_TYPES[keyof EYES_TYPES]

export type HairColourKey = keyof typeof HAIR_COLOURS
export type HairColour = HAIR_COLOURS[keyof HAIR_COLOURS]

export type EyebrowsColourKey = keyof typeof EYEBROWS_COLOURS
export type EyebrowsColour = EYEBROWS_COLOURS[keyof EYEBROWS_COLOURS]

export type MouthColourKey = keyof typeof MOUTH_COLOURS
type MouthColour = MOUTH_COLOURS[keyof MOUTH_COLOURS]

export type MouthEmotionKey = keyof typeof MOUTH_EMOTIONS
type MouthEmotion = MOUTH_EMOTIONS[keyof MOUTH_EMOTIONS]

export type Background = {
  colour?: string
  id?: 'avatar'
} & ConstrainedBoxProps

export type Shirt = {
  colour: string
  extraColour?: string
}

export type Button = {
  colour: string
}

export type Eyes = {
  top?: string
}

export type Mouth = {
  colour?: MouthColour
  skinColour?: SkinColour
  emotion?: string
  type?: SLIM | PLUMP
  transform?: string
} & ConstrainedBoxProps

export type Avatar = {
  [BACKGROUND]: BackgroundColour
  [SKIN]: SkinColour
  [CLOTHES]: ClothesColour
  [EYES]: EyesType
  [EYEBROWS]: EyebrowsColour
  [MOUTH]: MouthColour
}
