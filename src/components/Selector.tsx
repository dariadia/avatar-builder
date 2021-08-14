import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

import { mainTheme, List } from 'danni-s-design-system'
import { Background } from '.'

import type {
  SelectorRow as SelectorRowProps,
  SelectorItem as SelectorItemProps,
  AvatarOptions,
  Selector as SelectorProps,
} from 'types'

const NavigationOptions = () => {
  const { t } = useTranslation(['avatar'])
  return [
    {
      name: 'selector',
      id: 'background',
      value: 'background',
      children: t('background'),
    },
    {
      name: 'selector',
      id: 'skin',
      value: 'skin',
      children: t('skin'),
    },
  ] as SelectorItemProps[]
}

const BACKGROUND = 'background'
const SKIN = 'skin'
const YELLOW = 'yellow'
const GREEN = 'green'

const SELECTOR_NAMES = [BACKGROUND, SKIN]

type SelectorName = keyof typeof SELECTOR_NAMES

const BACKGROUND_OPTIONS = {
  [GREEN]: <Background colour={mainTheme.colours.accentDark} />,
  [YELLOW]: <Background colour="yellow" />,
}

type BackgroundKey = keyof typeof BACKGROUND_OPTIONS

const BACKGROUNDS = [
  {
    name: BACKGROUND,
    id: GREEN,
    children: BACKGROUND_OPTIONS[GREEN],
  },
  {
    name: BACKGROUND,
    id: YELLOW,
    children: BACKGROUND_OPTIONS[YELLOW],
  },
]

export const Selector: React.FC<SelectorProps> = ({
  avatar,
  setAvatarItem,
}) => {
  const [shownSelector, setShowSelector] = useState(BACKGROUND)

  const makeSelection = (value: string) => {
    if (typeof value === 'string' && SELECTOR_NAMES.includes(value)) {
      setShowSelector(value)
    }
  }

  const navigation = NavigationOptions()

  return (
    <>
      <SelectorRow
        // TODO: Fix Event typing: Property 'value' does not exist on type 'EventTarget'
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onSelect={event => makeSelection(event?.target?.value)}
        selectorItems={navigation}
      />
      {getShowSelector({
        name: shownSelector as SelectorName,
        avatar: avatar as AvatarOptions,
        setAvatarItem,
      })}
    </>
  )
}

const getShowSelector = ({
  name,
  setAvatarItem,
}: {
  name: SelectorName
  avatar: AvatarOptions
  setAvatarItem: (arg: any) => void
}) => {
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
        />
      )
    default:
      return null
  }
}

const SelectorRow: React.FC<SelectorRowProps> = ({
  onSelect,
  selectorItems,
}) => (
  <List onClick={onSelect}>
    {selectorItems.map(item => (
      <SelectorItem {...item} />
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
    <input type="radio" id={id} name={name} value={value ? value : id} />
    <label htmlFor={id}>{children ? children : value}</label>
  </>
)
