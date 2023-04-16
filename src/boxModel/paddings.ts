import { zeroTo100 } from "./arrays";

const padCommandsArray: { name: string; func: any }[] = [];

const padPrefixes = [
  { name: "p", cssKey: (value: any) => `padding: ${value}` },
  { name: "pl", cssKey: (value: any) => `padding-left: ${value}` },
  { name: "pr", cssKey: (value: any) => `padding-right: ${value}` },
  { name: "pt", cssKey: (value: any) => `padding-top: ${value}` },
  { name: "pb", cssKey: (value: any) => `padding-bottom: ${value}` },
  {
    name: "py",
    cssKey: (value: any) => `padding-top: ${value}; padding-bottom: ${value}`,
  },
  {
    name: "px",
    cssKey: (value: any) => `padding-left: ${value}; padding-right: ${value}`,
  },
];

// p`2rem` pl`34px`
padPrefixes.forEach(({ name, cssKey }) => {
  padCommandsArray.push({
    name: `${name}`,
    func: (pass: string | number) => {
      if (typeof pass === "number") {
        return cssKey(`${pass * 4}px`);
      }
      return `${cssKey(pass)}`;
    },
  });
});

// p10() pl12() pr3() ect...
padPrefixes.forEach(({ name, cssKey }) => {
  zeroTo100.forEach((numberKey) => {
    padCommandsArray.push({
      name: `${name}${numberKey}`,
      func: () => {
        return `${cssKey(`${numberKey * 4}px`)}`;
      },
    });
  });
});

// pPx(4) plRem(2) prPc(10) ect...
const padModifier = [
  { suffix: "Pc", symbol: "%", hasNegative: false },
  { suffix: "Rem", symbol: "rem", hasNegative: false },
  { suffix: "Px", symbol: "px", hasNegative: false },
];

padPrefixes.forEach(({ name, cssKey }) => {
  padModifier.forEach(({ suffix, symbol }) => {
    const cssValue = (pass: number) => `${pass}${symbol}`;

    padCommandsArray.push({
      name: `${name}${suffix}`,
      func: (pass: number) => `${cssKey(cssValue(pass))}`,
    });
  });
});

// pThird() plQuarter() prFifth() ect...
const padSuffixSimple = [
  { name: "None", effect: "0", suffixHasNegative: false },
  { name: "Third", effect: "33.333333%", suffixHasNegative: false },
  { name: "Quarter", effect: "25%", suffixHasNegative: false },
  { name: "Fifth", effect: "20%", suffixHasNegative: false },
];
padPrefixes.forEach(({ name, cssKey }) => {
  padSuffixSimple.forEach((suffix) => {
    const cssValue = `${suffix.effect}`;

    padCommandsArray.push({
      name: `${name}${suffix.name}`,
      func: () => `${cssKey(cssValue)}`,
    });
  });
});

export { padCommandsArray };
