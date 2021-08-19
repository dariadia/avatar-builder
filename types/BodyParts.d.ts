import { ConstrainedBoxProps } from 'danni-s-design-system'
import {
  BACKGROUND_COLOURS,
  SKIN_COLOURS,
  CLOTHES_COLOURS,
  ALL_COLOURS,
} from 'constants/body'

export type Hair = {
  side: 'left' | 'right'
}

export type GlassesLensProps = {
  side: 'left' | 'right'
}

export type Skin = {
  colour: SkinColour
}

export type BackgroundColourKey = keyof typeof BACKGROUND_COLOURS
type BackgroundColour = BACKGROUND_COLOURS[keyof BACKGROUND_COLOURS]

export type SkinColourKey = keyof typeof SKIN_COLOURS
type SkinColour = SKIN_COLOURS[keyof SKIN_COLOURS]

export type ClothesColourKey = keyof typeof CLOTHES_COLOURS
type ClothesColour = CLOTHES_COLOURS[keyof CLOTHES_COLOURS]

export type ColourKey = keyof typeof ALL_COLOURS
type Colour = ALL_COLOURS[keyof ALL_COLOURS]

export type Background = {
  colour?: string
  id?: 'avatar'
} & ConstrainedBoxProps

export type Shirt = {
  colour: string
}

export type Button = {
  colour: string
}

export type Avatar = {
  background: BackgroundColour
  skin: SkinColour
  clothes: ClothesColour
}
