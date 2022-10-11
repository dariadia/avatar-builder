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
    border-bottom: ${({ colour, extraColour }) =>
      `20px solid ${darken(0.1, extraColour ? extraColour : colour)}`};
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
    border-bottom: ${({ colour, extraColour }) =>
      `20px solid ${darken(0.2, extraColour ? extraColour : colour)}`};
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
    border-bottom: ${({ colour, extraColour }) =>
      `12px solid ${darken(0.1, extraColour ? extraColour : colour)}`};
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
    border-bottom: ${({ colour, extraColour }) =>
      `12px solid ${darken(0.1, extraColour ? extraColour : colour)}`};
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    height: 0;
    width: 3px;
    right: 2px;
    top: -12px;
  }
`

const LowNeck = styled(Box)<ShirtProps>`
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
    border-bottom: ${({ colour, extraColour }) =>
      `15px solid ${darken(0.1, extraColour ? extraColour : colour)}`};
    border-left: 20x solid transparent;
    border-right: 15px solid transparent;
    height: 0;
    width: 13px;
    right: calc(50% - 1px);
    top: -15px;
  }
  &:before {
    content: '';
    position: absolute;
    border-bottom: ${({ colour, extraColour }) =>
      `15px solid ${darken(0.2, extraColour ? extraColour : colour)}`};
    border-left: 12px solid transparent;
    border-right: 0px solid transparent;
    height: 0;
    width: 15px;
    right: 2px;
    top: -15px;
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
    <Shirt colour={CLOTHES_COLOURS.LAWN} extraColour="white">
      <ShirtButton colour={ALL_COLOURS.LAWN} />
    </Shirt>
  ),
  BLUE: (
    <Shirt colour={CLOTHES_COLOURS.BLUE} extraColour="white">
      <ShirtButton colour={ALL_COLOURS.MILK} />
    </Shirt>
  ),
  SALMON: (
    <Shirt colour={CLOTHES_COLOURS.SALMON} extraColour="grey">
      <ShirtButton colour={ALL_COLOURS.MOONLIT_ASTEROID} />
    </Shirt>
  ),
  NINETIES_RED: (
    <Shirt colour={CLOTHES_COLOURS.NINETIES_RED} extraColour="black" />
  ),
  INDIGO: (
    <Shirt
      colour={CLOTHES_COLOURS.INDIGO}
      extraColour={CLOTHES_COLOURS.INDIGO}
    />
  ),
  MAROON: (
    <Vest colour={CLOTHES_COLOURS.MAROON}>
      <ShirtButton colour={ALL_COLOURS.DUNE_SUNSET} />
    </Vest>
  ),
  GOLD: <Vest colour={CLOTHES_COLOURS.GOLD} />,
  BLACK: <Vest colour={CLOTHES_COLOURS.BLACK} />,
  GREY: <TShirt colour={CLOTHES_COLOURS.GREY} />,
  WOLF: <Shirt colour={CLOTHES_COLOURS.WOLF} />,
  ORANGE: <TShirt colour={CLOTHES_COLOURS.ORANGE} />,
  DARK_GREEN: (
    <Shirt colour={CLOTHES_COLOURS.DARK_GREEN}>
      <ShirtButton colour={ALL_COLOURS.BLACK} />
    </Shirt>
  ),
  MILK: <TShirt colour={ALL_COLOURS.MILK} />,
  WITCHING_HOUR: (
    <LowNeck colour={CLOTHES_COLOURS.WITCHING_HOUR} extraColour="red" />
  ),
  ULTRA_VIOLET: (
    <Shirt colour={CLOTHES_COLOURS.ULTRA_VIOLET} extraColour="purple">
      <ShirtButton colour={ALL_COLOURS.PEACH} />
    </Shirt>
  ),
  RASTAFARI: <TShirt colour={CLOTHES_COLOURS.RASTAFARI} extraColour="red" />,
  BEYOND: <LowNeck colour={CLOTHES_COLOURS.BEYOND} extraColour="#D3D3D3" />,
  RAINBOW: (
    <Shirt colour={ALL_COLOURS.MILK} extraColour="salmon">
      <Badge colour={ALL_COLOURS.RAINBOW} />
    </Shirt>
  ),
  NONBINARY: (
    <Vest colour={ALL_COLOURS.NONBINARY} extraColour={ALL_COLOURS.MILK} />
  ),
  TRANSGENDER: (
    <Shirt
      colour={ALL_COLOURS.TRANSGENDER}
      extraColour={ALL_COLOURS.STEEL_BLUE}
    />
  ),
  GENDER_QUEER: (
    <LowNeck
      colour={ALL_COLOURS.GENDER_QUEER}
      extraColour={ALL_COLOURS.PALE_GREEN}
    />
  ),
  LESBIAN: <Vest colour={ALL_COLOURS.LESBIAN} extraColour="pink" />,
  ASEXUAL: (
    <Shirt colour={ALL_COLOURS.MOONLIT_ASTEROID} extraColour={ALL_COLOURS.GREY}>
      <Badge colour={ALL_COLOURS.ASEXUAL} />
    </Shirt>
  ),
  AROMANTIC: (
    <Shirt colour={ALL_COLOURS.GREEN}>
      <Badge colour={ALL_COLOURS.AROMANTIC} />
    </Shirt>
  ),
  BISEXUAL: (
    <LowNeck colour={ALL_COLOURS.DUNE_SUNSET} extraColour={ALL_COLOURS.CREAM}>
      <Badge colour={ALL_COLOURS.BISEXUAL} />
    </LowNeck>
  ),
  PANSEXUAL: <TShirt colour={ALL_COLOURS.PANSEXUAL} />,
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
