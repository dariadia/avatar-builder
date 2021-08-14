import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import html2canvas from 'html2canvas'

import { isClient } from 'utils/env'
import { Media, MediaContextProvider } from 'utils/media'

import { BACKGROUND_COLOURS, SKIN_COLOURS } from 'constants/body'

import { MainLayout, Selector, Skin, Background } from '@/components'
import { baseTheme, Grid, Box, HeadingH3, Button } from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const snapImage = () => {
  const AvatarNode = document.querySelector('#avatar') as HTMLElement
  if (isClient() && AvatarNode) {
    html2canvas(AvatarNode).then(function (canvas) {
      document.body.appendChild(canvas)
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
  &:focus {
    background: ${({ theme }) => theme.colours.accentLight};
    color: ${({ theme }) => theme.colours.complementaryDark};
    border: ${({ theme }) => `1px solid ${theme.colours.complementaryDark}`};
  }
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
