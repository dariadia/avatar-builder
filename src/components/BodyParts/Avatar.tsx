import React from 'react'

import {
  Skin,
  Background,
  Clothes,
  Eyes,
  Eyebrows,
  Mouth,
  Nose,
} from '@/components'
import { Box } from 'danni-s-design-system'

import {
  BACKGROUND_COLOURS,
  HAIR_COLOURS,
  SKIN_COLOURS,
  MOUTH_COLOURS,
} from 'constants/body'

import {
  Avatar as AvatarProps,
  BackgroundColourKey,
  SkinColourKey,
  EyesTypeKey,
  HairColourKey,
  MouthColourKey,
} from 'types'

export const Avatar: React.FC<AvatarProps> = avatar => {
  const { skin, clothes, background, eyes, eyebrows, mouth, nose } = avatar

  const [skinType, skinHue] = skin.split(':')
  const skinColour = SKIN_COLOURS[skinHue as SkinColourKey]

  const [eyebrowsType, eyebrowsHue] = eyebrows.split(':')
  const eyebrowsColour = HAIR_COLOURS[eyebrowsHue as HairColourKey]

  const [mouthType, mouthHue] = mouth.split(':')
  const mouthColour = MOUTH_COLOURS[mouthHue as MouthColourKey] || mouthHue

  return (
    <Box my="m" mx="auto" width="300px" height="300px">
      <Background
        id="avatar"
        colour={BACKGROUND_COLOURS[background as BackgroundColourKey]}
      >
        <Skin type={skinType} colour={skinColour}>
          <Eyebrows type={eyebrowsType} colour={eyebrowsColour} />
          {Eyes[eyes as EyesTypeKey]}
          <Nose colour={skinColour} type={nose} />
          <Mouth
            type={mouthType}
            colour={mouthColour}
            skinColour={skinColour}
          />
        </Skin>
        <Clothes colour={clothes} />
      </Background>
    </Box>
  )
}
