import React from 'react'
import styled from 'styled-components'

import {
  EMOTION,
  MOUTH,
  MOUTH_COLOURS,
  PLUMP,
  SLIM,
  SMILE,
  MOUTH_EMOTIONS,
} from 'constants/body'
import { baseTheme, Box, Circle } from 'danni-s-design-system'
import { darken } from 'polished'

import {
  MouthColourKey,
  SelectorItem,
  Mouth as MouthProps,
  MouthEmotionKey,
  MouthColour,
} from 'types'

export const MouthSlim: React.FC<MouthProps> = styled(Box)<MouthProps>`
  width: 25px;
  height: 5px;
  border-radius: 50%;
  border-bottom: 3px solid ${({ colour }) => darken(0.1, colour)};
  position: absolute;
  top: 86px;
  left: 24px;
  ${({ transform }) => (transform ? `transform: ${transform};` : '')}
`

export const MouthPlump: React.FC<MouthProps> = styled(Box)<MouthProps>`
  width: 25px;
  height: 7px;
  border-radius: 50%;
  border-bottom: 6px solid ${({ colour }) => darken(0.1, colour)};
  position: absolute;
  top: 86px;
  left: 24px;
`

export const MouthSad: React.FC<MouthProps> = styled(Box)<MouthProps>`
  width: 25px;
  height: 22px;
  border-radius: 50%;
  border-top: 3px solid ${({ colour }) => darken(0.1, colour)};
  position: absolute;
  top: 82px;
  left: 24px;
`

export const MouthShocked: React.FC<MouthProps> = styled(Box)<MouthProps>`
  width: 25px;
  height: 5px;
  border-radius: 50%;
  border-bottom: 18px solid ${({ colour }) => darken(0.1, colour)};
  position: absolute;
  top: 79px;
  left: 24px;
`

export const MouthSmile: React.FC<MouthProps> = styled(Box)<MouthProps>`
  width: 25px;
  height: 8px;
  border-radius: 50%;
  border-bottom: 3px solid ${({ colour }) => darken(0.1, colour)};
  position: absolute;
  top: 84px;
  left: 24px;
`

export const MouthEcstatic: React.FC<MouthProps> = styled(Box)<MouthProps>`
  width: 25px;
  height: 22px;
  border-radius: 50%;
  border-bottom: 3px solid ${({ colour }) => darken(0.1, colour)};
  position: absolute;
  top: 70px;
  left: 24px;
`

const MouthWithEmotion: React.FC<MouthProps> = ({ emotion, colour }) => {
  switch (emotion) {
    case 'SMILE':
      return <MouthEcstatic colour={colour} />
    case 'SAD':
      return <MouthSad colour={colour} />
    case 'CONFUSED':
      return <MouthSlim colour={colour} transform="rotate(18deg)" />
    case 'SHOCKED':
      return <MouthShocked colour="salmon" />
    default:
      return <MouthSlim colour={colour} />
  }
}

export const Mouth: React.FC<MouthProps> = ({ type, colour, skinColour }) => {
  switch (type) {
    case PLUMP:
      return <MouthPlump colour={colour} />
    case SMILE:
      return <MouthSmile colour={colour} />
    case EMOTION:
      return <MouthWithEmotion colour={skinColour} emotion={colour} />
    default:
      return <MouthSlim colour={colour} />
  }
}

const Sample: React.FC<{
  colour: MouthColour
}> = ({ colour, children }) => (
  <Circle
    size={`${baseTheme.space.xxxl}px`}
    my="m"
    mr="m"
    inlineBlock
    sx={{
      position: 'relative',
      background: colour,
      border: '1px solid grey',
    }}
  >
    {children}
  </Circle>
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
      id: `${SMILE}:${mouth}`,
      children: <Sample colour={MOUTH_COLOURS[mouth as MouthColourKey]} />,
    })
  }

  mouthNodesArray.push({
    name: MOUTH,
    id: `${SMILE}:break`,
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
      children: (
        <Sample colour="black">
          <Box
            sx={{
              position: 'absolute',
              fontSize: `${baseTheme.space.xl}px`,
              top: '6px',
              left: '7px',
            }}
          >
            {MOUTH_EMOTIONS[emotion as MouthEmotionKey]}
          </Box>
        </Sample>
      ),
    })
  }

  return mouthNodesArray
}
