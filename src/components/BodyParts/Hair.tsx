import React from 'react'
import styled from 'styled-components'

import { darken } from 'polished'
import { Box, Circle, baseTheme } from 'danni-s-design-system'

import { Sample } from './Sample'
import {
  COLOUR,
  TYPE,
  HAIR,
  HAIR_COLOURS,
  HAIR_TYPES,
  LEFT,
  BUSHY,
  WAVES,
  TIDE,
} from 'constants/body'

import type { Hair as HairProps, HairColourKey, SelectorItem } from 'types'

export const Hair: React.FC<HairProps> = ({ colour, type }) => {
  switch (type) {
    case BUSHY:
      return (
        <>
          <HairBackBushy colour={colour} side={LEFT} />
          <HairBackBushy colour={colour} />
          <HairTop colour={colour} />
          <HairStrand colour={colour} />
        </>
      )
    case WAVES:
      return (
        <>
          <HairBackWavy colour={colour} side={LEFT} />
          <HairBackWavy colour={colour} />
          <HairTop colour={colour} />
          <HairStrand colour={colour} top="50px" />
        </>
      )
    case TIDE:
      return (
        <>
          <HairBackWavy colour={colour} side={LEFT} />
          <HairBackWavy colour={colour} />
          <HairTop colour={colour} />
          <HairStrand
            colour={colour}
            rotate="40"
            width="70px"
            left="140px"
            top="60px"
          />
          <HairStrand
            colour={colour}
            rotate="160"
            width="70px"
            left="95px"
            top="40px"
          />
        </>
      )
    default:
      return <HairTop colour={colour} />
  }
}

const HairBackBushy: React.FC<HairProps> = styled(Box).attrs({
  width: baseTheme.space.elephant,
})<HairProps>`
  height: 120px;
  position: absolute;
  background: ${({ colour }) => colour};
  left: ${({ side }) => (side === LEFT ? '25%' : '46%')};
  top: 40%;
  border-radius: 200px;
  &:after {
    content: '';
    position: absolute;
    width: 107px;
    height: 80px;
    background: ${({ colour }) => colour};
    box-shadow: inset 2px -25px 24px 0 ${({ colour }) => darken(0.15, colour)};
    border-radius: 300px;
    top: 36%;
    right: -8%;
  }
`

const HairBackWavy: React.FC<HairProps> = styled(Box).attrs({
  width: baseTheme.space.elephant,
})<HairProps>`
  height: 120px;
  position: absolute;
  background: ${({ colour }) => colour};
  left: ${({ side }) => (side === LEFT ? '30%' : '41%')};
  top: 40%;
  border-radius: 200px;
  &:after {
    content: '';
    position: absolute;
    width: 95px;
    height: 80px;
    background: ${({ colour }) => colour};
    box-shadow: ${({ colour, side }) =>
      side === LEFT
        ? `inset 2px -25px 24px 0 ${darken(0.15, colour)}`
        : `inset -22px -25px 24px -15px ${darken(0.15, colour)}`};
    border-radius: 300px;
    top: 36%;
    right: ${({ side }) => (side === LEFT ? '-2%' : '-3%')};
  }
`

const HairTop: React.FC<HairProps> = styled(Circle)<HairProps>`
  position: absolute;
  width: 130px;
  height: 130px;
  background: ${({ colour }) => colour};
  left: calc(50% - 65px);
  top: 12%;
  box-shadow: inset 10px 7px 5px 0px ${({ colour }) => darken(0.07, colour)};
`

const HairStrand: React.FC<HairProps> = styled(Box).attrs(props => ({
  width: props.width || '90px',
  height: props.height || '40px',
}))<HairProps>`
  position: absolute;
  background: ${({ colour }) => colour};
  border-radius: 0px 200px 0px 200px;
  z-index: 4;
  left: ${({ left = '120px' }) => left};
  top: ${({ top = '55px' }) => top};
  transform: rotate(${({ rotate = '10' }) => rotate}deg);
  box-shadow: inset 1px 12px 9px 6px ${({ colour }) => darken(0.07, colour)};
`

export const HAIR_ITEMS_TYPES = (): SelectorItem[] => {
  const hairNodesArray = []

  for (const hair of HAIR_TYPES) {
    hairNodesArray.push({
      name: `${TYPE}:${HAIR}`,
      id: `${TYPE}:${hair}`,
      children: <Sample />,
    })
  }

  return hairNodesArray
}

export const HAIR_ITEMS_COLOURS = (): SelectorItem[] => {
  const hairNodesArray = []

  for (const hair in HAIR_COLOURS) {
    hairNodesArray.push({
      name: `${COLOUR}:${HAIR}`,
      id: `${COLOUR}:${hair}`,
      children: <Sample colour={HAIR_COLOURS[hair as HairColourKey]} />,
    })
  }

  return hairNodesArray
}
