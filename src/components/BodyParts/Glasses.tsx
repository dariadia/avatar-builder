import React from 'react'
import styled from 'styled-components'

import { baseTheme, Box, Circle } from 'danni-s-design-system'
import {
  GLASSES,
  LEFT,
  RIGHT,
  GLASSES_COLOURS,
  COLOUR,
  GLASSES_TYPES,
  TYPE,
} from 'constants/body'
import { Sample } from './Sample'

import {
  GlassesLensProps,
  SelectorItem,
  GlassesColourKey,
  Glasses as GlassesProps,
} from 'types'

const GlassesFrame = styled(Box)`
  position: relative;
  width: 5px;
  height: 2px;
  background: ${GLASSES};
  left: 6.5%;
  top: 25px;
`

const GlassesLens = styled(Circle).attrs({ size: '50px' })<GlassesLensProps>`
  position: absolute;
  background: transparent;
  border-radius: 100%;
  border: 2px solid ${GLASSES};
  left: ${({ side }) => (side === LEFT ? '-50px' : '4px')};
  top: -22px;
  overflow: hidden;
  z-index: ${baseTheme.zIndices.above};
`

const Shine = styled(Box).attrs({ className: 'shine' })`
  position: absolute;
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 100px;
    background: white;
    opacity: 0.3;
    transform: rotate(30deg);
    top: -25px;
    left: 5px;
  }
  &:after {
    @extend .shine, :before;
    width: 5px;
    left: 30px;
  }
`

export const Glasses: React.FC<GlassesProps> = ({ type, colour }) => {
  switch (type) {
    default:
      console.log(colour)
      return (
        <GlassesFrame>
          <GlassesLens side={LEFT}>
            <Shine />
          </GlassesLens>
          <GlassesLens side={RIGHT}>
            <Shine />
          </GlassesLens>
        </GlassesFrame>
      )
  }
}

export const GLASSES_ITEMS_COLOURS = (): SelectorItem[] => {
  const glassesNodesArray = []

  for (const glasses in GLASSES_COLOURS) {
    glassesNodesArray.push({
      name: `${COLOUR}:${GLASSES}`,
      id: `${COLOUR}:${glasses}`,
      children: (
        <Sample colour={GLASSES_COLOURS[glasses as GlassesColourKey]} />
      ),
    })
  }

  return glassesNodesArray
}

export const GLASSES_ITEMS_TYPES = (): SelectorItem[] => {
  const glassesNodesArray = []

  for (const glasses of GLASSES_TYPES) {
    glassesNodesArray.push({
      name: `${TYPE}:${GLASSES}`,
      id: `${TYPE}:${glasses}`,
      children: (
        <Sample>
          <Box
            sx={{
              position: 'absolute',
              fontSize: `${baseTheme.space.xl}px`,
              top: '6px',
              left: '7px',
            }}
          >
            item
          </Box>
        </Sample>
      ),
    })
  }

  return glassesNodesArray
}
