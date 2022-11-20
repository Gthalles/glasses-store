import styled from "@emotion/styled";

export const Card = styled.div`
    margin: 8px;
    height: 450px;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 1px 1px 3px 3px;
        transition: 200ms;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 300px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    height: 150px;
`;
