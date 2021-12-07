import { colors, groupColors } from './color';

// bg
export const bgBlack = (text: string) => {
  return console.log(...colors(text, 'bgBlack'));
};

export const bgRed = (text: string) => {
  return console.log(...colors(text, 'bgRed'));
};

export const bgBlue = (text: string) => {
  return console.log(...colors(text, 'bgBlue'));
};

export const bgYellow = (text: string) => {
  return console.log(...colors(text, 'bgYellow'));
};

export const bgGreen = (text: string) => {
  return console.log(...colors(text, 'bgGreen'));
};

export const bgOrange = (text: string) => {
  return console.log(...colors(text, 'bgOrange'));
};

export const bgSpringGreen = (text: string) => {
  return console.log(...colors(text, 'bgSpringGreen'));
};

// gradient
export const gradientBlack = (text: string) => {
  return console.log(...colors(text, 'gradientBlack'));
};

export const gradientGreen = (text: string) => {
  return console.log(...colors(text, 'gradientGreen'));
};

export const bgGroupBlack = (text: string[]) => {
  return console.log(...groupColors(text, ['bgBlack', 'bgSpringGreen']));
};

export const bgGroupGradientBlack = (text: string[]) => {
  return console.log(...groupColors(text, ['gradientBlack', 'gradientGreen']));
};
