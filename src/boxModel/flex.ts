import { createCommandBasic } from "./createCommand";

const flexCommandsArray: any = [];


flexCommandsArray.push(
  createCommandBasic('flex', 'display: flex'),
  createCommandBasic('flexRow', 'flex-direction: row'),
  createCommandBasic('justifyCenter', 'justify-content: center'),
  createCommandBasic('justifyBetween', 'justify-content: space-between'),
  createCommandBasic('justifyAround', 'justify-content: space-around'),
)

export { flexCommandsArray };
