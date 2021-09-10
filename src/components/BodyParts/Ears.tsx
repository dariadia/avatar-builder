import React from 'react'
import styled from 'styled-components'

import {
  ROUND,
  VULCAN,
  KITTY,
  DUMPLING,
  EARS,
  EARS_TYPES,
  PIZZA,
  BUN,
  WITCH,
  ELF,
  SANATA_S_ELF,
  VEE,
  CAT,
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
  top: ${({ top = '114px' }) => top};
  position: absolute;
  border-radius: ${baseTheme.radii.circle}px;
  background: ${({ colour }) => colour};
  ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg)` : '')};
`

const EarPointy: React.FC<EarProps> = styled(Box)<EarProps>`
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ height }) => (height ? height : '40px')};
  position: absolute;
  background: ${({ colour }) => colour};
  border-radius: ${({ type }) =>
    type === WITCH ? '0 200px 0 200px' : '200px 0 200px'};
  left: ${({ left = '120px' }) => left};
  top: ${({ top = '105px' }) => top};
  ${({ rotate = '-38' }) => (rotate ? `transform: rotate(${rotate}deg)` : '')};
  ${({ boxShadow }) => (boxShadow ? `box-shadow: ${boxShadow}` : '')};
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
    case BUN:
      return (
        <>
          <EarRound colour={colour} left="93px" rotate="-25" />
          <EarRound colour={colour} left="187px" rotate="25" />
        </>
      )
    case WITCH:
      return (
        <>
          <EarPointy colour={colour} type={type} rotate="-20" left="95px" />
          <EarPointy colour={colour} type={VULCAN} rotate="20" left="185px" />
        </>
      )
    case VEE:
      return (
        <>
          <EarPointy
            colour={colour}
            type={WITCH}
            rotate="-20"
            left="95px"
            boxShadow="inset 8px 8px rgb(0 0 0 / 60%)"
          />
          <EarPointy
            colour={colour}
            type={VULCAN}
            rotate="20"
            left="185px"
            boxShadow="inset 0 5px 0 5px rgb(0 0 0 / 60%)"
          />
        </>
      )
    case ELF:
      return (
        <>
          <EarPointy colour={colour} type={WITCH} rotate="-38" left="95px" />
          <EarPointy colour={colour} type={VULCAN} rotate="42" left="184px" />
        </>
      )
    case SANATA_S_ELF:
      return (
        <>
          <EarPointy colour={colour} type={WITCH} rotate="-30" left="88px" />
          <EarPointy colour={colour} type={VULCAN} rotate="30" left="192px" />
        </>
      )
    case VULCAN:
      return (
        <>
          <EarPointy
            colour={colour}
            type={type}
            rotate="-38"
            left="95px"
            top="105px"
          />
          <EarPointy
            colour={colour}
            type={WITCH}
            rotate="42"
            left="184px"
            top="107px"
          />
        </>
      )
    case CAT:
      return (
        <>
          <EarPointy
            colour={colour}
            width="35px"
            height="50px"
            left="85px"
            top="70px"
            rotate="-80"
            boxShadow="inset 0 8px 12px 6px rgb(0 0 0 / 60%)"
          />
          <EarPointy
            colour={colour}
            width="35px"
            height="50px"
            left="185px"
            top="70px"
            rotate="20"
            boxShadow="inset 0 10px 12px 4px rgb(0 0 0 / 60%)"
          />
        </>
      )
    case KITTY:
      return (
        <>
          <EarPointy
            colour={colour}
            width="35px"
            height="50px"
            left="85px"
            top="70px"
            rotate="-110"
            boxShadow="inset -10px 10px 12px 4px rgb(0 0 0 / 60%)"
          />
          <EarPointy
            colour={colour}
            width="35px"
            height="50px"
            left="185px"
            top="70px"
            rotate="60"
            boxShadow="inset 0 10px 12px 4px rgb(0 0 0 / 60%)"
          />
        </>
      )
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
