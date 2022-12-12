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
import Input from "../../components/Input";

function Address() {
    return (
        <BackgroundPaper>
            <Header />
            <Container
                flex
                direction="column"
                alignItems="center"
                margin="50px auto 100px auto"
                width="40%"
                height="calc(100% - 51px)"
                border={`1px solid ${colors.primary}`}
            >
                <Container
                    flex
                    alignItems="center"
                    margin="50px 0 auto 50px"
                    width="calc(100% - 100px)"
                >
                    <IconContainer
                        externalIcon="home"
                        size={50}
                        margin="0 15px 0 0"
                        color={colors.primary}
                        isHoverable={false}
                    />
                    <Text
                        text="Endereço"
                        size="40px"
                        weight={600}
                        align="center"
                        color={colors.primary}
                    />
                </Container>

                <Container
                    flex
                    margin="25px auto"
                    width="calc(100% - 100px)"
                    direction="column"
                >
                    <S.FormControl width="calc(100% - 16px)">
                        <Text text="CEP" size="18px" color={colors.primary} />
                        <Input
                            id="cep"
                            outlined="none"
                            height="30px"
                            type="text"
                            width="100%"
                            border="none"
                            borderBottom={`1px solid ${colors.primary}`}
                        />
                    </S.FormControl>

                    <Container flex>
                        <S.FormControl>
                            <Text
                                text="Estado"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="uf"
                                outlined="none"
                                height="30px"
                                type="text"
                                width="100%"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>

                        <S.FormControl>
                            <Text
                                text="Cidade"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="city"
                                outlined="none"
                                height="30px"
                                type="text"
                                width="100%"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>
                    </Container>

                    <S.FormControl width="calc(100% - 16px)">
                        <Text text="Rua" size="18px" color={colors.primary} />
                        <Input
                            id="street"
                            outlined="none"
                            height="30px"
                            type="text"
                            border="none"
                            borderBottom={`1px solid ${colors.primary}`}
                        />
                    </S.FormControl>

                    <Container flex>
                        <S.FormControl width="calc(50% - 16px)">
                            <Text
                                text="Bairro"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="neighborhood"
                                outlined="none"
                                height="30px"
                                type="text"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>

                        <S.FormControl width="calc(20% - 16px)">
                            <Text
                                text="Nº"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="number"
                                outlined="none"
                                height="30px"
                                type="text"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>

                        <S.FormControl width="calc(30% - 16px)">
                            <Text
                                text="Complemento"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="complement"
                                outlined="none"
                                height="30px"
                                type="text"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>
                    </Container>

                    <Button
                        text="Próxima Etapa"
                        width="100%"
                        height="50px"
                        margin="50px auto 16px auto"
                        borderRadius="20px"
                        fontSize="20px"
                        color="#FFF"
                        backgroundColor={colors.success}
                        linkReference="/payment"
                    />
                </Container>
            </Container>
            <Footer />
        </BackgroundPaper>
    );
}

export default Address;
