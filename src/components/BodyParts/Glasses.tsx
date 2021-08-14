import React from 'react'

import { Box } from 'danni-s-design-system'

export const Glasses: React.FC = () => <Box>Glasses</Box>

// const Glasses = styled(Box)`
//   position: relative;
//   width: 5px;
//   height: 2px;
//   background: ${GLASSES};
//   left: 6.5%;
//   top: 25px;
// `

// const GlassesLens = styled(Circle).attrs({ size: '50px' })<GlassesLensProps>`
//   position: absolute;
//   background: transparent;
//   border-radius: 100%;
//   border: 2px solid ${GLASSES};
//   left: ${({ side }) => (side === LEFT ? '-50px' : '4px')};
//   top: -22px;
//   overflow: hidden;
//   z-index: ${baseTheme.zIndices.above};
// `

// const Shine = styled(Box).attrs({ className: 'shine' })`
//   position: absolute;
//   &:before {
//     content: '';
//     position: absolute;
//     width: 20px;
//     height: 100px;
//     background: white;
//     opacity: 0.3;
//     transform: rotate(30deg);
//     top: -25px;
//     left: 5px;
//   }
//   &:after {
//     @extend .shine, :before;
//     width: 5px;
//     left: 30px;
//   }
// `
