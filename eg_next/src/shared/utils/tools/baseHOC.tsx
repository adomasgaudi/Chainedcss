import React from "react";

export const base = (DefComp: any, propsBASE: any) => {
  const MyComponent = ({ ...propsNEW }) => {
    const propsCOMBO: any = {};

    // check base keys
    Object.keys(propsBASE).map((key: any) => {
      propsCOMBO[key] = propsBASE[key];
      if (propsNEW[key]) {
        propsCOMBO[key] = `${propsBASE[key]} ${propsNEW[key]}`;
      }
      return null;
    });

    // check new keys
    Object.keys(propsNEW).map((key: any) => {
      if (!propsBASE[key]) {
        propsCOMBO[key] = propsNEW[key];
      }

      return null;
    });

    return <DefComp {...propsCOMBO} />;
  };

  return MyComponent;
};
