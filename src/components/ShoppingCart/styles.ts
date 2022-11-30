import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 10px auto;
    width: calc(100% - 64px);
    height: 51px;
    border-bottom: 1px solid #ccc;
`;

export const HeaderInformation = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    height: 100%;
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto 0 auto;
    width: 100%;
`;

export const Product = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    margin: 8px auto;
`;

export const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 16px;
    border-radius: 16px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 100px auto;
    width: calc(100% - 64px);
    height: 100%;
    background-color: red;
`;
