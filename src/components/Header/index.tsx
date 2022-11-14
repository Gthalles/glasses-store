import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import Text from "../Text";
import IconContainer from "../IconContainer";
import Container from "../Container";

function Header () {
	return (
		<S.Header>
			<Container
				flex
				alignItems="center"
				justifyContent="space-between"
				margin="auto"
				width="calc(100% - 40px)"
			>
				<Link to="/">
					<Text
						text="Glasses Store"
						color={colors.primary}
						size="30px"
						weight={900}
					/>
				</Link>

				<Container flex height="50px" alignItems="center">
					<IconContainer
						externalIcon="person"
						margin="auto 5px"
						size={35}
						color={colors.primary}
						linkReference="/welcome"
					/>

					<IconContainer
						externalIcon="shopping_cart"
						margin="auto 5px"
						size={35}
						color={colors.primary}
					/>
				</Container>
			</Container>
		</S.Header>
	);
}

export default Header;