import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import { isClient } from 'utils/env'
import { Media, MediaContextProvider } from 'utils/media'

import { BACKGROUND_COLOURS, SKIN_COLOURS } from 'constants/body'

import { MainLayout, Selector, Skin, Background } from '@/components'
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
  const [avatar, setAvatarItem] = useState({
    background: BACKGROUND_COLOURS.MIST,
    skin: SKIN_COLOURS.CHOCOLATE,
  })

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Grid
          p="m"
          sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: baseTheme.space.l }}
        >
          <Box my="m" mx="auto" width="300px" height="300px">
            <Background id="avatar" colour={avatar.background}>
              <Skin colour={avatar.skin} />
            </Background>
          </Box>
          <Box>
            <HeadingH3 as="h1" kind="serif">
              {t('builder_heading')}
            </HeadingH3>
            <Selector {...{ avatar, setAvatarItem }} />
            <StyledSaveButton>{t('save')}</StyledSaveButton>
          </Box>
        </Grid>
      </Media>
      <Media lessThan="tablet">
        <Grid p="m" sx={{ gridTemplateColumns: '1fr', gap: baseTheme.space.m }}>
          <Box my="m" mx="auto" width="300px" height="300px">
            <Background id="avatar" colour={avatar.background}>
              <Skin colour={avatar.skin} />
            </Background>
          </Box>
          <Box>
            <HeadingH3 as="h1" kind="serif">
              {t('builder_heading')}
            </HeadingH3>
            <Selector {...{ avatar, setAvatarItem }} />
            <StyledSaveButton mx="auto">{t('save')}</StyledSaveButton>
          </Box>
        </Grid>
      </Media>
      <Media lessThan="mobile">
        <Grid sx={{ gridTemplateColumns: '1fr', gap: baseTheme.space.xs }}>
          <Box my="m" mx="auto" width="300px" height="300px">
            <Background id="avatar" colour={avatar.background}>
              <Skin colour={avatar.skin} />
            </Background>
          </Box>
          <Box>
            <HeadingH3 as="h1" kind="serif">
              {t('builder_heading')}
            </HeadingH3>
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
