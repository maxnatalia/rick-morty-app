import styled, { css } from "styled-components";

export const Title = styled.h2`
    font-family: 'Creepster', cursive;
    margin: 0;
    text-align: center;
    padding: 20px;
    font-size: 70px;
    letter-spacing: 4px;
    text-shadow: 4px 4px 6px ${({ theme }) => theme.color.secondaryColor};
    color: ${({ theme }) => theme.color.primaryColor};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 42px;
        text-align: left;
    }

    ${({ big }) => big && css`
        font-size: 80px;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
            text-align: center;
        }
    `}
`;