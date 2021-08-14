import React from 'react'
import styled from 'styled-components'

import { BACKGROUND } from '../Selector'
import { mainTheme, Circle, Box, baseTheme } from 'danni-s-design-system'

import {
  GREEN,
  YELLOW,
  MIST,
  RAINBOW,
  RAINBOW_COLOUR,
  ASEXUAL,
  ASEXUAL_COLOUR,
} from 'constants/body'

import type { Background as BackgroundProps } from 'types'

export const Background = styled(Circle)<BackgroundProps>`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({ colour }) =>
    colour ? colour : mainTheme.colours.accentLightest};
  overflow: hidden;
  transition: background 0.5s ease;
`

export const BACKGROUND_OPTIONS = {
  [GREEN]: <Background colour={mainTheme.colours.accentDark} />,
  [YELLOW]: <Background colour="yellow" />,
  [MIST]: <Background colour={mainTheme.colours.accentLightest} />,
  [RAINBOW]: <Background colour={RAINBOW_COLOUR} />,
  [ASEXUAL]: <Background colour={ASEXUAL_COLOUR} />,
}

export type BackgroundKey = keyof typeof BACKGROUND_OPTIONS

const BackgroundWrapper: React.FC = ({ children }) => (
  <Box
    height={`${baseTheme.space.xxxl}px`}
    width={`${baseTheme.space.xxxl}px`}
    my="m"
    mr="m"
    inlineBlock
  >
    {children}
  </Box>
)

export const BACKGROUNDS = [
  {
    name: BACKGROUND,
    id: GREEN,
    children: (
      <BackgroundWrapper>{BACKGROUND_OPTIONS[GREEN]}</BackgroundWrapper>
    ),
  },
  {
    name: BACKGROUND,
    id: YELLOW,
    children: (
      <BackgroundWrapper>{BACKGROUND_OPTIONS[YELLOW]}</BackgroundWrapper>
    ),
  },
  {
    name: BACKGROUND,
    id: MIST,
    children: <BackgroundWrapper>{BACKGROUND_OPTIONS[MIST]}</BackgroundWrapper>,
  },
  {
    name: BACKGROUND,
    id: RAINBOW,
    children: (
      <BackgroundWrapper>{BACKGROUND_OPTIONS[RAINBOW]}</BackgroundWrapper>
    ),
  },
  {
    name: BACKGROUND,
    id: ASEXUAL,
    children: (
      <BackgroundWrapper>{BACKGROUND_OPTIONS[ASEXUAL]}</BackgroundWrapper>
    ),
  },
]
