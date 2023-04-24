
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



// with template literals
const createCommandTemp = (ccssName: any, cssRule: any) => ({
  name: ccssName,
  func: (...oldargs: any): any => {
    const args = [...oldargs]
    const numArgs = args.length;
    console.log('numArgs', numArgs, args);

    if (!Array.isArray(args)) {
      const x = args[0];
      return (typeof x === 'number' || /^\d+$/.test(x)) ? `${cssRule}: ${x}px` : `${cssRule}: ${x}`;
    } else {
      const x = args.join('');
      return `${cssRule}: ${x}`;
    }
  },
});



// width media query
const createCommandMedia = (name: string, size: string) => ({
  name: name,
  func: (x: any) => `@media (min-width: ${size}px) {${x};}`,
});

export { createCommandSize, createCommandBasic, createCommandMedia, createCommandCustom, createCommandTemp }