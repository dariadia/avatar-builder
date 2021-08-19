import React from 'react'
import styled from 'styled-components'

import { darken } from 'polished'
import { Box, baseTheme, Circle } from 'danni-s-design-system'

import {
  Shirt as ShirtProps,
  Button as ButtonProps,
  ClothesColourKey,
  SelectorItem,
  ClothesPairKey,
} from 'types'
import { CLOTHES_COLOURS, CLOTHES, ALL_COLOURS } from 'constants/body'

const Shirt = styled(Box)<ShirtProps>`
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

const TShirt = styled(Box)<ShirtProps>`
  width: 60px;
  height: 30px;
  background: ${({ colour }) => colour};
  position: absolute;
  left: calc(50% - 30px);
  top: 75%;
  z-index: ${baseTheme.zIndices.upAbove};
`

const Vest = styled(Box)<ShirtProps>`
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
    border-bottom: ${({ colour }) => `12px solid ${darken(0.1, colour)}`};
    border-left: 20x solid transparent;
    border-right: 15px solid transparent;
    height: 0;
    width: 22px;
    right: calc(50% - 10px);
    top: -12px;
  }
  &:before {
    content: '';
    position: absolute;
    border-bottom: ${({ colour }) => `10px solid ${darken(0.1, colour)}`};
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    height: 0;
    width: 3px;
    right: 2px;
    top: -10px;
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

const Badge = styled(Box)<ButtonProps>`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${({ colour }) => colour};
  border-radius: 100%;
  left: calc(50% - 20px);
  top: 4px;
`

export const CLOTHES_PAIR = {
  LAWN: (
    <Shirt colour={CLOTHES_COLOURS.LAWN}>
      <ShirtButton colour={ALL_COLOURS.LAWN} />
    </Shirt>
  ),
  BLUE: (
    <Shirt colour={CLOTHES_COLOURS.BLUE}>
      <ShirtButton colour={ALL_COLOURS.MILK} />
    </Shirt>
  ),
  BLACK: <Vest colour={CLOTHES_COLOURS.BLACK} />,
  GREY: <TShirt colour={CLOTHES_COLOURS.GREY} />,
  RAINBOW: (
    <Shirt colour={ALL_COLOURS.MILK}>
      <Badge colour={ALL_COLOURS.RAINBOW} />
    </Shirt>
  ),
}

export const Clothes: React.FC<ShirtProps> = ({ colour }) =>
  CLOTHES_PAIR[colour as ClothesPairKey]

export const CLOTHES_ITEMS = (): SelectorItem[] => {
  const clothesNodesArray = []

  for (const clothesColour in CLOTHES_COLOURS) {
    clothesNodesArray.push({
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
  return clothesNodesArray
}
