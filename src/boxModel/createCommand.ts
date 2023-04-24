
const createCommandBasic = (name: string, cssRule: string) => ({
  name: name,
  func: () => cssRule,
});

const createCommandCustom = (name: string, func: any) => ({
  name, func
});

const createCommandSize = (ccssName: string, cssRule: string) => ({
  name: ccssName,
  func: (x: string | number) => (typeof x === 'number' || /^\d+$/.test(x)) ? `${cssRule}: ${x}px` : `${cssRule}: ${x}`,
});





// width media query
const createCommandMedia = (name: string, size: string) => ({
  name: name,
  func: (x: any) => `@media (min-width: ${size}px) {${x};}`,
});

export { createCommandSize, createCommandBasic, createCommandMedia, createCommandCustom }