/** @jsxImportSource @emotion/react */
import { __ } from "chainedcss";

const concatChainStylesFunc = (
    obj1: any,
    obj2: any,
    bothFunc: any,
    separateFunc: any,
) => {
    const valueEitherOrBoth = (obj1: any, obj2: any, key: string) => {
        const doBothHaveKeys = obj1[key] && obj2[key];
        return doBothHaveKeys
            ? bothFunc(obj1, obj2, key)
            : separateFunc(obj1, obj2, key);
    };

    const allPropsArr = Object.keys({ ...obj1, ...obj2 });

    return allPropsArr.map((key: string) => ({
        [key]: valueEitherOrBoth(obj1, obj2, key),
    }));
};

const concatFunc = (func: any, func2: any) => {
    return (DefaultComp: any, defaultProps: any) => {
        return (newProps: any) => {
            let mix = {};
            concatChainStylesFunc(defaultProps, newProps, func, func2).forEach(
                (obj: any) => {
                    mix = { ...mix, ...obj };
                },
            );
            return <DefaultComp {...mix} />;
        };
    };
};

const separateFuncOne = (obj1: any, obj2: any, key: any) => {
    return obj1[key] || obj2[key];
};

const concatStylesMulti = (obj1: any, obj2: any, key: string) => {
    if (key === "o") {
        return {
            s: __.style(obj1[key].o.s).style(obj2[key].s).oss,
        };
    }
    if (typeof obj1[key] === "string") {
        return `${obj1[key]} ${obj2[key]}`;
    }
    if (Array.isArray(obj1[key])) {
        if (obj1[key][1] === "replace") {
            return obj1[key][0];
        }
    }
    return obj1[key].style(obj2[key].o.s);
};

export const concatStyleMulti = concatFunc(concatStylesMulti, separateFuncOne);
