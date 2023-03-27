import styled from "styled-components";

export const Input = styled.input`
    min-width: 300px;
    padding: 15px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    background: ${({ theme }) => theme.color.mediumColor};
    letter-spacing: 1.7px;
    color: white;

    &::placeholder{
        color: white;
    }
`;