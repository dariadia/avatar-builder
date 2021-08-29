import React from 'react'
import styled from 'styled-components'

import { darken } from 'polished'
import { baseTheme, Box, Circle } from 'danni-s-design-system'

import { SKIN_COLOURS, SKIN, PLUMP, SLIM, SKIN_OUTLINE } from 'constants/body'

import type { Skin as SkinProps, SkinColourKey, SelectorItem } from 'types'

export const Skin: React.FC<SkinProps> = ({ type, colour, children }) =>
  type === SLIM ? (
    <Box>
      <SlimHead colour={colour}>
        <Face colour={colour}>{children}</Face>
      </SlimHead>
      <SlimNeck colour={colour} />
    </Box>
  ) : (
    <Box>
      <PlumpHead colour={colour}>
        <Face colour={colour}>{children}</Face>
      </PlumpHead>
      <PlumpNeck colour={colour} />
    </Box>
  )

const SlimHead = styled(Box).attrs({
  width: baseTheme.space.elephant,
})<SkinProps>`
  border: ${SKIN_OUTLINE};
  position: absolute;
  z-index: ${baseTheme.zIndices.upAbove};
  height: 120px;
  background: ${({ colour }) => colour};
  border-radius: 50px;
  left: calc(50% - 45px);
  top: 70px;
`

const PlumpHead = styled(Box).attrs({
  width: '100px',
})<SkinProps>`
  border: ${SKIN_OUTLINE};
  position: absolute;
  z-index: ${baseTheme.zIndices.upAbove};
  height: 120px;
  background: ${({ colour }) => colour};
  border-radius: 50px;
  left: calc(50% - 52px);
  top: 70px;
`

const SlimNeck = styled(Box)<SkinProps>`
  border: ${SKIN_OUTLINE};
  position: absolute;
  width: 40px;
  height: 50px;
  background: ${({ colour }) => colour};
  left: calc(50% - 20px);
  top: 60%;
  box-shadow: ${({ colour }) =>
    `inset 0px 16px 0px 0px ${darken(0.1, colour)}`};
`
const PlumpNeck = styled(Box)<SkinProps>`
  border: ${SKIN_OUTLINE};
  position: absolute;
  width: 50px;
  height: 50px;
  background: ${({ colour }) => colour};
  left: calc(50% - 25px);
  top: 60%;
  box-shadow: ${({ colour }) =>
    `inset 0px 18px 0px 0px ${darken(0.1, colour)}`};
`

const Face = styled(Box)<SkinProps>`
  width: 300px;
  height: 300px;
  position: absolute;
  left: calc(50% - 35px);
  top: calc(50% - 50px);
  z-index: ${baseTheme.zIndices.upAbove};
`

const Sample: React.FC<Record<string, SkinColourKey>> = ({ skinColour }) => (
  <Circle
    size={`${baseTheme.space.xxxl}px`}
    my="m"
    mr="m"
    inlineBlock
    sx={{
      background: SKIN_COLOURS[skinColour],
      border: '1px solid grey',
    }}
  />
)

export const SKINS = (): SelectorItem[] => {
  const skinNodesArray = []

  // First batch. Type: SLIM
  for (const skinColour in SKIN_COLOURS) {
    skinNodesArray.push({
      name: SKIN,
      id: `${SLIM}:${skinColour}`,
      children: <Sample skinColour={skinColour as SkinColourKey} />,
    })
  }

  skinNodesArray.push({
    name: SKIN,
    id: `${SKIN}:break`,
  })

  // Second batch. Type: PLUMP
  for (const skinColour in SKIN_COLOURS) {
    skinNodesArray.push({
      name: SKIN,
      id: `${PLUMP}:${skinColour}`,
      children: <Sample skinColour={skinColour as SkinColourKey} />,
    })
  }
  return skinNodesArray
}
