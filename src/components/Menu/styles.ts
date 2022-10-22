import styled from "styled-components";
import colors from "../../styles/colors";

export const Menu = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid;
    border-color: ${colors.primary};
`;

export const MenuContainer = styled.div`
    margin: auto;
    width: calc(100% - 200px);
    max-width: 1440px;
    height: 50px;
`;
