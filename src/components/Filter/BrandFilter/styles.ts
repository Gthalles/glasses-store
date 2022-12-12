import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const BrandFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px auto 10px auto;
    padding: 0 16px;
    width: calc(100% - 16px);
`;

export const BrandList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(56px, 1fr));
    margin: 20px auto 10px auto;
    width: 100%;
`;

export const BrandBlock = styled.div`
    margin: 4px;
    width: 65px;
    height: 30px;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid ${colors.secondary};
        transition: 1000ms;
    }
`;
