import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { FRECKLES, FRECKLES_TYPES, SUN_TOUCHED } from 'constants/body'
import { baseTheme, Box } from 'danni-s-design-system'
import { Sample } from './Sample'

import type { Freckles as FrecklesProps, SelectorItem } from 'types'

const FrecklesWrapper = styled(Box)<FrecklesProps>`
  position: relative;
  > div {
    background: ${({ colour }) =>
      `inset 0px 16px 0px 0px ${darken(0.3, colour)}`};
  }
`

const Freckle: React.FC<FrecklesProps> = styled(Box)<FrecklesProps>`
  width: ${({ width = 5 }) => `${width}px`};
  height: ${({ height = 4 }) => `${height}px`};
  top: ${({ top = 4 }) => `${top}px`};
  left: ${({ left = 4 }) => `${left}px`};
  border-radius: 10px;
`

export const Freckles: React.FC<FrecklesProps> = ({ colour, type }) => {
  switch (type) {
    case SUN_TOUCHED:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle />
        </FrecklesWrapper>
      )
    default:
      return null
  }
}

export const FRECKLES_ITEMS = (): SelectorItem[] => {
  const frecklesNodesArray = []

  for (const mark of FRECKLES_TYPES) {
    frecklesNodesArray.push({
      name: FRECKLES,
      id: mark,
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
            hello world
            {/* {MOUTH_EMOTIONS_EMOJI[mouth as keyof typeof MOUTH_EMOTIONS_EMOJI]} */}
          </Box>
        </Sample>
      ),
    })
  }

  return frecklesNodesArray
}
