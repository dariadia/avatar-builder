import { createMedia } from '@artsy/fresnel'
import { sizes } from 'danni-s-design-system'

const media = createMedia({
  breakpoints: {
    ...sizes,
  },
})

// Make styles for injection into the header of the page
export const mediaStyles = media.createMediaStyle()

export const { Media, MediaContextProvider } = media
