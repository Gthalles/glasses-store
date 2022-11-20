import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const Action = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 200px;
    border: 1px solid ${colors.primary};
    border-radius: 20px;
`;
