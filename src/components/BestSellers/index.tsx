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
                backgroundColor={colors.success}
                color="#FFF"
            />
        </Container>
    );
}

function BestSellers() {
    const items = [
        {
            name: "Clubmaster RB3016 W0365 4N",
            image: "https://img.ltwebstatic.com/images3_pi/2022/06/08/1654671143b0aa893d1dc5ca4f1dc9f0fe58ff45f7_thumbnail_600x.webp",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Óculos da Shein de armação redonda",
            image: "https://img.ltwebstatic.com/images3_pi/2022/05/31/1653964867c0b960fc22e80a4929a0880e2d253714_thumbnail_600x.webp",
            description: ""
        },
        {
            name: "Óculos de sol minimalista",
            image: "https://img.ltwebstatic.com/images3_pi/2022/04/07/1649303186100416bb85fb203be1c4e586c98dcd62_thumbnail_600x.webp",
            description: ""
        }
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
