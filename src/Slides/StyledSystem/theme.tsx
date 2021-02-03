/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from 'styled-system';
import { pallet as colors, screenSizes } from '../constants';

const px = (val: number) => `${val}px`;
const { smallMobile, mobile, tablet, desktop } = screenSizes;
const space = [0, 8, 16, 32, 64, { small: px(8), medium: px(2 * 8), large: px(3 * 8) }] as any;
const fontSizes = [8, 12, 16, 20, 24, 32];

const breakpoints: Theme['breakpoints'] = [smallMobile, mobile, tablet, desktop]
  .map(px)

breakpoints['sm' as any] = breakpoints[0];
breakpoints['smallMobile' as any] = breakpoints[0]
breakpoints['m' as any] = breakpoints[1];
breakpoints['mobile' as any] = breakpoints[1]
breakpoints['t' as any] = breakpoints[2];
breakpoints['tablet' as any] = breakpoints[2]
breakpoints['d' as any] = breakpoints[3];
breakpoints['desktop' as any] = breakpoints[3]

console.log(JSON.stringify({ breakpoints, sm: breakpoints['sm' as any] }))



const theme: Theme = {
  colors,
  space,
  breakpoints,
  fontSizes,

  //mediaQueries
  //fonts
  //fontWeights
  //lineHeights
  //letterSpacings
  //sizes
  //borders
  //borderStyles
  //borderWidths
  //radii
  //shadows
  //zIndices
  //buttons
  //colorStyles
  //textStyles
};
export default theme;
