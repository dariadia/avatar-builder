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
  COLIN_ROBINSON,
} from 'constants/body'
import { Sample } from './Sample'

import {
  GlassesLensProps,
  SelectorItem,
  GlassesColourKey,
  Glasses as GlassesProps,
} from 'types'

const GlassesFrame: React.FC<GlassesProps> = styled(Box)<GlassesProps>`
  position: relative;
  width: 5px;
  height: 2px;
  background: ${({ colour }) => colour};
  left: 32px;
  top: 46px;
  > div {
    border: 2px solid ${({ colour }) => colour};
  }
`

const GlassesLens: React.FC<GlassesLensProps> = styled(Circle).attrs({
  size: '50px',
})<GlassesLensProps>`
  position: absolute;
  background: transparent;
  border-radius: 100%;
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
    case COLIN_ROBINSON:
      return (
        <GlassesFrame colour={colour}>
          <GlassesLens side={LEFT}>
            <Shine />
          </GlassesLens>
          <GlassesLens side={RIGHT}>
            <Shine />
          </GlassesLens>
        </GlassesFrame>
      )
    default:
      return null
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
