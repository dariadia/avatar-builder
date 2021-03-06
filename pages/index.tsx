import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import { isClient } from 'utils/env'
import { Media, MediaContextProvider } from 'utils/media'
import { defaultAvatarState } from 'constants/body'

import { MainLayout, Selector, Avatar } from '@/components'
import { baseTheme, Grid, Box, HeadingH3, Button } from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const snapImage = () => {
  const AvatarNode = document.querySelector('#avatar') as HTMLElement
  if (isClient() && AvatarNode) {
    domtoimage
      .toBlob(AvatarNode, { height: 300, width: 300 })
      .then(function (blob) {
        saveAs(blob, 'avatar.png')
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }
}

const StyledSaveButton = styled(Button).attrs({
  my: 'xl',
  px: 'xl',
  py: 'm',
  border: '1px solid accentDark',
  borderRadius: 's',
  borderOnHover: 'accentLightest',
  bg: 'accentDark',
  color: 'accentLightest',
  activeColour: 'complementaryDark',
  transition: 'slow',
  fontFamily: 'serif',
  onClick: snapImage,
})`
  font-weight: bold;
  font-size: ${baseTheme.space.xl}px;
`

const HomePage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['avatar'])
  const [avatar, setAvatarItem] = useState(defaultAvatarState)

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Grid
          p="m"
          sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: baseTheme.space.l }}
        >
          <Avatar {...avatar} />
          <Box>
            <HeadingH3 as="h1" kind="serif">
              {t('builder_heading')}
            </HeadingH3>
            <Box mb="xl" />
            <Selector {...{ avatar, setAvatarItem }} />
            <StyledSaveButton>{t('save')}</StyledSaveButton>
          </Box>
        </Grid>
      </Media>
      <Media lessThan="tablet">
        <Grid sx={{ gridTemplateColumns: '1fr', gap: baseTheme.space.xs }}>
          <Avatar {...avatar} />
          <Box>
            <HeadingH3 as="h1" kind="serif">
              {t('builder_heading')}
            </HeadingH3>
            <Box mb="xl" />
            <Selector {...{ avatar, setAvatarItem }} />
            <StyledSaveButton mx="auto">{t('save')}</StyledSaveButton>
          </Box>
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
