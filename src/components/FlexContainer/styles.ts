import styled from "styled-components";

interface IFlexContainerProps {
    children: any;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
`;