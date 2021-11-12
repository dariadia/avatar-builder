import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import {
  FRECKLES,
  FRECKLES_TYPES,
  SUN_TOUCHED,
  LA_BOUFF,
  SUN_KISSED,
  SUN_STRUCK,
  MARILYN_MONROE,
  ARISTOCRAT,
  GENTRY,
  EARL,
  VISCOUNT,
  PARSON,
} from 'constants/body'
import { Box } from 'danni-s-design-system'
import { Sample } from './Sample'

import type { Freckles as FrecklesProps, SelectorItem } from 'types'

const FrecklesWrapper = styled(Box)<FrecklesProps>`
  position: relative;
  width: 90px;
  height: 120px;
  margin-left: -10px;
  > div {
    background: ${({ colour }) => `${darken(0.3, colour)}`};
  }
`

const Freckle: React.FC<FrecklesProps> = styled(Box)<FrecklesProps>`
  width: ${({ width = 5 }) => `${width}px`};
  height: ${({ height = 4 }) => `${height}px`};
  top: ${({ top = 70 }) => `${top}px`};
  left: ${({ left = 20 }) => `${left}px`};
  border-radius: 10px;
  position: absolute;
`

export const Freckles: React.FC<FrecklesProps> = ({ colour, type }) => {
  switch (type) {
    case SUN_TOUCHED:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={66} left={11} width={3} height={3} />
          <Freckle top={80} left={15} width={3} height={3} />
          <Freckle top={80} left={30} width={3} height={3} />
          <Freckle top={74} left={63} width={3} height={3} />
          <Freckle top={82} left={75} width={3} height={3} />
        </FrecklesWrapper>
      )
    case SUN_KISSED:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={67} left={12} width={4} height={3} />
          <Freckle top={81} left={15} width={4} height={3} />
          <Freckle top={69} left={24} />
          <Freckle top={82} left={75} width={3} height={2} />
          <Freckle top={74} left={63} width={4} height={3} />
          <Freckle top={93} left={70} width={3} height={2} />
          <Freckle top={66} left={76} />
          <Freckle top={60} left={78} width={4} height={3} />
          <Freckle top={56} left={8} width={4} height={3} />
        </FrecklesWrapper>
      )
    case SUN_STRUCK:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={67} left={12} width={4} height={3} />
          <Freckle top={81} left={15} width={4} height={3} />
          <Freckle top={69} left={24} />
          <Freckle top={82} left={75} width={3} height={2} />
          <Freckle top={74} left={63} width={4} height={3} />
          <Freckle top={93} left={70} width={3} height={2} />
          <Freckle top={66} left={76} />
          <Freckle top={60} left={78} width={4} height={3} />
          <Freckle top={6} left={15} width={3} height={2} />
          <Freckle top={11} left={19} width={3} height={2} />
          <Freckle top={54} left={4} />
          <Freckle top={56} left={18} width={4} height={3} />
          <Freckle top={93} left={30} width={3} height={2} />
          <Freckle top={69} left={30} width={3} height={2} />
          <Freckle top={68} left={67} width={3} height={2} />
        </FrecklesWrapper>
      )
    case LA_BOUFF:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle />
        </FrecklesWrapper>
      )
    case MARILYN_MONROE:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={80} left={66} />
        </FrecklesWrapper>
      )
    case ARISTOCRAT:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={58} left={9} />
        </FrecklesWrapper>
      )
    case GENTRY:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={60} left={9} />
          <Freckle top={70} left={9} width={4} height={3} />
        </FrecklesWrapper>
      )
    case EARL:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={11} left={10} width={4} height={3} />
        </FrecklesWrapper>
      )
    case VISCOUNT:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={60} left={78} />
          <Freckle top={70} left={65} width={4} height={3} />
        </FrecklesWrapper>
      )
    case PARSON:
      return (
        <FrecklesWrapper colour={colour}>
          <Freckle top={98} left={53} />
        </FrecklesWrapper>
      )
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
              top: '6px',
              left: '7px',
            }}
          >
            <Freckles colour="black" type={mark} />
          </Box>
        </Sample>
      ),
    })
  }

  return frecklesNodesArray
}
