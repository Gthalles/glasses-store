import styled from "styled-components";

interface IColor {
    backgroundColor: string;
}

export const ColorFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px auto 10px auto;
    width: calc(100% - 16px);
`;

export const ColorsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(36px, 1fr));
    margin: 20px auto 10px auto;
    width: calc(100% - 16px);
`;

export const ColorBlock = styled.div<IColor>`
    margin: 16px;
    width: 20px;
    height: 20px;
    background-color: ${({ backgroundColor}) => backgroundColor };
    border: 1px solid gray;
`;