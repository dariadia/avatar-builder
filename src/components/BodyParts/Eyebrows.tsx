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
  EYEBROWS,
  TYPE,
  SKIN_OUTLINE,
  SLIM,
  BUSHY,
  DASHED,
  DEFAULT,
  EYEBROWS_TYPES,
  EYEBROWS_COLOURS,
  COLOUR,
} from 'constants/body'

import type {
  SelectorItem,
  Eyebrow as EyebrowProps,
  EyebrowType,
  EyebrowsColourKey,
} from 'types'

const Eyebrow: React.FC<Pick<EyebrowProps, 'colour'>> = styled(Box)<
  Pick<EyebrowProps, 'colour'>
>`
  width: 20px;
  height: 5px;
  background: ${({ colour }) => darken(0.2, colour)};
  border: ${SKIN_OUTLINE};
`

const EyebrowBushy: React.FC<Pick<EyebrowProps, 'colour'>> = styled(Box)<
  Pick<EyebrowProps, 'colour'>
>`
  width: 22px;
  height: 8px;
  background: ${({ colour }) => darken(0.2, colour)};
  border: ${SKIN_OUTLINE};
`

const EyebrowSlim: React.FC<Pick<EyebrowProps, 'colour'>> = styled(Box)<
  Pick<EyebrowProps, 'colour'>
>`
  width: 20px;
  height: 3px;
  background: ${({ colour }) => darken(0.2, colour)};
  border: ${SKIN_OUTLINE};
`

const EyebrowDashed: React.FC<Pick<EyebrowProps, 'colour'>> = styled(Box)<
  Pick<EyebrowProps, 'colour'>
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

const EYEBROW_TYPES: React.FC<EyebrowProps> = ({ type, colour }) => {
  switch (type) {
    case SLIM:
      return (
        <>
          <EyebrowSlim colour={colour} />
          <EyebrowSlim colour={colour} />
        </>
      )
    case BUSHY:
      return (
        <>
          <EyebrowBushy colour={colour} />
          <EyebrowBushy colour={colour} />
        </>
      )
    case DASHED:
      return (
        <>
          <EyebrowDashed colour={colour} />
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
      type: props.type,
    }),
  }),
)<EyebrowProps>`
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

export const EyebrowSamples = {
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

export const EYEBROWS_ITEMS_TYPES = (): SelectorItem[] => {
  const eyebrowsNodesArray = []

  for (const type of EYEBROWS_TYPES) {
    eyebrowsNodesArray.push({
      name: `${TYPE}:${EYEBROWS}`,
      id: `${TYPE}:${type}`,
      children: <Sample>{EyebrowSamples[type as EyebrowType]}</Sample>,
    })
  }
  return eyebrowsNodesArray
}

export const EYEBROWS_ITEMS_COLOURS = (): SelectorItem[] => {
  const eyebrowsNodesArray = []

  for (const eyebrowsColour in EYEBROWS_COLOURS) {
    eyebrowsNodesArray.push({
      name: `${COLOUR}:${EYEBROWS}`,
      id: `${COLOUR}:${eyebrowsColour}`,
      children: (
        <Sample
          colour={EYEBROWS_COLOURS[eyebrowsColour as EyebrowsColourKey]}
        />
      ),
    })
  }
  return eyebrowsNodesArray
}
