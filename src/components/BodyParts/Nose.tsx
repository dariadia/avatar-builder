import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { NOSE } from 'constants/body'
import { Box, Text } from 'danni-s-design-system'

import type { Nose as NoseProps, SelectorItem } from 'types'
import { Sample } from './Sample'

export const NoseButton: React.FC<NoseProps> = styled(Box)<NoseProps>`
  width: 15px;
  height: 10px;
  position: absolute;
  top: ${({ top }) => (top ? top : '65px')};
  left: ${({ left }) => (left ? left : '28px')};
  border-radius: 40px;
  background: ${({ colour }) => darken(0.06, colour)};
`

export const NoseOval: React.FC<NoseProps> = styled(Box)<NoseProps>`
  width: 10px;
  height: 15px;
  position: absolute;
  top: ${({ top }) => (top ? top : '60px')};
  left: ${({ left }) => (left ? left : '32px')};
  border-radius: 40px;
  background: ${({ colour }) => darken(0.06, colour)};
`

export const Nose: React.FC<NoseProps> = ({ colour, type }) => {
  switch (type) {
    case 'BUTTON':
      return <NoseButton colour={colour} />
    case 'OVAL':
      return <NoseOval colour={colour} />
    default:
      return null
  }
}

export const NOSE_ITEMS = (): SelectorItem[] => {
  const noseNodesArray = []

  noseNodesArray.push({
    name: NOSE,
    id: `BUTTON`,
    children: (
      <Sample colour="white">
        <NoseButton colour="black" top="15px" left="12px" />
      </Sample>
    ),
  })

  noseNodesArray.push({
    name: NOSE,
    id: `OVAL`,
    children: (
      <Sample colour="white">
        <NoseOval colour="black" top="12px" left="15px" />
      </Sample>
    ),
  })

  noseNodesArray.push({
    name: NOSE,
    id: `NONE`,
    children: (
      <Sample colour="white">
        <Text sx={{ position: 'absolute', top: '10px', left: '11px' }}>❌</Text>
      </Sample>
    ),
  })

  return noseNodesArray
}
