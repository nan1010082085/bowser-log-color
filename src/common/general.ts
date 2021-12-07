import { colors } from './color';

// 红
export const red = (text: string) => {
  return console.log(...colors(text, 'red'));
};

// 蓝
export const blue = (text: string) => {
  return console.log(...colors(text, 'blue'));
};

// 绿
export const green = (text: string) => {
  return console.log(...colors(text, 'green'));
};

// 黄
export const yellow = (text: string) => {
  return console.log(...colors(text, 'yellow'));
};

// 橘黄
export const orange = (text: string) => {
  return console.log(...colors(text, 'orange'));
};

// 加粗
// 红
export const boldRed = (text: string) => {
  return console.log(...colors(text, 'boldRed'));
};

// 蓝
export const boldBlue = (text: string) => {
  return console.log(...colors(text, 'boldBlue'));
};

// 绿
export const boldGreen = (text: string) => {
  return console.log(...colors(text, 'boldGreen'));
};

// 黄
export const boldYellow = (text: string) => {
  return console.log(...colors(text, 'boldYellow'));
};

// 橘黄
export const boldOrange = (text: string) => {
  return console.log(...colors(text, 'boldOrange'));
};
