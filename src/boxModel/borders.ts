const borderCommandsArray: any = [];

// const borderNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const borderSuffixSimple = [{ sufix: "None", effect: "0", hasNegative: false }];

// const borderSuffixComplex = [
//   { sufix: "Px", effectSuffix: "px", hasNegative: true },
// ];

const borderPrefixes = [
  {
    name: "border",
    cssKey: (value: any) =>
      `border-style: solid; border-width: ${value}`,
  },
  {
    name: "borderL",
    cssKey: (value: any) =>
      `border-left-style: solid; border-left-width: ${value}`,
  },
  {
    name: "borderR",
    cssKey: (value: any) =>
      `border-right-style: solid; border-right-width: ${value}`,
  },
  {
    name: "borderT",
    cssKey: (value: any) =>
      `border-top-style: solid; border-top-width: ${value}`,
  },
  {
    name: "borderB",
    cssKey: (value: any) =>
      `border-bottom-style: solid; border-bottom-width: ${value}`,
  },
  {
    name: "borderY",
    cssKey: (value: any) =>
      `border-top-style: solid; border-top-width: ${value};  border-bottom-style: solid; border-bottom-width: ${value}`,
  },
  {
    name: "borderX",
    cssKey: (value: any) =>
      `border-left-style: solid; border-left-width: ${value};  border-right-style: solid; border-right-width: ${value}`,
  },
];

// m`2rem` ml`34px`
borderPrefixes.forEach(({ name, cssKey }) => {
  borderCommandsArray.push({
    name: `${name}`,
    func: (pass: string | number) => {
      if (typeof pass === "number") {
        return cssKey(`${pass}px`);
      }
      return `${cssKey(pass)}`;
    },
  });
});

borderCommandsArray.push({
  name: `borderWidth`,
  func: (x: string) => `border-style: solid; border-width: ${x}px`,
});

borderCommandsArray.push({
  name: `rounded`,
  func: (x: string) => `border-radius: ${x}px`,
});

const roundedValues = [
  { name: "Sm", value: "0.125rem" },
  { name: "Base", value: "0.25rem" },
  { name: "Md", value: "0.375rem" },
  { name: "Lg", value: "0.5rem" },
  { name: "Xl", value: "0.75rem" },
  { name: "2Xl", value: "1rem" },
  { name: "3Xl", value: "1.5rem" },
  { name: "Full", value: "100%" },
  { name: "None", value: "0" },
];

roundedValues.forEach((value) => {
  borderCommandsArray.push({
    name: `rounded${value.name}`,
    func: () => `border-radius: ${value.value}`,
  });
});

export { borderCommandsArray };
