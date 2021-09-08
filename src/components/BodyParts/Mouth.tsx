import React from 'react'
import styled from 'styled-components'

import {
  MOUTH,
  MOUTH_COLOURS,
  PLUMP,
  SMILE,
  MOUTH_TYPES,
  COLOUR,
  TYPE,
  MOUTH_EMOTIONS_EMOJI,
  CONFUSED,
  SAD,
  SHOCKED,
} from 'constants/body'
import { baseTheme, Box } from 'danni-s-design-system'
import { darken } from 'polished'

import { MouthColourKey, SelectorItem, Mouth as MouthProps } from 'types'
import { Sample } from './Sample'

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

export const Mouth: React.FC<MouthProps> = ({ type, colour }) => {
  switch (type) {
    case PLUMP:
      return <MouthPlump colour={colour} />
    case SMILE:
      return <MouthSmile colour={colour} />
    case SAD:
      return <MouthSad colour={colour} />
    case CONFUSED:
      return <MouthSlim colour={colour} transform="rotate(18deg)" />
    case SHOCKED:
      return <MouthShocked colour={colour} />
    default:
      return <MouthSlim colour={colour} />
  }
}

export const MOUTH_ITEMS_COLOURS = (): SelectorItem[] => {
  const mouthNodesArray = []

  for (const mouth in MOUTH_COLOURS) {
    mouthNodesArray.push({
      name: `${COLOUR}:${MOUTH}`,
      id: `${COLOUR}:${mouth}`,
      children: <Sample colour={MOUTH_COLOURS[mouth as MouthColourKey]} />,
    })
  }

  return mouthNodesArray
}

export const MOUTH_ITEMS_TYPES = (): SelectorItem[] => {
  const mouthNodesArray = []

  for (const mouth of MOUTH_TYPES) {
    mouthNodesArray.push({
      name: `${TYPE}:${MOUTH}`,
      id: `${TYPE}:${mouth}`,
      children: (
        <Sample>
          <Box
            sx={{
              position: 'absolute',
              fontSize: `${baseTheme.space.xl}px`,
              top: '6px',
              left: '7px',
            }}
          >
            {MOUTH_EMOTIONS_EMOJI[mouth as keyof typeof MOUTH_EMOTIONS_EMOJI]}
          </Box>
        </Sample>
      ),
    })
  }

  return mouthNodesArray
}
