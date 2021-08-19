import React from 'react'
import styled from 'styled-components'

import { mainTheme, Circle, baseTheme } from 'danni-s-design-system'

import { BACKGROUND, BACKGROUND_COLOURS } from 'constants/body'

import type {
  Background as BackgroundProps,
  SelectorItem,
  BackgroundColourKey,
} from 'types'

export const Background = styled(Circle)<BackgroundProps>`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({ colour }) =>
    colour ? colour : mainTheme.colours.accentLightest};
  overflow: hidden;
  transition: background 0.5s ease;
`

export const BACKGROUNDS = (): SelectorItem[] => {
  const backgroundNodesArray = []

  for (const backgroundColour in BACKGROUND_COLOURS) {
    backgroundNodesArray.push({
      name: BACKGROUND,
      id: backgroundColour,
      children: (
        <Circle
          size={`${baseTheme.space.xxxl}px`}
          my="m"
          mr="m"
          inlineBlock
          sx={{
            background:
              BACKGROUND_COLOURS[backgroundColour as BackgroundColourKey],
            border: '1px solid grey',
          }}
        />
      ),
    })
  }
  return backgroundNodesArray
}
