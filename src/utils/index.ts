const removeDuplicates = (string: any) => {
  return string
    ?.split(";")
    .filter((item: any, index: any, inputArray: any) => {
      return inputArray.indexOf(item) == index;
    })
    .join(";");
};

export { removeDuplicates };
