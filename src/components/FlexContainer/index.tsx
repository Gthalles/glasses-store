import React from "react";
import * as S from "./styles";

interface IProps {
    children: any;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
	marginAuto?: boolean;
}

function FlexContainer ({ children, direction, alignItems, justifyContent, marginAuto = false}: IProps) {
	return (
		<S.FlexContainer
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
			marginAuto={marginAuto}
		>
			{children}
		</S.FlexContainer>
	);
}

export default FlexContainer;