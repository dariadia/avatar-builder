import React from 'react'

import { HoverableText, Text, Link, Flex } from 'danni-s-design-system'

export const Header: React.FC = () => {
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
          <HoverableText>hello world</HoverableText>
        </Link>
      </Text>
    </Flex>
  )
}
