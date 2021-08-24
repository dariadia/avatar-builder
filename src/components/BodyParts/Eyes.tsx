import React from 'react'
import styled from 'styled-components'

import { Flex, Circle, Box, baseTheme } from 'danni-s-design-system'

import { EyesTypeKey, SelectorItem } from 'types'
import { EYES } from 'constants/body'

export const Eyes: React.FC = styled(Flex)`
  justify-content: space-between;
  position: absolute;
  top: 12px;
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

const BaseLayer: React.FC = ({ children }) => (
  <Flex
    width="100%"
    sx={{
      justifyContent: 'space-around',
      position: 'absolute',
      top: baseTheme.space.s,
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
