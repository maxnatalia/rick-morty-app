import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 35px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    border: 2px solid ${({ theme }) => theme.color.primaryColor};
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    background-color: ${({ theme }) => theme.color.lightColor};
    cursor: pointer;
    transition: all .3s ease;

    &:disabled {
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        transform: scale(1.1);
        box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    }   
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 10px 20px;
    }
`;