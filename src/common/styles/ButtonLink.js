import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 20px;
    margin: 40px 80px;
    border: 2px solid black;
    border-radius: 40px;
    font-size: 24px;
    letter-spacing: 2.5px;
    font-weight: 900;
    color: black;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }

    @media (max-width: 767px) {
        margin: 20px 40px;
      
    }
`;