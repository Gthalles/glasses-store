import styled from "@emotion/styled";

interface IFormControl {
    width?: string;
}

export const FormControl = styled.div<IFormControl>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width ? width : "calc(50% - 16px)"};
    justify-content: space-between;
    margin: 8px;
`;

export const CheckboxControl = styled.div<IFormControl>`
    display: flex;
    align-items: center;
    margin: 8px;
    width: ${({ width }) => width ? width : "calc(50% - 16px)"};
`;
