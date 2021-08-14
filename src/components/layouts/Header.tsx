import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { useTranslation } from 'next-i18next'
import { Router } from 'next/dist/client/router'

import { MediaContextProvider, Media } from 'utils/media'

import Link from 'next/link'
import {
  Text,
  Flex,
  baseTheme,
  Box,
  Button,
  List,
  Popup,
  ThemeType,
} from 'danni-s-design-system'

import { LanguageAvailable, LANGUAGES } from 'constants/languages'

import { Locale } from 'types'

const StyledLanguageButton = styled(Button).attrs({
  border: '1px solid accentLight',
  borderOnHover: 'accentDark',
  bg: 'complementaryLight',
  color: 'black',
  activeColour: 'complementaryLight',
  transition: 'slow',
  inlineBlock: true,
})`
  text-transform: uppercase;
  &:focus {
    background: ${({ theme }) => theme.colours.accentLight};
    color: ${({ theme }) => theme.colours.complementaryDark};
    border: ${({ theme }) => `1px solid ${theme.colours.complementaryDark}`};
  }
`

const LanguageButton = ({ locale }: { locale: Locale }) => {
  const theme = useContext(ThemeContext) as ThemeType
  return (
    <>
      <MediaContextProvider>
        <Media greaterThanOrEqual="tablet">
          <Link href="" locale={locale} passHref>
            <StyledLanguageButton m="xs" theme={theme}>
              {locale}
            </StyledLanguageButton>
          </Link>
        </Media>
        <Media lessThan="tablet">
          <Link href="" locale={locale} passHref>
            <StyledLanguageButton
              my="l"
              p="xl"
              fontSize={`${baseTheme.space.xxl}px`}
              theme={theme}
            >
              {locale}
            </StyledLanguageButton>
          </Link>
        </Media>
      </MediaContextProvider>
    </>
  )
}

const AvailableLocalesList = ({
  locales,
  currentLocale,
}: {
  locales: Locale[]
  currentLocale: Locale
}) => {
  const { t } = useTranslation(['common'])
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <List
          direction="row"
          role={t('navigation')}
          aria-label={t('languages')}
        >
          {locales.map(
            locale =>
              locale !== currentLocale && (
                <LanguageButton key={locale} locale={locale} />
              ),
          )}
        </List>
      </Media>
      <Media lessThan="tablet">
        <List liSx={{ margin: 'auto', width: 'fit-content' }}>
          {locales.map(
            locale =>
              locale !== currentLocale && (
                <LanguageButton key={locale} locale={locale} />
              ),
          )}
        </List>
      </Media>
    </MediaContextProvider>
  )
}

type HeaderProps = {
  currentLocale: Locale
  locales: Locale[]
}

const StyledHeader = styled('header')`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  min-height: ${baseTheme.space.xxxl}px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colours.accentLightest};
  color: black;
`

export const Header: React.FC<HeaderProps> = ({ currentLocale, locales }) => {
  const { t } = useTranslation(['common', 'languages'])

  const theme = useContext(ThemeContext) as ThemeType

  const [languageControlsShown, toggleLanguageControls] = useState(true)

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

  const currentLanguage = t(
    `languages:${LANGUAGES[currentLocale as LanguageAvailable]}` as string,
  )

  return (
    <StyledHeader
      theme={theme}
      onClick={() => toggleLanguageControls(!languageControlsShown)}
    >
      <MediaContextProvider>
        <Media greaterThanOrEqual="tablet">
          {languageControlsShown ? (
            <Flex mx="m" alignItems="center" as="nav">
              <Text mr="xs" inlineBlock>
                {t('common:language_detected')}{' '}
                <Text fontWeight="bold" inlineBlock>
                  {currentLanguage}
                </Text>
                ?
              </Text>
              <Text mr="xs" inlineBlock>
                {t('common:languages_available')}
              </Text>
              <AvailableLocalesList {...{ locales, currentLocale }} />
            </Flex>
          ) : (
            !loading && <AvailableLocalesList {...{ locales, currentLocale }} />
          )}
        </Media>
        <Media lessThan="tablet">
          {languageControlsShown ? (
            <Text mx="m" my="xxl" inlineBlock>
              {t('common:language_detected')}{' '}
              <Text fontWeight="bold" inlineBlock>
                {currentLanguage}
              </Text>
              ?
              <Text
                ml="xs"
                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                inlineBlock
              >
                {t('common:change')}
              </Text>
            </Text>
          ) : (
            !loading && (
              <>
                <Box
                  mx="m"
                  height={`${baseTheme.space.elephant - baseTheme.space.s}px`}
                />
                <Popup height="100vh" p="xl">
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <AvailableLocalesList {...{ locales, currentLocale }} />
                  </Flex>
                </Popup>
              </>
            )
          )}
        </Media>
      </MediaContextProvider>
    </StyledHeader>
  )
}
