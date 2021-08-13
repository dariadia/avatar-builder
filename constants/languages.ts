import { LanguagesAvailable } from 'types'

export const LANGUAGES: LanguagesAvailable = {
  'en-GB': 'british',
  'en-US': 'american',
  de: 'german',
  ru: 'russian',
} as const

export type LanguageAvailable = keyof typeof LANGUAGES
