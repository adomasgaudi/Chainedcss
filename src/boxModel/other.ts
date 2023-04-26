import { createCommandBasic, createCommandCustom, createCommandSize } from "./createCommand";

const otherCommandsArray: any = [];


otherCommandsArray.push(
  createCommandBasic('objectCover', 'object-fit: cover'),
  createCommandBasic('relative', 'position: relative'),
  createCommandBasic('absolute', 'position: absolute'),
  createCommandBasic('inline', 'display: inline'),
  createCommandBasic('inlineBlock', 'display: inline-block'),
  createCommandBasic('block', 'display: block'),

  createCommandSize('top', 'top'),
  createCommandSize('bottom', 'bottom'),
  createCommandSize('left', 'left'),
  createCommandSize('right', 'right'),

  createCommandCustom('zIndex', (x: any) => `z-index: ${x}`),
);

otherCommandsArray.push(
  createCommandCustom('transition', (x: any) => `transition: ${x}`),
)
export { otherCommandsArray };
