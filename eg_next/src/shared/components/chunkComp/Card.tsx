import { _, __ } from "chainedcss";
import { concatStyleMulti } from "./compBuilder";
import { Div } from "./Div";

export const OCardBase = ({ ...props }: any) => {
    const { o, children } = props;
    console.log(props, "props");

    return <div {..._.style(o.s)}>{children}</div>;
};

export const OCardLand = concatStyleMulti(OCardBase, {
    o: _.minW(300).h(400).text`#005099`.overflowHidden().flex().flexRow(),
});
export const OCardPortrait = concatStyleMulti(OCardBase, {
    o: _.wFull().md(__.wHalf().oss).overflowHidden().flex().flexRow(),
});
export const OCardLandImg = concatStyleMulti(OCardBase, {
    o: _.wFull().md(__.wHalf().oss).overflowHidden().flex().flexRow(),
});

const W3_7img = ({ img, children, classIn }: any) => (
    <div
        {..._.flex()
            .mt3()
            .border(1)
            .mr5()
            .overflowHidden()
            .roundedXl()
            .minH(250)
            .bgWhite50()}
    >
        <div {...Div.wPart(30).overflowHidden()}>
            <img
                src={img}
                alt="d"
                {..._.hFull().objectCover()}
                className="h-full object-cover "
            />
        </div>
        <div {...Div.wPart(70)} className={classIn}>
            {children}
        </div>
    </div>
);

export const OCard = {
    base: OCardBase,
    land: OCardLand,
    portrait: OCardPortrait,
    w3_7img: W3_7img,
};
