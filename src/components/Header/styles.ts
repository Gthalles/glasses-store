import styled from "styled-components";
import colors from "../../styles/colors";

export const Header = styled.header`
    display: flex;
    width: 100%;
    border-bottom: 1px solid;
    border-color: ${colors.primary};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: calc(100% - 40px);
    max-width: 1440px;
    height: 50px;
`;