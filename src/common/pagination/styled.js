import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

`;

export const Button = styled.button`
    padding: 10px 15px;
    border-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all .3s ease;

    &:disabled {
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }
`;

export const PageInfo = styled.span`
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
`;