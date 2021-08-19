import React from 'react'
import styled from 'styled-components'

import { darken } from 'polished'
import { Box, baseTheme, Circle } from 'danni-s-design-system'

import {
  Shirt as ShirtProps,
  Button as ButtonProps,
  ClothesColourKey,
  SelectorItem,
} from 'types'
import { CLOTHES_COLOURS, CLOTHES } from 'constants/body'

export const Shirt = styled(Box)<ShirtProps>`
  width: 60px;
  height: 30px;
  background: ${({ colour }) => colour};
  position: absolute;
  left: calc(50% - 30px);
  top: 75%;
  z-index: ${baseTheme.zIndices.upAbove};
  &:after {
    content: '';
    position: absolute;
    border-bottom: 20px solid ${darken(0.1, 'white')};
    border-left: 20x solid transparent;
    border-right: 15px solid transparent;
    height: 0;
    width: 22px;
    right: calc(50% - 10px);
    top: -20px;
  }
  &:before {
    content: '';
    position: absolute;
    border-bottom: 20px solid ${darken(0.2, 'white')};
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    height: 0;
    width: 25px;
    right: 2px;
    top: -20px;
  }
`

const ShirtButton = styled(Box)<ButtonProps>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${({ colour }) => colour};
  border-radius: 100%;
  left: calc(50% - 5px);
  top: 10px;
`

export const Clothes: React.FC<ShirtProps> = ({ colour }) => (
  <Shirt colour={colour}>
    <ShirtButton colour="blue" />
  </Shirt>
)

export const CLOTHES_ITEMS = (): SelectorItem[] => {
  const backgroundNodesArray = []

  for (const clothesColour in CLOTHES_COLOURS) {
    backgroundNodesArray.push({
      name: CLOTHES,
      id: clothesColour,
      children: (
        <Circle
          size={`${baseTheme.space.xxxl}px`}
          my="m"
          mr="m"
          inlineBlock
          sx={{
            background: CLOTHES_COLOURS[clothesColour as ClothesColourKey],
            border: '1px solid grey',
          }}
        />
      ),
    })
  }
  return backgroundNodesArray
}
