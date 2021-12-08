import { colors, groupColors } from './color';
// bg
export const bgBlack = (text, value) => {
    return console.log(...colors(text, 'bgBlack'), value);
};
export const bgRed = (text, value) => {
    return console.log(...colors(text, 'bgRed'), value);
};
export const bgBlue = (text, value) => {
    return console.log(...colors(text, 'bgBlue'), value);
};
export const bgYellow = (text, value) => {
    return console.log(...colors(text, 'bgYellow'), value);
};
export const bgGreen = (text, value) => {
    return console.log(...colors(text, 'bgGreen'), value);
};
export const bgOrange = (text, value) => {
    return console.log(...colors(text, 'bgOrange'), value);
};
export const bgSpringGreen = (text, value) => {
    return console.log(...colors(text, 'bgSpringGreen'), value);
};
// gradient
export const gradientBlack = (text, value) => {
    return console.log(...colors(text, 'gradientBlack'), value);
};
export const gradientGreen = (text, value) => {
    return console.log(...colors(text, 'gradientGreen'), value);
};
// 多组背景变色
export const bgGroup = (text, colors, value) => {
    return console.log(...groupColors(text, colors), value);
};
