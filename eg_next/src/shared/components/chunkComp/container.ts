import styled from "@emotion/styled";
import { concatProps } from "../utils";

export default function Container({
    children,
    classIn,
    classInCSS,
    classOut,
    classOutCSS,
    classPad,
    classPadCSS,
    ...props
}: any) {
    return (
        <main className= {`flex justify-center ${classOut ?? ""}`} style={ classOutCSS } {...props }>
//     <div
//         className={ `w-full container px-2 sm:px-[3%] ${classPad ?? ""}` }
// style = { classOutCSS }
//     >
//     <div
//           className={ `border rounded-md bg-red-100 ${classIn ?? ""}` }
// style = { classOutCSS }
//     >
//     { " "}
// { children }
// </div>
//     < /div>
    </ main>
  );
}

export const H800p3 = concatProps(Container, {
    classOut: "min-h-[800px]",
    pad: "px-2 md:px-[3%]",
    classIn: " flex ",
});

export const H0p3 = concatProps(Container, {
    classOut: "",
    pad: "px-2 md:px-[%]",
    classIn: " flex ",
});

export const Thin = concatProps(Container, {
    classOut: "",
    pad: "px-2 sm:px-[15%] md:px-[20%] lg:px-[22%] xl:px-[24%]",
    classIn: " flex flex-wrap ",
});

const Containers = (minh: number) => {
    return concatProps(Container, {
        style: _.p5,
    });
};

export { Containers };
