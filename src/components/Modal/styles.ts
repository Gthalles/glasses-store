import styled from "@emotion/styled";
import { Modal } from "@mui/material";

interface IModalProps {
    backgroundColor: string | undefined;
    width: string;
    height: string;
}

export const ExternalModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(122, 122, 122, 0.5);
`;

export const ModalContainer = styled("main")<IModalProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) => backgroundColor};
    outline: 0;
`;
