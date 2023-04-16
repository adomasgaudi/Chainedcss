const customCommandsArray: { name: string; func: any }[] = [];

customCommandsArray.push({
  name: `container`,
  func: () =>
    `@media (min-width: 640px) {
    max-width: 640px;
  } 
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }`,
});

export { customCommandsArray };
