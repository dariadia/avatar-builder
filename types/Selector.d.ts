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
}

type AvatarOptionKey = keyof AvatarOptions

export type SelectorRow = {
  onSelect: (event: Event) => void
  selectorItems: SelectorItem[]
}

export type SelectorItem = {
  name: string
  id: string
  value?: string | React.Node | React.Node[]
  children?: React.Node | React.Node[]
}
