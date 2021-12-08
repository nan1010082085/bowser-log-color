import { LogColors } from '../typings';
import {
  bgRed,
  bgBlue,
  bgGreen,
  bgYellow,
  bgOrange,
  bgSpringGreen,
  gradientGreen,
  bgBlack,
  gradientBlack,
  bgGroup
} from './common/bg';
import {
  red,
  yellow,
  blue,
  green,
  orange,
  boldRed,
  boldBlue,
  boldGreen,
  boldOrange,
  boldYellow
} from './common/general';

// console.log('LogColor');
// console.log('============= general ==========');
// red('test red');
// yellow('test red');
// blue('test red');
// green('test red');
// orange('test red');
// console.log('============= bold general ==========');
// boldRed('test red');
// boldBlue('test red');
// boldGreen('test red');
// boldOrange('test red');
// boldYellow('test red');
// console.log('============= bg bold general ==========');
// bgBlack('test bg red', 121);
// bgRed('test bg red');
// bgBlue('test bg red');
// bgGreen('test bg red');
// bgYellow('test bg red');
// bgOrange('test bg red');
// bgSpringGreen('test bg red');
// console.log('============= bg bold general ==========');
// gradientBlack('test bg red');
// gradientGreen('test bg red');
// console.log('============= bg group black ==============');
// bgGroup(['test bg group 1', 'test bg group 2'], ['bgRed', 'bgBlue'], '121231');

const BrowserLogColor: LogColors = {
  red,
  yellow,
  blue,
  green,
  orange,
  boldRed,
  boldBlue,
  boldGreen,
  boldOrange,
  boldYellow,
  bgRed,
  bgBlue,
  bgGreen,
  bgYellow,
  bgOrange,
  bgSpringGreen,
  gradientGreen,
  bgBlack,
  gradientBlack,
  bgGroup
};

export default BrowserLogColor;
