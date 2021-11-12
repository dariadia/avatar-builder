import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { FRECKLES, FRECKLES_TYPES, SUN_TOUCHED, LA_BOUFF } from 'constants/body'
import { baseTheme, Box } from 'danni-s-design-system'
import { Sample } from './Sample'

import type { Freckles as FrecklesProps, SelectorItem } from 'types'

const FrecklesWrapper = styled(Box)<FrecklesProps>`
  position: relative;
  width: 90px;
  height: 120px;
  margin-left: -10px;
  > div {
    background: ${({ colour }) => `${darken(0.3, colour)}`};
  }
`

const Freckle: React.FC<FrecklesProps> = styled(Box)<FrecklesProps>`
  width: ${({ width = 5 }) => `${width}px`};
  height: ${({ height = 4 }) => `${height}px`};
  top: ${({ top = 70 }) => `${top}px`};
  left: ${({ left = 20 }) => `${left}px`};
  border-radius: 10px;
  position: absolute;
`

export const Freckles: React.FC<FrecklesProps> = ({ colour, type }) => {
  switch (type) {
    case SUN_TOUCHED:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={66} left={11} width={3} height={3} />
          <Freckle top={80} left={15} width={3} height={3} />
          <Freckle top={80} left={30} width={3} height={3} />
          <Freckle top={74} left={63} width={3} height={3} />
          <Freckle top={82} left={75} width={3} height={3} />
        </FrecklesWrapper>
      )
    case LA_BOUFF:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle />
        </FrecklesWrapper>
      )
    default:
      return null
  }
}

// SUN_KISSED,
// SUN_STRUCK,
// MARILYN_MONROE,
// ARISTOCRAT,
// GENTRY,

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
