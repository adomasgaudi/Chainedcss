const recollectTagFunction = (inputArray: any[]) => {
  const strings = inputArray[0];
  const args = inputArray.slice(1);
  let result = '';

  strings.forEach((string: any, i: any) => {
    result += string;
    if (args[i] !== undefined) {
      result += args[i];
    }
  });

  return result;
};



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
  func: function (oldargs: any) {
    const argsArray = Array.from(arguments);
    const isNumerical = (x: any) => (typeof x === 'number' || /^\d+$/.test(x))
    const addPixelsIfNumber = (x: any) => isNumerical(x) ? `${x}px` : `x`

    if (!Array.isArray(oldargs)) {
      return `${cssRule}: ${addPixelsIfNumber(oldargs)} `;
    }
    else {
      const recollectedString = recollectTagFunction([argsArray[0], ...argsArray.slice(1)])
      return `${cssRule}: ${recollectedString}`;
    }

  },
});



// width media query
const createCommandMedia = (name: string, size: string) => ({
  name: name,
  func: (x: any) => `@media (min-width: ${size}px) {${x};}`,
});

export { createCommandSize, createCommandBasic, createCommandMedia, createCommandCustom, createCommandTemp }