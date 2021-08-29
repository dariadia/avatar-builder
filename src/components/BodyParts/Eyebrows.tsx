import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import {
  baseTheme,
  Box,
  Circle,
  ConstrainedBoxProps,
  Flex,
} from 'danni-s-design-system'
import {
  EYEBROWS,
  EYEBROWS_COLOURS,
  SKIN_OUTLINE,
  SLIM,
  BUSHY,
  DASHED,
  DEFAULT,
  EYEBROWS_TYPES,
} from 'constants/body'

import type {
  SelectorItem,
  EyebrowsColourKey,
  EyebrowsColour,
  Eyebrow as EyebrowProps,
  EyebrowType,
} from 'types'

const Eyebrow: React.FC<Pick<EyebrowProps, 'colour'>> = styled(Box)<
  Pick<EyebrowProps, 'colour'>
>`
  width: 20px;
  height: 5px;
  background: ${({ colour }) => darken(0.2, colour)};
  border: ${SKIN_OUTLINE};
`

const EYEBROW_TYPES: React.FC<EyebrowProps> = ({ type, colour }) => {
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
      type: props.type,
    }),
  }),
)<EyebrowProps>`
  width: 70px;
  justify-content: space-between;
  position: absolute;
  top: 20px;
`

const Sample: React.FC<Record<string, EyebrowsColour>> = ({
  background,
  children,
}) => (
  <Circle
    size={`${baseTheme.space.xxxl}px`}
    my="m"
    mr="m"
    inlineBlock
    sx={{
      background,
      border: '1px solid grey',
    }}
  >
    {children}
  </Circle>
)

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
    <Flex>
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

export const EYEBROWS_ITEMS = (): SelectorItem[] => {
  const eyebrowsNodesArray = []

  for (const type of EYEBROWS_TYPES) {
    for (const eyebrowsColour in EYEBROWS_COLOURS) {
      eyebrowsNodesArray.push({
        name: EYEBROWS,
        id: `${type}:${eyebrowsColour}`,
        children: (
          <Sample
            background={EYEBROWS_COLOURS[eyebrowsColour as EyebrowsColourKey]}
          >
            {EyebrowSamples[type as EyebrowType]}
          </Sample>
        ),
      })
    }
    eyebrowsNodesArray.push({
      name: EYEBROWS,
      id: `${type}:break`,
    })
  }
  return eyebrowsNodesArray
}
