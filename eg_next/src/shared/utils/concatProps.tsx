function concatObjectStrings(obj1: any, obj2: any) {
  const valueConcat = (key: string) => `${obj1[key]} ${obj2[key]}`;
  const valueEitherOrBoth = (key: string) =>
    obj1[key] && obj2[key] ? valueConcat(key) : obj1[key] || obj2[key];

  return Object.keys({ ...obj1, ...obj2 }).map((key: string) => ({
    [key]: valueEitherOrBoth(key),
  }));
}

export const concatProps = (DefComp: any, propsBASE: any) => {
  const MyComponent = (propsNEW: any) => {
    let mix = {};
    concatObjectStrings(propsBASE, propsNEW).forEach((obj: any) => {
      mix = { ...mix, ...obj };
    });
    return <DefComp {...mix} />;
  };

  return MyComponent;
};
