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
  NOSE,
  HAIR,
  TYPE,
  EARS,
  FACIAL_HAIR,
  FRECKLES,
  GLASSES,
} from 'constants/body'
import { CHECKBOX, RADIO } from 'constants/inputs'

import {
  List,
  mainTheme,
  Box,
  HeadingH3,
  baseTheme,
} from 'danni-s-design-system'
import {
  BACKGROUNDS,
  CLOTHES_ITEMS,
  SKINS,
  EYES_ITEMS,
  EYEBROWS_ITEMS_TYPES,
  EYEBROWS_ITEMS_COLOURS,
  GLASSES_ITEMS_TYPES,
  GLASSES_ITEMS_COLOURS,
  MOUTH_ITEMS_TYPES,
  MOUTH_ITEMS_COLOURS,
  HAIR_ITEMS_TYPES,
  HAIR_ITEMS_COLOURS,
  FACIAL_HAIR_ITEMS_COLOURS,
  FACIAL_HAIR_ITEMS_TYPES,
  NOSE_ITEMS,
  EARS_ITEMS,
  FRECKLES_ITEMS,
} from '.'

import type {
  SelectorRow as SelectorRowProps,
  SelectorItem as SelectorItemProps,
  AvatarOptions,
  Selector as SelectorProps,
  Event,
  AvatarOptionKey,
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
      children: (
        <NavigationWrapper>{t(BACKGROUND, { count: 1 })}</NavigationWrapper>
      ),
    },
    {
      name: 'selector',
      id: SKIN,
      value: SKIN,
      children: <NavigationWrapper>{t(SKIN, { count: 1 })}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: CLOTHES,
      value: CLOTHES,
      children: (
        <NavigationWrapper>{t(CLOTHES, { count: 1 })}</NavigationWrapper>
      ),
    },
    {
      name: 'selector',
      id: EYES,
      value: EYES,
      children: <NavigationWrapper>{t(EYES, { count: 1 })}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: EYEBROWS,
      value: EYEBROWS,
      children: (
        <NavigationWrapper>{t(EYEBROWS, { count: 1 })}</NavigationWrapper>
      ),
    },
    {
      name: 'selector',
      id: MOUTH,
      value: MOUTH,
      children: <NavigationWrapper>{t(MOUTH, { count: 1 })}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: NOSE,
      value: NOSE,
      children: <NavigationWrapper>{t(NOSE, { count: 1 })}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: HAIR,
      value: HAIR,
      children: <NavigationWrapper>{t(HAIR, { count: 1 })}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: FACIAL_HAIR,
      value: FACIAL_HAIR,
      children: (
        <NavigationWrapper>{t(FACIAL_HAIR, { count: 1 })}</NavigationWrapper>
      ),
    },
    {
      name: 'selector',
      id: EARS,
      value: EARS,
      children: <NavigationWrapper>{t(EARS, { count: 1 })}</NavigationWrapper>,
    },
    {
      name: 'selector',
      id: FRECKLES,
      value: FRECKLES,
      children: (
        <NavigationWrapper>{t(FRECKLES, { count: 1 })}</NavigationWrapper>
      ),
    },
    {
      name: 'selector',
      id: GLASSES,
      value: GLASSES,
      children: (
        <NavigationWrapper>{t(GLASSES, { count: 1 })}</NavigationWrapper>
      ),
    },
  ] as SelectorItemProps[]
}

