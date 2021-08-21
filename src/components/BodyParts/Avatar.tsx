import React from 'react'

import { Skin, Background, Clothes } from '@/components'
import { Box } from 'danni-s-design-system'

import { BACKGROUND_COLOURS, SKIN_COLOURS } from 'constants/body'

import {
  Avatar as AvatarProps,
  BackgroundColourKey,
  SkinColourKey,
} from 'types'

export const Avatar: React.FC<AvatarProps> = avatar => {
  const { skin, clothes, background } = avatar

  const [type, hue] = skin.split(':')
  const colour = SKIN_COLOURS[hue as SkinColourKey]

  return (
    <Box my="m" mx="auto" width="300px" height="300px">
      <Background
        id="avatar"
        colour={BACKGROUND_COLOURS[background as BackgroundColourKey]}
      >
        <Skin {...{ type, colour }} />
        <Clothes colour={clothes} />
      </Background>
    </Box>
  )
}
