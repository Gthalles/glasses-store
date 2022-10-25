import React from "react";
import colors from "../../styles/colors";
import FlexContainer from "../FlexContainer";
import Text from "../Text";
import * as S from "./styles";

function Menu () {
	return (
		<S.Menu>
			<FlexContainer margin="auto" width="calc(100% - 200px)" height="50px" justifyContent="space-between">
				<Text text="Lentes de Contato" weight={600} color={colors.primary} />

				<Text text="Óculos de Sol" weight={600} color={colors.primary} />

				<Text text="Óculos de Grau" weight={600} color={colors.primary} />

				<Text text="Acessórios" weight={600} color={colors.primary} />

				<Text text="Consultar Pedidos" weight={600} color={colors.primary} />
			</FlexContainer>
		</S.Menu>
	);
}

export default Menu; 