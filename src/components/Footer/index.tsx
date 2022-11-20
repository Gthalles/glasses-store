import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";
import IconContainer from "../IconContainer";
import Container from "../Container";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <S.Footer>
            <Container
                flex
                margin="auto"
                width="calc(100% - 40px)"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Container
                    flex
                    margin="30px auto"
                    width="100%"
                    height="250px"
                    direction="column"
                    alignItems="center"
                >
                    <a
                        target="_blank"
                        href="https://www.google.com.br/maps/dir//Av.+Alberto+Carazzai,+1640+-+Centro,+Corn%C3%A9lio+Proc%C3%B3pio+-+PR,+86300-000/@-24.3255114,-50.6494976,15z"
                        rel="noreferrer"
                    >
                        <Text
                            text="Av. Alberto Carazzai, 1640 - Centro, Cornélio Procópio - PR, 86300-000"
                            align="left"
                            color={colors.primary}
                            size="16px"
                        />
                    </a>

                    <Text
                        text="Loja virtual e consultoria para óculos e lentes de contato."
                        align="left"
                        color={colors.primary}
                        size="18px"
                    />

                    <Container
                        flex
                        margin="50px auto"
                        width="calc(100% - 500px)"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <IconContainer
                            className="fa fa-whatsapp"
                            size={35}
                            color={colors.primary}
                        />

                        <IconContainer
                            className="fa fa-linkedin"
                            size={35}
                            color={colors.primary}
                        />

                        <IconContainer
                            className="fa fa-facebook"
                            size={35}
                            color={colors.primary}
                        />

                        <IconContainer
                            className="fa fa-instagram"
                            size={35}
                            color={colors.primary}
                        />
                    </Container>
                    <Link to="/">
                        <Text
                            text="© 2022 Glasses Store. Todos os direitos reservados."
                            align="left"
                            color={colors.primary}
                            size="16px"
                            weight={600}
                        />
                    </Link>
                </Container>
            </Container>
        </S.Footer>
    );
}

export default Footer;
