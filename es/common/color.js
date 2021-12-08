/**
 * 样式
 */
const otherStyle = 'color:#FFF;padding:3px;';
const radius = 'border-radius:3px;';
const leftRadius = 'border-radius: 3px 0 0 3px;';
const rightRadius = 'border-radius: 0 3px 3px 0;';
const bold = 'font-weight:bold;';
/**
 * 颜色集合
 */
const ColorMap = new Map([
    // general
    ['red', 'color:red'],
    ['blue', 'color:blue'],
    ['yellow', 'color:yellow'],
    ['green', 'color:green'],
    ['orange', 'color:orange'],
    // bold general
    ['boldRed', `${bold}color:red`],
    ['boldBlue', `${bold}color:blue`],
    ['boldYellow', `${bold}color:yellow`],
    ['boldGreen', `${bold}color:green`],
    ['boldOrange', `${bold}color:orange`],
    // bg
    ['bgRed', `${otherStyle}${radius}${bold}background:#FF0000;`],
    ['bgBlack', `${otherStyle}${radius}${bold}background:#000;`],
    ['bgBlue', `${otherStyle}${radius}${bold}background:#00F;`],
    ['bgOrange', `${otherStyle}${radius}${bold}background:#FF8C00;`],
    ['bgSpringGreen', `${otherStyle}${radius}${bold}background:#3CB371;`],
    ['bgYellow', `${otherStyle.replace('#FFF', '#000')}${radius}${bold}background:#FF0;`],
    ['bgGreen', `${otherStyle.replace('#FFF', '#000')}${radius}${bold}background:#0F0;`],
    // lineargradient
    ['gradientBlack', `${otherStyle}${radius}${bold}background:linear-gradient(#FFF, #000);`],
    ['gradientGreen', `${otherStyle}${radius}${bold}background:linear-gradient(#FFF, #3CB371);`]
    // border
]);
/**
 * @param text 文本
 * @param type 颜色
 * @returns
 */
const colors = (text, type) => {
    return [`%c ${text} `, ColorMap.get(type)];
};
/**
 *
 * @param text 文本
 * @param type 颜色
 * @returns
 */
const groupColors = (text, type) => {
    return [
        text.map((t) => `%c ${t} `).join(''),
        ...type.map((t, i) => {
            let r = '';
            if (i === 0) {
                r = leftRadius;
            }
            else if (i + 1 === type.length) {
                r = `${rightRadius}`;
            }
            return `${ColorMap.get(t)}${r}`;
        })
    ];
};
function c(colors, value) {
    if (value) {
        return console.log(...colors, value);
    }
    else {
        return console.log(...colors);
    }
}
export { colors, groupColors, c };
