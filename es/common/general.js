import { c, colors } from './color';
// 红
export const red = (text, value) => {
    return c(colors(text, 'red'), value);
};
// 蓝
export const blue = (text, value) => {
    return c(colors(text, 'blue'), value);
};
// 绿
export const green = (text, value) => {
    return c(colors(text, 'green'), value);
};
// 黄
export const yellow = (text, value) => {
    return c(colors(text, 'yellow'), value);
};
// 橘黄
export const orange = (text, value) => {
    return c(colors(text, 'orange'), value);
};
// 加粗
// 红
export const boldRed = (text, value) => {
    return c(colors(text, 'boldRed'), value);
};
// 蓝
export const boldBlue = (text, value) => {
    return c(colors(text, 'boldBlue'), value);
};
// 绿
export const boldGreen = (text, value) => {
    return c(colors(text, 'boldGreen'), value);
};
// 黄
export const boldYellow = (text, value) => {
    return c(colors(text, 'boldYellow'), value);
};
// 橘黄
export const boldOrange = (text, value) => {
    return c(colors(text, 'boldOrange'), value);
};
