import React from 'react'

import { Skin, Background, Clothes } from '@/components'
import { Box } from 'danni-s-design-system'

import { Avatar as AvatarProps } from 'types'

export const Avatar: React.FC<AvatarProps> = avatar => {
  const { skin, clothes, background } = avatar
  return (
    <Box my="m" mx="auto" width="300px" height="300px">
      <Background id="avatar" colour={background}>
        <Skin colour={skin} />
        <Clothes colour={clothes} />
      </Background>
    </Box>
  )
}
