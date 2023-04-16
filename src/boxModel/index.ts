import { borderCommandsArray } from "./borders";
import { flexCommandsArray } from "./flex";
import { marCommandsArray } from "./margins";
import { otherCommandsArray } from "./other";
import { padCommandsArray } from "./paddings";
import { sizesCommandsArray } from "./sizes";

const boxModelCommandsArray: any = [];

boxModelCommandsArray.push(
  ...padCommandsArray,
  ...marCommandsArray,
  ...borderCommandsArray,
  ...flexCommandsArray,
  ...sizesCommandsArray,
  ...otherCommandsArray
);

export { boxModelCommandsArray };
