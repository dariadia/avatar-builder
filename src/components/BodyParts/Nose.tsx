import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { NOSE } from 'constants/body'
import { Box } from 'danni-s-design-system'

import type { Nose as NoseProps, SelectorItem } from 'types'

export const NoseButton: React.FC<NoseProps> = styled(Box)<NoseProps>`
  width: 15px;
  height: 10px;
  position: absolute;
  top: 65px;
  left: 28px;
  border-radius: 40px;
  background: ${({ colour }) => darken(0.06, colour)};
`

export const Nose: React.FC<NoseProps> = ({ colour, type }) => {
  switch (type) {
    case 'BUTTON':
      return <NoseButton colour={colour} />
    default:
      return <NoseButton colour={colour} />
  }
}

export const NOSE_ITEMS = (): SelectorItem[] => {
  const noseNodesArray = []

  noseNodesArray.push({
    name: NOSE,
    id: `BUTTON`,
    children: <NoseButton colour="black" />,
  })

  return noseNodesArray
}
