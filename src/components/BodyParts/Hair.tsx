import React from 'react'

import { Box } from 'danni-s-design-system'

export const Hair: React.FC = () => <Box>hair</Box>

// const HairBack = styled(Box).attrs({
//   width: baseTheme.space.elephant,
// })<Hair>`
//   height: 120px;
//   position: absolute;
//   background: ${HAIR};
//   left: ${({ side }) => (side === LEFT ? '25%' : '46%')};
//   top: 40%;
//   border-radius: 200px;
//   &:after {
//     content: '';
//     position: absolute;
//     width: 107px;
//     height: 80px;
//     background: ${HAIR};
//     box-shadow: inset 2px -25px 24px 0px ${darken(0.15, HAIR)};
//     border-radius: 300px;
//     top: 36%;
//     right: -8%;
//   }
// `

// const HairTop = styled(Circle)`
//   position: absolute;
//   width: 130px;
//   height: 130px;
//   background: ${HAIR};
//   left: calc(50% - 65px);
//   top: 12%;
//   box-shadow: inset 10px 7px 5px 0px ${darken(0.07, HAIR)};
//   &:after {
//     content: '';
//     position: absolute;
//     width: 90px;
//     height: 40px;
//     background: ${HAIR};
//     border-radius: 0px 200px 0px 200px;
//     z-index: 4;
//     left: 40px;
//     top: 20px;
//     transform: rotate(10deg);
//     box-shadow: inset 1px 12px 9px 6px ${darken(0.07, HAIR)};
//   }
// `
