import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import { isClient } from 'utils/env'

import { ProjectLayout, Selector, Avatar } from '@/components'
import { baseTheme, Grid, Box, Button } from 'danni-s-design-system'

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
    background: 'MIST',
    skin: 'slim:CHOCOLATE',
    clothes: 'BLUE',
    eyes: 'OVAL',
  })

  return (
    <Grid
      p="m"
      sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: baseTheme.space.l }}
    >
      <Avatar {...avatar} />
      <Box>
        <Selector {...{ avatar, setAvatarItem }} />
        <StyledSaveButton>{t('save')}</StyledSaveButton>
      </Box>
    </Grid>
  )
}

HomePage.Layout = ({ children, ...props }) => (
  <ProjectLayout {...props}>{children}</ProjectLayout>
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
