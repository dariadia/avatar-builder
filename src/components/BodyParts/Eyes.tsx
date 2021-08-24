import React from 'react'
import styled from 'styled-components'

import {
  Flex,
  Circle,
  Box,
  baseTheme,
  SxStyleProp,
  TriangleUp,
  TriangleDown,
  TriangleProps,
} from 'danni-s-design-system'
import { EYES } from 'constants/body'

import { EyesTypeKey, SelectorItem, Eyes as EyesProps } from 'types'

const OvalEyes: React.FC<EyesProps> = styled(Flex)<EyesProps>`
  justify-content: space-between;
  position: absolute;
  top: ${({ top }) => (top ? top : '32px')};
  left: -7px;
  &::before,
  &::after {
    background: black;
    display: inline-block;
    content: '';
    width: 15px;
    height: 30px;
    margin: 0 14px;
    border-radius: 200px;
  }
`

const RoundEyes: React.FC<EyesProps> = styled(Flex)<EyesProps>`
  justify-content: space-between;
  position: absolute;
  top: ${({ top }) => (top ? top : '40px')};
  left: -7px;
  &::before,
  &::after {
    background: black;
    display: inline-block;
    content: '';
    width: 15px;
    height: 15px;
    margin: 0 14px;
    border-radius: 200px;
  }
`

const NarrowEyes: React.FC<EyesProps> = styled(Flex)<EyesProps>`
  justify-content: space-between;
  position: absolute;
  top: ${({ top }) => (top ? top : '42px')};
  left: -16px;
  &::before,
  &::after {
    background: black;
    display: inline-block;
    content: '';
    width: 23px;
    height: 10px;
    margin: 0 14px;
    border-radius: 100px;
  }
`

const WinkingEyes: React.FC<EyesProps> = styled(Flex)<EyesProps>`
  justify-content: space-between;
  position: absolute;
  top: ${({ top }) => (top ? top : '42px')};
  left: -12px;
  &::before {
    background: black;
    display: inline-block;
    content: '';
    width: 15px;
    height: 23px;
    margin: 0 14px;
    border-radius: 100px;
  }
  &::after {
    background: black;
    display: inline-block;
    content: '';
    width: 23px;
    height: 10px;
    margin: 8px 14px;
    border-radius: 100px;
  }
`

const TriangularEyes: React.FC<TriangleProps> = ({
  left,
  right,
  bottom,
  colour,
}) => (
  <Flex
    sx={{
      width: '60px',
      justifyContent: 'space-between',
      position: 'absolute',
      top: '30px',
      left: '5px',
    }}
  >
    <TriangleUp {...{ left, right, bottom, colour }} />
    <TriangleUp {...{ left, right, bottom, colour }} />
  </Flex>
)

const TriangularDownEyes: React.FC<TriangleProps & Record<string, string>> = ({
  left,
  right,
  top,
  colour,
  eyesPosition = '40px',
}) => (
  <Flex
    sx={{
      width: '60px',
      justifyContent: 'space-between',
      position: 'absolute',
      top: eyesPosition,
      left: '5px',
    }}
  >
    <TriangleDown {...{ left, right, top, colour }} />
    <TriangleDown {...{ left, right, top, colour }} />
  </Flex>
)

export const Eyes = {
  OVAL: <OvalEyes />,
  ROUND: <RoundEyes />,
  NARROW: <NarrowEyes />,
  NARROW_SAD: <NarrowEyes {...{ top: '53px' }} />,
  WINK: <WinkingEyes />,
  TRIANGULAR: (
    <TriangularEyes
      {...{ left: '12', right: '12', bottom: '24', colour: 'black' }}
    />
  ),
  TRIANGULAR_DOWN: (
    <TriangularDownEyes
      {...{ left: '12', right: '12', top: '24', colour: 'black' }}
    />
  ),
  TRIANGULAR_SAD: (
    <TriangularDownEyes
      {...{
        left: '12',
        right: '12',
        top: '24',
        colour: 'black',
        eyesPosition: '50px',
      }}
    />
  ),
}

const Base: React.FC = ({ children }) => (
  <Circle
    size={`${baseTheme.space.xxxl}px`}
    my="m"
    mr="m"
    inlineBlock
    sx={{
      border: '1px solid grey',
      position: 'relative',
    }}
  >
    {children}
  </Circle>
)

const BaseLayer: React.FC<{ sx?: SxStyleProp }> = ({ children, sx }) => (
  <Flex
    width="100%"
    sx={{
      justifyContent: 'space-around',
      position: 'absolute',
      top: baseTheme.space.s,
      ...sx,
    }}
  >
    {children}
  </Flex>
)

export const EYES_TYPES = {
  OVAL: (
    <Base>
      <BaseLayer>
        <Box
          width="10px"
          height="20px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.l}px` }}
        />
        <Box
          width="10px"
          height="20px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.l}px` }}
        />
      </BaseLayer>
    </Base>
  ),
  ROUND: (
    <Base>
      <BaseLayer>
        <Box
          width="10px"
          height="10px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.l}px` }}
        />
        <Box
          width="10px"
          height="10px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.l}px` }}
        />
      </BaseLayer>
    </Base>
  ),
  NARROW: (
    <Base>
      <BaseLayer>
        <Box
          width="10px"
          height="5px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.m}px` }}
        />
        <Box
          width="10px"
          height="5px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.m}px` }}
        />
      </BaseLayer>
    </Base>
  ),
  NARROW_SAD: (
    <Base>
      <BaseLayer sx={{ top: baseTheme.space.m }}>
        <Box
          width="10px"
          height="5px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.m}px` }}
        />
        <Box
          width="10px"
          height="5px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.m}px` }}
        />
      </BaseLayer>
    </Base>
  ),
  WINK: (
    <Base>
      <BaseLayer sx={{ top: baseTheme.space.m }}>
        <Box
          width="5px"
          height="10px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.m}px` }}
        />
        <Box
          width="10px"
          height="5px"
          sx={{ background: 'black', borderRadius: `${baseTheme.radii.m}px` }}
        />
      </BaseLayer>
    </Base>
  ),
  TRIANGULAR: (
    <Base>
      <BaseLayer sx={{ top: baseTheme.space.s }}>
        <TriangleUp left="7" right="7" bottom="15" colour="black" />
        <TriangleUp left="7" right="7" bottom="15" colour="black" />
      </BaseLayer>
    </Base>
  ),
  TRIANGULAR_DOWN: (
    <Base>
      <BaseLayer sx={{ top: baseTheme.space.s }}>
        <TriangleDown left="7" right="7" top="15" colour="black" />
        <TriangleDown left="7" right="7" top="15" colour="black" />
      </BaseLayer>
    </Base>
  ),
  TRIANGULAR_SAD: (
    <Base>
      <BaseLayer sx={{ top: baseTheme.space.m }}>
        <TriangleDown left="7" right="7" top="15" colour="black" />
        <TriangleDown left="7" right="7" top="15" colour="black" />
      </BaseLayer>
    </Base>
  ),
}

export const EYES_ITEMS = (): SelectorItem[] => {
  const eyesNodesArray = []

  for (const eyes in EYES_TYPES) {
    eyesNodesArray.push({
      name: EYES,
      id: eyes,
      children: EYES_TYPES[eyes as EyesTypeKey],
    })
  }

  return eyesNodesArray
}
