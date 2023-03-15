import styled from "styled-components";
import { Link } from "react-router-dom";

export const Tag = styled(Link)`
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid rgb(217,209,198);
    border-radius: 40px;
    background-color: rgba(66, 68, 90, .9);
    color: rgb(217,209,198);
    transition: all .3s ease;

    &:hover {
        filter: brightness(120%);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }

    @media (max-width: 767px) {
        font-size: 14px;
        padding: 5px 10px;
    }
`;

