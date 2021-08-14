import { ConstrainedBoxProps, Colour } from 'danni-s-design-system'

export type Hair = {
  side: 'left' | 'right'
}

export type GlassesLensProps = {
  side: 'left' | 'right'
}

export type Skin = {
  colour: Colour
}

export type Background = {
  colour?: string
} & ConstrainedBoxProps
