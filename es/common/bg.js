import { colors, groupColors } from './color';
// bg
export const bgBlack = (text) => {
    return console.log(...colors(text, 'bgBlack'));
};
export const bgRed = (text) => {
    return console.log(...colors(text, 'bgRed'));
};
export const bgBlue = (text) => {
    return console.log(...colors(text, 'bgBlue'));
};
export const bgYellow = (text) => {
    return console.log(...colors(text, 'bgYellow'));
};
export const bgGreen = (text) => {
    return console.log(...colors(text, 'bgGreen'));
};
export const bgOrange = (text) => {
    return console.log(...colors(text, 'bgOrange'));
};
export const bgSpringGreen = (text) => {
    return console.log(...colors(text, 'bgSpringGreen'));
};
// gradient
export const gradientBlack = (text) => {
    return console.log(...colors(text, 'gradientBlack'));
};
export const gradientGreen = (text) => {
    return console.log(...colors(text, 'gradientGreen'));
};
export const bgGroupBlack = (text) => {
    return console.log(...groupColors(text, ['bgBlack', 'bgSpringGreen']));
};
export const bgGroupGradientBlack = (text) => {
    return console.log(...groupColors(text, ['gradientBlack', 'gradientGreen']));
};
