/* eslint-disable react/require-default-props */
import React from "react";
import Text from "../Text";
import * as S from "./styles";

interface IProps {
    text: string;
    fontSize?: number;
    fontWeight?: number;
    margin?: string;
    width: string | number;
    height: string | number;
    border?: string;
    borderRadius?: string | number;
    backgroundColor?: string;
    onclick?: () => void;
}

function Button({
	// eslint-disable-next-line max-len
	text, margin, width, height, backgroundColor, fontSize, fontWeight, border, borderRadius, onclick,
}: IProps) {
	return (
		<S.Button
			type="button"
			margin={margin || "auto"}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			border={border || "none"}
			borderRadius={borderRadius || "none"}
			onClick={onclick}
		>
			<Text
				text={text}
				size={fontSize || 14}
				weight={fontWeight || 300}
				color="#FFFFFF"
			/>
		</S.Button>
	);
}

export default Button;