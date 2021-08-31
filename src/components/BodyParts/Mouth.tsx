import React from 'react'
import styled from 'styled-components'

import {
  EMOTION,
  MOUTH,
  MOUTH_COLOURS,
  PLUMP,
  SLIM,
  MOUTH_EMOTIONS,
} from 'constants/body'
import { baseTheme, Box, Circle } from 'danni-s-design-system'
import { darken } from 'polished'

import { MouthColourKey, SelectorItem, Mouth as MouthProps } from 'types'

export const MouthSlim: React.FC<MouthProps> = styled(Box)<MouthProps>`
  width: 25px;
  height: 5px;
  border-radius: 50%;
  border-bottom: 3px solid ${({ colour }) => darken(0.1, colour)};
  position: absolute;
  top: 86px;
  left: 24px;
`

const MouthWithEmotion: React.FC<MouthProps> = ({ emotion, colour }) => {
  switch (emotion) {
    case 'SAD':
      return <MouthSlim colour={colour} />
    default:
      return <MouthSlim colour={colour} />
  }
}

export const Mouth: React.FC<MouthProps> = ({ type, colour, skinColour }) => {
  switch (type) {
    case PLUMP:
      return <MouthSlim colour={colour} />
    case EMOTION:
      return <MouthWithEmotion colour={skinColour} emotion={colour} />
    default:
      return <MouthSlim colour={colour} />
  }
}

const Sample: React.FC<Record<string, string>> = ({ colour }) => (
  <Circle
    size={`${baseTheme.space.xxxl}px`}
    my="m"
    mr="m"
    inlineBlock
    sx={{
      background: colour,
      border: '1px solid grey',
    }}
  />
)

export const MOUTH_ITEMS = (): SelectorItem[] => {
  const mouthNodesArray = []

  for (const mouth in MOUTH_COLOURS) {
    mouthNodesArray.push({
      name: MOUTH,
      id: `${SLIM}:${mouth}`,
      children: <Sample colour={MOUTH_COLOURS[mouth as MouthColourKey]} />,
    })
  }

  mouthNodesArray.push({
    name: MOUTH,
    id: `${SLIM}:break`,
  })

  for (const mouth in MOUTH_COLOURS) {
    mouthNodesArray.push({
      name: MOUTH,
      id: `${PLUMP}:${mouth}`,
      children: <Sample colour={MOUTH_COLOURS[mouth as MouthColourKey]} />,
    })
  }

  mouthNodesArray.push({
    name: MOUTH,
    id: `${PLUMP}:break`,
  })

  for (const emotion in MOUTH_EMOTIONS) {
    mouthNodesArray.push({
      name: MOUTH,
      id: `${EMOTION}:${emotion}`,
      children: <Sample colour="black" />,
    })
  }

  return mouthNodesArray
}
