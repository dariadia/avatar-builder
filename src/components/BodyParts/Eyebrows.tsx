import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { baseTheme, Box, Circle, Flex } from 'danni-s-design-system'
import {
  EYEBROWS,
  HAIR_COLOURS as EYEBROWS_COLOURS,
  SLIM,
  BUSHY,
  DASHED,
} from 'constants/body'

import type {
  SelectorItem,
  HairColourKey as EyebrowsColourKey,
  Eyebrow as EyebrowProps,
} from 'types'

const Eyebrow: React.FC<Pick<EyebrowProps, 'colour'>> = styled(Box)<
  Pick<EyebrowProps, 'colour'>
>`
  width: 20px;
  height: 5px;
  background: ${({ colour }) => darken(0.4, colour)};
`

const EYEBROW_TYPES: React.FC<EyebrowProps> = ({ type, colour }) => {
  console.log(type, colour)
  switch (type) {
    case SLIM:
      return (
        <>
          <Eyebrow colour={colour} />
          <Eyebrow colour={colour} />
        </>
      )
    case BUSHY:
      return (
        <>
          <Eyebrow colour={colour} />
          <Eyebrow colour={colour} />
        </>
      )
    case DASHED:
      return (
        <>
          <Eyebrow colour={colour} />
          <Eyebrow colour={colour} />
        </>
      )
    default:
      return (
        <>
          <Eyebrow colour={colour} />
          <Eyebrow colour={colour} />
        </>
      )
  }
}

export const Eyebrows: React.FC<EyebrowProps> = styled(Flex).attrs(
  (props: EyebrowProps) => ({
    children: EYEBROW_TYPES({
      colour: props.colour,
      type: props.type as string,
    }),
  }),
)<EyebrowProps>`
  width: 70px;
  justify-content: space-between;
  position: absolute;
  top: 20px;
`

export const EYEBROWS_ITEMS = (): SelectorItem[] => {
  const eyebrowsNodesArray = []

  for (const eyebrowsColour in EYEBROWS_COLOURS) {
    eyebrowsNodesArray.push({
      name: EYEBROWS,
      id: eyebrowsColour,
      children: (
        <Circle
          size={`${baseTheme.space.xxxl}px`}
          my="m"
          mr="m"
          inlineBlock
          sx={{
            background: EYEBROWS_COLOURS[eyebrowsColour as EyebrowsColourKey],
            border: '1px solid grey',
          }}
        />
      ),
    })
  }
  return eyebrowsNodesArray
}
