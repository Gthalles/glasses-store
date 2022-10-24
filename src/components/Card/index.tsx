import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";
import { IGlasses } from "../../models/IGlasses";

function Card (props: IGlasses) {
	return (
		<S.Card key={props.id}>
			<S.CardImage src={props.image} />
			<S.CardInfo>
				<Text
					text={props.name}
					size="20px"
					color={colors.tertiary}
					weight={600}
					align="left"
				/>
				<Text
					text={props.brand}
					size="15px"
					color={colors.text}
					weight={600}
				/>
				<Text
					text={`${props.category} ${props.color}`}
					size="15px"
					color={colors.text}
				/>
				<Text
					text={`R$ ${props.price},99`}
					size="22px"
					color={colors.text}
				/>
			</S.CardInfo>
		</S.Card>
	);
}

export default Card;