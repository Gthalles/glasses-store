import React from "react";
import colors from "../../styles/colors";
import * as S from "./styles";
import Carousel from "react-material-ui-carousel";
import Container from "../Container";
import Button from "../Button";

interface IItem {
    name: string;
    image: string;
    description: string;
}

function Item(item: IItem) {
    return (
        <Container
            flex
            direction="column"
            margin="16px auto"
            width="calc(100% - 32px)"
            height="100%"
        >
            <S.Image src={item.image} alt="Produto popular" />

            <Button
                text="Ver mais"
                margin="8px auto"
                width="95px"
                height="30px"
                borderRadius="5px"
                backgroundColor={colors.secondary}
            />
        </Container>
    );
}

function BestSellers() {
    const items = [
        {
            name: "Random Name #1",
            image: "https://img.ltwebstatic.com/images3_pi/2022/06/08/1654671143b0aa893d1dc5ca4f1dc9f0fe58ff45f7_thumbnail_600x.webp",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Random Name #2",
            image: "https://img.lojadomecanico.com.br/IMAGENS/64/876/187252172/oculosdeso-idany-1649516548.JPG",
            description: "Hello World!",
        },
    ];

    return (
        <Carousel>
            {items.map((item: IItem) => (
                <Item
                    key={item.name}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                />
            ))}
        </Carousel>
    );
}

export default BestSellers;
