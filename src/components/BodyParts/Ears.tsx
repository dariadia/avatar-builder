import React from 'react'
import styled from 'styled-components'

import { DOVE, ROUND, VULCAN, KITTY, EARS, EARS_TYPES } from 'constants/body'
import { Box, baseTheme } from 'danni-s-design-system'
import { Sample } from './Sample'

import type { EarsTypeKey, SelectorItem, Ear as EarProps } from 'types'

export const Ears: React.FC<EarProps> = ({ colour, type }) => (
  <>
    <Ear colour={colour} type={type} left="93px" />
    <Ear colour={colour} type={type} left="187px" />
  </>
)

const EarRound: React.FC<EarProps> = styled(Box)<EarProps>`
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ height }) => (height ? height : '35px')};
  left: ${({ left }) => left};
  top: ${({ top }) => (top ? top : '114px')};
  position: absolute;
  border-radius: ${baseTheme.radii.circle}px;
  background: ${({ colour }) => colour};
`

export const Ear: React.FC<EarProps> = ({ colour, type, ...props }) => {
  switch (type) {
    case ROUND:
      return <EarRound colour={colour} {...props} />
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
