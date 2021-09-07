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
} from 'constants/body'

import type { Hair as HairProps, HairColourKey, SelectorItem } from 'types'

export const Hair: React.FC<HairProps> = ({ colour, type }) => {
  switch (type) {
    case BUSHY:
      return (
        <>
          <HairBack colour={colour} side={LEFT} />
          <HairBack colour={colour} />
          <HairTop colour={colour} />
        </>
      )
    case WAVES:
      return (
        <>
          <HairBack colour={colour} side={LEFT} />
          <HairBack colour={colour} />
          <HairTop colour={colour} />
        </>
      )
    default:
      return <HairTop colour={colour} />
  }
}

const HairBack: React.FC<HairProps> = styled(Box).attrs({
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
    box-shadow: inset 2px -25px 24px 0px ${({ colour }) => darken(0.15, colour)};
    border-radius: 300px;
    top: 36%;
    right: -8%;
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
  &:after {
    content: '';
    position: absolute;
    width: 90px;
    height: 40px;
    background: ${({ colour }) => colour};
    border-radius: 0px 200px 0px 200px;
    z-index: 4;
    left: 40px;
    top: 20px;
    transform: rotate(10deg);
    box-shadow: inset 1px 12px 9px 6px ${({ colour }) => darken(0.07, colour)};
  }
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
