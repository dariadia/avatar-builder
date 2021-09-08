import React from 'react'

import { DOVE, ROUND, VULCAN, KITTY, EARS, EARS_TYPES } from 'constants/body'
import { Flex } from 'danni-s-design-system'
import { Sample } from './Sample'

import type { EarsTypeKey, SelectorItem, Ear as EarProps } from 'types'

export const Ears: React.FC<EarProps> = ({ colour, type }) => (
  <Flex>
    <Ear colour={colour} type={type} />
    <Ear colour={colour} type={type} />
  </Flex>
)

export const Ear: React.FC<EarProps> = ({ colour, type }) => {
  switch (type) {
    case ROUND:
      return <div>world</div>
    case DOVE:
      return <div>hello</div>
    case VULCAN:
      return <div>{colour}</div>
    case KITTY:
      return <div>hello</div>
    default:
      return null
  }
}

export const EARS_ITEMS = (): SelectorItem[] => {
  const earsNodesArray = []

  for (const ear of EARS_TYPES) {
    earsNodesArray.push({
      name: EARS,
      id: `${EARS}:${ear}`,
      children: <Sample colour={EARS_TYPES[ear as EarsTypeKey]} />,
    })
  }
  return earsNodesArray
}
