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

function Contact() {
    return (
        <BackgroundPaper>
            <Header />
            <Container
                flex
                direction="column"
                alignItems="center"
                margin="50px auto 100px auto"
                width="50%"
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
                        externalIcon="contact_page"
                        size={50}
                        margin="0 15px 0 0"
                        color={colors.primary}
                        isHoverable={false}
                    />
                    <Text
                        text="Contato"
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
                    <Container flex>
                        <S.FormControl>
                            <Text
                                text="Nome:"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="name"
                                outlined="none"
                                type="text"
                                width="100%"
                                height="55px"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>
                        <S.FormControl>
                            <Text
                                text="Sobrenome:"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="lastname"
                                outlined="none"
                                type="text"
                                width="100%"
                                height="55px"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>
                    </Container>

                    <Container flex>
                        <S.FormControl>
                            <Text
                                text="Email:"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="email"
                                outlined="none"
                                type="email"
                                width="100%"
                                height="55px"
                                border="none"
                                borderBottom={`1px solid ${colors.primary}`}
                            />
                        </S.FormControl>
                        <S.FormControl>
                            <Text
                                text="Telefone:"
                                size="18px"
                                color={colors.primary}
                            />
                            <Input
                                id="phone"
                                outlined="none"
                                type="text"
                                width="100%"
                                height="55px"
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
                        linkReference="/address"
                    />
                </Container>
            </Container>
            <Footer />
        </BackgroundPaper>
    );
}

export default Contact;
