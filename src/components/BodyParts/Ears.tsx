import React from 'react'
import styled from 'styled-components'

import {
  DOVE,
  ROUND,
  VULCAN,
  KITTY,
  DUMPLING,
  EARS,
  EARS_TYPES,
  PIZZA,
} from 'constants/body'
import { Box, baseTheme } from 'danni-s-design-system'
import { Sample } from './Sample'

import type { EarsTypeKey, SelectorItem, Ear as EarProps } from 'types'

export const Ears: React.FC<EarProps> = ({ colour, type }) => (
  <>
    <EarPair colour={colour} type={type} />
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
  ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg)` : '')};
`

export const EarPair: React.FC<EarProps> = ({ colour, type }) => {
  switch (type) {
    case ROUND:
      return (
        <>
          <EarRound colour={colour} left="93px" />
          <EarRound colour={colour} left="187px" />
        </>
      )
    case DUMPLING:
      return (
        <>
          <EarRound colour={colour} left="91px" />
          <EarRound colour={colour} left="191px" />
        </>
      )
    case PIZZA:
      return (
        <>
          <EarRound colour={colour} left="93px" rotate="-11" />
          <EarRound colour={colour} left="187px" rotate="11" />
        </>
      )
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
