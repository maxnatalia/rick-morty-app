import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 260px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 20px;
    margin: 20px;
    border: 2px solid ${({ theme }) => theme.color.primaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-size: 24px;
    letter-spacing: 2.5px;
    font-weight: 900;
    background-color: ${({ theme }) => theme.color.lightColor};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    color: ${({ theme }) => theme.color.secondaryColor};
    cursor: pointer;
    transition: all .3s ease;
    position: relative;

    ${({ fav }) => fav && css`
        width: auto;
        border-radius: ${({ theme }) => theme.borderRadius.big};
        position: fixed;
        top:0;
        right: 0;
        z-index: 10;
        padding: 5px 10px;
        margin: 10px;
    `}

    &:hover {
        transform: scale(1.1);
        box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin: 10px;
        font-size: 18px;
    }
`;