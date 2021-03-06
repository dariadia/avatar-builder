import React from 'react'
import { SxStyleProp } from 'danni-s-design-system'

export type Selector = {
  avatar: { [key: AvatarOptionKey]: AvatarOptions }
  setAvatarItem: (arg: any) => void
}

export type SelectorOptions = {
  background: boolean
  skin: boolean
}

export type SelectorKey = keyof SelectorOptions

export type AvatarOptions = {
  background: string | React.Node | React.Node[]
  skin: string | React.Node | React.Node[]
  clothes: string | React.Node | React.Node[]
  eyes: string | React.Node | React.Node[]
  eyebrows: string | React.Node | React.Node[]
  mouth: string | React.Node | React.Node[]
  nose: string | React.Node | React.Node[]
  hair: string[]
  ears: string | React.Node | React.Node[]
  freckles: string | React.Node | React.Node[]
  glasses: string | React.Node | React.Node[]
}

export type AvatarOptionKey = keyof AvatarOptions

export type SelectorRow = {
  onSelect: (event: Event) => void
  selectorItems: SelectorItem[]
  selectorItemsOptions?: SelectorItem[]
  role?: string
  ariaLabel?: string
  multiple?: boolean
  heading?: string
  chooseColourHeading?: string
  sx?: SxStyleProp
}

export type SelectorItem = {
  name: string
  id: string
  value?: string | React.Node | React.Node[]
  children?: React.Node | React.Node[]
  multiple?: boolean
}
