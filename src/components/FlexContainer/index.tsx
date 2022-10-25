import React, { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
    children: ReactNode;
	margin?: string;
	padding?: string;
	width?: string;
	height?: string;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
	backgroundColor?: string;
}

function FlexContainer ({ children, direction, alignItems, justifyContent, margin = "", padding = "", width = "", height = "", backgroundColor }: IProps) {

	return (
		<S.FlexContainer
			margin={margin}
			padding={padding}
			width={width}
			height={height}
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
			backgroundColor={backgroundColor}
		>
			{children}
		</S.FlexContainer>
	);
}

export default FlexContainer;