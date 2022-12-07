import React from "react";
import colors from "../../styles/colors";
import * as S from "./styles";
import Modal from "../Modal";
import IconContainer from "../IconContainer";
import Text from "../Text";
import Button from "../Button";
import Container from "../Container";
import glasses from "../../products/glasses";
import { IShoppingCart } from "../../models/IShoppingCart";
import { IGlasses } from "../../models/IGlasses";
import { Divider } from "@mui/material";

interface IShoppingCartProps {
    isOpen: boolean;
    onClose: () => void;
}

function ShoppingCart(props: IShoppingCartProps) {
    const shoppingCartProducts: IShoppingCart = {
        id: 1,
        glasses: [glasses[0], glasses[1]],
        total: 120,
    };

    return (
        <Modal
            isOpen={props.isOpen}
            width="500px"
            height="100vh"
            onClose={props.onClose}
        >
            <S.Header>
                <S.HeaderInformation>
                    <IconContainer
                        externalIcon="shopping_cart"
                        size={30}
                        color={colors.secondary}
                        margin="0 20px 0 0"
                    />
                    <Text
                        text="Meu carrinho"
                        size="24px"
                        color={colors.primary}
                    />
                </S.HeaderInformation>

                <IconContainer
                    externalIcon="close"
                    color={colors.text}
                    size="28px"
                    isHoverable={false}
                    onclick={props.onClose}
                />
            </S.Header>

            <Container
                flex
                direction="column"
                justifyContent="space-between"
                width="100%"
                height="100%"
            >
                <S.ProductsContainer>
                    {shoppingCartProducts.glasses?.map((product: IGlasses) => {
                        if (!product) {
                            return (
                                <Text
                                    key="1"
                                    text="Sem produtos no carrinho.."
                                />
                            );
                        }

                        return (
                            <Container
                                key={product.id}
                                flex
                                margin="25px auto 25px auto"
                                width="calc(100% - 64px)"
                                height="120px"
                                padding="10px 10px 0px 10px"
                                borderBottom={`1px solid ${colors.primary}`}
                            >
                                <S.ProductImage src={product.image} />
                                <Container
                                    flex
                                    direction="column"
                                    justifyContent="space-between"
                                    margin="auto"
                                    width="calc(100% - 64px)"
                                    height="90px"
                                >
                                    <Container
                                        flex
                                        justifyContent="space-between"
                                        width="100%"
                                        height="20px"
                                    >
                                        <Text
                                            text={product.name}
                                            color={colors.primary}
                                            size="16px"
                                        />
                                        <IconContainer
                                            externalIcon="close"
                                            color={colors.primary}
                                            size={18}
                                            isHoverable={false}
                                        />
                                    </Container>
                                    <Container
                                        flex
                                        justifyContent="space-between"
                                        width="100%"
                                        height="20px"
                                    >
                                        <Text
                                            text="Quantidade: 1"
                                            color={colors.primary}
                                            size="18px"
                                        />
                                        <Text
                                            text={`R$ ${product.price}`}
                                            color={colors.primary}
                                            size="20px"
                                        />
                                    </Container>
                                </Container>
                                <Divider />
                            </Container>
                        );
                    })}
                </S.ProductsContainer>

                <Container
                    flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    margin="0 0 100px 0"
                    width="100%"
                    height="150px"
                >
                    <Container
                        flex
                        justifyContent="space-between"
                        margin="auto"
                        width="calc(100% - 64px)"
                    >
                        <Text
                            text="Subtotal:"
                            size="20px"
                            color={colors.primary}
                        />
                        <Text
                            text="R$ 135,00"
                            size="20px"
                            color={colors.primary}
                        />
                    </Container>
                    <Button
                        text="Finalizar Compra"
                        width="400px"
                        height="50px"
                        margin="50px 0 16px 0"
                        borderRadius="20px"
                        fontSize="20px"
                        color="#FFF"
                        backgroundColor={colors.success}
                        linkReference="/contact"
                        onclick={props.onClose}
                    />
                </Container>
            </Container>
        </Modal>
    );
}

export default ShoppingCart;
