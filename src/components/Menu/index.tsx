import React from "react";
import colors from "../../styles/colors";
import FlexContainer from "../FlexContainer";
import Text from "../Text";
import * as S from "./styles";

function Menu () {
	return (
		<S.Menu>
			<S.MenuContainer>
				<FlexContainer justifyContent="space-between" marginAuto>
					<Text text="Lentes de Contato" weight={600} color={colors.primary} />

					<Text text="Óculos de Sol" weight={600} color={colors.primary} />

					<Text text="Óculos de Grau" weight={600} color={colors.primary} />

					<Text text="Acessórios" weight={600} color={colors.primary} />

					<Text text="Consultar Pedidos" weight={600} color={colors.primary} />
				</FlexContainer>
			</S.MenuContainer>
		</S.Menu>
	);
}

export default Menu;