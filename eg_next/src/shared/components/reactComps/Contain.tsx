import React, { ReactNode } from "react";
import { base } from "../utils/tools/baseHOC";

interface propT {
  children: ReactNode;
  classIn?: string;
  classOut?: string;
  pad?: string;
}
export const Contain = ({
  children,
  classIn,
  classOut,
  pad,
  ...props
}: any) => {
  return (
    <main {...props} className={`flex justify-center ${classOut ?? ""}`}>
      <div className="container xl:w-[1124px]">
        <div className={` ${pad ?? ""}`}>
          <div className={` ${classIn ?? ""}`}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export const H800p3 = base(Contain, {
  classOut: "min-h-[800px]",
  pad: "px-2 md:px-[3%]",
  classIn: " flex ",
});

export const H0p3 = base(Contain, {
  classOut: "",
  pad: "px-2 md:px-[%]",
  classIn: " flex ",
});

export const Brilliant = base(Contain, {
  classOut: "",
  pad: "px-2 sm:px-[15%] md:px-[20%] lg:px-[22%] xl:px-[24%]",
  classIn: " flex flex-wrap ",
});

export const ContainX = {
  H800p3,
  H0p3,
  Brilliant,
};


