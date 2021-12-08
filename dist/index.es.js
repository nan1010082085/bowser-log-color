const otherStyle = "color:#FFF;padding:3px;border: 1px solid #FFF;";
const radius = "border-radius:5px;";
const leftRadius = "border-radius: 5px 0 0 5px;";
const rightRadius = "border-radius: 0 5px 5px 0;";
const bold = "font-weight:bold;";
const ColorMap = new Map([
  ["red", "color:red"],
  ["blue", "color:blue"],
  ["yellow", "color:yellow"],
  ["green", "color:green"],
  ["orange", "color:orange"],
  ["boldRed", `${bold}color:red`],
  ["boldBlue", `${bold}color:blue`],
  ["boldYellow", `${bold}color:yellow`],
  ["boldGreen", `${bold}color:green`],
  ["boldOrange", `${bold}color:orange`],
  ["bgBlack", `${otherStyle}${radius}${bold}background:#000;`],
  ["bgGreen", `${otherStyle.replace("#FFF", "#000")}${radius}${bold}background:#0F0;`],
  ["bgBlue", `${otherStyle}${radius}${bold}background:#00F;`],
  ["bgYellow", `${otherStyle.replace("#FFF", "#000")}${radius}${bold}background:#FF0;`],
  ["bgRed", `${otherStyle}${radius}${bold}background:#FF0000;`],
  ["bgOrange", `${otherStyle}${radius}${bold}background:#FF8C00;`],
  ["bgSpringGreen", `${otherStyle}${radius}${bold}background:#3CB371;`],
  ["gradientBlack", `${otherStyle}${radius}${bold}background:linear-gradient(#FFF, #000);`],
  ["gradientGreen", `${otherStyle}${radius}${bold}background:linear-gradient(#FFF, #3CB371);`]
]);
const colors = (text, type) => {
  return [`%c ${text} `, ColorMap.get(type)];
};
const groupColors = (text, type) => {
  return [
    text.map((t) => `%c ${t} `).join(""),
    ...type.map((t, i) => {
      let r = "";
      if (i === 0) {
        r = leftRadius;
      } else if (i - 1 === type.length) {
        r = rightRadius;
      }
      return `${ColorMap.get(t)}${r}`;
    })
  ];
};
const bgBlack = (text) => {
  return console.log(...colors(text, "bgBlack"));
};
const bgRed = (text) => {
  return console.log(...colors(text, "bgRed"));
};
const bgBlue = (text) => {
  return console.log(...colors(text, "bgBlue"));
};
const bgYellow = (text) => {
  return console.log(...colors(text, "bgYellow"));
};
const bgGreen = (text) => {
  return console.log(...colors(text, "bgGreen"));
};
const bgOrange = (text) => {
  return console.log(...colors(text, "bgOrange"));
};
const bgSpringGreen = (text) => {
  return console.log(...colors(text, "bgSpringGreen"));
};
const gradientBlack = (text) => {
  return console.log(...colors(text, "gradientBlack"));
};
const gradientGreen = (text) => {
  return console.log(...colors(text, "gradientGreen"));
};
const bgGroupBlack = (text) => {
  return console.log(...groupColors(text, ["bgBlack", "bgSpringGreen"]));
};
const bgGroupGradientBlack = (text) => {
  return console.log(...groupColors(text, ["gradientBlack", "gradientGreen"]));
};
const red = (text) => {
  return console.log(...colors(text, "red"));
};
const blue = (text) => {
  return console.log(...colors(text, "blue"));
};
const green = (text) => {
  return console.log(...colors(text, "green"));
};
const yellow = (text) => {
  return console.log(...colors(text, "yellow"));
};
const orange = (text) => {
  return console.log(...colors(text, "orange"));
};
const boldRed = (text) => {
  return console.log(...colors(text, "boldRed"));
};
const boldBlue = (text) => {
  return console.log(...colors(text, "boldBlue"));
};
const boldGreen = (text) => {
  return console.log(...colors(text, "boldGreen"));
};
const boldYellow = (text) => {
  return console.log(...colors(text, "boldYellow"));
};
const boldOrange = (text) => {
  return console.log(...colors(text, "boldOrange"));
};
export { bgBlack, bgBlue, bgGreen, bgGroupBlack, bgGroupGradientBlack, bgOrange, bgRed, bgSpringGreen, bgYellow, blue, boldBlue, boldGreen, boldOrange, boldRed, boldYellow, gradientBlack, gradientGreen, green, orange, red, yellow };
