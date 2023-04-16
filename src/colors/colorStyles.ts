import { colorsWindi } from "./colors";

const colorCommandsArray: { name: string; func: any }[] = [];

colorsWindi.forEach((item) => {
  item.variants.forEach((variant) => {
    colorCommandsArray.push({
      name: `border${item.name}${variant.name}`,
      func: () => `border-style: solid; border-color: ${variant.value}`,
    });
  });
});
colorsWindi.forEach((item) => {
  item.variants.forEach((variant) => {
    colorCommandsArray.push({
      name: `bg${item.name}${variant.name}`,
      func: () => `background-color: ${variant.value}`,
    });
  });
});
colorsWindi.forEach((item) => {
  item.variants.forEach((variant) => {
    colorCommandsArray.push({
      name: `text${item.name}${variant.name}`,
      func: () => `color: ${variant.value}`,
    });
  });
});

colorCommandsArray.push({
  name: `bgColor`,
  func: (x: string) => {
    return `background-color: ${x}`;
  },
});
colorCommandsArray.push({
  name: `bg`,
  func: (x: string) => {
    return `background-color: ${x}`;
  },
});
colorCommandsArray.push({
  name: `borderColor`,
  func: (x: string) => `border: 1px solid ${x}`,
});

export { colorCommandsArray };
