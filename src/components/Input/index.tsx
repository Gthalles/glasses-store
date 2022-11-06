/* eslint-disable react/require-default-props */
import React from "react";
import * as S from "./styles";

interface IProps {
	id: string;
	type: string;
	margin?: string;
	width?: string;
	height?: string;
	color?: string;
	backgroundColor?: string;
	border?: string;
	borderBottom?: string;
	outlined?: string;
	onchange?: (event: any) => void;
}

function Input({
	id, type,
	margin,
	width,
	height,
	color,
	backgroundColor,
	border,
	borderBottom,
	outlined,
	onchange,
}: IProps) {
	return (
		<S.Input
			id={id}
			type={type}
			margin={margin}
			width={width}
			height={height}
			color={color}
			backgroundColor={backgroundColor}
			border={border}
			borderBottom={borderBottom}
			outlined={outlined}
			onChange={onchange}
		/>
	);
}

export default Input;
