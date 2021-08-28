import React from 'react'

import { baseTheme, Box, Circle } from 'danni-s-design-system'
import { EYEBROWS, HAIR_COLOURS as EYEBROWS_COLOURS } from 'constants/body'

import type { SelectorItem, HairColourKey as EyebrowsColourKey } from 'types'

export const Eyebrow: React.FC = () => <Box>Eyebrow</Box>

// const Eyebrow = styled(Box)`
//   width: 20px;
//   height: 5px;
//   eyerbow: ${darken(0.4, HAIR)};
// `

// const Eyebrows = styled(Flex)`
//   width: 70px;
//   justify-content: space-between;
// `

export const EYEBROWS_ITEMS = (): SelectorItem[] => {
  const eyebrowsNodesArray = []

  for (const eyebrowsColour in EYEBROWS_COLOURS) {
    eyebrowsNodesArray.push({
      name: EYEBROWS,
      id: eyebrowsColour,
      children: (
        <Circle
          size={`${baseTheme.space.xxxl}px`}
          my="m"
          mr="m"
          inlineBlock
          sx={{
            background: EYEBROWS_COLOURS[eyebrowsColour as EyebrowsColourKey],
            border: '1px solid grey',
          }}
        />
      ),
    })
  }
  return eyebrowsNodesArray
}
