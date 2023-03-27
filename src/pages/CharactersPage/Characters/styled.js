import { Link } from "react-router-dom";
import styled from "styled-components";

export const CharacterContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
    justify-content: center;
    grid-gap: 60px;
    text-align: center;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        padding: 20px;
    }
`;

export const CharacterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: translateY(-10px) scale(1.1);
        box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
        filter: brightness(110%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 20px;
    }
`;

export const CharacterLink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    text-decoration: none;
    color: white;
    flex: 1;
`;

export const CharacterName = styled.h3`
    margin: 0;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 24px;
    letter-spacing: 2px;
    align-self: flex-end;
    background: ${({ theme }) => theme.color.darkColor};
    border-radius: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 20px;
    }
`;

export const Image = styled.img`
    border-radius: ${({ theme }) => theme.borderRadius.big};
    width: 100px;
    box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    position: absolute;
    top: -50px;
    left: -30px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 80px;
        left: -15px
    }
`;

export const CharacterData = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
    font-size: 20px;
    line-height: 1.7;
    letter-spacing: 3px;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.mediumColor};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 14px;
    }
`;

export const CharacterType = styled.p`
    margin: 0;
`;