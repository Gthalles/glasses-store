/* eslint-disable react/require-default-props */
import React from "react";
import * as S from "./styles";

interface IProps {
    text?: string;
    size?: string;
    align?: string;
    transform?: string;
    weight?: number;
    color?: string;
}

function Text({
    text,
    color,
    size,
    align = "center",
    transform = "initial",
    weight = 300,
}: IProps) {
    return (
        <S.Text
            color={color}
            size={size}
            align={align}
            weight={weight}
            transform={transform}
        >
            {text}
        </S.Text>
    );
}

export default Text;
