import styled from "@emotion/styled";

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
    margin: 16px;
    width: 40px;
    height: 20px;
    border: 1px solid gray;
    cursor: pointer;
`;