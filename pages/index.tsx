import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Media, MediaContextProvider } from 'utils/media'

import { BACKGROUND_COLOURS, SKIN_COLOURS } from 'constants/body'

import { MainLayout, Selector, Skin, Background } from '@/components'
import { baseTheme, Grid, Box, HeadingH3 } from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['avatar'])
  const [avatar, setAvatarItem] = useState({
    background: BACKGROUND_COLOURS.MIST,
    skin: SKIN_COLOURS.CHOCOLATE,
  })

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Grid
          sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: baseTheme.space.l }}
        >
          <Box my="m" mx="auto" width="300px" height="300px">
            <Background colour={avatar.background}>
              <Skin colour={avatar.skin} />
            </Background>
          </Box>
          <Box>
            <HeadingH3 as="h1" kind="serif">
              {t('builder_heading')}
            </HeadingH3>
            <Selector {...{ avatar, setAvatarItem }} />
          </Box>
        </Grid>
      </Media>
      <Media lessThan="tablet">
        <Grid sx={{ gridTemplateColumns: '1fr', gap: baseTheme.space.m }}>
          <Box></Box>
          <Box></Box>
        </Grid>
      </Media>
    </MediaContextProvider>
  )
}

HomePage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'common',
        'languages',
        'avatar',
      ])),
    },
  }
}

export default HomePage