export const Selector: React.FC<SelectorProps> = ({
  avatar,
  setAvatarItem,
}) => {
  const { t } = useTranslation(['avatar', 'common'])
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
        role={t('common:navigation')}
        ariaLabel={t('avatar:select')}
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          padding: `2px 6px ${baseTheme.space.s}px 0`,
          '-webkit-overflow-scrolling': 'touch',
        }}
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
  const { t } = useTranslation(['avatar', 'common'])

  const select = (id: string): void => {
    if (!id) return
    setAvatarItem({
      ...avatar,
      [name]: id,
    })
  }

  // const multipleSelect = (id: string): void => {
  //   if (!id) return
  //   const avatarPart = avatar[name as AvatarOptionKey]
  //   const itemByIdIndex = avatarPart.indexOf(id)

  //   if (itemByIdIndex === -1) {
  //     avatarPart.push(id)
  //   } else {
  //     avatarPart.splice(itemByIdIndex, 1)
  //   }

  //   setAvatarItem({
  //     ...avatar,
  //     [name]: avatarPart,
  //   })
  // }

  const withOptionsSelect = (id: string): void => {
    if (!id) return
    const [kind, value] = id.split(':')
    const [prevType, prevColour] = avatar[name as AvatarOptionKey].split(':')

    const newValue =
      kind === TYPE ? `${value}:${prevColour}` : `${prevType}:${value}`

    setAvatarItem({
      ...avatar,
      [name]: newValue,
    })
  }

  const colourHeading = t('avatar:choose_colour')

  switch (name) {
    case BACKGROUND:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={BACKGROUNDS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${BACKGROUND}`)}
        />
      )
    case SKIN:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={SKINS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${SKIN}`)}
        />
      )
    case CLOTHES:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={CLOTHES_ITEMS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${CLOTHES}`)}
        />
      )
    case EYES:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={EYES_ITEMS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${EYES}`)}
        />
      )
    case EYEBROWS:
      return (
        <SelectorRow
          onSelect={(event: Event) => withOptionsSelect(event?.target?.id)}
          selectorItems={EYEBROWS_ITEMS_TYPES()}
          selectorItemsOptions={EYEBROWS_ITEMS_COLOURS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${EYEBROWS}`, { count: 0 })}
          heading={t('avatar:select_type', {
            count: 2,
            item: t(`avatar:${EYEBROWS}`, { count: 0 }),
          })}
          chooseColourHeading={colourHeading}
        />
      )
    case FACIAL_HAIR:
      return (
        <SelectorRow
          onSelect={(event: Event) => withOptionsSelect(event?.target?.id)}
          selectorItems={FACIAL_HAIR_ITEMS_TYPES()}
          selectorItemsOptions={FACIAL_HAIR_ITEMS_COLOURS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${FACIAL_HAIR}`, { count: 0 })}
          heading={t('avatar:select_type', {
            count: 2,
            item: t(`avatar:${FACIAL_HAIR}`, { count: 0 }),
          })}
          chooseColourHeading={colourHeading}
        />
      )
    case MOUTH:
      return (
        <SelectorRow
          onSelect={(event: Event) => withOptionsSelect(event?.target?.id)}
          selectorItems={MOUTH_ITEMS_TYPES()}
          selectorItemsOptions={MOUTH_ITEMS_COLOURS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${MOUTH}`)}
          heading={t('avatar:select_type', {
            count: 2,
            item: t(`avatar:${MOUTH}`, { count: 0 }),
          })}
          chooseColourHeading={colourHeading}
        />
      )
    case GLASSES:
      return (
        <SelectorRow
          onSelect={(event: Event) => withOptionsSelect(event?.target?.id)}
          selectorItems={GLASSES_ITEMS_TYPES()}
          selectorItemsOptions={GLASSES_ITEMS_COLOURS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${GLASSES}`)}
          heading={t('avatar:select_type', {
            count: 2,
            item: t(`avatar:${GLASSES}`, { count: 0 }),
          })}
          chooseColourHeading={colourHeading}
        />
      )
    case NOSE:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={NOSE_ITEMS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${NOSE}`)}
        />
      )
    case HAIR:
      return (
        <SelectorRow
          onSelect={(event: Event) => withOptionsSelect(event?.target?.id)}
          selectorItems={HAIR_ITEMS_TYPES()}
          selectorItemsOptions={HAIR_ITEMS_COLOURS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${HAIR}`)}
          heading={t('avatar:select_type', {
            count: 2,
            item: t(`avatar:${HAIR}`, { count: 0 }),
          })}
          chooseColourHeading={colourHeading}
        />
      )
    case EARS:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={EARS_ITEMS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${EARS}`)}
        />
      )
    case FRECKLES:
      return (
        <SelectorRow
          onSelect={(event: Event) => select(event?.target?.id)}
          selectorItems={FRECKLES_ITEMS()}
          role={t('common:navigation')}
          ariaLabel={t(`avatar:${FRECKLES}`)}
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
  multiple,
  heading,
  selectorItemsOptions,
  chooseColourHeading,
  sx,
}) => (
  <>
    {heading && (
      <>
        <HeadingH3 kind="serif" mb="s" fontSize={`${baseTheme.space.xl}px`}>
          {chooseColourHeading}
        </HeadingH3>
        {selectorItemsOptions && (
          <List
            onClick={onSelect}
            direction="row"
            as="nav"
            role={role}
            aria-label={ariaLabel}
            sx={{
              maxHeight: '18vh',
              overflow: 'hidden',
              overflowY: 'scroll',
              padding: '2px',
            }}
          >
            {selectorItemsOptions.map(item => (
              <SelectorItem key={item.id} {...item} multiple={multiple} />
            ))}
          </List>
        )}
        <StyledBreak />
        <HeadingH3 kind="serif" mb="s" fontSize={`${baseTheme.space.xl}px`}>
          {heading}
        </HeadingH3>
      </>
    )}
    <List
      onClick={onSelect}
      direction="row"
      as="nav"
      role={role}
      aria-label={ariaLabel}
      sx={
        sx
          ? sx
          : {
              maxHeight: '40vh',
              overflow: 'hidden',
              overflowY: 'scroll',
              padding: '2px',
            }
      }
    >
      {selectorItems.map(item =>
        item.id.includes('break') ? (
          <StyledBreak key={item.id} />
        ) : (
          <SelectorItem key={item.id} {...item} multiple={multiple} />
        ),
      )}
    </List>
  </>
)

const SelectorItem: React.FC<SelectorItemProps> = ({
  name,
  id,
  value,
  children,
  multiple,
}) => (
  <>
    <StyledInput
      type={multiple ? CHECKBOX : RADIO}
      id={id}
      name={name}
      value={value ? value : id}
    />
    <label title={id} htmlFor={id}>
      {children ? children : value}
    </label>
  </>
)

const StyledInput = styled('input')`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  &:not(:checked) + label {
    cursor: pointer;
  }
  &:checked + label {
    filter: brightness(0.8);
  }
  &:checked + label > div {
    box-shadow: 0 0 2px 1px ${mainTheme.colours.complementaryDark};
  }
`
