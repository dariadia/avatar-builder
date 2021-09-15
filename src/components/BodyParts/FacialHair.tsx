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
  MOUSE,
  DOUG,
  LAMPSHADE,
  WALRUS,
  PAINTERS,
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
  ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg);` : '')}
  ${({ sx }) => (sx ? `${sx}` : '')}
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
    case MOUSE:
      return (
        <>
          <Moustache colour={colour} width="5px" />
          <Moustache colour={colour} width="5px" />
        </>
      )
    case DOUG:
      return (
        <>
          <Moustache colour={colour} sx="border-top-left-radius: 4px;" />
          <Moustache colour={colour} sx="border-top-right-radius: 4px;" />
        </>
      )
    case PAINTERS:
      return (
        <>
          <Moustache
            colour={colour}
            sx="border-top-left-radius: 4px;"
            height="7px"
            rotate="-20"
          />
          <Moustache
            colour={colour}
            sx="border-top-right-radius: 4px;"
            height="7px"
            rotate="20"
          />
        </>
      )
    case LAMPSHADE:
      return (
        <>
          <Moustache
            colour={colour}
            sx="border-top-left-radius: 4px;"
            height="7px"
          />
          <Moustache
            colour={colour}
            sx="border-top-right-radius: 4px;"
            height="7px"
          />
        </>
      )
    case WALRUS:
      return (
        <>
          <Moustache
            colour={colour}
            sx={`border-top-left-radius: 4px; box-shadow: inset 0 5px 2px 0 ${darken(
              0.15,
              colour,
            )}`}
            height="10px"
            width="25px"
          />
          <Moustache
            colour={colour}
            sx={`border-top-right-radius: 4px; box-shadow: inset 0 5px 2px 0 ${darken(
              0.15,
              colour,
            )}`}
            height="10px"
            width="25px"
          />
        </>
      )
    default:
      return <></>
  }
}

const FACIAL_HAIR_SX = (type: Pick<FacialHairProps, 'type'>): string => {
  switch (type) {
    case MOUSTACHE:
      return `left: 16px; width: 40px;`
    case PENCIL:
      return `left: 10px; width: 50px;`
    case MOUSE:
      return `left: 26px; width: 20px;`
    case LAMPSHADE:
      return `left: 21px; width: 30px;`
    case WALRUS:
      return `left: 11px; width: 50px;`
    case PAINTERS:
      return `left: 13px; width: 45px;`
    default:
      return `left: 16px; width: 40px;`
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
  top: 77px;
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
