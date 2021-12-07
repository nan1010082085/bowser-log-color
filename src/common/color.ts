/**
 * 样式
 */
const otherStyle = 'color:#FFF;padding:3px;border: 1px solid #FFF;';
const radius = 'border-radius:5px;';
const leftRadius = 'border-radius: 5px 0 0 5px;';
const rightRadius = 'border-radius: 0 5px 5px 0;';
const bold = 'font-weight:bold;';

/**
 * 颜色集合
 * @red
 */
const ColorMap: Map<string, any> = new Map([
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
  ['bgBlack', `${otherStyle}${radius}${bold}background:#000;`],
  ['bgGreen', `${otherStyle.replace('#FFF', '#000')}${radius}${bold}background:#0F0;`],
  ['bgBlue', `${otherStyle}${radius}${bold}background:#00F;`],
  ['bgYellow', `${otherStyle.replace('#FFF', '#000')}${radius}${bold}background:#FF0;`],
  ['bgRed', `${otherStyle}${radius}${bold}background:#FF0000;`],
  ['bgOrange', `${otherStyle}${radius}${bold}background:#FF8C00;`],
  ['bgSpringGreen', `${otherStyle}${radius}${bold}background:#3CB371;`],
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
const colors = (text: string, type: string) => {
  return [`%c ${text} `, ColorMap.get(type)];
};

/**
 *
 * @param text 文本
 * @param type 颜色
 * @returns
 */
const groupColors = (text: string[], type: string[]) => {
  return [
    `%c ${text[0]} %c ${text[1]} `,
    `${ColorMap.get(type[0])}${leftRadius}`,
    `${ColorMap.get(type[1])}${rightRadius}`
  ];
};

export { colors, groupColors };
