import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Container from "../Container";
import Text from "../Text";
import { IGlasses } from "../../models/IGlasses";

function Card(props: IGlasses) {
    return (
        <S.Card>
            <S.CardImage src={props.image} />
            <Container
                flex
                direction="column"
                justifyContent="space-between"
                width="100%"
                height="150px"
                padding="16px"
            >
                <Text
                    text={props.name}
                    size="20px"
                    color={colors.primary}
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
            </Container>
        </S.Card>
    );
}

export default Card;
