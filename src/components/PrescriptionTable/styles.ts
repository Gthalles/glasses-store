import styled from "@emotion/styled";
import colors from "../../styles/colors";


export const TableContainer = styled.table`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    padding: 5px;
    align-items: center;
    width: 600px;
    height: 200px;
    border: 1px solid ${colors.primary};
`;

export const TableHeader = styled.th`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
    width: 25%;
`;

export const TableRow = styled.tr`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100% - 16px);
    border-bottom: solid 1px;
`;

export const TableData = styled.td`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25%;
`;