import { ConstrainedBoxProps } from 'danni-s-design-system'

export type Hair = {
  side: 'left' | 'right'
}

export type GlassesLensProps = {
  side: 'left' | 'right'
}

export type Background = {
  colour?: string
} & ConstrainedBoxProps
