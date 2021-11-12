import React from 'react'
import styled from 'styled-components'

import { baseTheme, Box } from 'danni-s-design-system'
import {
  GLASSES,
  LEFT,
  RIGHT,
  GLASSES_COLOURS,
  COLOUR,
  GLASSES_TYPES,
  TYPE,
  DARIA,
  GUILLERMO,
  COLIN_ROBINSON,
  CHARLOTTE_HARRIS,
  OFFICE,
  NEW_KID,
  FRESHMAN,
  CARL_FREDRICKSEN,
  SOPHOMORE,
} from 'constants/body'
import { Sample } from './Sample'

import {
  GlassesLensProps,
  SelectorItem,
  GlassesColourKey,
  Glasses as GlassesProps,
} from 'types'

const GlassesLens = styled(Box).attrs((props: GlassesLensProps) => ({
  className: `lens ${props.side}`,
}))<GlassesLensProps>`
  position: absolute;
  background: transparent;
  overflow: hidden;
  z-index: ${baseTheme.zIndices.above};
  ${({ width, height = 30, size = 50 }) =>
    width
      ? `width: ${width}px; height: ${height}px;`
      : `width: ${size}px; height: ${size}px;`};
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

const GlassesFrame: React.FC<GlassesProps> = styled(Box).attrs(
  (props: GlassesProps) => ({
    children: (
      <>
        <GlassesLens
          side={LEFT}
          size={props.size}
          left={props.left}
          width={props.width}
          height={props.height}
        >
          <Shine />
        </GlassesLens>
        <GlassesLens
          side={RIGHT}
          size={props.size}
          right={props.right}
          width={props.width}
          height={props.height}
        >
          <Shine />
        </GlassesLens>
      </>
    ),
  }),
)<GlassesProps>`
  position: relative;
  width: ${({ frame }) => `${frame?.width || 5}px`};
  height: ${({ frame }) => `${frame?.height || 2}px`};
  background: ${({ colour }) => colour};
  left: ${({ frame }) => `${frame?.left || 32}px`};
  top: ${({ frame }) => `${frame?.top || 46}px`};
  > .lens {
    border: ${({ frame }) => `${frame?.border || 2}px`} solid
      ${({ colour }) => colour};
    top: ${({ top = -22 }) => `${top}px`};
    border-radius: ${({ radius = 100 }) => `${radius}%`};
  }
  > .lens.left {
    left: ${({ left = -50 }) => `${left}px`};
  }
  > .lens.right {
    left: ${({ right = 4 }) => `${right}px`};
  }
`

export const Glasses: React.FC<GlassesProps> = ({ type, colour }) => {
  switch (type) {
    case DARIA:
      return <GlassesFrame colour={colour} />
    case GUILLERMO:
      return (
        <GlassesFrame
          colour={colour}
          size={30}
          left={-27}
          right={16}
          top={-7}
          frame={{ width: 18, left: 26 }}
        />
      )
    case OFFICE:
      return (
        <GlassesFrame
          colour={colour}
          size={30}
          left={-27}
          right={16}
          top={-7}
          frame={{ width: 18, left: 26, top: 40, border: 3 }}
        />
      )
    case NEW_KID:
      return (
        <GlassesFrame
          colour={colour}
          size={32}
          left={-30}
          right={14}
          top={-7}
          frame={{ width: 16, left: 28, top: 43, height: 6 }}
        />
      )
    case FRESHMAN:
      return (
        <GlassesFrame
          colour={colour}
          radius={40}
          width={40}
          height={25}
          left={-38}
          right={9}
          top={-7}
          frame={{ width: 11, left: 30, height: 3 }}
        />
      )
    case COLIN_ROBINSON:
      return (
        <GlassesFrame
          colour={colour}
          radius={40}
          width={40}
          height={25}
          left={-38}
          right={9}
          top={-7}
          frame={{ width: 11, left: 30, top: 40, height: 5, border: 3 }}
        />
      )
    case CARL_FREDRICKSEN:
      return (
        <GlassesFrame
          colour={colour}
          radius={10}
          width={40}
          height={25}
          left={-38}
          right={9}
          top={-7}
          frame={{ width: 11, left: 30, top: 44, height: 4, border: 4 }}
        />
      )
    case SOPHOMORE:
      return (
        <GlassesFrame
          colour={colour}
          radius={10}
          width={40}
          height={25}
          left={-38}
          right={9}
          top={-7}
          frame={{ width: 11, left: 30, top: 44, height: 4 }}
        />
      )
    case CHARLOTTE_HARRIS:
      return (
        <GlassesFrame
          colour={colour}
          radius={40}
          size={30}
          left={-27}
          right={16}
          top={-7}
          frame={{ width: 18, left: 26 }}
        />
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
