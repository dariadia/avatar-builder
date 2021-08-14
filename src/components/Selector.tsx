import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'

import { List, HoverableText, Button } from 'danni-s-design-system'
import { BackgroundKey, BACKGROUNDS, BACKGROUND_OPTIONS } from '.'

import type {
  SelectorRow as SelectorRowProps,
  SelectorItem as SelectorItemProps,
  AvatarOptions,
  Selector as SelectorProps,
  Event,
} from 'types'

const NavigationWrapper: React.FC = ({ children }) => (
  <Button activeColour="accentLight" mr="xl" mb="xl" p="s">
    <HoverableText
      activeColour="black"
      color="accentDark"
      sx={{ fontWeight: 'bold' }}
      inlineBlock
    >
      {children}
    </HoverableText>
  </Button>
)

const NavigationOptions = () => {
  const { t } = useTranslation(['avatar'])
  return [
    {
      name: 'selector',
      id: 'background',
      value: 'background',
      children: <NavigationWrapper>{t('background')}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: 'skin',
      value: 'skin',
      children: <NavigationWrapper>{t('skin')}</NavigationWrapper>,
    },
  ] as SelectorItemProps[]
}

export const BACKGROUND = 'background'
const SKIN = 'skin'

const SELECTOR_NAMES = [BACKGROUND, SKIN]

type SelectorName = keyof typeof SELECTOR_NAMES

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
        ? target.parentNode.value
        : target.parentNode.parentNode.parentNode.children[0]?.value
    }

    if (typeof value === 'string' && SELECTOR_NAMES.includes(value)) {
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
        ariaLabel={t('background')}
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
  setAvatarItem,
}: {
  name: SelectorName
  avatar: AvatarOptions
  setAvatarItem: (arg: any) => void
}) => {
  const { t } = useTranslation('avatar')

  const select = (id: string): void => {
    setAvatarItem({ background: BACKGROUND_OPTIONS[id as BackgroundKey] })
  }

  switch (name) {
    case BACKGROUND:
      return (
        <SelectorRow
          // TODO: Fix Event typing: Property 'value' does not exist on type 'EventTarget'
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onSelect={event => select(event.target.id)}
          selectorItems={BACKGROUNDS}
          role={t('navigation')}
          ariaLabel={t('background')}
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
    {selectorItems.map(item => (
      <SelectorItem key={item.id} {...item} />
    ))}
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
  }
`
