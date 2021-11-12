import React from 'react'
// import styled from 'styled-components'
// import { darken } from 'polished'

import { FRECKLES, FRECKLES_TYPES } from 'constants/body'
import { baseTheme, Box } from 'danni-s-design-system'

import type { Freckles as FrecklesProps, SelectorItem } from 'types'
import { Sample } from './Sample'

// const Freckles = styled(Flex)`
//   width: 75px;
//   justify-content: space-between;
//   position: absolute;
//   top: 50px;
// `

// const Freckle = styled(Box)`
//   width: 5px;
//   height: 4px;
//   border-radius: 10px;
//   background: ${darken(0.3, SKIN)};
//   &:nth-child(even) {
//     margin-top: 5px;
//   }
//   &:nth-child(4) {
//     margin-left: 5px;
//   }
// `

export const Freckles: React.FC<FrecklesProps> = ({ colour, type }) => {
  switch (type) {
    case 'BUTTON':
      return <div>button {colour} </div>
    case 'OVAL':
      return <div>oval {colour} </div>
    default:
      return null
  }
}

export const FRECKLES_ITEMS = (): SelectorItem[] => {
  const frecklesNodesArray = []

  for (const mark of FRECKLES_TYPES) {
    frecklesNodesArray.push({
      name: FRECKLES,
      id: mark,
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
            hello world
            {/* {MOUTH_EMOTIONS_EMOJI[mouth as keyof typeof MOUTH_EMOTIONS_EMOJI]} */}
          </Box>
        </Sample>
      ),
    })
  }

  return frecklesNodesArray
}
