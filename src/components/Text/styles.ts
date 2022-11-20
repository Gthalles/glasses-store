import styled from "@emotion/styled";

interface ITextProps {
    size?: string;
    align?: string;
    transform: string;
    weight?: number;
    color?: string;
}

export const Text = styled.span<ITextProps>`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: ${({ size }) => size};
    text-transform: ${({ transform }) => transform};
    text-align: ${({ align }) => align};
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
`;
