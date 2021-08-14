import React from 'react'
import styled from 'styled-components'

import { BACKGROUND } from '../Selector'

import { mainTheme, Circle, Box, baseTheme } from 'danni-s-design-system'

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

export const YELLOW = 'yellow'
export const GREEN = 'green'
export const RAINBOW = 'rainbow'
export const ASEXUAL = 'asexual'
export const MIST = 'mist'

export const RAINBOW_COLOUR =
  'linear-gradient(180deg, #FE0000 16.66%,#FD8C00 16.66%, 33.32%,#FFE500 33.32%, 49.98%,#119F0B 49.98%, 66.64%,#0644B3 66.64%, 83.3%,#C22EDC 83.3%)'
export const ASEXUAL_COLOUR =
  'linear-gradient(180deg, #181818 25%, #A3A3A3 25%, 50%, #FFFFFF 50%, 75%, #800080 75%)'

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
