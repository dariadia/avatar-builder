import styled from 'styled-components'

import { Circle, mainTheme } from 'danni-s-design-system'

import type { Background as BackgroundProps } from 'types'

export const Background = styled(Circle).attrs({
  my: 'm',
  mx: 'auto',
})<BackgroundProps>`
  width: 300px;
  height: 300px;
  position: relative;
  background: ${({ colour }) =>
    colour ? colour : mainTheme.colours.accentLightest};
  overflow: hidden;
  transition: background 0.5s ease;
`
