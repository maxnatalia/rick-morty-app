import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "./background.png";

export const Container = styled.div`
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, black, white), url("${background}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 56px;
    letter-spacing: 4px;
    text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
`;

export const WrapperLink = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    padding: 25px 30px;
    border: 4px solid black;
    border-radius: 40px;
    font-size: 24px;
    letter-spacing: 2.5px;
    font-weight: 900;
    color: black;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: translateX(-20px) scale(1.1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }
`;
