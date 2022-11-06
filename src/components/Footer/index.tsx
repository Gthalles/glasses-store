import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";
import IconContainer from "../IconContainer";
import Container from "../Container";

function Footer() {
	return (
		<S.Footer>
			<Container
				flex margin="auto"
				width="calc(100% - 40px)" direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<Container flex margin="30px auto" width="100%" height="250px" direction="column" alignItems="center">
					<Text
						text="Av. Alberto Carazzai, 1640 - Centro, Cornélio Procópio - PR, 86300-000"
						align="left"
						color={colors.primary}
						size="16px"
					/>

					<Text
						text="Loja virtual e consultoria para óculos e lentes de contato."
						align="left"
						color={colors.primary}
						size="18px"
					/>

					<Container flex margin="50px auto" width="calc(100% - 500px)" justifyContent="space-evenly" alignItems="center">
						<IconContainer
							className="fa fa-whatsapp"
							size={35}
							color={colors.primary}
						/>

						<IconContainer
							className="fa fa-linkedin"
							size={35}
							color={colors.primary}
						/>

						<IconContainer
							className="fa fa-facebook"
							size={35}
							color={colors.primary}
						/>

						<IconContainer
							className="fa fa-instagram"
							size={35}
							color={colors.primary}
						/>
					</Container>
					<Text
						text="© 2022 Glasses Store. Todos os direitos reservados."
						align="left"
						color={colors.primary}
						size="16px"
						weight={600}
					/>
				</Container>
			</Container>
		</S.Footer>
	);
}

export default Footer;