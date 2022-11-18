import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const BackgroundPaper = styled.div`
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    margin: auto;
    max-width: 1400px;
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    width: 20%;
    border-right: 1px solid ${colors.primary};
`;

export const Section = styled.section`
    margin: auto 8px;
    width: calc(80% - 16px);
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 50px auto;
    width: 100%;
    max-width: 1400px;
`;
