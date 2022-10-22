import { ReactNode } from "react";
import styled from "styled-components";

interface IFlexContainerProps {
    children: ReactNode;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
    marginAuto: boolean;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    margin: ${({ marginAuto }) => marginAuto ? "auto" : 0};
    max-width: 1440px;
    height: 100%;
`;