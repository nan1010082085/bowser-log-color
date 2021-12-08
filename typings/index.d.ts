type Colors = (text: string) => void;

type BgColors = (text: string, value?: any) => void;
/**
 * @param text 背景文案
 * @param colors 背景色
 * @param value 普通文案
 */
type GroupColors = (text: string[], colors: string[], value?: any) => void;

export interface LogColors {
  red: Colors;
  yellow: Colors;
  blue: Colors;
  green: Colors;
  orange: Colors;
  boldRed: Colors;
  boldBlue: Colors;
  boldGreen: Colors;
  boldOrange: Colors;
  boldYellow: Colors;
  bgRed: BgColors;
  bgBlue: BgColors;
  bgGreen: BgColors;
  bgYellow: BgColors;
  bgOrange: BgColors;
  bgSpringGreen: BgColors;
  gradientGreen: BgColors;
  bgBlack: BgColors;
  gradientBlack: BgColors;
  bgGroup: GroupColors;
}
