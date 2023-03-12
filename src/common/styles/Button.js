import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 35px;
    border-radius: 40px;
    border: 2px solid rgb(217,209,198);
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    background-color: rgb(217,209,198, .7);
    cursor: pointer;
    transition: all .3s ease;

    &:disabled {
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        transform: scale(1.1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }    
`;