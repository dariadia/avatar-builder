import React from 'react'

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
}

export type AvatarOptionKey = keyof AvatarOptions

export type SelectorRow = {
  onSelect: (event: Event) => void
  selectorItems: SelectorItem[]
  role?: string
  ariaLabel?: string
  multiple?: boolean
  heading?: string
}

export type SelectorItem = {
  name: string
  id: string
  value?: string | React.Node | React.Node[]
  children?: React.Node | React.Node[]
  multiple?: boolean
}
