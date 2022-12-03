import React from "react";
import colors from "../../styles/colors";
import * as S from "./styles";
import Container from "../../components/Container";
import bannerImage from "../../assets/images/image7.png";
import Text from "../../components/Text";
import Button from "../../components/Button";

function Welcome() {
    const text = `Seja muito bem-vindo (a) ao nosso site. A Glasses Store é uma empresa de Cornélio Procópio, do ramo óptico, que atua principalmente na consultoria e venda online de lentes e óculos. Nossa meta atual é fazer com que você usufrua de nossos produtos de forma performática, duradoura e confortável. Para isso, trabalhamos com diversas marcas de armações do mercado e com base nas suas especificações, necessidades e preferencias, desenvolvemos óculos de grau e lentes de contato projetadas sobre medida para você. Caso tenha interesse neste atendimento personalizado, clique no botão “Especificar”. Caso queira prosseguir com um procedimento padrão de compra online, clique em “Prosseguir”.`;

    return (
        <Container
            flex
            margin="auto"
            width="100%"
            height="100vh"
            backgroundColor={colors.primary}
        >
            <Container
                flex
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                width="65%"
            >
                <Container margin="auto" height="100px">
                    <Text
                        text="Glasses Store"
                        size="100px"
                        weight={600}
                        color={colors.light}
                        align="center"
                    />
                </Container>

                <Container
                    flex
                    direction="column"
                    margin="auto"
                    width="80%"
                    height="400px"
                >
                    <Text text={text} color={colors.light} size="22px" align="justify" />

                    <Container flex justifyContent="space-evenly" margin="72px auto" width="372px">
                        <Button
                            text="Especificar"
                            color={colors.primary}
                            fontSize="20px"
                            fontWeight={500}
                            width="150px"
                            height="50px"
                            backgroundColor={colors.light}
                            borderRadius="7px"
                            linkReference="/preferences"
                        />
                        <Button
                            text="Prosseguir"
                            color={colors.light}
                            fontSize="20px"
                            fontWeight={500}
                            width="150px"
                            height="50px"
                            backgroundColor="transparent"
                            border={`2px solid ${colors.light}`}
                            borderRadius="7px"
                            linkReference="/main"
                        />
                    </Container>
                </Container>
            </Container>

            <Container flex direction="column" width="35%">
                <S.Banner src={bannerImage} alt="home image" />
            </Container>
        </Container>
    );
}

export default Welcome;
