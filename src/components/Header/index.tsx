import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";
import IconContainer from "../IconContainer";
import FlexContainer from "../FlexContainer";

function Header () {
	return (
		<S.Header>
			<S.Container>
				<Text
					text="Glasses Store"
					color={colors.primary}
					size="30px"
					weight={900}
				/>

				<FlexContainer alignItems="center">
					<IconContainer
						externalIcon="person"
						size={35}
						color={colors.primary}
					/>
					<IconContainer
						externalIcon="shopping_cart"
						size={35}
						color={colors.primary}
					/>
				</FlexContainer>
			</S.Container>
		</S.Header>
	);
}

export default Header;