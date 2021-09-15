import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Sample } from './Sample'
import { Box, Flex } from 'danni-s-design-system'
import {
  TYPE,
  SKIN_OUTLINE,
  FACIAL_HAIR_TYPES,
  HAIR_COLOURS as FACIAL_HAIR_COLOURS,
  COLOUR,
  FACIAL_HAIR,
  MOUSTACHE,
  PENCIL,
} from 'constants/body'

import type {
  SelectorItem,
  FacialHair as FacialHairProps,
  HairColourKey as FacialHairColourKey,
} from 'types'

const Moustache: React.FC<FacialHairProps> = styled(Box)<FacialHairProps>`
  width: ${({ width }) => (width ? width : '15px')};
  height: ${({ height }) => (height ? height : '5px')};
  background: ${({ colour }) => darken(0.2, colour)};
  border: ${SKIN_OUTLINE};
`

const FACIAL_HAIR_ITEMS: React.FC<FacialHairProps> = ({ type, colour }) => {
  switch (type) {
    case MOUSTACHE:
      return (
        <>
          <Moustache colour={colour} />
          <Moustache colour={colour} />
        </>
      )
    case PENCIL:
      return (
        <>
          <Moustache colour={colour} height="2px" width="20px" />
          <Moustache colour={colour} height="2px" width="20px" />
        </>
      )
    default:
      return <></>
  }
}

const FACIAL_HAIR_SX = (type: Pick<FacialHairProps, 'type'>): string => {
  switch (type) {
    case MOUSTACHE:
      return `top: 77px; left: 17px; width: 40px;`
    case PENCIL:
      return `top: 77px; left: 10px; width: 50px;`
    default:
      return ``
  }
}

export const FacialHair: React.FC<FacialHairProps> = styled(Flex).attrs(
  (props: FacialHairProps) => ({
    children: FACIAL_HAIR_ITEMS({
      colour: props.colour,
      type: props.type,
    }),
  }),
)<FacialHairProps>`
  justify-content: space-between;
  position: absolute;
  ${({ type }) => FACIAL_HAIR_SX(type)}
`

export const FACIAL_HAIR_ITEMS_TYPES = (): SelectorItem[] => {
  const facialHairNodesArray = []

  for (const type of FACIAL_HAIR_TYPES) {
    facialHairNodesArray.push({
      name: `${TYPE}:${FACIAL_HAIR}`,
      id: `${TYPE}:${type}`,
      children: (
        <Sample>
          <FacialHair type={type} colour="black" />
        </Sample>
      ),
    })
  }
  return facialHairNodesArray
}

export const FACIAL_HAIR_ITEMS_COLOURS = (): SelectorItem[] => {
  const facialHairNodesArray = []

  for (const facialHairColour in FACIAL_HAIR_COLOURS) {
    facialHairNodesArray.push({
      name: `${COLOUR}:${FACIAL_HAIR}`,
      id: `${COLOUR}:${facialHairColour}`,
      children: (
        <Sample
          colour={FACIAL_HAIR_COLOURS[facialHairColour as FacialHairColourKey]}
        />
      ),
    })
  }
  return facialHairNodesArray
}
