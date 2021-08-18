import * as React from 'react'
import { NextPage } from 'next'
import { ThemeType } from 'danni-s-design-system'

import type { Locale } from '.'

export type Page<T> = NextPage<T> & { Layout?: React.FC }

export type Layout = {
  theme?: ThemeType
}

export interface SinglePage {
  locale?: Locale
  query?: { isApp?: boolean }
}
