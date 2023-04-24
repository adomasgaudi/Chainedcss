import React, { FC } from "react";
import NextHead from "next/head";

type Props = {
  title: string;
};

const Head: FC<Props> = ({ title }) => (
  <NextHead>
    <title>{title}</title>
  </NextHead>
);

export default Head;
