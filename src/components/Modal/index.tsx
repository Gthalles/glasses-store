import React, { ReactNode } from "react";
import * as S from "./styles";
import colors from "../../styles/colors";

interface IProps {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    width: string;
    height: string;
}

function Modal({ children, isOpen, onClose, width, height }: IProps) {
    return (
        <S.ExternalModal open={isOpen} onClose={onClose}>
            <S.ModalContainer
                width={width}
                height={height}
                backgroundColor={colors.light}
            >
                {children}
            </S.ModalContainer>
        </S.ExternalModal>
    );
}

export default Modal;
