import styled, { css } from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    gap: 25px;
`;

export const TypeButton = styled.button`
    padding: 10px 15px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: white;
    letter-spacing: 3px;
    background-color: ${({ theme }) => theme.color.mediumColor};
    cursor: pointer;
    transition: all .3s ease;
    border: 2px solid transparent;

    ${({ active }) => active && css`
        border: 2px solid white;
        box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    `}

    &:hover {
        transform: scale(1.1);
        filter: brightness(120%);
        box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    }
`;

