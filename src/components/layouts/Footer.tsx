import React from 'react'

import { HoverableText, Text, Link, Flex } from 'danni-s-design-system'

const TTO = 2021

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex bg="accentLightest" p="m" justifyContent="flex-end">
      <Text>
        <Link
          target="_blank"
          href="https://github.com/dariadia/"
          color="black"
          sx={{ textDecoration: 'none' }}
          inlineBlock
        >
          <HoverableText>dariadia ©</HoverableText>
        </Link>
        <Text color="black" ml="s" inlineBlock>
          2021{currentYear !== TTO && ` – ${currentYear}`}
        </Text>
      </Text>
    </Flex>
  )
}
