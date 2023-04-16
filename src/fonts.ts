const textCommandsArray: any = [];

textCommandsArray.push({
  name: `leading`,
  func: (x: string) => `line-height: ${x}`,
});
textCommandsArray.push({
  name: `lineHeight`,
  func: (x: string) => `line-height: ${x}`,
});
textCommandsArray.push({
  name: `tracking`,
  func: (x: string) => `letter-spacing: ${x}`,
});
textCommandsArray.push({
  name: `letterSpacing`,
  func: (x: string) => `letter-spacing: ${x}`,
});

// font-weight
const fontWeights = [
  { name: 'Thin', value: 100 },
  { name: 'ExtraLight', value: 200 },
  { name: 'Light', value: 300 },
  { name: 'Normal', value: 400 },
  { name: 'Medium', value: 500 },
  { name: 'SemiBold', value: 600 },
  { name: 'Bold', value: 700 },
  { name: 'ExtraBold', value: 800 },
  { name: 'Black', value: 900 },
];
fontWeights.forEach(item => {
  textCommandsArray.push({
    name: `font${item.name}`,
    func: () => `font-weight: ${item.value}`,
  });
});
textCommandsArray.push({
  name: `font`,
  func: (x: number) => `font-weight: ${x}`,
});

// font-size
const textSizes = [
  { name: 'Xs', value: 'font-size: 0.75rem; line-height: 1rem' },
  { name: 'Sm', value: 'font-size: 0.875rem; line-height: 1.25rem' },
  { name: 'Base', value: 'font-size: 1rem; line-height: 1.5rem' },
  { name: 'Lg', value: 'font-size: 1.125rem; line-height: 1.75rem' },
  { name: 'Xl', value: 'font-size: 1.25rem; line-height: 1.75rem' },
  { name: '2xl', value: 'font-size: 1.5rem; line-height: 2rem' },
  { name: '3xl', value: 'font-size: 1.875rem; line-height: 2.25rem' },
  { name: '4xl', value: 'font-size: 2.25rem; line-height: 2.5rem' },
  { name: '5xl', value: 'font-size: 3rem; line-height: 1' },
  { name: '6xl', value: 'font-size: 3.75rem; line-height: 1' },
  { name: '7xl', value: 'font-size: 4.5rem; line-height: 1' },
  { name: '8xl', value: 'font-size: 6rem; line-height: 1' },
  { name: '9xl', value: 'font-size: 8rem; line-height: 1' },
];

textSizes.forEach(item => {
  textCommandsArray.push({
    name: `text${item.name}`,
    func: () => `${item.value}`,
  });
});

const textSizeSuffixes = [
  { suffix: 'Pc', valueSuffix: '%' },
  { suffix: 'Vw', valueSuffix: 'vw' },
  { suffix: 'Vh', valueSuffix: 'vh' },
  { suffix: 'Vmin', valueSuffix: 'vmin' },
  { suffix: 'Vmax', valueSuffix: 'vmax' },
  { suffix: 'Px', valueSuffix: 'px' },
  { suffix: 'Rem', valueSuffix: 'rem' },
  { suffix: 'Em', valueSuffix: 'em' },
];

textSizeSuffixes.forEach(suffix => {
  textCommandsArray.push({
    name: `text${suffix}`,
    func: (x: string) => `font-size: ${x}${suffix}`,
  });
});
textCommandsArray.push({
  name: `text`,
  func: (x: string) => {
    if (typeof x === 'number') {
      return `font-size: ${x}px`;
    }
    return `color: ${x}`;
  },
});

const alignTerms = ['Left', 'Center', 'Right'];
alignTerms.forEach(item => {
  textCommandsArray.push({
    name: `text${item}`,
    func: () => `text-align: ${item.toLowerCase()}`,
  });
});

export { textCommandsArray };
