import styled from "styled-components";

interface ITextProps {
    size?: string;
    align?: string;
    transform: string;
    weight?: number;
    color?: string;
}

export const Text = styled.span<ITextProps>`
    margin: auto 0;
    height: 100%;
    font-size: ${({size}) => size};
    text-transform: ${({ transform }) => transform};
    text-align: ${({align}) => align};
    font-weight: ${({weight}) => weight};
    color: ${({ color }) => color};
`;
