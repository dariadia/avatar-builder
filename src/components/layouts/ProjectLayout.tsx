import React, { useState, useEffect } from 'react'
import Router from 'next/dist/client/router'

import { Box, baseTheme, Loader } from 'danni-s-design-system'

import { Layout } from 'types'

export const ProjectLayout: React.FC<Layout> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])

  return (
    <>
      <Box as="header" mb="xl" />
      <Box minHeight={`calc(100vh - ${baseTheme.space.elephant}px)`} p="s">
        {loading ? (
          <Loader
            py="elephant"
            mx="auto"
            width="fit-content"
            color="accentDark"
          />
        ) : (
          children
        )}
      </Box>
      <Box as="footer" mt="xl" />
    </>
  )
}
