import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Sample } from './Sample'
import { Box, Flex, Text } from 'danni-s-design-system'
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
  PYRAMID,
  INFINITY,
  HORSESHOE,
  DALI,
  FOX,
  BEARD,
  BOW,
  MASTER,
  GOATY,
  GLAZE,
  NONE,
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

const InfinityMoustache: React.FC<FacialHairProps> = styled(Box)<
  FacialHairProps
>`
  width: 33px;
  height: 14px;
  box-sizing: content-box;
  &:before,
  &:after {
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border: 2px solid ${({ colour }) => colour};
    border-radius: 7px 7px 0 7px;
    transform: rotate(-45deg);
  }
  &:after {
    left: auto;
    right: 0;
    border-radius: 7px 7px 7px 0;
    transform: rotate(45deg);
  }
`

const CurlMoustache: React.FC<FacialHairProps> = styled(Box)<FacialHairProps>`
  width: ${({ width }) => (width ? width : '40px')};
  height: ${({ height }) => (height ? height : '40px')};
  border-radius: 50%;
  ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg);` : '')}
  ${({ sx }) => (sx ? `${sx}` : '')}
`

export const DaliMoustache: React.FC<FacialHairProps> = styled(Box)<
  FacialHairProps
>`
  width: ${({ width }) => (width ? width : '50px')};
  height: ${({ height }) => (height ? height : '40px')};
  border-radius: 60%;
  border-bottom: 3px solid ${({ colour }) => darken(0.1, colour)};
`

export const Beard: React.FC<FacialHairProps> = styled(Box)<FacialHairProps>`
  width: ${({ width }) => (width ? width : '40px')};
  height: ${({ height }) => (height ? height : '20px')};
  border-radius: ${({ radii }) => (radii ? radii : '60%')};
  border-bottom: ${({ colour, bottom = 10 }) =>
    `${bottom}px solid ${darken(0.1, colour)}`};
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
    case PYRAMID:
      return (
        <>
          <Moustache
            colour={colour}
            sx="border-top-left-radius: 4px;"
            height="3px"
            rotate="-20"
          />
          <Moustache
            colour={colour}
            sx="border-top-right-radius: 4px;"
            height="3px"
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
    case INFINITY:
      return <InfinityMoustache colour={colour} />
    case HORSESHOE:
      return (
        <CurlMoustache
          colour={colour}
          rotate="-135"
          sx={`box-shadow: 5px 5px 0 0 ${colour};`}
        />
      )
    case DALI:
      return <DaliMoustache colour={colour} />
    case FOX:
      return (
        <>
          <DaliMoustache colour={colour} width="20px" height="20px" />
          <DaliMoustache colour={colour} width="20px" height="20px" />
        </>
      )
    case BOW:
      return (
        <>
          <Beard colour={colour} />
        </>
      )
    case BEARD:
      return (
        <>
          <Beard colour={colour} width="60px" height="49px" radii="35%" />
        </>
      )
    case GLAZE:
      return (
        <>
          <Beard colour={colour} width="64px" height="30px" bottom={4} />
        </>
      )
    case MASTER:
      return (
        <>
          <CurlMoustache
            colour={colour}
            rotate="-135"
            sx={`box-shadow: 5px 5px 0 0 ${colour}; position: absolute;`}
          />
          <Beard
            colour={colour}
            sx={`position: absolute; left: 0; top: 7px;`}
          />
        </>
      )
    case GOATY:
      return (
        <>
          <Beard colour={colour} width="20px" height="15px" radii="35%" />
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
    case PYRAMID:
      return `top: 80px; left: 13px; width: 45px;`
    case INFINITY:
      return `top: 74px; left: 19px;`
    case HORSESHOE:
      return `top: 84px; left: 16px;`
    case DALI:
      return `top: 43px; left: 10px;`
    case FOX:
      return `top: 65px; left: 15px; width: 40px;`
    case BOW:
      return `top: 90px; left: 16px;`
    case BEARD:
      return `top: 60px; left: 6px;`
    case GLAZE:
      return `top: 80px; left: 3px;`
    case GOATY:
      return `top: 95px; left: 26px;`
    case MASTER:
      return `top: 83px; left: 16px; position: relative;`
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
  z-index: 3;
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
          <Box
            sx={{
              transform: 'scale(0.5)',
              position: 'absolute',
              top: type === NONE ? '-4px' : '-20px',
            }}
          >
            {type === NONE ? (
              <Text fontSize="40px">❌</Text>
            ) : (
              <FacialHair type={type} colour="black" />
            )}
          </Box>
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
