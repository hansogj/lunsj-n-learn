export const base = '8px';
export const absBase = 8;

const absBaseX = (factor: number) => factor * absBase;

export const screenSizes = {
  desktop: absBaseX(160),
  tablet: absBaseX(120),
  mobile: absBaseX(90),
  smallMobile: 0,
};

export const pallet = {
  light: '#eed9dd',
  dark: '#4b0082',
  lavender: '#e6e6fa',
  sass_pink: '#bf4080',
  gray_1: '#333',
  gray_2: '#888',
  gray_3: '#ddd',
  white: '#fff',
  green_light: '#00d8b4',
  green_contrast: '#215c5c',
};
