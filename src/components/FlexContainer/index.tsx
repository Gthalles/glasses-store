import React from "react";
import * as S from "./styles";

interface IProps {
    children: any;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
}

function FlexContainer ({ children, direction, alignItems, justifyContent}: IProps) {
	return (
		<S.FlexContainer
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
            
		>
			{children}
		</S.FlexContainer>
	);
}

export default FlexContainer;