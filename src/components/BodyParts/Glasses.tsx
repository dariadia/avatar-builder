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
  FISH,
  GUILLERMO,
} from 'constants/body'
import { Sample } from './Sample'

import {
  GlassesLensProps,
  SelectorItem,
  GlassesColourKey,
  Glasses as GlassesProps,
} from 'types'

const GlassesLens = styled(Circle).attrs((props: GlassesLensProps) => ({
  size: `${props.size || 50}px`,
  className: `lens ${props.side}`,
}))<GlassesLensProps>`
  position: absolute;
  background: transparent;
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

const GlassesFrame: React.FC<GlassesProps> = styled(Box).attrs({
  children: (
    <>
      <GlassesLens side={LEFT}>
        <Shine />
      </GlassesLens>
      <GlassesLens side={RIGHT}>
        <Shine />
      </GlassesLens>
    </>
  ),
})<GlassesProps>`
  position: relative;
  width: 5px;
  height: 2px;
  background: ${({ colour }) => colour};
  left: 32px;
  top: 46px;
  > .lens {
    border: 2px solid ${({ colour }) => colour};
    top: ${({ top = -22 }) => `${top}px`};
    border-radius: ${({ radius = 100 }) => `${radius}%`};
  }
  > .lens&.left {
    left: ${({ left = -50 }) => `${left}px`};
  }
  > .lens&.right {
    left: ${({ right = 4 }) => `${right}px`};
  }
`

export const Glasses: React.FC<GlassesProps> = ({ type, colour }) => {
  switch (type) {
    case FISH:
      return <GlassesFrame colour={colour} />
    case GUILLERMO:
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
