import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/dist/client/router'

import { Box, baseTheme, Loader } from 'danni-s-design-system'
import { Footer, Header } from '.'

import { Layout } from 'types'

export const MainLayout: React.FC<Layout> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  const { query } = useRouter()
  const isApp = query.isApp

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
      {!isApp && <Header />}
      <Box
        minHeight={`calc(100vh - ${
          baseTheme.space.elephant + baseTheme.space.s
        }px)`}
        p="l"
      >
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
      {!isApp && <Footer />}
    </>
  )
}
