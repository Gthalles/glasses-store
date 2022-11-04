import styled from "styled-components";
import colors from "../../styles/colors";

export const BannerContainer = styled.div`
    display: flex;
    margin: auto;
    max-width: 1400px;
    background-color: ${colors.secondary};
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    min-width: 300px;
    width: 50%;
    background-color: #e4e9ea;
`;