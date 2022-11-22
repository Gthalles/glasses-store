import styled from "@emotion/styled";
import colors from "../../styles/colors";

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
