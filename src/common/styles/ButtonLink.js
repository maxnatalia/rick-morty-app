import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 20px;
    margin-left: 30px;
    margin-bottom: 30px;
    border: 2px solid rgb(217,209,198);
    border-radius: 40px;
    font-size: 24px;
    letter-spacing: 2.5px;
    font-weight: 900;
    background-color: rgb(217,209,198, .7);
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    color: black;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }

    @media (max-width: 767px) {
        margin: 20px;
        font-size: 18px;
    }
`;