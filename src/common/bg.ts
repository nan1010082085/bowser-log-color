import { colors, groupColors } from './color';

function c(colors: any[], value: string) {
  if (value) {
    return console.log(...colors, value);
  } else {
    return console.log(...colors);
  }
}

// bg
export const bgBlack = (text: string, value?: any) => {
  return c(colors(text, 'bgBlack'), value);
};

export const bgRed = (text: string, value?: any) => {
  return c(colors(text, 'bgRed'), value);
};

export const bgBlue = (text: string, value?: any) => {
  return c(colors(text, 'bgBlue'), value);
};

export const bgYellow = (text: string, value?: any) => {
  return c(colors(text, 'bgYellow'), value);
};

export const bgGreen = (text: string, value?: any) => {
  return c(colors(text, 'bgGreen'), value);
};

export const bgOrange = (text: string, value?: any) => {
  return c(colors(text, 'bgOrange'), value);
};

export const bgSpringGreen = (text: string, value?: any) => {
  return c(colors(text, 'bgSpringGreen'), value);
};

// gradient
export const gradientBlack = (text: string, value?: any) => {
  return c(colors(text, 'gradientBlack'), value);
};

export const gradientGreen = (text: string, value?: any) => {
  return c(colors(text, 'gradientGreen'), value);
};

// 多组背景变色
export const bgGroup = (text: string[], colors: string[], value?: any) => {
  return c(groupColors(text, colors), value);
};
