import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { base } from "../utils/tools/baseHOC";
import { Contain } from "./Contain";
import { Div } from "./Div";

const Card1up = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

const Land = base(Card1up, {
  className: "min-w-[300px] h-[300px] overflow-hidden flex flex-row",
});

const Port = styled.div`
  ${tw`w-full md:w-[50%] overflow-hidden  flex flex-row`}
`;

const LandImg = styled.img`
  ${tw`h-full w-40 object-cover`}
`;
const LandContent = styled.div`
  ${tw``}
`;

type Props = {
  img: string;
  children: ReactNode;
  classIn?: string;
};

const W3_7img: FC<Props> = ({ img, children, classIn }) => (
  <div className="flex border mr-5 overflow-hidden rounded-xl min-h-[250px] bg-white shadow-trello-2">
    <Div.S size="30">
      <img src={img} alt="d" className="h-full object-cover " />
    </Div.S>
    <Div.S size="70" className={classIn}>
      {children}
    </Div.S>
  </div>
);

export const Card = {
  Land,
  Port,
  LandImg,
  LandContent,
  W3_7img,
};
