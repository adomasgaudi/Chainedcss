const sizesCommandsArray: any = [];

sizesCommandsArray.push({
  name: `sm`,
  func: (x: any) => {
    return `@media (min-width: 640px) {${x};}`;
  },
});
sizesCommandsArray.push({
  name: `md`,
  func: (x: string) => `@media (min-width: 768px) {
    ${x};
  }`,
});
sizesCommandsArray.push({
  name: `lg`,
  func: (x: string) => `@media (min-width: 1024px) {
    ${x};
  }`,
});
sizesCommandsArray.push({
  name: "xl",
  func: (x: string) => `@media (min-width: 1280px) {
    ${x};
  }`,
});

sizesCommandsArray.push({
  name: `wFull`,
  func: () => `width: 100%`,
});
sizesCommandsArray.push({
  name: `hFull`,
  func: () => `height: 100%`,
});
sizesCommandsArray.push({
  name: `w`,
  func: (x: string) => {
    return `width: ${x}px`;
  },
});
sizesCommandsArray.push({
  name: `h`,
  func: (x: string) => {
    return `height: ${x}px`;
  },
});
sizesCommandsArray.push({
  name: `minH`,
  func: (x: string) => `min-height: ${x}px`,
});
sizesCommandsArray.push({
  name: `minW`,
  func: (x: string) => `min-width: ${x}px`,
});
sizesCommandsArray.push({
  name: `overflowHidden`,
  func: () => `overflow: hidden`,
});
sizesCommandsArray.push({
  name: `wPc`,
  func: (x: number) => `width: ${x}%`,
});

const sizes: any = [
  { name: "Full", effect: "100%" },
  { name: "Half", effect: "50%" },
  { name: "Third", effect: "33.333333%" },
  { name: "Quarter", effect: "25%" },
  { name: "Fifth", effect: "20%" },
];

sizes.forEach(({ name, effect }: any) => {
  sizesCommandsArray.push({
    name: `w${name}`,
    func: () => `width: ${effect}`,
  });
});

export { sizesCommandsArray };
