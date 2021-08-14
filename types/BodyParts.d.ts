import { ConstrainedBoxProps } from 'danni-s-design-system'
import { BACKGROUND_COLOURS, SKIN_COLOURS } from 'constants/body'

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

export type Background = {
  colour?: string
} & ConstrainedBoxProps
