/**
 * @param text 文本
 * @param type 颜色
 * @returns
 */
declare const colors: (text: string, type: string) => any[];
/**
 *
 * @param text 文本
 * @param type 颜色
 * @returns
 */
declare const groupColors: (text: string[], type: string[]) => string[];
declare function c(colors: any[], value: string): void;
export { colors, groupColors, c };
