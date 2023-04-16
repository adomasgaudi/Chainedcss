import { zeroTo100 } from "./arrays";

const marCommandsArray: { name: string; func: any }[] = [];

const marPrefixes = [
  { name: "m", cssKey: (value: any) => `margin: ${value}` },
  { name: "ml", cssKey: (value: any) => `margin-left: ${value}` },
  { name: "mr", cssKey: (value: any) => `margin-right: ${value}` },
  { name: "mt", cssKey: (value: any) => `margin-top: ${value}` },
  { name: "mb", cssKey: (value: any) => `margin-bottom: ${value}` },
  {
    name: "my",
    cssKey: (value: any) => `margin-top: ${value}; margin-bottom: ${value}`,
  },
  {
    name: "mx",
    cssKey: (value: any) => `margin-left: ${value}; margin-right: ${value}`,
  },
];

// m`2rem` ml`34px`
marPrefixes.forEach(({ name, cssKey }) => {
  marCommandsArray.push({
    name: `${name}`,
    func: (pass: string | number) => {
      if (typeof pass === "number") {
        return cssKey(`${pass * 4}px`);
      }
      return `${cssKey(pass)}`;
    },
  });
});

// _m`2rem` _ml`34px`
marPrefixes.forEach(({ name, cssKey }) => {
  marCommandsArray.push({
    name: `_${name}`,
    func: (pass: string | number) => {
      if (typeof pass === "number") {
        return cssKey(`${pass * -4}px`);
      }
      return `${cssKey(`-${pass}`)}`;
    },
  });
});

// m10() ml12() mr3() ect...
marPrefixes.forEach(({ name, cssKey }) => {
  zeroTo100.forEach((numberKey) => {
    marCommandsArray.push({
      name: `${name}${numberKey}`,
      func: () => {
        return `${cssKey(`${numberKey * 4}px`)}`;
      },
    });
  });
});

// mNone() mlThird() mrQuarter() ect...
const marSuffixSimple = [
  { suffix: "None", effect: "0", hasNegatigve: false },
  { suffix: "Auto", effect: "auto", hasNegatigve: false },
  { suffix: "Full", effect: "100%", hasNegatigve: false },
  { suffix: "Third", effect: "33.333333%", hasNegatigve: true },
  { suffix: "Quarter", effect: "25%", hasNegatigve: true },
  { suffix: "Fifth", effect: "20%", hasNegatigve: true },
];

marPrefixes.forEach(({ name, cssKey }) => {
  marSuffixSimple.forEach(({ suffix, effect }) => {
    const cssValue = `${effect}`;

    marCommandsArray.push({
      name: `${name}${suffix}`,
      func: () => `${cssKey(cssValue)}`,
    });
  });
});

// mPx(4) mlRem(2) mrPc(10) ect...
const marModifier = [
  { suffix: "Pc", symbol: "%", hasNegative: true },
  { suffix: "Rem", symbol: "rem", hasNegative: true },
  { suffix: "Px", symbol: "px", hasNegative: true },
];

marPrefixes.forEach(({ name, cssKey }) => {
  marModifier.forEach(({ suffix, symbol }) => {
    const cssValue = (pass: number) => `${pass}${symbol}`;

    marCommandsArray.push({
      name: `${name}${suffix}`,
      func: (pass: number) => `${cssKey(cssValue(pass))}`,
    });
  });
});

export { marCommandsArray };
