import React from "react";
import * as S from "./styles";
import colors from "../../../styles/colors";
import Text from "../../Text";
import FlexContainer from "../../FlexContainer";

function BrandFilter() {
	return (
		<FlexContainer
			margin="8px auto"
			width="calc(100% - 32px)"
			backgroundColor="#F9F9F0"
			border={`1px solid ${colors.primary}`}
		>
			<S.BrandFilter>
				<Text text="Selecionar por marca:" size="18px" weight={600} color={colors.primary} align="left" />

				<S.BrandList>
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
					<S.BrandBlock />
				</S.BrandList>

			</S.BrandFilter>
		</FlexContainer>
            
	);
}

export default BrandFilter;
