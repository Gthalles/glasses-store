import styled from "@emotion/styled";

interface ISelectProps {
    isDisplayed: boolean;
    margin: string | undefined;
    width: string;
    height: string;
    border: string | undefined;
    fontSize: string | undefined;
}

export const Select = styled.select<ISelectProps>`
    display: ${({ isDisplayed }) => (isDisplayed ? "block" : "none")};
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-bottom: ${({ border }) => border};
    font-size: ${({ fontSize }) => fontSize};
`;
