import React from 'react'

import { HoverableText, Text, Link, Flex } from 'danni-s-design-system'
import {
  DANNI_GITHUB,
  DANNI_LOGIN,
  TELEGRAM,
  TELEGRAM_LOGIN,
} from 'constants/locations'

const TTO = 2021

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex bg="accentLightest" p="m" justifyContent="flex-end">
      <Text>
        <Link
          target="_blank"
          href={DANNI_GITHUB}
          color="black"
          sx={{ textDecoration: 'none' }}
          inlineBlock
        >
          <HoverableText>{DANNI_LOGIN} </HoverableText>
        </Link>{' '}
        x{' '}
        <Link
          target="_blank"
          href={TELEGRAM}
          color="black"
          sx={{ textDecoration: 'none' }}
          inlineBlock
        >
          <HoverableText>{TELEGRAM_LOGIN} ©</HoverableText>
        </Link>
        <Text color="black" ml="s" inlineBlock>
          2021{currentYear !== TTO && ` – ${currentYear}`}
        </Text>
      </Text>
    </Flex>
  )
}
