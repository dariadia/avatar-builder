import React from 'react'
import styled from 'styled-components'

import { darken } from 'polished'
import { baseTheme, Box } from 'danni-s-design-system'

import type { Skin as SkinProps } from 'types'

export const Skin: React.FC<SkinProps> = ({ colour }) => (
  <Box>
    <Head colour={colour}>
      <Face colour={colour} />
    </Head>
    <Neck colour={colour} />
  </Box>
)

const Head = styled(Box).attrs({
  width: baseTheme.space.elephant,
})<SkinProps>`
  position: absolute;
  z-index: ${baseTheme.zIndices.upAbove};
  height: 120px;
  background: ${({ colour }) => colour};
  border-radius: 50px;
  left: calc(50% - 45px);
  top: 70px;
`

const Neck = styled(Box)<SkinProps>`
  position: absolute;
  width: 40px;
  height: 50px;
  background: ${({ colour }) => colour};
  left: calc(50% - 20px);
  top: 60%;
  box-shadow: ${({ colour }) =>
    `inset 0px 16px 0px 0px ${darken(0.1, colour)}`};
`

const Face = styled(Box)<SkinProps>`
  width: 500px;
  height: 500px;
  position: absolute;
  left: calc(50% - 35px);
  top: calc(50% - 50px);
  z-index: ${baseTheme.zIndices.upAbove};
`
