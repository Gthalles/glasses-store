/* eslint-disable react/require-default-props */
import React, { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
    children: ReactNode;
    isDisplayed?: boolean;
    margin?: string | undefined;
    width: string;
    height: string;
    border?: string | undefined;
    fontSize?: string;
}

function Select({
    children, isDisplayed = true, margin, width, height, border, fontSize,
}: IProps) {
    return (
        <S.Select
            isDisplayed={isDisplayed}
            margin={margin}
            width={width}
            height={height}
            border={border}
            fontSize={fontSize}
        >
            {children}
        </S.Select>
    );
}

export default Select;
