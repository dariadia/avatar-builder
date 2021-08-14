import styled from 'styled-components'

import { Circle, mainTheme } from 'danni-s-design-system'

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
