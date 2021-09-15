import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Sample } from './Sample'
import {
  baseTheme,
  Box,
  ConstrainedBoxProps,
  Flex,
} from 'danni-s-design-system'
import {
  TYPE,
  SKIN_OUTLINE,
  SLIM,
  BUSHY,
  DASHED,
  DEFAULT,
  FACIAL_HAIR_TYPES,
  HAIR_COLOURS as FACIAL_HAIR_COLOURS,
  COLOUR,
  FACIAL_HAIR,
  MOUSTACHE,
} from 'constants/body'

import type {
  SelectorItem,
  FacialHair as FacialHairProps,
  EyebrowType,
  EyebrowsColourKey,
} from 'types'

const Moustache: React.FC<Pick<FacialHairProps, 'colour'>> = styled(Box)<
  Pick<FacialHairProps, 'colour'>
>`
  width: 5px;
  height: 5px;
  background: ${({ colour }) => darken(0.2, colour)};
  border: ${SKIN_OUTLINE};
  &::after {
    content: '';
    margin-top: -2px;
    margin-left: 10px;
    display: block;
    width: 10px;
    height: 5px;
    background: ${({ colour }) => darken(0.2, colour)};
    border: ${SKIN_OUTLINE};
  }
`

const FACIAL_HAIR_ITEMS: React.FC<FacialHairProps> = ({ type, colour }) => {
  switch (type) {
    case MOUSTACHE:
      return <Moustache colour={colour} />
    default:
      return <></>
  }
}

export const Eyebrows: React.FC<FacialHairProps> = styled(Flex).attrs(
  (props: FacialHairProps) => ({
    children: FACIAL_HAIR_ITEMS({
      colour: props.colour,
      type: props.type,
    }),
  }),
)<FacialHairProps>`
  width: 70px;
  justify-content: space-between;
  position: absolute;
  top: 20px;
`

const EyebrowSample: React.FC<ConstrainedBoxProps> = styled(Box).attrs(
  props => ({
    width: props.width,
    height: props.height,
  }),
)`
  background: black;
  margin: 15px auto;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(255, 255, 255, 0.4);
  -moz-box-shadow: 4px 4px 8px 0px rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 10px white;
`

export const FacialHairSamples = {
  [DEFAULT]: (
    <EyebrowSample
      width={`${baseTheme.space.l}px`}
      height={`${baseTheme.space.s}px`}
    />
  ),
  [BUSHY]: <EyebrowSample width={`${baseTheme.space.l}px`} height="12px" />,
  [SLIM]: <EyebrowSample width={`${baseTheme.space.l}px`} height="5px" />,
  [DASHED]: (
    <Flex
      sx={{
        position: 'absolute',
        left: '2px',
        width: `${baseTheme.space.xxl}px`,
      }}
    >
      <EyebrowSample
        width={`${baseTheme.space.m}px`}
        height={`${baseTheme.space.s}px`}
      />
      <EyebrowSample
        width={`${baseTheme.space.xs}px`}
        height={`${baseTheme.space.s}px`}
      />
    </Flex>
  ),
}

export const FACIAL_HAIR_ITEMS_TYPES = (): SelectorItem[] => {
  const facialHairNodesArray = []

  for (const type of FACIAL_HAIR_TYPES) {
    facialHairNodesArray.push({
      name: `${TYPE}:${FACIAL_HAIR}`,
      id: `${TYPE}:${type}`,
      children: <Sample>{FacialHairSamples[type as EyebrowType]}</Sample>,
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
          colour={FACIAL_HAIR_COLOURS[facialHairColour as EyebrowsColourKey]}
        />
      ),
    })
  }
  return facialHairNodesArray
}
