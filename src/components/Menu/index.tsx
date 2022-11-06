import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Container from "../Container";
import Text from "../Text";

function Menu () {
	return (
		<S.Menu>
			<Container
				flex
				justifyContent="space-between"
				margin="auto"
				width="calc(100% - 400px)"
				height="50px"
			>
				<Text text="Lentes de Contato" weight={600} color={colors.primary} />

				<Text text="Óculos de Sol" weight={600} color={colors.primary} />

				<Text text="Óculos de Grau" weight={600} color={colors.primary} />

				<Text text="Consultar Pedidos" weight={600} color={colors.primary} />
			</Container>
		</S.Menu>
	);
}

export default Menu; 