/** @jsxImportSource @emotion/react */
import { concatStyleMulti } from "./compBuilder";
import { _, __ } from "chainedcss";

export default function OContainerBase({
    children,
    classIn,
    classOut,
    classPad,
    ...props
}: any) {
    return (
        <main {..._.flex().justifyCenter().style(classOut?.o.s)} {...props}>
            <div
                {..._.wFull()
                    .container()
                    .px2()
                    .md(__.pxPc(3).oss)
                    .style(classPad?.o.s)}
            >
                <div {..._.style(classIn?.o.s)}>{children}</div>
            </div>
        </main>
    );
}

export const OContainerTall = concatStyleMulti(OContainerBase, {
    classOut: _.minH(800),
});
export const OContainerThin = concatStyleMulti(OContainerBase, {
    classPad: _.pxPc(22),
});

export const OContainerTallP3 = concatStyleMulti(OContainerTall, {
    classPad: _.px3(),
});
export const OContainerTallThin = concatStyleMulti(OContainerTall, {
    classPad: _.pxPc(20),
});

const OContainer = {
    base: OContainerBase,
    tall: OContainerTall,
    tallP3: OContainerTallP3,
    tallThin: OContainerTallThin,
    thin: OContainerThin,
};

export { OContainer };
