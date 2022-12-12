import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Container from "../Container";
import Text from "../Text";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <S.Menu>
            <Container
                flex
                justifyContent="space-between"
                margin="auto"
                width="calc(100% - 400px)"
                height="50px"
            >
                <Link to="/sunglasses">
                    <Text
                        text="Óculos de Sol"
                        weight={600}
                        color={colors.primary}
                    />
                </Link>

                <Link to="/eyeglasses">
                    <Text
                        text="Óculos de Grau"
                        weight={600}
                        color={colors.primary}
                    />
                </Link>

                <Link to="/contact-lenses">
                    <Text
                        text="Lentes de Contato"
                        weight={600}
                        color={colors.primary}
                    />
                </Link>

                <Link to="/preferences">
                    <Text
                        text="Preferências"
                        weight={600}
                        color={colors.primary}
                    />
                </Link>
            </Container>
        </S.Menu>
    );
}

export default Menu;
