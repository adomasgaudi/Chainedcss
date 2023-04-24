import React from "react";
import { _, __ } from "chainedcss";
import { concatStyleMulti } from "./compBuilder";
// import styled from "styled-components";

export const ODiv = ({ ...props }: any) => {
    const { o, children } = props;
    console.log(props, "props");

    return <div {..._.style(o.s)}>{children}</div>;
};

export const ODivWidth = concatStyleMulti(ODiv, {
    o: _.wFull().md(__.wHalf().__),
});

const FiftyFiftyRight = ({ children, ...props }: any) => {
    return <div {...props}>{children}</div>;
};
const FiftyFiftyLeft = ({ children, ...props }: any) => {
    return <div {...props}> {children}</div>;
};

export const Div = {
    wPart: (x: number) => _.wPc(x),
};

// const NegMargin: FC<Props> = ({ children }) => (
//   <div>
//     <div tw="-my-10">{children}</div>
//   </div>
// );
// const S = styled.div<any>(({ size }) => [
//   `
//   width: 100%;
//   @media (min-width: 768px) {
//     width: ${size}%;
//   }
//   `,
// ]);

// export const Div = {
//   S50: {
//     R,
//     L,
//   },
//   S,
// };
