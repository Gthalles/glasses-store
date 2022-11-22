import React from "react";
import * as S from "./styles";
import BackgroundPaper from "../../components/BackgroundPaper";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Text from "../../components/Text";
import IconContainer from "../../components/IconContainer";
import colors from "../../styles/colors";
import Button from "../../components/Button";

function AfterSales() {
    const text =
        "Sua compra foi concluída e a entrega esta prevista para daqui 3 dias.";
    const text1 =
        "A Glasses Store agradece novamente pela sua preferencia e confiança. Qualquer dúvida entre em contato com o nosso time de suporte pelo email suporte@glasses.store.com";

    return (
        <BackgroundPaper>
            <Header />
            <Container
                flex
                direction="column"
                alignItems="center"
                margin="0 auto 100px auto"
                width="75%"
                height="calc(100% - 51px)"
            >
                <Container flex direction="column" margin="50px 0 25px 0">
                    <IconContainer
                        externalIcon="check_circle"
                        size={80}
                        margin="0 0 25px 0"
                        color={colors.success}
                        isHoverable={false}
                    />
                    <Text
                        text="Muito obrigado!"
                        size="50px"
                        weight={600}
                        align="center"
                        color={colors.primary}
                    />
                </Container>
                <Container
                    flex
                    direction="column"
                    alignItems="center"
                    margin="0 auto"
                    width="calc(100% - 200px)"
                >
                    <Text text={text} size="20px" />
                    <Text text={text1} size="20px" />
                </Container>
                <Container
                    flex
                    justifyContent="space-between"
                    margin="50px 0"
                    width="100%"
                    height="200px"
                >
                    <S.Action>
                        <Text
                            text="Continue comprando"
                            size="25px"
                            weight={600}
                            color={colors.primary}
                        />
                        <Button
                            text="Continuar comprando"
                            margin="30px auto"
                            width="calc(100% - 32px)"
                            height="100px"
                            color={colors.light}
                            backgroundColor={colors.success}
                            borderRadius="15px"
                        />
                    </S.Action>

                    <S.Action>
                        <Text
                            text="Acompanhe seu Pedido"
                            size="25px"
                            weight={600}
                            color={colors.primary}
                        />
                        <Button
                            text="Acompanhar pedido"
                            margin="30px auto"
                            width="calc(100% - 32px)"
                            height="100px"
                            color={colors.light}
                            backgroundColor={colors.primary}
                            borderRadius="15px"
                        />
                    </S.Action>
                    <S.Action>
                        <Text
                            text="Siga-nos nas redes sociais"
                            size="25px"
                            weight={600}
                            color={colors.primary}
                        />
                        <Container
                            flex
                            margin="30px auto"
                            width="calc(100% - 10px)"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <IconContainer
                                className="fa fa-instagram"
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
                                className="fa fa-twitter"
                                size={35}
                                color={colors.primary}
                            />
                        </Container>
                    </S.Action>
                </Container>
            </Container>
            <Footer />
        </BackgroundPaper>
    );
}

export default AfterSales;
