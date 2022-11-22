import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import Text from "../Text";
import IconContainer from "../IconContainer";
import Container from "../Container";
import ShoppingCart from "../../components/ShoppingCart";
import { cartSlice, cartState } from "../../redux/slices/cart";
import useReduxDispatch from "../../hooks/useReduxSelector";
import useReduxSelector from "../../hooks/useReduxDispatch";

function Header() {
    const dispatch = useReduxDispatch();
    const cart = useReduxSelector(cartState);

    return (
        <>
            <S.Header>
                <Container
                    flex
                    alignItems="center"
                    justifyContent="space-between"
                    margin="auto"
                    width="calc(100% - 40px)"
                >
                    <Link to="/">
                        <Text
                            text="Glasses Store"
                            color={colors.primary}
                            size="30px"
                            weight={900}
                        />
                    </Link>

                    <Container flex height="50px" alignItems="center">
                        <IconContainer
                            externalIcon="person"
                            margin="auto 5px"
                            size={35}
                            color={colors.primary}
                            linkReference="/welcome"
                        />

                        <IconContainer
                            externalIcon="shopping_cart"
                            margin="auto 5px"
                            size={35}
                            color={colors.primary}
                            onclick={() =>
                                dispatch(cartSlice.actions.setOpen(true))
                            }
                        />
                    </Container>
                </Container>
            </S.Header>
            <ShoppingCart
                isOpen={cart.isOpen}
                onClose={() => dispatch(cartSlice.actions.setOpen(false))}
            />
        </>
    );
}

export default Header;
