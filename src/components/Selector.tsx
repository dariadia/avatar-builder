import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'

import { isString } from 'utils/basic'
import {
  BACKGROUND,
  SELECTOR_NAMES,
  SelectorName,
  SKIN,
  CLOTHES,
  EYES,
  EYEBROWS,
  MOUTH,
} from 'constants/body'

import { List, mainTheme, Box, baseTheme } from 'danni-s-design-system'
import {
  BACKGROUNDS,
  CLOTHES_ITEMS,
  SKINS,
  EYES_ITEMS,
  EYEBROWS_ITEMS,
  MOUTH_ITEMS,
} from '.'

import type {
  SelectorRow as SelectorRowProps,
  SelectorItem as SelectorItemProps,
  AvatarOptions,
  Selector as SelectorProps,
  Event,
} from 'types'

const NavigationButton = styled(Box).attrs({
  mr: 'xl',
  mb: 'xl',
  p: 's',
  color: 'accentDark',
  bg: 'accentLightest',
  fontWeight: 'bold',
  inlineBlock: true,
})`
  &:hover {
    box-shadow: 0 0 2px 1px ${mainTheme.colours.complementaryDark};
    transition: all ${mainTheme.transitions.default};
  }
`
const NavigationWrapper: React.FC = ({ children }) => (
  <NavigationButton>{children}</NavigationButton>
)

const NavigationOptions = () => {
  const { t } = useTranslation(['avatar'])
  return [
    {
      name: 'selector',
      id: BACKGROUND,
      value: BACKGROUND,
      children: <NavigationWrapper>{t(BACKGROUND)}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: SKIN,
      value: SKIN,
      children: <NavigationWrapper>{t(SKIN)}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: CLOTHES,
      value: CLOTHES,
      children: <NavigationWrapper>{t(CLOTHES)}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: EYES,
      value: EYES,
      children: <NavigationWrapper>{t(EYES)}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: EYEBROWS,
      value: EYEBROWS,
      children: <NavigationWrapper>{t(EYEBROWS)}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: MOUTH,
      value: MOUTH,
      children: <NavigationWrapper>{t(MOUTH)}</NavigationWrapper>,
    },
  ] as SelectorItemProps[]
}

export const Selector: React.FC<SelectorProps> = ({
  avatar,
  setAvatarItem,
}) => {
  const { t } = useTranslation(['avatar'])
  const [shownSelector, setShowSelector] = useState(BACKGROUND)

  const makeSelection = (event: Event) => {
    let { value } = event.target
    const { target } = event

    if (!value) {
      value = target.parentNode.value
    }

    const hasChanged = shownSelector !== value

    if (hasChanged && isString(value) && SELECTOR_NAMES.includes(value)) {
      setShowSelector(value)
    }
  }

  const navigation = NavigationOptions()

  return (
    <>
      <SelectorRow
        onSelect={event => makeSelection(event)}
        selectorItems={navigation}
        role={t('navigation')}
        ariaLabel={t('select')}
      />
      {Selection({
        name: shownSelector as SelectorName,
        avatar: avatar as AvatarOptions,
        setAvatarItem,
      })}
    </>
  )
}

const Selection = ({
  name,
  avatar,
  setAvatarItem,
}: {
  name: SelectorName
  avatar: AvatarOptions
  setAvatarItem: (arg: unknown) => void
}) => {
  const { t } = useTranslation('avatar')

  const select = (id: string): void => {
    if (!id) return
    setAvatarItem({
      ...avatar,
      [name]: id,
    })
  }

  switch (name) {
    case BACKGROUND:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={BACKGROUNDS()}
          role={t('navigation')}
          ariaLabel={t(BACKGROUND)}
        />
      )
    case SKIN:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={SKINS()}
          role={t('navigation')}
          ariaLabel={t(SKIN)}
        />
      )
    case CLOTHES:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={CLOTHES_ITEMS()}
          role={t('navigation')}
          ariaLabel={t(CLOTHES)}
        />
      )
    case EYES:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={EYES_ITEMS()}
          role={t('navigation')}
          ariaLabel={t(EYES)}
        />
      )
    case EYEBROWS:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={EYEBROWS_ITEMS()}
          role={t('navigation')}
          ariaLabel={t(EYEBROWS)}
        />
      )
    case MOUTH:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={MOUTH_ITEMS()}
          role={t('navigation')}
          ariaLabel={t(MOUTH)}
        />
      )
    default:
      return null
  }
}

const StyledBreak = styled('br')`
  content: 'BREAK';
  display: block;
  margin-top: ${baseTheme.space.m}px;
  margin-bottom: ${baseTheme.space.m}px;
  margin-right: ${baseTheme.space.xxxl}px;
  border-bottom: 1px solid;
`

const SelectorRow: React.FC<SelectorRowProps> = ({
  onSelect,
  selectorItems,
  role,
  ariaLabel,
}) => (
  <List
    onClick={onSelect}
    direction="row"
    as="nav"
    role={role}
    aria-label={ariaLabel}
    sx={{
      maxHeight: '40vh',
      overflow: 'hidden',
      overflowY: 'scroll',
      padding: '2px',
    }}
  >
    {selectorItems.map(item =>
      item.id.includes('break') ? (
        <StyledBreak key={item.id} />
      ) : (
        <SelectorItem key={item.id} {...item} />
      ),
    )}
  </List>
)

const SelectorItem: React.FC<SelectorItemProps> = ({
  name,
  id,
  value,
  children,
}) => (
  <>
    <StyledInput type="radio" id={id} name={name} value={value ? value : id} />
    <label htmlFor={id}>{children ? children : value}</label>
  </>
)

const StyledInput = styled('input')`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:not(:checked) + label {
    cursor: pointer;
  }
  &:checked + label {
    filter: brightness(0.8);
    color: red;
  }
  &:checked + label > div {
    box-shadow: 0 0 2px 1px ${mainTheme.colours.complementaryDark};
  }
`
