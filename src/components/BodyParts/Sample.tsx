import React from 'react'
import { baseTheme, Circle } from 'danni-s-design-system'

import { MouthColour, EyebrowsColour, SkinColour } from 'types'

export const Sample: React.FC<{
  colour?: EyebrowsColour | MouthColour | SkinColour
}> = ({ colour = 'white', children }) => (
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
