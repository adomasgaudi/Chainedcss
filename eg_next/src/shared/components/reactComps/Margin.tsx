import React, { FC, ReactNode } from "react";
import tw from "twin.macro";

type Props = {
  children: ReactNode;
};

const NegMargin: FC<Props> = ({ children }) => (
  <div>
    <div tw="-my-10">{children}</div>
  </div>
);

export default NegMargin;
