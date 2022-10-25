import { ReactNode } from "react";
import styled from "styled-components";

interface IFlexContainerProps {
    children: ReactNode;
    margin: string;
    padding: string;
	width: string;
	height: string;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
    backgroundColor?: string;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width};
    max-width: 1440px;
    height: ${({ height }) => height};
`;