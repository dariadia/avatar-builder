import React from 'react'
import { baseTheme, Circle } from 'danni-s-design-system'

import { MouthColour, EyebrowsColour, SkinColour, GlassesColour } from 'types'

export const Sample: React.FC<{
  colour?: EyebrowsColour | MouthColour | SkinColour | GlassesColour
  boxShadow?: string
}> = ({ colour = 'white', children, boxShadow }) => (
  <Circle
    size={`${baseTheme.space.xxxl}px`}
    my="m"
    mr="m"
    inlineBlock
    sx={{
      position: 'relative',
      background: colour,
      border: '1px solid grey',
      boxShadow,
    }}
  >
    {children}
  </Circle>
)
