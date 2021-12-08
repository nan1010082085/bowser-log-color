type Colors = (text: string) => void;
type GroupColors = (text: string[]) => void;

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
  bgRed: Colors;
  bgBlue: Colors;
  bgGreen: Colors;
  bgYellow: Colors;
  bgOrange: Colors;
  bgSpringGreen: Colors;
  gradientGreen: Colors;
  bgBlack: Colors;
  gradientBlack: Colors;
  bgGroupBlack: GroupColors;
  bgGroupGradientBlack: GroupColors;
}
