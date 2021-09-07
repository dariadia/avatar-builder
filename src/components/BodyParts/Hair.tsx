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
  EBB,
  MINIMALISM,
  AUSTERE,
  UHURA,
  MASKED,
  WARRIOR,
  CROW,
  WATERFALL,
  HAMILTON,
  STICKY_BUNS,
  GLIMMER,
} from 'constants/body'

import type { Hair as HairProps, HairColourKey, SelectorItem } from 'types'

const HairBackBushy: React.FC<HairProps> = styled(Box).attrs(props => ({
  width: props.width || baseTheme.space.elephant,
  height: props.height || '120px',
}))<HairProps>`
  position: absolute;
  background: ${({ colour }) => colour};
  left: ${({ side, left }) => (left ? left : side === LEFT ? '25%' : '46%')};
  top: 40%;
  border-radius: 200px;
  ${({ twofold = true, colour }) =>
    twofold
      ? `
  &:after {
    content: '';
    position: absolute;
    width: 107px;
    height: 80px;
    background: ${colour};
    box-shadow: inset 2px -25px 24px 0 ${darken(0.15, colour)};
    border-radius: 300px;
    top: 36%;
    right: -8%;
  }`
      : ''}
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
  ${({ twofold = true, colour, side }) =>
    twofold
      ? `&:after {
    content: '';
    position: absolute;
    width: 95px;
    height: 80px;
    background: ${colour};
    box-shadow: ${
      side === LEFT
        ? `inset 2px -25px 24px 0 ${darken(0.15, colour)}`
        : `inset -22px -25px 24px -15px ${darken(0.15, colour)}`
    };
    border-radius: 300px;
    top: 36%;
    right: ${side === LEFT ? '-2%' : '-3%'};
  }`
      : ''}
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

const BangsLoose: React.FC<HairProps> = ({ colour }) => (
  <HairStrand colour={colour} width="30px" left="135px" top="60px" />
)

const BangsWillow: React.FC<HairProps> = ({ colour }) => (
  <HairStrand colour={colour} top="66px" rotate="30" />
)

const BangsWave: React.FC<HairProps> = ({ colour }) => (
  <>
    <HairStrand colour={colour} top="66px" rotate="30" />
    <HairStrand colour={colour} top="57px" rotate="-45" left="80px" />
  </>
)

const BangsRowan: React.FC<HairProps> = ({ colour }) => (
  <>
    <HairStrand colour={colour} top="66px" rotate="30" width="60px" />
    <HairStrand
      colour={colour}
      top="57px"
      rotate="-45"
      left="80px"
      width="60px"
    />
  </>
)

const BangsOak: React.FC<HairProps> = ({ colour }) => (
  <>
    <HairStrand colour={colour} top="66px" rotate="30" />
    <HairStrand
      colour={colour}
      top="57px"
      rotate="-45"
      left="80px"
      width="60px"
    />
  </>
)

const BangsLuz: React.FC<HairProps> = ({ colour }) => (
  <>
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

export const Hair: React.FC<HairProps> = ({ colour, type }) => {
  switch (type) {
    case MINIMALISM:
      return (
        <>
          <HairTop colour={colour} />
          <BangsLoose colour={colour} />
        </>
      )
    case AUSTERE:
      return (
        <>
          <HairTop colour={colour} />
          <HairStrand colour={colour} />
        </>
      )
    case UHURA:
      return (
        <>
          <HairTop colour={colour} />
          <BangsWillow colour={colour} />
        </>
      )
    case MASKED:
      return (
        <>
          <HairTop colour={colour} />
          <BangsWave colour={colour} />
        </>
      )
    case CROW:
      return (
        <>
          <HairTop colour={colour} />
          <BangsRowan colour={colour} />
        </>
      )
    case WARRIOR:
      return (
        <>
          <HairTop colour={colour} />
          <BangsOak colour={colour} />
        </>
      )
    case HAMILTON:
      return (
        <>
          <HairBackBushy
            colour={colour}
            side={LEFT}
            height="30px"
            twofold={false}
          />
          <HairBackBushy colour={colour} height="30px" twofold={false} />
          <HairTop colour={colour} />
          <HairStrand colour={colour} />
        </>
      )
    case WATERFALL:
      return (
        <>
          <HairBackBushy
            colour={colour}
            side={LEFT}
            height="60px"
            left="30%"
            width="60px"
            twofold={false}
          />
          <HairBackBushy
            colour={colour}
            height="60px"
            left="50%"
            width="60px"
            twofold={false}
          />
          <HairTop colour={colour} />
          <HairStrand colour={colour} />
        </>
      )
    case GLIMMER:
      return (
        <>
          <HairTop colour={colour} />
          <HairBackBushy
            colour={colour}
            side={LEFT}
            height="60px"
            left="30%"
            width="60px"
            twofold={false}
          />
          <HairBackBushy
            colour={colour}
            height="60px"
            left="50%"
            width="60px"
            twofold={false}
          />
          <BangsOak colour={colour} />
        </>
      )
    case EBB:
      return (
        <>
          <HairBackBushy colour={colour} side={LEFT} height="30px" />
          <HairBackBushy colour={colour} height="30px" />
          <HairTop colour={colour} />
          <HairStrand colour={colour} />
        </>
      )
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
          <BangsLuz colour={colour} />
        </>
      )
    case STICKY_BUNS:
      return (
        <>
          <HairBackBushy
            colour={colour}
            side={LEFT}
            height="50px"
            twofold={false}
            left="27%"
          />
          <HairBackBushy
            colour={colour}
            height="50px"
            twofold={false}
            left="43%"
          />
          <HairTop colour={colour} />
          <HairStrand colour={colour} />
        </>
      )
    default:
      return <HairTop colour={colour} />
  }
}

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
