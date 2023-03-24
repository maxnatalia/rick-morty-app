import { Link } from "react-router-dom";
import styled from "styled-components";

export const CharacterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
    justify-content: center;
    grid-gap: 70px;
    text-align: center;
    padding: 40px;

    @media (max-width: 767px) {
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
    border-radius: 40px;
    border: 1px solid black;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: translateY(-10px) scale(1.1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        filter: brightness(110%);
    }

    @media (max-width: 767px) {
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
    background: rgba(66, 68, 90, .8);
    border-radius: 20px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 100px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    border: 1px solid black;
    position: absolute;
    top: -50px;
    left: -30px;

    @media (max-width: 767px) {
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
    background: rgba(66, 68, 90, .5);

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

export const CharacterType = styled.p`
    margin: 0;
`;