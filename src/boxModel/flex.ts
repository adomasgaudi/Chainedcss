const flexCommandsArray: any = [];
flexCommandsArray.push({
  name: `flex`,
  func: () => `display: flex`,
});
flexCommandsArray.push({
  name: `flexRow`,
  func: () => `flex-direction: row`,
});
flexCommandsArray.push({
  name: `justifyCenter`,
  func: () => `justify-content: center`,
});
export { flexCommandsArray };
