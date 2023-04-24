/** @jsxImportSource @emotion/react */
import { _ } from "chainedcss";

const OButtonBase = ({ children, ver }: any) => {
    const btn = () =>
        _.style`cursor: pointer`
            .px5()
            .py1()
            .rounded(5)
            .borderTeal800()
            .style(ver);

    return <button {...btn()}>{children}</button>;
};

const OButtonWide = ({ children, ver }: any) => {
    return <OButtonBase {..._.w("100").style(ver)}>{children}</OButtonBase>;
};

const OButton = {
    base: OButtonBase,
    wide: OButtonWide,
};

export { OButton };

export { OButtonBase };
