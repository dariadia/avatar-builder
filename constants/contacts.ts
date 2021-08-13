import { Contacts } from 'types'

export const CONTACTS: Contacts = {
  GITHUB: { link: 'https://github.com/dariadia/', value: 'dariadia' },
  TELEGRAM: { value: '@dariadia' },
  PHONE_NUMBER: { translationKey: 'phone_number', value: '+7 917 168 1854' },
  EMAIL: {
    translationKey: 'email',
    link: 'mailto:daria.diachkova@mail.ru',
    value: 'daria.diachkova@mail.ru',
  },
  PORTFOLIO: {
    link: 'https://danni-s-folio.vercel.app/',
    value: `Danni's Folio`,
    hintKey: 'you_are_here',
  },
  INSTAGRAM: {
    link: 'https://www.instagram.com/_dariadia/',
    value: '_dariadia',
  },
  VK: { link: 'https://vk.com/dariadia/', value: 'dariadia' },
  LINKEDIN: {
    link: 'https://www.linkedin.com/in/dariadiachkova/',
    value: 'dariadiachkova',
  },
} as const
