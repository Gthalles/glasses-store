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

function Payment() {
    return (
        <BackgroundPaper>
            <Header />
            <Container
                flex
                direction="column"
                alignItems="center"
                margin="50px auto 100px auto"
                width="30%"
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
                        externalIcon="shopping_cart_checkout"
                        size={50}
                        margin="0 15px 0 0"
                        color={colors.primary}
                        isHoverable={false}
                    />
                    <Text
                        text="Pagamento"
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
                        <Text
                            text="Número do Cartão"
                            size="18px"
                            color={colors.primary}
                        />
                        <Input
                            id="card_number"
                            outlined="none"
                            height="30px"
                            type="text"
                            width="100%"
                            border="none"
                            borderBottom={`1px solid ${colors.primary}`}
                        />
                    </S.FormControl>

                    <Container flex>
                        <S.FormControl width="calc(70% - 16px)">
                            <Text
                                text="Validade"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="validity"
                                outlined="none"
                                height="30px"
                                type="text"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>
                        <S.FormControl width="calc(30% - 16px)">
                            <Text
                                text="CVC"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="cvc"
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
                        <Text
                            text="Nome do Títular"
                            size="18px"
                            color={colors.primary}
                        />
                        <Input
                            id="owner_name"
                            outlined="none"
                            height="30px"
                            type="text"
                            width="100%"
                            border="none"
                            borderBottom={`1px solid ${colors.primary}`}
                        />
                    </S.FormControl>

                    <Button
                        text="Concluir Compra"
                        width="100%"
                        height="50px"
                        margin="50px auto 16px auto"
                        borderRadius="20px"
                        fontSize="20px"
                        color="#FFF"
                        backgroundColor={colors.success}
                        linkReference="/completed-purchase"
                    />
                </Container>
            </Container>
            <Footer />
        </BackgroundPaper>
    );
}

export default Payment;
