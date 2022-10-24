import styled from "styled-components";
import colors from "../../styles/colors";

export const BackgroundPaper = styled.div`
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    margin: auto;
    max-width: 1440px;
`;

export const Aside = styled.aside`
    width: 25%;
    border-right: 1px solid ${colors.primary};
`;

export const Section = styled.section`
    margin: auto 8px;
    width: calc(75% - 16px);
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin: 50px auto;
    width: 100%;
`;
