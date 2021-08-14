import { Box } from 'danni-s-design-system'
import { darken } from 'polished'
import React from 'react'
import styled from 'styled-components'

export const Mouth: React.FC = styled(Box)`
  width: 25px;
  height: 5px;
  border-radius: 50%;
  border-bottom: 3px solid ${darken(0.1, '#fefeee')};
  position: absolute;
  top: 70px;
  left: 24px;s
`
