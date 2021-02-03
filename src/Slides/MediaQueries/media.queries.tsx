/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMedia } from 'styled-media-query';
import { screenSizes } from '../constants';

export const threshold = generateMedia(
  Object.keys(screenSizes).reduce((acc, cur) => {
    acc[cur] = `${(screenSizes as any)[cur] + 1}px`;
    return acc;
  }, {} as any)
);

const DESKTOP = 'desktop';
const TABLET = 'tablet';
const MOBILE = 'mobile';

const join = (query: string) => Array.from(query).join('');

export const desktop = (style: string): string => join(threshold.greaterThan(DESKTOP)`${style}`);
export const tablet = (style: string): string => join(threshold.between(TABLET, DESKTOP)`${style}`);
export const mobile = (style: string): string => join(threshold.between(MOBILE, TABLET)`${style}`);
export const smallMobile = (style: string): string => join(threshold.lessThan(MOBILE)`${style}`);

export const mobileDown = (css: string): string => ` ${mobile(css)}; ${smallMobile(css)}; `;
export const tabletUp = (css: string): string => ` ${tablet(css)}; ${desktop(css)}; `;
