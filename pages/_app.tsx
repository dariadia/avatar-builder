import React, { ComponentType } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { AnimateSharedLayout } from 'framer-motion'
import { appWithTranslation, useTranslation } from 'next-i18next'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import { mainTheme as theme } from 'danni-s-design-system'

import { Layout as LayoutType } from 'types'

const GlobalStyle = createGlobalStyle`
 ${normalize}

 * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-family: Karla, Arial, sans-serif;
    white-space: pre-line;
    -webkit-font-smoothing: antialiased;
  }
`

type ApplicationProps = AppProps & {
  Component: AppProps['Component'] & { Layout?: React.FC<LayoutType> }
}

const App: React.FC<ApplicationProps> = ({ Component, pageProps }) => {
  const Layout: ComponentType = Component.Layout || React.Fragment
  const { t } = useTranslation(['common'])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{t('avatar_builder_meta')}</title>
        <meta name="description" content={t('create_avatar')} />
        <meta
          name="og:image"
          property="og:image"
          content="/assets/share-avatar-v2.png"
        />
        <meta name="twitter:image" content="/assets/share-avatar-v2.png" />
      </Head>
      <AnimateSharedLayout>
        <ThemeProvider theme={theme}>
          {Component.Layout ? (
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </AnimateSharedLayout>
      <GlobalStyle />
    </>
  )
}

export default appWithTranslation(App)
