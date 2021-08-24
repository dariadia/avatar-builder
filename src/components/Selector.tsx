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
} from 'constants/body'

import { List, mainTheme, Box } from 'danni-s-design-system'
import { BACKGROUNDS, CLOTHES_ITEMS, SKINS } from '.'

import type {
  SelectorRow as SelectorRowProps,
  SelectorItem as SelectorItemProps,
  AvatarOptions,
  Selector as SelectorProps,
  Event,
} from 'types'

const NavigationButton = styled(Box).attrs({
  mr: 'xl',
  my: 'xl',
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
          ariaLabel={t('background')}
        />
      )
    case SKIN:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={SKINS()}
          role={t('navigation')}
          ariaLabel={t('skin')}
        />
      )
    case CLOTHES:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={CLOTHES_ITEMS()}
          role={t('navigation')}
          ariaLabel={t('clothes')}
        />
      )
    default:
      return null
  }
}

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
  >
    {selectorItems.map(item =>
      item.id === 'br' ? (
        <br key={item.id} />
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
