import React from "react";
import * as S from "./styles";
import colors from "../../../styles/colors";
import Text from "../../Text";
import Container from "../../Container";

interface IColor {
    id: string;
    backgroundColor: string;
}

const colorsList: IColor[] = [
    {
        id: "1",
        backgroundColor: "green",
    },
    {
        id: "2",
        backgroundColor: "blue",
    },
    {
        id: "3",
        backgroundColor: "white",
    },
    {
        id: "4",
        backgroundColor: "yellow",
    },
    {
        id: "5",
        backgroundColor: "purple",
    },
    {
        id: "6",
        backgroundColor: "gray",
    },
    {
        id: "7",
        backgroundColor: "black",
    },
    {
        id: "8",
        backgroundColor: "pink",
    },
    {
        id: "9",
        backgroundColor: "red",
    },
    {
        id: "10",
        backgroundColor: "orange",
    },
    {
        id: "11",
        backgroundColor: "brown",
    },
    {
        id: "12",
        backgroundColor: "brown",
    },
    {
        id: "13",
        backgroundColor: "aliceblue",
    },
    {
        id: "14",
        backgroundColor: colors.tertiary,
    },
    {
        id: "15",
        backgroundColor: colors.primary,
    },
    {
        id: "16",
        backgroundColor: colors.secondary,
    },
];

function ColorFilter() {
    return (
        <Container
            flex
            margin="8px auto"
            width="calc(100% - 32px)"
            backgroundColor="#F9F9F0"
            border={`1px solid ${colors.primary}`}
        >
            <S.ColorFilter>
                <Text
                    text="Selecionar por cor:"
                    size="18px"
                    weight={600}
                    color={colors.primary}
                    align="left"
                />

                <S.ColorsList>
                    {colorsList.map((color: IColor) => (
                        <S.ColorBlock
                            key={color.id}
                            backgroundColor={color.backgroundColor}
                        />
                    ))}
                </S.ColorsList>
            </S.ColorFilter>
        </Container>
    );
}

export default ColorFilter;
