import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";
import IconContainer from "../IconContainer";
import FlexContainer from "../FlexContainer";

function Header () {
	return (
		<S.Header>
			<FlexContainer width="calc(100% - 40px)" margin="auto" justifyContent="space-between" alignItems="center">
				<Text
					text="Glasses Store"
					color={colors.primary}
					size="30px"
					weight={900}
				/>

				<FlexContainer height="50px" alignItems="center">
					<IconContainer
						externalIcon="person"
						margin="auto 5px"
						size={35}
						color={colors.primary}
					/>

					<IconContainer
						externalIcon="shopping_cart"
						margin="auto 5px"
						size={35}
						color={colors.primary}
					/>
				</FlexContainer>
			</FlexContainer>
		</S.Header>
	);
}

export default Header;